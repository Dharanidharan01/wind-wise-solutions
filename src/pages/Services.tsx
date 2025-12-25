import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, RefreshCw, Hammer, AlertTriangle, Search, FileCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Wind Turbine Preventive Maintenance",
    description: "Scheduled maintenance programs designed to prevent equipment failure and extend turbine lifespan.",
    benefits: [
      "Regular inspections and diagnostics",
      "Lubrication and component checks",
      "Performance optimization",
      "Extended equipment life",
    ],
  },
  {
    icon: RefreshCw,
    title: "Corrective Maintenance",
    description: "Expert repair services to restore turbine performance after issues are identified.",
    benefits: [
      "Rapid fault diagnosis",
      "Component repair & replacement",
      "System restoration",
      "Performance verification",
    ],
  },
  {
    icon: Hammer,
    title: "Repair & Replacement",
    description: "Complete repair and parts replacement services using quality OEM and non-OEM components.",
    benefits: [
      "Gearbox overhaul",
      "Blade repair & replacement",
      "Generator servicing",
      "Control system upgrades",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Breakdown Support",
    description: "24/7 rapid response team for critical situations to minimize costly downtime.",
    benefits: [
      "Round-the-clock availability",
      "Pan-India coverage",
      "Rapid mobilization",
      "Priority parts supply",
    ],
  },
  {
    icon: Search,
    title: "Inspection & Troubleshooting",
    description: "Comprehensive inspection services with advanced diagnostics for proactive issue resolution.",
    benefits: [
      "Visual & technical inspections",
      "Root cause analysis",
      "Detailed reporting",
      "Predictive maintenance insights",
    ],
  },
  {
    icon: FileCheck,
    title: "Annual Maintenance Contract (AMC)",
    description: "Customized annual maintenance packages for hassle-free turbine operations.",
    benefits: [
      "Scheduled maintenance visits",
      "Priority response time",
      "Comprehensive coverage",
      "Cost-effective solutions",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Comprehensive Wind Turbine Services
              </h1>
              <p className="text-lg text-muted-foreground">
                From routine maintenance to emergency repairs, we provide end-to-end solutions to keep your wind farm operating at peak efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 lg:p-10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Need Custom Service Solutions?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us to discuss your specific requirements and get a tailored maintenance plan.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Get in Touch
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

export default Services;
