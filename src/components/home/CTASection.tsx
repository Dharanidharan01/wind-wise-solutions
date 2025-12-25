import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Looking for a Trusted Wind Energy Service Partner?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10">
            Get in touch with our expert team for reliable maintenance, quality spare parts, and 24/7 support for your wind turbines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+919080508426">
              <Button variant="outline" size="xl" className="gap-2 bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
