

## Piano: Aggiungere Legione nella tab Pezzi Unici + video

### 1. Video
Copiare il file `.webm` caricato in `public/legione-intro.webm` (o `.mp4` se il formato è compatibile — il file è `.webm`). Aggiornare il riferimento in `Prodotti.tsx` per usare questo video nella sotto-pagina Legione al posto del placeholder.

### 2. Card Legione in homepage (CollectionsSection.tsx)
Nella sezione `pezzi_unici` dell'oggetto `cardsByTab` (riga 224-233), aggiungere una seconda card per Legione:
- Import `legioneImage` da `@/assets/legione.webp` (già presente come asset)
- Nuova entry con immagine Legione, titolo "LEGIONE", subtitle "Collezione", descrizione narrativa breve, link a `${base}/${slugs.pezzi_unici}/legione`

### 3. Aggiornare la card Maree
Rimuovere "Legione" dalla descrizione della card Maree esistente (che ora elenca "Maree · Art Deco · Legione"), visto che Legione avrà la sua card dedicata.

### File modificati
- `public/legione-intro.webm` — video copiato
- `src/components/CollectionsSection.tsx` — import + nuova card Legione
- `src/pages/Prodotti.tsx` — aggiornare src video da `.mp4` a `.webm`

