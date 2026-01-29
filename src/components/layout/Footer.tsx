import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="SHRI AMOGHA ENERGY CARE ENGINEERING" className="h-12 w-auto" />
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner for wind turbine service and spare parts solutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "About Us", path: "/company#about" },
                { name: "Services", path: "/services" },
                { name: "Products", path: "/products" },
                { name: "In-House", path: "/in-house" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Preventive Service",
                "Corrective Service",
                "Emergency Breakdown",
                "Call Basis Service",
              ].map((service) => (
                <span key={service} className="text-background/70 text-sm">
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919080508426"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 9080508426
              </a>
              <a
                href="tel:+919940718156"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 9940718156
              </a>
              <a
                href="mailto:shriamoghaenergycare@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                shriamoghaenergycare@gmail.com
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>India (National Operations)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} SHRI AMOGHA ENERGY CARE ENGINEERING. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary transition-colors duration-200 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
