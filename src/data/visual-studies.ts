export type VisualStudyLang = 'it' | 'en';

export type VisualStudyId =
  | 'archive-folio'
  | 'botanical-erica-study'
  | 'mineral-sepiolite-study'
  | 'travel-bologna-map'
  | 'gifting-still-life'
  | 'stationery-paper-study';

type LocalizedStudyText = Record<VisualStudyLang, string>;

export interface VisualStudy {
  index: string;
  title: LocalizedStudyText;
  alt: LocalizedStudyText;
  caption: LocalizedStudyText;
  theme: 'archive' | 'botanical' | 'mineral' | 'travel' | 'gifting' | 'stationery';
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
  'archive-folio': {
    ...files('archive-folio'),
    index: '01',
    title: { it: 'Archivio', en: 'Archive' },
    alt: { it: '', en: '' },
    caption: {
      it: 'Carte e raccoglitore in una composizione editoriale per l’archivio delle denominazioni.',
      en: 'Cards and a folio in an editorial composition for the name archive.',
    },
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
    caption: {
      it: 'Erica arborea: studio botanico illustrativo, con dettaglio schematico della base. Non è la fotografia di un esemplare.',
      en: 'Erica arborea: an illustrative botanical study, with a schematic detail of its base. This is not a specimen photograph.',
    },
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
    caption: {
      it: 'Materia chiara, opaca e gessosa: studio illustrativo, non fotografia di un campione autenticato di sepiolite.',
      en: 'Pale, opaque, chalky material: an illustrative study, not a photograph of an authenticated sepiolite specimen.',
    },
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
    caption: {
      it: 'Una valigia e il ritmo dei portici. Illustrazione evocativa, senza indicazioni geografiche.',
      en: 'A suitcase and the rhythm of porticoes. An evocative illustration without geographic directions.',
    },
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
    caption: {
      it: 'Una composizione editoriale dedicata ai regali. Gli oggetti non identificano articoli specifici.',
      en: 'An editorial composition about gifts. The objects do not identify specific products.',
    },
    theme: 'gifting',
    decorative: false,
  },
  'stationery-paper-study': {
    ...files('stationery-paper-study'),
    index: '06',
    title: { it: 'Carta', en: 'Paper' },
    alt: {
      it: 'Studio illustrativo di fogli, pieghe della carta e una matita.',
      en: 'Illustrative study of sheets, paper folds and a pencil.',
    },
    caption: {
      it: 'Carta, pieghe e strumenti di scrittura in uno studio editoriale. Non rappresenta un articolo specifico.',
      en: 'Paper, folds and writing tools in an editorial study. This does not depict a specific product.',
    },
    theme: 'stationery',
    decorative: false,
  },
};
