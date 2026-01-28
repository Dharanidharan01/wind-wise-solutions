import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote, Building2, Wind } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Green Energy Solutions Pvt. Ltd.",
    role: "Operations Manager",
    content: "SHRI AMOGHA ENERGY CARE ENGINEERING has been our trusted service partner for over a year. Their rapid response and quality workmanship have significantly improved our turbine uptime.",
    rating: 5,
  },
  {
    id: 2,
    name: "Suresh Patel",
    company: "WindPower India",
    role: "Technical Director",
    content: "The in-house blade bearing service from Shri Amogha is exceptional. Their team's expertise and attention to detail have saved us considerable time and costs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anand Sharma",
    company: "Renewable Energy Corp.",
    role: "Site Manager",
    content: "Professional team, quality spare parts, and excellent after-service support. They understand the urgency of wind farm operations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Venkatesh Iyer",
    company: "Tamil Nadu Wind Farms",
    role: "Maintenance Head",
    content: "We've worked with several service providers, but SHRI AMOGHA stands out for their commitment to quality and customer satisfaction. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Krishnan",
    company: "Eco Wind Systems",
    role: "Project Manager",
    content: "Their gearbox repair service is top-notch. The components were returned in perfect condition, and the turnaround time was impressive.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mohammed Farooq",
    company: "Clean Energy Partners",
    role: "CEO",
    content: "Partnering with SHRI AMOGHA ENERGY CARE ENGINEERING was one of our best decisions. Their service quality and professionalism exceed expectations.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="h-10 w-10 text-primary/20 mb-4" />
      <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-lg font-semibold text-primary">{testimonial.name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-primary">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                What Our Clients Say
              </h1>
              <p className="text-lg text-muted-foreground">
                Hear from wind farm operators and renewable energy companies who trust us with their turbine service needs.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={statsRef}
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center p-6 rounded-xl bg-background border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Turbines Serviced</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-background border border-border">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-background border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-background border border-border">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Client Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-foreground">
                Our commitment to quality service has earned us the trust of wind energy companies across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Ready to Experience Our Service?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Join our growing list of satisfied clients and experience the SHRI AMOGHA difference.
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

export default Testimonials;
