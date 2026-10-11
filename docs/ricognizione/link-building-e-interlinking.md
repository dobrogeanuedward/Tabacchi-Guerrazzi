# Autorità locale: collegamenti e fonti

Aggiornamento: 11 ottobre 2026. Nessun backlink acquisito o contatto esterno inviato in questa mandata.

## Implementato

- Nove categorie IT/EN: risposta sintetica a una richiesta concreta e due collegamenti contestuali, non una lista di parole chiave.
- Sei guide pratiche IT/EN con collegamenti alle categorie coerenti con il tema; tre guide normative e cinque guide documentarie IT/EN completano i 14 percorsi disponibili per lingua.
- Collegamenti reciproci fra articoli e categorie. I 18 articoli italiani sono organizzati in sette cluster: ai quattro iniziali si aggiungono Tabacco: informazioni e norme, Materiali e storia, Lessico e fonti. Le aree pertinenti restano informative per adulti, senza promozione o vendita di tabacco.
- 25 schede di famiglie non regolamentate e 34 voci informative sui sigari, ciascuna IT/EN, collegate alle rispettive categorie. La mandata UI corrente rende più chiari tipo di contenuto e azione di apertura e riduce le anteprime ripetute; le verifiche finali dei nuovi layout restano da registrare.
- Un'identità Store stabile e una WebSite collegata attraverso gli stessi `@id` quando il dominio è configurato. Nessun orario, recensione, prezzo o disponibilità inventati.
- Prenotazione Bounce verso la scheda del punto esatto; Google Maps per percorso e ricerca del negozio. Nessuna affiliazione aggiunta a `sameAs` come se fosse un profilo posseduto.

## Opportunità esterne, non risultati già ottenuti

| Priorità | Canale | Destinazione consigliata | Azione ancora necessaria |
| --- | --- | --- | --- |
| Alta | Profilo Google Business del negozio | Home e categorie pertinenti nei contenuti del profilo | Confermare dominio, proprietà e accesso; aggiornare dati reali e collegamento sito |
| Alta | Scheda partner Bounce Palazzo Ercolani | `/deposito-bagagli/` | Verificare se il partner può aggiungere il sito del negozio; non assumere che sia consentito |
| Alta | Profilo Instagram ufficiale | Home | Con approvazione operativa, aggiornare il link in bio e indirizzare i contenuti verso categorie pertinenti |
| Media | Strutture ricettive con relazione reale con Angela | `/deposito-bagagli/`, `/souvenir-bologna/` | Proporre una risorsa utile per gli ospiti, senza acquisto di link o scambi obbligatori |
| Media | Associazioni e reti commerciali a cui il negozio aderisce davvero | `/il-negozio/` | Confermare adesione e presenza in elenchi ufficiali; non inventare appartenenze |
| Da valutare | Risorse locali editoriali | Pagina utile per visitatori o storia delle serrande | Proporre un contenuto documentabile, solo dopo conferma di storia, autori e fotografie |

La scheda generale di Bologna Welcome riguarda Bounce a Bologna: **non è una menzione di Guerrazzi né un backlink al negozio**. Non inserirla come prova di una partnership editoriale.

## Fonti verificate

- Punto Bounce: https://bounce.com/stores/bologna/7ZRpUp — Palazzo Ercolani, Via Guerrazzi 10F, Bologna. Prezzi e orari restano sulla piattaforma.
- Risorsa turistica generale: https://www.bolognawelcome.com/it/altro/altro/bounce-deposito-bagagli-a-bologna — contesto sul servizio cittadino, non citazione del negozio.
- Collegamenti e anchor text: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — usare link HTML reali e testo descrittivo naturale; nessun numero “magico” di link.

## Pubblicazione e misurazione

Accessibilità pubblica e indicizzazione sono due condizioni distinte. Il sito è pubblico su `https://tabacchiguerrazzi.vercel.app`, con alias `https://tabacchiguerrazzu.vercel.app`. I deploy vengono attivati dai push su `main` del repository GitHub collegato: l’indisponibilità del connettore Vercel al team non blocca questo flusso. Il dominio finale resta da confermare.

L’indicizzazione resta disabilitata: l’export corrente contiene `noindex,nofollow`, `robots.txt` con `Disallow: /` e sitemap vuota. Per il lancio indicizzato occorrono dominio canonico confermato, `PUBLIC_SITE_URL` e `PUBLIC_LAUNCH_READY=true`, dopo il completamento dei dati dell’attività e delle informative. Questa mandata UI non modifica tali configurazioni. La pubblicazione non dimostra che Google o un motore generativo abbia indicizzato o citato le pagine.

Telefono, email, ragione sociale/P. IVA, orari ufficiali, dati del titolare e dei fornitori devono essere confermati. Le foto originali degli interni e le vecchie generazioni non recuperate restano in attesa: le sostituzioni seguono `docs/identita/asset-replacement-register.json`, senza nuove ricostruzioni alla cieca. Queste attese non impediscono di migliorare gerarchia, accessibilità e collegamenti interni.

Dopo l'attivazione: verificare sitemap e canonical, impostare Search Console con accesso del proprietario, misurare query/pagine e mantenere un registro dei link effettivamente pubblicati (URL fonte, destinazione, data, stato). Non inviare richieste o modificare profili esterni senza accesso e autorizzazione.
