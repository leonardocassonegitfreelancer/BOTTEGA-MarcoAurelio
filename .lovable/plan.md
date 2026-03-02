

## Piano: Aggiungere SMS come opzione di contatto

Modifica minima alla sezione Contatti: aggiornare la card WhatsApp per indicare che si può anche inviare un SMS allo stesso numero.

### Modifiche:
1. **`src/contexts/LanguageContext.tsx`** — Aggiornare le traduzioni:
   - IT: `"contact.whatsappNote"` → `"Messaggi WhatsApp o SMS"`
   - EN: `"contact.whatsappNote"` → `"WhatsApp or SMS messages"`

2. **`src/components/ContactSection.tsx`** — Aggiungere un link `sms:` o `tel:` accanto al numero, oppure semplicemente rendere il testo più chiaro che SMS è accettato. Il link `href` del card potrebbe diventare `href="https://wa.me/3482762842"` (resta WhatsApp come default), con il numero visibile che funge anche da indicazione per SMS.

Nessun componente nuovo, solo testo aggiornato.

