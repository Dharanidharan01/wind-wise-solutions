import { Link } from "react-router-dom";
import { Wrench, Package, AlertTriangle, Search, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Wind Turbine Maintenance",
    description: "Comprehensive preventive and corrective maintenance services to keep your turbines running at peak efficiency.",
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    description: "OEM and non-OEM quality spare parts including gearboxes, blades, bearings, generators, and control panels.",
  },
  {
    icon: AlertTriangle,
    title: "Breakdown & Emergency Support",
    description: "24/7 rapid response team for emergency breakdown situations to minimize your downtime.",
  },
  {
    icon: Search,
    title: "Inspection & Troubleshooting",
    description: "Thorough inspection services with advanced diagnostics to identify and resolve issues proactively.",
  },
  {
    icon: FileCheck,
    title: "AMC Services",
    description: "Annual Maintenance Contracts tailored to your specific needs for hassle-free operations.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Comprehensive Wind Energy Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to emergency repairs, we provide end-to-end services to maximize your wind farm's performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-8 rounded-xl gradient-cta flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3">
              Need Custom Solutions?
            </h3>
            <p className="text-accent-foreground/80 mb-6">
              Contact us for tailored services that meet your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="secondary" className="gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
