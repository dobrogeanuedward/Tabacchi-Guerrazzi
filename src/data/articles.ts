import {articleRevision,neighborhoodArticles} from './article-revision';
import {tobaccoArticles} from './tobacco-information';

export const clusters = [
  {id:'servizi',label:'Servizi pratici',parent:'servizi',theme:'utility'},
  {id:'regali',label:'Idee regalo',parent:'idee-regalo',theme:'regalo'},
  {id:'giochi',label:'Giochi e giocattoli',parent:'giochi-e-giocattoli',theme:'gioco'},
  {id:'quartiere',label:'Negozio e quartiere',parent:'il-negozio',theme:'bottega'},
];

export const articleCategoryLinks:Record<string,string[]>={
  'ricarica-telefonica-cosa-preparare':['accessori-telefono'],
  'avviso-pagamento-documenti':['ricevitoria'],
  'servizi-negozio-organizzare-visita':['deposito-bagagli'],
  'regalo-compleanno-da-dove-partire':['feste-e-compleanni'],
  'piccolo-pensiero-occasione':['souvenir-bologna'],
  'scegliere-regalo-ultimi-minuti':['cartoleria','souvenir-bologna'],
  'gioco-regalo-eta-interessi':['feste-e-compleanni'],
  'giochi-viaggio-piccoli-passatempi':['deposito-bagagli'],
  'scegliere-gioco-insieme':['feste-e-compleanni'],
  'guerrazzi-via-guerrazzi-bologna':['deposito-bagagli'],
  'vetrina-guerrazzi-piccole-scelte':['cartoleria','piccole-necessita'],
  'angela-attenzione-negozio':['accessori-telefono','cartoleria'],
};

export type Article={slug:string;cluster:string;title:string;summary:string;guide:string;sections:string[][];sources?:{label:string;url:string}[]};

export const articles:Article[] = [
  {
    slug:'ricarica-telefonica-cosa-preparare',cluster:'servizi',
    title:'Ricarica telefonica: numero, operatore e importo',
    summary:'Il numero completo è il primo controllo. Poi vengono operatore, importo e condizioni: ecco cosa preparare prima di chiedere una ricarica.',
    guide:'ricariche-telefoniche',
    sections:[
      ['Il numero, per esteso','Se la ricarica è per un’altra persona, fatti mandare il numero per iscritto. Portalo completo e rileggi tutte le cifre prima della conferma. Un numero ricordato a memoria o dettato in fretta lascia più spazio a un errore.'],
      ['Operatore e importo: chiedi prima','Prepara il nome dell’operatore e l’importo che vorresti ricaricare. Verifica con il negozio che la richiesta possa essere gestita, quali modalità di pagamento siano ammesse e se ci siano condizioni da conoscere. Un’operazione già fatta in passato non conferma automaticamente quella di oggi.'],
      ['La ricevuta va tenuta','Se viene rilasciata una ricevuta, conservala fino a quando hai controllato l’esito della ricarica. Se qualcosa non torna, il riferimento dell’operazione permette di spiegare il problema con precisione.'],
      ['Credito telefonico o batteria scarica?','Sono due necessità diverse. Per il credito servono numero e operatore; per un cavo servono il dispositivo e i connettori. Nella sezione accessori per telefono trovi cavi e power bank, anche Teknee: funzione e compatibilità si leggono sul singolo modello.'],
    ],
  },
  {
    slug:'avviso-pagamento-documenti',cluster:'servizi',
    title:'Bollettino o pagoPA: cosa portare e cosa chiedere',
    summary:'Porta l’avviso completo e verifica che il tuo documento possa essere gestito. Una foto tagliata o il solo nome del servizio non bastano.',
    guide:'bollettini-e-pagopa',
    sections:[
      ['Tieni insieme tutte le pagine','Codici e identificativi devono essere leggibili. Prepara l’avviso completo: evita fotografie sfocate e ritagli che eliminano una parte del documento. Se ci sono più pagine, tienile tutte a disposizione.'],
      ['Descrivi l’avviso prima della visita','Chiedi se il negozio può gestire quel documento e quali modalità di pagamento sono ammesse. Specifica il tipo di avviso: la parola “pagamento” da sola dice poco. Le condizioni di una precedente operazione possono non essere le stesse.'],
      ['Chiarisci i costi prima di confermare','Controlla i dettagli dell’operazione e chiedi quali commissioni siano previste. Fallo prima della conferma. Conserva poi la ricevuta o il riscontro rilasciato, così da avere un riferimento se dovesse servire.'],
      ['I marchi della ricevitoria non confermano il servizio','I materiali Lotto e Sisal documentano una zona di ricevitoria. La loro presenza non dimostra che un particolare avviso possa essere pagato. Per organizzarti conta la risposta sulla tua richiesta precisa.'],
    ],
  },
  {
    slug:'servizi-negozio-organizzare-visita',cluster:'servizi',
    title:'Prima di andare in negozio: tre controlli utili',
    summary:'Chiarisci la richiesta, prepara i riferimenti e controlla gli orari. Per il deposito bagagli, la prenotazione passa da Bounce.',
    guide:'raggiungere-il-negozio',
    sections:[
      ['Che cosa devi fare?','Un avviso da pagare, una ricarica e un deposito bagagli richiedono preparazioni diverse. Parti dall’operazione: per un pagamento indica il documento; per una ricarica l’operatore. Una domanda precisa permette di verificare il servizio prima di mettersi in viaggio.'],
      ['Che cosa devi portare?','Tieni a portata di mano il documento completo, il codice o il numero necessario. Le guide dei servizi raccolgono i controlli da fare; per costi, modalità e disponibilità serve la conferma sul tuo caso.'],
      ['Quando e dove devi arrivare?','Controlla gli orari aggiornati e apri il percorso dalla tua posizione. L’indirizzo di Guerrazzi è Via Guerrazzi 10/F, 40125 Bologna. Per una commissione specifica, verifica il servizio prima di partire: trovare il civico giusto non garantisce che l’operazione sia disponibile.'],
      ['Se devi lasciare le valigie','Il deposito di Guerrazzi si prenota tramite Bounce. La scheda si chiama “Palazzo Ercolani” e riporta lo stesso indirizzo. Scegli data e bagagli sulla piattaforma, controlla consegna e ritiro e conserva la conferma. La pagina Deposito bagagli collega alla scheda ufficiale.'],
    ],
  },
  {
    slug:'regalo-compleanno-da-dove-partire',cluster:'regali',
    title:'Regalo di compleanno: interessi, budget e confezione',
    summary:'Un’abitudine della persona aiuta più di una ricerca generica. Parti da quella, fissa un budget e controlla i dettagli del regalo.',
    guide:'scegliere-un-regalo',
    sections:[
      ['Pensa a un’attività, prima che a un oggetto','La persona scrive, gioca, raccoglie piccoli ricordi? Un interesse concreto restringe la ricerca. Anche un’abitudine semplice — prendere appunti o conservare ricordi di viaggio — può suggerire una direzione. Non occorre conoscere ogni preferenza: serve un punto da cui partire.'],
      ['Decidi quanto vuoi spendere','Fissa il budget prima di confrontare le proposte. Poi pensa all’uso: un oggetto quotidiano e un passatempo da condividere rispondono a esigenze diverse. Se scegli un gioco per un bambino, età indicata e avvertenze sulla confezione vengono prima dell’aspetto della scatola.'],
      ['Usa il catalogo per restringere la scelta','Le schede di Guerrazzi distinguono famiglie di articoli e gli eventuali prodotti pubblicati. Ti aiutano a trovare la categoria; per una variante precisa controlla la disponibilità. Dal vivo puoi confrontare dimensioni, materiali e confezione.'],
      ['Lascia spazio al biglietto','L’assortimento comprende biglietti di compleanno illustrati, anche con applicazioni. Guarda il soggetto, lo spazio per il messaggio e la presenza della busta. Se cerchi anche una candelina numerica, indica le cifre: vanno verificate singolarmente.'],
    ],
  },
  {
    slug:'piccolo-pensiero-occasione',cluster:'regali',
    title:'Un piccolo regalo per dire grazie: come orientarsi',
    summary:'Un invito, un ringraziamento, un ricordo di Bologna. L’occasione aiuta a scegliere un pensiero senza complicare la ricerca.',
    guide:'scegliere-un-regalo',
    sections:[
      ['Dai un nome all’occasione','Stai ringraziando qualcuno, andando a cena o tornando da un viaggio? Il motivo del regalo aiuta a decidere il tipo di oggetto e il budget. Basta questo primo riferimento per scartare proposte che non c’entrano con il gesto.'],
      ['Immagina come verrà usato','Un oggetto da tenere sulla scrivania, un piccolo ricordo e un passatempo da condividere hanno usi diversi. Pensa alla giornata della persona. Per un regalo destinato a un bambino, controlla le indicazioni del produttore e le avvertenze del singolo articolo.'],
      ['Guarda dimensioni e confezione','Le immagini del sito aiutano a riconoscere le categorie; le illustrazioni generiche non mostrano un prodotto preciso. Confronta l’oggetto dal vivo e verifica la variante che ti interessa. Se parti per un articolo specifico, chiedi prima se è presente.'],
      ['Per un ricordo di Bologna, parti dalle calamite','Nell’espositore trovi torri, monumenti e scritte di Bologna. Guarda il disegno e le dimensioni dell’oggetto e scegli il soggetto che ti ricorda il viaggio. Un biglietto con poche parole può accompagnare il ricordo.'],
    ],
  },
  {
    slug:'scegliere-regalo-ultimi-minuti',cluster:'regali',
    title:'Regalo all’ultimo minuto: tre domande per scegliere',
    summary:'Per chi è, per quale occasione e con quale budget? Rispondere prima di entrare riduce le alternative da confrontare.',
    guide:'scegliere-un-regalo',
    sections:[
      ['Per chi, per cosa, quanto?','Segna età, occasione e budget. Aggiungi un interesse, se lo conosci. Sono riferimenti più utili di “qualcosa di bello”: permettono di partire da una categoria e confrontare proposte sensate per quella persona.'],
      ['Scegli una categoria concreta','Giochi, cartoleria, calamite di Bologna e biglietti augurali offrono punti di partenza diversi. La persona scrive o studia? Sta visitando la città? Festeggia un compleanno? Segui la risposta più chiara, senza aprire ogni possibilità insieme.'],
      ['Se hai già un nome, verifica quello','Quando il tempo è poco, una ricerca generica può aspettare. Se cerchi un articolo preciso, chiedi se è presente e indica la variante. Una scheda online descrive un riferimento, ma non sostituisce la verifica per una richiesta urgente.'],
      ['Controlla anche la partenza','Prima di muoverti, guarda gli orari aggiornati e il percorso. La destinazione è Via Guerrazzi 10/F, Bologna. Se al regalo vuoi aggiungere un biglietto o una busta, inseriscili nella richiesta: anche misura e confezione meritano un controllo.'],
    ],
  },
  {
    slug:'gioco-regalo-eta-interessi',cluster:'giochi',
    title:'Regalare un gioco: età, interessi e avvertenze',
    summary:'La prima lettura è sulla scatola. Poi vengono gli interessi del bambino e il modo in cui userà il gioco.',
    guide:'scegliere-un-gioco',
    sections:[
      ['Leggi l’età e le avvertenze','Le indicazioni del produttore sono il primo riferimento. Non sostituirle con un giudizio basato sul colore o sulla forma del gioco. Un oggetto dall’aspetto semplice può contenere piccoli componenti o richiedere capacità specifiche.'],
      ['Chiedi che cosa gli piace fare','Costruire, inventare storie, seguire regole, giocare insieme: gli interessi danno una direzione alla scelta. Se non conosci bene il bambino, chiedi a chi se ne occupa. Un’indicazione concreta vale più dell’idea che tutti i coetanei desiderino lo stesso gioco.'],
      ['Confronta l’uso previsto','Guarda dimensioni, componenti e numero di partecipanti. Pensa a dove verrà usato e con chi. Catalogo e confezione servono a raccogliere questi dettagli; prima di una visita per un modello preciso, verifica che sia presente.'],
      ['Distingui gioco, festa e ricevitoria','Sono sezioni diverse. Palloncini e candeline hanno istruzioni proprie; i materiali di ricevitoria non appartengono ai passatempi per bambini. Leggi la confezione di ogni articolo, anche quando più cose servono per lo stesso compleanno.'],
    ],
  },
  {
    slug:'giochi-viaggio-piccoli-passatempi',cluster:'giochi',
    title:'Giochi da viaggio: spazio, pezzi e tempo a disposizione',
    summary:'Una scatola piccola non dice tutto. Considera lo spazio per giocare, i componenti da gestire e la durata del passatempo.',
    guide:'scegliere-un-gioco',
    sections:[
      ['Immagina il posto in cui giocherai','Un tavolino, una sala d’attesa e un pomeriggio all’aperto offrono spazi diversi. Guarda quanto posto richiede il gioco una volta aperto, oltre alle dimensioni della confezione. Conta anche quanti pezzi dovrai tenere insieme.'],
      ['Leggi regole, durata e partecipanti','Per una pausa breve cerca nelle indicazioni del gioco le informazioni sulla durata. Controlla quante persone possono partecipare e come si svolge l’attività. Se scegli per un bambino, leggi anche età indicata e avvertenze.'],
      ['Descrivi l’esigenza, poi confronta i prodotti','“Da viaggio” descrive l’uso che hai in mente. Non garantisce un assortimento sempre disponibile. Spiega lo spazio, l’età e il tempo a disposizione; confronta poi gli articoli effettivamente presenti. Per un modello preciso, verifica prima della visita.'],
      ['Se a Bologna hai anche le valigie','Il deposito bagagli è una richiesta separata dalla scelta del gioco. Da Guerrazzi passa tramite Bounce, sulla scheda “Palazzo Ercolani”. Prenota sulla piattaforma e organizza il ritiro; per il passatempo continua invece a fare riferimento alla sua confezione.'],
    ],
  },
  {
    slug:'scegliere-gioco-insieme',cluster:'giochi',
    title:'Scegliere un gioco con un bambino: cosa osservare',
    summary:'La curiosità suggerisce un punto di partenza. Età, avvertenze e uso previsto aiutano a capire se quel gioco è adatto.',
    guide:'scegliere-un-gioco',
    sections:[
      ['Ascolta che cosa attira l’attenzione','Un personaggio, un colore o un’attività possono accendere la curiosità. Chiedi al bambino che cosa gli piacerebbe fare con quel gioco. La risposta aiuta a capire l’interesse, anche se da sola non stabilisce l’idoneità dell’articolo.'],
      ['Passa dalla scatola alle indicazioni','Leggi età e avvertenze del produttore, poi guarda componenti e modalità di utilizzo. Quanto spazio serve? Si gioca da soli o insieme? Sono domande concrete da affiancare all’entusiasmo del momento.'],
      ['Una scelta da condividere','Se il bambino sceglie insieme a te, chiedigli che cosa gli piace fare: costruire, inventare storie o giocare con altri. Guarda poi la confezione del gioco preciso, l’età indicata e i componenti inclusi. Un interesse concreto aiuta a orientarsi fra proposte diverse.'],
      ['Se il gioco è un regalo di compleanno','Dopo i controlli sul gioco puoi cercare un biglietto e confrontare buste e fiocchi. Sono dettagli del regalo, con caratteristiche proprie. Una confezione più curata non cambia l’età indicata o le avvertenze del gioco.'],
    ],
  },
  {
    slug:'guerrazzi-via-guerrazzi-bologna',cluster:'quartiere',
    title:'Come raggiungere Guerrazzi in Via Guerrazzi 10/F',
    summary:'L’indirizzo completo, il percorso dalla tua posizione e il nome usato da Bounce per il deposito bagagli.',
    guide:'raggiungere-il-negozio',
    sections:[
      ['Usa l’indirizzo completo','Tabaccheria Guerrazzi di Angela si trova in Via Guerrazzi 10/F, 40125 Bologna. Inserisci anche il civico quando imposti la destinazione: è il riferimento da usare per raggiungere il negozio.'],
      ['Scegli il percorso dalla tua posizione','Apri le indicazioni e seleziona il mezzo con cui ti sposti. Tempi e tragitto dipendono dal punto di partenza e dalle condizioni del momento. Controllali nella tua app di mappe prima di partire.'],
      ['Verifica la richiesta e gli orari','Il sito raccoglie categorie, schede e informazioni sui servizi. Se arrivi per un articolo o un’operazione precisa, verifica prima la disponibilità e gli orari aggiornati. L’indirizzo ti porta al luogo; la conferma sul caso specifico ti aiuta a organizzare la visita.'],
      ['Su Bounce il nome è “Palazzo Ercolani”','La scheda del deposito bagagli usa questo nome, ma l’indirizzo è sempre Via Guerrazzi 10/F. Confronta i due riferimenti quando prenoti. Controlla sulla piattaforma data, consegna e ritiro; poi usa il civico per impostare il percorso.'],
    ],
  },
  {
    slug:'vetrina-guerrazzi-piccole-scelte',cluster:'quartiere',
    title:'Cosa trovi da Guerrazzi oltre alla tabaccheria',
    summary:'Cartoleria, calamite di Bologna, biglietti, accessori e piccoli articoli pratici: le categorie aiutano a trovare il percorso giusto.',
    guide:'scegliere-un-gioco',
    sections:[
      ['Carta, scrittura e compleanni','Quaderni, penne, evidenziatori e un espositore di biglietti augurali rispondono a piccole commissioni diverse. Per un quaderno confronta formato e rigatura; per un biglietto guarda disegno, testo interno e busta. Cartoleria e feste hanno percorsi dedicati per scegliere con calma.'],
      ['Ricordi di Bologna, giochi e profumi','Le calamite comprendono soggetti con torri, monumenti e scritte della città. Giochi e piccoli regali hanno percorsi propri. Il negozio conferma anche l’intera gamma di profumi Raptus per persona: nome e formato si verificano sulla singola fragranza. Le illustrazioni generiche del sito non identificano ogni variante presente.'],
      ['Accessori per telefono e necessità quotidiane','Cavi, power bank, nastri, colle e piccoli articoli di cura personale hanno usi diversi. Le loro schede aiutano a formulare una richiesta precisa. Per un cavo servono i connettori; per una colla i materiali da unire. Il marchio, da solo, non risponde a queste domande.'],
      ['Dalla categoria al singolo articolo','Una famiglia non è un inventario aggiornato. Usa il sito per trovare il gruppo che ti interessa, poi verifica modello, confezione e disponibilità. Anche le scene di Angela e della bambina sono ricreazioni editoriali: per conoscere l’articolo contano i suoi dati e la confezione.'],
    ],
  },
  {
    slug:'angela-attenzione-negozio',cluster:'quartiere',
    title:'Come chiedere l’articolo giusto da Guerrazzi',
    summary:'Un formato, una misura o una foto del riferimento possono chiarire la richiesta. I dettagli utili cambiano con ciò che cerchi.',
    guide:'raggiungere-il-negozio',
    sections:[
      ['Per un quaderno, comincia dal foglio','Indica formato e rigatura, poi il tipo di rilegatura. Se vuoi ritrovare quello usato a scuola o al lavoro, una foto del riferimento può evitare di confondere un blocco con un quaderno. Il nome della marca è utile, ma non descrive tutti questi dettagli.'],
      ['Per un cavo, guarda entrambe le estremità','Prepara il modello del dispositivo e una foto delle porte da collegare. Specifica se ti serve la ricarica, il trasferimento dati o entrambi: la funzione va controllata sul cavo preciso. La forma di un connettore non sostituisce le specifiche del modello.'],
      ['Per un regalo, descrivi la persona','Età, interessi, occasione e budget danno una direzione alla ricerca. Se hai già un oggetto in mente, aggiungi nome e variante. Per una calamita indica il soggetto; per una busta regalo porta le misure dell’oggetto da contenere.'],
      ['Usa la scheda come promemoria','Le famiglie del catalogo raccolgono i dettagli da confrontare. Tieni il riferimento a portata di mano quando chiedi informazioni e verifica la disponibilità prima di una visita dedicata. Per raggiungere il negozio, usa Via Guerrazzi 10/F, Bologna.'],
    ],
  },
];

// Keep source attribution, cluster membership and adult-area routes in the shared
// information data. These local copies revise only the articles' editorial text.
const informationArticleCopy:Record<string,Pick<Article,'title'|'summary'|'sections'>>={
  'sigari-sigaretti-informazioni-termini':{
    title:'Sigari e sigaretti: cosa significano i due nomi',
    summary:'Il significato delle denominazioni nel testo normativo citato e le informazioni che il nome, da solo, non contiene.',
    sections:[
      ['Il termine “sigaretto” nel decreto','Nelle definizioni del D.Lgs. 6/2016 citato in questa area, il sigaretto è descritto come un sigaro piccolo. Il riferimento serve a leggere una denominazione. Non stabilisce una graduatoria tra articoli e non indica quale consumare.'],
      ['Leggi la denominazione completa','Un nome abbreviato o una foto ritagliata possono lasciare fuori informazioni. Leggi la denominazione insieme al resto della confezione. Il nome della categoria non descrive automaticamente composizione e caratteristiche di ogni articolo che vi appartiene.'],
      ['Dove approfondire i termini','La guida collegata raccoglie le definizioni e rimanda al testo pubblicato in Gazzetta Ufficiale. Questa è un’area informativa per adulti: non presenta offerte, consigli di consumo, ordini o spedizioni di tabacco. Le informazioni generali sul negozio restano nelle sezioni dedicate al luogo.'],
    ],
  },
  'tabacco-18-anni-conferma-documento':{
    title:'Conferma 18+: che cosa dichiari sul sito',
    summary:'Il pulsante consente di consultare l’area per adulti. Non verifica la tua identità e non sostituisce il controllo del documento previsto al banco.',
    sections:[
      ['Dichiari di avere almeno 18 anni','Il sito chiede questa conferma prima di mostrare le sezioni interessate. Non richiede un documento né una data di nascita. La scelta viene conservata nella sessione del browser e non crea un profilo dell’utente.'],
      ['Il documento è un controllo distinto','La conferma online non sostituisce gli obblighi relativi alla vendita ai minori e al controllo del documento. La guida dedicata collega il riferimento normativo. Il pulsante serve alla consultazione del sito: non dimostra chi lo abbia premuto.'],
      ['Puoi uscire e continuare a navigare','Se non confermi, il collegamento di uscita porta alla home. Cartoleria, idee regalo, giochi, souvenir e deposito bagagli restano consultabili senza questa autodichiarazione. La scelta di leggere una sezione non richiede di entrare nelle altre.'],
    ],
  },
  'tabacco-confezioni-fonti-informazione':{
    title:'Confezioni di tabacco: leggere nomi e avvertenze',
    summary:'La confezione riguarda l’articolo preciso; una fonte normativa spiega le regole. Ecco perché le due informazioni vanno lette separatamente.',
    sections:[
      ['Parti dalla confezione precisa','Leggi denominazione e informazioni riportate sull’imballaggio, comprese le avvertenze. Una scheda generale non certifica il singolo articolo e un contenuto online non sostituisce ciò che compare sulla confezione. Non trasferire le informazioni da un prodotto a un altro.'],
      ['Controlla quale testo stai consultando','La Gazzetta Ufficiale collegata documenta il provvedimento pubblicato. Per ricostruire modifiche successive serve il testo vigente. Prima di attribuire una regola alla situazione attuale, verifica quindi il ruolo e la versione della fonte.'],
      ['Non ricavare benefici da nomi o immagini','Grafica e denominazione non dimostrano un vantaggio per la salute. Questa area non propone confronti commerciali o consigli di consumo. Per comprendere i termini consulta le guide e i riferimenti ufficiali; per dubbi sulla salute rivolgiti a un professionista sanitario.'],
    ],
  },
  'radica-non-semplice-radice':{
    title:'Radica di erica: che cos’è e dove si forma',
    summary:'La struttura da conoscere è il lignotubero: un ingrossamento legnoso fra radice e fusto. Le fonti botaniche spiegano dove si trova e quale ruolo ha nella pianta.',
    sections:[
      ['Il punto di passaggio fra radice e fusto','Per capire la radica occorre guardare l’anatomia della pianta. Lo studio di Paula e colleghi descrive in Erica arborea il lignotubero, un ingrossamento legnoso nella zona di transizione fra radice e fusto. Chiamarlo soltanto “radice” non restituisce questa struttura.'],
      ['Gemme e riserve: il ruolo nella pianta','Il lignotubero contiene gemme dormienti e riserve di amido. Gli autori ne studiano il ruolo nella capacità di ricaccio dopo forti disturbi e includono Erica arborea fra le specie documentate. Prima di diventare un materiale per oggetti, è dunque una parte della pianta con una funzione biologica.'],
      ['Che cosa documentano le due fonti','Kew permette di verificare identità e classificazione della specie. Il lavoro di anatomia vegetale descrive il lignotubero e ne documenta gli impieghi storici. Per attribuire quel materiale a un singolo oggetto serve invece una documentazione dell’oggetto: una fotografia o il colore del legno non bastano.'],
    ],
  },
  'schiuma-mare-nome-minerale':{
    title:'Schiuma di mare: che cos’è la sepiolite',
    summary:'Il nome rimanda a un minerale, non alla schiuma marina. Il tesauro dei materiali chiarisce i sinonimi e aiuta a distinguere la denominazione dall’aspetto di un oggetto.',
    sections:[
      ['Più nomi per lo stesso materiale','Nel tesauro del Ministerio de Cultura spagnolo, Meerschaum e i nomi corrispondenti alla schiuma di mare rimandano alla sepiolite. Il repertorio collega termini usati in lingue diverse: è un punto di partenza per cercare il materiale senza lasciarsi guidare dall’immagine evocata dal nome.'],
      ['La classificazione è mineralogica','La sepiolite è classificata fra i fillosilicati. La parola “schiuma” non ne documenta un’origine dalla schiuma marina; una superficie chiara, a sua volta, non dimostra che un oggetto sia fatto di sepiolite. Denominazione e identificazione richiedono informazioni diverse.'],
      ['Che cosa puoi capire da una fotografia','Una foto mostra l’aspetto visibile. Il tesauro definisce il termine; la scheda di un oggetto registra l’attribuzione del materiale. Leggi queste informazioni insieme, mantenendo chiaro che cosa prova ciascuna: una somiglianza non identifica la composizione di un esemplare.'],
    ],
  },
  'nomi-botanici-denominazioni-tabacco':{
    title:'Nicotiana tabacum: che cosa dice il nome della pianta',
    summary:'Genere e specie identificano una pianta. Non descrivono da soli ingredienti, lavorazione o origine di una confezione.',
    sections:[
      ['Prima domanda: quale specie?','Quando una fonte riporta Nicotiana tabacum, sta indicando una specie botanica. È un’informazione diversa dalla composizione di una miscela o dalle caratteristiche di un prodotto. Prima di cercare una risposta, chiarisci quale di queste domande stai facendo.'],
      ['Famiglia, genere e specie nella scheda Kew','Kew colloca la specie nella famiglia Solanaceae e nel genere Nicotiana. Il nome completo la identifica all’interno di questa classificazione. La posizione botanica non assegna un valore commerciale e non descrive le proprietà di una confezione.'],
      ['Abbina la domanda alla fonte','Per verificare un nome scientifico serve un repertorio botanico. Per ingredienti, origine o lavorazione di un contenuto preciso occorre documentazione riferita a quel contenuto. Una fonte può essere corretta senza rispondere a tutte le domande: controlla sempre che cosa sta effettivamente descrivendo.'],
    ],
  },
};

clusters.push({id:'informazione-tabacco',label:'Le parole del sigaro',parent:'sigari',theme:'cedro'});
clusters.push({id:'materiali-e-storia',label:'Materiali e storia',parent:'pipe-e-tabacchi-da-pipa',theme:'radica'});
clusters.push({id:'lessico-e-fonti',label:'Nomi e storie',parent:'sigari',theme:'cedro'});
articles.push(...tobaccoArticles.map(article=>({...article,...informationArticleCopy[article.slug]})));
for(const article of tobaccoArticles)articleCategoryLinks[article.slug]=['sigari','pipe-e-tabacchi-da-pipa'];

for(const article of articles)if(articleRevision[article.slug])Object.assign(article,articleRevision[article.slug]);
articles.push(...neighborhoodArticles);
articleCategoryLinks["deposito-bagagli-santo-stefano-strada-maggiore-bologna"]=["deposito-bagagli","il-quartiere"];
articleCategoryLinks["regali-cartoleria-santo-stefano-aldrovandi-bologna"]=["idee-regalo","cartoleria","il-quartiere"];
articleCategoryLinks["commissioni-san-petronio-vecchio-strada-maggiore"]=["servizi","accessori-telefono","il-quartiere"];

articles.unshift(
 {
  slug:'lego-clementoni-modellini-scegliere-gioco-bologna',cluster:'giochi',
  title:'Costruire o collezionare? LEGO, meccanica e modellini da confrontare',
  summary:'Un set LEGO, un progetto Clementoni e un’auto Bburago non offrono la stessa attività. Dalle proposte di Angela, tre modi concreti per scegliere un gioco a Bologna.',
  guide:'scegliere-un-gioco',
  sections:[
   ['La domanda è che cosa gli piace fare','Davanti a una vetrina di giochi si può partire dal personaggio preferito, dal colore o dall’automobile che si riconosce. Per un regalo, però, è utile aggiungere una domanda: la persona vuole montare un progetto, inventare storie oppure guardare e collezionare un oggetto?\n\nNelle proposte di Angela, in Via Guerrazzi 10/F a Bologna, trovi costruzioni LEGO, meccanica Clementoni e modellini Bburago e RMZ City. Sono percorsi diversi. Il nome del produttore aiuta a ritrovarli, ma non basta a scegliere la scatola.'],
   ['LEGO: linea e codice del set','Creator 3 in 1, City, Technic e Animal Crossing compaiono nella famiglia delle costruzioni. Un pappagallo Creator, un piccolo veicolo City e un’ambientazione Animal Crossing danno punti di partenza diversi all’immaginazione.\n\nPer una richiesta precisa porta il nome completo e il codice del set. Sono i riferimenti con cui distinguere una scatola da un’altra. Poi confronta età indicata e contenuto: la presenza di una linea nel catalogo non equivale alla disponibilità di tutti i set del marchio.'],
   ['Clementoni: il montaggio è parte del tempo di gioco','Nella famiglia Meccanica Clementoni trovi Scienza & Gioco Roadster & Dragster. Elementi strutturali, ruote e componenti si assemblano seguendo le istruzioni: il progetto prende forma un pezzo alla volta.\n\nÈ una proposta da guardare pensando anche al tempo da dedicare al montaggio. Controlla età sulla scatola, modelli descritti, componenti inclusi ed eventuali elementi richiesti separatamente. Le indicazioni appartengono al set preciso, non a tutta la marca.'],
   ['Bburago e RMZ City: parti dal veicolo','Per un modellino può essere il veicolo a far scattare la curiosità: una sportiva, un’auto da corsa o una forma riconoscibile. Scala, materiali, dimensioni e parti mobili sono poi i dettagli da confrontare sulla confezione.\n\nIl marchio dell’automobile riprodotta e quello del modellino sono due nomi distinti. Una foto della vettura desiderata e un riferimento alla scala chiariscono la richiesta meglio della sola parola “macchinina”.'],
   ['Dal catalogo alla scelta dal vivo','Le schede delle famiglie permettono di preparare il confronto prima della visita. Per un bambino aggiungi sempre l’età e leggi le avvertenze della confezione; per un modello preciso verifica la disponibilità prima di una visita dedicata.\n\nSe cerchi invece una partita da portare in viaggio, c’è il percorso dei giochi magnetici. Per completare il regalo puoi esplorare biglietti, buste e fiocchi nella sezione compleanni.']
  ],
  sources:[{label:'Scheda: costruzioni LEGO',url:'/assortimento/costruzioni-lego/'},{label:'Scheda: meccanica Clementoni',url:'/assortimento/meccanica-clementoni/'},{label:'Scheda: modellini Bburago e RMZ City',url:'/assortimento/modellini-auto/'}]
 },
 {
  slug:'calamite-ricette-matite-tortellino-souvenir-bologna',cluster:'regali',
  title:'Una ricetta sul frigorifero, un tortellino sulla matita: piccoli ricordi di Bologna',
  summary:'Calamite con ricette in italiano e inglese, torri, portici e matite con tortellino. Tre percorsi fra i souvenir di Angela in Via Guerrazzi.',
  guide:'scegliere-un-regalo',
  sections:[
   ['Il ricordo può partire da un piatto','A volte il viaggio torna in mente davanti a un luogo; altre volte basta il nome di quello che hai mangiato. Nel percorso souvenir di Angela ci sono calamite con ricette bolognesi: il soggetto non è soltanto un monumento, ma anche un piatto.\n\nRagù, lasagne, tortellini, tagliatelle, cotoletta e friggione sono i sei riferimenti della famiglia. La fotografia del piatto e il testo della ricetta condividono il piccolo formato rettangolare. Per un soggetto preciso verifica le varianti presenti.'],
   ['Prima del colore, scegli la lingua','Le calamite ricetta comprendono versioni in italiano e in inglese. È un dettaglio concreto quando il ricordo è per qualcuno: chiediti in quale lingua leggerà più volentieri il testo.\n\nPiatto, lingua e formato sono tre caratteristiche distinte. Se cerchi una ricetta particolare in inglese, indica entrambe le cose prima di una visita dedicata: la presenza della famiglia non garantisce ogni combinazione in ogni momento.'],
   ['Le torri e i portici raccontano un’altra passeggiata','Le altre calamite della bottega mostrano torri, portici, tortellini, mortadella e colori rossoblù. Puoi scegliere un soggetto legato a una passeggiata, a un sapore oppure alla persona che riceverà il pensiero.\n\nGuardare dal vivo forma e dimensioni aiuta a distinguere gli oggetti. Le due famiglie, calamite cittadine e calamite ricetta, si possono esplorare separatamente senza confondere soggetto e formato.'],
   ['Un tortellino fra gli appunti','Le matite con tortellino portano il ricordo sulla scrivania. Gialle, arancioni, verdi e rosa, portano il nome di Bologna e un tortellino sagomato in cima. È un dettaglio decorativo, non un alimento.\n\nPer chi scrive o studia, la matita può essere il punto di partenza di un piccolo regalo. Nella cartoleria puoi confrontare anche penne decorate e quaderni; biglietto e busta hanno un percorso dedicato.'],
   ['Una tappa prima di ripartire','Guerrazzi di Angela è in Via Guerrazzi 10/F, fra Via Santo Stefano e Strada Maggiore. Le schede aiutano a scegliere quali soggetti cercare; il modello e la variante disponibili si verificano in negozio.\n\nSe stai visitando Bologna con le valigie, il deposito bagagli nello stesso indirizzo si prenota tramite Bounce sulla scheda “Palazzo Ercolani”. Prezzo, disponibilità e orario di ritiro seguono la prenotazione sulla piattaforma.']
  ],
  sources:[{label:'Scheda: calamite con ricette bolognesi',url:'/assortimento/calamite-ricette/'},{label:'Scheda: calamite di Bologna',url:'/assortimento/calamite/'},{label:'Scheda: matite con tortellino',url:'/assortimento/matite-tortellino/'}]
 },
 {
  slug:'pile-lampadine-ricambi-cosa-portare',cluster:'servizi',
  title:'Una pila o una lampadina da cambiare: la foto che serve davvero',
  summary:'Sigla, attacco e formato chiariscono una richiesta più della sola marca. Come preparare il confronto fra le pile e le lampadine di Angela a Bologna.',
  guide:'preparare-un-ricambio',
  sections:[
   ['Il problema è piccolo, il riferimento deve essere preciso','Una pila finita o una lampadina da sostituire possono sembrare richieste semplici. Per confrontare un ricambio, però, “una uguale” è utile soltanto se si vede che cosa deve essere uguale.\n\nSul pannello delle piccole necessità di Angela trovi pile Duracell, lampadine confezionate FSL e STD e piccoli accessori elettrici. Nel catalogo puoi confrontare le caratteristiche; per un modello preciso verifica disponibilità e compatibilità.'],
   ['Per le pile, rendi leggibile la sigla','Una fotografia utile mostra il codice della batteria da sostituire, la tensione e il formato. Sono informazioni da confrontare con il tipo richiesto dal dispositivo e con la confezione del ricambio.\n\nLa marca aiuta a riconoscere una famiglia, ma non identifica da sola la pila necessaria. Prima di una visita dedicata indica il riferimento completo e verifica il modello presente in negozio. Per uso e raccolta delle pile esauste segui le indicazioni del prodotto.'],
   ['Per le lampadine, l’attacco è una domanda a sé','La vecchia confezione o una foto leggibile dell’attacco danno un riferimento concreto. Attacco, alimentazione, potenza e tonalità della luce descrivono aspetti diversi: una somiglianza nella forma non dimostra che il modello sia quello richiesto.\n\nLa scheda lampadine LED raccoglie i dettagli da confrontare sulle confezioni FSL e STD. Le indicazioni del modello e della lampada restano il riferimento per la compatibilità.'],
   ['Una presa multipla è un’altra famiglia','Sul pannello ci sono anche prese multiple, cavi e piccoli accessori elettrici. Per questi articoli il tipo di spina e presa, la portata dichiarata e la lunghezza del cavo sono riferimenti da leggere separatamente.\n\nLa foto dell’elettrodomestico, da sola, può non mostrare il collegamento che ti serve. La scheda della famiglia spiega quali informazioni preparare, senza sostituire le istruzioni del prodotto.'],
   ['La commissione si prepara prima di partire','Ci trovi in Via Guerrazzi 10/F a Bologna. Porta il nome completo, la sigla o le misure e spiega a che cosa serve il ricambio. Per un articolo preciso verifica l’assortimento prima di una visita dedicata.\n\nSe il problema riguarda la ricarica del telefono, parti invece dalla famiglia dei cavi USB o dei power bank. Un ricambio elettrico, un accessorio per telefono e una ricarica di credito telefonico hanno percorsi diversi.']
  ],
  sources:[{label:'Scheda: pile e batterie Duracell',url:'/assortimento/pile-batterie/'},{label:'Scheda: lampadine LED',url:'/assortimento/lampadine-led/'},{label:'Scheda: prese e piccoli accessori elettrici',url:'/assortimento/prese-cavi-elettrici/'}]
 }
);
articleCategoryLinks['lego-clementoni-modellini-scegliere-gioco-bologna']=['giochi-e-giocattoli','idee-regalo','feste-e-compleanni'];
articleCategoryLinks['calamite-ricette-matite-tortellino-souvenir-bologna']=['souvenir-bologna','cartoleria','deposito-bagagli'];
articleCategoryLinks['pile-lampadine-ricambi-cosa-portare']=['piccole-necessita','accessori-telefono'];
