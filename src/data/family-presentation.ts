type Pair = [string, string];

export interface FamilyPresentation {
  theme: string;
  material: 'paper' | 'blue' | 'terracotta';
  treatment: 'paper' | 'city' | 'celebration' | 'utility' | 'sweets' | 'gift' | 'play' | 'fragrance';
  page: string;
  art: string;
  focus: Pair;
  checkNotes: [Pair, Pair, Pair];
}

// These are reading aids for a category, never specifications of an individual item.
export const familyPresentations: Record<string, FamilyPresentation> = {
  cartoleria: {
    theme: 'utility', material: 'paper', treatment: 'paper', page: 'cartoleria', art: 'stationery-ink',
    focus: ['Per scrivere, raccogliere, organizzare.', 'For writing, collecting and organising.'],
    checkNotes: [
      ['Tieni a mente il formato e la rigatura che usi ogni giorno.', 'Keep your everyday size and ruling in mind.'],
      ['Per scuola, studio o lavoro: raccontaci come lo userai.', 'For school, studying or work: tell us how you will use it.'],
      ['Una foto dell’articolo che usi può aiutarci a ritrovarlo.', 'A photo of the item you use can help us find it.'],
    ],
  },
  souvenir: {
    theme: 'bottega', material: 'terracotta', treatment: 'city', page: 'souvenir-bologna', art: 'souvenir-ink',
    focus: ['Un piccolo ricordo di Bologna.', 'A small reminder of Bologna.'],
    checkNotes: [
      ['Scegli il soggetto che ti ricorda la tua passeggiata a Bologna.', 'Choose the design that brings back your walk in Bologna.'],
      ['Guarda forma e dimensioni da vicino.', 'Look at the shape and size closely.'],
      ['Per te o da regalare: pensa a dove lo porterai.', 'For yourself or as a gift: think about where it will go.'],
    ],
  },
  feste: {
    theme: 'gioco', material: 'paper', treatment: 'celebration', page: 'feste-e-compleanni', art: 'party-ink',
    focus: ['Il dettaglio che accompagna l’occasione.', 'A finishing touch for the occasion.'],
    checkNotes: [
      ['Pensa all’occasione e ai colori della festa.', 'Think about the occasion and party colours.'],
      ['Se scegli una busta, porta le misure del regalo.', 'Bring the gift’s measurements when choosing a bag.'],
      ['Apri il biglietto e guarda lo spazio per il tuo messaggio.', 'Open the card and look at the space for your message.'],
    ],
  },
  telefono: {
    theme: 'utility', material: 'blue', treatment: 'utility', page: 'accessori-telefono', art: 'phone-ink',
    focus: ['Partiamo dal tuo telefono.', 'Start with your phone.'],
    checkNotes: [
      ['Porta il telefono o una foto delle porte.', 'Bring the phone or a photo of its ports.'],
      ['Guardiamo insieme entrambe le estremità del cavo.', 'Look at both ends of the cable together.'],
      ['Per un power bank, guarda capacità, porte e cavo incluso.', 'For a power bank, look at capacity, ports and the included cable.'],
    ],
  },
  necessita: {
    theme: 'utility', material: 'blue', treatment: 'utility', page: 'piccole-necessita', art: 'essentials-ink',
    focus: ['Quella piccola cosa che ti manca.', 'That little thing you are missing.'],
    checkNotes: [
      ['Raccontaci per cosa ti serve.', 'Tell us what you need it for.'],
      ['Una misura o una foto possono chiarire la scelta.', 'A measurement or photo can make the choice clearer.'],
      ['Per colle e nastri, indica il materiale su cui lavorerai.', 'For glue and tape, tell us the material you will work on.'],
    ],
  },
  dolciumi: {
    theme: 'regalo', material: 'paper', treatment: 'sweets', page: 'dolciumi', art: 'sweets-ink',
    focus: ['Il gusto si sceglie, l’etichetta si legge.', 'Choose the flavour, read the label.'],
    checkNotes: [
      ['Scegli il gusto che preferisci, o prova a guardare gli altri.', 'Choose your favourite flavour or browse the others.'],
      ['Ingredienti e allergeni sono sull’etichetta.', 'Ingredients and allergens are on the label.'],
      ['Una confezione per te o qualcosa da condividere?', 'A pack for you or something to share?'],
    ],
  },
  regali: {
    theme: 'regalo', material: 'paper', treatment: 'gift', page: 'idee-regalo', art: 'gift-ink',
    focus: ['Prima la persona, poi il dettaglio.', 'The person first, then the detail.'],
    checkNotes: [
      ['Parti dalla persona e dall’occasione per restringere la ricerca.', 'Start with the person and the occasion to narrow down your search.'],
      ['Guarda l’oggetto da vicino e immagina chi lo riceverà.', 'Look closely at the object and imagine its recipient.'],
      ['Un biglietto può aggiungere le tue parole.', 'A card adds your own words.'],
    ],
  },
  giochi: {
    theme: 'gioco', material: 'blue', treatment: 'play', page: 'giochi-e-giocattoli', art: 'play-ink',
    focus: ['Età, interessi, occasioni per giocare.', 'Age, interests and occasions to play.'],
    checkNotes: [
      ['Leggi l’età indicata dal produttore e le avvertenze sul singolo gioco.', 'Read the manufacturer’s age guidance and warnings on the individual toy or game.'],
      ['Pensa a dove e con chi verrà usato; confronta le istruzioni.', 'Think about where and with whom it will be used; compare the instructions.'],
      ['Guarda i componenti e lo spazio necessario per giocare.', 'Look at the pieces and space needed to play.'],
    ],
  },
  profumi: {
    theme: 'profumo', material: 'paper', treatment: 'fragrance', page: 'profumi-raptus', art: 'gift-ink',
    focus: ['Nome, formato e preferenza personale.', 'Name, size and personal preference.'],
    checkNotes: [
      ['Porta il nome della fragranza o una foto del flacone.', 'Bring the fragrance name or a photo of the bottle.'],
      ['Per un regalo, raccontaci i gusti di chi lo riceverà.', 'For a gift, tell us the recipient’s preferences.'],
      ['Guardiamo insieme fragranze e formati.', 'Look at fragrances and sizes together.'],
    ],
  },
};

familyPresentations.alimentari={theme:'regalo',material:'paper',treatment:'sweets',page:'sale-di-cervia',art:'gift-ink',focus:['Un formato per la tua cucina.','A format for your kitchen.'],checkNotes:[['Scegli fra sale fino, Salfiore e sale alle erbe.','Choose fine salt, Salfiore or herb salt.'],['Leggi gli ingredienti della confezione.','Read the pack ingredients.'],['Confronta il formato e le indicazioni di conservazione.','Compare size and storage guidance.']]};
export const familyPresentationFor = (category: string): FamilyPresentation =>
  familyPresentations[category] || familyPresentations.regali;
