import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, GraduationCap, Award, HardHat, AlertTriangle, CheckCircle2, HeartPulse, Eye, FileCheck } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import safetyPPE from "@/assets/safety-ppe.jpg";
import safetyHeightWork from "@/assets/safety-height-work.jpg";

const safetyPillars = [
  {
    icon: Shield,
    title: "Industry Compliance",
    description: "Strict adherence to all industry safety standards and regulations governing wind energy operations.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Regular safety training sessions for all team members to stay updated with best practices.",
  },
  {
    icon: Award,
    title: "Safety Protocols",
    description: "Comprehensive safety protocols for all field operations ensuring zero-incident performance.",
  },
  {
    icon: HardHat,
    title: "PPE Standards",
    description: "Mandatory use of certified personal protective equipment for all on-site activities.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Thorough risk assessment before every operation to identify and mitigate potential hazards.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Response",
    description: "Well-trained emergency response teams ready to handle any situation effectively.",
  },
];

const safetyPractices = [
  "Pre-job safety briefings for all operations",
  "Regular equipment inspection and certification",
  "Safety harness and fall protection systems",
  "Lockout/tagout procedures for electrical work",
  "Weather monitoring before height operations",
  "Emergency evacuation plans at all sites",
  "First aid trained personnel on all teams",
  "Incident reporting and analysis system",
  "Regular safety audits and inspections",
  "Continuous improvement through feedback",
];

const Safety = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: pillarsRef, isInView: pillarsInView } = useScrollAnimation();
  const { ref: practicesRef, isInView: practicesInView } = useScrollAnimation();
  const { ref: imagesRef, isInView: imagesInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Safety</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Safety-First Culture
              </h1>
              <p className="text-lg text-muted-foreground">
                Safety is not just a priority—it's a core value embedded in everything we do at SHRI AMOGHA ENERGY CARE ENGINEERING.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Images Gallery */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={imagesRef}
              className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
                imagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img 
                  src={safetyPPE} 
                  alt="Safety equipment and PPE" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">🦺 Personal Protective Equipment</h3>
                    <p className="text-white/80 text-sm">Certified safety gear for every team member</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img 
                  src={safetyHeightWork} 
                  alt="Height work safety" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">🧗 Height Work Safety</h3>
                    <p className="text-white/80 text-sm">Trained professionals with proper fall protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Commitment */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Our Commitment
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Zero Compromise on Safety ⚠️
                </h2>
                <p className="text-muted-foreground mb-6">
                  At SHRI AMOGHA ENERGY CARE ENGINEERING, we believe that every worker deserves to return home safely. Our comprehensive safety program ensures that all operations are conducted with the highest safety standards.
                </p>
                <p className="text-muted-foreground mb-6">
                  We invest continuously in safety training, equipment, and protocols to create a culture where safety is everyone's responsibility.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vision Zero 🎯</h4>
                    <p className="text-sm text-muted-foreground">Zero accidents, zero injuries, zero compromises</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Safety Compliance ✅</div>
                </div>
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center mt-8">
                  <div className="text-4xl font-bold text-accent mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Lost Time Injuries 🛡️</div>
                </div>
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Safety Monitoring 👁️</div>
                </div>
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center mt-8">
                  <div className="text-4xl font-bold text-primary mb-2">All</div>
                  <div className="text-sm text-muted-foreground">Teams Certified 🏅</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Pillars */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={pillarsRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                pillarsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Safety Pillars 🏛️
              </h2>
              <p className="text-muted-foreground">
                The foundation of our safety culture rests on these core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyPillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Practices */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={practicesRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                practicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  <FileCheck className="inline h-4 w-4 mr-2" />
                  Best Practices
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Safety Practices 📋
                </h2>
                <p className="text-muted-foreground">
                  Comprehensive safety measures we implement in all our operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {safetyPractices.map((practice, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Partner with a Safety-First Company 🤝
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Choose a service partner that values safety as much as you do.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Safety;
