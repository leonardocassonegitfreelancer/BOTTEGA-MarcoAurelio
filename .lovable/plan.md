

## Piano: Ridurre spazio nero nello sticky durante lo scroll

### Problema
Il container sticky ha `py-2` + i dots con `mt-3` che creano troppo spazio nero visibile. Quando l'utente scrolla e i dots scompaiono (opacity-0), lo spazio verticale resta allocato.

### Modifiche

**`src/components/CategoryCarousel.tsx`**:
- Cambiare i dots da `opacity-0`/`opacity-100` a un collasso effettivo dell'altezza: usare `max-height` e `overflow-hidden` insieme all'opacity per eliminare lo spazio quando nascosti.
- Quando `showDots=false`: `max-height: 0`, `mt-0`, `opacity-0`
- Quando `showDots=true`: `max-height: 24px`, `mt-3`, `opacity-100`

**`src/pages/Prodotti.tsx`**:
- Ridurre il padding del container sticky da `py-2` a `py-1` per minimizzare lo spazio nero.

### Risultato
Quando l'utente scrolla, i dots collassano completamente e il padding si riduce, eliminando lo spazio nero in eccesso.

