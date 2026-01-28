import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, CheckCircle2, Cog, Settings, RotateCw, Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const specializations = [
  {
    title: "Blade Bearing Excellence",
    description: "Our blade bearing service combines precision engineering with years of hands-on experience to deliver exceptional results.",
    features: [
      "Complete blade bearing inspection",
      "Precision greasing and lubrication",
      "Bearing replacement and installation",
      "Preventive service programs",
      "Multi-brand compatibility",
      "Quality-tested components",
    ],
    icon: Cog,
  },
  {
    title: "Yaw Gear Mastery",
    description: "Expert yaw gear services ensuring optimal turbine positioning and maximum energy capture.",
    features: [
      "Yaw gear inspection and diagnostics",
      "Precision gear repair and refurbishment",
      "Yaw motor and brake service",
      "Yaw bearing service",
      "System calibration and testing",
      "Preventive service solutions",
    ],
    icon: RotateCw,
  },
];

const whyChooseUs = [
  "15+ years of combined industry experience",
  "Certified and trained technicians",
  "State-of-the-art in-house facility",
  "Quick turnaround times",
  "Competitive pricing",
  "Warranty on all services",
  "Multi-brand expertise",
  "24/7 emergency support",
];

const InHouseSpecialization = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: specRef, isInView: specInView } = useScrollAnimation();
  const { ref: whyRef, isInView: whyInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Wind className="w-4 h-4" />
                <span>In-House Specialization</span>
                <Star className="w-4 h-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Specialized in Blade Bearing & Yaw Gear Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Our core expertise lies in delivering premium quality blade bearing and yaw gear services with industry-leading precision and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why We're the Best Choice for Blade Bearing & Yaw Gear
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At SHRI AMOGHA ENERGY CARE ENGINEERING, we have built our reputation on excellence in blade bearing and yaw gear services. Our dedicated team of specialists brings unparalleled expertise and attention to detail to every project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                  <Wind className="inline h-4 w-4 mr-2" />
                  Blade Bearing Experts
                </div>
                <div className="px-6 py-3 rounded-full bg-accent/10 text-accent font-medium">
                  <RotateCw className="inline h-4 w-4 mr-2" />
                  Yaw Gear Specialists
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={specRef}
              className={`space-y-12 transition-all duration-700 ${
                specInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {specializations.map((spec, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                      <spec.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{spec.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{spec.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {spec.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <spec.icon className="h-32 w-32 text-primary/30" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">#{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={whyRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Our Advantage
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Our Specialization
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
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
                Need Blade Bearing or Yaw Gear Service?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact our specialists for a quick assessment and competitive quote.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Get Expert Quote
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

export default InHouseSpecialization;
