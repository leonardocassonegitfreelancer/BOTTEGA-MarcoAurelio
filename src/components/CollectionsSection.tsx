import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import nidoImage from "@/assets/nido.jpg";
import kintsugiImage from "@/assets/kintsugi.jpg";
import initivmImage from "@/assets/initivm.png";
import ariaImage from "@/assets/aria.webp";
import mareeImage from "@/assets/maree-pezzi-unici.png";
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
      <p className="text-cream-muted font-body font-light text-sm leading-relaxed whitespace-pre-line">{description}</p>
    </Link>
  </motion.div>
);

const CollectionsSection = () => {
  const { t, lang } = useLanguage();

  const slugs = lang === "en"
    ? { fedi: "wedding-bands", pietre: "circular-rings", senza_pietre: "square-rings", filamento: "wire-rings", pezzi_unici: "unique-pieces" }
    : { fedi: "fedi-nuziali", pietre: "anelli-circolari", senza_pietre: "anelli-quadrati", filamento: "anelli-in-filamento", pezzi_unici: "pezzi-unici" };

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
      image: kintsugiImage,
      title: t("collections.kintsugi.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.kintsugi.desc"),
      alt: t("collections.kintsugi.alt"),
      categoryLink: `/prodotti/${slugs.pietre}`,
    },
    {
      image: initivmImage,
      title: "INITIVM",
      subtitle: t("collections.subtitle"),
      description: lang === "en"
        ? "Geometry as consequence of life. Square rings that carry the weight of an origin."
        : "Geometria come conseguenza della vita. Anelli quadrati che portano il peso di un'origine.",
      alt: lang === "en" ? "INITIVM square ring — handcrafted geometric jewel, Rome" : "Anello quadrato INITIVM — gioiello geometrico artigianale, Roma",
      categoryLink: `/prodotti/${slugs.senza_pietre}`,
    },
    {
      image: ariaImage,
      title: t("collections.aria.title"),
      subtitle: t("collections.subtitle"),
      description: t("collections.aria.desc"),
      alt: t("collections.aria.alt"),
      categoryLink: `/prodotti/${slugs.filamento}`,
    },
    {
      image: mareeImage,
      title: lang === "en" ? "Unique Pieces" : "Pezzi Unici",
      subtitle: lang === "en"
        ? "Collection: Artist's Inspiration"
        : "Collezione: Ispirazione dell'Artista",
      description: lang === "en"
        ? "Maree · Art Deco · Legione\n\nUnique, unrepeatable, unclassifiable pieces — and that's precisely what makes them extraordinary."
        : "Maree · Art Deco · Legione\n\nPezzi unici, irripetibili, inclassificabili — e proprio per questo straordinari.",
      alt: lang === "en" ? "Unique pieces — handcrafted one-of-a-kind jewels, Rome" : "Pezzi unici — gioielli artigianali irripetibili, Roma",
      categoryLink: `/prodotti/${slugs.pezzi_unici}`,
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
