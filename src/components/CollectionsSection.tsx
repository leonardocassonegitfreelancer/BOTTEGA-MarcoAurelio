import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/contexts/LanguageContext";

import nidoImage from "@/assets/nido.jpg";
import kintsugiImage from "@/assets/kintsugi.jpg";
import kintsugiStratiImage from "@/assets/kintsugi-strati.png";
import kintsugiStratiDetailImage from "@/assets/kintsugi-strati-detail.png";
import initivmImage from "@/assets/initivm.png";
import ariaImage from "@/assets/aria.webp";
import mareePezziUniciImage from "@/assets/maree-pezzi-unici.png";
import sbilanciamentoBiancoImage from "@/assets/sbilanciamento-bianco.png";
import sangue1Image from "@/assets/sangue-1.png";
import mareeFullImage from "@/assets/maree.jpg";
import anelliLisciImage from "@/assets/anelli-lisci.jpg";
import mvtaraNebvla1Image from "@/assets/mvtara-nebvla-1.png";
import navtilvs1Image from "@/assets/navtilvs-1.png";
import legioneImage from "@/assets/legione.webp";

type HomeCategoryKey = "anelli" | "fedi" | "bracciali" | "pendenti" | "pezzi_unici";

interface CollectionCardData {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  alt?: string;
  categoryLink: string;
}

const CardImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={img}
                alt={`${alt} ${i + 1}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); emblaApi?.scrollTo(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-gold w-4" : "bg-cream/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
        <CardImageCarousel images={card.images} alt={card.alt || card.title} />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
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

  const base = lang === "en" ? "/en/jewellery" : "/gioielli";
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
        images: [kintsugiImage, kintsugiStratiImage, kintsugiStratiDetailImage],
        title: "KINTSUGI",
        subtitle: lang === "en" ? "Circular Rings" : "Anelli Circolari",
        description: t("collections.kintsugi.desc"),
        alt: t("collections.kintsugi.alt"),
        categoryLink: `${base}/${slugs.pietre}`,
      },
      {
        images: [initivmImage],
        title: "INITIVM",
        subtitle: lang === "en" ? "Square Rings" : "Anelli Quadrati",
        description: lang === "en"
          ? "Geometry as consequence of life. Square rings that carry the weight of an origin."
          : "Geometria come conseguenza della vita. Anelli quadrati che portano il peso di un'origine.",
        categoryLink: `${base}/${slugs.senza_pietre}`,
      },
      {
        images: [ariaImage, navtilvs1Image],
        title: "ARIA · NAVTILVS",
        subtitle: lang === "en" ? "Wire Rings" : "Anelli in Filamento",
        description: lang === "en"
          ? "Lightness captured in wire. From the breath of Aria to the spiral of Nautilus."
          : "Leggerezza catturata nel filamento. Dal respiro di Aria alla spirale del Nautilus.",
        alt: t("collections.aria.alt"),
        categoryLink: `${base}/${slugs.filamento}`,
      },
    ],
    fedi: [
      {
        images: [nidoImage],
        title: t("collections.nido.title"),
        subtitle: lang === "en" ? "Wedding Bands" : "Fedi Nuziali",
        description: t("collections.nido.desc"),
        alt: t("collections.nido.alt"),
        categoryLink: `${base}/${slugs.fedi}`,
      },
    ],
    bracciali: [
      {
        images: [mareeFullImage],
        title: lang === "en" ? "Maree Bracelet" : "Bracciale Maree",
        subtitle: lang === "en" ? "Bracelets" : "Bracciali",
        description: lang === "en"
          ? "The wave motif extends from ring to wrist, a continuous flow of handcrafted metal."
          : "Il motivo ondoso si estende dall'anello al polso, un flusso continuo di metallo lavorato a mano.",
        categoryLink: `${base}/${slugs.bracciali}`,
      },
      {
        images: [anelliLisciImage],
        title: lang === "en" ? "Smooth Bracelet" : "Bracciale Liscio",
        subtitle: lang === "en" ? "Bracelets" : "Bracciali",
        description: lang === "en"
          ? "Essential purity. A clean surface that speaks through form alone."
          : "Purezza essenziale. Una superficie pulita che parla solo attraverso la forma.",
        categoryLink: `${base}/${slugs.bracciali}`,
      },
    ],
    pendenti: [
      {
        images: [sbilanciamentoBiancoImage],
        title: "Uno Sbilanciamento di Bianco",
        subtitle: lang === "en" ? "Pendants" : "Pendenti",
        description: lang === "en"
          ? "An asymmetric pendant in white gold — controlled imbalance as artistic expression."
          : "Un pendente asimmetrico in oro bianco — sbilanciamento controllato come espressione artistica.",
        categoryLink: `${base}/${slugs.pendenti}`,
      },
      {
        images: [sangue1Image],
        title: "SANGUE",
        subtitle: lang === "en" ? "Pendants" : "Pendenti",
        description: lang === "en"
          ? "Blood red meets precious metal. A visceral, unapologetic pendant."
          : "Il rosso sangue incontra il metallo prezioso. Un pendente viscerale e senza compromessi.",
        categoryLink: `${base}/${slugs.pendenti}`,
      },
    ],
    pezzi_unici: [
      {
        images: [mareePezziUniciImage],
        title: "Maree",
        subtitle: lang === "en" ? "Unique Pieces" : "Pezzi Unici",
        description: lang === "en"
          ? "Maree · Art Deco\n\nUnique, unrepeatable, unclassifiable pieces."
          : "Maree · Art Deco\n\nPezzi unici, irripetibili, inclassificabili.",
        categoryLink: `${base}/${slugs.pezzi_unici}`,
      },
      {
        images: [legioneImage],
        title: "LEGIONE",
        subtitle: lang === "en" ? "Collection" : "Collezione",
        description: lang === "en"
          ? "Born from those who resist. Bronze and emeralds forged into wearable armour."
          : "Nasce da chi resiste. Bronzo e smeraldi forgiati in un'armatura da indossare.",
        categoryLink: `${base}/${slugs.pezzi_unici}/legione`,
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
            to={
              activeTab === "anelli" ? `${base}/${slugs.pietre}`
              : activeTab === "fedi" ? `${base}/${slugs.fedi}`
              : activeTab === "pendenti" ? `${base}/${slugs.pendenti}`
              : activeTab === "bracciali" ? `${base}/${slugs.bracciali}`
              : `${base}/${slugs.pezzi_unici}`
            }
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300"
          >
            {lang === "en" ? "All Jewelry" : "Tutti i Gioielli"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
