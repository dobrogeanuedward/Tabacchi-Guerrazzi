import {octoberCollection} from './collection-october';
type Pair=[string,string];
export type FamilyDetail={
 checks:[string[],string[]];question:Pair;answer:Pair;
 sources?:{label:Pair;url:string}[];
 story?:{title:Pair;paragraphs:Pair[]}[];
 choice?:{title:Pair;options:{label:Pair;text:Pair}[]};
 relatedFamilies?:string[];
 readMore?:{slug:string;title:Pair};
};
export const familyDetails:Record<string,FamilyDetail>= {
  "profumi-raptus": {
    "checks": [
      [
        "Nome completo della fragranza",
        "Formato indicato",
        "Confezione e istruzioni"
      ],
      [
        "Full fragrance name",
        "Labelled size",
        "Packaging and instructions"
      ]
    ],
    "question": [
      "Quali linee Raptus trovo da Angela?",
      "Which Raptus lines can I find at Angela’s?"
    ],
    "answer": [
      "Da Angela trovi la gamma Raptus per persona nelle linee 20–100 ml e 50 ml. Porta il nome della fragranza o una foto del flacone: guardiamo insieme il formato che cerchi.",
      "At Angela’s you will find the Raptus personal fragrance range in the 20–100 ml and 50 ml lines. Bring the fragrance name or a photo of the bottle: we will look at the size you need together."
    ],
    "sources": [
      {
        "label": [
          "Raptus Parfum · catalogo ufficiale del marchio",
          "Raptus Parfum · official brand catalogue"
        ],
        "url": "https://raptusparfum.it/"
      }
    ]
  },
  "quaderni": {
    "checks": [
      [
        "Formato del foglio",
        "Rigatura o quadretti",
        "Spirale o rilegatura"
      ],
      [
        "Sheet size",
        "Ruling or squares",
        "Spiral or bound"
      ]
    ],
    "question": [
      "Come trovo il quaderno con la rigatura giusta?",
      "How do I find a notebook with the right ruling?"
    ],
    "answer": [
      "Porta una foto del quaderno o di una pagina. Formato, rigatura e rilegatura ci aiutano a ritrovare quello che usi.",
      "Bring a photo of the notebook or a page. Size, ruling and binding help us find the one you use."
    ]
  },
  "penne": {
    "checks": [
      [
        "Colore dell’inchiostro",
        "Tipo e misura della punta",
        "Singola penna o confezione"
      ],
      [
        "Ink colour",
        "Tip type and size",
        "Single pen or pack"
      ]
    ],
    "question": [
      "Dove leggo il colore dell’inchiostro?",
      "Where can I find the ink colour?"
    ],
    "answer": [
      "Sulla penna o sulla confezione. Guardiamo anche il tratto e il tipo di punta, soprattutto se cerchi quella che usi già.",
      "On the pen or its pack. Look at the line and tip too, especially if you want the one you already use."
    ]
  },
  "evidenziatori": {
    "checks": [
      [
        "Colore richiesto",
        "Tipo di punta",
        "Confezione singola o assortita"
      ],
      [
        "Required colour",
        "Tip shape",
        "Single or mixed pack"
      ]
    ],
    "question": [
      "Posso cercare un colore preciso?",
      "Can I look for a specific colour?"
    ],
    "answer": [
      "Certo: dicci quale colore ti serve. Se usi già un evidenziatore, una foto ci aiuta a ritrovare la tonalità.",
      "Of course: tell us the colour you need. A photo of an existing highlighter helps us find the shade."
    ]
  },
  "colle": {
    "checks": [
      [
        "Materiali da incollare",
        "Uso indicato sull’etichetta",
        "Formato e istruzioni"
      ],
      [
        "Materials to bond",
        "Labelled intended use",
        "Size and instructions"
      ]
    ],
    "question": [
      "Come scelgo la colla?",
      "How do I choose glue?"
    ],
    "answer": [
      "Partiamo dal materiale: carta, cartoncino o un altro supporto. Le superfici compatibili e le istruzioni sono sulla confezione.",
      "Start with the material: paper, card or another surface. Compatible surfaces and directions are on the pack."
    ]
  },
  "cartelline": {
    "checks": [
      [
        "Misura dei documenti",
        "Spessore del contenuto",
        "Chiusura e trasporto"
      ],
      [
        "Document size",
        "Thickness of contents",
        "Closure and carrying"
      ]
    ],
    "question": [
      "Quanti fogli deve contenere la cartellina?",
      "How many sheets should the folder hold?"
    ],
    "answer": [
      "Dillo quando scegli: poche pagine o una raccolta più grande richiedono capienze diverse. Guarda anche la chiusura, se la porterai in borsa.",
      "Tell us when choosing: a few pages or a larger collection need different capacities. Look at the fastening too if it will go in a bag."
    ]
  },
  "etichette": {
    "checks": [
      [
        "Dimensioni dell’etichetta",
        "Scrittura a mano o stampa",
        "Superficie di applicazione"
      ],
      [
        "Label dimensions",
        "Handwriting or printing",
        "Application surface"
      ]
    ],
    "question": [
      "Cerco etichette per la stampante: cosa porto?",
      "What should I bring when looking for printer labels?"
    ],
    "answer": [
      "Il tipo di stampante e le misure che ti servono. Sulla confezione trovi l’impiego previsto e la compatibilità.",
      "The printer type and dimensions you need. The pack shows its intended use and compatibility."
    ]
  },
  "calamite": {
    "checks": [
      [
        "Soggetto di Bologna",
        "Dimensioni dell’oggetto",
        "Materiale e ingombro"
      ],
      [
        "Bologna design",
        "Object dimensions",
        "Material and bulk"
      ]
    ],
    "question": [
      "Quali soggetti posso scegliere?",
      "Which designs can I choose?"
    ],
    "answer": [
      "Torri, monumenti e scritte di Bologna. Guarda i soggetti in vetrina e scegli quello che ti riporta alla tua passeggiata.",
      "Bologna’s towers, landmarks and lettering. Browse the designs and choose one that recalls your walk."
    ]
  },
  "auguri": {
    "checks": [
      [
        "Occasione e destinatario",
        "Testo interno o spazio bianco",
        "Busta e dimensioni"
      ],
      [
        "Occasion and recipient",
        "Printed message or blank inside",
        "Envelope and dimensions"
      ]
    ],
    "question": [
      "Il biglietto ha spazio per il mio messaggio?",
      "Does the card have room for my message?"
    ],
    "answer": [
      "Aprilo e guarda l’interno: alcuni hanno già un testo. Poi scegli lo spazio per le tue parole e controlla la busta.",
      "Open it and look inside: some already have a printed message. Choose room for your words and check the envelope."
    ]
  },
  "candeline": {
    "checks": [
      [
        "Cifra o combinazione",
        "Misura e sostegno",
        "Istruzioni e avvertenze"
      ],
      [
        "Number or combination",
        "Dimensions and support",
        "Instructions and warnings"
      ]
    ],
    "question": [
      "Per un’età a due cifre cosa chiedo?",
      "What do I ask for when the age has two digits?"
    ],
    "answer": [
      "Indica entrambe le cifre, così cerchiamo la coppia giusta. Guarda le dimensioni e segui le istruzioni della confezione.",
      "Give both digits so we can look for the right pair. Check the size and follow the pack directions."
    ]
  },
  "palloncini": {
    "checks": [
      [
        "Colore e confezione",
        "Quantità indicata sulla busta",
        "Avvertenze e uso previsto"
      ],
      [
        "Colour and pack",
        "Quantity stated on the bag",
        "Warnings and intended use"
      ]
    ],
    "question": [
      "Come scelgo i palloncini per il compleanno?",
      "How do I choose birthday balloons?"
    ],
    "answer": [
      "Parti dai colori e da quanti te ne servono. Qui trovi palloncini confezionati: quantità e istruzioni sono sul pacchetto.",
      "Start with the colours and how many you need. You will find packaged balloons here: quantities and directions are on the pack."
    ]
  },
  "buste": {
    "checks": [
      [
        "Misura del regalo",
        "Profondità e manici",
        "Colore e accessori separati"
      ],
      [
        "Gift dimensions",
        "Depth and handles",
        "Colour and separate accessories"
      ]
    ],
    "question": [
      "Come scelgo la misura della busta?",
      "How do I choose the gift bag size?"
    ],
    "answer": [
      "Misura larghezza, altezza e profondità del regalo. Lascia un po’ di spazio per inserirlo e chiudere la busta senza schiacciarlo.",
      "Measure the gift’s width, height and depth. Leave a little room to insert it and close the bag without squeezing it."
    ]
  },
  "cavi": {
    "checks": [
      [
        "Porta del dispositivo",
        "Porta dell’alimentatore",
        "Funzione richiesta"
      ],
      [
        "Device port",
        "Charger port",
        "Required function"
      ]
    ],
    "question": [
      "Basta il modello del telefono?",
      "Is the phone model enough?"
    ],
    "answer": [
      "Una foto delle porte del telefono e dell’alimentatore aiuta ancora di più. Dicci se vuoi ricaricare, trasferire dati o entrambe le cose.",
      "A photo of the phone and charger ports helps even more. Tell us whether you want charging, data transfer or both."
    ]
  },
  "power-bank": {
    "checks": [
      [
        "Porte in ingresso e uscita",
        "Capacità dichiarata",
        "Cavo incluso e istruzioni"
      ],
      [
        "Input and output ports",
        "Stated capacity",
        "Included cable and instructions"
      ]
    ],
    "question": [
      "Come scelgo il power bank per il mio telefono?",
      "How do I choose a power bank for my phone?"
    ],
    "answer": [
      "Partiamo dal dispositivo e da come lo userai. Guardiamo capacità, porte, dimensioni e cavo incluso sul modello che scegli.",
      "Start with your device and how you will use it. Look at capacity, ports, size and the included cable on your chosen model."
    ]
  },
  "nastri": {
    "checks": [
      [
        "Larghezza e lunghezza",
        "Superficie di applicazione",
        "Uso riportato sulla confezione"
      ],
      [
        "Width and length",
        "Application surface",
        "Use stated on the pack"
      ]
    ],
    "question": [
      "Quale nastro mi serve?",
      "Which tape do I need?"
    ],
    "answer": [
      "Raccontaci su quale superficie lo userai e per cosa. Materiale, larghezza e tipo di adesivo aiutano a scegliere.",
      "Tell us the surface and purpose. Material, width and adhesive type help you choose."
    ]
  },
  "adesivi": {
    "checks": [
      [
        "Materiali delle due parti",
        "Indicazioni del prodotto",
        "Avvertenze e tempi dichiarati"
      ],
      [
        "Materials of both parts",
        "Product instructions",
        "Warnings and stated times"
      ]
    ],
    "question": [
      "Come trovo la colla per il materiale giusto?",
      "How do I find glue for the right material?"
    ],
    "answer": [
      "Porta il nome del materiale o una foto dell’oggetto. Sulla confezione Loctite trovi superfici compatibili, modalità d’uso e avvertenze.",
      "Bring the material’s name or a photo of the object. The Loctite pack lists compatible surfaces, directions and warnings."
    ]
  },
  "lucchetti": {
    "checks": [
      [
        "Spazio per l’archetto",
        "Dimensioni dell’oggetto",
        "Chiave o combinazione"
      ],
      [
        "Shackle clearance",
        "Object dimensions",
        "Key or combination"
      ]
    ],
    "question": [
      "Come descrivo il punto da chiudere?",
      "How do I describe the fastening point?"
    ],
    "answer": [
      "Porta le misure o una foto del foro da chiudere. Diametro e lunghezza dell’archetto ci aiutano a scegliere la misura.",
      "Bring measurements or a photo of the opening. Shackle diameter and length help us choose the size."
    ]
  },
  "cerotti": {
    "checks": [
      [
        "Formato sulla confezione",
        "Materiale e istruzioni",
        "Integrità e indicazioni"
      ],
      [
        "Pack dimensions",
        "Material and instructions",
        "Integrity and labelled information"
      ]
    ],
    "question": [
      "Cosa guardo sulla confezione dei cerotti?",
      "What should I look at on the plaster pack?"
    ],
    "answer": [
      "Misure, quantità e indicazioni d’uso. Puoi confrontare i formati da vicino; per una domanda sulla salute chiedi a un professionista sanitario.",
      "Size, quantity and directions. Compare the formats in person; ask a healthcare professional about health questions."
    ]
  },
  "labbra": {
    "checks": [
      [
        "Nome della variante",
        "Ingredienti sull’etichetta",
        "Istruzioni del singolo articolo"
      ],
      [
        "Variant name",
        "Label ingredients",
        "Individual item directions"
      ]
    ],
    "question": [
      "Dove trovo gli ingredienti del balsamo labbra?",
      "Where can I find lip balm ingredients?"
    ],
    "answer": [
      "Sull’etichetta della variante che scegli. Guarda il nome completo e le indicazioni della confezione, anche quando conosci già il marchio.",
      "On your chosen variant’s label. Look at the full name and pack directions, even when you already know the brand."
    ]
  },
  "capelli": {
    "checks": [
      [
        "Tipo di accessorio",
        "Misura e chiusura",
        "Materiali indicati"
      ],
      [
        "Accessory type",
        "Dimensions and fastening",
        "Listed materials"
      ]
    ],
    "question": [
      "Come ritrovo un accessorio che uso già?",
      "How do I find an accessory I already use?"
    ],
    "answer": [
      "Portalo con te o mostraci una foto. Forma, dimensioni e tipo di chiusura ci aiutano a cercarlo insieme.",
      "Bring it with you or show us a photo. Shape, size and fastening help us look for it together."
    ]
  },
  "gommose": {
    "checks": [
      [
        "Nome e confezione",
        "Ingredienti e allergeni",
        "Quantità e conservazione"
      ],
      [
        "Name and pack",
        "Ingredients and allergens",
        "Quantity and storage"
      ]
    ],
    "question": [
      "Dove leggo ingredienti e allergeni?",
      "Where do I find ingredients and allergens?"
    ],
    "answer": [
      "Sulla confezione che scegli. Haribo e Fini hanno proposte diverse: tieni il pacchetto come riferimento per le informazioni alimentari.",
      "On your chosen pack. Haribo and Fini have different products: use the pack as the reference for food information."
    ]
  },
  "lecca-lecca": {
    "checks": [
      [
        "Gusto sulla confezione",
        "Ingredienti e allergeni",
        "Formato esposto"
      ],
      [
        "Labelled flavour",
        "Ingredients and allergens",
        "Displayed size"
      ]
    ],
    "question": [
      "Posso scegliere il gusto?",
      "Can I choose the flavour?"
    ],
    "answer": [
      "Guarda i gusti Chupa Chups presenti e cerca il tuo preferito. Ingredienti e informazioni alimentari sono sulla confezione.",
      "Browse the Chupa Chups flavours and find your favourite. Ingredients and food information are on the pack."
    ]
  },
  "caramelle": {
    "checks": [
      [
        "Linea del prodotto",
        "Ingredienti e allergeni",
        "Formato della confezione"
      ],
      [
        "Product line",
        "Ingredients and allergens",
        "Pack size"
      ]
    ],
    "question": [
      "Come riconosco una caramella senza zucchero?",
      "How do I recognise a sugar-free sweet?"
    ],
    "answer": [
      "Cerca la dicitura sulla confezione della linea che scegli. Leggi anche ingredienti e informazioni alimentari sul pacchetto.",
      "Look for the wording on your chosen line’s pack. Read the ingredients and food information too."
    ]
  },
  "cioccolatini": {
    "checks": [
      [
        "Nome della linea",
        "Ingredienti e allergeni",
        "Confezione e conservazione"
      ],
      [
        "Line name",
        "Ingredients and allergens",
        "Pack and storage"
      ]
    ],
    "question": [
      "Pocket Coffee e Rocher sono la stessa proposta?",
      "Are Pocket Coffee and Rocher the same product?"
    ],
    "answer": [
      "Sono due proposte Ferrero diverse. Cerca il nome sulla confezione e scegli il formato che ti serve; ingredienti e allergeni sono sull’etichetta.",
      "They are different Ferrero products. Find the name on the pack and choose the size you need; ingredients and allergens are on the label."
    ]
  },
  "piccoli-regali": {
    "checks": [
      [
        "Tipo di oggetto",
        "Dimensioni e materiali",
        "Istruzioni se previste"
      ],
      [
        "Object type",
        "Dimensions and materials",
        "Instructions where supplied"
      ]
    ],
    "question": [
      "Da dove comincio per un piccolo regalo?",
      "Where do I start with a little gift?"
    ],
    "answer": [
      "Raccontaci per chi è e l’occasione. Una candela, un portachiavi o un piccolo oggetto possono diventare un pensiero personale con le tue parole nel biglietto.",
      "Tell us who it is for and the occasion. A candle, keyring or little object can become a personal gift with your own words in a card."
    ]
  },
  "giochi": {
    "checks": [
      [
        "Età indicata",
        "Tipo di attività",
        "Avvertenze e componenti"
      ],
      [
        "Labelled age",
        "Activity type",
        "Warnings and components"
      ]
    ],
    "question": [
      "Come chiedo un gioco da regalare?",
      "How do I ask about a toy for a gift?"
    ],
    "answer": [
      "Dicci età e interessi di chi lo riceverà. Poi guardiamo le proposte e leggiamo insieme età consigliata e avvertenze sulla confezione.",
      "Tell us the recipient’s age and interests. Then look at the options and read the recommended age and pack warnings together."
    ]
  }
};

for(const item of octoberCollection) familyDetails[item.id]={checks:item.checks,question:item.question,answer:item.answer};

// These notes expand the documented families; they are not live stock records.
const familyStories:Record<string,{title:Pair;paragraphs:Pair[]}[]>={
 'profumi-raptus':[{title:['Il nome prima del flacone.','The name before the bottle.'],paragraphs:[['Raptus distingue le linee per persona “20–100 ml” e “50 ml”. Il nome completo della fragranza aiuta a ritrovare il riferimento: porta quello, oppure una foto leggibile del flacone e della confezione.','Raptus distinguishes its personal fragrance lines as “20–100 ml” and “50 ml”. The complete fragrance name helps identify it: bring the name or a clear photo of the bottle and pack.'],['Se scegli per qualcuno, parti da una fragranza che conosce e usa. Confronta il formato del singolo articolo e le informazioni sulla confezione; la presenza della gamma non indica che ogni variante sia disponibile in ogni momento.','When choosing for someone, start with a fragrance they know and use. Compare the individual item’s size and packaging information; carrying the range does not mean every variant is available at all times.']]}],
 quaderni:[{title:['Una pagina racconta quello che cerchi.','A page shows what you need.'],paragraphs:[['Quaderni e blocchi Notami servono a usi diversi: appunti, studio, scrivania. Porta una foto della pagina del quaderno da sostituire: formato del foglio, rigatura o quadretti e rilegatura sono tre informazioni distinte.','Notami notebooks and pads suit different uses: notes, studying and a desk. Bring a page photo of the notebook you want to replace: sheet size, ruling or squares and binding are three separate details.'],['Una spirale cambia il modo in cui il quaderno si apre; una cartellina raccoglie invece fogli separati. Puoi confrontare queste famiglie prima di scegliere come organizzare gli appunti.','A spiral changes how a notebook opens; a folder holds separate sheets instead. Compare these families before choosing how to organise your notes.']]}],
 penne:[{title:['Stessa marca, scritture da distinguere.','One brand, different writing details.'],paragraphs:[['Le penne a sfera BIC fanno parte della cartoleria di Angela. Per ritrovare quella che usi, confronta colore dell’inchiostro, misura della punta e nome della linea: il colore esterno della penna da solo non basta.','BIC ballpoint pens are part of Angela’s stationery range. To identify the one you use, compare ink colour, tip size and line name: the pen’s outer colour alone is not enough.'],['Per un oggetto più decorativo trovi anche le famiglie delle penne con perle e delle penne profumate. Una decorazione e il tipo di scrittura descrivono aspetti diversi da controllare sul singolo articolo.','For a more decorative item, explore the pearl-pen and scented-pen families too. Decoration and writing type describe different details to check on each item.']]}],
 evidenziatori:[{title:['Il colore che ritrovi negli appunti.','The colour you recognise in your notes.'],paragraphs:[['Gli evidenziatori STABILO aiutano a distinguere passaggi e argomenti. Se vuoi continuare un codice colore che usi già, porta la foto dell’evidenziatore: tonalità, punta e confezione vanno confrontate separatamente.','STABILO highlighters help distinguish passages and topics. To continue a colour system you already use, bring a highlighter photo: compare shade, tip and pack separately.'],['Una confezione assortita e un singolo colore rispondono a richieste diverse. Le varianti presenti si verificano in negozio, insieme al formato della punta.','A mixed pack and one specific colour meet different needs. Check current variants in store, along with the tip format.']]}],
 colle:[{title:['Prima la carta, poi la colla.','Paper first, then glue.'],paragraphs:[['Pritt e Kores compaiono nell’assortimento per carta e piccoli lavori. Per un quaderno, un cartoncino o un progetto creativo indica il supporto e leggi gli usi ammessi sulla confezione: il marchio da solo non sceglie il prodotto.','Pritt and Kores appear in the range for paper and little projects. For a notebook, card or creative project, specify the surface and read the permitted uses on the pack: the brand alone does not choose the product.'],['Colle per piccoli interventi e gommini rimovibili hanno un percorso distinto nelle piccole necessità. Confrontali se il lavoro riguarda un materiale diverso o richiede di poter staccare il fissaggio.','Small-repair glue and removable adhesive pads have a separate path under everyday essentials. Compare them if the task uses a different material or requires a fixing you can remove.']]}],
 cartelline:[{title:['Il formato riguarda anche quello che metti dentro.','Size includes what goes inside.'],paragraphs:[['Una cartellina raccoglie fogli e documenti; per sceglierla servono il formato dei fogli e lo spessore da contenere. Porta una misura o un esempio e guarda chiusura e ingombro prima di pensare al colore.','A folder holds sheets and documents; choosing one requires the sheet size and thickness of the contents. Bring measurements or an example and check closure and overall size before considering colour.'],['Se gli appunti devono restare rilegati, confronta invece la famiglia quaderni e blocchi. Le etichette possono aiutarti a distinguere raccoglitori e materiali.','If your notes need to stay bound, compare notebooks and pads instead. Labels can help distinguish folders and materials.']]}],
 etichette:[{title:['Piccoli articoli, funzioni diverse.','Small items, different functions.'],paragraphs:[['Etichette, correttori e forbici sono raccolti nella stessa famiglia di articoli da scrivania. I nomi Notami, Arda e Kores aiutano a riconoscere confezioni diverse; formato e impiego vanno letti sul singolo articolo.','Labels, correction supplies and scissors share this desk-essentials family. Notami, Arda and Kores help identify different packs; read the size and intended use on each item.'],['Per un’etichetta misura lo spazio su cui la applicherai e quanto devi scrivere. Se cerchi un ricambio preciso porta la confezione precedente o una fotografia leggibile.','For a label, measure the surface and consider how much you need to write. Bring the previous pack or a clear photo for a specific replacement.']]}],
 calamite:[{title:['Quale Bologna vuoi ricordare?','Which Bologna do you want to remember?'],paragraphs:[['Torri, portici e soggetti della città si ritrovano nelle calamite della bottega. Guarda forma, dimensioni e soggetto: un monumento o un dettaglio può ricordare una passeggiata meglio di una scelta generica.','Towers, porticoes and city designs appear on the shop’s magnets. Look at shape, size and subject: a landmark or detail may recall a walk better than a generic choice.'],['Le calamite con ricette hanno una scheda propria, con proposte in italiano e inglese. Le matite con tortellino offrono un altro modo di portare il ricordo sulla scrivania.','Recipe magnets have their own listing, including Italian and English versions. Tortellino pencils offer another way to bring the memory to a desk.']]}],
 auguri:[{title:['Aprilo prima di scegliere.','Open it before choosing.'],paragraphs:[['L’espositore comprende biglietti di compleanno illustrati, anche con dettagli applicati. Confronta disegno, testo già stampato e spazio per il tuo messaggio: la copertina è soltanto una parte della scelta.','The display includes illustrated birthday cards, some with attached decorations. Compare the artwork, printed wording and room for your message: the cover is only part of the choice.'],['Controlla il formato e se la busta è inclusa. Per accompagnare un oggetto, le buste regalo e i fiocchi sono raccolti in un’altra famiglia.','Check the size and whether an envelope is included. Gift bags and bows for an object are collected in a different family.']]}],
 candeline:[{title:['Il numero della prossima festa.','The number for the next celebration.'],paragraphs:[['Le candeline numeriche si scelgono per cifra, dimensioni e colore. Se il numero ha due cifre, controlla entrambe le varianti prima di completare la scelta; la presenza della famiglia non garantisce ogni cifra disponibile.','Choose number candles by digit, size and colour. For a two-digit number, check both variants before completing the choice; carrying the family does not guarantee every digit is available.'],['Leggi le istruzioni sulla confezione e confronta l’ingombro con la torta. Biglietti e buste regalo completano il percorso compleanno, con una funzione diversa.','Read the pack instructions and compare the size with the cake. Cards and gift bags complete the birthday path, with a different purpose.']]}],
 palloncini:[{title:['Il colore è solo il primo dettaglio.','Colour is only the first detail.'],paragraphs:[['I palloncini sono fra gli articoli per feste e compleanni. Forma, numero di pezzi, dimensioni e istruzioni di gonfiaggio dipendono dalla confezione scelta.','Balloons are among the party and birthday items. Shape, pack quantity, dimensions and inflation instructions depend on the chosen pack.'],['La vendita di palloncini non conferma un servizio di gonfiaggio. Se ne hai bisogno, verifica la richiesta prima di una visita dedicata; i palloncini ad acqua sono una famiglia distinta nei giochi.','Selling balloons does not establish an inflation service. Check that request before a special trip; water balloons are a separate family under toys.']]}],
 buste:[{title:['Comincia dalle misure del regalo.','Start with the gift’s dimensions.'],paragraphs:[['Buste, shopper, fiocchi e coccarde aiutano a presentare un pensiero. Porta larghezza, altezza e profondità dell’oggetto, considerando anche la sua confezione: una busta piatta e una shopper non occupano lo spazio nello stesso modo.','Gift bags, bows and ribbons help present a thoughtful gift. Bring the object’s width, height and depth, including its packaging: a flat bag and a structured gift bag hold space differently.'],['Poi confronta colori e biglietto da abbinare. Misure e quantità della confezione si controllano sul singolo articolo.','Then compare colours and a matching card. Check the size and pack quantity on the individual item.']]}],
 cavi:[{title:['Guarda entrambe le estremità.','Look at both ends.'],paragraphs:[['Un cavo collega il dispositivo a una porta di alimentazione. Per capire quello che cerchi porta il telefono o fotografie leggibili di entrambe le porte: un’estremità compatibile non descrive automaticamente l’altra.','A cable connects your device to a power port. Bring your phone or clear photos of both ports: one compatible end does not automatically establish the other.'],['Connettori, lunghezza e caratteristiche di ricarica si verificano sulla confezione del modello. Se cerchi una riserva di energia senza una presa vicina, confronta anche i power bank Teknee.','Check connectors, length and charging specifications on the model’s packaging. For reserve power without a nearby socket, compare Teknee power banks too.']]}],
 'power-bank':[{title:['Una riserva da abbinare al dispositivo.','A reserve matched to your device.'],paragraphs:[['I power bank Teknee sono fra gli accessori per telefono. Capacità dichiarata, porte e cavo incluso sono informazioni diverse: confrontale con il dispositivo e con il tipo di collegamento che usi.','Teknee power banks are among the phone accessories. Stated capacity, ports and an included cable are different details: compare them with your device and usual connection.'],['La sola capacità non dice quante ricariche otterrai su ogni telefono. Per il modello scelto leggi specifiche e istruzioni; un cavo di ricambio ha una famiglia separata.','Capacity alone does not establish how many charges every phone will get. Read the chosen model’s specifications and instructions; replacement cables have a separate family.']]}],
 nastri:[{title:['Il supporto conta quanto la larghezza.','The surface matters as much as the width.'],paragraphs:[['Un nastro per chiudere una confezione e uno per un piccolo intervento possono avere caratteristiche diverse. Indica il materiale, misura la larghezza utile e confronta l’impiego previsto sulla confezione.','Tape for closing a pack and tape for a small job may have different properties. Specify the material, measure the useful width and compare the intended use on the pack.'],['Se cerchi un fissaggio rimovibile o una colla, esplora anche gommini adesivi e colle. Le istruzioni dell’articolo guidano la scelta oltre il colore del rotolo.','For a removable fixing or glue, explore adhesive pads and glue too. The item’s instructions guide the choice beyond the roll’s colour.']]}],
 adesivi:[{title:['Il lavoro da fare, prima del nome.','The task before the name.'],paragraphs:[['Le colle Loctite sono fra gli articoli per piccoli interventi. Per ritrovare il prodotto adatto descrivi i materiali da unire e il lavoro: non tutte le colle hanno gli stessi usi.','Loctite glue is among the small-repair items. Describe the materials and task to identify the right product: not all glue has the same uses.'],['Leggi superfici compatibili, istruzioni e avvertenze della confezione. Per la carta trovi Pritt e Kores; per un fissaggio diverso confronta la famiglia con gommini UHU Patafix.','Read compatible surfaces, instructions and warnings on the pack. For paper, explore Pritt and Kores; for another kind of fixing, compare the family containing UHU Patafix pads.']]}],
 lucchetti:[{title:['Misura quello che deve attraversare.','Measure what it needs to pass through.'],paragraphs:[['Un lucchetto si sceglie anche per apertura e dimensione dell’arco, non soltanto per il corpo. Porta la misura del punto da chiudere o una fotografia con un riferimento di scala.','Choose a padlock by its shackle opening and dimensions as well as its body. Bring the dimensions of the closure point or a photo with a size reference.'],['Magnum è fra i nomi presenti. Modello, chiavi incluse e uso previsto si controllano sulla singola confezione, senza attribuire la stessa caratteristica a tutti i lucchetti.','Magnum is among the names in the range. Check the model, included keys and intended use on the individual pack rather than applying one feature to every padlock.']]}],
 cerotti:[{title:['Una confezione da leggere.','A pack to read.'],paragraphs:[['I cerotti Confiderm fanno parte dei piccoli articoli personali del negozio. Formato, quantità e caratteristiche dipendono dalla variante; porta il nome completo se vuoi ritrovare una confezione che conosci.','Confiderm plasters are among the shop’s personal essentials. Size, quantity and features depend on the variant; bring the complete name to find a familiar pack.'],['Confronta la confezione con quella che usi già e leggi le indicazioni di impiego del prodotto scelto.','Compare the pack with one you already use and read the chosen product’s directions.']]}],
 labbra:[{title:['Il nome completo aiuta a ritrovarlo.','The full name helps identify it.'],paragraphs:[['Labello è il marchio dei balsami labbra presenti. Se ne usi già uno, porta il nome della variante o la confezione: aspetto e colore esterno non sostituiscono le informazioni del singolo prodotto.','Labello is the lip-balm brand in the range. Bring the variant name or pack for one you already use: appearance and outer colour do not replace the individual product information.'],['Confronta formato, ingredienti e istruzioni sull’articolo presente. Gli altri piccoli accessori per la cura personale hanno schede distinte.','Compare size, ingredients and instructions on the available item. Other little personal-care accessories have separate listings.']]}],
 capelli:[{title:['Piccoli formati da confrontare dal vivo.','Small formats to compare in person.'],paragraphs:[['Elastici, fermagli e pinzette sono raccolti in questa famiglia; Trim e Kimono Party sono fra i nomi presenti. Per ritrovare un accessorio guarda forma, dimensioni e quantità confezionata.','Hair ties, clips and tweezers are collected in this family; Trim and Kimono Party are among the names in the range. Compare shape, dimensions and pack quantity to identify an accessory.'],['Una foto di quello che usi chiarisce meglio una richiesta generica. Colori e varianti si verificano fra le confezioni presenti in negozio.','A photo of what you use clarifies a generic request. Check colours and variants among the packs available in store.']]}],
 gommose:[{title:['Il gusto ha anche una forma.','Flavour has a shape too.'],paragraphs:[['Haribo, Fini e Lupo Alberto compaiono fra le caramelle gommose del negozio. Confronta forma, gusto e formato della confezione; un nome di marca non identifica una sola ricetta.','Haribo, Fini and Lupo Alberto appear among the gummy sweets in the range. Compare shape, flavour and pack format; a brand name does not identify one single recipe.'],['Ingredienti, allergeni e indicazioni della variante vanno letti sulla singola confezione. Per altre consistenze trovi le famiglie di liquirizia, lecca-lecca e caramelle confezionate.','Read ingredients, allergens and variant information on the individual pack. For other textures, explore the liquorice, lollipop and packaged-sweets families.']]}],
 'lecca-lecca':[{title:['Un Chupa Chups, il gusto da scegliere.','A Chupa Chups, a flavour to choose.'],paragraphs:[['I lecca-lecca Chupa Chups sono nell’espositore dei dolciumi. Per un gusto preciso confronta nome, involucro e formato; le varianti presenti possono cambiare.','Chupa Chups lollipops are in the sweets display. Compare the name, wrapper and size for a specific flavour; available variants can change.'],['La confezione resta il riferimento per ingredienti, allergeni e indicazioni d’uso. Se cerchi una scatola da condividere, confronta anche le caramelle confezionate.','The pack is the reference for ingredients, allergens and usage information. For a box to share, compare packaged sweets too.']]}],
 caramelle:[{title:['Dal nome alla scatola precisa.','From a name to the exact box.'],paragraphs:[['Dietorelle, Ricola, Mentos, Golia, Saila, Halls, Fisherman’s Friend e Fruit-tella sono nomi presenti fra i dolciumi. Linea, gusto e formato aiutano a distinguere confezioni che possono sembrare simili.','Dietorelle, Ricola, Mentos, Golia, Saila, Halls, Fisherman’s Friend and Fruit-tella are sweets names in the range. Line, flavour and size help distinguish packs that may look similar.'],['Ricola e Fisherman’s Friend hanno anche schede dedicate. Non estendere caratteristiche sullo zucchero o ingredienti da una variante all’intera marca: leggi il pacchetto scelto.','Ricola and Fisherman’s Friend also have dedicated listings. Do not apply sugar or ingredient information from one variant to an entire brand: read the chosen pack.']]}],
 cioccolatini:[{title:['Due nomi, confezioni diverse.','Two names, different packs.'],paragraphs:[['Pocket Coffee e Ferrero Rocher compaiono nell’assortimento del negozio. Confronta nome completo, numero di pezzi e formato: un piccolo acquisto personale e un pensiero da condividere possono richiedere confezioni diverse.','Pocket Coffee and Ferrero Rocher appear in the shop’s range. Compare the full name, piece count and format: a personal treat and a gift to share may call for different packs.'],['Ingredienti, allergeni e conservazione si leggono sulla variante presente. Per biscotti o altri dolci confezionati trovi percorsi separati nel catalogo.','Read ingredients, allergens and storage information on the actual variant. Biscuits and other packaged treats have separate catalogue paths.']]}],
 'piccoli-regali':[{title:['Una candela o un portachiavi, pensando a qualcuno.','A candle or keyring, with someone in mind.'],paragraphs:[['Candele e portachiavi fanno parte dei piccoli pensieri del negozio. Parti dall’uso e dalla persona: un oggetto da tenere sulla scrivania e uno da portare con le chiavi hanno dimensioni e funzioni diverse.','Candles and keyrings are among the little gifts in the shop. Start with the use and recipient: something for a desk and something to carry with keys have different sizes and purposes.'],['Per un oggetto decorativo puoi confrontare anche salvadanai a forma di nano e mappamondi. Biglietti e buste regalo aiutano a completare la presentazione.','For a decorative object, compare dwarf money boxes and globes too. Cards and gift bags help complete the presentation.']]}],
 giochi:[{title:['Comincia da quello che piace fare.','Start with what they enjoy doing.'],paragraphs:[['Costruire, inventare storie o giocare in viaggio: puoi confrontare costruzioni LEGO, meccanica Clementoni, modellini Bburago e RMZ City, personaggi, giochi attività e formati magnetici da viaggio.','Build, imagine stories or play while travelling: compare LEGO building sets, Clementoni mechanics, Bburago and RMZ City models, characters, activity toys and magnetic travel formats.'],['Età e interessi aiutano a restringere la scelta; istruzioni, componenti e avvertenze appartengono alla scatola precisa. Per un regalo porta il nome o una foto del modello cercato e verifica la disponibilità.','Age and interests help narrow the choice; instructions, pieces and warnings belong to the exact box. Bring a name or photo for a specific gift model and check availability.']]}]
};
for(const [id,story] of Object.entries(familyStories))familyDetails[id].story=story;

const choices:Record<string,NonNullable<FamilyDetail['choice']>>={
 giochi:{title:['Da quale attività cominciamo?','Which activity shall we start with?'],options:[
  {label:['Costruire','Build'],text:['Confronta LEGO e la meccanica Clementoni: set, componenti e istruzioni aiutano a distinguere i progetti.','Compare LEGO and Clementoni mechanics: the set, pieces and instructions help distinguish the projects.']},
  {label:['Inventare storie','Imagine stories'],text:['Esplora bambole Disney e personaggi Marvel; per una versione precisa controlla nome e contenuto della confezione.','Explore Disney dolls and Marvel figures; check the name and pack contents for a specific version.']},
  {label:['Portarlo in viaggio','Take it travelling'],text:['Guarda i giochi magnetici: regole, partecipanti, chiusura e dimensioni contano quanto il soggetto.','Browse magnetic games: rules, players, closure and dimensions matter as much as the design.']}
 ]},
 'costruzioni-lego':{title:['Il codice distingue la scatola.','The code identifies the box.'],options:[
  {label:['Linea','Line'],text:['Creator 3 in 1, City, Technic e Animal Crossing descrivono percorsi diversi, non un unico set.','Creator 3 in 1, City, Technic and Animal Crossing describe different paths rather than one single set.']},
  {label:['Set','Set'],text:['Nome completo e codice sulla confezione identificano il modello da chiedere.','The complete name and box number identify the model to ask about.']},
  {label:['Persona','Person'],text:['Confronta età indicata, attività preferita e contenuto prima di scegliere il regalo.','Compare stated age guidance, favourite activity and contents before choosing a gift.']}
 ]},
 'modellini-auto':{title:['Pronto da osservare o da montare?','Ready to look at or build?'],options:[
  {label:['Modellino','Model'],text:['Con Bburago e RMZ City parti da veicolo e scala, poi controlla materiali e parti mobili.','With Bburago and RMZ City, start with vehicle and scale, then check materials and moving parts.']},
  {label:['Progetto da assemblare','Assembly project'],text:['La meccanica Clementoni segue un altro percorso: tempo di montaggio, componenti e istruzioni diventano parte della scelta.','Clementoni mechanics follows another path: assembly time, pieces and instructions become part of the choice.']}
 ]},
 'giochi-magnetici':{title:['La partita comincia dalle regole.','The game starts with the rules.'],options:[
  {label:['Giocatori','Players'],text:['Solitario, Ludo, Football e Scacchi non hanno lo stesso numero di partecipanti: controlla la versione.','Solitaire, Ludo, Football and Chess do not share the same player count: check the version.']},
  {label:['In viaggio','Travelling'],text:['Verifica chiusura della scatola, dimensioni e componenti inclusi prima di metterlo in borsa.','Check the case closure, dimensions and included pieces before putting it in a bag.']}
 ]},
 cavi:{title:['Due necessità diverse.','Two different needs.'],options:[
  {label:['Ho una presa','I have a socket'],text:['Porta i riferimenti delle porte del telefono e dell’alimentatore per confrontare il cavo.','Bring the phone and charger port details to compare the cable.']},
  {label:['Mi serve una riserva','I need reserve power'],text:['Esplora anche i power bank e verifica porte, capacità e cavi inclusi sul modello.','Explore power banks too and check the model’s ports, capacity and included cables.']}
 ]},
 colle:{title:['Come deve restare il fissaggio?','How should the fixing stay?'],options:[
  {label:['Carta e piccoli lavori','Paper and little projects'],text:['Confronta gli usi dichiarati delle colle per carta sulla confezione.','Compare the stated uses on paper-glue packs.']},
  {label:['Da poter rimuovere','Removable'],text:['I gommini adesivi rimovibili hanno una famiglia dedicata; controlla superfici ammesse e istruzioni.','Removable adhesive pads have a dedicated family; check permitted surfaces and instructions.']}
 ]},
 calamite:{title:['Un monumento oppure una ricetta.','A landmark or a recipe.'],options:[
  {label:['Il luogo del viaggio','The place you visited'],text:['Torri, portici e soggetti cittadini raccontano la passeggiata. Confronta forma e dimensioni.','Towers, porticoes and city subjects recall your walk. Compare shape and dimensions.']},
  {label:['Il piatto che ricordi','The dish you remember'],text:['Le calamite ricetta hanno versioni in italiano e inglese: scegli pensando anche a chi le riceverà.','Recipe magnets have Italian and English versions: choose with the recipient in mind too.']}
 ]},
 'calamite-ricette':{title:['Scegli piatto e lingua.','Choose the dish and language.'],options:[
  {label:['Sei ricette da scegliere','Six recipes to choose from'],text:['Ragù, lasagne, tortellini, tagliatelle, cotoletta e friggione. Verifica il soggetto che cerchi fra le varianti presenti.','Ragù, lasagne, tortellini, tagliatelle, cotoletta and friggione. Check the design you want among the available variants.']},
  {label:['Per chi torna a casa','For someone going home'],text:['Il testo italiano o inglese è una caratteristica del souvenir da controllare prima di scegliere.','Italian or English text is a souvenir feature to check before choosing.']}
 ]},
 'pile-batterie':{title:['La foto utile mostra la sigla.','A useful photo shows the code.'],options:[
  {label:['Sulla batteria','On the battery'],text:['Rendi leggibili sigla, tensione e formato della batteria da sostituire.','Show the code, voltage and format of the battery you are replacing.']},
  {label:['Sul dispositivo','On the device'],text:['Controlla il tipo richiesto dal dispositivo e confrontalo con il prodotto: la forma non basta.','Check the device’s required type against the product: shape alone is not enough.']}
 ]},
 'lampadine-led':{title:['Tre dettagli da tenere separati.','Keep three details separate.'],options:[
  {label:['Attacco','Fitting'],text:['Porta una foto leggibile dell’attacco o la confezione precedente.','Bring a clear fitting photo or the previous pack.']},
  {label:['Alimentazione e potenza','Supply and wattage'],text:['Confronta le indicazioni del modello con quelle richieste dalla lampada.','Compare the model’s specifications with the lamp’s requirements.']},
  {label:['Luce','Light'],text:['La tonalità della luce è un’altra scelta, distinta dalla forma della lampadina.','Light colour is another choice, separate from bulb shape.']}
 ]},
 buste:{title:['Prima l’ingombro, poi il colore.','Size before colour.'],options:[
  {label:['L’oggetto','The object'],text:['Misura il regalo con la sua confezione: larghezza, altezza e profondità.','Measure the gift with its pack: width, height and depth.']},
  {label:['Il messaggio','The message'],text:['Abbina un biglietto e controlla lo spazio per le parole che vuoi scrivere.','Pair it with a card and check the space for your message.']}
 ]},
 'salvadanai-nani':{title:['Un regalo da guardare e usare.','A gift to look at and use.'],options:[
  {label:['Il personaggio','The character'],text:['Confronta i nani e i dettagli dipinti pensando alla persona e al posto in cui lo terrà.','Compare dwarfs and painted details with the recipient and its future place in mind.']},
  {label:['La funzione','The function'],text:['Controlla apertura per le monete e sistema per svuotarlo, oltre alle dimensioni.','Check the coin slot and how to empty it, as well as its dimensions.']}
 ]}
};
for(const [id,choice] of Object.entries(choices))familyDetails[id].choice=choice;

const relatedFamilies:Record<string,string[]>={
 'profumi-raptus':['piccoli-regali','auguri','buste'],quaderni:['penne','evidenziatori','cartelline','etichette'],penne:['penne-perle','penne-profumate','quaderni'],evidenziatori:['quaderni','penne','etichette'],colle:['colle-uhu-kores','nastri','etichette'],cartelline:['quaderni','etichette','penne'],etichette:['cartelline','colle','quaderni'],calamite:['calamite-ricette','matite-tortellino','salina-cervia'],auguri:['buste','candeline','piccoli-regali'],candeline:['auguri','buste','palloncini'],palloncini:['candeline','auguri','palloncini-acqua'],buste:['auguri','piccoli-regali','salvadanai-nani'],cavi:['power-bank','pile-batterie','prese-cavi-elettrici'],'power-bank':['cavi','pile-batterie','giochi-magnetici'],nastri:['colle-uhu-kores','adesivi','buste'],adesivi:['colle-uhu-kores','colle','nastri'],lucchetti:['nastri','guanti-spontex','pile-batterie'],cerotti:['labbra','capelli','rasoi-bic'],labbra:['cerotti','capelli','profumi-raptus'],capelli:['rasoi-bic','labbra','cerotti'],gommose:['lecca-lecca','liquirizia-gatos','caramelle'],'lecca-lecca':['gommose','caramelle','cioccolatini'],caramelle:['ricola-erbe','fishermans-friend','chewing-gum'],cioccolatini:['biscotti-oreo','caramelle','gommose'],'piccoli-regali':['salvadanai-nani','mappamondi','auguri'],giochi:['costruzioni-lego','meccanica-clementoni','modellini-auto','giochi-magnetici'],
 'costruzioni-lego':['meccanica-clementoni','modellini-auto','giochi-magnetici'],'modellini-auto':['meccanica-clementoni','costruzioni-lego','personaggi-marvel'],'meccanica-clementoni':['costruzioni-lego','modellini-auto','giochi-magnetici'],'giochi-magnetici':['giochi-aperto','adesivi-personaggi','figurine-panini'],'calamite-ricette':['calamite','matite-tortellino','salina-cervia'],'matite-tortellino':['calamite-ricette','penne-perle','calamite'],'pile-batterie':['lampadine-led','prese-cavi-elettrici','cavi'],'lampadine-led':['pile-batterie','prese-cavi-elettrici','guanti-spontex'],'salvadanai-nani':['mappamondi','piccoli-regali','buste'],'salina-cervia':['calamite-ricette','calamite','piccoli-regali']
};
for(const [id,related] of Object.entries(relatedFamilies))familyDetails[id].relatedFamilies=related;

for(const id of ['giochi','costruzioni-lego','meccanica-clementoni','modellini-auto'])familyDetails[id].readMore={slug:'lego-clementoni-modellini-scegliere-gioco-bologna',title:['Costruire o collezionare? Tre percorsi da confrontare.','Build or collect? Three paths to compare.']};
for(const id of ['calamite','calamite-ricette','matite-tortellino'])familyDetails[id].readMore={slug:'calamite-ricette-matite-tortellino-souvenir-bologna',title:['Una ricetta, una matita, un ricordo di Bologna.','A recipe, a pencil, a Bologna memory.']};
for(const id of ['pile-batterie','lampadine-led','prese-cavi-elettrici'])familyDetails[id].readMore={slug:'pile-lampadine-ricambi-cosa-portare',title:['Pile e lampadine: prepara il riferimento del ricambio.','Batteries and bulbs: prepare the replacement details.']};
