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

## Pubblicazione su Vercel

`vercel.json` pubblica l'export Astro statico della parte pubblica da `dist`. `npm run build:static` costruisce esclusivamente le pagine pubbliche, senza avviare server durante il build e senza dipendere da SQLite. Il catalogo iniziale non contiene prodotti inventati. I push su `main` avviano il deploy del progetto Vercel collegato. Il comando `build:preview` resta disponibile per una fotografia locale della versione Node.

Il sito è già pubblico su `https://tabacchiguerrazzi.vercel.app`; è disponibile anche l’alias `https://tabacchiguerrazzu.vercel.app`. La pubblicazione avviene dal repository GitHub collegato, senza dipendere dall’accesso del connettore Vercel. Il dominio finale resta da confermare.

L’indicizzazione resta intenzionalmente disabilitata: l’export corrente contiene `noindex,nofollow`, `robots.txt` con `Disallow: /` e sitemap vuota. Non modificare il gate di lancio durante la revisione UI. `PUBLIC_SITE_URL` e `PUBLIC_LAUNCH_READY=true` sono prerequisiti tecnici da configurare solo dopo la conferma del dominio e il completamento dei dati del negozio e delle informative. La pubblicazione non dimostra indicizzazione o posizionamento.

Il catalogo mostra 25 famiglie di articoli documentate dalle fotografie, senza simulare SKU, prezzi o stock. Ricerca e filtri funzionano anche nell’export statico. Recensioni e marchi vengono aggiunti solo da fonti approvate.

## Catalogo riservato

Il pannello `/admin/` è realizzato per il runtime Node con disco persistente. Non viene esportato nel sito statico pubblico su Vercel. Le funzioni serverless di Vercel non rendono persistente un database SQLite locale: prima di attivare il pannello su quel servizio occorre collegare un database durevole.

Per eseguire l'applicazione completa su Node:

1. Copiare `.env.example` nelle variabili del runtime.
2. Impostare `DATA_DIR` su un volume persistente esterno al checkout.
3. Configurare un solo amministratore con `npm run admin:setup`.
4. Eseguire `npm run build` e `npm start` dietro HTTPS.

Il pannello gestisce bozze, pubblicazione, rimozione dalla vetrina tramite bozza e archivio; testi IT/EN, disponibilità, prezzo facoltativo, immagine principale e fino a cinque immagini di galleria. Nessun carrello. Le categorie di tabacco sono escluse dal catalogo pubblicabile.

## Contenuti

- 21 pagine principali in italiano e inglese, comprese le nove nuove categorie.
- 14 guide in italiano e inglese: sei percorsi pratici, tre schede normative e cinque guide su materiali, storia, botanica e lessico.
- 25 schede di famiglie non regolamentate e 34 voci informative sui sigari, ciascuna IT/EN.
- 18 articoli italiani in sette cluster: Servizi pratici, Idee regalo, Giochi e giocattoli, Negozio e quartiere, Tabacco: informazioni e norme, Materiali e storia, Lessico e fonti.
- Conferma 18+ nelle sezioni pertinenti, con sessionStorage e uscita alla home; nessuna identità raccolta.
- Area tabacco esclusivamente informativa, con fonti pubbliche: nessuna offerta, invito al consumo o ordine.
- Store e FAQ corrispondenti ai contenuti visibili; Service per il deposito bagagli e Article con fonti nelle guide documentarie. WebSite/WebPage/BreadcrumbList, canonical e hreflang dipendono dal dominio configurato; la sitemap richiede anche il gate di lancio attivo.
- Deposito bagagli Bounce: scheda ufficiale Palazzo Ercolani, stesso indirizzo del negozio; prezzi e orari restano sulla piattaforma.
- Ricognizione di 21 foto uniche, 134 osservazioni con marche e livelli di certezza in `docs/ricognizione/`.

L’ultima build disponibile contiene 210 file HTML: 209 pagine con `index.html` più la 404. Il totale comprende le versioni IT/EN, il diario, privacy e cookie; non rappresenta 210 contenuti editoriali distinti. I conteggi e le verifiche sono descritti in `docs/ricognizione/verifica-implementazione.md`.

I dati dell’attività sono centralizzati in `src/data/shop.ts`; categorie in `src/data/assortment.ts`. Telefono, email, ragione sociale, P. IVA, orari ufficiali e recensioni approvate attendono conferma. Anche l’operatività puntuale di pagamenti e ricariche richiede conferma del negozio. Marchi riconoscibili sono documentati nel rilievo fotografico, non dedotti dalle immagini AI. Le immagini editoriali non rappresentano disponibilità di prodotti; le foto originali degli interni restano riferimenti e i relativi file devono ancora essere recuperati per le sostituzioni.

Prompt completi, fonti e selezione delle immagini sono in `docs/identita/`. Gli asset consumati sono in `public/brand/ui/`, `public/images/editorial/`, `public/images/hero/` e `public/images/materials/`. Lo script `scripts/prepare-editorial-assets.mjs` genera le varianti WebP e le dimensioni per il componente `EditorialPhoto`; selezione delle fotografie verticali/orizzontali tramite `picture/source`, non solo ritagli CSS.

## R2 DOGO

Il caricamento immagini è predisposto per il bucket `dogostudio`, pubblico su `pub-b39e5084f7324516a4fe99c212a65c5f.r2.dev`, esclusivamente nel prefisso `clients/guerrazzi/`. Le chiavi non devono entrare in Git. Il caricamento usa nomi unici, controlla formato e dimensioni e non sovrascrive oggetti esistenti.

L’upload R2 resta predisposto ma non attivato in questa mandata. Nessun caricamento è documentato; le immagini pubbliche sono servite dal sito.

Le informative privacy e cookie sono bozze da completare con i dati del titolare. Non ci sono tracker, font remoti o mappe incorporate.

Aggiornamento 11 ottobre 2026: header con logo centrale e singola navigazione desktop; hero a sei scene con copy dedicato; accessi a regali, giochi e aree informative 18+; deposito Bounce anticipato in home e servizi. Le sostituzioni fotografiche del secondo mandato sono registrate in `docs/identita/asset-replacement-register.json`, comprese le 25 famiglie del catalogo e le generazioni precedenti non ancora recuperate. Le immagini editoriali provvisorie non certificano configurazione degli interni, stock o servizi aggiuntivi.

Materiali editoriali (11 ottobre 2026): sette texture ImageGen coordinate in `public/images/materials/`, con prompt, originali e usi nel registro `docs/identita/materials-imagegen-manifest.json`. Le texture sono decorative e non documentano specie, prodotti o interni. Le nuove guide botaniche e museali sono informative, con fonti primarie, IT/EN e conferma 18+.

La mandata UI in corso estende all’intero sito i criteri di `docs/identita/secondo-mandato-ui.json`: nomi delle sezioni leggibili, titoli descrittivi, contenitori coerenti, azioni esplicite per categorie/schede/guide e minori ripetizioni. Il logo definitivo resta invariato. Le verifiche finali e il deploy della revisione vanno registrati dopo il loro effettivo completamento.
