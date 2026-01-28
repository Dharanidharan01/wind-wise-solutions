import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Cog, Circle, Zap, RotateCw, CheckCircle2, Wrench, Wind, Droplets, Package, TestTube } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const inhouseServices = [
  {
    icon: Circle,
    title: "Multi Brand Blade Bearing",
    description: "Expert repair and refurbishment of blade bearings for all major turbine brands.",
    path: "/in-house/blade-bearing",
  },
  {
    icon: Settings,
    title: "Gear Box",
    description: "Complete gearbox overhaul, repair, and reconditioning services.",
    path: "/in-house/gearbox",
  },
  {
    icon: RotateCw,
    title: "Yaw Gear",
    description: "Precision repair of yaw drive systems and gearing components.",
    path: "/in-house/yaw-gear",
  },
  {
    icon: Zap,
    title: "Generator",
    description: "Generator rewinding, repair, and complete refurbishment services.",
    path: "/in-house/generator",
  },
  {
    icon: Cog,
    title: "Main Bearing",
    description: "Main shaft bearing inspection, repair, and replacement services.",
    path: "/in-house/main-bearing",
  },
  {
    icon: Wind,
    title: "Pitch & Yaw System",
    description: "Complete pitch and yaw system service and component repair.",
    path: "/in-house/pitch-yaw-system",
  },
  {
    icon: Droplets,
    title: "Lubricants & Hydraulic",
    description: "Hydraulic system service and lubricant management solutions.",
    path: "/in-house/lubricants",
  },
  {
    icon: Wrench,
    title: "Assembly & Refurbishment",
    description: "Complete component assembly and refurbishment services.",
    path: "/in-house/assembly",
  },
  {
    icon: TestTube,
    title: "Spares Reconditioning & Testing",
    description: "Quality reconditioning and rigorous testing of spare parts.",
    path: "/in-house/reconditioning",
  },
];

const features = [
  "Precision repairs with certified processes",
  "Quality-tested components",
  "Multi-brand expertise",
  "Quick turnaround time",
  "Warranty on all repairs",
  "OEM-equivalent quality",
];

const InHouseCard = ({ service, index }: { service: typeof inhouseServices[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={service.path}
        className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift block h-full"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <service.icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
        <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
};

const InHouse = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: specRef, isInView: specInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">In-House</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Expert Component Repair Services
              </h1>
              <p className="text-lg text-muted-foreground">
                State-of-the-art in-house facilities for precision repair and refurbishment of wind turbine components.
              </p>
            </div>
          </div>
        </section>

        {/* Specialization Highlight */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={specRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                specInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium mb-6">
                <Wind className="w-5 h-5" />
                <span>In-House Specialization</span>
                <Wind className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Specialized in Blade Bearing and Yaw Gear Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our in-house expertise focuses on delivering premium quality blade bearing and yaw gear services with industry-leading precision and reliability.
              </p>
              <Link to="/in-house/specialization" className="mt-6 inline-block">
                <Button variant="hero" className="gap-2">
                  Explore Specialization <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* In-House Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our In-House Capabilities
              </h2>
              <p className="text-muted-foreground">
                We provide comprehensive repair services for critical wind turbine components across all major brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {inhouseServices.map((service, index) => (
                <InHouseCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={featuresRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Quality Assurance
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our In-House Services?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our in-house facility is equipped with advanced tools and staffed by experienced technicians who ensure every repair meets the highest quality standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Quality Tested</div>
                  </div>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 mt-8">
                    <div className="text-4xl font-bold text-accent mb-2">24h</div>
                    <div className="text-sm text-muted-foreground">Quick Turnaround</div>
                  </div>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="text-4xl font-bold text-accent mb-2">Multi</div>
                    <div className="text-sm text-muted-foreground">Brand Expertise</div>
                  </div>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mt-8">
                    <div className="text-4xl font-bold text-primary mb-2">OEM</div>
                    <div className="text-sm text-muted-foreground">Quality Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Need Component Repair?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us for a quick assessment and quote for your repair requirements.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Request Repair Quote
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

export default InHouse;
