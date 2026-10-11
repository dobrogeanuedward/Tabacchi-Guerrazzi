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
      ['Confronta il dettaglio indicato sul singolo articolo: una famiglia può riunire formati diversi.', 'Compare the detail on the individual item: one family may include different sizes.'],
      ['Parti dall’uso che ne farai e leggi le indicazioni della confezione.', 'Start with its intended use and read the information on the pack.'],
      ['Controlla cosa comprende la confezione, senza dedurlo dall’illustrazione di categoria.', 'Check what the pack contains rather than inferring it from the category illustration.'],
    ],
  },
  souvenir: {
    theme: 'bottega', material: 'terracotta', treatment: 'city', page: 'souvenir-bologna', art: 'souvenir-ink',
    focus: ['Un piccolo ricordo di Bologna.', 'A small reminder of Bologna.'],
    checkNotes: [
      ['Guarda il soggetto sul singolo articolo; la pagina non elenca tutte le varianti.', 'Look at the design on the individual item; this page does not list every variant.'],
      ['Confronta le dimensioni reali prima di scegliere.', 'Compare the actual dimensions before choosing.'],
      ['Verifica materiale e finitura direttamente sull’oggetto.', 'Check the material and finish on the object itself.'],
    ],
  },
  feste: {
    theme: 'gioco', material: 'paper', treatment: 'celebration', page: 'feste-e-compleanni', art: 'party-ink',
    focus: ['Il dettaglio che accompagna l’occasione.', 'A finishing touch for the occasion.'],
    checkNotes: [
      ['Tieni presente l’occasione e confronta le varianti sul singolo articolo.', 'Keep the occasion in mind and compare the variants on each item.'],
      ['Misure e caratteristiche si leggono sulla confezione o si verificano dal vivo.', 'Read sizes and features on the pack or check them in person.'],
      ['Leggi contenuto della confezione, istruzioni e avvertenze pertinenti.', 'Read the pack contents and any relevant instructions and warnings.'],
    ],
  },
  telefono: {
    theme: 'utility', material: 'blue', treatment: 'utility', page: 'accessori-telefono', art: 'phone-ink',
    focus: ['Il riferimento giusto parte dal dispositivo.', 'The right reference starts with your device.'],
    checkNotes: [
      ['Porta il modello del dispositivo e confronta il collegamento richiesto.', 'Bring your device model and compare the connection it requires.'],
      ['Leggi le specifiche del singolo articolo: l’aspetto non conferma la compatibilità.', 'Read the individual specifications: appearance does not establish compatibility.'],
      ['Controlla le istruzioni e cosa è incluso nella confezione.', 'Check the instructions and what is included in the pack.'],
    ],
  },
  necessita: {
    theme: 'utility', material: 'blue', treatment: 'utility', page: 'piccole-necessita', art: 'essentials-ink',
    focus: ['Una necessità concreta, dettagli da verificare.', 'A practical need, details to check.'],
    checkNotes: [
      ['Descrivi l’uso previsto e confrontalo con le indicazioni del singolo articolo.', 'Describe the intended use and compare it with the individual item’s instructions.'],
      ['Controlla formato e caratteristiche sulla confezione.', 'Check the size and features on the pack.'],
      ['Leggi istruzioni e avvertenze; il nome della famiglia non le sostituisce.', 'Read instructions and warnings; the family name does not replace them.'],
    ],
  },
  dolciumi: {
    theme: 'regalo', material: 'paper', treatment: 'sweets', page: 'dolciumi', art: 'sweets-ink',
    focus: ['Il gusto si sceglie, l’etichetta si legge.', 'Choose the flavour, read the label.'],
    checkNotes: [
      ['Confronta la variante sulla confezione precisa, senza estenderla a tutta la marca.', 'Compare the variant on the specific pack rather than applying it to the entire brand.'],
      ['Per ingredienti e allergeni fai riferimento all’etichetta del singolo prodotto.', 'Refer to the individual label for ingredients and allergens.'],
      ['Controlla formato e quantità indicati sul pacchetto.', 'Check the size and quantity stated on the pack.'],
    ],
  },
  regali: {
    theme: 'regalo', material: 'paper', treatment: 'gift', page: 'idee-regalo', art: 'gift-ink',
    focus: ['Prima la persona, poi il dettaglio.', 'The person first, then the detail.'],
    checkNotes: [
      ['Parti dalla persona e dall’occasione per restringere la ricerca.', 'Start with the person and the occasion to narrow down your search.'],
      ['Confronta misure e caratteristiche sull’oggetto preciso.', 'Compare sizes and features on the specific object.'],
      ['Verifica confezione e dettagli della proposta che stai considerando.', 'Check the packaging and details of the item you are considering.'],
    ],
  },
  giochi: {
    theme: 'gioco', material: 'blue', treatment: 'play', page: 'giochi-e-giocattoli', art: 'play-ink',
    focus: ['Età, interessi, occasioni per giocare.', 'Age, interests and occasions to play.'],
    checkNotes: [
      ['Leggi l’età indicata dal produttore e le avvertenze sul singolo gioco.', 'Read the manufacturer’s age guidance and warnings on the individual toy or game.'],
      ['Pensa a dove e con chi verrà usato; confronta le istruzioni.', 'Think about where and with whom it will be used; compare the instructions.'],
      ['Verifica cosa contiene la confezione prima della scelta.', 'Check what the box contains before choosing.'],
    ],
  },
  profumi: {
    theme: 'profumo', material: 'paper', treatment: 'fragrance', page: 'profumi-raptus', art: 'gift-ink',
    focus: ['Nome, formato e preferenza personale.', 'Name, size and personal preference.'],
    checkNotes: [
      ['Usa la denominazione completa: il nome distingue il riferimento che cerchi.', 'Use the full name to identify the fragrance you are looking for.'],
      ['I formati variano fra le fragranze; controlla il riferimento preciso.', 'Sizes vary between fragrances; check the specific reference.'],
      ['Leggi le informazioni sulla confezione e le istruzioni del produttore.', 'Read the pack information and the manufacturer’s instructions.'],
    ],
  },
};

export const familyPresentationFor = (category: string): FamilyPresentation =>
  familyPresentations[category] || familyPresentations.regali;
