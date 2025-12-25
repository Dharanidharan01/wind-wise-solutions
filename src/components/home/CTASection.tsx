import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Wind } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 gradient-cta relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 animate-float opacity-10">
          <Wind className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <Wind className="w-16 h-16 text-white" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent-foreground font-medium text-sm uppercase tracking-wider mb-6">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6 leading-tight">
            Looking for a Trusted Wind Energy Service Partner?
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our expert team for reliable maintenance, quality spare parts, and 24/7 support for your wind turbines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="gap-2 group shadow-elevated">
                Contact Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+919080508426">
              <Button 
                variant="outline" 
                size="xl" 
                className="gap-2 bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 group"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
