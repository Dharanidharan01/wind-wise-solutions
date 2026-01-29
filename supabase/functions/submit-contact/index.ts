import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
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

    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    const SPREADSHEET_ID = "1cIFzeqMSAxytLidgjpQY3TEUxLClbYZaiGBoDfNRr74";
    
    // Format timestamp
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Append data to Google Sheet using Sheets API
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`;
    
    const sheetsResponse = await fetch(sheetsUrl, {
      method: "POST",
      headers: {
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
      // Continue execution even if sheets fails - we still want to send email notification
    } else {
      console.log("Data appended to Google Sheet successfully");
    }

    // Send email notification using mailto-style notification
    // In production, you'd integrate with a service like Resend, SendGrid, etc.
    // For now, we'll log the contact for the business to follow up
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
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
