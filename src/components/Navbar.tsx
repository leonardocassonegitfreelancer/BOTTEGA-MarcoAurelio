import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t("nav.bottega"), href: "#about" },
    { label: t("nav.collections"), href: "#collezioni" },
    { label: t("nav.baratto"), href: "#baratto" },
    { label: t("nav.contact"), href: "#contatti" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl tracking-wide text-cream">
          <span className="gradient-gold-text font-semibold">BOTTEGA</span>{" "}
          <span className="font-light italic">MarcoAurelio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-xs tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className="text-xs tracking-[0.15em] uppercase font-body border border-gold/30 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors duration-300 text-cream-muted"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className="text-xs tracking-[0.15em] uppercase font-body border border-gold/30 px-2 py-1 text-cream-muted hover:text-gold transition-colors"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cream p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="text-sm tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
