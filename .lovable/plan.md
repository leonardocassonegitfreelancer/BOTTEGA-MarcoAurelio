

## Piano: Video di sfondo nella Hero Section

Il video è perfetto — corto, d'atmosfera, ideale come sfondo. Ecco il piano:

### Modifiche

1. **Salvare il video** in `public/hero-video.mp4` (nella cartella public perché i video sono pesanti e non vanno bundlati da Vite)

2. **HeroSection.tsx** — sostituire l'`<img>` di sfondo con un `<video>` autoplay:
   - Attributi: `autoPlay muted loop playsInline` (obbligatori per autoplay su mobile)
   - `poster={heroImage}` come fallback istantaneo mentre il video carica
   - Stessa classe CSS dell'immagine attuale (`w-full h-full object-cover opacity-40`)
   - Mantenere lo stesso overlay gradient sopra

3. **Funziona su tutti i dispositivi** — mobile incluso, purché il video sia `muted` (requisito browser per autoplay). Nessun bisogno di nasconderlo su mobile, anzi come dici spacca.

### Dettagli tecnici
- Il video viene servito da `public/` quindi il path sarà `/hero-video.mp4`
- L'immagine statica resta come `poster` per caricamento istantaneo
- Nessun JavaScript aggiuntivo necessario

