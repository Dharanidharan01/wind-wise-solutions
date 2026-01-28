import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ArrowLeft, Wind, Settings, Cog, Zap, RotateCw, Droplets, Wrench, TestTube, Circle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
}

const serviceData: Record<string, ServicePageData> = {
  "blade-bearing": {
    title: "Multi Brand Blade Bearing",
    subtitle: "Expert Blade Bearing Services",
    description: "Our blade bearing service covers all major wind turbine brands. We provide comprehensive inspection, repair, and replacement services to ensure optimal blade performance and longevity.",
    icon: Circle,
    features: [
      "Complete blade bearing inspection and diagnostics",
      "Precision greasing and lubrication services",
      "Bearing replacement and installation",
      "Preventive service programs",
      "Multi-brand compatibility (Vestas, Siemens Gamesa, etc.)",
      "Quality-tested replacement bearings",
      "On-site and in-house service options",
      "Emergency repair services",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Thorough inspection of blade bearings to identify wear and damage" },
      { step: 2, title: "Planning", description: "Develop service plan with timeline and cost estimates" },
      { step: 3, title: "Execution", description: "Perform repairs or replacement with precision engineering" },
      { step: 4, title: "Testing", description: "Rigorous quality testing to ensure optimal performance" },
    ],
    benefits: [
      "Extended blade bearing lifespan",
      "Reduced maintenance costs",
      "Improved turbine efficiency",
      "Minimized downtime",
      "Warranty on all services",
    ],
  },
  "gearbox": {
    title: "Gear Box Services",
    subtitle: "Complete Gearbox Solutions",
    description: "Comprehensive gearbox overhaul, repair, and reconditioning services for all wind turbine models. Our in-house facility handles everything from minor repairs to complete rebuilds.",
    icon: Settings,
    features: [
      "Complete gearbox inspection and diagnostics",
      "Oil analysis and contamination testing",
      "Gear and bearing replacement",
      "Seal replacement and upgrades",
      "Shaft repair and alignment",
      "Complete gearbox rebuild services",
      "Preventive service programs",
      "Quick turnaround times",
    ],
    process: [
      { step: 1, title: "Diagnosis", description: "Detailed inspection and oil analysis to identify issues" },
      { step: 2, title: "Disassembly", description: "Careful disassembly in controlled environment" },
      { step: 3, title: "Repair/Replace", description: "Precision repair or component replacement" },
      { step: 4, title: "Reassembly & Test", description: "Assembly and comprehensive testing" },
    ],
    benefits: [
      "Restored gearbox performance",
      "Extended equipment life",
      "Reduced unplanned failures",
      "Cost-effective solutions",
      "OEM-quality standards",
    ],
  },
  "yaw-gear": {
    title: "Yaw Gear Services",
    subtitle: "Precision Yaw System Service",
    description: "Expert yaw gear repair and service ensuring optimal turbine positioning and maximum energy capture. Our specialists handle all yaw system components with precision.",
    icon: RotateCw,
    features: [
      "Yaw gear inspection and diagnostics",
      "Yaw motor service and replacement",
      "Yaw brake service and adjustment",
      "Yaw bearing inspection and service",
      "Gear tooth repair and replacement",
      "Lubrication system service",
      "System calibration and alignment",
      "Preventive service programs",
    ],
    process: [
      { step: 1, title: "Inspection", description: "Complete yaw system inspection and diagnostics" },
      { step: 2, title: "Analysis", description: "Detailed analysis of wear patterns and issues" },
      { step: 3, title: "Service", description: "Precision repair and component service" },
      { step: 4, title: "Calibration", description: "System calibration and performance verification" },
    ],
    benefits: [
      "Optimal turbine positioning",
      "Maximized energy capture",
      "Reduced wear on components",
      "Extended system life",
      "Improved reliability",
    ],
  },
  "generator": {
    title: "Generator Services",
    subtitle: "Expert Generator Solutions",
    description: "Complete generator rewinding, repair, and refurbishment services. Our team handles all types of wind turbine generators with expertise and precision.",
    icon: Zap,
    features: [
      "Generator inspection and testing",
      "Stator and rotor rewinding",
      "Bearing replacement",
      "Brush and slip ring service",
      "Cooling system service",
      "Insulation testing and upgrade",
      "Vibration analysis",
      "Complete generator rebuild",
    ],
    process: [
      { step: 1, title: "Testing", description: "Comprehensive electrical and mechanical testing" },
      { step: 2, title: "Diagnosis", description: "Identify faults and develop repair plan" },
      { step: 3, title: "Repair", description: "Expert rewinding or component replacement" },
      { step: 4, title: "Validation", description: "Final testing and performance validation" },
    ],
    benefits: [
      "Restored generator efficiency",
      "Extended operational life",
      "Reliable power generation",
      "Cost-effective repairs",
      "Quick turnaround",
    ],
  },
  "main-bearing": {
    title: "Main Bearing Services",
    subtitle: "Critical Bearing Solutions",
    description: "Main shaft bearing inspection, repair, and replacement services. We ensure the heart of your turbine operates smoothly and reliably.",
    icon: Cog,
    features: [
      "Main bearing condition monitoring",
      "Vibration analysis and diagnostics",
      "Bearing inspection and assessment",
      "Precision bearing replacement",
      "Shaft inspection and service",
      "Lubrication system service",
      "Preventive service programs",
      "Emergency repair services",
    ],
    process: [
      { step: 1, title: "Monitoring", description: "Condition monitoring and vibration analysis" },
      { step: 2, title: "Assessment", description: "Detailed bearing condition assessment" },
      { step: 3, title: "Planning", description: "Develop replacement or repair strategy" },
      { step: 4, title: "Execution", description: "Precision bearing service or replacement" },
    ],
    benefits: [
      "Prevented catastrophic failures",
      "Extended turbine life",
      "Optimized performance",
      "Reduced downtime",
      "Cost savings",
    ],
  },
  "pitch-yaw-system": {
    title: "Pitch & Yaw System Services",
    subtitle: "Complete System Solutions",
    description: "Comprehensive pitch and yaw system service and component repair. Our experts ensure optimal blade pitch control and turbine orientation.",
    icon: Wind,
    features: [
      "Pitch system inspection and service",
      "Yaw system diagnostics",
      "Motor and drive service",
      "Controller troubleshooting",
      "Battery backup service",
      "Sensor calibration",
      "Hydraulic system service",
      "Preventive service programs",
    ],
    process: [
      { step: 1, title: "Diagnostics", description: "Complete system diagnostics and testing" },
      { step: 2, title: "Analysis", description: "Identify issues and plan repairs" },
      { step: 3, title: "Service", description: "Component service and repair" },
      { step: 4, title: "Testing", description: "System testing and calibration" },
    ],
    benefits: [
      "Optimal blade pitch control",
      "Efficient energy capture",
      "Improved turbine response",
      "Extended component life",
      "Enhanced safety",
    ],
  },
  "lubricants": {
    title: "Lubricants & Hydraulic Services",
    subtitle: "Fluid System Solutions",
    description: "Complete hydraulic system service and lubricant management solutions. We ensure all fluid systems operate at peak efficiency.",
    icon: Droplets,
    features: [
      "Oil analysis and condition monitoring",
      "Lubricant replacement and top-up",
      "Hydraulic system service",
      "Filter replacement",
      "Contamination control",
      "Fluid system flushing",
      "Pump and valve service",
      "Preventive service programs",
    ],
    process: [
      { step: 1, title: "Analysis", description: "Oil sampling and laboratory analysis" },
      { step: 2, title: "Assessment", description: "System condition assessment" },
      { step: 3, title: "Service", description: "Fluid change and system service" },
      { step: 4, title: "Verification", description: "Post-service testing and verification" },
    ],
    benefits: [
      "Extended component life",
      "Optimal system performance",
      "Reduced wear and friction",
      "Prevented failures",
      "Cost-effective service",
    ],
  },
  "assembly": {
    title: "Assembly & Refurbishment",
    subtitle: "Complete Rebuild Solutions",
    description: "Expert component assembly and refurbishment services. We restore components to like-new condition with precision engineering.",
    icon: Wrench,
    features: [
      "Complete component disassembly",
      "Thorough cleaning and inspection",
      "Part replacement as needed",
      "Precision reassembly",
      "Quality testing and validation",
      "Documentation and certification",
      "Warranty on all work",
      "Quick turnaround available",
    ],
    process: [
      { step: 1, title: "Disassembly", description: "Careful component disassembly" },
      { step: 2, title: "Inspection", description: "Detailed inspection of all parts" },
      { step: 3, title: "Refurbishment", description: "Cleaning, repair, and part replacement" },
      { step: 4, title: "Assembly", description: "Precision reassembly and testing" },
    ],
    benefits: [
      "Cost-effective alternative to new",
      "OEM-quality standards",
      "Extended component life",
      "Quick turnaround",
      "Full warranty",
    ],
  },
  "reconditioning": {
    title: "Spares Reconditioning & Testing",
    subtitle: "Quality Reconditioning Services",
    description: "Professional reconditioning and rigorous testing of spare parts. We ensure every component meets strict quality standards.",
    icon: TestTube,
    features: [
      "Comprehensive component testing",
      "Cleaning and reconditioning",
      "Dimensional inspection",
      "Surface treatment services",
      "Performance testing",
      "Documentation and certification",
      "Quality assurance",
      "Inventory management",
    ],
    process: [
      { step: 1, title: "Receipt", description: "Component receipt and documentation" },
      { step: 2, title: "Testing", description: "Initial testing and assessment" },
      { step: 3, title: "Reconditioning", description: "Cleaning and refurbishment" },
      { step: 4, title: "Certification", description: "Final testing and certification" },
    ],
    benefits: [
      "Verified component quality",
      "Cost savings vs. new parts",
      "Reliable spares inventory",
      "Quick availability",
      "Quality guaranteed",
    ],
  },
};

const InHouseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: processRef, isInView: processInView } = useScrollAnimation();
  
  const data = slug ? serviceData[slug] : null;
  
  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested service page could not be found.</p>
            <Link to="/in-house">
              <Button variant="hero" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to In-House
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-hero">
          <div className="container mx-auto px-4">
            <Link to="/in-house" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to In-House Services
            </Link>
            <div className="max-w-3xl">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{data.subtitle}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Service Features
              </h2>
              <div 
                ref={featuresRef}
                className={`grid md:grid-cols-2 gap-4 transition-all duration-700 ${
                  featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div 
              ref={processRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Process
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {data.process.map((step, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Key Benefits
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-cta">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Need {data.title}?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                Contact us for a quick assessment and competitive quote.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="gap-2">
                  Request Quote
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

export default InHouseDetail;
