import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ArrowLeft, Cog, Zap, Wind, Settings, Droplets, Wrench, Package } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ProductPageData {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  products: string[];
  brands: string[];
}

const productData: Record<string, ProductPageData> = {
  "mechanical": {
    title: "Multi Brand Mechanical Components",
    subtitle: "Quality Mechanical Parts",
    description: "Complete range of mechanical components for all major wind turbine brands. We supply OEM and high-quality non-OEM parts to meet your specific requirements.",
    icon: Cog,
    products: [
      "Main shaft bearings",
      "Gearbox components",
      "Yaw bearings and gears",
      "Blade bearings",
      "Brake discs and pads",
      "Coupling components",
      "Shaft seals",
      "Sprockets and chains",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "electrical": {
    title: "Electrical & Control Spares",
    subtitle: "Electrical Components",
    description: "Comprehensive range of electrical components and control system spares for wind turbines. All parts are tested and certified for reliability.",
    icon: Zap,
    products: [
      "Generators and alternators",
      "Converters and inverters",
      "Transformers",
      "Contactors and relays",
      "Circuit breakers",
      "Sensors and transducers",
      "PLCs and controllers",
      "Cables and connectors",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "blade-rotor": {
    title: "Blade & Rotor Spares",
    subtitle: "Blade System Components",
    description: "Quality blade and rotor components to maintain optimal aerodynamic performance. We supply repair kits and replacement parts for all turbine types.",
    icon: Wind,
    products: [
      "Blade root inserts",
      "Blade bolts and hardware",
      "Lightning protection systems",
      "Leading edge protection",
      "Blade repair kits",
      "Hub components",
      "Spinner parts",
      "Blade bearings",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "yaw-pitch": {
    title: "Yaw & Pitch System Spares",
    subtitle: "Control System Parts",
    description: "Complete range of yaw and pitch system components for precise turbine control and optimal energy capture.",
    icon: Settings,
    products: [
      "Yaw motors",
      "Pitch motors",
      "Yaw brakes",
      "Pitch bearings",
      "Yaw bearings",
      "Hydraulic cylinders",
      "Position sensors",
      "Control valves",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "lubricants": {
    title: "Lubricants & Hydraulic Items",
    subtitle: "Fluid System Products",
    description: "High-quality lubricants and hydraulic products specifically formulated for wind turbine applications.",
    icon: Droplets,
    products: [
      "Gearbox oils",
      "Hydraulic fluids",
      "Greases",
      "Filters (oil, air, hydraulic)",
      "Seals and gaskets",
      "Hoses and fittings",
      "Pumps",
      "Accumulators",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "fasteners": {
    title: "Fasteners & Consumables",
    subtitle: "Essential Hardware",
    description: "Complete range of fasteners and consumable items essential for wind turbine service and repair.",
    icon: Wrench,
    products: [
      "High-strength bolts",
      "Tower bolts",
      "Foundation bolts",
      "Nuts and washers",
      "Lock washers",
      "Adhesives and sealants",
      "Cleaning supplies",
      "Safety consumables",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
  "auxiliary": {
    title: "Auxiliary & Nacelle Items",
    subtitle: "Nacelle Components",
    description: "Auxiliary equipment and nacelle components for complete turbine service requirements.",
    icon: Package,
    products: [
      "Cooling fans",
      "Heaters",
      "Lighting systems",
      "Fire suppression systems",
      "Crane components",
      "Covers and enclosures",
      "Ladders and platforms",
      "Safety equipment",
    ],
    brands: ["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"],
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: productsRef, isInView: productsInView } = useScrollAnimation();
  
  const data = slug ? productData[slug] : null;
  
  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested product page could not be found.</p>
            <Link to="/products">
              <Button variant="hero" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
            <div className="max-w-3xl">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{data.subtitle}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Available Products
              </h2>
              <div 
                ref={productsRef}
                className={`grid md:grid-cols-2 gap-4 transition-all duration-700 ${
                  productsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {data.products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Compatible Brands
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {data.brands.map((brand, index) => (
                  <div key={index} className="px-6 py-3 rounded-full bg-background border border-border font-medium">
                    {brand}
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
                Need {data.title}?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us for pricing and availability of specific parts.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Request Quote
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

export default ProductDetail;
