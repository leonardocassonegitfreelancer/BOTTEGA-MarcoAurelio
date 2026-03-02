import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import barattoImage from "@/assets/baratto.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BarattoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="baratto" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
            {t("baratto.label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream">
            {t("baratto.title")}{" "}
            <span className="gradient-gold-text italic">{t("baratto.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 md:order-1"
          >
            <p className="text-cream-muted font-body font-light leading-relaxed text-lg">
              {t("baratto.p1")}
            </p>
            <p className="text-cream-muted font-body font-light leading-relaxed">
              {t("baratto.p2")}
            </p>
            
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center gap-3 text-cream font-body text-sm">
                <span className="text-gold">{t("baratto.step1")}</span>
                <ArrowRight className="w-4 h-4 text-gold/50" />
                <span className="text-cream-muted">{t("baratto.step2")}</span>
                <ArrowRight className="w-4 h-4 text-gold/50" />
                <span className="text-cream-muted">{t("baratto.step3")}</span>
              </div>
            </div>

            <p className="text-cream font-display text-xl italic">
              {t("baratto.quote")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <img
              src={barattoImage}
              alt={t("baratto.imgAlt")}
              className="w-full aspect-square object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BarattoSection;
