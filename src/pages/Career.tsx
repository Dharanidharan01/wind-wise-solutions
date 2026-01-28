import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Users, Heart, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Wind Turbine Service Engineer",
    location: "Tamil Nadu, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Looking for experienced service engineers with expertise in wind turbine operations and troubleshooting.",
    requirements: [
      "Diploma/B.E in Electrical/Mechanical Engineering",
      "3-5 years experience in wind energy sector",
      "Knowledge of multi-brand turbines",
      "Willing to travel for site visits",
    ],
  },
  {
    id: 2,
    title: "Blade Bearing Specialist",
    location: "Tamil Nadu, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Seeking skilled technicians specialized in blade bearing repair and refurbishment.",
    requirements: [
      "ITI/Diploma in Mechanical Engineering",
      "Experience in bearing repair work",
      "Attention to detail and precision",
      "Team player with good communication",
    ],
  },
  {
    id: 3,
    title: "Generator Repair Technician",
    location: "Tamil Nadu, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our team as a generator repair technician for wind turbine generators.",
    requirements: [
      "ITI/Diploma in Electrical Engineering",
      "Experience in generator rewinding",
      "Knowledge of electrical systems",
      "Commitment to quality work",
    ],
  },
  {
    id: 4,
    title: "Spare Parts Coordinator",
    location: "Tamil Nadu, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Manage spare parts inventory and coordinate with clients for parts requirements.",
    requirements: [
      "Bachelor's degree in any discipline",
      "Experience in inventory management",
      "Good communication skills",
      "Knowledge of wind turbine components preferred",
    ],
  },
];

const benefits = [
  { icon: Briefcase, title: "Career Growth", description: "Clear advancement opportunities in a growing industry" },
  { icon: GraduationCap, title: "Continuous Learning", description: "Regular training and skill development programs" },
  { icon: Users, title: "Great Team", description: "Collaborative and supportive work environment" },
  { icon: Heart, title: "Purpose-Driven", description: "Contribute to clean energy and sustainability" },
];

const Career = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: jobsRef, isInView: jobsInView } = useScrollAnimation();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Careers</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Join Our Growing Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Build your career with India's trusted wind energy service provider. We're always looking for talented individuals to join our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground">
                Join a team that values growth, innovation, and making a positive impact on the environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-background border border-border hover-lift text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 lg:py-28 bg-background">
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
                Current Job Opportunities
              </h2>
              <p className="text-muted-foreground">
                Explore our current openings and find the perfect role for your skills and experience.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className={`p-6 rounded-2xl bg-card border transition-all duration-300 ${
                    selectedJob === job.id ? 'border-primary shadow-lg' : 'border-border'
                  }`}
                >
                  <div 
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {job.experience}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant={selectedJob === job.id ? "hero" : "outline"} 
                      className="gap-2 shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApply(job.title);
                      }}
                    >
                      <Send className="h-4 w-4" />
                      Apply Now
                    </Button>
                  </div>
                  
                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                Don't See a Suitable Position?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Send us your resume anyway! We're always looking for talented individuals to join our team.
              </p>
              <a href="mailto:shriamoghaenergycare@gmail.com?subject=General%20Job%20Application">
                <Button variant="secondary" size="xl" className="gap-2">
                  Send Your Resume
                  <ArrowRight className="h-5 w-5" />
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
