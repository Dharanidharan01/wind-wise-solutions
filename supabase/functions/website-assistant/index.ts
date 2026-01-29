import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WEBSITE_CONTEXT = `You are SAECE Assistant, the friendly AI helper for Shri Amogha Energy Care Engineering (SAECE) - a leading wind turbine service and spare parts company with 15+ years of expertise.

COMPANY OVERVIEW:
- Full name: Shri Amogha Energy Care Engineering
- Expertise: Wind turbine maintenance, spare parts, and in-house refurbishment services
- Experience: 15+ years in the wind energy industry
- Focus: Multi-brand wind turbine services

WEBSITE STRUCTURE & PAGES:

1. HOME PAGE (/)
   - Overview of services and company highlights
   - Key promises and brand partnerships

2. COMPANY (/company)
   - About Us: Company history and values
   - Leadership: Meet the team including founder Deepak
   - Career (/career): Job opportunities and how to apply
   - Safety (/safety): Safety protocols and commitment
   - Testimonials (/testimonials): Customer reviews

3. SERVICES (/services)
   - Multi Brand Spares: Spare parts for various wind turbine brands
   - Technical Support: Expert guidance and troubleshooting
   - Inspection & Troubleshooting: Detailed diagnostics
   - Operation & Service: Full operational support
   - Erection & Derection: Installation and decommissioning
   - Call Basis Service: On-demand service support

4. IN-HOUSE CAPABILITIES (/in-house)
   - In-House Specialization (/in-house/specialization)
   - Multi Brand Blade Bearing (/in-house/blade-bearing)
   - Gear Box (/in-house/gearbox)
   - Yaw Gear (/in-house/yaw-gear)
   - Generator (/in-house/generator)
   - Main Bearing (/in-house/main-bearing)
   - Pitch & Yaw System (/in-house/pitch-yaw-system)
   - Lubricants & Hydraulic (/in-house/lubricants)
   - Assembly & Refurbishment (/in-house/assembly)
   - Spares Reconditioning (/in-house/reconditioning)

5. PRODUCTS (/products)
   - Mechanical Components (/products/mechanical)
   - Electrical & Control Spares (/products/electrical)
   - Blade & Rotor Spares (/products/blade-rotor)
   - Yaw & Pitch System Spares (/products/yaw-pitch)
   - Lubricants & Hydraulic Items (/products/lubricants)
   - Fasteners & Consumables (/products/fasteners)
   - Auxiliary & Nacelle Items (/products/auxiliary)

6. CONTACT (/contact)
   - Phone: +91 9080508426
   - Get quotes and inquiries

RESPONSE GUIDELINES:
- Be friendly, professional, and helpful
- Keep responses concise but informative
- When suggesting pages, include the path in your response
- If asked about careers, mention they can apply through the Career page
- For technical queries, suggest contacting the team directly
- If you don't know something specific, suggest contacting the team via phone or the Contact page
- Always offer to help with navigation or finding specific information
- Use emojis sparingly to keep a professional tone

QUICK ACTIONS you can suggest:
- View Services → /services
- Explore Products → /products
- About the Company → /company
- Career Opportunities → /career
- Contact Us → /contact
- Safety Standards → /safety
- In-House Capabilities → /in-house`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: WEBSITE_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please contact us directly." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Unable to process your request. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Website assistant error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
