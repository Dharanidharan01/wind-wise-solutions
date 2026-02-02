import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ChatBot from "@/components/chat/ChatBot";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Shield, Award, Heart } from "lucide-react";
import leadershipDeepak from "@/assets/leadership-deepak.png";
import leadershipPandi from "@/assets/leadership-pandi.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Company = () => {
  const location = useLocation();
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: leadershipRef, isInView: leadershipInView } = useScrollAnimation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

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
                About SHRI AMOGHA ENERGY CARE ENGINEERING
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
                    SHRI AMOGHA ENERGY CARE ENGINEERING is a leading provider of comprehensive wind turbine service and spare parts solutions. Founded on March 21, 2024, we have quickly established ourselves as a trusted partner for wind farm owners and renewable energy companies across India.
                  </p>
                  <p>
                    Our focus on reliability, engineering strength, and customer-centric service has made us the preferred choice for windmill service requirements. We combine technical expertise with rapid response capabilities to ensure maximum uptime for your wind energy assets.
                  </p>
                  <p>
                    With a team of 12+ skilled professionals, we deliver end-to-end solutions from routine service to emergency repairs, always prioritizing quality and safety.
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
              
              {/* Leadership Team Members */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img 
                      src={leadershipPandi} 
                      alt="Pandi P - Managing Director" 
                      className="w-full h-full object-cover object-top scale-150"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Pandi P</h3>
                  <p className="text-sm text-primary font-medium">Managing Director</p>
                </div>
                <div className="p-6 rounded-2xl bg-background border border-border hover-lift text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-colors">
                    <img 
                      src={leadershipDeepak} 
                      alt="Deepak - Managing Partner" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Deepak</h3>
                  <p className="text-sm text-accent font-medium">Managing Partner</p>
                </div>
              </div>

              {/* Leadership Values */}
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

        {/* CTA Section */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Experience the excellence that makes SHRI AMOGHA ENERGY CARE ENGINEERING a trusted name in wind energy services.
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
      <ChatBot />
    </div>
  );
};

export default Company;
