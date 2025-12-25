import { Award, Clock, Shield } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: Award,
    title: "Technical Expertise",
    description: "Our team of 12+ skilled technicians brings years of hands-on experience in wind turbine maintenance and repair.",
  },
  {
    icon: Clock,
    title: "Quick Response Support",
    description: "24/7 emergency response team ensuring minimal downtime with rapid on-site assistance across India.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "We use only certified quality parts and follow industry-best practices to ensure long-lasting solutions.",
  },
];

const ReasonCard = ({ reason, index }: { reason: typeof reasons[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`relative p-8 rounded-2xl bg-background border border-border hover-lift hover-glow group transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number indicator */}
      <span className="absolute top-6 right-6 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
        0{index + 1}
      </span>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <reason.icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{reason.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Your Trusted Wind Energy
            <span className="text-gradient block mt-1">Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Since our founding in March 2024, we've been committed to delivering excellence in every project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
