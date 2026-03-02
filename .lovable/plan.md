

## Piano: Switcher tra Kintsugi e nuovo prodotto nella sezione Pietre

### Concetto
Aggiungere uno switch/toggle nella sezione "Anelli con pietre" che permette di alternare tra due presentazioni complete: **Kintsugi** (già esistente) e il **nuovo prodotto con pietre preziose** (da definire). Ogni presentazione avrà il proprio video introduttivo, storytelling e card prodotto.

### Interventi

1. **Aggiungere stato di sub-collezione** in `Prodotti.tsx` — un `useState` per gestire quale presentazione mostrare (es. `"kintsugi" | "nuovo"`), con un toggle/switch visivo posizionato sopra il blocco video+storytelling.

2. **Componente switch** — Utilizzare un selettore stilizzato con due opzioni (nomi delle sotto-collezioni) in stile coerente con il design gold/cream, posizionato sotto il titolo della categoria e sopra il video. Transizione animata con `AnimatePresence` per il cambio di contenuto.

3. **Struttura dati** — Duplicare la struttura del blocco Kintsugi per il nuovo prodotto: video, testi storytelling, items nella griglia. Per ora useremo placeholder per video e immagini del nuovo prodotto, che potrai caricare dopo.

4. **Traduzioni** — Aggiungere le chiavi necessarie in `LanguageContext.tsx` per il nome e la descrizione del nuovo prodotto.

### Cosa serve da te
- Il **nome** del nuovo prodotto/collezione con pietre preziose
- Il **video** introduttivo (come hai fatto per Kintsugi e ARIA)
- Le **foto** del prodotto
- Il **testo di storytelling** (oppure possiamo metterne uno provvisorio)

