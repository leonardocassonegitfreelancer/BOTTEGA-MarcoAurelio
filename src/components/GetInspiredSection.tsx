import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const GetInspiredSection = () => {
  return (
    <section id="get-inspired" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-body">
            Seguici
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
            Get Inspired
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto font-body text-lg">
            Scopri le ultime creazioni, il dietro le quinte e l'ispirazione
            quotidiana della Bottega direttamente dal nostro profilo Instagram.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl border border-border overflow-hidden bg-card">
            <iframe
              title="Bottega MarcoAurelio Instagram"
              src="https://www.instagram.com/bottegamarcoaurelio/embed"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              allowTransparency
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/bottegamarcoaurelio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold hover:text-foreground transition-colors font-body tracking-wider uppercase text-sm"
          >
            <Instagram className="w-5 h-5" />
            @bottegamarcoaurelio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInspiredSection;
