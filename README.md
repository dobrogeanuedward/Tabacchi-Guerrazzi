# Tabaccheria Guerrazzi di Angela

Sito Astro del pacchetto Autorità, con nuove categorie predisposte per il lavoro continuativo. Identità ripresa dalla proposta: cobalto, avorio, Bodoni e Manrope. Font locali, illustrazioni UI ImageGen e immagini editoriali ottimizzate in WebP. Le nuove scene del negozio hanno composizioni generate distintamente per mobile e desktop.

## Sviluppo

Node.js 24 LTS (minimo 22.13), npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm start
```

## Prima pubblicazione su Vercel

`vercel.json` pubblica l'export Astro statico della parte pubblica da `dist`. `npm run build:static` costruisce esclusivamente le pagine pubbliche, senza avviare server durante il build e senza dipendere da SQLite. Il catalogo iniziale non contiene prodotti inventati. I push su `main` avviano il deploy del progetto Vercel collegato. Il comando `build:preview` resta disponibile per una fotografia locale della versione Node.

La prima versione è intenzionalmente `noindex`: impostare `PUBLIC_SITE_URL` sul dominio finale e `PUBLIC_LAUNCH_READY=true` dopo aver completato i dati del negozio. Senza prodotti forniti, il catalogo mostra un messaggio veritiero e nessun articolo inventato. Recensioni e marchi vengono aggiunti solo da fonti approvate.

## Catalogo riservato

Il pannello `/admin/` è realizzato per il runtime Node con disco persistente. Non viene esportato nella prima anteprima statica Vercel. Le funzioni serverless di Vercel non rendono persistente un database SQLite locale: prima di attivare il pannello su quel servizio occorre collegare un database durevole.

Per eseguire l'applicazione completa su Node:

1. Copiare `.env.example` nelle variabili del runtime.
2. Impostare `DATA_DIR` su un volume persistente esterno al checkout.
3. Configurare un solo amministratore con `npm run admin:setup`.
4. Eseguire `npm run build` e `npm start` dietro HTTPS.

Il pannello gestisce bozze, pubblicazione, rimozione dalla vetrina tramite bozza e archivio; testi IT/EN, disponibilità, prezzo facoltativo, immagine principale e fino a cinque immagini di galleria. Nessun carrello. Le categorie di tabacco sono escluse dal catalogo pubblicabile.

## Contenuti

- 21 pagine principali in italiano e inglese, comprese le nove nuove categorie.
- 6 guide in italiano e inglese.
- 12 articoli italiani nei cluster servizi pratici, idee regalo, giochi e giocattoli, negozio e quartiere.
- Store, WebPage, BreadcrumbList e FAQ visibili coesistono nei dati strutturati; Service per il deposito bagagli. Canonical/hreflang e sitemap sono condizionati alla configurazione di lancio.
- Deposito bagagli Bounce: scheda ufficiale Palazzo Ercolani, stesso indirizzo del negozio; prezzi e orari restano sulla piattaforma.
- Ricognizione di 21 foto uniche, 134 osservazioni con marche e livelli di certezza in `docs/ricognizione/`.

I dati dell’attività sono centralizzati in `src/data/shop.ts`; categorie in `src/data/assortment.ts`. Telefono, orari, dati fiscali e recensioni attendono conferma. Marchi riconoscibili sono documentati nelle foto originali, non dedotti dalle immagini AI. Le immagini editoriali non rappresentano disponibilità di prodotti; le foto originali degli interni restano solo riferimenti, non sono servite dal sito.

Prompt completi, fonti e selezione delle immagini sono in `docs/identita/`. Gli asset consumati sono in `public/brand/ui/` e `public/images/editorial/`. Lo script `scripts/prepare-editorial-assets.mjs` genera le varianti WebP e le dimensioni per il componente `EditorialPhoto`; selezione delle fotografie verticali/orizzontali tramite `picture/source`, non solo ritagli CSS.

## R2 DOGO

Il caricamento immagini è predisposto per il bucket `dogostudio`, pubblico su `pub-b39e5084f7324516a4fe99c212a65c5f.r2.dev`, esclusivamente nel prefisso `clients/guerrazzi/`. Le chiavi non devono entrare in Git. Il caricamento usa nomi unici, controlla formato e dimensioni e non sovrascrive oggetti esistenti.

L'accesso alle variabili del progetto DOGO non era disponibile in questa sessione: nessun oggetto è stato caricato su R2. Le immagini della prima versione sono servite dal sito.

Le informative privacy e cookie sono bozze da completare con i dati del titolare. Non ci sono tracker, font remoti o mappe incorporate.
