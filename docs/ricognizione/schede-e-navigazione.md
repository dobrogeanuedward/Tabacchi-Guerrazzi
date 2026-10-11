# Schede, identità e navigazione — 11 ottobre 2026

Sono presenti 25 schede di famiglie non regolamentate e 34 voci informative sulle denominazioni dei sigari, ciascuna in italiano e inglese: 118 percorsi collegati alle categorie. L’export disponibile all’inizio di questa mandata contiene 209 pagine con `index.html`, più la 404: 210 file HTML totali. Include 21 percorsi principali IT/EN, 14 guide IT/EN, 18 articoli italiani in sette cluster, il diario e due informative. I percorsi sono predisposti per la sitemap, che resta vuota finché il gate di lancio è disabilitato.

Le famiglie comprendono tre dettagli pratici da controllare, una domanda specifica, una breve risposta, FAQ visibili con schema corrispondente e collegamenti alle altre schede della categoria. Fotografie e illustrazioni editoriali non descrivono una SKU precisa. Nessuno stock o prezzo è inventato.

L'archivio sigari deriva dal registro fotografico consolidato, con riferimento alla voce e alla fotografia. Le attribuzioni incerte restano esplicite: Arcano, Il Lustro, Long Riserva, Long Filler, Galante e Cacciatore maremmano non vengono attribuiti a un produttore finché non è verificata la confezione frontale. Le letture parziali GF01-074/075 non generano nuove pagine. Plasencia Alma non viene completato con suffissi ipotizzati. Per Toscanello sono documentate solo Bianco, Blu, Rosso e XXL, senza dedurre tutte le combinazioni di linea.

Le schede sigari sono protette dalla conferma di maggiore età della sessione. Contengono denominazioni, limiti del riscontro e fonti ufficiali, senza descrizioni sensoriali, consigli di consumo, prezzi, disponibilità, ordini, offerte o dati Product/Offer. La conferma 18+ non viene descritta come verifica dell'identità o autorizzazione alla pubblicità.

Il logo è al centro dell’header. Su desktop è presente una sola navigazione, con menu Esplora suddiviso in tre aree; il burger è mobile. La vecchia barra secondaria sotto l’header è stata rimossa. I collegamenti pertinenti indicano 18+; dialog, Escape e ritorno del focus restano supportati. Il deposito bagagli è raggiungibile dall’header, dalle informazioni utili e da un blocco anticipato della home, oltre che dalla pagina Servizi.

Il logo originale viene ripreso sulle schede, nei richiami di visita e nella sezione di Angela. La parola Angela è una composizione tipografica, non una firma autografa ricostruita. Gli eyebrow hanno una classe semantica dedicata: Bodoni corsivo autentico (font locale dedicato, senza sintesi), nero, misura maggiore; sui fondi scuri hanno un campo chiaro.

La mandata UI corrente applica la revisione di `docs/identita/secondo-mandato-ui.json` ai template generali: nomi di sezioni e categorie subito riconoscibili, titoli proporzionati, contenitori coerenti e azioni esplicite. Categoria, famiglia di articoli, guida, servizio e informazione devono essere distinguibili prima dell’apertura. Le liste di contenuti collegati vanno sintetizzate; i dettagli secondari restano consultabili progressivamente. Il logo definitivo non viene rigenerato.

## Asset generato

Percorso: public/brand/ui/archive-reference.webp. Immagine quadrata ottimizzata a 640 px, usata nell'archivio delle denominazioni. Generata con imagegen integrato, poi ridimensionata e compressa con Sharp. Non rappresenta confezioni di tabacco.

Prompt: Use case: stylized-concept. Asset type: premium Italian shop website UI editorial artwork. Create a refined square composition on warm ivory handmade paper: a small fan of blank archival index cards with delicate cobalt blue ruled edges, one deep cobalt clothbound reference notebook, a slim brass bookmark, a subtle blind embossed architectural arch inspired by Bologna porticoes on one blank card. Elegant hand painted gouache with precise ink details, tactile paper fibres, soft natural side shadows. Palette ivory, ultramarine cobalt #0645c0, tiny aged brass accent. Composition spacious with the artwork centered in the lower two thirds, objects small enough to have substantial breathing room. High end Italian editorial stationery illustration, quietly beautiful, no gradients or glossy CGI. No words, letters, numbers, logos, tobacco, cigars, cigarettes, people or commercial packaging. This is a visual for a factual documentation archive, not a product advertisement.

## Verifica

La versione già pubblicata ha superato controllo Astro, test applicativi, build statico e controlli SEO sulle schede. I controlli verificano corrispondenza FAQ/contenuto, collegamenti esistenti e conferma 18+ nel solo perimetro pertinente. Le verifiche browser precedenti coprono i layout modificati a 320, 390, 768 e 1440 px. La revisione corrente richiede una nuova verifica dopo l’integrazione: non considerare automaticamente trasferiti i risultati precedenti. Non è una promessa di posizionamento SEO o citazione da assistenti.

## Attese e stato del lancio

Il sito è pubblico su `https://tabacchiguerrazzi.vercel.app`, con alias `https://tabacchiguerrazzu.vercel.app`; l’indicizzazione resta disabilitata. Dominio finale, dati del titolare, telefono, email, ragione sociale/P. IVA e orari ufficiali devono essere confermati prima di completare le informative e valutare l’attivazione di `PUBLIC_SITE_URL` e `PUBLIC_LAUNCH_READY=true`.

Le fotografie originali degli interni e le generazioni non recuperate della chat precedente restano in attesa. Le sostituzioni sono documentate in `docs/identita/asset-replacement-register.json`; le immagini attuali sono provvisorie e non dimostrano articoli specifici, stock o configurazione degli interni. Nuove immagini fedeli richiedono riferimenti reali sufficienti.
