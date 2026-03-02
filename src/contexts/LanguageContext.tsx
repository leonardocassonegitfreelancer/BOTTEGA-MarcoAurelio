import React, { createContext, useContext, useState } from "react";

type Language = "it" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navbar
    "nav.bottega": "La Bottega",
    "nav.collections": "Collezioni",
    "nav.baratto": "Baratto",
    "nav.contact": "Contatti",

    // Hero
    "hero.subtitle": "Laboratorio Banco Orafo · Roma",
    "hero.tagline": "Qui i gioielli non sono prodotti in serie: nascono a banco, uno alla volta.",
    "hero.cta": "Scopri",
    "hero.imgAlt": "Gioiello artigianale",

    // About
    "about.label": "La Bottega",
    "about.title": "Nel cuore di Roma, un laboratorio dove il metallo rinasce",
    "about.p1": "Bottega MarcoAurelio è un Laboratorio Banco Orafo indipendente nel Centro Storico, nel cuore di Roma. L'accesso è su appuntamento, per garantire tempo, attenzione e ascolto a ogni persona.",
    "about.p2": "Tutte le opere esposte sono fatte da noi, da zero. Tutti pezzi unici. Non è una gemma da inserire in uno stampo già pronto — è la pietra che detta le proporzioni, il ritmo, l'equilibrio.",
    "about.imgAlt": "Laboratorio orafo",

    // Collections
    "collections.label": "Le Opere",
    "collections.title": "Collezioni",
    "collections.subtitle": "Collezione",
    "collections.nido.title": "Fedi NiDO",
    "collections.nido.desc": "Intrecci organici incisi nel metallo, come rami e foglie che si uniscono a proteggere ciò che custodiscono. Un'opera di pazienza, forza e destino condiviso.",
    "collections.maree.title": "Collezione Maree",
    "collections.maree.desc": "Ispirata al mare, al moto ondoso e agli abissi. La superficie increspata ricorda le onde che si infrangono sulla riva, un simbolo dell'eterno ciclo della vita.",
    "collections.kintsugi.title": "KINTSUGI",
    "collections.kintsugi.desc": "Luce e frattura. Le crepe diventano linee preziose che esaltano l'unicità della forma, rendendo la fragilità un atto di bellezza consapevole.",

    // Baratto
    "baratto.label": "Il Baratto",
    "baratto.title": "Dai nuova vita al tuo",
    "baratto.titleAccent": "Argento",
    "baratto.p1": "Portaci il tuo argento, così com'è. Anche rotto. Catenine spezzate, orecchini spaiati, posate piegate. Piccoli rottami.",
    "baratto.p2": "Cose che normalmente finiscono nei cassetti o nella spazzatura per noi sono valore. Qui recuperiamo cose dimenticate e le rendiamo desiderabili.",
    "baratto.step1": "Porti argento",
    "baratto.step2": "Lo pesiamo",
    "baratto.step3": "Lo trasformiamo",
    "baratto.quote": "\"Cambiagli la forma. Dagli un nuovo significato.\"",
    "baratto.imgAlt": "Baratto - trasformazione dell'argento",

    // Contact
    "contact.label": "Su Appuntamento",
    "contact.title": "Visite e Ordini",
    "contact.subtitle": "L'accesso è su appuntamento, per garantire tempo, attenzione e ascolto a ogni persona.",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsappNote": "Messaggi WhatsApp o SMS",
    "contact.hours": "Giorni ed Orari",
    "contact.hoursDesc": "Flessibili, concordati direttamente",
    "contact.location": "Dove Siamo",
    "contact.address1": "Via dei Cappellari 21",
    "contact.address2": "Campo de' Fiori, Roma",
    "contact.distance": "A 29 min a piedi dal Colosseo",
    "contact.instagram": "Instagram",

    // Products page
    "products.label": "Le Opere",
    "products.title": "I Nostri Gioielli",
    "products.back": "Torna alla home",
    "nav.products": "Prodotti",

    "products.nido.title": "Fedi NiDO",
    "products.nido.subtitle": "Fedi Nuziali",
    "products.nido.desc": "Intrecci organici incisi nel metallo, come rami e foglie che si uniscono a proteggere ciò che custodiscono. Un'opera di pazienza, forza e destino condiviso.",
    "products.nido.item1.name": "NiDO Classica",
    "products.nido.item1.desc": "Fede in argento con intreccio organico, finitura satinata.",
    "products.nido.item2.name": "NiDO Oro",
    "products.nido.item2.desc": "Fede in oro giallo 18kt con texture rami intrecciati.",
    "products.nido.item3.name": "NiDO Sottile",
    "products.nido.item3.desc": "Versione sottile, ideale come fede di promessa o quotidiana.",

    "products.maree.title": "Anelli Maree",
    "products.maree.subtitle": "Collezione",
    "products.maree.desc": "Ispirata al mare, al moto ondoso e agli abissi. La superficie increspata ricorda le onde che si infrangono sulla riva.",
    "products.maree.item1.name": "Maree Onda",
    "products.maree.item1.desc": "Anello in argento con superficie ondulata, finitura lucida.",
    "products.maree.item2.name": "Maree Abisso",
    "products.maree.item2.desc": "Anello largo con texture profonda, finitura ossidata.",
    "products.maree.item3.name": "Maree Risacca",
    "products.maree.item3.desc": "Fascia sottile con motivo onde delicate, finitura satinata.",

    "products.lisci.title": "Anelli Lisci",
    "products.lisci.subtitle": "Essenziali",
    "products.lisci.desc": "La purezza della forma senza pietre. Superfici levigate che esaltano la materia nuda — argento, oro, le loro sfumature.",
    "products.lisci.item1.name": "Fascia Pura",
    "products.lisci.item1.desc": "Anello a fascia in argento lucido, linea pulita e minimale.",
    "products.lisci.item2.name": "Cerchio d'Oro",
    "products.lisci.item2.desc": "Anello liscio in oro giallo 18kt, sezione tonda classica.",
    "products.lisci.item3.name": "Profilo Piatto",
    "products.lisci.item3.desc": "Anello a sezione piatta in argento, stile contemporaneo.",

    // Footer
    "footer.address": "Via dei Cappellari 21, Campo de' Fiori — Roma",
  },
  en: {
    // Navbar
    "nav.bottega": "The Workshop",
    "nav.collections": "Collections",
    "nav.baratto": "Silver Trade",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Goldsmith Bench Workshop · Rome",
    "hero.tagline": "Our jewels are not mass-produced: they are born at the bench, one at a time.",
    "hero.cta": "Discover",
    "hero.imgAlt": "Handcrafted jewellery",

    // About
    "about.label": "The Workshop",
    "about.title": "In the heart of Rome, a workshop where metal is reborn",
    "about.p1": "Bottega MarcoAurelio is an independent Goldsmith Bench Workshop in the Historic Centre of Rome. Access is by appointment only, to ensure time, attention and care for every person.",
    "about.p2": "Every piece on display is made by us, from scratch. All unique. It's not a gem to be set in a ready-made mould — it's the stone that dictates the proportions, rhythm and balance.",
    "about.imgAlt": "Goldsmith workshop",

    // Collections
    "collections.label": "The Works",
    "collections.title": "Collections",
    "collections.subtitle": "Collection",
    "collections.nido.title": "NiDO Wedding Bands",
    "collections.nido.desc": "Organic patterns etched in metal, like branches and leaves that intertwine to protect what they hold. A work of patience, strength and shared destiny.",
    "collections.maree.title": "Maree Collection",
    "collections.maree.desc": "Inspired by the sea, by waves and the deep. The rippled surface recalls waves breaking on the shore — a symbol of life's eternal cycle.",
    "collections.kintsugi.title": "KINTSUGI",
    "collections.kintsugi.desc": "Light and fracture. The cracks become precious lines that celebrate the uniqueness of form, making fragility a conscious act of beauty.",

    // Baratto
    "baratto.label": "Silver Trade",
    "baratto.title": "Give new life to your",
    "baratto.titleAccent": "Silver",
    "baratto.p1": "Bring us your silver, as it is. Even broken. Snapped chains, mismatched earrings, bent cutlery. Small scraps.",
    "baratto.p2": "Things that normally end up in drawers or the bin are valuable to us. Here we recover forgotten things and make them desirable again.",
    "baratto.step1": "Bring silver",
    "baratto.step2": "We weigh it",
    "baratto.step3": "We transform it",
    "baratto.quote": "\"Change its shape. Give it a new meaning.\"",
    "baratto.imgAlt": "Silver trade - silver transformation",

    // Contact
    "contact.label": "By Appointment",
    "contact.title": "Visits & Orders",
    "contact.subtitle": "Access is by appointment only, to ensure time, attention and care for every person.",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsappNote": "WhatsApp or SMS messages",
    "contact.hours": "Days & Hours",
    "contact.hoursDesc": "Flexible, arranged directly",
    "contact.location": "Find Us",
    "contact.address1": "Via dei Cappellari 21",
    "contact.address2": "Campo de' Fiori, Rome",
    "contact.distance": "29 min walk from the Colosseum",
    "contact.instagram": "Instagram",

    // Products page
    "products.label": "The Works",
    "products.title": "Our Jewellery",
    "products.back": "Back to home",
    "nav.products": "Products",

    "products.nido.title": "NiDO Wedding Bands",
    "products.nido.subtitle": "Wedding Bands",
    "products.nido.desc": "Organic patterns etched in metal, like branches and leaves that intertwine to protect what they hold. A work of patience, strength and shared destiny.",
    "products.nido.item1.name": "NiDO Classic",
    "products.nido.item1.desc": "Silver band with organic weave, satin finish.",
    "products.nido.item2.name": "NiDO Gold",
    "products.nido.item2.desc": "18kt yellow gold band with woven branch texture.",
    "products.nido.item3.name": "NiDO Slim",
    "products.nido.item3.desc": "Slim version, ideal as a promise or everyday band.",

    "products.maree.title": "Maree Rings",
    "products.maree.subtitle": "Collection",
    "products.maree.desc": "Inspired by the sea, by waves and the deep. The rippled surface recalls waves breaking on the shore.",
    "products.maree.item1.name": "Maree Wave",
    "products.maree.item1.desc": "Silver ring with undulating surface, polished finish.",
    "products.maree.item2.name": "Maree Abyss",
    "products.maree.item2.desc": "Wide ring with deep texture, oxidised finish.",
    "products.maree.item3.name": "Maree Undertow",
    "products.maree.item3.desc": "Slim band with delicate wave motif, satin finish.",

    "products.lisci.title": "Plain Rings",
    "products.lisci.subtitle": "Essentials",
    "products.lisci.desc": "The purity of form without stones. Polished surfaces that celebrate raw material — silver, gold, and their shades.",
    "products.lisci.item1.name": "Pure Band",
    "products.lisci.item1.desc": "Polished silver band, clean and minimal line.",
    "products.lisci.item2.name": "Gold Circle",
    "products.lisci.item2.desc": "Smooth 18kt yellow gold ring, classic round section.",
    "products.lisci.item3.name": "Flat Profile",
    "products.lisci.item3.desc": "Flat-section silver ring, contemporary style.",

    // Footer
    "footer.address": "Via dei Cappellari 21, Campo de' Fiori — Rome",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("it");

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
