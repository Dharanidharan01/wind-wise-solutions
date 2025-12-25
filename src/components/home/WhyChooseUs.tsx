import { Award, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Technical Expertise",
    description: "Our team of 12+ skilled technicians brings years of hands-on experience in wind turbine maintenance and repair.",
  },
  {
    icon: Clock,
    title: "Quick Response Support",
    description: "24/7 emergency response team ensuring minimal downtime with rapid on-site assistance across India.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "We use only certified quality parts and follow industry-best practices to ensure long-lasting solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Your Trusted Wind Energy Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            Since our founding in March 2024, we've been committed to delivering excellence in every project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-background border border-border hover-lift group"
            >
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                0{index + 1}
              </span>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
