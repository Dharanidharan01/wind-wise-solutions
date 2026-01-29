import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Headphones, Search, Wrench, Building, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ServiceModal from "@/components/services/ServiceModal";

const services = [
  {
    icon: Settings,
    title: "Multi Brand Services",
    description: "Comprehensive spare parts sales and mechanical spares development for all major turbine manufacturers.",
    features: [
      "OEM & Non-OEM spare parts supply",
      "Mechanical spares development",
      "Custom component manufacturing",
      "Quality-tested materials",
    ],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert on-site and remote engineering support for troubleshooting and optimization.",
    features: [
      "On-site engineering assistance",
      "Remote troubleshooting support",
      "Performance optimization",
      "Technical consultancy",
    ],
  },
  {
    icon: Search,
    title: "Inspection & Troubleshooting",
    description: "Comprehensive performance analysis and preventive inspection services.",
    features: [
      "Performance analysis",
      "Preventive inspection",
      "Fault diagnostics",
      "Root cause analysis",
    ],
  },
  {
    icon: Wrench,
    title: "Operation & Service",
    description: "Complete operational support including on-site repair and emergency breakdown assistance.",
    features: [
      "On-site repair services",
      "Spare replacement & repair",
      "Emergency breakdown support",
      "Self hoisting crane operations",
    ],
  },
  {
    icon: Building,
    title: "Erection & Derection",
    description: "Safe and controlled turbine installation and dismantling services.",
    features: [
      "Safe turbine erection",
      "Controlled dismantling",
      "Equipment handling",
      "Site preparation",
    ],
  },
  {
    icon: Phone,
    title: "Call Basis Service",
    description: "On-demand service support available whenever you need it, without long-term commitments.",
    features: [
      "Flexible service scheduling",
      "No long-term contracts required",
      "Pay-per-service model",
      "Quick response time",
    ],
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  onClick: () => void;
}

const ServiceCard = ({ service, index, onClick }: ServiceCardProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary/5 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Click indicator */}
        <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Comprehensive Wind Turbine Service
              </h1>
              <p className="text-lg text-muted-foreground">
                From routine service to emergency repairs, we provide end-to-end solutions to keep your wind farm operating at peak efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground">
                Explore our comprehensive range of wind energy services designed to maximize your turbine performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  service={service} 
                  index={index} 
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Need Custom Service?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us to discuss your specific requirements and get a tailored service plan.
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

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Services;
