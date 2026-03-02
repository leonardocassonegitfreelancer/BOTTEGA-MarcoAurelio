

## Piano aggiornato: Sezione "Ti potrebbero interessare anche"

Mostrare solo **3 categorie** invece di tutte le rimanenti (che sarebbero 5). Si selezionano le 3 più affini alla categoria attiva, oppure semplicemente le prime 3 dall'elenco filtrato. Questo mantiene la sezione leggera e non dispersiva.

### Interventi

**`src/pages/Prodotti.tsx`**:
- Filtrare le categorie escludendo quella attiva, poi prendere solo le prime 3 con `.slice(0, 3)`
- Griglia a 3 colonne su desktop, 1 colonna su mobile
- Card minimali: immagine rappresentativa, nome categoria, click naviga a `/prodotti/{slug}`

**`src/contexts/LanguageContext.tsx`**:
- Aggiungere chiavi `products.related.label` (IT: "Esplora", EN: "Explore") e `products.related.title` (IT: "Ti potrebbero interessare anche", EN: "You might also like")

