import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ChatBot from "@/components/chat/ChatBot";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, Cog, Wind, Zap, Settings, Droplets, Wrench } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const productCategories = [
  {
    id: "mechanical",
    title: "Multi Brand Mechanical Components",
    description: "Complete range of mechanical components including bearings, gears, shafts, etc.",
    icon: Cog,
    path: "/products/mechanical",
  },
  {
    id: "electrical",
    title: "Electrical & Control Spares",
    description: "Generators, converters, sensors, controllers, and all electrical components.",
    icon: Zap,
    path: "/products/electrical",
  },
  {
    id: "blade-rotor",
    title: "Blade & Rotor Spares",
    description: "Blade components, repair kits, lightning protection, and rotor parts.",
    icon: Wind,
    path: "/products/blade-rotor",
  },
  {
    id: "yaw-pitch",
    title: "Yaw & Pitch System Spares",
    description: "Yaw motors, pitch systems, bearings, and control components.",
    icon: Settings,
    path: "/products/yaw-pitch",
  },
  {
    id: "lubricants",
    title: "Lubricants & Hydraulic Items",
    description: "Oils, greases, hydraulic fluids, filters, and fluid system components.",
    icon: Droplets,
    path: "/products/lubricants",
  },
  {
    id: "fasteners",
    title: "Fasteners & Consumables",
    description: "High-strength bolts, nuts, washers, and essential consumables.",
    icon: Wrench,
    path: "/products/fasteners",
  },
  {
    id: "auxiliary",
    title: "Auxiliary & Nacelle Items",
    description: "Cooling systems, lighting, safety equipment, and nacelle components.",
    icon: Package,
    path: "/products/auxiliary",
  },
];

const ProductCategoryCard = ({ category, index }: { category: typeof productCategories[0]; index: number }) => {
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
        to={category.path}
        className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift block h-full"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <category.icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
        <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          View Products <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
};

const Products = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Products</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Wind Turbine Products & Spares
              </h1>
              <p className="text-lg text-muted-foreground">
                Quality spare parts and components for wind turbine service and repair across all major brands.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Catalog</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Product Categories
              </h2>
              <p className="text-muted-foreground">
                Browse our comprehensive range of wind turbine spare parts and components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, index) => (
                <ProductCategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Compatible with All Major Brands</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {["Vestas", "Vestas RRB", "Pioneer Wincon", "NEPC", "Siemens Gamesa", "NEG Micon", "Leit Wind"].map((brand) => (
                <span key={brand} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={ctaRef}
              className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
                ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Package className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Something Specific?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Can't find what you're looking for? Contact us with your requirements and our team will source the parts you need from our extensive supplier network.
              </p>

              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2">
                  Contact Us for Product Details
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Products;
