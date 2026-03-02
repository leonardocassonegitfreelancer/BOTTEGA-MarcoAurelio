import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quote className="w-8 h-8 text-gold mx-auto mb-8 opacity-60" />

          <blockquote className="text-lg md:text-2xl font-display font-light text-cream leading-relaxed md:leading-relaxed mb-8 whitespace-pre-line">
            {t("testimonial.quote")}
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-gold opacity-40" />
            <p className="text-sm tracking-[0.2em] uppercase text-cream-muted font-body">
              {t("testimonial.author")}
            </p>
            <div className="w-8 h-px bg-gold opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
