import useScrollAnimation from "@/hooks/useScrollAnimation";

// Import brand logos
import brandVestas from "@/assets/brand-vestas.png";
import brandRRB from "@/assets/brand-rrb.jpeg";
import brandPioneerWincon from "@/assets/brand-pioneer-wincon.png";
import brandNEPC from "@/assets/brand-nepc.jpeg";
import brandSiemensGamesa from "@/assets/brand-siemens-gamesa.png";
import brandNEGMicon from "@/assets/brand-neg-micon.png";
import brandLeitwind from "@/assets/brand-leitwind.png";

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: "Vestas", logo: brandVestas },
  { name: "Vestas RRB", logo: brandRRB },
  { name: "Pioneer Wincon", logo: brandPioneerWincon },
  { name: "NEPC", logo: brandNEPC },
  { name: "Siemens Gamesa", logo: brandSiemensGamesa },
  { name: "NEG Micon", logo: brandNEGMicon },
  { name: "Leit Wind", logo: brandLeitwind },
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
            We provide service and spare parts support for all major wind turbine manufacturers.
          </p>
        </div>

        {/* Brands Grid */}
        <div 
          ref={brandsRef}
          className={`transition-all duration-700 ${
            brandsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[120px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-full h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
