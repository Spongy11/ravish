# Visit India with Ravish — sito statico

Sito one-page per Ravish Khan (Jaipur, Rajasthan), pronto per GitHub Pages:
solo HTML, CSS e JavaScript vanilla, nessuna build, nessuna dipendenza.

## Struttura dei file

```
index.html        pagina unica (hero, chi sono, servizi, galleria, contatti, footer)
style.css         stile completo (palette, tipografia, responsive, animazioni)
script.js         navbar mobile, fade-in on-scroll, lightbox galleria
images/           TUTTE le foto del sito (vedi elenco sotto)
```

## Immagini da aggiungere prima della pubblicazione

Il sito referenzia queste immagini in `images/` (nomi esatti, sostituiscile
con foto vere mantenendo lo stesso nome, oppure aggiorna i percorsi in
`index.html`):

- `images/hero.jpg` — foto di sfondo della hero (panorama Rajasthan, orizzontale)
- `images/ravish.jpg` — ritratto di Ravish
- `images/gallery-1.jpg` … `images/gallery-6.jpg` — foto della galleria
- `images/og-cover.jpg` — immagine di anteprima social (Open Graph), consigliata 1200×630px

Finché non aggiungi le foto reali, i tag `<img>` mostreranno un'icona di
immagine rotta: è normale, basta caricare i file con lo stesso nome nella
cartella `images/`.

## Dati da completare

Cerca nel codice i commenti `TODO` / `da confermare` in `index.html`:

- Lingue parlate da Ravish (sezione "Chi sono")
- Anni/dettagli di esperienza (sezione "Chi sono")
- Numero WhatsApp (sezione "Contatti", attualmente commentato per non
  inventare un numero non verificato)
- ID del form Formspree (sezione "Contatti"), oppure elimina il form e
  mantieni solo i pulsanti Email / TripAdvisor

## Pubblicazione su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `visit-india-with-ravish`).
2. Carica questi file mantenendo la struttura delle cartelle.
3. Vai su **Settings → Pages** del repository.
4. In "Build and deployment" seleziona **Deploy from a branch**, branch
   `main`, cartella `/ (root)`.
5. Salva: dopo un minuto il sito sarà online su
   `https://TUO-USERNAME.github.io/visit-india-with-ravish/`.
6. Aggiorna il tag `<link rel="canonical">` e `og:url` in `index.html`
   con l'URL reale una volta pubblicato.
