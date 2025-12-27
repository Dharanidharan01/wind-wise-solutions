import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Zap, Shield, Clock, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-wind-turbines.jpg";

const stats = [
  { value: "500+", label: "Turbines Serviced" },
  { value: "99%", label: "Uptime Achieved" },
  { value: "24/7", label: "Support Available" },
];

const WindmillIcon = ({ className, speed = "normal" }: { className?: string; speed?: "slow" | "normal" | "fast" }) => {
  const animationClass = speed === "slow" ? "animate-spin-windmill-slow" : speed === "fast" ? "animate-spin-windmill-fast" : "animate-spin-windmill";
  
  return (
    <div className={`relative ${className}`}>
      {/* Turbine pole */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-primary/60 to-primary/30 rounded-full" />
      {/* Rotating blades */}
      <svg 
        viewBox="0 0 100 100" 
        className={`w-full h-full ${animationClass}`}
        style={{ transformOrigin: 'center center' }}
      >
        {/* Blade 1 */}
        <path 
          d="M50 50 L50 10 Q55 25 50 50" 
          fill="hsl(var(--primary))" 
          opacity="0.9"
        />
        {/* Blade 2 */}
        <path 
          d="M50 50 L84.6 70 Q65 65 50 50" 
          fill="hsl(var(--primary))" 
          opacity="0.8"
        />
        {/* Blade 3 */}
        <path 
          d="M50 50 L15.4 70 Q35 65 50 50" 
          fill="hsl(var(--primary))" 
          opacity="0.7"
        />
        {/* Center hub */}
        <circle cx="50" cy="50" r="6" fill="hsl(var(--accent))" />
        <circle cx="50" cy="50" r="3" fill="hsl(var(--background))" />
      </svg>
    </div>
  );
};

const WindParticle = ({ delay, duration, top }: { delay: number; duration: number; top: string }) => (
  <div 
    className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-wind-flow"
    style={{ 
      top, 
      left: 0, 
      right: 0, 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  />
);

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)` }}
      >
        <img 
          src={heroImage} 
          alt="Wind turbines generating clean renewable energy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated Wind Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WindParticle delay={0} duration={3} top="20%" />
        <WindParticle delay={0.5} duration={4} top="35%" />
        <WindParticle delay={1} duration={3.5} top="50%" />
        <WindParticle delay={1.5} duration={4.5} top="65%" />
        <WindParticle delay={2} duration={3} top="80%" />
      </div>
      
      {/* Floating Windmill Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[15%] animate-float-gentle" style={{ animationDelay: '0s' }}>
          <WindmillIcon className="w-16 h-16 opacity-20" speed="slow" />
        </div>
        <div className="absolute top-40 right-[30%] animate-float-gentle" style={{ animationDelay: '1s' }}>
          <WindmillIcon className="w-12 h-12 opacity-15" speed="normal" />
        </div>
        <div className="absolute bottom-32 right-[20%] animate-float-gentle" style={{ animationDelay: '2s' }}>
          <WindmillIcon className="w-20 h-20 opacity-25" speed="fast" />
        </div>
      </div>

      {/* Glowing Orbs */}
      <div 
        className="absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] transition-transform duration-700"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      <div 
        className="absolute -left-32 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px] transition-transform duration-700"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-down border border-primary/20 backdrop-blur-sm group hover:bg-primary/20 transition-all cursor-default">
              <Wind className="w-4 h-4 animate-spin-windmill-slow" />
              <span>Powering Tomorrow's Energy Today</span>
              <Zap className="w-4 h-4 text-accent" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground">Precision</span>
              <span className="block text-gradient my-2">Wind Energy</span>
              <span className="block text-foreground">Solutions</span>
            </h1>

            {/* Sub-tagline with typing effect */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Where engineering excellence meets sustainable innovation. 
              <span className="text-primary font-medium"> Trusted by India's leading wind farms.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/services">
                <Button variant="hero" size="xl" className="gap-2 group relative overflow-hidden">
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="gap-2 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Feature Cards */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Feature Card 1 */}
              <div 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover-lift hover-glow animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wind className="h-7 w-7 text-primary group-hover:animate-spin-windmill-fast" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Smart Monitoring</h3>
                <p className="text-sm text-muted-foreground">Real-time turbine performance tracking & diagnostics</p>
              </div>

              {/* Feature Card 2 */}
              <div 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover-lift hover-glow animate-fade-in-up group cursor-pointer mt-8"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">Certified Experts</h3>
                <p className="text-sm text-muted-foreground">Industry-certified engineers with 10+ years experience</p>
              </div>

              {/* Feature Card 3 */}
              <div 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover-lift hover-glow animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">Emergency support within 4 hours nationwide</p>
              </div>

              {/* Feature Card 4 */}
              <div 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover-lift hover-glow animate-fade-in-up group cursor-pointer mt-8"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Maximum Output</h3>
                <p className="text-sm text-muted-foreground">Optimize energy generation & reduce downtime</p>
              </div>
            </div>

            {/* Decorative Windmill */}
            <div className="absolute -top-10 -right-10 opacity-30">
              <WindmillIcon className="w-32 h-32" speed="slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
