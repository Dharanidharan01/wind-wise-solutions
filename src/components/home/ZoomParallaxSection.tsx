import { ZoomParallax } from "@/components/ui/zoom-parallax";

const ZoomParallaxSection = () => {
  // Workshop and In-house related images with wind turbines in center
  const windEnergyImages = [
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Industrial workshop with machinery",
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind turbine field",
    },
    {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Engineering workshop tools",
    },
    {
      src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind turbine close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Industrial gears and machinery",
    },
    {
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Renewable energy wind farm",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Industrial service workshop",
    },
  ];

  return (
    <section className="relative w-full bg-background">
      <ZoomParallax images={windEnergyImages} />
    </section>
  );
};

export default ZoomParallaxSection;
