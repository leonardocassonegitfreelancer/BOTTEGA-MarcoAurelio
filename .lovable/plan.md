

## Piano: Invertire logica puntini + eliminare riga grigia

### Problemi
1. I puntini sono visibili durante lo scroll — l'utente vuole il contrario: visibili di default, nascosti durante lo scroll.
2. La riga grigia appare per via di `bg-background/95 backdrop-blur-md` nel container sticky.

### Modifiche

**`src/pages/Prodotti.tsx`** (riga 252):
- Cambiare `bg-background/95 backdrop-blur-md` → `bg-background` (opaco, niente blur = niente riga grigia).

**`src/pages/Prodotti.tsx`** (riga 258):
- Invertire la prop: `showDots={!isScrolling}` invece di `showDots={isScrolling}`.

### Risultato
- Puntini visibili quando l'utente non scrolla, scompaiono con fade durante lo scroll.
- Nessuna riga grigia grazie allo sfondo completamente opaco.

