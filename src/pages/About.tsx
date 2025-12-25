import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Powering India's Wind Energy Future
              </h1>
              <p className="text-lg text-muted-foreground">
                Shri Amogha Energy Care Engineering is committed to delivering reliable and professional wind turbine maintenance solutions across India.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Founded on Excellence
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Established on <strong>21st March 2024</strong>, Shri Amogha Energy Care Engineering was born from a vision to provide India's wind energy sector with reliable, high-quality maintenance and spare parts solutions.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team of <strong>12+ skilled technicians</strong> brings extensive hands-on experience in wind turbine maintenance, repair, and troubleshooting. We understand the critical nature of wind energy operations and are committed to minimizing downtime while maximizing energy output.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From preventive maintenance to emergency breakdown support, we offer comprehensive services tailored to meet the unique needs of wind farm operators, renewable energy companies, and power generation organizations.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold mb-6">Company Highlights</h3>
                <div className="space-y-4">
                  {[
                    "Founded: 21 March 2024",
                    "Team: 12+ Expert Technicians",
                    "Coverage: Pan-India Operations",
                    "Support: 24/7 Emergency Response",
                    "Quality: OEM & Non-OEM Certified Parts",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-background rounded-xl p-8 lg:p-10 hover-lift">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">V</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted and preferred wind energy service partner, known for excellence in technical expertise, reliability, and customer satisfaction.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 lg:p-10 hover-lift">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent">M</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional wind turbine maintenance services and quality spare parts that maximize operational efficiency, minimize downtime, and contribute to India's sustainable energy goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Dedicated to Renewable Energy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Shri Amogha, we believe in the power of renewable energy to transform India's future. Every turbine we maintain, every spare part we supply, contributes to a cleaner, greener tomorrow.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {[
                  { value: "100%", label: "Quality Focus" },
                  { value: "Zero", label: "Compromise on Safety" },
                  { value: "24/7", label: "Customer Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
