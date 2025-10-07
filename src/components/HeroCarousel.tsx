import { useState, useEffect } from "react";
import heroMantis from "@/assets/hero-mantis.jpg";
import heroButterfly from "@/assets/hero-butterfly.jpg";
import heroBeetle from "@/assets/hero-beetle.jpg";
import heroLacewing from "@/assets/hero-lacewing.jpg";

const images = [
  { src: heroMantis, alt: "Chinese Mantis" },
  { src: heroButterfly, alt: "Common Buckeye Butterfly" },
  { src: heroBeetle, alt: "Rhinoceros Beetle" },
  { src: heroLacewing, alt: "Green Lacewing" },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>
      ))}
      
      <div className="absolute bottom-20 left-0 right-0 z-10 text-center animate-slide-up">
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-4">
          The Insects of Duke
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          A Campus Collection
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
