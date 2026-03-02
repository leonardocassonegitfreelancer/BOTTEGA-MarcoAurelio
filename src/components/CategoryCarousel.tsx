import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "fedi" | "pietre" | "senza_pietre" | "filamento" | "pendenti" | "bracciali";

interface CategoryCarouselProps {
  categories: { key: Category; label: string }[];
  active: Category;
  onCategoryChange: (key: Category) => void;
}

const CategoryCarousel = ({ categories, active, onCategoryChange }: CategoryCarouselProps) => {
  const activeIndex = categories.findIndex((c) => c.key === active);
  const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
  const nextIndex = (activeIndex + 1) % categories.length;

  return (
    <div className="flex items-center justify-center gap-3">
      {/* Prev arrow + label */}
      <button
        onClick={() => onCategoryChange(categories[prevIndex].key)}
        className="flex items-center gap-1.5 text-cream-muted/50 hover:text-cream-muted transition-colors min-w-0"
      >
        <ChevronLeft className="w-4 h-4 flex-shrink-0" />
        <span className="text-[9px] tracking-[0.1em] uppercase font-body truncate max-w-[70px]">
          {categories[prevIndex].label}
        </span>
      </button>

      {/* Active category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="px-5 py-2 border border-gold text-gold bg-gold/10 text-xs tracking-[0.15em] uppercase font-body whitespace-nowrap flex-shrink-0"
        >
          {categories[activeIndex].label}
        </motion.div>
      </AnimatePresence>

      {/* Next arrow + label */}
      <button
        onClick={() => onCategoryChange(categories[nextIndex].key)}
        className="flex items-center gap-1.5 text-cream-muted/50 hover:text-cream-muted transition-colors min-w-0"
      >
        <span className="text-[9px] tracking-[0.1em] uppercase font-body truncate max-w-[70px]">
          {categories[nextIndex].label}
        </span>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
      </button>
    </div>
  );
};

export default CategoryCarousel;
