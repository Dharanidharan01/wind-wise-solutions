import { Link } from "react-router-dom";
import { Wrench, Package, AlertTriangle, Search, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Wrench,
    title: "Wind Turbine Maintenance",
    description: "Comprehensive preventive and corrective maintenance services to keep your turbines running at peak efficiency.",
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    description: "OEM and non-OEM quality spare parts including gearboxes, blades, bearings, generators, and control panels.",
  },
  {
    icon: AlertTriangle,
    title: "Breakdown & Emergency Support",
    description: "24/7 rapid response team for emergency breakdown situations to minimize your downtime.",
  },
  {
    icon: Search,
    title: "Inspection & Troubleshooting",
    description: "Thorough inspection services with advanced diagnostics to identify and resolve issues proactively.",
  },
  {
    icon: FileCheck,
    title: "AMC Services",
    description: "Annual Maintenance Contracts tailored to your specific needs for hassle-free operations.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift hover-glow cursor-pointer transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <service.icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
};

const ServicesOverview = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Comprehensive Wind Energy
            <span className="text-gradient block mt-1">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From routine maintenance to emergency repairs, we provide end-to-end services to maximize your wind farm's performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}

          {/* CTA Card */}
          <div 
            ref={ctaRef}
            className={`p-8 rounded-2xl gradient-cta flex flex-col justify-center items-start relative overflow-hidden transition-all duration-500 ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {/* Decorative elements */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 relative z-10">
              Need Custom Solutions?
            </h3>
            <p className="text-accent-foreground/80 mb-6 relative z-10">
              Contact us for tailored services that meet your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="secondary" className="gap-2 group">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
