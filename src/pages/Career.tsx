import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, GraduationCap, Clock, Users, Heart, Shield, TrendingUp, Send } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const jobOpenings = [
  {
    id: 1,
    type: "Full Time",
    location: "Tamil Nadu, India",
    title: "Mechanical Engineer",
    position: "Mechanical Engineer – Field & Service Operations",
    qualifications: [
      "Diploma / BE / B.Tech in Mechanical Engineering",
      "Strong understanding of mechanical systems and maintenance",
    ],
    experience: [
      "0–2 years (Freshers can apply)",
      "Experience in energy, engineering, or service industries is a plus",
    ],
  },
  {
    id: 2,
    type: "Full Time",
    location: "Tamil Nadu, India",
    title: "Electrical Engineer",
    position: "Electrical Engineer – Wind Turbine Systems",
    qualifications: [
      "Diploma / BE / B.Tech in Electrical Engineering",
      "Knowledge of electrical systems, control panels, and generators",
    ],
    experience: [
      "1–3 years experience preferred",
      "Freshers with strong fundamentals may apply",
    ],
  },
  {
    id: 3,
    type: "Full Time",
    location: "Tamil Nadu, India",
    title: "Service Technician",
    position: "Service Technician – Blade Bearing & Gearbox",
    qualifications: [
      "ITI / Diploma in Mechanical Engineering",
      "Hands-on experience with bearing repair and gearbox systems",
    ],
    experience: [
      "2–4 years in wind energy or heavy machinery service",
      "Experience with multi-brand turbines is preferred",
    ],
  },
  {
    id: 4,
    type: "Full Time",
    location: "Tamil Nadu, India",
    title: "Spare Parts Coordinator",
    position: "Spare Parts Coordinator – Inventory & Logistics",
    qualifications: [
      "Bachelor's degree in any discipline",
      "Good communication and organizational skills",
    ],
    experience: [
      "1–3 years in inventory management or logistics",
      "Knowledge of wind turbine components is a plus",
    ],
  },
];

const cultureHighlights = [
  { icon: Users, title: "Team Spirit", description: "Collaborative environment where every voice matters" },
  { icon: TrendingUp, title: "Growth", description: "Clear career paths and skill development opportunities" },
  { icon: Shield, title: "Safety First", description: "Comprehensive safety protocols and training" },
  { icon: Heart, title: "Work-Life Balance", description: "Supportive policies for personal well-being" },
];

const Career = () => {
  const { ref: lifeRef, isInView: lifeInView } = useScrollAnimation();
  const { ref: jobsRef, isInView: jobsInView } = useScrollAnimation();

  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Job Application: ${jobTitle}`);
    const body = encodeURIComponent(`Dear Hiring Team,\n\nI am interested in applying for the position of ${jobTitle} at SHRI AMOGHA ENERGY CARE ENGINEERING.\n\nPlease find my resume attached.\n\nBest regards,`);
    window.location.href = `mailto:shriamoghaenergycare@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Career
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Build your future with India's trusted wind energy service provider
              </p>
            </div>
          </div>
        </section>

        {/* Life at Company Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={lifeRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                lifeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Life at <span className="text-gradient">Shri Amogha Energy Care Engineering</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  At Shri Amogha Energy Care Engineering, we believe in nurturing talent and fostering a culture of excellence. 
                  Our team operates in a collaborative environment where innovation meets dedication. We prioritize safety in 
                  every aspect of our operations while providing continuous learning opportunities. With a focus on teamwork 
                  and mutual respect, we empower our employees to grow professionally and personally. Join us to be part of 
                  India's renewable energy revolution and build a meaningful career in sustainable engineering.
                </p>
              </div>

              {/* Culture Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {cultureHighlights.map((item, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-2xl bg-secondary/50 border border-border hover-lift transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div 
              ref={jobsRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                jobsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore Current Openings
              </h2>
              <p className="text-muted-foreground">
                Find the perfect role that matches your skills and aspirations
              </p>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobOpenings.map((job, index) => (
                <div 
                  key={job.id}
                  className="bg-card rounded-2xl border border-border p-6 hover-lift transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{job.position}</p>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Qualifications</span>
                    </div>
                    <ul className="space-y-1 pl-6">
                      {job.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground list-disc">
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Experience</span>
                    </div>
                    <ul className="space-y-1 pl-6">
                      {job.experience.map((exp, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground list-disc">
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <Button 
                    variant="hero" 
                    className="w-full gap-2 group"
                    onClick={() => handleApply(job.title)}
                  >
                    <Send className="h-4 w-4" />
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Don't See a Suitable Position?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href="mailto:shriamoghaenergycare@gmail.com?subject=General%20Job%20Application">
                <Button variant="secondary" size="xl" className="gap-2 group">
                  Send Your Resume
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Career;
