import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";

type Category = "fedi" | "pietre" | "senza_pietre" | "filamento" | "pendenti" | "bracciali" | "pezzi_unici";

interface CategoryCarouselProps {
  categories: { key: Category; label: string }[];
  active: Category;
  onCategoryChange: (key: Category) => void;
}

const CategoryCarousel = ({ categories, active, onCategoryChange }: CategoryCarouselProps) => {
  const activeIndex = categories.findIndex((c) => c.key === active);
  const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
  const nextIndex = (activeIndex + 1) % categories.length;
  const [direction, setDirection] = useState(0);

  const goTo = (dir: -1 | 1) => {
    setDirection(dir);
    const idx = dir === -1 ? prevIndex : nextIndex;
    onCategoryChange(categories[idx].key);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      goTo(1);
    } else if (info.offset.x > threshold) {
      goTo(-1);
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="relative pb-1">
      <div className="flex items-center justify-center gap-3">
        {/* Prev arrow + label */}
        <button
          onClick={() => goTo(-1)}
          className="flex items-center gap-1.5 text-cream-muted/50 hover:text-cream-muted transition-colors min-w-0"
        >
          <ChevronLeft className="w-4 h-4 flex-shrink-0" />
          <span className="text-[9px] tracking-[0.1em] uppercase font-body truncate max-w-[70px]">
            {categories[prevIndex].label}
          </span>
        </button>

        {/* Active category - swipeable */}
        <div className="relative overflow-hidden min-w-[140px] h-9 flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              className="px-5 py-2 border border-gold text-gold bg-gold/10 text-xs tracking-[0.15em] uppercase font-body whitespace-nowrap cursor-grab active:cursor-grabbing select-none"
            >
              {categories[activeIndex].label}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next arrow + label */}
        <button
          onClick={() => goTo(1)}
          className="flex items-center gap-1.5 text-cream-muted/50 hover:text-cream-muted transition-colors min-w-0"
        >
          <span className="text-[9px] tracking-[0.1em] uppercase font-body truncate max-w-[70px]">
            {categories[nextIndex].label}
          </span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {categories.map((cat, i) => (
          <button
            key={cat.key}
            onClick={() => {
              setDirection(i > activeIndex ? 1 : -1);
              onCategoryChange(cat.key);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-4 h-1.5 bg-gold"
                : "w-1.5 h-1.5 bg-cream-muted/30 hover:bg-cream-muted/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
