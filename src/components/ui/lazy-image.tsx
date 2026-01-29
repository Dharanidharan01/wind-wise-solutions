import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const WindmillLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary via-background to-muted">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Flowing wind lines */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-wind-flow" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-wind-flow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-wind-flow" style={{ animationDelay: '1s' }} />
    </div>
    
    {/* Windmill */}
    <div className="relative">
      {/* Tower */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/40 rounded-b-sm" />
      
      {/* Nacelle (hub) */}
      <div className="relative z-10 w-6 h-4 bg-muted-foreground/70 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-primary rounded-full shadow-lg" />
      </div>
      
      {/* Blades container - spinning */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-windmill">
        {/* Blade 1 */}
        <div className="absolute origin-bottom -translate-x-1/2 -translate-y-full w-2 h-10 bg-gradient-to-t from-foreground/80 to-foreground/40 rounded-full" 
             style={{ transform: 'translateX(-50%) translateY(-100%) rotate(0deg)' }} />
        {/* Blade 2 */}
        <div className="absolute origin-center w-2 h-10 bg-gradient-to-t from-foreground/80 to-foreground/40 rounded-full" 
             style={{ transform: 'translateX(-50%) translateY(-100%) rotate(120deg)', transformOrigin: 'center bottom' }} />
        {/* Blade 3 */}
        <div className="absolute origin-center w-2 h-10 bg-gradient-to-t from-foreground/80 to-foreground/40 rounded-full" 
             style={{ transform: 'translateX(-50%) translateY(-100%) rotate(240deg)', transformOrigin: 'center bottom' }} />
      </div>
    </div>
    
    {/* Loading text */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <span className="text-xs text-muted-foreground font-medium tracking-wider animate-pulse">
        Loading...
      </span>
    </div>
  </div>
);

export const LazyImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)} ref={imgRef}>
      {/* Windmill Placeholder */}
      {!isLoaded && <WindmillLoader />}
      {/* Actual image - only load when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
