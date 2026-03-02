import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-cream">
          <span className="gradient-gold-text font-semibold">BOTTEGA</span>{" "}
          <span className="italic font-light">MarcoAurelio</span>
        </p>
        <p className="text-cream-muted font-body text-xs tracking-wider">
          {t("footer.address")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
