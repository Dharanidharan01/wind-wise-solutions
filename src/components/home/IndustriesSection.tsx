import { Wind, Building2, Zap, Landmark } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const industries = [
  {
    icon: Wind,
    title: "Wind Farms",
    description: "Complete O&M solutions for wind farm operators",
  },
  {
    icon: Building2,
    title: "Renewable Energy Companies",
    description: "Technical support for RE developers and IPPs",
  },
  {
    icon: Zap,
    title: "Power Generation Companies",
    description: "Maintenance partnerships with power utilities",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    description: "PSU and government wind energy initiatives",
  },
];

const IndustryCard = ({ industry, index }: { industry: typeof industries[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`group text-center p-10 rounded-2xl border border-border hover:border-accent/30 hover-lift hover-glow bg-card transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <industry.icon className="h-10 w-10 text-accent" />
      </div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-accent transition-colors">{industry.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
    </div>
  );
};

const IndustriesSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Powering India's Wind
            <span className="text-gradient block mt-1">Energy Sector</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We partner with leading organizations across the renewable energy industry to deliver reliable solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
