

## Piano: Pagina LEGIONE completa (stile Maree) + aggiunta in /collezioni

### Cosa fare

1. **Salvare l'immagine WebP caricata** nel progetto come `src/assets/legione.webp`

2. **Aggiornare la card Legione nella griglia Pezzi Unici** (Prodotti.tsx, riga ~815): sostituire `mareeFullImage` con la nuova immagine `legione.webp`

3. **Riscrivere la sotto-pagina Legione** (Prodotti.tsx, righe 974-1023) seguendo la struttura di Maree:
   - Video placeholder con poster dall'immagine Legione (src placeholder `/legione-intro.mp4`, poster = legione.webp)
   - Testo poetico completo ("Che poi la Legione prima di tutto andrebbe tenuta in mano...")
   - Separatore + titolo "LEGIONE." con sottotitolo "Collezione"
   - Descrizione narrativa ("Legione nasce da chi resiste...")
   - Dettagli: "Bronzo e Smeraldi · A partire da 290 euro"
   - Immagine prodotto con la WebP caricata
   - CTA al form contatti

4. **Aggiungere Legione nella pagina /collezioni** (Collezioni.tsx): nuova entry nell'array `collections` con immagine `legione.webp`, link a `/gioielli/pezzi-unici/legione`

5. **Aggiungere traduzioni** nel LanguageContext per i testi poetici e descrittivi di Legione (IT + EN)

### Struttura della sotto-pagina Legione

```text
┌─────────────────────────────────┐
│  ← Pezzi Unici                 │
├─────────────────────────────────┤
│  [VIDEO PLACEHOLDER]            │
│  poster: legione.webp           │
│  src: /legione-intro.mp4        │
├─────────────────────────────────┤
│  Testo poetico (italic)         │
│  "Che poi la Legione..."        │
│  ────── ◆ ──────                │
│  LEGIONE.                       │
│  Collezione                     │
│  ────                           │
│  Testo narrativo                │
│  "Legione nasce da chi resiste" │
│  ────                           │
│  Bronzo e Smeraldi              │
│  A partire da 290 €             │
├─────────────────────────────────┤
│  [IMMAGINE PRODOTTO]            │
├─────────────────────────────────┤
│  [RICHIEDI INFORMAZIONI]        │
│  ────── ◆ ──────                │
└─────────────────────────────────┘
```

### File modificati

- `src/assets/legione.webp` — nuova immagine
- `src/pages/Prodotti.tsx` — card + sotto-pagina Legione
- `src/pages/Collezioni.tsx` — nuova entry Legione
- `src/contexts/LanguageContext.tsx` — traduzioni Legione

