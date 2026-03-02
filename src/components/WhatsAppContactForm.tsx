import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";

interface WhatsAppContactFormProps {
  /** Pre-select a category when used from a product page */
  defaultCategory?: string;
  /** Compact variant for product pages */
  compact?: boolean;
}

const PHONE = "393482762842";

const WhatsAppContactForm = ({ defaultCategory, compact = false }: WhatsAppContactFormProps) => {
  const { t, lang } = useLanguage();

  const categoryOptions = [
    { value: "fedi", label: t("products.cat.fedi") },
    { value: "pietre", label: t("products.cat.pietre") },
    { value: "senza_pietre", label: t("products.cat.senza_pietre") },
    { value: "filamento", label: t("products.cat.filamento") },
    { value: "pendenti", label: t("products.cat.pendenti") },
    { value: "bracciali", label: t("products.cat.bracciali") },
    { value: "altro", label: lang === "it" ? "Altro" : "Other" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(defaultCategory || "");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(1, t("form.error.name")).max(100),
    email: z.string().trim().email(t("form.error.email")).max(255),
    category: z.string().min(1, t("form.error.category")),
    message: z.string().trim().min(1, t("form.error.message")).max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, email, category, message });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const categoryLabel = categoryOptions.find((c) => c.value === category)?.label || category;
    const text = lang === "it"
      ? `Salve, mi chiamo ${name.trim()}.\n\nSono interessato/a a: ${categoryLabel}\n\nMessaggio: ${message.trim()}\n\nEmail per risposta: ${email.trim()}`
      : `Hello, my name is ${name.trim()}.\n\nI'm interested in: ${categoryLabel}\n\nMessage: ${message.trim()}\n\nReply email: ${email.trim()}`;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full bg-transparent border border-cream-muted/20 px-4 py-3 text-cream font-body text-sm placeholder:text-cream-muted/40 focus:border-gold focus:outline-none transition-colors duration-300";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`w-full max-w-xl ${compact ? "" : "mx-auto"}`}
    >
      {!compact && (
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-2">
            {t("form.label")}
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-light text-cream">
            {t("form.title")}
          </h3>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("form.name")}
            className={inputClass}
            maxLength={100}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("form.email")}
            className={inputClass}
            maxLength={255}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>}
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputClass} ${!category ? "text-cream-muted/40" : ""}`}
          >
            <option value="" disabled>
              {t("form.category")}
            </option>
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-background text-cream">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-400 text-xs mt-1 font-body">{errors.category}</p>}
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("form.message")}
            rows={4}
            className={`${inputClass} resize-none`}
            maxLength={1000}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background font-body text-sm md:text-base tracking-[0.15em] uppercase font-medium hover:bg-gold/90 transition-colors duration-300"
        >
          <Send className="w-4 h-4" />
          {t("form.send")}
        </button>
      </div>
    </motion.form>
  );
};

export default WhatsAppContactForm;
