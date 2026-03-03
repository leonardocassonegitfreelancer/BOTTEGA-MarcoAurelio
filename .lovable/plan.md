
## Piano di intervento

### Cosa cambia

**1. CTA sotto il carousel nella sezione INITIVM**
La sezione INITIVM (anelli quadrati / `senza_pietre`) attualmente mostra: Video → Testo → CTA → Griglia prodotti → Raccomandazioni. Manca una CTA dopo la griglia prodotti. Aggiungo un pulsante "Invia un messaggio" subito dopo la griglia prodotti, specifico per quando `active === "senza_pietre"`.

**2. Separatore ◆ prima delle raccomandazioni**
Attualmente il separatore ◆ appare solo prima del form di contatto (riga 940-945). Sposto/aggiungo un separatore ◆ anche prima della sezione "Ti potrebbero interessare anche" (riga 877), così la struttura diventa: Contenuto → ◆ → Raccomandazioni → ◆ → Form.

### Modifiche tecniche in `src/pages/Prodotti.tsx`

1. **Riga ~875**: Inserire un separatore ◆ prima del blocco "Related categories":
```tsx
{/* ◆ Diamond separator before recommendations */}
<div className="flex items-center gap-4 mt-16 md:mt-24 mb-12 md:mb-16">
  <div className="flex-1 h-px bg-gold/30" />
  <span className="text-gold text-xs">◆</span>
  <div className="flex-1 h-px bg-gold/30" />
</div>
```
E aggiornare il `mt` del div delle raccomandazioni per rimuovere il margine doppio.

2. **Dopo la griglia prodotti (riga ~874)**: Aggiungere un blocco CTA condizionale per `senza_pietre`:
```tsx
{active === "senza_pietre" && (
  <div className="text-center mt-10 md:mt-14">
    <button onClick={scrollToForm} className="...">
      {t("form.title")}
    </button>
  </div>
)}
```
