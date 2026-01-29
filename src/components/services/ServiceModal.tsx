import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Import service images
import serviceAmc from "@/assets/service-amc.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import serviceInspection from "@/assets/service-inspection.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceSpareparts from "@/assets/service-spareparts.jpg";
import inhouseAssembly from "@/assets/inhouse-assembly.jpg";
import inhouseGearbox from "@/assets/inhouse-gearbox.jpg";
import inhouseGenerator from "@/assets/inhouse-generator.jpg";
import inhouseTesting from "@/assets/inhouse-testing.jpg";

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
}

// Service-specific images and content
const serviceContent: Record<string, {
  images: string[];
  tagline: string;
  highlights: string[];
}> = {
  "Multi Brand Services": {
    images: [serviceSpareparts, inhouseGearbox, inhouseAssembly, serviceMaintenance],
    tagline: "Your One-Stop Solution for All Turbine Brands",
    highlights: [
      "Certified OEM & aftermarket parts",
      "Cost-effective alternatives without quality compromise",
      "Extensive inventory for quick delivery",
      "Compatible with Vestas, Suzlon, Gamesa, Enercon & more",
    ],
  },
  "Technical Support": {
    images: [serviceMaintenance, inhouseTesting, serviceInspection, inhouseGenerator],
    tagline: "Expert Engineering at Your Fingertips",
    highlights: [
      "24/7 remote monitoring & support",
      "Experienced field engineers",
      "SCADA data analysis & interpretation",
      "Performance optimization consultancy",
    ],
  },
  "Inspection & Troubleshooting": {
    images: [serviceInspection, inhouseTesting, serviceMaintenance, serviceAmc],
    tagline: "Precision Diagnostics for Peak Performance",
    highlights: [
      "Comprehensive turbine health checks",
      "Advanced diagnostic equipment",
      "Detailed inspection reports",
      "Predictive maintenance recommendations",
    ],
  },
  "Operation & Service": {
    images: [serviceMaintenance, serviceEmergency, serviceSpareparts, inhouseAssembly],
    tagline: "Complete Operational Excellence",
    highlights: [
      "Rapid emergency response team",
      "Scheduled preventive maintenance",
      "Component replacement & repair",
      "Crane operations & heavy lifting",
    ],
  },
  "Erection & Derection": {
    images: [inhouseAssembly, serviceMaintenance, inhouseGearbox, serviceSpareparts],
    tagline: "Safe & Efficient Installation Services",
    highlights: [
      "Full turbine erection capability",
      "Safe dismantling procedures",
      "Component transportation & handling",
      "Site preparation & commissioning",
    ],
  },
  "Call Basis Service": {
    images: [serviceEmergency, serviceMaintenance, serviceAmc, serviceInspection],
    tagline: "Flexible Support When You Need It",
    highlights: [
      "No long-term contract obligations",
      "Pay only for services used",
      "Priority scheduling available",
      "Transparent pricing model",
    ],
  },
};

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = service ? serviceContent[service.title] : null;

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    if (!isOpen || !content) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % content.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, content]);

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!service || !content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-muted overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={content.images[currentImageIndex]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {content.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                />
              ))}
            </div>

            {/* Tagline overlay */}
            <motion.div 
              className="absolute bottom-12 left-4 right-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white font-semibold text-lg drop-shadow-lg">
                {content.tagline}
              </p>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
              </motion.div>
              <DialogDescription className="text-muted-foreground leading-relaxed">
                {service.description}
              </DialogDescription>
            </DialogHeader>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Key Features
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Why Choose Us
              </h4>
              <ul className="space-y-2">
                {content.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
