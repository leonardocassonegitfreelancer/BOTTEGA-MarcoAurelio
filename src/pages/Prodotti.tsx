import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";
import CategoryCarousel from "@/components/CategoryCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import nidoImage from "@/assets/nido.jpg";
import mareeImage from "@/assets/maree-ring.png";
import anelliLisciImage from "@/assets/anelli-lisci.jpg";
import ariaImage from "@/assets/aria.webp";
import ariaLetteraDImage from "@/assets/aria-lettera-d.png";
import kintsugiImage from "@/assets/kintsugi.jpg";
import mareeFullImage from "@/assets/maree.jpg";
import kintsugiStratiImage from "@/assets/kintsugi-strati.png";
import kintsugiStratiDetailImage from "@/assets/kintsugi-strati-detail.png";
import initivmImage from "@/assets/initivm.png";
import kintsugiKatanaImage from "@/assets/kintsugi-katana.png";
import sbilanciamentoBiancoImage from "@/assets/sbilanciamento-bianco.png";
import sbilanciamentoLateraleImage from "@/assets/sbilanciamento-laterale.png";
import sbilanciamentoDettaglioImage from "@/assets/sbilanciamento-dettaglio.png";
import mvtaraNebvla1Image from "@/assets/mvtara-nebvla-1.png";
import mvtaraNebvla2Image from "@/assets/mvtara-nebvla-2.png";
import navtilvs1Image from "@/assets/navtilvs-1.png";
import navtilvs2Image from "@/assets/navtilvs-2.png";
import mareeDetail1Image from "@/assets/maree-detail-1.png";
import mareeDetail2Image from "@/assets/maree-detail-2.png";
import mareePezziUniciImage from "@/assets/maree-pezzi-unici.png";
import sangue1Image from "@/assets/sangue-1.png";
import sangue2Image from "@/assets/sangue-2.png";
import sangue3Image from "@/assets/sangue-3.png";
import sangue4Image from "@/assets/sangue-4.png";
import sbilBianco1Image from "@/assets/sbilanciamento-bianco-1.png";
import sbilBianco2Image from "@/assets/sbilanciamento-bianco-2.png";
import sbilBianco3Image from "@/assets/sbilanciamento-bianco-3.png";
import sbilBianco4Image from "@/assets/sbilanciamento-bianco-4.png";

type Category = "fedi" | "pietre" | "senza_pietre" | "filamento" | "pendenti" | "bracciali" | "pezzi_unici";

const slugToCategory: Record<string, Category> = {
  // Italian slugs
  "fedi-nuziali": "fedi",
  "anelli-circolari": "pietre",
  "anelli-quadrati": "senza_pietre",
  "anelli-in-filamento": "filamento",
  "pendenti": "pendenti",
  "bracciali": "bracciali",
  "pezzi-unici": "pezzi_unici",
  // English slugs
  "wedding-bands": "fedi",
  "circular-rings": "pietre",
  "square-rings": "senza_pietre",
  "wire-rings": "filamento",
  "pendants": "pendenti",
  "bracelets": "bracciali",
  "unique-pieces": "pezzi_unici",
  // Legacy slugs (backwards compatibility)
  "anelli-con-pietre": "pietre",
  "anelli-senza-pietre": "senza_pietre",
  "rings-with-stones": "pietre",
  "rings-without-stones": "senza_pietre"
};

const categoryToSlugIt: Record<Category, string> = {
  fedi: "fedi-nuziali",
  pietre: "anelli-circolari",
  senza_pietre: "anelli-quadrati",
  filamento: "anelli-in-filamento",
  pendenti: "pendenti",
  bracciali: "bracciali",
  pezzi_unici: "pezzi-unici"
};

const categoryToSlugEn: Record<Category, string> = {
  fedi: "wedding-bands",
  pietre: "circular-rings",
  senza_pietre: "square-rings",
  filamento: "wire-rings",
  pendenti: "pendants",
  bracciali: "bracelets",
  pezzi_unici: "unique-pieces"
};

interface ProductItem {
  image: string;
  images?: string[];
  name: string;
  desc: string;
}



const Prodotti = () => {
  const { t, lang } = useLanguage();
  const { categoria, subcollezione } = useParams<{categoria?: string;subcollezione?: string;}>();
  const navigate = useNavigate();
  const categoryToSlug = lang === "en" ? categoryToSlugEn : categoryToSlugIt;
  const resolvedCat = categoria && slugToCategory[categoria] || "fedi";
  const [active, setActive] = useState<Category>(resolvedCat);
  const [pendantSelection, setPendantSelection] = useState("");
  const ariaVideoRef = useRef<HTMLVideoElement>(null);
  const kintsugiVideoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    const cat = categoria && slugToCategory[categoria];
    if (cat) {
      setActive(cat);
    }
  }, [categoria]);

  const handleCategoryChange = (key: Category) => {
    setActive(key);
    navigate(`/gioielli/${categoryToSlug[key]}`, { replace: true });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    if (active === "filamento") {
      ariaVideoRef.current?.load();
    }
  }, [active]);

  const categories: {key: Category;label: string;}[] = [
  { key: "fedi", label: t("products.cat.fedi") },
  { key: "pietre", label: t("products.cat.pietre") },
  { key: "senza_pietre", label: t("products.cat.senza_pietre") },
  { key: "filamento", label: t("products.cat.filamento") },
  { key: "pendenti", label: t("products.cat.pendenti") },
  { key: "bracciali", label: t("products.cat.bracciali") },
  { key: "pezzi_unici", label: t("products.cat.pezzi_unici") }];


  const products: Record<Category, {subtitle: string;description: string;items: ProductItem[];}> = {
    fedi: {
      subtitle: t("products.fedi.subtitle"),
      description: t("products.fedi.desc"),
      items: [
      { image: nidoImage, name: t("products.fedi.item1.name"), desc: t("products.fedi.item1.desc") },
      { image: nidoImage, name: t("products.fedi.item2.name"), desc: t("products.fedi.item2.desc") },
      { image: nidoImage, name: t("products.fedi.item3.name"), desc: t("products.fedi.item3.desc") }]

    },
    pietre: {
      subtitle: t("products.pietre.subtitle"),
      description: t("products.pietre.desc"),
      items: [
      { image: kintsugiImage, images: [kintsugiImage, kintsugiStratiDetailImage, kintsugiKatanaImage], name: t("products.pietre.item1.name"), desc: t("products.pietre.item1.desc") },
      { image: mvtaraNebvla1Image, images: [mvtaraNebvla1Image, mvtaraNebvla2Image], name: t("products.pietre.mvtara.name"), desc: t("products.pietre.mvtara.desc") }]

    },
    senza_pietre: {
      subtitle: t("products.senza_pietre.subtitle"),
      description: t("products.senza_pietre.desc"),
      items: [
      { image: initivmImage, name: t("products.pietre.initivm.item1.name"), desc: t("products.pietre.initivm.item1.desc") }]

    },
    filamento: {
      subtitle: t("products.filamento.subtitle"),
      description: t("products.filamento.desc"),
      items: [
      { image: ariaImage, images: [ariaImage, ariaLetteraDImage], name: t("products.filamento.item1.name"), desc: t("products.filamento.item1.desc") },
      { image: navtilvs1Image, images: [navtilvs1Image, navtilvs2Image], name: t("products.filamento.navtilvs.name"), desc: t("products.filamento.navtilvs.desc") }]

    },
    pendenti: {
      subtitle: t("products.pendenti.subtitle"),
      description: t("products.pendenti.desc"),
      items: [
      { image: sbilanciamentoBiancoImage, images: [sbilanciamentoBiancoImage, sbilanciamentoLateraleImage, sbilanciamentoDettaglioImage], name: t("products.pendenti.sbilanciamento.name"), desc: t("products.pendenti.sbilanciamento.material") },
      { image: sangue1Image, images: [sangue1Image, sangue2Image, sangue3Image, sangue4Image], name: t("products.pendenti.sangue.name"), desc: t("products.pendenti.sangue.material") }]

    },
    bracciali: {
      subtitle: t("products.bracciali.subtitle"),
      description: t("products.bracciali.desc"),
      items: [
      { image: mareeFullImage, name: t("products.bracciali.item1.name"), desc: t("products.bracciali.item1.desc") },
      { image: anelliLisciImage, name: t("products.bracciali.item2.name"), desc: t("products.bracciali.item2.desc") },
      { image: mareeFullImage, name: t("products.bracciali.item3.name"), desc: t("products.bracciali.item3.desc") }]

    },
    pezzi_unici: {
      subtitle: t("products.pezzi_unici.subtitle"),
      description: t("products.pezzi_unici.desc"),
      items: [
      { image: mareeImage, images: [mareeImage, mareeDetail1Image, mareeDetail2Image], name: t("products.pezzi_unici.maree.name"), desc: t("products.pezzi_unici.maree.desc") }]

    }
  };

  const current = products[active];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-36 pb-4 md:pb-12">
        <div className="container max-w-6xl px-6">
          <Link
            to={lang === "en" ? "/home/en" : "/home"}
            className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors mb-6 md:mb-8">
            
            <ArrowLeft className="w-4 h-4" />
            {t("products.back")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-body mb-2 md:mb-4">
              {t("products.label")}
            </p>
            <h1 className="text-3xl md:text-6xl font-display font-light text-cream">
              {t("products.title")}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="container max-w-6xl px-6 mb-10 md:mb-16">
        {isMobile ?
        <CategoryCarousel
          categories={categories}
          active={active}
          onCategoryChange={handleCategoryChange} /> :


        <div className="flex gap-3 flex-wrap">
            {categories.map((cat) =>
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-body border transition-all duration-300 whitespace-nowrap ${
            active === cat.key ?
            "border-gold text-gold bg-gold/10" :
            "border-cream-muted/20 text-cream-muted hover:border-gold/50 hover:text-cream"}`
            }>
            
                {cat.label}
              </button>
          )}
          </div>
        }
      </div>

      {/* Product Grid */}
      <div className="container max-w-6xl px-6 pb-20 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold font-body mb-2 md:mb-3">{current.subtitle}</p>
              <h2 className="text-2xl md:text-5xl font-display font-light text-cream mb-3 md:mb-4">
                {categories.find((c) => c.key === active)?.label}
              </h2>
              <p className="text-cream-muted font-body font-light text-xs md:text-sm leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                {current.description}
              </p>
            </div>

            {active === "filamento" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                {/* --- ARIA Lettera D block --- */}
                <div className="mb-12 md:mb-16">
                  <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12">
                    <video
                    ref={ariaVideoRef}
                    src="/aria-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={ariaImage}
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: "hsl(var(--background))" }} />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic">
                      Collezione <span className="text-gold font-display not-italic">ARIA</span>. Decine, centinaia di pezzi, come in un Mosaico.<br />
                      Uniti in "aereo", <span className="text-gold">SENZA</span> "supporto".<br />
                      Gioielli <span className="text-gold">TRASPARENTI</span>, come ARIA.
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />

                    <p className="text-cream-muted font-body text-xs md:text-sm leading-relaxed">
                      <span className="text-cream font-display">Lettera D</span>, Opera. Anello creato anche con oro di Famiglia fornito dal Committente, per includere ricordo, presenza.
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />

                    <p className="text-cream font-body text-sm md:text-base leading-relaxed font-medium">
                      Manifattura: <span className="text-gold">790 €</span> ≈ ~440 gr di rottami d'argento 925
                    </p>
                  </div>

                  {/* ARIA product carousel */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[0].images || [current.items[0].image]} alt={current.items[0].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[0].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[0].desc}</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>

                {/* --- NAVTILVS / ARRAKIS block --- */}
                <div className="mb-12 md:mb-16">
                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                      <video
                      src="/navtilvs-intro.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={navtilvs1Image}
                      className="w-full h-full object-cover"
                      style={{ backgroundColor: "hsl(var(--background))" }} />
                    
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase mb-2">
                      {t("products.filamento.navtilvs.subtitle")}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                      NAVTILVS — ARRAKIS<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      {t("products.filamento.navtilvs.material")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />

                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic whitespace-pre-line">
                      {t("products.filamento.navtilvs.story")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  {/* NAVTILVS product carousel */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[1].images || [current.items[1].image]} alt={current.items[1].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[1].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[1].desc}</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {active === "pietre" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                {/* --- Kintsugi block --- */}
                <div className="mb-12 md:mb-16">
                  <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                    <video
                    ref={kintsugiVideoRef}
                    src="/kintsugi-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={kintsugiStratiImage}
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: "hsl(var(--background))" }} />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase mb-2">
                      {t("products.pietre.kintsugi.motto")}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-display font-light text-cream">
                      KINTSUGI<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic whitespace-pre-line">
                      {t("products.pietre.kintsugi.story").split("{gold}").map((part, i) => {
                      if (i === 0) return part;
                      const [gold, rest] = part.split("{/gold}");
                      return <span key={i}><span className="text-gold not-italic">{gold}</span>{rest}</span>;
                    })}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <div className="flex items-center justify-center gap-6 md:gap-8">
                      <p className="text-gold font-display text-2xl md:text-3xl leading-tight tracking-wide">
                        金<br />継<br />層
                      </p>
                      <div className="text-left">
                        <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-2">{t("products.pietre.kintsugi.strati.title")}</p>
                        <p className="text-cream-muted font-body text-xs md:text-sm leading-relaxed max-w-md whitespace-pre-line">
                          {t("products.pietre.kintsugi.strati.desc")}
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <div className="space-y-4 text-left max-w-lg mx-auto">
                      {[1, 2, 3, 4, 5].map((n) =>
                    <p key={n} className="text-cream font-body text-xs md:text-sm leading-relaxed">
                          <span className="text-gold font-display">{t(`products.pietre.kintsugi.layerLabel${n}`)}</span> {t(`products.pietre.kintsugi.layer${n}`)}
                        </p>
                    )}
                    </div>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <p className="text-cream-muted font-body text-xs md:text-sm leading-relaxed italic">
                      {t("products.pietre.kintsugi.closing")}
                    </p>
                  </div>

                  {/* Kintsugi product carousel */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[0].images || [current.items[0].image]} alt={current.items[0].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[0].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[0].desc}</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>

                {/* --- MVTARA NEBVLA ZERO block --- */}
                <div className="mb-12 md:mb-16">
                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                      <video
                      src="/mvtara-nebvla-intro.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={mvtaraNebvla1Image}
                      className="w-full h-full object-cover"
                      style={{ backgroundColor: "hsl(var(--background))" }} />
                    
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase mb-2">
                      {t("products.pietre.mvtara.subtitle")}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                      MVTARA NEBVLA ZERO<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      {t("products.pietre.mvtara.material")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />

                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic whitespace-pre-line">
                      {t("products.pietre.mvtara.story")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  {/* MVTARA product carousel */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[1].images || [current.items[1].image]} alt={current.items[1].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[1].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[1].desc}</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {/* INITIVM intro for square rings */}
            {active === "senza_pietre" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16">
              
                <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                  <video
                  src="/initivm-intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={initivmImage}
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "hsl(var(--background))" }} />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto space-y-6 text-center">
                  <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase mb-2">
                    {t("products.pietre.initivm.subtitle")}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-display font-light text-cream">
                    INITIVM<span className="text-gold">.</span>
                  </h3>
                  <p className="text-cream font-body text-sm md:text-base leading-relaxed italic whitespace-pre-line">
                    {t("products.pietre.initivm.story")}
                  </p>

                  <div className="w-12 h-px bg-gold/40 mx-auto" />

                  <p className="text-cream-muted font-body text-xs md:text-sm leading-relaxed">
                    {t("products.pietre.initivm.material")}
                  </p>

                  <p className="text-cream font-body text-sm md:text-base leading-relaxed font-medium">
                    Manifattura: <span className="text-gold">{t("products.pietre.initivm.price")}</span> ≈ {t("products.pietre.initivm.priceAlt")}
                  </p>

                  




                
                </div>
              </motion.div>
            }

            {/* Sbilanciamento di Bianco intro */}
            {active === "pendenti" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16">
              
                <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                  <video
                  src="/sbilanciamento-intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={sbilanciamentoBiancoImage}
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "hsl(var(--background))" }} />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto space-y-6 text-center">
                  <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                    Uno Sbilanciamento di Bianco<span className="text-gold">.</span>
                  </h3>
                  <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                    {t("products.pendenti.sbilanciamento.material")}
                  </p>

                  <div className="w-12 h-px bg-gold/40 mx-auto" />

                  <p className="text-cream font-body text-sm md:text-base leading-relaxed italic whitespace-pre-line">
                    {t("products.pendenti.sbilanciamento.story")}
                  </p>

                  <div className="w-12 h-px bg-gold/40 mx-auto" />

                </div>

                {/* Sbilanciamento di Bianco product carousel */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group">
                    <div className="relative overflow-hidden mb-4">
                      <ProductImageCarousel images={[sbilBianco1Image, sbilBianco2Image, sbilBianco3Image, sbilBianco4Image]} alt="Uno Sbilanciamento di Bianco" />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">Uno Sbilanciamento di Bianco</h3>
                    <p className="text-cream-muted font-body text-xs leading-relaxed">{t("products.pendenti.sbilanciamento.material")}</p>
                  </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center mt-10 md:mt-14">
                  <button
                  onClick={() => {
                    setPendantSelection("sbilanciamento_bianco");
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                  
                    {t("form.title")}
                  </button>
                </div>
              </motion.div>
            }

            {/* --- SANGUE block (under pendenti) --- */}
            {active === "pendenti" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              
                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>

                <div className="mb-12 md:mb-16">
                  <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                    <video
                    src="/sangue-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={sangue1Image}
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: "hsl(var(--background))" }} />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h3 className="text-3xl md:text-5xl font-display font-light text-cream">
                      SANGUE<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      {t("products.pendenti.sangue.subtitle")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />

                    <p className="text-cream font-body text-sm md:text-base leading-[2] italic whitespace-pre-line">
                      {t("products.pendenti.sangue.story")}
                    </p>

                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  {/* SANGUE product carousel */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[1].images || [current.items[1].image]} alt={current.items[1].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[1].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[1].desc}</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                {/* ◆ Diamond separator */}
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {/* --- Pezzi Unici --- */}
            {active === "pezzi_unici" && !subcollezione &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                  {[
                { slug: "maree", title: "MAREE", subtitle: "inprofvndvmmaris", image: mareeImage },
                { slug: "art-deco", title: "ART DECO", subtitle: lang === "en" ? "Unique piece" : "Pezzo unico", image: mareePezziUniciImage },
                { slug: "legione", title: "LEGIONE", subtitle: lang === "en" ? "Unique piece" : "Pezzo unico", image: mareeFullImage }].
                map((sub, i) =>
                <motion.div
                  key={sub.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group">
                  
                      <Link
                    to={`/gioielli/${lang === "en" ? "unique-pieces" : "pezzi-unici"}/${sub.slug}`}
                    className="block">
                    
                        <div className="relative overflow-hidden mb-4">
                          <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/0 transition-colors duration-500" />
                        </div>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-1">{sub.subtitle}</p>
                        <h3 className="text-xl md:text-2xl font-display font-light text-cream group-hover:text-gold transition-colors duration-300">{sub.title}</h3>
                      </Link>
                    </motion.div>
                )}
                </div>
              </motion.div>
            }

            {/* --- Pezzi Unici: MAREE sub --- */}
            {active === "pezzi_unici" && subcollezione === "maree" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                <div className="mb-4">
                  <Link
                  to={`/gioielli/${lang === "en" ? "unique-pieces" : "pezzi-unici"}`}
                  className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors">
                  
                    <ArrowLeft className="w-3 h-3" />
                    {lang === "en" ? "Unique Pieces" : "Pezzi Unici"}
                  </Link>
                </div>
                <div className="mb-12 md:mb-16">
                  <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden mb-8 md:mb-12 bg-background">
                    <video
                    src="/maree-intro.mp4"
                    autoPlay loop muted playsInline preload="auto"
                    poster={mareeImage}
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: "hsl(var(--background))" }} />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <p className="text-cream font-body text-sm md:text-base leading-[2] italic whitespace-pre-line">
                      {t("products.pezzi_unici.maree.poem")}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <p className="text-cream-muted font-body text-[10px] md:text-xs tracking-[0.2em]">
                      {t("products.pezzi_unici.maree.poemCredit")}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                      MAREE<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      inprofvndvmmaris
                    </p>
                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic">
                      {t("products.pezzi_unici.maree.desc")}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="group">
                      <div className="relative overflow-hidden mb-4">
                        <ProductImageCarousel images={current.items[0].images || [current.items[0].image]} alt={current.items[0].name} />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{current.items[0].name}</h3>
                      <p className="text-cream-muted font-body text-xs leading-relaxed">{current.items[0].desc}</p>
                    </motion.div>
                  </div>

                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {/* --- Pezzi Unici: ART DECO sub --- */}
            {active === "pezzi_unici" && subcollezione === "art-deco" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                <div className="mb-4">
                  <Link
                  to={`/prodotti/${lang === "en" ? "unique-pieces" : "pezzi-unici"}`}
                  className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors">
                  
                    <ArrowLeft className="w-3 h-3" />
                    {lang === "en" ? "Unique Pieces" : "Pezzi Unici"}
                  </Link>
                </div>
                <div className="mb-12 md:mb-16">
                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                      ART DECO<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      {lang === "en" ? "Unique piece" : "Pezzo unico"}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic">
                      {lang === "en" ?
                    "A unique piece born from the encounter between geometry and craftsmanship. Coming soon." :
                    "Un pezzo unico nato dall'incontro tra geometria e manifattura. In arrivo."}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {/* --- Pezzi Unici: LEGIONE sub --- */}
            {active === "pezzi_unici" && subcollezione === "legione" &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}>
              
                <div className="mb-4">
                  <Link
                  to={`/prodotti/${lang === "en" ? "unique-pieces" : "pezzi-unici"}`}
                  className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors">
                  
                    <ArrowLeft className="w-3 h-3" />
                    {lang === "en" ? "Unique Pieces" : "Pezzi Unici"}
                  </Link>
                </div>
                <div className="mb-12 md:mb-16">
                  <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h3 className="text-2xl md:text-4xl font-display font-light text-cream">
                      LEGIONE<span className="text-gold">.</span>
                    </h3>
                    <p className="text-cream-muted font-body text-xs tracking-[0.25em] uppercase">
                      {lang === "en" ? "Unique piece" : "Pezzo unico"}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                    <p className="text-cream font-body text-sm md:text-base leading-relaxed italic">
                      {lang === "en" ?
                    "A unique piece forged in the spirit of the legion. Coming soon." :
                    "Un pezzo unico forgiato nello spirito della legione. In arrivo."}
                    </p>
                    <div className="w-12 h-px bg-gold/40 mx-auto" />
                  </div>

                  <div className="text-center mt-10 md:mt-14">
                    <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                    
                      {t("form.title")}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 my-12 md:my-16">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="text-gold text-xs">◆</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </motion.div>
            }

            {/* Product grid (categories with unified grid only) */}
            {active !== "pietre" && active !== "filamento" && active !== "pezzi_unici" && active !== "pendenti" &&
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {current.items.map((item, i) =>
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group">
                
                    <div className="relative overflow-hidden mb-4">
                      {item.images && item.images.length > 1 ?
                  <ProductImageCarousel images={item.images} alt={item.name} /> :

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />

                  }
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-light text-cream mb-2">{item.name}</h3>
                    <p className="text-cream-muted font-body text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
              )}
              </div>
            }

            {/* CTA after INITIVM product grid */}
            {active === "senza_pietre" &&
            <div className="text-center mt-10 md:mt-14">
                <button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-background transition-colors duration-300">
                
                  {t("form.title")}
                </button>
              </div>
            }

            {/* ◆ Diamond separator before recommendations */}
            <div className="flex items-center gap-4 mt-16 md:mt-24 mb-12 md:mb-16">
              <div className="flex-1 h-px bg-gold/30" />
              <span className="text-gold text-xs">◆</span>
              <div className="flex-1 h-px bg-gold/30" />
            </div>

            {/* Related categories (BEFORE form) */}
            <div>
              <div className="text-center mb-8 md:mb-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-1">
                  {t("products.related.label")}
                </p>
                <h3 className="text-xl md:text-2xl font-display font-light text-cream">
                  {t("products.related.title")}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                {(() => {
                  const activeIdx = categories.findIndex((c) => c.key === active);
                  const prevCat = categories[(activeIdx - 1 + categories.length) % categories.length];
                  const nextCat = categories[(activeIdx + 1) % categories.length];
                  const pezziUnici = categories.find((c) => c.key === "pezzi_unici")!;

                  // Build related: prev, next, then always pezzi_unici last (deduplicated)
                  const related = [prevCat, nextCat].filter((c) => c.key !== "pezzi_unici" && c.key !== active);
                  // Ensure exactly 2 before pezzi_unici
                  if (related.length < 2) {
                    const extras = categories.filter((c) => c.key !== active && c.key !== "pezzi_unici" && !related.includes(c));
                    while (related.length < 2 && extras.length > 0) related.push(extras.shift()!);
                  }
                  const finalRelated = active === "pezzi_unici" ?
                  [prevCat, nextCat, categories.filter((c) => c.key !== active && c.key !== prevCat.key && c.key !== nextCat.key)[0]].filter(Boolean) :
                  [...related.slice(0, 2), pezziUnici];

                  return finalRelated.map((cat) => {
                    const representativeImage: Record<Category, string> = {
                      fedi: nidoImage,
                      pietre: kintsugiImage,
                      senza_pietre: initivmImage,
                      filamento: ariaImage,
                      pendenti: sbilanciamentoBiancoImage,
                      bracciali: mareeFullImage,
                      pezzi_unici: mareePezziUniciImage
                    };
                    return (
                      <button
                        key={cat.key}
                        onClick={() => handleCategoryChange(cat.key)}
                        className="group relative overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500">
                        
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={representativeImage[cat.key]}
                            alt={cat.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                          <p className="text-xs tracking-[0.2em] uppercase font-body text-cream group-hover:text-gold transition-colors duration-300">
                            {cat.label}
                          </p>
                        </div>
                      </button>);

                  });
                })()}
              </div>
            </div>

            {/* ◆ Diamond separator before form */}
            <div className="flex items-center gap-4 mt-16 md:mt-24 mb-12 md:mb-16">
              <div className="flex-1 h-px bg-gold/30" />
              <span className="text-gold text-xs">◆</span>
              <div className="flex-1 h-px bg-gold/30" />
            </div>

            {/* WhatsApp form (AFTER recommended) */}
            <div>
              <div id="contact-form" className="scroll-mt-28 border border-gold/20 p-6 md:p-10 max-w-xl mx-auto">
                <div className="text-center mb-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-1">
                    {t("form.label")}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-light text-cream">
                    {t("form.title")}
                  </h3>
                </div>
                <WhatsAppContactForm defaultCategory={active} defaultCollection={
                active === "fedi" ? "nido" :
                active === "pietre" ? "kintsugi" :
                active === "senza_pietre" ? "initivm" :
                active === "filamento" ? "aria" :
                active === "pendenti" ? pendantSelection :
                active === "pezzi_unici" ? "maree" :
                ""
                } compact />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>);

};

export default Prodotti;