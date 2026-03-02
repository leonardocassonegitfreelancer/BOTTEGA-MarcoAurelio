

## Piano: Sezione "Get Inspired" con embed Instagram

Creerò una nuova sezione `GetInspiredSection.tsx` tra CollectionsSection e ContactSection, con:

- Titolo "Get Inspired" in stile coerente (gold label + heading serif)
- Embed iframe del profilo Instagram `@bottegamarcoaurelio` usando l'embed ufficiale
- Animazione framer-motion fade-in come le altre sezioni
- Link diretto al profilo Instagram sotto l'embed

Modifiche:
1. **Nuovo file** `src/components/GetInspiredSection.tsx` — sezione con iframe embed di Instagram
2. **Modifica** `src/pages/Index.tsx` — importare e inserire `GetInspiredSection` tra `CollectionsSection` e `ContactSection`

