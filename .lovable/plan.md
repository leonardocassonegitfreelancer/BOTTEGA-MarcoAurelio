

## Piano: Usare il video caricato per SANGUE nei Pendenti

Il video caricato verrà copiato nella cartella `public/` come `sangue-intro.mp4`, sostituendo il file attualmente referenziato dal codice in `src/pages/Prodotti.tsx` (linea 725).

### Intervento
1. **Copiare il file** `user-uploads://QUI_vale_il_BARATTO-...mp4` → `public/sangue-intro.mp4`

Nessuna modifica al codice necessaria: il componente video in Prodotti.tsx già punta a `/sangue-intro.mp4`.

