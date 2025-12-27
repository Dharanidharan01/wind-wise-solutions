import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Wind } from "lucide-react";

const brands = [
  "Suzlon",
  "Vestas",
  "Siemens Gamesa",
  "GE Wind",
  "Enercon",
  "Nordex",
  "Inox Wind",
  "ReGen Powertech",
  "WindWorld",
  "Leitwind",
];

const BrandsSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: brandsRef, isInView: brandsInView } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
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
            Brands Serviced
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Multi-Brand
            <span className="text-gradient block mt-1">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide maintenance and spare parts support for all major wind turbine manufacturers.
          </p>
        </div>

        {/* Brands Grid */}
        <div 
          ref={brandsRef}
          className={`transition-all duration-700 ${
            brandsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
