import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import nidoImage from "@/assets/nido.jpg";
import kintsugiImage from "@/assets/kintsugi.jpg";
import initivmImage from "@/assets/initivm.png";
import ariaImage from "@/assets/aria.webp";
import mareePezziUniciImage from "@/assets/maree-pezzi-unici.png";
import sbilanciamentoBiancoImage from "@/assets/sbilanciamento-bianco.png";
import sangue1Image from "@/assets/sangue-1.png";
import mareeFullImage from "@/assets/maree.jpg";
import anelliLisciImage from "@/assets/anelli-lisci.jpg";
import mvtaraNebvla1Image from "@/assets/mvtara-nebvla-1.png";
import navtilvs1Image from "@/assets/navtilvs-1.png";

type HomeCategoryKey = "anelli" | "fedi" | "bracciali" | "pendenti" | "pezzi_unici";

interface CollectionCardData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  alt?: string;
  categoryLink: string;
}

const CollectionCard = ({ card, index }: { card: CollectionCardData; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <Link to={card.categoryLink} className="block">
      <div className="relative overflow-hidden mb-6">
        <img
          src={card.image}
          alt={card.alt || card.title}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
      </div>
      <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-2">{card.subtitle}</p>
      <h3 className="text-2xl md:text-3xl font-display font-light text-cream mb-3 group-hover:text-gold transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-cream-muted font-body font-light text-sm leading-relaxed whitespace-pre-line">
        {card.description}
      </p>
    </Link>
  </motion.div>
);

const CollectionsSection = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<HomeCategoryKey>("anelli");

  const tabs: { key: HomeCategoryKey; label: string }[] = [
    { key: "anelli", label: lang === "en" ? "Rings" : "Anelli" },
    { key: "pezzi_unici", label: lang === "en" ? "Unique Pieces" : "Pezzi Unici" },
    { key: "fedi", label: lang === "en" ? "Wedding Bands" : "Fedi" },
    { key: "pendenti", label: lang === "en" ? "Pendants" : "Pendenti" },
    { key: "bracciali", label: lang === "en" ? "Bracelets" : "Bracciali" },
  ];

  const slugs = lang === "en"
    ? {
        pietre: "circular-rings",
        senza_pietre: "square-rings",
        filamento: "wire-rings",
        fedi: "wedding-bands",
        pezzi_unici: "unique-pieces",
        pendenti: "pendants",
        bracciali: "bracelets",
      }
    : {
        pietre: "anelli-circolari",
        senza_pietre: "anelli-quadrati",
        filamento: "anelli-in-filamento",
        fedi: "fedi-nuziali",
        pezzi_unici: "pezzi-unici",
        pendenti: "pendenti",
        bracciali: "bracciali",
      };

  const cardsByTab: Record<HomeCategoryKey, CollectionCardData[]> = {
    anelli: [
      {
        image: kintsugiImage,
        title: "KINTSUGI",
        subtitle: lang === "en" ? "Circular Rings" : "Anelli Circolari",
        description: t("collections.kintsugi.desc"),
        alt: t("collections.kintsugi.alt"),
        categoryLink: `/prodotti/${slugs.pietre}`,
      },
      {
        image: initivmImage,
        title: "INITIVM",
        subtitle: lang === "en" ? "Square Rings" : "Anelli Quadrati",
        description: lang === "en"
          ? "Geometry as consequence of life. Square rings that carry the weight of an origin."
          : "Geometria come conseguenza della vita. Anelli quadrati che portano il peso di un'origine.",
        categoryLink: `/prodotti/${slugs.senza_pietre}`,
      },
      {
        image: ariaImage,
        title: "ARIA",
        subtitle: lang === "en" ? "Wire Rings" : "Anelli in Filamento",
        description: t("collections.aria.desc"),
        alt: t("collections.aria.alt"),
        categoryLink: `/prodotti/${slugs.filamento}`,
      },
      {
        image: mvtaraNebvla1Image,
        title: "MVTARA NEBVLA",
        subtitle: lang === "en" ? "Circular Rings" : "Anelli Circolari",
        description: lang === "en"
          ? "Celestial forms captured in precious metal."
          : "Forme celesti catturate nel metallo prezioso.",
        categoryLink: `/prodotti/${slugs.pietre}`,
      },
      {
        image: navtilvs1Image,
        title: "NAVTILVS",
        subtitle: lang === "en" ? "Wire Rings" : "Anelli in Filamento",
        description: lang === "en"
          ? "Spiral geometry inspired by the nautilus shell."
          : "Geometria a spirale ispirata alla conchiglia del nautilus.",
        categoryLink: `/prodotti/${slugs.filamento}`,
      },
    ],
    fedi: [
      {
        image: nidoImage,
        title: t("collections.nido.title"),
        subtitle: lang === "en" ? "Wedding Bands" : "Fedi Nuziali",
        description: t("collections.nido.desc"),
        alt: t("collections.nido.alt"),
        categoryLink: `/prodotti/${slugs.fedi}`,
      },
    ],
    bracciali: [
      {
        image: mareeFullImage,
        title: lang === "en" ? "Maree Bracelet" : "Bracciale Maree",
        subtitle: lang === "en" ? "Bracelets" : "Bracciali",
        description: lang === "en"
          ? "The wave motif extends from ring to wrist, a continuous flow of handcrafted metal."
          : "Il motivo ondoso si estende dall'anello al polso, un flusso continuo di metallo lavorato a mano.",
        categoryLink: `/prodotti/${slugs.bracciali}`,
      },
      {
        image: anelliLisciImage,
        title: lang === "en" ? "Smooth Bracelet" : "Bracciale Liscio",
        subtitle: lang === "en" ? "Bracelets" : "Bracciali",
        description: lang === "en"
          ? "Essential purity. A clean surface that speaks through form alone."
          : "Purezza essenziale. Una superficie pulita che parla solo attraverso la forma.",
        categoryLink: `/prodotti/${slugs.bracciali}`,
      },
    ],
    pendenti: [
      {
        image: sbilanciamentoBiancoImage,
        title: "Uno Sbilanciamento di Bianco",
        subtitle: lang === "en" ? "Pendants" : "Pendenti",
        description: lang === "en"
          ? "An asymmetric pendant in white gold — controlled imbalance as artistic expression."
          : "Un pendente asimmetrico in oro bianco — sbilanciamento controllato come espressione artistica.",
        categoryLink: `/prodotti/${slugs.pendenti}`,
      },
      {
        image: sangue1Image,
        title: "SANGUE",
        subtitle: lang === "en" ? "Pendants" : "Pendenti",
        description: lang === "en"
          ? "Blood red meets precious metal. A visceral, unapologetic pendant."
          : "Il rosso sangue incontra il metallo prezioso. Un pendente viscerale e senza compromessi.",
        categoryLink: `/prodotti/${slugs.pendenti}`,
      },
    ],
    pezzi_unici: [
      {
        image: mareePezziUniciImage,
        title: lang === "en" ? "Unique Pieces" : "Pezzi Unici",
        subtitle: lang === "en" ? "Collection" : "Collezione",
        description: lang === "en"
          ? "Maree · Art Deco · Legione\n\nUnique, unrepeatable, unclassifiable pieces."
          : "Maree · Art Deco · Legione\n\nPezzi unici, irripetibili, inclassificabili.",
        categoryLink: `/prodotti/${slugs.pezzi_unici}`,
      },
    ],
  };

  const currentCards = cardsByTab[activeTab];

  return (
    <section id="collezioni" className="py-24 md:py-32">
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
            {t("collections.label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream">
            {t("collections.title")}
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase font-body border transition-all duration-300 ${
                activeTab === tab.key
                  ? "border-gold text-gold bg-gold/10"
                  : "border-cream-muted/20 text-cream-muted/60 hover:border-cream-muted/40 hover:text-cream-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {currentCards.map((card, i) => (
              <CollectionCard key={card.title} card={card} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/collezioni"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300"
          >
            {lang === "en" ? "All Collections" : "Tutte le Collezioni"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
