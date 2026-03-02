import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nidoImage from "@/assets/nido.jpg";
import mareeImage from "@/assets/maree-ring.png";
import anelliLisciImage from "@/assets/anelli-lisci.jpg";
import ariaImage from "@/assets/aria.webp";
import kintsugiImage from "@/assets/kintsugi.jpg";
import mareeFullImage from "@/assets/maree.jpg";

type Category = "fedi" | "pietre" | "senza_pietre" | "filamento" | "pendenti" | "bracciali";

interface ProductItem {
  image: string;
  name: string;
  desc: string;
}

const Prodotti = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("fedi");

  const categories: { key: Category; label: string }[] = [
    { key: "fedi", label: t("products.cat.fedi") },
    { key: "pietre", label: t("products.cat.pietre") },
    { key: "senza_pietre", label: t("products.cat.senza_pietre") },
    { key: "filamento", label: t("products.cat.filamento") },
    { key: "pendenti", label: t("products.cat.pendenti") },
    { key: "bracciali", label: t("products.cat.bracciali") },
  ];

  const products: Record<Category, { subtitle: string; description: string; items: ProductItem[] }> = {
    fedi: {
      subtitle: t("products.fedi.subtitle"),
      description: t("products.fedi.desc"),
      items: [
        { image: nidoImage, name: t("products.fedi.item1.name"), desc: t("products.fedi.item1.desc") },
        { image: nidoImage, name: t("products.fedi.item2.name"), desc: t("products.fedi.item2.desc") },
        { image: nidoImage, name: t("products.fedi.item3.name"), desc: t("products.fedi.item3.desc") },
      ],
    },
    pietre: {
      subtitle: t("products.pietre.subtitle"),
      description: t("products.pietre.desc"),
      items: [
        { image: kintsugiImage, name: t("products.pietre.item1.name"), desc: t("products.pietre.item1.desc") },
        { image: kintsugiImage, name: t("products.pietre.item2.name"), desc: t("products.pietre.item2.desc") },
        { image: kintsugiImage, name: t("products.pietre.item3.name"), desc: t("products.pietre.item3.desc") },
      ],
    },
    senza_pietre: {
      subtitle: t("products.senza_pietre.subtitle"),
      description: t("products.senza_pietre.desc"),
      items: [
        { image: anelliLisciImage, name: t("products.senza_pietre.item1.name"), desc: t("products.senza_pietre.item1.desc") },
        { image: mareeImage, name: t("products.senza_pietre.item2.name"), desc: t("products.senza_pietre.item2.desc") },
        { image: anelliLisciImage, name: t("products.senza_pietre.item3.name"), desc: t("products.senza_pietre.item3.desc") },
      ],
    },
    filamento: {
      subtitle: t("products.filamento.subtitle"),
      description: t("products.filamento.desc"),
      items: [
        { image: ariaImage, name: t("products.filamento.item1.name"), desc: t("products.filamento.item1.desc") },
        { image: ariaImage, name: t("products.filamento.item2.name"), desc: t("products.filamento.item2.desc") },
        { image: ariaImage, name: t("products.filamento.item3.name"), desc: t("products.filamento.item3.desc") },
      ],
    },
    pendenti: {
      subtitle: t("products.pendenti.subtitle"),
      description: t("products.pendenti.desc"),
      items: [
        { image: mareeFullImage, name: t("products.pendenti.item1.name"), desc: t("products.pendenti.item1.desc") },
        { image: kintsugiImage, name: t("products.pendenti.item2.name"), desc: t("products.pendenti.item2.desc") },
        { image: mareeFullImage, name: t("products.pendenti.item3.name"), desc: t("products.pendenti.item3.desc") },
      ],
    },
    bracciali: {
      subtitle: t("products.bracciali.subtitle"),
      description: t("products.bracciali.desc"),
      items: [
        { image: mareeFullImage, name: t("products.bracciali.item1.name"), desc: t("products.bracciali.item1.desc") },
        { image: anelliLisciImage, name: t("products.bracciali.item2.name"), desc: t("products.bracciali.item2.desc") },
        { image: mareeFullImage, name: t("products.bracciali.item3.name"), desc: t("products.bracciali.item3.desc") },
      ],
    },
  };

  const current = products[active];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-28 md:pt-36 pb-8 md:pb-12">
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

      {/* Category Tabs */}
      <div className="container max-w-6xl px-6 mb-12 md:mb-16">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-body border transition-all duration-300 ${
                active === cat.key
                  ? "border-gold text-gold bg-gold/10"
                  : "border-cream-muted/20 text-cream-muted hover:border-gold/50 hover:text-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container max-w-6xl px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-12 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">{current.subtitle}</p>
              <h2 className="text-3xl md:text-5xl font-display font-light text-cream mb-4">
                {categories.find((c) => c.key === active)?.label}
              </h2>
              <p className="text-cream-muted font-body font-light text-sm leading-relaxed max-w-2xl mx-auto">
                {current.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {current.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Prodotti;
