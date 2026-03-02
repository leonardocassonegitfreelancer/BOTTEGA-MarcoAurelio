import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nidoImage from "@/assets/nido.jpg";
import mareeImage from "@/assets/maree-ring.png";
import anelliLisciImage from "@/assets/anelli-lisci.jpg";
import ariaImage from "@/assets/aria.webp";

interface ProductItem {
  image: string;
  name: string;
  desc: string;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description: string;
  items: ProductItem[];
  index: number;
}

const ProductSection = ({ title, subtitle, description, items, index }: ProductSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="mb-24 md:mb-32"
  >
    <div className="mb-12 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-display font-light text-cream mb-4">{title}</h2>
      <p className="text-cream-muted font-body font-light text-sm leading-relaxed max-w-2xl mx-auto">{description}</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
          </div>
          <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{item.name}</h3>
          <p className="text-cream-muted font-body text-xs leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Prodotti = () => {
  const { t } = useLanguage();

  const sections: ProductSectionProps[] = [
    {
      title: t("products.nido.title"),
      subtitle: t("products.nido.subtitle"),
      description: t("products.nido.desc"),
      index: 0,
      items: [
        { image: nidoImage, name: t("products.nido.item1.name"), desc: t("products.nido.item1.desc") },
        { image: nidoImage, name: t("products.nido.item2.name"), desc: t("products.nido.item2.desc") },
        { image: nidoImage, name: t("products.nido.item3.name"), desc: t("products.nido.item3.desc") },
      ],
    },
    {
      title: t("products.maree.title"),
      subtitle: t("products.maree.subtitle"),
      description: t("products.maree.desc"),
      index: 1,
      items: [
        { image: mareeImage, name: t("products.maree.item1.name"), desc: t("products.maree.item1.desc") },
        { image: mareeImage, name: t("products.maree.item2.name"), desc: t("products.maree.item2.desc") },
        { image: mareeImage, name: t("products.maree.item3.name"), desc: t("products.maree.item3.desc") },
      ],
    },
    {
      title: t("products.lisci.title"),
      subtitle: t("products.lisci.subtitle"),
      description: t("products.lisci.desc"),
      index: 2,
      items: [
        { image: anelliLisciImage, name: t("products.lisci.item1.name"), desc: t("products.lisci.item1.desc") },
        { image: anelliLisciImage, name: t("products.lisci.item2.name"), desc: t("products.lisci.item2.desc") },
        { image: anelliLisciImage, name: t("products.lisci.item3.name"), desc: t("products.lisci.item3.desc") },
      ],
    },
    {
      title: t("products.aria.title"),
      subtitle: t("products.aria.subtitle"),
      description: t("products.aria.desc"),
      index: 3,
      items: [
        { image: ariaImage, name: t("products.aria.item1.name"), desc: t("products.aria.item1.desc") },
        { image: ariaImage, name: t("products.aria.item2.name"), desc: t("products.aria.item2.desc") },
        { image: ariaImage, name: t("products.aria.item3.name"), desc: t("products.aria.item3.desc") },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container max-w-6xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("products.back")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
              {t("products.label")}
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-light text-cream">
              {t("products.title")}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="container max-w-6xl px-6 pb-24">
        {sections.map((section) => (
          <ProductSection key={section.title} {...section} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Prodotti;
