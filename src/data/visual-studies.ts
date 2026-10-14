export type VisualStudyLang = 'it' | 'en';

export type VisualStudyId =
  | 'archive-folio'
  | 'botanical-erica-study'
  | 'mineral-sepiolite-study'
  | 'travel-bologna-map'
  | 'gifting-still-life'
  | 'stationery-paper-study'
  | 'fragrance-paper-study'
  | 'service-paper-study'
  | 'celebration-paper-study'
  | 'play-shape-study';

type LocalizedStudyText = Record<VisualStudyLang, string>;

export interface VisualStudy {
  index: string;
  title: LocalizedStudyText;
  alt: LocalizedStudyText;
  caption: LocalizedStudyText;
  theme: 'archive' | 'botanical' | 'mineral' | 'travel' | 'gifting' | 'stationery' | 'fragrance' | 'service' | 'celebration' | 'play';
  path: string;
  preview: string;
  decorative: boolean;
  width: 1536;
  height: 1024;
}

const files = (id: VisualStudyId) => ({
  path: `/images/studies/${id}.webp`,
  preview: `/images/studies/${id}-768.webp`,
  width: 1536 as const,
  height: 1024 as const,
});

export const visualStudies: Record<VisualStudyId, VisualStudy> = {
  'service-paper-study': {
    ...files('service-paper-study'),index:'08',theme:'service',decorative:true,
    title:{it:'Servizi',en:'Services'},
    alt:{it:'Telefono e fogli bianchi.',en:'Phone and blank sheets.'},
    caption:{it:'Un numero, un documento, una commissione.',en:'A number, a document, an errand.'},
  },
  'celebration-paper-study': {
    ...files('celebration-paper-study'),index:'09',theme:'celebration',decorative:true,
    title:{it:'Occasioni',en:'Occasions'},
    alt:{it:'Biglietti bianchi, rosetta di carta e nastro blu.',en:'Blank cards, a paper rosette and a blue ribbon.'},
    caption:{it:'Carta, colori e un pensiero da completare.',en:'Paper, colours and a gift to complete.'},
  },
  'play-shape-study': {
    ...files('play-shape-study'),index:'10',theme:'play',decorative:true,
    title:{it:'Gioco',en:'Play'},
    alt:{it:'Forme geometriche generiche in legno e colori opachi, su carta avorio.',en:'Generic geometric forms in wood and matte colours on ivory paper.'},
    caption:{it:'Forme e colori che invitano a giocare.',en:'Shapes and colours that invite play.'},
  },
  'fragrance-paper-study': {
    ...files('fragrance-paper-study'),
    index: '07',
    title: { it: 'Profumeria', en: 'Perfumery' },
    alt: {
      it: 'Vetro ambrato e strisce di carta per profumeria.',
      en: 'Amber glass and paper scent blotters.',
    },
    caption:{it:'Vetro, carta e riflessi.',en:'Glass, paper and reflections.'},
    theme: 'fragrance',
    decorative: false,
  },
  'archive-folio': {
    ...files('archive-folio'),
    index: '01',
    title: { it: 'Archivio', en: 'Archive' },
    alt: { it: '', en: '' },
    caption:{it:'Carta, nomi e storie da leggere.',en:'Paper, names and stories to read.'},
    theme: 'archive',
    decorative: true,
  },
  'botanical-erica-study': {
    ...files('botanical-erica-study'),
    index: '02',
    title: { it: 'Botanica', en: 'Botany' },
    alt: {
      it: 'Studio illustrativo ispirato a Erica arborea, con ramo e dettaglio schematico della base.',
      en: 'Illustrative study inspired by Erica arborea, with a branch and a schematic detail of its base.',
    },
    caption:{it:'L’Erica arborea e la materia del legno.',en:'Erica arborea and the material of wood.'},
    theme: 'botanical',
    decorative: false,
  },
  'mineral-sepiolite-study': {
    ...files('mineral-sepiolite-study'),
    index: '03',
    title: { it: 'Materia', en: 'Material' },
    alt: {
      it: 'Studio illustrativo di un frammento chiaro su carta avorio.',
      en: 'Illustrative study of a pale fragment on ivory paper.',
    },
    caption:{it:'La materia grezza e la superficie lavorata.',en:'Raw material and a worked surface.'},
    theme: 'mineral',
    decorative: false,
  },
  'travel-bologna-map': {
    ...files('travel-bologna-map'),
    index: '04',
    title: { it: 'Bologna', en: 'Bologna' },
    alt: {
      it: 'Illustrazione editoriale di una valigia e di portici.',
      en: 'Editorial illustration of a suitcase and porticoes.',
    },
    caption:{it:'Una passeggiata tra i portici di Bologna.',en:'A walk beneath Bologna’s porticoes.'},
    theme: 'travel',
    decorative: false,
  },
  'gifting-still-life': {
    ...files('gifting-still-life'),
    index: '05',
    title: { it: 'Regali', en: 'Gifts' },
    alt: {
      it: 'Composizione illustrata di un pacchetto e piccoli oggetti generici per un regalo.',
      en: 'Illustrated composition of a parcel and small generic gift objects.',
    },
    caption:{it:'Piccole cose, scelte pensando a qualcuno.',en:'Little things, chosen with someone in mind.'},
    theme: 'gifting',
    decorative: false,
  },
  'stationery-paper-study': {
    ...files('stationery-paper-study'),
    index: '06',
    title: { it: 'Carta', en: 'Paper' },
    alt: {
      it: 'Fogli di carta e una matita.',
      en: 'Sheets of paper and a pencil.',
    },
    caption:{it:'Una pagina, una penna, la prossima idea.',en:'A page, a pen, the next idea.'},
    theme: 'stationery',
    decorative: false,
  },
};

// Photographs used by the botanical and mineral reading pages.
Object.assign(visualStudies['botanical-erica-study'],{path:'/images/quaderni/botanica-erica.webp',preview:'/images/quaderni/botanica-erica-768.webp',alt:{it:'Ramo fiorito di erica e legno grezzo su carta avorio',en:'Flowering heather sprig and rough wood on ivory paper'},caption:{it:'Un ramo fiorito e la materia del legno.',en:'A flowering sprig and the material of wood.'}});
Object.assign(visualStudies['mineral-sepiolite-study'],{path:'/images/quaderni/materia-sepiolite.webp',preview:'/images/quaderni/materia-sepiolite-768.webp',alt:{it:'Frammento minerale chiaro e blocco levigato su carta avorio',en:'Pale mineral fragment and smooth block on ivory paper'},caption:{it:'La superficie grezza accanto a quella lavorata.',en:'A rough surface alongside a worked one.'}});
Object.assign(visualStudies['archive-folio'],{path:'/images/quaderni/carta-e-nomi.webp',preview:'/images/quaderni/carta-e-nomi-768.webp',alt:{it:'Libro aperto, carta e penna blu',en:'Open book, paper and blue pen'},decorative:false});
