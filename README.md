# Tabaccheria Guerrazzi di Angela

Sito Astro del pacchetto Autorità. Identità ripresa dalla proposta: cobalto, avorio, Bodoni e Manrope; tre fotografie fornite per la sezione giochi e sei asset editoriali generati e ottimizzati in WebP. Font locali.

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

- 12 pagine principali in italiano e inglese.
- 6 guide in italiano e inglese.
- 12 articoli italiani nei cluster servizi pratici, idee regalo, giochi e giocattoli, negozio e quartiere.
- Schema strutturato, canonical/hreflang e sitemap abilitati a conferma dei dati.

I dati verificabili sono centralizzati in `src/data/shop.ts`. Telefono, orari, dati fiscali, recensioni, marchi specifici e video attendono il materiale del negozio. Le immagini editoriali non rappresentano disponibilità di prodotti.

## R2 DOGO

Il caricamento immagini è predisposto per il bucket `dogostudio`, pubblico su `pub-b39e5084f7324516a4fe99c212a65c5f.r2.dev`, esclusivamente nel prefisso `clients/guerrazzi/`. Le chiavi non devono entrare in Git. Il caricamento usa nomi unici, controlla formato e dimensioni e non sovrascrive oggetti esistenti.

L'accesso alle variabili del progetto DOGO non era disponibile in questa sessione: nessun oggetto è stato caricato su R2. Le immagini della prima versione sono servite dal sito.

Le informative privacy e cookie sono bozze da completare con i dati del titolare. Non ci sono tracker, font remoti o mappe incorporate.
