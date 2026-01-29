import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Allowed origins for CORS - restrict to known domains
const allowedOrigins = [
  "https://wind-wise-solutions.lovable.app",
  "https://id-preview--a8b99eee-12a0-4a28-95f8-ed59a4f6ca41.lovable.app",
  "http://localhost:5173",
  "http://localhost:8080",
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && allowedOrigins.some(allowed => 
    origin === allowed || origin.endsWith('.lovable.app')
  ) ? origin : allowedOrigins[0];
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

// Create JWT for Google Service Account
async function createGoogleJWT(serviceAccountKey: any): Promise<string> {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccountKey.client_email,
    sub: serviceAccountKey.client_email,
    aud: "https://sheets.googleapis.com/",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/spreadsheets",
  };

  const encoder = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  // Convert PEM to binary
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  let pemContents = serviceAccountKey.private_key.replace(pemHeader, "").replace(pemFooter, "");
  pemContents = pemContents.replace(/\s/g, "");
  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureInput = encoder.encode(`${headerB64}.${payloadB64}`);
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, signatureInput);
  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${headerB64}.${payloadB64}.${signatureB64}`;
}

// Exchange JWT for access token
async function getAccessToken(serviceAccountKey: any): Promise<string> {
  const jwt = await createGoogleJWT(serviceAccountKey);
  
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Token error: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      throw new Error("Missing required fields");
    }

    const SPREADSHEET_ID = "1cIFzeqMSAxytLidgjpQY3TEUxLClbYZaiGBoDfNRr74";
    
    // Format timestamp
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Get service account key from environment
    const serviceAccountKeyStr = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_KEY");
    
    if (serviceAccountKeyStr) {
      try {
        const serviceAccountKey = JSON.parse(serviceAccountKeyStr);
        const accessToken = await getAccessToken(serviceAccountKey);

        // Append data to Google Sheet
        const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED`;
        
        const sheetsResponse = await fetch(sheetsUrl, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [[
              timestamp,
              formData.name,
              formData.company || "N/A",
              formData.phone,
              formData.email,
              formData.message,
            ]],
          }),
        });

        if (!sheetsResponse.ok) {
          const errorText = await sheetsResponse.text();
          console.error("Google Sheets API error:", errorText);
        } else {
          console.log("Data appended to Google Sheet successfully");
        }
      } catch (sheetError) {
        console.error("Google Sheets error:", sheetError);
      }
    } else {
      console.log("Google Service Account not configured - skipping sheet update");
    }

    // Log the contact for business follow-up
    console.log("New contact form submission:", {
      timestamp,
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    // Log full error details server-side for debugging
    console.error("Contact form error:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    // Return sanitized error message to client - never expose internal details
    const isValidationError = error.message === "Missing required fields";
    const userMessage = isValidationError
      ? "Please fill in all required fields and try again."
      : "Unable to submit your message. Please try again later or contact us directly.";

    return new Response(
      JSON.stringify({
        error: userMessage,
        contact: "shriamoghaenergycare@gmail.com",
      }),
      {
        status: isValidationError ? 400 : 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
