import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, Cog, Wind, Zap, Cpu, Settings, Wrench } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ProductCard from "@/components/products/ProductCard";

// Product images
import productSpareparts from "@/assets/product-spareparts.jpg";
import productGearbox from "@/assets/product-gearbox.jpg";
import productBlade from "@/assets/product-blade.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productElectrical from "@/assets/product-electrical.jpg";
import productControlpanel from "@/assets/product-controlpanel.jpg";
import productOem from "@/assets/product-oem.jpg";

const products = [
  {
    id: "spare-parts",
    title: "Windmill Spare Parts",
    shortDesc: "Complete range of quality spare parts for all windmill models.",
    description: "We supply a comprehensive range of high-quality spare parts for all major windmill brands and models. Our inventory includes bearings, seals, fasteners, hydraulic components, and more. Each part is rigorously tested to ensure reliability and longevity, helping you minimize downtime and maximize turbine performance.",
    image: productSpareparts,
    icon: <Cog className="h-7 w-7 text-primary" />,
  },
  {
    id: "gearbox-spares",
    title: "Wind Turbine Gearbox Spares",
    shortDesc: "Precision gearbox components for optimal power transmission.",
    description: "Our gearbox spare parts are engineered to meet the demanding requirements of wind turbine applications. We offer gears, shafts, bearings, seals, and complete rebuild kits. All components are manufactured to OEM specifications, ensuring seamless integration and reliable performance in even the harshest operating conditions.",
    image: productGearbox,
    icon: <Settings className="h-7 w-7 text-primary" />,
  },
  {
    id: "blade-spares",
    title: "Windmill Blade Spares",
    shortDesc: "Blade repair kits and replacement components.",
    description: "Maintain optimal aerodynamic performance with our blade spare parts and repair solutions. We provide leading edge protection tapes, erosion repair kits, lightning receptors, blade tip components, and complete blade sections. Our products help extend blade life and maintain energy capture efficiency.",
    image: productBlade,
    icon: <Wind className="h-7 w-7 text-primary" />,
  },
  {
    id: "generator-spares",
    title: "Wind Turbine Generator Spares",
    shortDesc: "Generator components for reliable power generation.",
    description: "Keep your generators running at peak efficiency with our comprehensive range of generator spare parts. We supply stator and rotor components, bearings, brushes, slip rings, cooling system parts, and electrical connections. Our parts are compatible with all major generator types used in wind turbines.",
    image: productGenerator,
    icon: <Zap className="h-7 w-7 text-primary" />,
  },
  {
    id: "electrical-spares",
    title: "Windmill Electrical Spares",
    shortDesc: "Complete electrical components and cabling solutions.",
    description: "Our electrical spare parts catalog covers everything from power cables and connectors to switches, contactors, and protection devices. We ensure all electrical components meet industry safety standards and are designed to withstand the unique challenges of wind turbine environments.",
    image: productElectrical,
    icon: <Cpu className="h-7 w-7 text-primary" />,
  },
  {
    id: "control-panel-spares",
    title: "Wind Turbine Control Panel Spares",
    shortDesc: "Control systems and SCADA components.",
    description: "Maintain precise turbine control with our range of control panel spare parts. We offer PLCs, sensors, displays, communication modules, and complete control boards. Our components ensure accurate monitoring and optimal turbine operation, helping you maximize energy production and equipment lifespan.",
    image: productControlpanel,
    icon: <Cpu className="h-7 w-7 text-primary" />,
  },
  {
    id: "oem-non-oem",
    title: "OEM & Non-OEM Windmill Spares",
    shortDesc: "Flexible sourcing options for all budget requirements.",
    description: "We offer both original equipment manufacturer (OEM) parts and high-quality non-OEM alternatives. Our non-OEM parts are manufactured to match or exceed OEM specifications, providing cost-effective solutions without compromising on quality or reliability. All parts come with warranty and technical support.",
    image: productOem,
    icon: <Wrench className="h-7 w-7 text-primary" />,
  },
];

const Products = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: productsHeaderRef, isInView: productsHeaderInView } = useScrollAnimation();

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
                Wind Turbine Products
              </h1>
              <p className="text-lg text-muted-foreground">
                Quality spare parts and components for wind turbine maintenance and repair.
              </p>
            </div>
          </div>
        </section>

        {/* Products & Spares Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={productsHeaderRef}
              className={`text-center mb-16 transition-all duration-700 ${
                productsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Catalog</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Products & Spares
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our comprehensive range of wind turbine spare parts and components. Click on any product to learn more.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
    </div>
  );
};

export default Products;
