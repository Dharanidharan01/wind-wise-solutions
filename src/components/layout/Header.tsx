import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Company",
    path: "/company",
    dropdown: [
      { name: "About Us", path: "/company#about" },
      { name: "Leadership", path: "/company#leadership" },
      { name: "Career", path: "/career" },
      { name: "Safety", path: "/safety" },
      { name: "Testimonials", path: "/testimonials" },
    ]
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "In-House",
    path: "/in-house",
    dropdown: [
      { name: "In-House Specialization", path: "/in-house/specialization" },
      { name: "Multi Brand Blade Bearing", path: "/in-house/blade-bearing" },
      { name: "Gear Box", path: "/in-house/gearbox" },
      { name: "Yaw Gear", path: "/in-house/yaw-gear" },
      { name: "Generator", path: "/in-house/generator" },
      { name: "Main Bearing", path: "/in-house/main-bearing" },
      { name: "Pitch & Yaw System", path: "/in-house/pitch-yaw-system" },
      { name: "Lubricants & Hydraulic", path: "/in-house/lubricants" },
      { name: "Assembly & Refurbishment", path: "/in-house/assembly" },
      { name: "Spares Reconditioning", path: "/in-house/reconditioning" },
    ]
  },
  {
    name: "Products",
    path: "/products",
    dropdown: [
      { name: "Mechanical Components", path: "/products/mechanical" },
      { name: "Electrical & Control Spares", path: "/products/electrical" },
      { name: "Blade & Rotor Spares", path: "/products/blade-rotor" },
      { name: "Yaw & Pitch System Spares", path: "/products/yaw-pitch" },
      { name: "Lubricants & Hydraulic Items", path: "/products/lubricants" },
      { name: "Fasteners & Consumables", path: "/products/fasteners" },
      { name: "Auxiliary & Nacelle Items", path: "/products/auxiliary" },
    ]
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="SHRI AMOGHA ENERGY CARE ENGINEERING" 
              className="h-20 md:h-24 w-auto" 
              src="/lovable-uploads/1708bd4d-225c-43b3-9952-11545aa8f7e8.jpg" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <button 
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground/80"
                    }`} 
                    onMouseEnter={() => setOpenDropdown(link.name)} 
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.dropdown && (
                  <div 
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      openDropdown === link.name ? "opacity-100 visible" : "opacity-0 invisible"
                    }`} 
                    onMouseEnter={() => setOpenDropdown(link.name)} 
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px] max-h-[400px] overflow-y-auto">
                      {link.dropdown.map(item => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919080508426">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="sm">Get Quote</Button>
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <div key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`block text-base font-medium py-2 transition-colors duration-200 ${
                      isActive(link.path) ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map(item => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          onClick={() => setIsMenuOpen(false)} 
                          className="block text-sm py-1 text-muted-foreground hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:+919080508426">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="hero" className="w-full">Get Quote</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
