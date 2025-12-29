import { ZoomParallax } from "@/components/ui/zoom-parallax";

const ZoomParallaxSection = () => {
  const windEnergyImages = [
    {
      src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Wind turbine close-up',
    },
    {
      src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Wind farm at sunset',
    },
    {
      src: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Wind turbines against blue sky',
    },
    {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Renewable energy landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Wind turbine maintenance',
    },
    {
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Wind energy infrastructure',
    },
    {
      src: 'https://images.unsplash.com/photo-1532177411027-5d4a6dbcabb2?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Modern wind turbines on green field',
    },
  ];

  return (
    <section className="relative w-full">
      <ZoomParallax images={windEnergyImages} />
    </section>
  );
};

export default ZoomParallaxSection;
