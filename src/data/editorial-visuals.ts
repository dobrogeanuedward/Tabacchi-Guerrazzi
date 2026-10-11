import {visualStudies, type VisualStudyId} from './visual-studies';

type Pair = [string, string];
export type EditorialVisual = {
  src: string;
  preview?: string;
  width: number;
  height: number;
  label: Pair;
  caption: Pair;
  alt: Pair;
};

const study = (id: VisualStudyId): EditorialVisual => {
  const item = visualStudies[id];
  return {src:item.path,preview:item.preview,width:item.width,height:item.height,label:[item.title.it,item.title.en],caption:[item.caption.it,item.caption.en],alt:[item.alt.it,item.alt.en]};
};

const archive = study('archive-folio');
const paper = study('stationery-paper-study');
const gift = study('gifting-still-life');
const travel = study('travel-bologna-map');
const botany = study('botanical-erica-study');
const mineral = study('mineral-sepiolite-study');
const services = study('service-paper-study');
const celebration = study('celebration-paper-study');
const play = study('play-shape-study');

export const clusterVisuals: Record<string, EditorialVisual> = {
  servizi:services,regali:gift,giochi:play,quartiere:travel,
  'informazione-tabacco':archive,'materiali-e-storia':botany,'lessico-e-fonti':archive
};

const guideVisuals: Record<string, EditorialVisual> = {
  'ricariche-telefoniche':services,'bollettini-e-pagopa':services,
  'scegliere-un-regalo':gift,'scegliere-un-gioco':play,
  'marchi-trattati':archive,'raggiungere-il-negozio':travel,
  'sigari-termini-informazioni':archive,'tabacco-minori-documenti':archive,
  'tabacco-confezioni-avvertenze':archive,'radica-erica-arborea':botany,
  'schiuma-di-mare-sepiolite':mineral,'pipe-materiali-storia':archive,
  'sigaro-struttura-termini':archive,'nicotiana-tabacum-botanica':archive
};

export const visualForGuide = (slug: string) => guideVisuals[slug] || paper;
export const visualForArticle = (slug: string, cluster: string) => {
  if(slug==='radica-non-semplice-radice') return botany;
  if(slug==='schiuma-mare-nome-minerale') return mineral;
  if(slug==='regalo-compleanno-da-dove-partire'||slug==='scegliere-gioco-insieme') return celebration;
  return clusterVisuals[cluster] || archive;
};

export const clusterIntroductions: Record<string,string> = {
  servizi:'Documenti, numeri e controlli utili prima di una commissione.',
  regali:'Occasioni e preferenze per arrivare con una richiesta più chiara.',
  giochi:'Età, interessi e informazioni da leggere sulle confezioni.',
  quartiere:'Indirizzo, vetrina e persone: i riferimenti del negozio.',
  'informazione-tabacco':'Lessico, confezioni e maggiore età: informazioni documentate per adulti.',
  'materiali-e-storia':'Botanica, minerali e documentazione degli oggetti.',
  'lessico-e-fonti':'Nomi e fonti: capire quali informazioni contiene un termine.'
};
