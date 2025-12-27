import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Products = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

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

        {/* Coming Soon Section */}
        <section className="py-20 lg:py-28 bg-background">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm uppercase tracking-wider mb-4">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Product Catalog Under Development
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're working on building a comprehensive product catalog featuring our complete range of OEM and non-OEM spare parts. 
                In the meantime, please contact us directly for all your product requirements.
              </p>
              
              <div className="p-8 rounded-2xl bg-secondary border border-border mb-8">
                <h3 className="font-semibold mb-4">Products Available on Request:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <span>Gearbox Spares</span>
                  <span>Blades</span>
                  <span>Bearings</span>
                  <span>Generators</span>
                  <span>Sensors</span>
                  <span>Control Panels</span>
                  <span>Electrical Spares</span>
                  <span>And More...</span>
                </div>
              </div>

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
