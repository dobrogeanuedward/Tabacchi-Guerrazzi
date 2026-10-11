const ericaSource={label:'Royal Botanic Gardens, Kew — Erica arborea',url:'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:328204-1/general-information'};
const lignotuberSource={label:'Paula et al., Plant Ecology (2016) — Lignotubers in Mediterranean basin plants',url:'https://www.uv.es/jgpausas/papers/Paula-2016-PlEcol_lignotubers.pdf'};
const sepioliteSource={label:'Ministerio de Cultura, Spagna — Tesauro dei materiali: Meerschaum / Sepiolita',url:'https://tesauros.cultura.gob.es/tesauros/materias/1031026.html'};
const claySource={label:'British Museum — Fornello in argilla cotta, EA80213',url:'https://www.britishmuseum.org/collection/object/Y_EA80213'};
const compositeSource={label:'Smithsonian, National Museum of American History — Smoking Pipe, nmah_315189',url:'https://americanhistory.si.edu/collections/object/nmah_315189'};
const cigarStructureSource={label:'National Cancer Institute — Monograph 9, capitolo 3: Chemistry and Toxicology',url:'https://cancercontrol.cancer.gov/sites/default/files/2020-08/m09_3.pdf'};
const cigarDefinitionSource={label:'Food and Drug Administration — Cigars, Cigarillos, Little Filtered Cigars',url:'https://www.fda.gov/tobacco-products/tobacco-products-ingredients-components/cigars-cigarillos-little-filtered-cigars'};
const nicotianaSource={label:'Royal Botanic Gardens, Kew — Nicotiana tabacum',url:'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:817077-1/general-information'};

export const materialGuides:Record<string,any>={
 'radica-erica-arborea':{
  parent:'pipe-e-tabacchi-da-pipa',
  title:['Radica: la pianta e la struttura del legno.','Briar: the plant and the woody structure.'],
  intro:['Una lettura botanica della radica, fra Erica arborea e lignotubero.','A botanical account of briar, from Erica arborea to the lignotuber.'],
  sources:[ericaSource,lignotuberSource],
  sections:[
   [['La specie botanica','The botanical species'],['Erica arborea è una specie della famiglia Ericaceae. Kew la descrive come arbusto o albero; il suo areale nativo comprende il Mediterraneo.','Erica arborea belongs to the Ericaceae family. Kew describes it as a shrub or tree; its native range includes the Mediterranean.']],
   [['Il lignotubero','The lignotuber'],['È un ingrossamento legnoso nella zona di passaggio fra radice e fusto. Lo studio di Paula e colleghi documenta questa struttura in Erica arborea e l’uso storico dei lignotuberi di erica per pipe e utensili.','It is a woody swelling at the root–shoot transition. Paula and colleagues document this structure in Erica arborea and the historical use of Erica lignotubers for pipes and tools.']],
   [['Dalla specie all’oggetto','From species to object'],['Una descrizione botanica non identifica il legno di un singolo oggetto né il luogo di raccolta. Per queste attribuzioni occorrono informazioni riferite all’esemplare.','A botanical description does not identify the wood in an individual object or its harvesting location. Such attribution requires evidence about the specimen.']]
  ]
 },
 'schiuma-di-mare-sepiolite':{
  parent:'pipe-e-tabacchi-da-pipa',
  title:['Schiuma di mare: il materiale dietro il nome.','Meerschaum: the material behind the name.'],
  intro:['Sepiolite, nomi e aspetto: una scheda sui materiali.','Sepiolite, names and appearance: a materials guide.'],
  sources:[sepioliteSource],
  sections:[
   [['Un nome, un minerale','A name and a mineral'],['Il Tesauro del Ministerio de Cultura spagnolo collega Meerschaum e schiuma di mare alla sepiolite, classificata fra i fillosilicati.','The Spanish Ministry of Culture’s thesaurus connects meerschaum and seafoam with sepiolite, classified as a phyllosilicate.']],
   [['Come viene descritta','How it is described'],['La fonte descrive masse bianche o giallastre, opache, talvolta molto porose. Sono caratteristiche mineralogiche, non una certificazione di un oggetto.','The source describes opaque white or yellowish masses, sometimes highly porous. These are mineralogical characteristics, not certification of an object.']],
   [['Riconoscere i limiti di una foto','Understanding a photograph’s limits'],['Colore e fotografia non bastano ad attribuire una composizione. La denominazione del materiale e la documentazione dell’esemplare sono informazioni distinte dall’aspetto.','Colour and a photograph alone cannot establish composition. The material’s name and specimen documentation are distinct from its appearance.']]
  ]
 },
 'pipe-materiali-storia':{
  parent:'pipe-e-tabacchi-da-pipa',
  title:['Pipe e materiali: leggere gli oggetti storici.','Pipes and materials: reading historical objects.'],
  intro:['Due schede museali per osservare argilla, legno e materiali distinti nelle parti.','Two museum records for examining clay, wood and different materials within an object.'],
  sources:[claySource,compositeSource],
  sections:[
   [['Un fornello in argilla cotta','A fired-clay bowl'],['Il British Museum conserva un fornello in argilla cotta proveniente da Qasr Ibrim. La scheda EA80213 lo attribuisce al periodo ottomano, con datazione 1550–1811.','The British Museum holds a fired-clay bowl found at Qasr Ibrim. Record EA80213 assigns it to the Ottoman period, dated 1550–1811.']],
   [['Materiali distinti nelle parti','Different materials in different parts'],['Un esemplare dello Smithsonian, datato 1880–1910, associa radica al corpo, vulcanite al bocchino, argento alla ghiera e schiuma di mare al bordo del fornello.','A Smithsonian specimen dated 1880–1910 has a briar body, vulcanite mouthpiece, silver ferrule and meerschaum bowl rim.']],
   [['Il caso documentato e la regola generale','A documented case and a general rule'],['Queste schede descrivono due reperti specifici. Non dimostrano una composizione universale delle pipe né consentono di datare un altro oggetto soltanto per somiglianza.','These records describe two specific objects. They do not establish a universal composition for pipes or date another object through resemblance alone.']]
  ]
 },
 'sigaro-struttura-termini':{
  parent:'sigari',
  title:['Filler, binder, wrapper: termini di struttura.','Filler, binder, wrapper: structural terminology.'],
  intro:['Tre parole inglesi per descrivere le parti, senza classifiche o valutazioni commerciali.','Three English terms for describing components, without rankings or commercial assessments.'],
  sources:[cigarStructureSource,cigarDefinitionSource],
  sections:[
   [['Filler: il riempimento','Filler: the inner material'],['Il capitolo 3 della Monograph 9 del National Cancer Institute chiama filler la parte interna del sigaro. Il termine indica una posizione nella struttura.','Chapter 3 of National Cancer Institute Monograph 9 calls the inner part of the cigar the filler. The term identifies a position within the structure.']],
   [['Binder e wrapper','Binder and wrapper'],['Binder indica l’elemento legante; wrapper il rivestimento esterno. La monografia distingue questi componenti dal riempimento.','Binder identifies the binding component; wrapper the outer covering. The monograph distinguishes these components from the filler.']],
   [['Struttura e definizione','Structure and definition'],['La FDA definisce il sigaro come un rotolo di tabacco avvolto in foglia di tabacco o in materiale contenente tabacco. I nomi delle parti non specificano da soli specie, provenienza o composizione di un esemplare.','The FDA defines a cigar as a roll of tobacco wrapped in leaf tobacco or a substance containing tobacco. Component names alone do not specify the species, origin or composition of a specimen.']]
  ]
 },
 'nicotiana-tabacum-botanica':{
  parent:'pipe-e-tabacchi-da-pipa',
  title:['Nicotiana tabacum: una lettura botanica.','Nicotiana tabacum: a botanical account.'],
  intro:['Famiglia, genere e specie: come leggere un nome scientifico.','Family, genus and species: how to read a scientific name.'],
  sources:[nicotianaSource],
  sections:[
   [['Famiglia e genere','Family and genus'],['Kew colloca Nicotiana tabacum nella famiglia Solanaceae e nel genere Nicotiana. Questi nomi appartengono alla classificazione botanica.','Kew places Nicotiana tabacum in the Solanaceae family and the genus Nicotiana. These names belong to botanical classification.']],
   [['Il nome della specie','The species name'],['Nicotiana tabacum L. è indicata come specie accettata. La scheda distingue il nome della specie dalle descrizioni botaniche raccolte nelle diverse flore.','Nicotiana tabacum L. is listed as an accepted species. The record distinguishes the species name from botanical descriptions collected from different floras.']],
   [['Un livello di descrizione preciso','A specific level of description'],['Il nome della specie non è l’elenco degli ingredienti di un prodotto. Una denominazione botanica non documenta da sola la miscela, la lavorazione o l’origine di una confezione.','A species name is not a product’s ingredient list. A botanical name alone does not document a blend, processing method or pack’s origin.']]
  ]
 }
};

export const materialArticles=[
 {
  slug:'radica-non-semplice-radice',cluster:'materiali-e-storia',
  title:'Radica: perché «radice» non racconta tutta la struttura.',
  summary:'Il lignotubero e il confine fra nome comune, anatomia della pianta e documentazione di un oggetto.',
  guide:'radica-erica-arborea',sources:[lignotuberSource,ericaSource],
  sections:[
   ['Un nome comune non è una sezione anatomica.','La parola radica è familiare nel linguaggio degli oggetti. Per capire quale parte della pianta descrive, però, occorre passare dal nome comune all’anatomia. Lo studio di Paula e colleghi individua il lignotubero nella zona di transizione fra radice e fusto: una struttura che non coincide semplicemente con una radice sottile o con un tratto di tronco.'],
   ['Una struttura vivente prima di un materiale.','Il lignotubero contiene gemme dormienti e riserve di amido. Gli autori studiano il suo ruolo nella capacità di ricaccio delle piante dopo forti disturbi e includono Erica arborea fra le specie documentate. Questa prospettiva botanica spiega la struttura nel contesto della pianta, prima di considerarne gli impieghi artigianali.'],
   ['Due fonti, due domande.','La scheda Kew permette di controllare identità e classificazione della specie. Il lavoro di anatomia vegetale permette di verificare che cosa sia un lignotubero. Nessuna delle due fonti identifica automaticamente il materiale di una pipa fotografata: quell’attribuzione richiede una scheda dell’oggetto o altra documentazione specifica.']
  ]
 },
 {
  slug:'schiuma-mare-nome-minerale',cluster:'materiali-e-storia',
  title:'Schiuma di mare: quando il nome non descrive l’origine.',
  summary:'Un esempio di come usare un tesauro dei materiali senza confondere sinonimi, aspetto e identificazione.',
  guide:'schiuma-di-mare-sepiolite',sources:[sepioliteSource],
  sections:[
   ['Partire da un vocabolario controllato.','Un tesauro collega nomi diversi allo stesso concetto. Nella scheda del Ministerio de Cultura spagnolo, Meerschaum, Seafoam e i corrispondenti nomi della schiuma di mare rimandano alla sepiolite. Cercare attraverso i sinonimi aiuta a ritrovare una materia descritta in lingue differenti, senza dedurne la composizione dalle immagini evocate dal nome.'],
   ['Il nome e la materia sono piani diversi.','La classificazione come fillosilicato è un’informazione sul minerale. La parola schiuma non dimostra che un oggetto derivi dalla schiuma marina; allo stesso modo, una superficie chiara non dimostra che sia sepiolite. Il nome orienta la ricerca, mentre l’identificazione richiede elementi riferiti al materiale e all’esemplare.'],
   ['Leggere una scheda senza attribuire troppo.','Osservare una fotografia, leggere una descrizione mineralogica e consultare una scheda museale sono attività complementari. La foto documenta l’aspetto visibile; il vocabolario definisce il termine; la scheda dell’oggetto registra un’attribuzione. Tenere distinti questi livelli evita che una somiglianza diventi una certezza non documentata.']
  ]
 },
 {
  slug:'nomi-botanici-denominazioni-tabacco',cluster:'lessico-e-fonti',
  title:'Nome botanico e denominazione: quali informazioni contengono.',
  summary:'Come distinguere la classificazione di Nicotiana tabacum dalle informazioni relative a una miscela o a una confezione.',
  guide:'nicotiana-tabacum-botanica',sources:[nicotianaSource],
  sections:[
   ['Riconoscere il livello della domanda.','Quando una fonte riporta Nicotiana tabacum, sta indicando una specie. Se la domanda riguarda un ingrediente, una miscela o un procedimento di lavorazione, serve invece documentazione su quel contenuto preciso. Una classificazione botanica può essere corretta e, allo stesso tempo, non rispondere alla domanda sulla composizione di una confezione.'],
   ['Leggere la gerarchia, senza aggiungere significati.','Nella scheda Kew, Solanaceae è la famiglia e Nicotiana il genere. Il nome completo individua la specie all’interno di questa gerarchia. Non è una graduatoria: la posizione tassonomica non assegna un valore commerciale e non descrive un’esperienza personale o una caratteristica di una miscela.'],
   ['Associare ogni affermazione alla fonte adatta.','Un repertorio botanico è il riferimento per verificare un nome scientifico. Una scheda riferita a un prodotto serve a documentarne le informazioni specifiche. Per evitare equivoci, è utile formulare la domanda prima di scegliere la fonte: «quale specie?» e «quale composizione?» richiedono riscontri differenti.']
  ]
 }
];
