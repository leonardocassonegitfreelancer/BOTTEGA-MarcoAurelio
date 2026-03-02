import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import barattoImage from "@/assets/baratto.jpg";

const BarattoSection = () => {
  return (
    <section id="baratto" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-4">
            Riciclo Creativo
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-cream">
            Dai nuova vita al tuo{" "}
            <span className="gradient-gold-text italic">Argento</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 md:order-1"
          >
            <p className="text-cream-muted font-body font-light leading-relaxed text-lg">
              Portaci il tuo argento, così com'è. Anche rotto. Catenine spezzate, 
              orecchini spaiati, posate piegate. Piccoli rottami.
            </p>
            <p className="text-cream-muted font-body font-light leading-relaxed">
              Cose che normalmente finiscono nei cassetti o nella spazzatura per noi sono valore. 
              Qui recuperiamo cose dimenticate e le rendiamo desiderabili.
            </p>
            
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center gap-3 text-cream font-body text-sm">
                <span className="text-gold">Porti argento</span>
                <ArrowRight className="w-4 h-4 text-gold/50" />
                <span className="text-cream-muted">Lo pesiamo</span>
                <ArrowRight className="w-4 h-4 text-gold/50" />
                <span className="text-cream-muted">Lo trasformiamo</span>
              </div>
            </div>

            <p className="text-cream font-display text-xl italic">
              "Cambiagli la forma. Dagli un nuovo significato."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <img
              src={barattoImage}
              alt="Baratto - trasformazione dell'argento"
              className="w-full aspect-square object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BarattoSection;
