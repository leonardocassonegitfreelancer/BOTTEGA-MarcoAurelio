import React, { createContext, useContext, useState, useEffect } from "react";

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
    "collections.kintsugi.desc": "Luce e frattura. La materia si spezza, l'oro non nasconde: rivela. Strati di incisione, diamante e fuoco — ciò che si è rotto non torna com'era. Diventa più vero.",
    "collections.aria.title": "ARIA",
    "collections.aria.desc": "Decine, centinaia di elementi uniti in aria, senza supporto — come un mosaico sospeso nel vuoto. La struttura regge sé stessa. Il risultato è un gioiello trasparente, leggero come l'aria che lo attraversa.",

    "collections.nido.alt": "Fedi NiDO intrecciate a mano — fedi nuziali artigianali in oro e argento, Roma",
    "collections.maree.alt": "Anello Maree con superficie ondulata — gioiello artigianale ispirato al mare, Roma",
    "collections.kintsugi.alt": "Gioiello Kintsugi con venature dorate — arte orafa giapponese rivisitata a Roma",
    "collections.aria.alt": "Anello ARIA in oro traforato — gioiello artigianale trasparente realizzato a mano a Roma",

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

    // Contact form
    "form.label": "Scrivici",
    "form.title": "Invia un Messaggio",
    "form.name": "Il tuo nome",
    "form.email": "La tua email",
    "form.category": "Tipo di opera",
    "form.message": "Il tuo messaggio...",
    "form.send": "Invia su WhatsApp",
    "form.error.name": "Inserisci il tuo nome",
    "form.error.email": "Inserisci un'email valida",
    "form.error.category": "Seleziona un tipo di opera",
    "form.error.message": "Inserisci un messaggio",

    // Products page
    "products.label": "Le Opere",
    "products.title": "I Nostri Gioielli",
    "products.back": "Torna alla home",
    "nav.products": "Tutte le Opere",

    // Product categories
    "products.cat.fedi": "Fedi Nuziali",
    "products.cat.pietre": "Anelli con Pietre",
    "products.cat.senza_pietre": "Anelli senza Pietre",
    "products.cat.filamento": "Anelli in Filamento",
    "products.cat.pendenti": "Pendenti",
    "products.cat.bracciali": "Bracciali",

    "products.fedi.subtitle": "Fedi Nuziali",
    "products.fedi.desc": "Fedi forgiate a mano, intrecci organici incisi nel metallo. Un'opera di pazienza, forza e destino condiviso.",
    "products.fedi.item1.name": "NiDO Classica",
    "products.fedi.item1.desc": "Fede in argento con intreccio organico, finitura satinata.",
    "products.fedi.item2.name": "NiDO Oro",
    "products.fedi.item2.desc": "Fede in oro giallo 18kt con texture rami intrecciati.",
    "products.fedi.item3.name": "NiDO Sottile",
    "products.fedi.item3.desc": "Versione sottile, ideale come fede di promessa o quotidiana.",

    "products.pietre.subtitle": "Con Pietre",
    "products.pietre.desc": "Pietre naturali incastonate a mano — la gemma detta le proporzioni, il ritmo, l'equilibrio dell'opera.",
    "products.pietre.item1.name": "Kintsugi Zaffiro",
    "products.pietre.item1.desc": "Anello con venature dorate e zaffiro centrale incastonato.",
    "products.pietre.item2.name": "Kintsugi Rubino",
    "products.pietre.item2.desc": "Fascia larga con frattura dorata e rubino naturale.",
    "products.pietre.item3.name": "Solitario Maree",
    "products.pietre.item3.desc": "Anello con superficie ondulata e diamante centrale.",

    "products.senza_pietre.subtitle": "Essenziali",
    "products.senza_pietre.desc": "La purezza della forma senza pietre. Superfici levigate che esaltano la materia nuda — argento, oro, le loro sfumature.",
    "products.senza_pietre.item1.name": "Fascia Pura",
    "products.senza_pietre.item1.desc": "Anello a fascia in argento lucido, linea pulita e minimale.",
    "products.senza_pietre.item2.name": "Maree Onda",
    "products.senza_pietre.item2.desc": "Anello in argento con superficie ondulata, finitura lucida.",
    "products.senza_pietre.item3.name": "Profilo Piatto",
    "products.senza_pietre.item3.desc": "Anello a sezione piatta in argento, stile contemporaneo.",

    "products.filamento.subtitle": "Filamento",
    "products.filamento.desc": "Decine di elementi uniti in aria, senza supporto\n\"Come un mosaico sospeso nel vuoto.\"\nIl risultato è un gioiello trasparente, leggero come l'aria.",
    "products.filamento.item1.name": "ARIA Anello",
    "products.filamento.item1.desc": "Anello traforato in oro, struttura aerea e trasparente.",
    "products.filamento.item2.name": "ARIA Fascia",
    "products.filamento.item2.desc": "Fascia larga con trama a mosaico sospeso, finitura lucida.",
    "products.filamento.item3.name": "ARIA Sottile",
    "products.filamento.item3.desc": "Versione sottile con elementi traforati, leggerezza quotidiana.",

    "products.pendenti.subtitle": "Pendenti",
    "products.pendenti.desc": "Opere sospese — pendenti forgiati a mano che catturano la luce e il movimento. Ogni pezzo è unico.",
    "products.pendenti.item1.name": "Goccia Maree",
    "products.pendenti.item1.desc": "Pendente a goccia con superficie ondulata, argento satinato.",
    "products.pendenti.item2.name": "Kintsugi Pendente",
    "products.pendenti.item2.desc": "Pendente con frattura dorata e pietra naturale.",
    "products.pendenti.item3.name": "Foglia NiDO",
    "products.pendenti.item3.desc": "Pendente a foglia intrecciata, finitura ossidata e oro.",

    "products.bracciali.subtitle": "Bracciali",
    "products.bracciali.desc": "Fasce e catene forgiate a banco — bracciali che raccontano la forza e la delicatezza del metallo lavorato a mano.",
    "products.bracciali.item1.name": "Onda Bracciale",
    "products.bracciali.item1.desc": "Bracciale rigido con texture ondulata, argento lucido.",
    "products.bracciali.item2.name": "Fascia Liscia",
    "products.bracciali.item2.desc": "Bracciale a fascia minimale in argento satinato.",
    "products.bracciali.item3.name": "Catena Maree",
    "products.bracciali.item3.desc": "Bracciale a catena con maglie organiche, finitura ossidata.",

    // Testimonial
    "testimonial.quote": "\"Opere d'arte uniche, capolavori.\nUna persona eccezionale.\nNel laboratorio si assapora la passione di chi ha dedicato la vita a un'arte che sta scomparendo.\nPerché qui si parla di un artista vero.\"",
    "testimonial.author": "Valerio S.",

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
    "collections.kintsugi.desc": "Light and fracture. The metal breaks, gold does not conceal: it reveals. Layers of engraving, diamond and fire — what was broken does not return as it was. It becomes more true.",
    "collections.aria.title": "ARIA",
    "collections.aria.desc": "Tens, hundreds of elements joined mid-air, without support — like a mosaic suspended in the void. The structure holds itself. The result is a transparent jewel, light as the air that passes through it.",

    "collections.nido.alt": "Handwoven NiDO wedding bands — artisan gold and silver rings, Rome",
    "collections.maree.alt": "Maree ring with wave-textured surface — sea-inspired handcrafted jewel, Rome",
    "collections.kintsugi.alt": "Kintsugi jewel with golden veins — Japanese-inspired goldsmith art in Rome",
    "collections.aria.alt": "ARIA openwork gold ring — handcrafted transparent jewel made in Rome",

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

    // Contact form
    "form.label": "Get in Touch",
    "form.title": "Send a Message",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.category": "Type of piece",
    "form.message": "Your message...",
    "form.send": "Send via WhatsApp",
    "form.error.name": "Please enter your name",
    "form.error.email": "Please enter a valid email",
    "form.error.category": "Please select a type",
    "form.error.message": "Please enter a message",

    // Products page
    "products.label": "The Works",
    "products.title": "Our Jewellery",
    "products.back": "Back to home",
    "nav.products": "All Works",

    // Product categories
    "products.cat.fedi": "Wedding Bands",
    "products.cat.pietre": "Rings with Stones",
    "products.cat.senza_pietre": "Rings without Stones",
    "products.cat.filamento": "Wire Rings",
    "products.cat.pendenti": "Pendants",
    "products.cat.bracciali": "Bracelets",

    "products.fedi.subtitle": "Wedding Bands",
    "products.fedi.desc": "Hand-forged wedding bands with organic woven patterns etched in metal. A work of patience, strength and shared destiny.",
    "products.fedi.item1.name": "NiDO Classic",
    "products.fedi.item1.desc": "Silver band with organic weave, satin finish.",
    "products.fedi.item2.name": "NiDO Gold",
    "products.fedi.item2.desc": "18kt yellow gold band with woven branch texture.",
    "products.fedi.item3.name": "NiDO Slim",
    "products.fedi.item3.desc": "Slim version, ideal as a promise or everyday band.",

    "products.pietre.subtitle": "With Stones",
    "products.pietre.desc": "Natural stones set by hand — the gem dictates the proportions, rhythm and balance of the piece.",
    "products.pietre.item1.name": "Kintsugi Sapphire",
    "products.pietre.item1.desc": "Ring with golden veins and central set sapphire.",
    "products.pietre.item2.name": "Kintsugi Ruby",
    "products.pietre.item2.desc": "Wide band with golden fracture and natural ruby.",
    "products.pietre.item3.name": "Maree Solitaire",
    "products.pietre.item3.desc": "Ring with wave-textured surface and central diamond.",

    "products.senza_pietre.subtitle": "Essentials",
    "products.senza_pietre.desc": "The purity of form without stones. Polished surfaces that celebrate raw material — silver, gold, and their shades.",
    "products.senza_pietre.item1.name": "Pure Band",
    "products.senza_pietre.item1.desc": "Polished silver band, clean and minimal line.",
    "products.senza_pietre.item2.name": "Maree Wave",
    "products.senza_pietre.item2.desc": "Silver ring with undulating surface, polished finish.",
    "products.senza_pietre.item3.name": "Flat Profile",
    "products.senza_pietre.item3.desc": "Flat-section silver ring, contemporary style.",

    "products.filamento.subtitle": "Wire",
    "products.filamento.desc": "Tens of elements joined mid-air, without support — like a mosaic suspended in the void. A transparent jewel, light as air.",
    "products.filamento.item1.name": "ARIA Ring",
    "products.filamento.item1.desc": "Openwork gold ring, airy and transparent structure.",
    "products.filamento.item2.name": "ARIA Band",
    "products.filamento.item2.desc": "Wide band with suspended mosaic pattern, polished finish.",
    "products.filamento.item3.name": "ARIA Slim",
    "products.filamento.item3.desc": "Slim version with openwork elements, everyday lightness.",

    "products.pendenti.subtitle": "Pendants",
    "products.pendenti.desc": "Suspended works — hand-forged pendants that capture light and movement. Every piece is unique.",
    "products.pendenti.item1.name": "Maree Drop",
    "products.pendenti.item1.desc": "Drop pendant with wave-textured surface, satin silver.",
    "products.pendenti.item2.name": "Kintsugi Pendant",
    "products.pendenti.item2.desc": "Pendant with golden fracture and natural stone.",
    "products.pendenti.item3.name": "NiDO Leaf",
    "products.pendenti.item3.desc": "Woven leaf pendant, oxidised and gold finish.",

    "products.bracciali.subtitle": "Bracelets",
    "products.bracciali.desc": "Bands and chains forged at the bench — bracelets that tell the story of strength and delicacy in hand-worked metal.",
    "products.bracciali.item1.name": "Wave Bracelet",
    "products.bracciali.item1.desc": "Rigid bracelet with wave texture, polished silver.",
    "products.bracciali.item2.name": "Smooth Band",
    "products.bracciali.item2.desc": "Minimal band bracelet in satin silver.",
    "products.bracciali.item3.name": "Maree Chain",
    "products.bracciali.item3.desc": "Chain bracelet with organic links, oxidised finish.",

    // Testimonial
    "testimonial.quote": "\"Unique works of art, masterpieces.\nAn exceptional person.\nIn the workshop you can taste the passion of someone who has devoted their life to an art that is disappearing.\nBecause here we are talking about a true artist.\"",
    "testimonial.author": "Valerio S.",

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

  // Sync language from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/home/en" || path.startsWith("/home/en/")) {
      setLang("en");
    } else {
      setLang("it");
    }
  }, []);

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
