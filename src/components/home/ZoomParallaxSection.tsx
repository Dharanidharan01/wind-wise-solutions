import { ZoomParallax } from "@/components/ui/zoom-parallax";

// Import actual in-house workshop images
import inhouseGearbox from "@/assets/inhouse-gearbox.jpg";
import inhouseMainBearing from "@/assets/inhouse-main-bearing.jpg";
import inhouseGenerator from "@/assets/inhouse-generator.jpg";
import inhouseYawGear from "@/assets/inhouse-yaw-gear.jpg";
import inhouseBladeBearing from "@/assets/inhouse-blade-bearing.jpg";
import inhouseAssembly from "@/assets/inhouse-assembly.jpg";
import inhouseTesting from "@/assets/inhouse-testing.jpg";

const ZoomParallaxSection = () => {
  // In-house facility images - windmill components and workshop
  const windEnergyImages = [
    {
      src: inhouseGearbox,
      alt: "Gearbox repair and maintenance",
    },
    {
      src: inhouseMainBearing,
      alt: "Main bearing for wind turbines",
    },
    {
      src: inhouseGenerator,
      alt: "Generator overhaul and servicing",
    },
    {
      src: inhouseYawGear,
      alt: "Yaw gear drive system",
    },
    {
      src: inhouseBladeBearing,
      alt: "Blade bearing components",
    },
    {
      src: inhouseAssembly,
      alt: "Assembly and integration workshop",
    },
    {
      src: inhouseTesting,
      alt: "Quality testing facility",
    },
  ];

  return (
    <section className="relative w-full bg-background">
      <ZoomParallax images={windEnergyImages} />
    </section>
  );
};

export default ZoomParallaxSection;
