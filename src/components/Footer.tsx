import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border bg-card">
      <div className="container max-w-6xl px-6">
        {/* Brand */}
        <div className="text-center mb-10">
          <p className="font-display text-2xl text-foreground">
            <span className="gradient-gold-text font-semibold">BOTTEGA</span>{" "}
            <span className="italic font-light">MarcoAurelio</span>
          </p>
          <p className="text-muted-foreground font-body text-xs tracking-[0.2em] mt-2 uppercase">
            Laboratorio Banco Orafo · Roma
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <a
            href="https://maps.app.goo.gl/vt8LYbZqNG8UYNZb6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">
              {t("footer.address")}
            </span>
          </a>

          <a
            href="https://wa.me/3482762842"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">
              {t("footer.phone")}
            </span>
          </a>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground font-body text-sm">
              {t("footer.hours")}
            </span>
          </div>

          <a
            href="https://instagram.com/bottegamarcoaurelio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <Instagram className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">
              {t("footer.instagram")}
            </span>
          </a>
        </div>

        {/* Divider + legal */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground font-body text-xs">
            © {new Date().getFullYear()} Bottega MarcoAurelio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
