import { motion } from "framer-motion";
import { MapPin, MessageCircle, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contatti" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
            {t("contact.label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-cream-muted font-body font-light max-w-lg mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          <a
            href="https://wa.me/3482762842"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 border border-border hover:border-gold/30 transition-colors duration-500 group"
          >
            <MessageCircle className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">{t("contact.whatsapp")}</h3>
              <a href="sms:+393482762842" className="text-cream-muted hover:text-gold font-body text-sm transition-colors">348.27.62.842</a>
              <p className="text-cream-muted font-body text-xs mt-1">{t("contact.whatsappNote")}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-6 border border-border">
            <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1">{t("contact.hours")}</h3>
              <p className="text-cream-muted font-body text-sm">{t("contact.hoursDesc")}</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/vt8LYbZqNG8UYNZb6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 border border-border hover:border-gold/30 transition-colors duration-500 group"
          >
            <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">{t("contact.location")}</h3>
              <p className="text-cream-muted font-body text-sm">{t("contact.address1")}</p>
              <p className="text-cream-muted font-body text-sm">{t("contact.address2")}</p>
              <p className="text-cream-muted font-body text-xs mt-2">{t("contact.distance")}</p>
            </div>
          </a>

          <a
            href="https://instagram.com/bottegamarcoaurelio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 border border-border hover:border-gold/30 transition-colors duration-500 group"
          >
            <Instagram className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">{t("contact.instagram")}</h3>
              <p className="text-cream-muted font-body text-sm">@bottegamarcoaurelio</p>
            </div>
          </a>
        </motion.div>

        {/* WhatsApp Contact Form */}
        <div className="mt-16">
          <WhatsAppContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 border border-border overflow-hidden"
        >
          <iframe
            title="Bottega MarcoAurelio - Via dei Cappellari 21, Roma"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123!2d12.4705!3d41.8956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604b17a674d1%3A0x7e3c3c7a1f6b4b0a!2sVia+dei+Cappellari%2C+21%2C+00186+Roma+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="350"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
