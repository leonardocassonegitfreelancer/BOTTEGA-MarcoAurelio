import { motion } from "framer-motion";
import workshopImage from "@/assets/workshop.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={workshopImage}
                alt={t("about.imgAlt")}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold font-body">
              {t("about.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight text-cream">
              {t("about.title")}
            </h2>
            <div className="w-16 h-px bg-gold/40" />
            <p className="text-cream-muted font-body font-light leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-cream-muted font-body font-light leading-relaxed">
              {t("about.p2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
