import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    // Esto asegura que la card se "pegue" al borde al soltarla
    dragFree: false, 
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  );
}