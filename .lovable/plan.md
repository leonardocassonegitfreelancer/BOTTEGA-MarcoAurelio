

## Piano: Mostrare i puntini solo durante lo scroll

### Comportamento
I puntini (dots indicator) del CategoryCarousel saranno nascosti di default e appariranno con un fade-in quando l'utente scrolla la pagina. Dopo che lo scroll si ferma per ~1.5 secondi, i puntini scompaiono di nuovo con un fade-out.

### Modifiche

**`src/components/CategoryCarousel.tsx`**:
1. Aggiungere una prop `showDots` (boolean) al componente.
2. Wrappare la sezione dots con una `div` che ha `opacity-0`/`opacity-100` e `transition-opacity duration-300` controllata dalla prop.

**`src/pages/Prodotti.tsx`**:
1. Aggiungere stato `isScrolling` (default `false`) e un ref per il timeout.
2. Listener `scroll` su `window`: setta `isScrolling = true`, resetta un timeout di ~1500ms che lo riporta a `false`.
3. Passare `showDots={isScrolling}` al `CategoryCarousel`.

### Risultato
I puntini appaiono con fade quando l'utente scrolla e scompaiono poco dopo che si ferma.

