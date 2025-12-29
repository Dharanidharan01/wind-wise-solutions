import { ZoomParallax } from "@/components/ui/zoom-parallax";

const ZoomParallaxSection = () => {
  const windEnergyImages = [
    {
      src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind turbine close-up view",
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Large-scale wind farm at sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind turbines against blue sky",
    },
    {
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Renewable energy wind farm landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind turbine maintenance",
    },
    {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Wind energy infrastructure at dawn",
    },
    {
      src: "https://images.unsplash.com/photo-1562519990-50eb51e282b2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZCUyMHR1cmJpbmV8ZW58MHx8MHx8fDA%3D",
      alt: "Wind energy infrastructure at dawn",
    },
  ];

  return (
    <section className="relative w-full bg-background">
      <ZoomParallax images={windEnergyImages} />
    </section>
  );
};

export default ZoomParallaxSection;
