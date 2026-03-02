

## Piano: Sostituire il video ARIA

Copiare il video caricato (`user-uploads://get_1.mp4`) in `public/aria-intro.mp4`, sovrascrivendo quello attuale. Il tag `<video>` in `src/pages/Prodotti.tsx` punta già a `/aria-intro.mp4` con `muted`, `autoPlay`, `loop` e `playsInline`, quindi non serve toccare il codice.

### Intervento unico
- **Sovrascrivere** `public/aria-intro.mp4` con il nuovo file video.

