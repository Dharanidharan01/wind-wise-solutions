import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Users, Shield, Award, Heart, Briefcase, GraduationCap } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Company = () => {
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: leadershipRef, isInView: leadershipInView } = useScrollAnimation();
  const { ref: careerRef, isInView: careerInView } = useScrollAnimation();
  const { ref: safetyRef, isInView: safetyInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Company</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                About Shri Amogha Energy Care
              </h1>
              <p className="text-lg text-muted-foreground">
                Building trust through excellence in wind energy services since 2024.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={aboutRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Excellence in Wind Energy Services
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Shri Amogha Energy Care Engineering is a leading provider of comprehensive wind turbine maintenance and spare parts solutions. Founded on March 21, 2024, we have quickly established ourselves as a trusted partner for wind farm owners and renewable energy companies across India.
                  </p>
                  <p>
                    Our focus on reliability, engineering strength, and customer-centric service has made us the preferred choice for windmill service requirements. We combine technical expertise with rapid response capabilities to ensure maximum uptime for your wind energy assets.
                  </p>
                  <p>
                    With a team of 12+ skilled professionals, we deliver end-to-end solutions from routine maintenance to emergency repairs, always prioritizing quality and safety.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover-lift">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To deliver reliable, high-quality wind energy services that maximize turbine performance and minimize downtime.</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 hover-lift">
                  <Eye className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To be India's most trusted wind energy service provider, driving the nation's renewable energy revolution.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={leadershipRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                leadershipInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Leadership Philosophy
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our leadership is built on the pillars of integrity, innovation, and unwavering commitment to excellence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-8 rounded-2xl bg-background border border-border hover-lift text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Every decision prioritizes the safety of our team and clients.</p>
                </div>
                <div className="p-8 rounded-2xl bg-background border border-border hover-lift text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality Driven</h3>
                  <p className="text-sm text-muted-foreground">We never compromise on the quality of our work and materials.</p>
                </div>
                <div className="p-8 rounded-2xl bg-background border border-border hover-lift text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Continuously improving our methods and embracing new technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={careerRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                careerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <Briefcase className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-1">Growth</h4>
                    <p className="text-sm text-muted-foreground">Career advancement opportunities</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <GraduationCap className="h-8 w-8 text-accent mb-3" />
                    <h4 className="font-semibold mb-1">Learning</h4>
                    <p className="text-sm text-muted-foreground">Continuous skill development</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <Users className="h-8 w-8 text-accent mb-3" />
                    <h4 className="font-semibold mb-1">Team</h4>
                    <p className="text-sm text-muted-foreground">Collaborative work environment</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <Heart className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-1">Purpose</h4>
                    <p className="text-sm text-muted-foreground">Contribute to clean energy</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Career
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Grow With Renewable Energy Experts
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join our team of passionate professionals dedicated to powering India's clean energy future. We offer challenging roles, continuous learning opportunities, and a supportive work environment.
                </p>
                <Link to="/contact">
                  <Button variant="hero" className="gap-2">
                    Join Our Team
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="safety" className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div 
              ref={safetyRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                safetyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 text-accent-foreground font-medium text-sm uppercase tracking-wider mb-4">
                Safety
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Safety-First Culture
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
                Safety is not just a priority—it's a core value embedded in everything we do.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20">
                  <Shield className="h-10 w-10 text-accent-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-accent-foreground mb-2">Industry Compliance</h3>
                  <p className="text-sm text-accent-foreground/70">Adhering to all industry safety standards and regulations</p>
                </div>
                <div className="p-6 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20">
                  <GraduationCap className="h-10 w-10 text-accent-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-accent-foreground mb-2">Training Programs</h3>
                  <p className="text-sm text-accent-foreground/70">Regular safety training for all team members</p>
                </div>
                <div className="p-6 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20">
                  <Award className="h-10 w-10 text-accent-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-accent-foreground mb-2">Safety Protocols</h3>
                  <p className="text-sm text-accent-foreground/70">Strict protocols for all field operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Company;
