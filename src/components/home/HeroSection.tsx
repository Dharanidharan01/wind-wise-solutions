import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Lightbulb, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-wind-turbines.jpg";

const valueHighlights = [
  {
    icon: Lightbulb,
    title: "Modern & Innovative",
    description: "Smart service for smarter wind power",
  },
  {
    icon: Shield,
    title: "Trust Building",
    description: "Reliable service for high performance wind assets",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Minimizing downtime. Maximizing wind power",
  },
];

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/919080508426?text=Hello, I'm interested in your wind turbine services.";
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Wind turbines generating clean renewable energy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-down border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted Wind Energy Partner Since 2024
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">HIGH QUALITY</span>
            <span className="block text-foreground mt-2">&</span>
            <span className="block text-gradient">RELIABILITY</span>
          </h1>

          {/* Sub-tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed font-medium" style={{ animationDelay: "0.2s" }}>
            Engineered for excellence. Trusted for performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/services">
              <Button variant="hero" size="xl" className="gap-2 group">
                Explore Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="accent" size="xl" className="gap-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Value Highlights Cards */}
        <div className="mt-20 pt-12 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueHighlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover-lift hover-glow animate-fade-in-up opacity-0"
                style={{ 
                  animationDelay: `${0.5 + index * 0.15}s`,
                  animationFillMode: "forwards"
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
