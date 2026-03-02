

## Piano: Ristrutturazione sezione "Anelli Circolari" con separatori diamante

### Struttura finale

```text
┌─────────────────────────────────────┐
│ Kintsugi Video + Testo              │
│ Kintsugi Carousel (solo item 1)     │
│ CTA → scroll al form               │
│                                     │
│ ──── ◆ linea dorata ◆ ────         │
│                                     │
│ MVTARA Video + Testo                │
│ MVTARA Carousel (solo item 2)      │
│ CTA → scroll al form               │
│                                     │
│ ──── ◆ linea dorata ◆ ────         │
│                                     │
│ Categorie Raccomandate              │
│ Form WhatsApp                       │
└─────────────────────────────────────┘
```

### Modifiche in `src/pages/Prodotti.tsx`

**1. Separare i prodotti nella sezione `pietre`**

Quando `active === "pietre"`, invece di renderizzare un'unica griglia con tutti gli items, il layout diventa sequenziale:

- Blocco Kintsugi (video + testo esistente, righe 306-367)
- Griglia con **solo il primo item** (Kintsugi Diamante)
- CTA button → scroll a `#contact-form`
- **Componente separatore**: linea dorata con piccolo diamante SVG al centro (`flex items-center gap-4` con due `div h-px bg-gold/30 flex-1` e un diamante `◆` dorato al centro)
- Blocco MVTARA (video + testo esistente, righe 369-403)
- Griglia con **solo il secondo item** (MVTARA NEBVLA ZERO)
- CTA button → scroll a `#contact-form`
- **Stesso separatore diamante**

**2. Riordinare form e categorie raccomandate**

Per **tutte** le categorie (non solo pietre):
- Prima: Categorie Raccomandate (righe 569-615)
- Dopo: Form WhatsApp (righe 549-567)

Questo inverte l'ordine attuale.

**3. Componente separatore diamante**

Un semplice div inline riutilizzabile:
```text
── ── ── ── ◆ ── ── ── ──
```
Implementato con flexbox: due linee `h-px bg-gold/30` + un carattere `◆` in `text-gold text-xs` al centro. Margine verticale `my-12 md:my-16`.

**4. Per le altre categorie** (fedi, senza_pietre, filamento, pendenti, bracciali) la griglia unica rimane invariata, nessun separatore.

