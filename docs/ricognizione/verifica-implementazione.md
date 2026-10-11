# Verifica dell’integrazione

Aggiornamento: 11 ottobre 2026. Perimetro Autorità; identità esistente e logo definitivo conservati.

## Consistenza dell’export disponibile

Conteggi rilevati dalla build `dist` presente all’inizio della mandata UI corrente:

| Contenuto | Percorsi |
| --- | ---: |
| Pagine principali, comprese home e nove categorie aggiunte | 21 IT + 21 EN |
| Guide pratiche e informative | 14 IT + 14 EN |
| Schede di famiglie non regolamentate | 25 IT + 25 EN |
| Voci informative sulle denominazioni dei sigari | 34 IT + 34 EN |
| Articoli | 18 IT, in sette cluster |
| Indice del diario | 1 IT |
| Privacy e cookie | 2 IT |
| Pagina 404 | 1 |
| **Totale HTML** | **210** |

Il totale comprende 209 `index.html` e la 404, non 210 argomenti distinti. Le cinque guide su materiali, storia, botanica e lessico si aggiungono alle sei guide pratiche e alle tre informative normative.

## Verifiche della versione già pubblicata

La versione precedente alla mandata UI corrente è pubblicata su `https://tabacchiguerrazzi.vercel.app` e sull’alias `https://tabacchiguerrazzu.vercel.app`. I push su `main` avviano i deploy Vercel collegati al repository.

- Build statico, controllo Astro, test applicativi e controlli SEO delle categorie, delle schede e delle guide informative erano stati completati nella precedente mandata.
- La navigazione e i layout modificati erano stati verificati a 320, 390, 768 e 1440 px; questo non equivale a una nuova verifica browser esaustiva di tutti i 210 file HTML.
- Header con logo centrale e un’unica navigazione desktop. Il menu burger è mobile; la vecchia barra secondaria sotto l’header è stata rimossa. Menu completo organizzato in tre aree, con 18+ sui collegamenti pertinenti, Escape e ritorno del focus.
- Home con sei scene hero, copy e destinazioni dedicati, pausa e rispetto di reduced motion; deposito Bounce anticipato in home e servizi.
- Collegamento di prenotazione al punto esatto: `https://bounce.com/stores/bologna/7ZRpUp`, Palazzo Ercolani, Via Guerrazzi 10/F.
- FAQ strutturate corrispondenti alle risposte visibili; `Service` nelle pagine bagagli e `Article` con fonti nelle guide documentarie. Nessun prezzo, stock, recensione o rating inventato; l’area tabacco non contiene `Product`/`Offer` o ordini.
- Conferma 18+ limitata alle aree pertinenti; nessun documento o profilo raccolto. L’autodichiarazione non è una verifica dell’identità.

## Mandata UI corrente

È in corso l’estensione della gerarchia leggibile all’intero sito: nome della sezione evidente, titoli concreti, sintesi brevi, schede contenute e azioni esplicite per aprire categorie, famiglie, guide e articoli. La densità e le ripetizioni dei percorsi collegati vengono ridotte secondo `docs/identita/secondo-mandato-ui.json`.

Dopo l’integrazione occorre registrare gli esiti effettivi di `npm test`, `npm run check`, `npm run build:static`, `npm run test:seo` e dei controlli browser sui template modificati. Non attribuire a questa mandata i risultati dei controlli precedenti. Le verifiche non sono una promessa di posizionamento SEO o citazione da assistenti.

## Asset e attività ancora in attesa

Le scene editoriali e le hero sono provvisorie, approvate dall’utente per questa fase. Sono presenti otto gruppi di fotografie editoriali con composizioni mobile/desktop, illustrazioni decorative, quattro nuove immagini hero e sette texture ImageGen. Le texture non certificano materiali o specie; le scene non certificano interni, stock o servizi.

I file delle fotografie originali degli interni e alcune generazioni della chat precedente devono essere recuperati; non dichiararli già disponibili. Il registro `docs/identita/asset-replacement-register.json` documenta quattro hero, otto gruppi editoriali, nove scene legacy e 25 famiglie del catalogo da confrontare con nuovi riferimenti reali. Nessuna nuova ricostruzione degli interni senza riferimenti sufficienti.

Restano da confermare telefono, email, ragione sociale/P. IVA, orari, dati del titolare e dei fornitori per le informative, recensioni approvate e servizi effettivamente attivi. Il dominio finale resta da confermare.

L’indicizzazione è disabilitata nell’export corrente: `noindex,nofollow`, `robots.txt` con `Disallow: /` e sitemap vuota. Il gate richiede `PUBLIC_SITE_URL` e `PUBLIC_LAUNCH_READY=true`; questa mandata UI non li attiva. Informative e dati dell’attività devono essere completati prima del lancio indicizzato.
