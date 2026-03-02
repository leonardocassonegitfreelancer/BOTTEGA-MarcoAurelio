import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const homePath = lang === "en" ? "/home/en" : "/home";

  const links = [
    { label: t("nav.bottega"), href: "#about" },
    { label: t("nav.collections"), href: "#collezioni" },
    { label: t("nav.products"), href: "/prodotti", isRoute: true },
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

    const isOnHome = location.pathname === "/home" || location.pathname === "/home/en";
    if (isOnHome) {
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      // Navigate to home with hash
      navigate(`${homePath}${href}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl px-6 flex items-center justify-between h-16 md:h-20">
        <Link to={homePath} className="font-display text-xl md:text-2xl tracking-wide text-cream">
          <span className="gradient-gold-text font-semibold">BOTTEGA</span>{" "}
          <span className="font-light italic">MarcoAurelio</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-xs tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-xs tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            )
          )}
          {/* Language toggle */}
          <button
            onClick={() => {
              const newLang = lang === "it" ? "en" : "it";
              setLang(newLang);
              const isOnHome = location.pathname === "/home" || location.pathname === "/home/en";
              if (isOnHome) {
                navigate(newLang === "en" ? "/home/en" : "/home");
              }
            }}
            className="text-xs tracking-[0.15em] uppercase font-body border border-gold/30 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors duration-300 text-cream-muted"
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => {
              const newLang = lang === "it" ? "en" : "it";
              setLang(newLang);
              const isOnHome = location.pathname === "/home" || location.pathname === "/home/en";
              if (isOnHome) {
                navigate(newLang === "en" ? "/home/en" : "/home");
              }
            }}
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
              {links.map((l) =>
                l.isRoute ? (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-sm tracking-[0.2em] uppercase font-body text-cream-muted hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
