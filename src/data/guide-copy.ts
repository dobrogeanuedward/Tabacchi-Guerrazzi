type LocalizedGuideText = [string, string];
export interface GuideCopy {
  title: LocalizedGuideText;
  intro: LocalizedGuideText;
  sections: [LocalizedGuideText, LocalizedGuideText][];
}

// Editorial copy only: parent, sources and route identifiers remain with the source guides.
export const guideCopy: Record<string, GuideCopy> = {
  "ricariche-telefoniche": {
    "title": [
      "Ricariche telefoniche: numero, operatore e importo",
      "Mobile top-ups: number, network and amount"
    ],
    "intro": [
      "Per una ricarica servono tre dati: il numero completo, l’operatore e l’importo richiesto. Preparali prima di passare e controllali prima della conferma.",
      "Have the full phone number, network and requested amount ready. Check all three before the top-up is confirmed."
    ],
    "sections": [
      [
        [
          "Verifica operatore e importo",
          "Check the network and amount"
        ],
        [
          "Chiedi al negozio se la ricarica è disponibile per il tuo operatore e per l’importo che ti serve. Chiarisci anche modalità di pagamento ed eventuali costi prima dell’operazione: non dedurli da una ricarica precedente.",
          "Ask the shop whether your network and requested amount are supported. Confirm payment methods and any fees before proceeding; a previous top-up may have had different conditions."
        ]
      ],
      [
        [
          "Rileggi il numero, poi conserva la conferma",
          "Read the number back and keep the confirmation"
        ],
        [
          "Porta il numero per iscritto, soprattutto se ricarichi il telefono di un’altra persona. Rileggi ogni cifra prima della conferma. Se viene rilasciata una ricevuta, conservala finché non hai verificato l’esito.",
          "Bring the number in writing, especially when topping up someone else’s phone. Read back every digit before confirming. If a receipt is issued, keep it until you have checked that the top-up went through."
        ]
      ]
    ]
  },
  "bollettini-e-pagopa": {
    "title": [
      "Bollettini e pagoPA: cosa portare e cosa verificare",
      "Bills and pagoPA notices: what to bring and check"
    ],
    "intro": [
      "Prepara l’avviso completo e leggibile. Prima della visita, chiedi se quel documento può essere gestito e quali condizioni si applicano.",
      "Have the complete, legible notice ready. Before visiting, ask whether that document can be processed and which conditions apply."
    ],
    "sections": [
      [
        [
          "Porta tutte le pagine dell’avviso",
          "Bring the complete notice"
        ],
        [
          "Codici e identificativi devono essere leggibili. Tieni insieme tutte le pagine, evita fotografie sfocate e non ritagliare il documento. Un riferimento mancante può impedire di capire quale operazione stai chiedendo.",
          "Codes and identifiers need to be legible. Keep every page together, avoid blurred photographs and do not crop the document. Missing details can make it difficult to identify the transaction you need."
        ]
      ],
      [
        [
          "Chiarisci servizio, pagamento e commissioni",
          "Confirm the service, payment method and fees"
        ],
        [
          "Descrivi l’avviso al negozio prima di passare. Chiedi se può essere gestito, quali pagamenti sono ammessi e se ci sono commissioni. Controlla le condizioni al banco prima di confermare.",
          "Describe your notice to the shop before visiting. Ask whether it can be processed, which payment methods are accepted and whether fees apply. Check the conditions at the counter before confirming."
        ]
      ]
    ]
  },
  "scegliere-un-regalo": {
    "title": [
      "Come scegliere un regalo: occasione, interessi e budget",
      "How to choose a gift: occasion, interests and budget"
    ],
    "intro": [
      "Prima di cercare un oggetto, pensa a chi lo riceverà. L’occasione, un interesse preciso e un budget aiutano a restringere la scelta.",
      "Start with the person receiving the gift. An occasion, a specific interest and a budget make it easier to narrow down the choice."
    ],
    "sections": [
      [
        [
          "Parti da ciò che piace alla persona",
          "Start with what the person enjoys"
        ],
        [
          "Scrive, studia, gioca, viaggia? Una risposta concreta aiuta più di “qualcosa di carino”. Aggiungi l’occasione e quanto vuoi spendere: sono dettagli utili per confrontare proposte diverse.",
          "Do they enjoy writing, studying, playing or travelling? A specific answer is more useful than “something nice”. Add the occasion and your budget so you can compare suitable options."
        ]
      ],
      [
        [
          "Confronta formato, variante e disponibilità",
          "Compare the size, design and availability"
        ],
        [
          "Il catalogo aiuta a individuare una famiglia di articoli. Se hai in mente un prodotto preciso, chiedi nome, formato e variante prima di una visita dedicata. La presenza di una categoria non conferma ogni articolo.",
          "The catalogue helps you find an item family. If you have a specific product in mind, check its name, size and design before making a special trip. A category listing does not confirm every item within it."
        ]
      ],
      [
        [
          "Tre esempi per orientarti",
          "Three places to start"
        ],
        [
          "Per un ricordo di Bologna puoi guardare le calamite; per un compleanno, i biglietti illustrati; per chi scrive o studia, la cartoleria. Sono punti di partenza: confronta l’articolo effettivamente presente e il suo prezzo.",
          "For a Bologna keepsake, browse magnets; for a birthday, illustrated cards; for someone who writes or studies, stationery. Use these as starting points, then check the actual item and its price."
        ]
      ]
    ]
  },
  "scegliere-un-gioco": {
    "title": [
      "Come scegliere un gioco: età, avvertenze e uso",
      "How to choose a game or toy: age, warnings and use"
    ],
    "intro": [
      "L’età indicata sulla confezione è il primo controllo. Poi vengono gli interessi del bambino e il modo in cui userà il gioco.",
      "Check the age guidance on the packaging first. Then consider the child’s interests and how the game or toy will be used."
    ],
    "sections": [
      [
        [
          "Leggi età e avvertenze sulla confezione",
          "Read the age guidance and warnings"
        ],
        [
          "Controlla le indicazioni del produttore sul singolo articolo, soprattutto per un bambino piccolo. Il nome della categoria o l’aspetto della scatola non sostituiscono le avvertenze e le istruzioni.",
          "Check the manufacturer’s guidance on the individual item, especially for a young child. A category name or an attractive box does not replace the warnings and instructions."
        ]
      ],
      [
        [
          "Pensa a dove e con chi giocherà",
          "Think about where and with whom they will play"
        ],
        [
          "Un passatempo da viaggio, un gioco da fare insieme e uno da usare da soli rispondono a esigenze diverse. Parti da questa distinzione e confronta le opzioni presenti, senza perdere di vista età e indicazioni della confezione.",
          "A travel activity, a shared game and something for independent play serve different needs. Start with the setting and compare available options, keeping the age guidance and packaging instructions in mind."
        ]
      ]
    ]
  },
  "marchi-trattati": {
    "title": [
      "Marchi e catalogo: come orientarsi fra le schede",
      "Brands and the catalogue: how to read the listings"
    ],
    "intro": [
      "Il marchio, la famiglia di articoli e il prodotto preciso danno informazioni diverse. Ecco come usarle per formulare una richiesta chiara.",
      "A brand, an item family and a specific product provide different information. Use each one to make your request clear."
    ],
    "sections": [
      [
        [
          "Distingui una famiglia da un prodotto",
          "Distinguish an item family from a product"
        ],
        [
          "Una famiglia raccoglie articoli dello stesso tipo; una scheda prodotto descrive un articolo preciso, quando è stato pubblicato. Leggi nome e descrizione, poi verifica il modello o la variante che cerchi.",
          "An item family groups articles of the same type. A product listing describes a specific item, when one has been published. Read the name and description, then check the model or design you need."
        ]
      ],
      [
        [
          "Chiedi il modello, non soltanto la marca",
          "Ask for the model as well as the brand"
        ],
        [
          "Per una richiesta precisa, annota il nome completo e i dettagli che contano: formato, colore o connettore, secondo l’articolo. Controlla la disponibilità prima di partire. La presenza di un marchio non implica tutte le sue linee.",
          "For a specific request, note the full name and relevant details: size, colour or connector, depending on the item. Check availability before setting off. Carrying a brand does not mean carrying every line it makes."
        ]
      ],
      [
        [
          "Alcuni nomi presenti nell’assortimento",
          "Some brands in the range"
        ],
        [
          "Fra i riferimenti del negozio ci sono BIC, STABILO e Pritt per la cartoleria; Haribo, Fini, Chupa Chups, Dietorelle e Ferrero per i dolciumi; Teknee per gli accessori di ricarica. Per il singolo articolo e le sue varianti serve una verifica dedicata.",
          "The shop’s range includes BIC, STABILO and Pritt in stationery; Haribo, Fini, Chupa Chups, Dietorelle and Ferrero in sweets; and Teknee in charging accessories. Check the individual item and its variants separately."
        ]
      ]
    ]
  },
  "raggiungere-il-negozio": {
    "title": [
      "Come arrivare da Guerrazzi in Via Guerrazzi 10/F",
      "How to reach Guerrazzi at Via Guerrazzi 10/F"
    ],
    "intro": [
      "L’indirizzo è Via Guerrazzi 10/F, 40125 Bologna. Usalo nella mappa e verifica la tua richiesta e l’orario prima di partire.",
      "The address is Via Guerrazzi 10/F, 40125 Bologna. Enter it in your maps app and check your request and the opening hours before setting off."
    ],
    "sections": [
      [
        [
          "Inserisci l’indirizzo completo nella mappa",
          "Enter the full address in your maps app"
        ],
        [
          "Imposta Via Guerrazzi 10/F, 40125 Bologna come destinazione. Scegli come ti sposti e controlla il percorso aggiornato dalla tua posizione: tragitto e tempi possono cambiare.",
          "Set Via Guerrazzi 10/F, 40125 Bologna as your destination. Choose your transport mode and check the current route from your location; the route and travel time can change."
        ]
      ],
      [
        [
          "Verifica quello che ti serve prima di partire",
          "Check what you need before setting off"
        ],
        [
          "Se vieni per un articolo o un servizio preciso, chiedi conferma prima della visita. Controlla anche l’orario: una verifica evita di organizzare il percorso su informazioni incomplete.",
          "If you are coming for a specific item or service, check with the shop before visiting. Confirm the opening hours too, so you can plan with the information you need."
        ]
      ],
      [
        [
          "Per il deposito bagagli, controlla la scheda Bounce",
          "For luggage storage, check the Bounce listing"
        ],
        [
          "Guerrazzi offre deposito bagagli tramite Bounce. La scheda si chiama Palazzo Ercolani e riporta lo stesso indirizzo, Via Guerrazzi 10/F. Controlla prenotazione e orari di deposito e ritiro sulla piattaforma prima di impostare il percorso.",
          "Guerrazzi offers luggage storage through Bounce. The listing is called Palazzo Ercolani and gives the same address, Via Guerrazzi 10/F. Check your booking and the drop-off and collection hours on the platform before planning your route."
        ]
      ]
    ]
  },
  "sigari-termini-informazioni": {
    "title": [
      "Sigari, sigaretti e tabacco da pipa: cosa significano i nomi",
      "Cigars, cigarillos and pipe tobacco: what the names mean"
    ],
    "intro": [
      "Sono denominazioni presenti nella normativa italiana. Questa guida spiega come distinguerle e quali informazioni cercare sulla confezione.",
      "These terms appear in Italian legislation. This guide explains the distinctions and which information to look for on a pack."
    ],
    "sections": [
      [
        [
          "Le definizioni nell’articolo 2",
          "The definitions in Article 2"
        ],
        [
          "Il D.Lgs. 6/2016 distingue sigari, sigaretti e tabacco da pipa. Definisce il sigaretto come un tipo di sigaro piccolo e il tabacco da pipa come destinato esclusivamente a una pipa. Il riferimento è l’articolo 2, collegato fra le fonti.",
          "Legislative Decree 6/2016 distinguishes cigars, cigarillos and pipe tobacco. It defines a cigarillo as a type of small cigar and pipe tobacco as intended exclusively for a pipe. The reference is Article 2, linked in the sources."
        ]
      ],
      [
        [
          "Il nome della categoria non descrive tutto",
          "A category name does not describe everything"
        ],
        [
          "La denominazione serve a riconoscere una categoria. Per composizione e informazioni del singolo articolo, leggi la confezione completa: ciò che trovi su una scatola non si trasferisce automaticamente a un’altra.",
          "The term identifies a category. For an individual item’s composition and information, read its complete packaging; details on one box do not automatically apply to another."
        ]
      ],
      [
        [
          "Dove trovare i riferimenti",
          "Where to find the references"
        ],
        [
          "Le fonti in fondo alla guida permettono di risalire al testo normativo. Per la struttura del sigaro esiste una scheda distinta sui termini filler, binder e wrapper. Questa area è informativa e non raccoglie ordini o richieste di spedizione di tabacco.",
          "The sources below link to the legislation. A separate guide explains the structural terms filler, binder and wrapper. This information area does not accept tobacco orders or shipping requests."
        ]
      ]
    ]
  },
  "tabacco-minori-documenti": {
    "title": [
      "Tabacco e minori: limite di età e controllo del documento",
      "Tobacco and minors: the age limit and ID checks"
    ],
    "intro": [
      "La vendita di tabacco ai minori di 18 anni è vietata. La conferma 18+ sul sito serve alla consultazione e non verifica l’identità.",
      "Selling tobacco to people under 18 is prohibited. The website’s 18+ confirmation is for browsing and does not verify identity."
    ],
    "sections": [
      [
        [
          "Il limite è 18 anni",
          "The age limit is 18"
        ],
        [
          "L’articolo 24 del D.Lgs. 6/2016 riguarda anche la tutela dei minori. Per la vendita di tabacco prevede il controllo del documento d’identità, salvo quando la maggiore età è manifesta. Il testo del provvedimento è collegato fra le fonti.",
          "Article 24 of Legislative Decree 6/2016 includes measures to protect minors. It requires an identity document to be checked for tobacco sales unless adulthood is apparent. The enactment is linked in the sources."
        ]
      ],
      [
        [
          "Il pulsante 18+ è un’autodichiarazione",
          "The 18+ button is a self-declaration"
        ],
        [
          "Sul sito confermi di essere maggiorenne per consultare l’area informativa. Il pulsante non identifica chi lo preme e non sostituisce i controlli previsti al banco. Non ti viene chiesto di caricare un documento o indicare la data di nascita.",
          "On this website, you confirm that you are an adult to view the information area. The button does not identify you or replace the checks required in store. You are not asked to upload an ID or provide your birth date."
        ]
      ],
      [
        [
          "Le altre sezioni restano consultabili",
          "Other sections remain available"
        ],
        [
          "Puoi uscire dall’area informativa e continuare sulle pagine di cartoleria, souvenir, giochi, regali e deposito bagagli. Questi percorsi sono separati dalla conferma richiesta per l’area tabacco.",
          "You can leave this information area and continue to stationery, souvenirs, games, gifts and luggage storage. These sections are separate from the confirmation required for the tobacco area."
        ]
      ]
    ]
  },
  "tabacco-confezioni-avvertenze": {
    "title": [
      "Confezioni del tabacco: nomi, avvertenze e fonti",
      "Tobacco packaging: names, warnings and sources"
    ],
    "intro": [
      "Leggi le informazioni sulla confezione precisa che hai davanti. Un nome di categoria, una foto o un testo online non sostituiscono l’etichetta.",
      "Read the information on the specific pack in front of you. A category name, a photograph or online text does not replace the label."
    ],
    "sections": [
      [
        [
          "Leggi le avvertenze dell’articolo",
          "Read the item’s warnings"
        ],
        [
          "Il D.Lgs. 6/2016 disciplina le avvertenze sulla salute per i prodotti del tabacco. Consulta quelle riportate sulla confezione completa, insieme alla denominazione. Una guida generale non contiene le informazioni di ogni articolo.",
          "Legislative Decree 6/2016 regulates health warnings on tobacco products. Read the warnings on the complete pack alongside its name. A general guide does not contain the information for every item."
        ]
      ],
      [
        [
          "Non dedurre benefici da nomi o grafica",
          "Do not infer benefits from names or design"
        ],
        [
          "Un termine, un colore o la presentazione di un articolo non dimostrano un vantaggio per la salute. Per dubbi sulla salute, rivolgiti a un professionista sanitario.",
          "A term, colour or presentation does not demonstrate a health benefit. Discuss health concerns with a healthcare professional."
        ]
      ],
      [
        [
          "Controlla quale testo stai consultando",
          "Check which version of a text you are reading"
        ],
        [
          "La Gazzetta Ufficiale collegata documenta il provvedimento pubblicato nel 2016. Per verificare modifiche successive serve il testo vigente: la data e il tipo di fonte aiutano a capire che cosa stai leggendo.",
          "The linked Official Gazette records the enactment published in 2016. To check later amendments, consult the current consolidated text. The date and type of source help you understand which version you are reading."
        ]
      ]
    ]
  },
  "radica-erica-arborea": {
    "title": [
      "Radica per pipe: cos’è e da quale parte della pianta deriva",
      "Briar for pipes: what it is and where it comes from in the plant"
    ],
    "intro": [
      "La radica di erica è legata al lignotubero: un ingrossamento legnoso fra radice e fusto. Le fonti botaniche aiutano a capire questa struttura.",
      "Erica briar is associated with the lignotuber, a woody swelling at the root–shoot transition. Botanical sources explain this structure."
    ],
    "sections": [
      [
        [
          "La pianta è Erica arborea",
          "The plant is Erica arborea"
        ],
        [
          "Erica arborea appartiene alla famiglia delle Ericaceae. Kew la descrive come arbusto o albero e indica un areale nativo che comprende il Mediterraneo. È il primo riferimento per verificare il nome della specie.",
          "Erica arborea belongs to the Ericaceae family. Kew describes it as a shrub or tree and gives a native range that includes the Mediterranean. Its record is the starting point for checking the species name."
        ]
      ],
      [
        [
          "Il lignotubero si trova fra radice e fusto",
          "The lignotuber is at the root–shoot transition"
        ],
        [
          "Il lignotubero è un ingrossamento legnoso nella zona di passaggio fra radice e fusto. Lo studio di Paula e colleghi lo documenta in Erica arborea e riporta l’uso storico dei lignotuberi di erica per pipe e utensili. È una struttura precisa, non un altro nome per qualsiasi radice.",
          "A lignotuber is a woody swelling at the root–shoot transition. Paula and colleagues document it in Erica arborea and report the historical use of Erica lignotubers for pipes and tools. It is a specific structure, not another name for any root."
        ]
      ],
      [
        [
          "La specie non identifica il singolo oggetto",
          "The species does not identify an individual object"
        ],
        [
          "Per sapere quale legno compone un oggetto o dove sia stato raccolto, occorre documentazione riferita a quell’esemplare. La scheda botanica spiega la pianta; una fotografia della pipa, da sola, non ne certifica il materiale.",
          "Identifying an object’s wood or harvesting location requires documentation about that specimen. A botanical record explains the plant; a photograph of a pipe alone does not certify its material."
        ]
      ]
    ]
  },
  "schiuma-di-mare-sepiolite": {
    "title": [
      "Schiuma di mare: cos’è la sepiolite",
      "Meerschaum: what sepiolite is"
    ],
    "intro": [
      "“Schiuma di mare” è un nome associato alla sepiolite, un minerale. Il tesauro dei materiali distingue il termine dall’aspetto di un singolo oggetto.",
      "Meerschaum is a name associated with sepiolite, a mineral. A materials thesaurus distinguishes the term from an individual object’s appearance."
    ],
    "sections": [
      [
        [
          "Schiuma di mare e sepiolite: il collegamento",
          "The link between meerschaum and sepiolite"
        ],
        [
          "Il Tesauro del Ministerio de Cultura spagnolo collega Meerschaum e schiuma di mare alla sepiolite. La classifica fra i fillosilicati: il nome rimanda a un minerale, non basta a descrivere un oggetto.",
          "The Spanish Ministry of Culture’s thesaurus connects meerschaum and seafoam with sepiolite. It classifies the mineral as a phyllosilicate. The term names a mineral; it does not fully describe an object."
        ]
      ],
      [
        [
          "Colore e porosità nella descrizione del minerale",
          "Colour and porosity in the mineral description"
        ],
        [
          "La fonte descrive masse bianche o giallastre, opache e talvolta molto porose. Sono caratteristiche riportate per il materiale: una superficie simile può essere un motivo per approfondire, non una prova della composizione.",
          "The source describes opaque white or yellowish masses, sometimes highly porous. These are characteristics of the material. A similar-looking surface may prompt further investigation, but it does not establish composition."
        ]
      ],
      [
        [
          "Una foto non autentica il materiale",
          "A photograph does not authenticate the material"
        ],
        [
          "Per attribuire una composizione serve documentazione sull’esemplare. Colore, illuminazione e fotografia mostrano l’aspetto; non sostituiscono le informazioni necessarie a identificare il materiale.",
          "Attributing a composition requires documentation about the specimen. Colour, lighting and photography show its appearance; they do not replace the evidence needed to identify the material."
        ]
      ]
    ]
  },
  "pipe-materiali-storia": {
    "title": [
      "Pipe storiche: materiali e documenti dei musei",
      "Historic pipes: materials documented by museums"
    ],
    "intro": [
      "Argilla, radica, vulcanite, argento e schiuma di mare compaiono in due schede museali. Leggerle mostra come si descrivono i materiali di un oggetto preciso.",
      "Clay, briar, vulcanite, silver and meerschaum appear in two museum records. They show how the materials in a specific object are documented."
    ],
    "sections": [
      [
        [
          "British Museum: un fornello in argilla cotta",
          "British Museum: a fired-clay bowl"
        ],
        [
          "La scheda EA80213 descrive un fornello in argilla cotta proveniente da Qasr Ibrim. Il British Museum lo attribuisce al periodo ottomano e lo data al 1550–1811. Luogo, materiale e datazione sono riferiti a quel reperto.",
          "Record EA80213 describes a fired-clay bowl from Qasr Ibrim. The British Museum assigns it to the Ottoman period and dates it to 1550–1811. The location, material and date refer to that specific object."
        ]
      ],
      [
        [
          "Smithsonian: quattro materiali nello stesso esemplare",
          "Smithsonian: four materials in one specimen"
        ],
        [
          "Una pipa datata 1880–1910 associa radica al corpo, vulcanite al bocchino, argento alla ghiera e schiuma di mare al bordo del fornello. La scheda distingue i materiali secondo la parte dell’oggetto che compongono.",
          "A pipe dated 1880–1910 combines a briar body, vulcanite mouthpiece, silver ferrule and meerschaum bowl rim. The record identifies the material used in each part of the object."
        ]
      ],
      [
        [
          "Una somiglianza non assegna una data",
          "A resemblance does not establish a date"
        ],
        [
          "Le due schede documentano due oggetti, non tutte le pipe. Non bastano per attribuire a un altro esemplare la stessa composizione o datazione. Per farlo servono riscontri specifici.",
          "The two records document two objects, not all pipes. They cannot establish the same composition or date for another specimen. That requires evidence specific to the object."
        ]
      ]
    ]
  },
  "sigaro-struttura-termini": {
    "title": [
      "Le parti del sigaro: filler, binder e wrapper",
      "Parts of a cigar: filler, binder and wrapper"
    ],
    "intro": [
      "Filler indica la parte interna, binder l’elemento legante e wrapper il rivestimento esterno. Ecco come leggere questi termini di struttura.",
      "Filler is the inner material, binder the binding component and wrapper the outer covering. Here is what these structural terms describe."
    ],
    "sections": [
      [
        [
          "Filler: la parte interna",
          "Filler: the inner material"
        ],
        [
          "Il capitolo 3 della Monograph 9 del National Cancer Institute usa filler per la parte interna del sigaro. La parola descrive dove si trova il componente, senza specificare da sola provenienza o composizione.",
          "Chapter 3 of National Cancer Institute Monograph 9 uses filler for the cigar’s inner material. The word describes the component’s position; it does not by itself specify origin or composition."
        ]
      ],
      [
        [
          "Binder e wrapper: legante e rivestimento",
          "Binder and wrapper: binding and covering"
        ],
        [
          "Binder indica l’elemento che lega il riempimento; wrapper il rivestimento esterno. La monografia li distingue dal filler. I tre termini permettono di descrivere le parti senza confonderle.",
          "Binder is the component binding the filler; wrapper is the outer covering. The monograph distinguishes both from the filler. The three terms describe separate parts of the structure."
        ]
      ],
      [
        [
          "La definizione FDA riguarda il sigaro",
          "The FDA definition describes the cigar"
        ],
        [
          "La FDA definisce il sigaro come un rotolo di tabacco avvolto in foglia di tabacco o materiale contenente tabacco. I nomi delle parti spiegano la struttura, ma non identificano specie, provenienza o composizione di un singolo esemplare.",
          "The FDA defines a cigar as a roll of tobacco wrapped in leaf tobacco or a substance containing tobacco. Component names explain the structure but do not identify the species, origin or composition of an individual specimen."
        ]
      ]
    ]
  },
  "nicotiana-tabacum-botanica": {
    "title": [
      "Nicotiana tabacum: che cosa indica il nome botanico",
      "Nicotiana tabacum: what the botanical name tells you"
    ],
    "intro": [
      "Il nome identifica una specie nella classificazione botanica. La scheda Kew permette di leggere famiglia, genere e specie senza confonderli con una miscela o una confezione.",
      "The name identifies a species in botanical classification. Kew’s record explains its family, genus and species, which are distinct from a blend or a pack."
    ],
    "sections": [
      [
        [
          "Solanaceae è la famiglia, Nicotiana il genere",
          "Solanaceae is the family, Nicotiana the genus"
        ],
        [
          "Kew colloca Nicotiana tabacum nella famiglia Solanaceae e nel genere Nicotiana. Sono livelli della classificazione botanica: aiutano a collocare la specie fra altre piante.",
          "Kew places Nicotiana tabacum in the Solanaceae family and the genus Nicotiana. These are levels of botanical classification that place the species in relation to other plants."
        ]
      ],
      [
        [
          "Nicotiana tabacum L. è il nome della specie",
          "Nicotiana tabacum L. is the species name"
        ],
        [
          "Il repertorio Kew indica Nicotiana tabacum L. come specie accettata. Nella stessa scheda raccoglie descrizioni botaniche da flore diverse: il nome della specie e le sue descrizioni sono informazioni da leggere separatamente.",
          "Kew lists Nicotiana tabacum L. as an accepted species. The same record collects botanical descriptions from different floras. The species name and those descriptions are separate kinds of information."
        ]
      ],
      [
        [
          "Il nome botanico non è un elenco di ingredienti",
          "A botanical name is not an ingredient list"
        ],
        [
          "La specie non descrive da sola la miscela, la lavorazione o l’origine di una confezione. Per rispondere a queste domande servono informazioni sul contenuto preciso, non soltanto un nome botanico.",
          "A species name alone does not describe a blend, its processing or a pack’s origin. Those questions require information about the specific contents, not just a botanical name."
        ]
      ]
    ]
  },
  "tipologie-di-sigaro": {
    "title": [
      "Tipi di sigaro: forme, struttura e ripieno",
      "Types of cigar: shapes, structure and filler"
    ],
    "intro": [
      "Cilindrico o affusolato, con foglie intere o in frammenti: le differenze riguardano parti precise del sigaro. Ecco i termini per riconoscerle, senza confondere forma, costruzione e origine.",
      "Straight or tapered, with full-length leaves or shorter pieces: these differences concern specific parts of a cigar. Here are the terms that distinguish shape, construction and origin."
    ],
    "sections": [
      [
        [
          "Parejo o figurado: cambia il profilo",
          "Parejo or figurado: a different profile"
        ],
        [
          "Parejo indica un sigaro dai lati diritti e paralleli. Figurado indica un profilo modellato, con un’estremità appuntita; nel doppio figurado le estremità appuntite sono due. Sono termini di forma: lunghezza e diametro restano misure separate. Due sigari cilindrici possono quindi avere dimensioni differenti senza appartenere a due famiglie di forma diverse.",
          "Parejo describes a cigar with straight, parallel sides. Figurado describes a shaped profile with one pointed end; a double figurado has two pointed ends. These terms concern shape. Length and diameter are separate measurements, so two cylindrical cigars can have different dimensions while sharing the same basic profile."
        ]
      ],
      [
        [
          "Capa, capote e tripa: tre parti diverse",
          "Capa, capote and tripa: three different parts"
        ],
        [
          "Nel modello costruttivo descritto da Habanos, la capa è la fascia esterna visibile; il capote è la sottofascia che avvolge e tiene insieme il ripieno; la tripa è il ripieno stesso. In inglese trovi wrapper, binder e filler. Questo schema non vale per ogni costruzione: le note tecniche delle dogane svizzere descrivono il tipo toscano senza sottofascia, con estremità coniche.",
          "In the construction described by Habanos, capa is the visible outer wrapper; capote is the binder holding the filler together; tripa is the filler itself. These three layers are not universal. The Swiss customs technical notes describe the Tuscan type as having no binder and conical ends."
        ]
      ],
      [
        [
          "Long filler e short filler: cambia il ripieno",
          "Long filler and short filler: a different filling"
        ],
        [
          "Long filler, o tripa larga, indica un ripieno formato da foglie a tutta lunghezza. Short filler, o tripa corta, impiega sezioni più corte di foglia. La distinzione riguarda il materiale interno, non la lunghezza esterna del sigaro. Non coincide nemmeno con la distinzione fra lavorazione manuale e meccanizzata: Habanos documenta entrambe le tipologie di ripieno in costruzioni interamente manuali.",
          "Long filler, or tripa larga, uses full-length leaves inside the cigar. Short filler, or tripa corta, uses shorter sections of leaf. The distinction concerns the filling, not the cigar’s overall length. It is also separate from hand or machine manufacture: Habanos documents both filler types in cigars made entirely by hand."
        ]
      ],
      [
        [
          "Origine e lavorazione delle foglie sono dati distinti",
          "Origin and leaf processing are separate facts"
        ],
        [
          "Un nome geografico non descrive una forma. Nel sistema Habanos, l’origine cubana riguarda sia le foglie sia la manifattura. La cura del tabacco è un altro dato: le note doganali distinguono essiccamento al sole, ad aria naturale, ad aria calda e a fuoco, indicati come sun-curing, air-curing, flue-curing e fire-curing. Origine, costruzione e trattamento delle foglie descrivono aspetti diversi; non sono una graduatoria di qualità.",
          "A geographical name does not describe a shape. In the Habanos system, Cuban origin concerns both the leaves and manufacture. Tobacco curing is another fact: the customs notes distinguish sun-curing, air-curing, flue-curing and fire-curing. These refer respectively to drying in the sun, natural air, heated air and with fire. Origin, construction and leaf treatment describe different aspects; they are not a quality ranking."
        ]
      ]
    ]
  },
  "confrontare-schede-sigari": {
    "title": [
      "Come confrontare due schede di sigari: nomi, formati e confezioni",
      "How to compare two cigar records: names, formats and packaging"
    ],
    "intro": [
      "Un confronto utile mette affiancati gli stessi dati e mostra quelli mancanti. Il metodo vale anche fra due marchi, senza classifiche o giudizi di preferenza.",
      "A useful comparison puts the same fields side by side and makes missing information clear. The method also works across two brands, without rankings or preferences."
    ],
    "sections": [
      [
        [
          "Parti dal nome completo e dalla fonte",
          "Start with the full name and the source"
        ],
        [
          "Per ciascuna scheda annota marchio, linea e denominazione dell’articolo così come compaiono nella fonte. Conserva il collegamento o il riferimento del documento. Due nomi abbreviati possono sembrare confrontabili pur riferendosi a informazioni diverse.",
          "For each record, note the brand, line and item name exactly as they appear in the source. Keep the link or document reference. Two shortened names can look comparable while referring to different information."
        ]
      ],
      [
        [
          "Confronta lo stesso campo, nella stessa unità",
          "Compare the same field in the same unit"
        ],
        [
          "Tieni distinti formato dell’articolo e contenuto della confezione. Se trovi dimensioni, riporta l’unità dichiarata; se trovi una quantità, chiarisci a quale confezione si riferisce. Un dato assente non vale zero e non equivale a quello di un articolo simile.",
          "Keep the item’s format separate from the pack contents. If dimensions are given, retain the stated unit; if a quantity is given, identify which pack it describes. Missing information is not zero and is not the same as a similar item’s value."
        ]
      ],
      [
        [
          "Un esempio anonimo: due dati, due limiti",
          "An anonymous example: two fields, two limits"
        ],
        [
          "Immagina due schede di marchi diversi: A riporta il formato ma non il contenuto della confezione; B riporta il contenuto della confezione ma non il formato. Puoi registrare ciò che ciascuna documenta. Non puoi concludere che i formati o le confezioni siano uguali, diversi o preferibili.",
          "Imagine two records from different brands: A states the format but not the pack contents; B states the pack contents but not the format. You can record what each documents. You cannot conclude that their formats or packs are the same, different or preferable."
        ]
      ],
      [
        [
          "Concludi con i dati verificati e quelli aperti",
          "Finish with verified facts and open questions"
        ],
        [
          "Riassumi che cosa coincide, che cosa differisce e che cosa resta non documentato, solo per i campi effettivamente confrontabili. La conclusione può essere “informazioni insufficienti”. Questo confronto descrive le schede: non misura sapore, qualità o quale marchio sia migliore.",
          "Summarise what matches, what differs and what remains undocumented, using only fields that can actually be compared. “Insufficient information” can be the conclusion. This comparison describes the records; it does not assess taste, quality or which brand is better."
        ]
      ]
    ]
  }
};
