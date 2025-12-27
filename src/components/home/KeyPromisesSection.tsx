import { AlertTriangle, RefreshCw, Shield } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const promises = [
  {
    icon: AlertTriangle,
    title: "Emergency & Rapid Response Repairs",
    description: "24/7 emergency support with rapid mobilization to minimize your downtime and maximize energy production.",
    highlight: "24/7",
  },
  {
    icon: RefreshCw,
    title: "Upgrades & Component Replacement",
    description: "Complete upgrade solutions and quality component replacement to enhance turbine performance and longevity.",
    highlight: "100%",
  },
  {
    icon: Shield,
    title: "Safety & Compliance Assurance",
    description: "Strict adherence to industry safety standards and regulatory compliance in all our operations.",
    highlight: "Certified",
  },
];

const KeyPromisesSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Promises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Key Service
            <span className="text-gradient block mt-1">Commitments</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our unwavering commitment to excellence drives everything we do.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {promises.map((promise, index) => {
            const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
            
            return (
              <div
                key={index}
                ref={ref}
                className={`group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover-lift overflow-hidden transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Highlight badge */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {promise.highlight}
                </span>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{promise.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{promise.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyPromisesSection;
