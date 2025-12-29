import { MapPin } from "lucide-react";

const MapSection = () => {
  const googleMapsLink = "https://maps.app.goo.gl/sSTNXxZwHVNKWFGD8";
  
  // Embed URL for Shri Amogha Energy Care Engineering
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.6333747071694!2d77.28018229999999!3d10.6855393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cb0004e49221%3A0xa6963b3e81907b81!2sShri%20Amogha%20Energy%20care%20Engineering!5e0!3m2!1sen!2sin!4v1767036238458!5m2!1sen!2sin";

  const handleMapClick = () => {
    window.open(googleMapsLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Find Us Here
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our facility or get in touch. Click on the map to open in Google Maps.
          </p>
        </div>

        {/* Map Container */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:border-primary/30"
          onClick={handleMapClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMapClick();
            }
          }}
          aria-label="Open location in Google Maps"
        >
          {/* Map Iframe */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Amogha Energy Care Engineering Location"
              className="pointer-events-none"
            />
            
            {/* Overlay for click interaction */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors duration-300" />
            
            {/* Click hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-border/50 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Click to open in Google Maps</span>
            </div>
          </div>

          {/* Accent border effect */}
          <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-300 pointer-events-none" />
        </div>

        {/* Address Info */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            Shri Amogha Energy Care Engineering • India (National Operations)
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
