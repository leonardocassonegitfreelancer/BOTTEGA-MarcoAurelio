

## Piano: Ristrutturazione Routing Bilingue con Prefisso /en

### Struttura Attuale
- Italiano: `/home`, `/gioielli`, `/gioielli/:cat`, `/collezioni`
- Inglese: `/home/en` (solo home ha variante EN)
- La lingua è gestita da un context React con stato, non dall'URL

### Nuova Struttura URL

```text
Italiano (default, nessun prefisso):
  /                              → Home IT
  /gioielli                      → Listing gioielli IT
  /gioielli/:categoria           → Categoria IT
  /gioielli/:categoria/:slug     → Prodotto singolo IT
  /collezioni                    → Collezioni IT

Inglese (prefisso /en):
  /en                            → Home EN
  /en/jewellery                  → Listing jewellery EN
  /en/jewellery/:categoria       → Categoria EN
  /en/jewellery/:categoria/:slug → Prodotto singolo EN
  /en/collections                → Collezioni EN

Redirect:
  /home       → /          (vecchio URL)
  /home/en    → /en        (vecchio URL)
  /prodotti/* → /gioielli  (SEO legacy)
  *           → /          (catch-all)
```

### Modifiche Tecniche

**1. Nuovo componente `src/components/Layout.tsx`**
- Componente wrapper con Navbar e Footer
- Riceve `lang` come prop dal routing
- Setta `lang` nel LanguageContext tramite `useEffect`
- Renderizza `<Outlet />` per le rotte figlie

**2. `src/App.tsx` — Riscrittura rotte**
- Rimuovere `/home` e `/home/en`
- Rotte italiane: `<Route element={<Layout lang="it" />}>` con figli `/`, `/gioielli`, `/gioielli/:cat`, `/gioielli/:cat/:slug`, `/collezioni`
- Rotte inglesi: `<Route path="/en" element={<Layout lang="en" />}>` con figli `""`, `jewellery`, `jewellery/:cat`, `jewellery/:cat/:slug`, `collections`
- Redirect legacy: `/home` → `/`, `/home/en` → `/en`, `/prodotti/*` → `/gioielli`
- Catch-all `*` → `/`

**3. `src/contexts/LanguageContext.tsx`**
- Aggiungere funzione helper `getLocalizedPath(path, targetLang)` per lo switch lingua
- Mappa di corrispondenze: `gioielli ↔ jewellery`, `collezioni ↔ collections`

**4. `src/components/Navbar.tsx`**
- Lo switch lingua usa `getLocalizedPath` per tradurre l'URL corrente
- Rimuovere logica `/home/en` e `/home`
- I link interni usano i path localizzati (`/gioielli` vs `/en/jewellery`)

**5. `src/pages/Index.tsx`**
- Rimuovere `useEffect` che settava la lingua da pathname (ora gestito da Layout)
- Rimuovere Navbar e Footer (ora in Layout)

**6. `src/pages/Prodotti.tsx`**
- Rimuovere Navbar e Footer (ora in Layout)
- Aggiornare link "torna alla home" per usare `/` o `/en`

**7. `src/pages/Collezioni.tsx`**
- Rimuovere Navbar e Footer (ora in Layout)
- Aggiornare link interni per usare path localizzati

**8. Tutti i componenti con link interni**
- `CollectionsSection.tsx`, `HeroSection.tsx`, `Footer.tsx`, etc.: aggiornare href per usare path basati su `lang` dal context

### Language Switcher Logic
```text
URL corrente              → Dopo switch
/                         → /en
/en                       → /
/gioielli                 → /en/jewellery
/en/jewellery             → /gioielli
/gioielli/anelli/aurora   → /en/jewellery/anelli/aurora
/en/jewellery/rings/aurora→ /gioielli/rings/aurora
/collezioni               → /en/collections
/en/collections            → /collezioni
(nessun match)            → / oppure /en
```

### File Coinvolti
- `src/App.tsx` — rotte
- `src/components/Layout.tsx` — nuovo
- `src/contexts/LanguageContext.tsx` — helper path
- `src/components/Navbar.tsx` — switch lingua + link
- `src/pages/Index.tsx` — rimuovere Navbar/Footer/lang logic
- `src/pages/Prodotti.tsx` — rimuovere Navbar/Footer, aggiornare link
- `src/pages/Collezioni.tsx` — rimuovere Navbar/Footer, aggiornare link
- `src/components/CollectionsSection.tsx` — link localizzati
- `src/components/Footer.tsx` — link localizzati

