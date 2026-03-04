

## Piano: Rinominare le route da `/prodotti` a `/gioielli`

### Modifiche

1. **`src/App.tsx`** — Aggiornare le route da `/prodotti` a `/gioielli` e aggiungere redirect 301 da `/prodotti/*` a `/gioielli/*` per non perdere indicizzazione SEO esistente.

2. **`src/pages/Prodotti.tsx`** — Aggiornare tutti i `navigate()` e `<Link to=...>` interni che puntano a `/prodotti/...` → `/gioielli/...`.

3. **`src/components/Navbar.tsx`** — Cambiare `href: "/prodotti"` → `href: "/gioielli"`.

4. **`src/components/CollectionsSection.tsx`** — Aggiornare tutti i `categoryLink` e `<Link to=...>` da `/prodotti/...` → `/gioielli/...`.

### Redirect SEO
Aggiungere route catch-all per le vecchie URL:
```
<Route path="/prodotti/*" element={<Navigate to="/gioielli" replace />} />
<Route path="/prodotti" element={<Navigate to="/gioielli" replace />} />
```

### Struttura URL risultante
```text
/gioielli
/gioielli/anelli-circolari
/gioielli/anelli-circolari/kintsugi
/gioielli/pendenti/sangue
/gioielli/pezzi-unici
```

### File coinvolti
- `src/App.tsx`
- `src/pages/Prodotti.tsx`
- `src/components/Navbar.tsx`
- `src/components/CollectionsSection.tsx`

