

## Piano: Aggiungere la Collezione ARIA (con alt text SEO)

### Modifiche

1. **Salvare l'immagine** caricata come `src/assets/aria.webp`

2. **Traduzioni** (`src/contexts/LanguageContext.tsx`) — aggiungere chiavi IT/EN:
   - `collections.aria.title`: "ARIA"
   - `collections.aria.desc` (IT): "Decine, centinaia di elementi uniti in aria, senza supporto — come un mosaico sospeso nel vuoto. La struttura regge sé stessa. Il risultato è un gioiello trasparente, leggero come l'aria che lo attraversa."
   - `collections.aria.desc` (EN): "Tens, hundreds of elements joined mid-air, without support — like a mosaic suspended in the void. The structure holds itself. The result is a transparent jewel, light as the air that passes through it."
   - `collections.aria.alt` (IT): "Anello ARIA in oro traforato — gioiello artigianale trasparente realizzato a mano a Roma"
   - `collections.aria.alt` (EN): "ARIA openwork gold ring — handcrafted transparent jewel made in Rome"
   - `products.aria.*`: titolo, sottotitolo, descrizione, 3 item con nomi e descrizioni

3. **CollectionCard** (`src/components/CollectionsSection.tsx`):
   - Aggiungere prop `alt` opzionale all'interfaccia `CollectionCardProps`
   - Usare `alt` dedicato nell'`<img>` invece di `title`
   - Aggiungere ARIA come quarta collezione
   - Griglia: `md:grid-cols-2 lg:grid-cols-4`

4. **Pagina Prodotti** (`src/pages/Prodotti.tsx`) — aggiungere sezione ARIA con 3 item placeholder usando `aria.webp`

5. **Alt text SEO** per tutte le collezioni esistenti — aggiungere chiavi `collections.*.alt` dedicate anche per NiDO, Maree e Kintsugi (attualmente usano solo il titolo come alt)

