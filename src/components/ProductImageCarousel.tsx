import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
}

const ProductImageCarousel = ({ images, alt }: ProductImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  if (images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative w-full aspect-square">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={img}
                alt={`${alt} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          emblaApi?.scrollPrev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-background/60 backdrop-blur-sm text-cream hover:bg-background/80 transition-colors rounded-full"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          emblaApi?.scrollNext();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-background/60 backdrop-blur-sm text-cream hover:bg-background/80 transition-colors rounded-full"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              emblaApi?.scrollTo(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-4 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-cream/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
