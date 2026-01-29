import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WEBSITE_CONTEXT = `You are SAECE Assistant, an intelligent and conversational AI helper for Shri Amogha Energy Care Engineering (SAECE) - a leading wind turbine service and spare parts company with 15+ years of expertise.

PERSONALITY:
- Friendly, professional, and genuinely helpful
- Conversational and engaging, not robotic
- Remember context from the conversation and refer back to it
- Proactive in suggesting related topics
- Use occasional emojis to be warm but professional

COMPANY OVERVIEW:
- Full name: Shri Amogha Energy Care Engineering
- Expertise: Wind turbine maintenance, spare parts, and in-house refurbishment services
- Experience: 15+ years in the wind energy industry
- Focus: Multi-brand wind turbine services
- Contact: +91 9080508426, shriamoghaenergycare@gmail.com

WEBSITE STRUCTURE & PAGES:

1. HOME PAGE (/)
   - Overview of services and company highlights
   - Key promises and brand partnerships

2. COMPANY (/company)
   - About Us: Company history and values
   - Leadership: Meet the team - Pandi P (Managing Director) and Deepak (Managing Partner)
   - Career (/career): Job opportunities - Mechanical Engineer, Electrical Engineer, Service Technician, Spare Parts Coordinator
   - Safety (/safety): Safety protocols, PPE standards, zero-incident commitment
   - Testimonials (/testimonials): Customer reviews

3. SERVICES (/services)
   - Multi Brand Spares: Spare parts for Vestas, Pioneer Wincon, NEPC, Siemens Gamesa, NEG Micon, Leit Wind
   - Technical Support: Expert guidance and troubleshooting
   - Inspection & Troubleshooting: Detailed diagnostics
   - Operation & Service: Full operational support
   - Erection & Derection: Installation and decommissioning
   - Call Basis Service: On-demand service support (no long-term contracts)

4. IN-HOUSE CAPABILITIES (/in-house)
   - Blade Bearing repair and refurbishment
   - Gear Box overhaul and reconditioning
   - Yaw Gear precision repair
   - Generator rewinding and refurbishment
   - Main Bearing services
   - Pitch & Yaw System components
   - Lubricants & Hydraulic systems
   - Assembly & complete Refurbishment
   - Spares Reconditioning & Testing

5. PRODUCTS (/products)
   - Mechanical Components: bearings, gears, shafts
   - Electrical & Control Spares: generators, converters, sensors
   - Blade & Rotor Spares: blade components, repair kits
   - Yaw & Pitch System Spares: motors, bearings, controls
   - Lubricants & Hydraulic Items: oils, greases, filters
   - Fasteners & Consumables: bolts, nuts, washers
   - Auxiliary & Nacelle Items: cooling systems, safety equipment

6. CONTACT (/contact)
   - Phone: +91 9080508426, +91 9940718156
   - Email: shriamoghaenergycare@gmail.com
   - 24/7 Emergency Support available

CONVERSATION GUIDELINES:
- Keep responses concise (2-4 sentences typically) but expand when asked for details
- Remember what the user asked previously and build on it
- When suggesting pages, naturally mention you can help them navigate: "I can take you to our Services page if you'd like!"
- For job inquiries: mention current openings and that applications go to shriamoghaenergycare@gmail.com
- For technical queries: offer to explain what you can, then suggest contacting the team for specifics
- If unsure: be honest and offer to connect them with the team
- Suggest related topics: "By the way, you might also be interested in..."
- For first-time visitors: offer a guided tour of the website

BRANDS SUPPORTED:
Vestas, Vestas RRB, Pioneer Wincon, NEPC, Siemens Gamesa, NEG Micon, Leit Wind

KEY DIFFERENTIATORS:
- 15+ years expertise
- Multi-brand support
- In-house repair facility
- 24/7 emergency support
- Quick turnaround
- OEM-equivalent quality`;

const PAGE_SPECIFIC_CONTEXT: Record<string, string> = {
  "/": "The user is on the homepage. Help them discover services and navigate.",
  "/services": "The user is browsing services. Help them understand each offering.",
  "/products": "The user is on products page. Help them find specific parts.",
  "/company": "The user is learning about the company. Share history and values.",
  "/career": "The user is exploring careers. Highlight openings and culture.",
  "/contact": "The user wants to get in touch. Provide contact options.",
  "/safety": "The user is interested in safety. Explain protocols and standards.",
  "/in-house": "The user is exploring in-house capabilities. Explain services.",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, currentPage } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Add page-specific context if available
    let systemPrompt = WEBSITE_CONTEXT;
    if (currentPage) {
      const pageContext = PAGE_SPECIFIC_CONTEXT[currentPage] || 
        Object.entries(PAGE_SPECIFIC_CONTEXT).find(([path]) => currentPage.startsWith(path))?.[1];
      if (pageContext) {
        systemPrompt += `\n\nCURRENT CONTEXT: ${pageContext}`;
      }
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
          { role: "system", content: systemPrompt },
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
