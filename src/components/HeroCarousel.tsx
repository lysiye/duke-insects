import { useState, useEffect } from "react";
import heroPaintedLady from "@/assets/hero-painted-lady.jpg";
import heroLacewingEye from "@/assets/hero-lacewing-eye.jpg";
import heroRobberFly from "@/assets/hero-robber-fly.jpg";
import heroScales from "@/assets/hero-scales.jpg";
import heroAssassinBug from "@/assets/hero-assassin-bug.jpg";
import heroTigerBeetle from "@/assets/hero-tiger-beetle.jpg";
import heroSaddleback from "@/assets/hero-saddleback.jpg";
import heroMilkweedBug from "@/assets/hero-milkweed-bug.jpg";
import heroLeafFootedBug from "@/assets/hero-leaf-footed-bug.jpg";
import heroYellowjacket from "@/assets/hero-yellowjacket.jpg";

const images = [
  { src: heroPaintedLady, alt: "American Painted Lady Butterfly" },
  { src: heroLacewingEye, alt: "Green Lacewing Eye Macro" },
  { src: heroRobberFly, alt: "Giant Robber Fly" },
  { src: heroScales, alt: "Butterfly Wing Scales Macro" },
  { src: heroAssassinBug, alt: "Orange Assassin Bug" },
  { src: heroTigerBeetle, alt: "Six-spotted Tiger Beetle" },
  { src: heroSaddleback, alt: "Saddleback Caterpillar" },
  { src: heroMilkweedBug, alt: "Large Milkweed Bug" },
  { src: heroLeafFootedBug, alt: "Eastern Leaf-footed Bug" },
  { src: heroYellowjacket, alt: "Eastern Yellowjacket" },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
