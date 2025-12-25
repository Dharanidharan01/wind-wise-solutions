import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Wind, Circle, Zap, Gauge, Monitor, Cable, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Settings,
    title: "Gearbox Spares",
    description: "High-quality gearbox components including bearings, gears, seals, and complete gearbox assemblies.",
  },
  {
    icon: Wind,
    title: "Blades",
    description: "Replacement blades and blade repair materials for various turbine models and manufacturers.",
  },
  {
    icon: Circle,
    title: "Bearings",
    description: "Main shaft bearings, generator bearings, and yaw bearings from leading manufacturers.",
  },
  {
    icon: Zap,
    title: "Generators",
    description: "Complete generators and generator components for turbine repair and replacement.",
  },
  {
    icon: Gauge,
    title: "Sensors",
    description: "Temperature sensors, vibration sensors, wind speed sensors, and other monitoring equipment.",
  },
  {
    icon: Monitor,
    title: "Control Panels",
    description: "PLC systems, control boards, inverters, and automation components for turbine control.",
  },
  {
    icon: Cable,
    title: "Electrical Spares",
    description: "Cables, connectors, circuit breakers, transformers, and other electrical components.",
  },
];

const Products = () => {
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
                Quality Wind Turbine Spare Parts
              </h1>
              <p className="text-lg text-muted-foreground">
                We supply OEM and non-OEM spare parts for all major wind turbine manufacturers, ensuring quality and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 p-6 bg-secondary rounded-xl text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Note:</strong> We supply both OEM and Non-OEM spare parts. All parts are quality tested and come with warranty support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Need Specific Parts?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us with your requirements. We source parts for all major turbine manufacturers.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Request Parts
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
