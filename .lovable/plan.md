

## Piano: Promemoria misura nel form

Aggiungere un avviso gentile e non bloccante che appare quando si seleziona una categoria che richiede misura (anelli o bracciali). Non un campo obbligatorio, ma un reminder caldo che dice "ne parleremo insieme, ma tienilo a mente".

### Modifiche

1. **`src/contexts/LanguageContext.tsx`** — Nuove chiavi IT/EN:
   - IT: "Per realizzare il tuo gioiello su misura avremo bisogno della tua misura (dito o polso). Non preoccuparti, ne parleremo insieme e ti guideremo passo passo!"
   - EN: "To create your custom piece we'll need your size (finger or wrist). Don't worry, we'll discuss it together and guide you step by step!"

2. **`src/components/WhatsAppContactForm.tsx`** — Sotto il campo "Tipologia di gioiello", quando `category` è tra `fedi`, `pietre`, `senza_pietre`, `filamento` o `bracciali`:
   - Mostra un box con `AnimatePresence` / `motion.div`, bordo `gold/20`, icona `Ruler` da lucide-react
   - Tono caldo, non imperativo — un promemoria amichevole
   - Nessun campo aggiuntivo, nessun blocco alla submission

