import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrench, Package, AlertTriangle, Search, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Service images
import maintenanceImg from "@/assets/service-maintenance.jpg";
import sparepartsImg from "@/assets/service-spareparts.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import inspectionImg from "@/assets/service-inspection.jpg";
import amcImg from "@/assets/service-amc.jpg";

const services = [
  {
    icon: Wrench,
    title: "Wind Turbine Service",
    description: "Comprehensive preventive and corrective service to keep your turbines running at peak efficiency.",
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "group-hover:bg-accent/20",
    image: maintenanceImg,
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    description: "OEM and non-OEM quality spare parts including gearboxes, blades, bearings, generators, control panels, etc.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    image: sparepartsImg,
  },
  {
    icon: AlertTriangle,
    title: "Breakdown & Emergency Support",
    description: "24/7 rapid response team for emergency breakdown situations to minimize your downtime.",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    hoverBg: "group-hover:bg-orange-500/20",
    image: emergencyImg,
  },
  {
    icon: Search,
    title: "Inspection & Troubleshooting",
    description: "Thorough inspection services with advanced diagnostics to identify and resolve issues proactively.",
    iconColor: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    hoverBg: "group-hover:bg-cyan-500/20",
    image: inspectionImg,
  },
  {
    icon: Phone,
    title: "Call Basis Service",
    description: "On-demand service support tailored to your specific needs without long-term commitments.",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    hoverBg: "group-hover:bg-emerald-500/20",
    image: amcImg,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimeoutRef.current = setTimeout(() => {
      setShowImage(true);
    }, 500);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowImage(false);
  };
  
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift cursor-pointer transition-all duration-500 overflow-hidden ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Content Layer */}
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 ${service.hoverBg} group-hover:scale-110 transition-all duration-300`}>
          <service.icon className={`h-7 w-7 ${service.iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
      
      {/* Hover Image Reveal */}
      <div 
        className={`absolute inset-0 z-20 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/60 backdrop-blur-[2px] transition-all duration-500 ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`} />
        
        <div className={`absolute inset-4 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showImage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <div className={`absolute -inset-4 bg-gradient-to-br ${service.bgColor} blur-2xl opacity-50`} />
            <img 
              src={service.image} 
              alt={service.title}
              className={`relative w-full h-full object-cover transition-transform duration-700 ease-out ${
                showImage ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 delay-100 ${
              showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${service.bgColor} backdrop-blur-sm mb-2`}>
                <service.icon className={`h-4 w-4 ${service.iconColor}`} />
                <span className={`text-xs font-medium ${service.iconColor}`}>View Service</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`absolute inset-0 rounded-2xl ${service.bgColor} opacity-20 blur-xl`} />
      </div>
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
            Excellence in Wind, Reliability in
            <span className="text-gradient block mt-1">Service</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From routine service to emergency repairs, we provide end-to-end solutions to maximize your wind farm's performance.
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
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 relative z-10">
              Need Custom Service?
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
