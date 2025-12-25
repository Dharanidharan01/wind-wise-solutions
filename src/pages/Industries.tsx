import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wind, Building2, Zap, Landmark, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Wind,
    title: "Wind Farm Owners",
    description: "We partner with wind farm owners to provide comprehensive O&M solutions that maximize energy production and minimize operational costs. Our services cover the entire lifecycle of your wind assets.",
    features: [
      "Complete O&M services",
      "Performance optimization",
      "Asset management",
      "Spare parts inventory management",
    ],
  },
  {
    icon: Building2,
    title: "Renewable Energy Companies",
    description: "Supporting renewable energy developers and IPPs with technical expertise and reliable maintenance services to ensure project success and optimal returns on investment.",
    features: [
      "Technical consultancy",
      "Maintenance partnerships",
      "Emergency support",
      "Quality spare parts supply",
    ],
  },
  {
    icon: Zap,
    title: "Power Generation Companies",
    description: "Working with power utilities and generation companies to maintain their wind energy assets and ensure reliable power production for the grid.",
    features: [
      "Grid compliance support",
      "Scheduled maintenance",
      "Performance monitoring",
      "Breakdown response",
    ],
  },
  {
    icon: Landmark,
    title: "Government & PSU Projects",
    description: "Trusted partner for government and public sector wind energy initiatives, delivering reliable services that meet regulatory standards and project requirements.",
    features: [
      "Compliance management",
      "Documentation support",
      "Quality assurance",
      "Transparent reporting",
    ],
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Industries We Serve
              </h1>
              <p className="text-lg text-muted-foreground">
                We partner with organizations across India's wind energy sector to deliver reliable maintenance and spare parts solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Industries List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold">{industry.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-secondary rounded-2xl p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                      <industry.icon className="h-10 w-10 text-accent" />
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
                Partner With Us
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Let's discuss how we can support your wind energy operations with our expertise and services.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Get Started
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

export default Industries;
