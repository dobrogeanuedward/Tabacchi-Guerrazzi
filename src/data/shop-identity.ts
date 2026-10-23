type Pair = [string, string];
type Question = [string, string, string, string];

export const shopIdentityDescription: Pair = [
 'Tabaccheria Guerrazzi di Angela è la tabaccheria e cartoleria gestita da Angela in Via Guerrazzi 10/F, 40125 Bologna: giochi, idee regalo e servizi al banco.',
 'Tabaccheria Guerrazzi di Angela is Angela’s tobacconist and stationery shop at Via Guerrazzi 10/F, 40125 Bologna, with toys, gift ideas and counter services.',
];

export const ploomStoreQuestion: Question = [
 'La scheda Ploom Store indica lo stesso negozio?',
 'Sì. La dicitura “PLOOM STORE Tabaccheria Cartoleria di Sgambati Angela”, presente in alcune schede online, si riferisce allo stesso punto vendita di Via Guerrazzi 10/F, Bologna. Il nome del negozio è Tabaccheria Guerrazzi di Angela; Ploom è il marchio a cui si riferisce quella dicitura.',
 'Does the Ploom Store listing refer to the same shop?',
 'Yes. The wording “PLOOM STORE Tabaccheria Cartoleria di Sgambati Angela” on some online listings refers to the same shop at Via Guerrazzi 10/F, Bologna. The shop’s name is Tabaccheria Guerrazzi di Angela; Ploom is the brand referred to in that listing.',
];

const currentNameQuestion: Question = [
 'Come si chiama oggi la tabaccheria di Via Guerrazzi 10/F?',
 'Il nome attuale è Tabaccheria Guerrazzi di Angela. Al civico 10/F di Via Guerrazzi, 40125 Bologna, c’è un unico punto vendita di tabaccheria, gestito da Angela. Questo è il sito del negozio e della gestione attuale.',
 'What is the current name of the tobacconist at Via Guerrazzi 10/F?',
 'Its current name is Tabaccheria Guerrazzi di Angela. There is one tobacconist’s shop at Via Guerrazzi 10/F, 40125 Bologna, run by Angela. This is the website of the shop and its current management.',
];

export const ploomSources = [
 {label:'Ploom Italia — manuali e avvertenze dei dispositivi',url:'https://www.ploom.it/it/manuale-e-avvertenze-prodotto'},
 {label:'Ploom Italia — dichiarazioni di conformità e identificazione dei modelli',url:'https://www.ploom.it/it/conformita'},
 {label:'Ploom Italia — contatti dell’Assistenza Clienti',url:'https://www.ploom.it/it/assistenza/contatti'},
];

// Applied after the category revisions so the current identity stays consistent
// in visible text, page descriptions and the matching FAQ structured data.
export function applyShopIdentityCopy(pages:Record<string,any>){
 Object.assign(pages['il-negozio'],{
  seoTitle:['Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F Bologna','Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F Bologna'],
  intro:[
   'Tabaccheria Guerrazzi di Angela è la tabaccheria e cartoleria gestita da Angela in Via Guerrazzi 10/F, a Bologna. Tra Via Santo Stefano e Strada Maggiore, ci trovi per una commissione, un gioco o un regalo da scegliere insieme.',
   'Tabaccheria Guerrazzi di Angela is Angela’s tobacconist and stationery shop at Via Guerrazzi 10/F, Bologna. Between Via Santo Stefano and Strada Maggiore, stop by for an errand, a toy or a gift to choose together.',
  ],
 });
 pages['il-negozio'].faqs=[currentNameQuestion,ploomStoreQuestion,...(pages['il-negozio'].faqs||[])];

 Object.assign(pages['contatti'],{
  seoTitle:['Contatti di Tabaccheria Guerrazzi di Angela, Bologna','Contact Tabaccheria Guerrazzi di Angela, Bologna'],
  intro:[
   'Tabaccheria Guerrazzi di Angela: Via Guerrazzi 10/F, 40125 Bologna. Qui trovi indirizzo, telefono e orari del negozio gestito da Angela, tra Via Santo Stefano e Strada Maggiore.',
   'Tabaccheria Guerrazzi di Angela: Via Guerrazzi 10/F, 40125 Bologna. Find the address, telephone number and hours of Angela’s shop, between Via Santo Stefano and Strada Maggiore.',
  ],
 });
 pages['contatti'].faqs=[currentNameQuestion,ploomStoreQuestion,...(pages['contatti'].faqs||[])];

 Object.assign(pages['storia-e-serrande'],{
  seoTitle:['Storia e gestione attuale di Tabaccheria Guerrazzi di Angela','History and current management of Tabaccheria Guerrazzi di Angela'],
  intro:[
   'La tabaccheria di Via Guerrazzi 10/F, a Bologna, oggi è gestita da Angela e porta il nome Tabaccheria Guerrazzi di Angela. La vetrina e le serrande ne raccontano il legame con la strada.',
   'The tobacconist at Via Guerrazzi 10/F, Bologna, is now run by Angela under the name Tabaccheria Guerrazzi di Angela. Its window and shutters connect it to the street.',
  ],
 });
 pages['storia-e-serrande'].sections.unshift([
  ['Il negozio oggi è di Angela.','Today, the shop is Angela’s.'],
  ['Marangoni Simone è un nome legato alla precedente gestione della tabaccheria a questo indirizzo. La gestione attuale è di Angela e il nome del negozio è Tabaccheria Guerrazzi di Angela. Le vecchie intestazioni appartengono alla storia del punto vendita; per indirizzo, telefono e orari attuali fai riferimento alla pagina Contatti di questo sito.',
   'Marangoni Simone is a name associated with the previous management of the tobacconist at this address. The shop is now run by Angela and its name is Tabaccheria Guerrazzi di Angela. Older listings belong to the history of the premises; use this website’s Contact page for the current address, telephone number and hours.'],
 ]);
 pages['storia-e-serrande'].related=['il-negozio','contatti'];

 pages['ploom']={
  theme:'utility',
  title:['Il nome della scheda, il dispositivo, l’assistenza.','The listing name, the device and support.'],
  seoTitle:['Ploom Store e Tabaccheria Guerrazzi di Angela: nomi e riferimenti','Ploom Store and Tabaccheria Guerrazzi di Angela: names and references'],
  intro:[
   'La dicitura Ploom Store di Sgambati Angela si riferisce a Tabaccheria Guerrazzi di Angela, in Via Guerrazzi 10/F, Bologna. Qui trovi il collegamento fra i nomi e i riferimenti informativi su Ploom AURA e sull’assistenza del produttore.',
   'The Ploom Store di Sgambati Angela listing refers to Tabaccheria Guerrazzi di Angela at Via Guerrazzi 10/F, Bologna. This page explains the names and provides information on Ploom AURA and the manufacturer’s support service.',
  ],
  sections:[
   [['Un solo negozio, in Via Guerrazzi 10/F.','One shop, at Via Guerrazzi 10/F.'],
    ['Tabaccheria Guerrazzi di Angela è il nome del negozio gestito da Angela. “PLOOM STORE Tabaccheria Cartoleria di Sgambati Angela” è una dicitura che compare in alcune schede dello stesso punto vendita: non identifica una seconda tabaccheria al civico 10/F.',
     'Tabaccheria Guerrazzi di Angela is the name of Angela’s shop. “PLOOM STORE Tabaccheria Cartoleria di Sgambati Angela” is wording found on some listings of the same premises; it does not identify a second tobacconist at number 10/F.']],
   [['Il dispositivo: Ploom AURA.','The device: Ploom AURA.'],
    ['Ploom AURA è un dispositivo per il riscaldamento del tabacco. AURA è il nome del modello, mentre Ploom è il marchio. Per identificazione, istruzioni e avvertenze consulta la documentazione del produttore riferita al modello esatto.',
     'Ploom AURA is a tobacco-heating device. AURA is the model name and Ploom is the brand. For identification, instructions and warnings, use the manufacturer’s documentation for the exact model.']],
   [['Il servizio Assistenza Clienti Ploom.','Ploom Customer Care.'],
    ['L’Assistenza Clienti Ploom è il servizio del produttore per le richieste sul dispositivo. Per malfunzionamenti, garanzia e pratiche di assistenza usa i contatti ufficiali Ploom collegati in questa pagina. Le procedure e le condizioni vanno verificate con quel servizio.',
     'Ploom Customer Care is the manufacturer’s service for device enquiries. For faults, warranty questions and support cases, use the official Ploom contacts linked on this page. Confirm procedures and conditions with that service.']],
  ],
  sources:ploomSources,
  faqs:[ploomStoreQuestion,
   ['Ploom Store è il nome del negozio?',
    'Il nome del negozio è Tabaccheria Guerrazzi di Angela. Ploom Store è la dicitura presente in alcune schede online dello stesso punto vendita di Via Guerrazzi 10/F.',
    'Is Ploom Store the shop’s name?',
    'The shop’s name is Tabaccheria Guerrazzi di Angela. Ploom Store is wording used by some online listings of the same premises at Via Guerrazzi 10/F.'],
   ['A chi mi rivolgo per assistenza su Ploom AURA?',
    'Per guasti, garanzia e apertura di una pratica, consulta l’Assistenza Clienti Ploom attraverso il collegamento ufficiale in questa pagina. Per i recapiti del negozio di Angela consulta invece la pagina Contatti.',
    'Who handles support for Ploom AURA?',
    'For faults, warranty questions and opening a support case, use Ploom Customer Care through the official link on this page. For Angela’s shop details, use our Contact page.'],
  ],
  related:['il-negozio','contatti'],
 };
}
