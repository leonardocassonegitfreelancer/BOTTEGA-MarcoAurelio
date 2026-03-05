

## Piano: CategoryCarousel sticky su mobile nella pagina Gioielli

### Modifica

**`src/pages/Prodotti.tsx`** — Rendere il contenitore del `CategoryCarousel` mobile sticky, in modo che resti visibile in cima allo schermo quando l'utente scrolla verso il basso.

Wrappare il blocco delle category tabs (linee 236-260) con classi sticky su mobile:

```tsx
<div className="md:relative sticky top-16 z-40 bg-background/95 backdrop-blur-md py-4 -mx-6 px-6 md:mx-0 md:py-0 md:bg-transparent md:backdrop-blur-none container max-w-6xl md:px-6 mb-10 md:mb-16">
```

- `sticky top-16` — si fissa sotto la navbar (h-16 su mobile)
- `z-40` — sotto la navbar (z-50) ma sopra il contenuto
- `bg-background/95 backdrop-blur-md` — sfondo semi-trasparente coerente col design
- Su desktop (`md:`) torna a comportamento normale (non sticky)

### File coinvolto
- `src/pages/Prodotti.tsx` (solo la riga 236)

