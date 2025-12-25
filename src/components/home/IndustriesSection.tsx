import { Wind, Building2, Zap, Landmark } from "lucide-react";

const industries = [
  {
    icon: Wind,
    title: "Wind Farms",
    description: "Complete O&M solutions for wind farm operators",
  },
  {
    icon: Building2,
    title: "Renewable Energy Companies",
    description: "Technical support for RE developers and IPPs",
  },
  {
    icon: Zap,
    title: "Power Generation Companies",
    description: "Maintenance partnerships with power utilities",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    description: "PSU and government wind energy initiatives",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Powering India's Wind Energy Sector
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with leading organizations across the renewable energy industry to deliver reliable solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl border border-border hover:border-primary/30 hover-lift bg-card"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <industry.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
