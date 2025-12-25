import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/919080508426?text=Hello, I'm interested in your wind turbine services.";

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted Wind Energy Partner Since 2024
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Reliable Wind Turbine
            <span className="block text-primary">Maintenance & Spares</span>
            Solutions
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Minimizing downtime. Maximizing energy output. Your trusted partner for comprehensive wind energy services across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Get Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
              {[
                { value: "12+", label: "Expert Technicians" },
                { value: "100%", label: "Quality Commitment" },
                { value: "24/7", label: "Emergency Support" },
                { value: "Pan India", label: "Service Coverage" },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
