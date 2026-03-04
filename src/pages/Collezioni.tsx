import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ariaImage from "@/assets/aria.webp";
import nidoImage from "@/assets/nido.jpg";
import initivmImage from "@/assets/initivm.png";
import kintsugiImage from "@/assets/kintsugi.jpg";
import mareePezziUniciImage from "@/assets/maree-pezzi-unici.png";
import mvtaraNebvla1Image from "@/assets/mvtara-nebvla-1.png";
import navtilvs1Image from "@/assets/navtilvs-1.png";
import sangue1Image from "@/assets/sangue-1.png";
import sbilanciamentoBiancoImage from "@/assets/sbilanciamento-bianco.png";

interface CollectionEntry {
  name: string;
  image: string;
  link: string;
  subtitle: string;
}

const Collezioni = () => {
  const { lang, t } = useLanguage();
  const homePath = lang === "en" ? "/home/en" : "/home";

  const collections: CollectionEntry[] = [
    {
      name: "ARIA",
      image: ariaImage,
      link: `/gioielli/${lang === "en" ? "wire-rings" : "anelli-in-filamento"}`,
      subtitle: lang === "en" ? "Wire Rings" : "Anelli in Filamento",
    },
    {
      name: lang === "en" ? "NiDO Wedding Bands" : "Fedi NiDO",
      image: nidoImage,
      link: `/prodotti/${lang === "en" ? "wedding-bands" : "fedi-nuziali"}`,
      subtitle: lang === "en" ? "Wedding Bands" : "Fedi Nuziali",
    },
    {
      name: "INITIVM",
      image: initivmImage,
      link: `/prodotti/${lang === "en" ? "square-rings" : "anelli-quadrati"}`,
      subtitle: lang === "en" ? "Square Rings" : "Anelli Quadrati",
    },
    {
      name: "KINTSUGI",
      image: kintsugiImage,
      link: `/prodotti/${lang === "en" ? "circular-rings" : "anelli-circolari"}`,
      subtitle: lang === "en" ? "Circular Rings" : "Anelli Circolari",
    },
    {
      name: "MAREE",
      image: mareePezziUniciImage,
      link: `/prodotti/${lang === "en" ? "unique-pieces" : "pezzi-unici"}`,
      subtitle: lang === "en" ? "Unique Pieces" : "Pezzi Unici",
    },
    {
      name: "MVTARA NEBVLA",
      image: mvtaraNebvla1Image,
      link: `/prodotti/${lang === "en" ? "circular-rings" : "anelli-circolari"}`,
      subtitle: lang === "en" ? "Circular Rings" : "Anelli Circolari",
    },
    {
      name: "NAVTILVS",
      image: navtilvs1Image,
      link: `/prodotti/${lang === "en" ? "wire-rings" : "anelli-in-filamento"}`,
      subtitle: lang === "en" ? "Wire Rings" : "Anelli in Filamento",
    },
    {
      name: "SANGUE",
      image: sangue1Image,
      link: `/prodotti/${lang === "en" ? "pendants" : "pendenti"}`,
      subtitle: lang === "en" ? "Pendants" : "Pendenti",
    },
    {
      name: lang === "en" ? "Uno Sbilanciamento di Bianco" : "Uno Sbilanciamento di Bianco",
      image: sbilanciamentoBiancoImage,
      link: `/prodotti/${lang === "en" ? "pendants" : "pendenti"}`,
      subtitle: lang === "en" ? "Pendants" : "Pendenti",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 md:pt-36 pb-4 md:pb-12">
        <div className="container max-w-6xl px-6">
          <Link
            to={homePath}
            className="inline-flex items-center gap-2 text-cream-muted hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to Home" : "Torna alla Home"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
              {lang === "en" ? "The Works" : "Le Opere"}
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-light text-cream">
              {lang === "en" ? "Collections" : "Collezioni"}
            </h1>
            <p className="text-cream-muted font-body text-sm mt-4 max-w-xl mx-auto">
              {lang === "en"
                ? "All our collections, each piece handcrafted in our workshop in the heart of Rome."
                : "Tutte le nostre collezioni, ogni pezzo realizzato a mano nel nostro laboratorio nel cuore di Roma."}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <Link to={col.link} className="block">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-1">
                    {col.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-light text-cream group-hover:text-gold transition-colors duration-300">
                    {col.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collezioni;
