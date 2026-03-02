import { motion } from "framer-motion";
import { MapPin, MessageCircle, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
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
            Su Appuntamento
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream mb-6">
            Visite e Ordini
          </h2>
          <p className="text-cream-muted font-body font-light max-w-lg mx-auto">
            L'accesso è su appuntamento, per garantire tempo, attenzione e ascolto a ogni persona.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/3482762842"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 border border-border hover:border-gold/30 transition-colors duration-500 group"
          >
            <MessageCircle className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">WhatsApp</h3>
              <p className="text-cream-muted font-body text-sm">348.27.62.842</p>
              <p className="text-cream-muted font-body text-xs mt-1">Solo messaggi</p>
            </div>
          </a>

          {/* Orari */}
          <div className="flex items-start gap-4 p-6 border border-border">
            <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1">Giorni ed Orari</h3>
              <p className="text-cream-muted font-body text-sm">Flessibili, concordati direttamente</p>
            </div>
          </div>

          {/* Indirizzo */}
          <div className="flex items-start gap-4 p-6 border border-border">
            <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1">Dove Siamo</h3>
              <p className="text-cream-muted font-body text-sm">Via dei Cappellari 21</p>
              <p className="text-cream-muted font-body text-sm">Campo de' Fiori, Roma</p>
              <p className="text-cream-muted font-body text-xs mt-2">
                A 29 min a piedi dal Colosseo
              </p>
            </div>
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/bottegamarcoaurelio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 border border-border hover:border-gold/30 transition-colors duration-500 group"
          >
            <Instagram className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">Instagram</h3>
              <p className="text-cream-muted font-body text-sm">@bottegamarcoaurelio</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
