import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import nidoImage from "@/assets/nido.jpg";
import mareeImage from "@/assets/maree-ring.png";
import kintsugiImage from "@/assets/kintsugi.jpg";
import ariaImage from "@/assets/aria.webp";
import { useLanguage } from "@/contexts/LanguageContext";

interface CollectionCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  alt?: string;
  index: number;
  categoryLink: string;
}

const CollectionCard = ({ image, title, subtitle, description, alt, index, categoryLink }: CollectionCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
    className="group"
  >
    <Link to={categoryLink} className="block">
      <div className="relative overflow-hidden mb-6">
        <img
          src={image}
          alt={alt || title}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
      </div>
      <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-2">{subtitle}</p>
      <h3 className="text-2xl md:text-3xl font-display font-light text-cream mb-3 group-hover:text-gold transition-colors duration-300">{title}</h3>
      <p className="text-cream-muted font-body font-light text-sm leading-relaxed">{description}</p>
    </Link>
  </motion.div>
);

const CollectionsSection = () => {
  const { t, lang } = useLanguage();

  const slugs = lang === "en"
    ? { fedi: "wedding-bands", pietre: "rings-with-stones", senza_pietre: "rings-without-stones", filamento: "wire-rings" }
    : { fedi: "fedi-nuziali", pietre: "anelli-con-pietre", senza_pietre: "anelli-senza-pietre", filamento: "anelli-in-filamento" };

  const collections = [
    {
      image: nidoImage,
      title: t("collections.nido.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.nido.desc"),
      alt: t("collections.nido.alt"),
      categoryLink: `/prodotti/${slugs.fedi}`,
    },
    {
      image: mareeImage,
      title: t("collections.maree.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.maree.desc"),
      alt: t("collections.maree.alt"),
      categoryLink: `/prodotti/${slugs.senza_pietre}`,
    },
    {
      image: kintsugiImage,
      title: t("collections.kintsugi.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.kintsugi.desc"),
      alt: t("collections.kintsugi.alt"),
      categoryLink: `/prodotti/${slugs.pietre}`,
    },
    {
      image: ariaImage,
      title: t("collections.aria.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.aria.desc"),
      alt: t("collections.aria.alt"),
      categoryLink: `/prodotti/${slugs.filamento}`,
    },
  ];

  return (
    <section id="collezioni" className="py-24 md:py-32">
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
            {t("collections.label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream">
            {t("collections.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {collections.map((col, i) => (
            <CollectionCard key={col.title} {...col} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/prodotti"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300"
          >
            {t("nav.products")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
