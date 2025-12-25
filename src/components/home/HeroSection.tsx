import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Wind, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-wind-turbines.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/919080508426?text=Hello, I'm interested in your wind turbine services.";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-glow" />
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[10%] animate-float opacity-20">
        <Wind className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-[5%] animate-float opacity-15" style={{ animationDelay: '1s' }}>
        <Zap className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-down border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted Wind Energy Partner Since 2024
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Reliable Wind Turbine
              <span className="block text-gradient mt-2">Maintenance & Spares</span>
              <span className="block text-foreground/80 text-3xl md:text-4xl lg:text-5xl mt-2">Solutions</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Minimizing downtime. Maximizing energy output. Your trusted partner for comprehensive wind energy services across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2 group">
                  Get Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="gap-2 group">
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-blur-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated hover-glow transition-all duration-500">
              {/* Decorative frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={heroImage} 
                  alt="Wind turbines generating clean renewable energy in green fields" 
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elevated border border-border/50 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wind className="w-6 h-6 text-primary animate-spin-slow" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">12+</div>
                  <div className="text-xs text-muted-foreground">Expert Technicians</div>
                </div>
              </div>
            </div>

            {/* Another floating card */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-elevated border border-border/50 animate-bounce-in" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">Pan India</div>
                  <div className="text-xs text-muted-foreground">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
            {[
              { value: "12+", label: "Expert Technicians" },
              { value: "100%", label: "Quality Commitment" },
              { value: "24/7", label: "Emergency Support" },
              { value: "Pan India", label: "Service Coverage" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover-lift animate-fade-in-up opacity-0" 
                style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
