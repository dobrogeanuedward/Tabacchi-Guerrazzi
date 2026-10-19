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

Il catalogo mostra 57 famiglie, comprese le 31 nuove famiglie ricavate dal rilievo del 15 ottobre e la gamma di profumi Raptus confermata dall’utente. Il proteggi fili è la prima scheda prodotto documentata dalle foto del negozio; riporta AkenA come distributore e il prezzo esposto di 3,50 €, con disponibilità e prezzo aggiornato da verificare. Non simula stock. Ricerca e filtri funzionano anche nell’export statico. Recensioni e marchi vengono aggiunti solo da fonti approvate.

## Catalogo riservato

Il pannello `/admin/` è realizzato per il runtime Node con disco persistente. Non viene esportato nel sito statico pubblico su Vercel. Le funzioni serverless di Vercel non rendono persistente un database SQLite locale: prima di attivare il pannello su quel servizio occorre collegare un database durevole.

Per eseguire l'applicazione completa su Node:

1. Copiare `.env.example` nelle variabili del runtime.
2. Impostare `DATA_DIR` su un volume persistente esterno al checkout.
3. Configurare un solo amministratore con `npm run admin:setup`.
4. Eseguire `npm run build` e `npm start` dietro HTTPS.

Il pannello gestisce bozze, pubblicazione, rimozione dalla vetrina tramite bozza e archivio; testi IT/EN, disponibilità, prezzo facoltativo, immagine principale e fino a cinque immagini di galleria. Nessun carrello. Le categorie di tabacco sono escluse dal catalogo pubblicabile.

## Contenuti

- 22 pagine principali in italiano e inglese, compresa la nuova categoria Sale di Cervia.
- 14 guide in italiano e inglese: sei percorsi pratici, tre schede normative e cinque guide su materiali, storia, botanica e lessico.
- 57 schede di famiglie non regolamentate e 46 voci informative sui sigari, ciascuna IT/EN.
- 53 pagine di marchi e personaggi del catalogo e tre pagine di servizi, ciascuna IT/EN; indice ricercabile per marchio e categoria.
- Otto storie documentarie sui marchi, con pagine IT/EN in `/sigari/storie/`: Davidoff, Zino, Camacho, Plasencia, La Aurora e Príncipes, León Jimenes, A. Flores/PDR, Montosa e Parcero. Contenuti di storia e lessico, senza dati di giacenza o inviti all’acquisto.
- Otto fotografie Wikimedia Commons in 16 varianti WebP, con autore, licenza, fonte, revisione e didascalia; metadati in `src/data/commons-photography.json` e manifest in `docs/identita/brand-stories-photography-2026-10-14.json`.
- 18 articoli italiani in sette cluster: Servizi pratici, Idee regalo, Giochi e giocattoli, Negozio e quartiere, Tabacco: informazioni e norme, Materiali e storia, Lessico e fonti.
- Conferma 18+ nelle sezioni pertinenti, con sessionStorage e uscita alla home; nessuna identità raccolta.
- Area tabacco esclusivamente informativa, con fonti pubbliche: nessuna offerta, invito al consumo o ordine.
- Store e FAQ corrispondenti ai contenuti visibili; Service per il deposito bagagli e Article con fonti nelle guide documentarie. WebSite/WebPage/BreadcrumbList, canonical e hreflang dipendono dal dominio configurato; la sitemap richiede anche il gate di lancio attivo.
- Deposito bagagli Bounce: scheda ufficiale Palazzo Ercolani, stesso indirizzo del negozio; prezzi e orari restano sulla piattaforma.
- Nuova ricognizione di 44 file fotografici, 38 immagini uniche, 301 osservazioni e 127 nomi di marchi, entità o servizi, con riferimenti e livelli di certezza in `docs/ricognizione/censimento-2026-10-15.json`. I nomi comprendono anche enti, locandine e costruttori di arredi: non equivalgono a 127 marchi di prodotti in vendita.

L’export aggiornato contiene 443 file HTML: 442 pagine con `index.html` più la 404. Il totale comprende le versioni IT/EN, il diario, privacy e cookie; non rappresenta 443 contenuti editoriali distinti. La verifica aggiornata delle route e degli asset è in `docs/identita/catalogue-update-verification-2026-10-15.json`; la precedente mappa degli asset resta un documento storico.

I dati dell’attività sono centralizzati in `src/data/shop.ts`; categorie in `src/data/assortment.ts`. Telefono, email, ragione sociale, P. IVA, orari ufficiali e recensioni approvate attendono conferma. Le insegne nelle foto documentano Bounce, Satispay, Nexi e PuntoLis Paga e Preleva; condizioni, compatibilità delle carte e singole operazioni richiedono verifica prima della conferma. Le altre locandine non sono state interpretate come servizi attivi. Marchi riconoscibili sono documentati nel rilievo fotografico, non dedotti dalle immagini AI. Le immagini non attestano giacenza. Le foto originali recuperate il 15 ottobre sono riferimenti per i nuovi scatti e per l’aspetto qualitativo degli spazi; non forniscono una planimetria quotata.

Prompt completi, fonti e selezione delle immagini sono in `docs/identita/`. Gli asset consumati sono in `public/brand/ui/`, `public/images/editorial/`, `public/images/hero/` e `public/images/materials/`. Lo script `scripts/prepare-editorial-assets.mjs` genera le varianti WebP e le dimensioni per il componente `EditorialPhoto`; selezione delle fotografie verticali/orizzontali tramite `picture/source`, non solo ritagli CSS.

Il primo pack di sette tavole editoriali è in `public/images/studies/`: archivio, Erica, materia minerale, viaggio/portici, regali, carta e profumeria. Il manifest `docs/identita/visual-pack-v1-manifest.json` conserva prompt integrali, riferimenti e originali; `VisualStudy.astro` applica immagini responsive e didascalie IT/EN. Non sono fotografie di articoli, esemplari autenticati o interni. Le 68 schede archivio ereditano il tema cedro; guide, famiglie e diario ricevono i materiali del proprio cluster. La mappa `docs/identita/asset-coverage-map.json` e il CSV omonimo coprono tutte le 214 route e distinguono applicazioni, lacune e riferimenti autentici richiesti. Rigenerare con `node scripts/build-asset-audit.mjs` dopo `npm run build:static`.

Raptus: assortimento confermato dall’utente; due linee e denominazioni verificate nel sito del marchio. Provenienza in `docs/ricognizione/raptus-sources.json`. La tavola ambrata è generica: le fotografie originali dei flaconi e il logo del marchio attendono asset autorizzati, come registrato nella mappa.

## R2 DOGO

Il caricamento immagini è predisposto per il bucket `dogostudio`, pubblico su `pub-b39e5084f7324516a4fe99c212a65c5f.r2.dev`, esclusivamente nel prefisso `clients/guerrazzi/`. Le chiavi non devono entrare in Git. Il caricamento usa nomi unici, controlla formato e dimensioni e non sovrascrive oggetti esistenti.

L’upload R2 resta predisposto ma non attivato in questa mandata. Nessun caricamento è documentato; le immagini pubbliche sono servite dal sito.

Le informative privacy e cookie sono bozze da completare con i dati del titolare. Non ci sono tracker, font remoti o mappe incorporate.

Aggiornamento 11 ottobre 2026: header con logo centrale e singola navigazione desktop; hero a sei scene con copy dedicato; accessi a regali, giochi e aree informative 18+; deposito Bounce anticipato in home e servizi. Le sostituzioni fotografiche del secondo mandato sono registrate in `docs/identita/asset-replacement-register.json`, comprese le 25 famiglie del catalogo e le generazioni precedenti non ancora recuperate. Le immagini editoriali provvisorie non certificano configurazione degli interni, stock o servizi aggiuntivi.

Materiali editoriali (11 ottobre 2026): sette texture ImageGen coordinate in `public/images/materials/`, con prompt, originali e usi nel registro `docs/identita/materials-imagegen-manifest.json`. Le texture sono decorative e non documentano specie, prodotti o interni. Le nuove guide botaniche e museali sono informative, con fonti primarie, IT/EN e conferma 18+.

La revisione UI completata estende all’intero sito i criteri di `docs/identita/secondo-mandato-ui.json`: nomi delle sezioni leggibili, titoli descrittivi, contenitori coerenti, azioni esplicite per categorie/schede/guide e minori ripetizioni. Il logo definitivo resta invariato. Verificati build statico (210 pagine), test applicativi, controlli SEO, 475 ancore e responsive a 320/390/768/1440 px sui template principali. Anche il test completo Node passa dopo aver corretto il limite di caricamenti annidati del build su Windows. Esiti in `docs/identita/ui-verification-2026-10-11.json`.

Aggiornamento 14 ottobre 2026: tutte le 26 famiglie del catalogo hanno una composizione fotografica distinta, generata in luce naturale su carta e legno; sostituite le illustrazioni nelle card, nelle 52 schede IT/EN e nei richiami delle categorie. Aggiunto il proteggi fili a forma di animaletti, con tre foto ricreate dalle quattro immagini dell’utente, scheda IT/EN, galleria accessibile, richiamo negli accessori telefono e dati Product. Le immagini e la provenienza sono in `docs/identita/catalog-photography-2026-10-14.json`; 87 varianti WebP sono servite localmente dal sito. Le foto delle famiglie sono illustrative e non certificano confezioni o stock; i flaconi della famiglia profumi non riproducono confezioni Raptus. Rimossi i glifi freccia da tutti i link e pulsanti collegati, incluso il testo aggiornato dallo slideshow. Il link Bounce è rimasto invariato, come richiesto.

Aggiornamento 15 ottobre 2026: 34 nuovi shooting selezionati, in 102 varianti WebP (360/720/1440 px, 9,4 MB complessivi), fedeli ai riferimenti del negozio. Il pavimento dell’interno è stato corretto sulla base delle foto originali. Manifest con prompt completi, riferimenti e due generazioni bloccate in `docs/identita/shooting-2026-10-15.json`; le schede Disney e Marvel usano la vista ampia della vetrina già selezionata. I nani sono salvadanai. Nuove viste della facciata, degli interni e della vetrina in home e negozio, con schema orientativo delle zone senza scala e senza misure inventate. Catalogo con 18 schede iniziali e caricamento progressivo, ricerca e filtri; senza JavaScript resta interamente consultabile. Loghi dei servizi e provenienza in `docs/identita/service-logos-2026-10-15.json`. Verificati Astro check, build statico, sei test applicativi, controlli SEO e immagini, risoluzione di link, ancore e asset. Controllo browser non eseguito in questo ambiente, che non dispone della capability richiesta. Il gate noindex resta attivo.


## Audit di pubblicazione — 19 ottobre 2026

Completate le narrazioni bilingui delle 26 famiglie iniziali: 57 famiglie su 57 hanno un racconto. Aggiunti tre articoli (giochi, souvenir, ricambi) e una guida bilingue ai ricambi: il sito contiene ora 17 guide, 26 articoli e 24 ingressi principali. Le 46 voci sigari hanno contenuto informativo; 43 includono nuovi fatti identificativi da fonti primarie, mentre Allegro, Spingarda XO e Cimette conservano soltanto un contesto storico verificato. Non sono 46 schede tecniche complete né offerte commerciali.

Aggiunte fotografie reali di Lucca, Sansepolcro e Orsago con licenze e crediti in `src/data/cigar-context-photographs.json`. Ripuliti gli altri contenuti pubblici dalle note sul processo creativo e dalle didascalie decorative. Footer globale con Powered by DOGO Studio e collegamento al case study Guerrazzi. Telefono e orari della scheda Google verificati il 19 ottobre; ragione sociale, partita IVA ed email restano da confermare su indicazione dell’utente.

L’export comprende 448 HTML (445 URL candidate per la sitemap, più privacy, cookie e 404). `npm run audit:content` aggiorna il rapporto completo in `docs/audit/site-content.json`; `node scripts/render-publication-audit.mjs` produce il rapporto leggibile separato dal sito pubblico. `npm run check:launch` segnala le condizioni ancora mancanti. Canonical, robots e sitemap condividono il gate in `src/lib/launch-readiness.mjs`: la sola variabile PUBLIC_LAUNCH_READY non può aprire un sito con dati aziendali o informativa incompleti.

La pubblicazione dell’aggiornamento conserva il noindex globale già attivo. Prima del lancio indicizzato vanno chiusi dati del titolare e informativa effettiva, applicato il brand book quando ricevuto e valutato il contenuto finale delle aree regolamentate nel contesto del rivenditore. Il rapporto `docs/audit/legal-review-2026-10-19.json` registra i rischi e le fonti; non costituisce clearance legale. Non sono stati configurati nuovi tracker. La verifica Search Console usa l’account esistente e un record TXT dedicato, senza modificare il routing del dominio.


## Trasparenza delle immagini, avvertenze e Postepay — 19 ottobre 2026

Aggiunta la nota generale concordata su ricostruzioni IA e marchi, con diciture locali brevi in IT/EN per le immagini registrate nei manifest. L’inventario esplicito comprende 269 file, incluse le varianti responsive: non equivale a 269 soggetti diversi. Foto Commons/autentiche, loghi ufficiali e texture decorative restano distinti; futuri caricamenti non vengono classificati automaticamente come IA. Le composizioni generiche di profumeria sono indicate come illustrative. La dichiarazione non certifica fedeltà, licenze o liceità di ogni immagine.

Privacy e cookie descrivono la versione statica effettiva, ricerca locale e memoria della conferma 18+. La scelta può essere cancellata dalla pagina Cookie. Avvertenze localizzate per tabacco, pipe, accessori e gioco, con fonti ISS e tutela dei minori, sono condivise dalle pagine pertinenti. Restano da confermare dati completi del titolare, recapito privacy, configurazione contrattuale hosting e criteri di conservazione dei log. Il gate di indicizzazione resta chiuso.

Nuovo servizio confermato dall’utente: ricariche Postepay al banco, con pagina IT/EN, logo ufficiale, FAQ e collegamenti dalla pagina Servizi. Fonti e provenienza del logo in docs/identita/postepay-service-sources.json. Export:450 HTML, 447 URL candidate. npm run test:notices controlla copertura locale delle diciture, distinzione foto autentiche, avvertenze e presenza del servizio.

Le diciture locali IA usano ora un piccolo pulsante semitrasparente con una “a” accanto al simbolo informativo. Il testo si apre soltanto al clic o all’attivazione da tastiera e si chiude con Escape o clic esterno. Le schede mantengono il collegamento sull’immagine senza annidare il pulsante in un link. Verificati tocco, tastiera, posizionamento del testo e navigazione del catalogo a 390 px.

Su richiesta dell’utente, trattamento grafico provvisorio di sfocatura per le ricostruzioni con confezioni, personaggi o dettagli specifici di prodotto. L’inventario esplicito in `src/data/product-image-treatment.mjs` comprende 92 file responsive in 30 gruppi: non indica 92 soggetti diversi e non classifica nuove foto. Il filtro riguarda soltanto l’immagine; titoli, descrizioni, collegamenti e icona informativa restano nitidi. Scene generiche, fotografie documentarie e loghi dei servizi non sono interessati. Per queste ricostruzioni OG/Twitter usano il logo del negozio; lo schema Product omette le immagini selezionate. La sfocatura CSS non modifica i file sorgenti, che restano accessibili come asset; non costituisce verifica o autorizzazione sui diritti delle immagini. Il trattamento va rimosso quando le ricostruzioni vengono sostituite con fotografie approvate.
