

## Piano: Nuova categoria "Pezzi Unici"

### Concept

Una categoria per pezzi unici, irripetibili, inclassificabili — e per questo meravigliosi. Non un catalogo, ma un invito. MAREE sarà il primo pezzo, introdotto dal testo poetico "Che poi il Mare".

### Descrizione della categoria

**IT**: "Qui trovi tutti i pezzi che seguono uno stile unico, irripetibile, inclassificabile — e per questo meraviglioso. Se sei in cerca di idee, sei nel posto giusto."

**EN**: "Here you'll find pieces that follow a unique, unrepeatable, unclassifiable style — and that's what makes them wonderful. If you're looking for inspiration, you're in the right place."

### Modifiche tecniche

**1. Type e slug (`Prodotti.tsx`)**
- Estendere `Category` con `"pezzi_unici"`
- Slug IT: `pezzi-unici` / EN: `unique-pieces`
- Aggiungere alle 3 mappe di slug

**2. Traduzioni (`LanguageContext.tsx`)**
- Label: "Pezzi Unici" / "Unique Pieces"
- Subtitle e description della categoria (testo sopra)
- Testo poetico "Che poi il Mare" © 2015 Marco Aurelio Lorenzo Gerardi Olivetti
- Descrizione MAREE: "MAREE nasce dal mare, dalle onde, dal movimento che non si ferma mai. Il metallo è vivo, non ha trattamenti: respira, cambia insieme a chi lo indossa."
- Nome item: "MAREE — inprofvndvmmaris"

**3. Asset**
- Salvare `image-17.png` come `src/assets/maree-pezzi-unici.png`

**4. Dati prodotto (`Prodotti.tsx`)**
- Aggiungere `pezzi_unici` a `products` con MAREE come primo item
- Aggiungere alla lista `categories` (dopo bracciali)

**5. Layout sequenziale (`Prodotti.tsx`)**
- Quando `active === "pezzi_unici"`:
  - Blocco intro: testo poetico "Che poi il Mare" (stile simile agli altri intro, senza video)
  - Descrizione MAREE + materiali
  - Carousel prodotto (1 immagine per ora)
  - CTA → scroll a `#contact-form`
- Aggiungere `"pezzi_unici"` all'esclusione della griglia unificata

**6. CollectionsSection (homepage)**
- Aggiungere link a Pezzi Unici usando l'immagine MAREE

