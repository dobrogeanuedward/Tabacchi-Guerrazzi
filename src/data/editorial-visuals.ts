import {visualStudies, type VisualStudyId} from './visual-studies';
import {commonsPhotographs,type CommonsPhotograph} from './commons-photography';

type Pair = [string, string];
export type EditorialVisual = {src:string;preview?:string;previewWidth?:number;width:number;height:number;label:Pair;caption:Pair;alt:Pair;credit?:CommonsPhotograph};
const documentary=(id:string,label:Pair):EditorialVisual=>{const photo=commonsPhotographs[id];return {src:photo.path,preview:photo.preview,previewWidth:photo.previewWidth,width:photo.width,height:photo.height,label,caption:photo.caption,alt:photo.alt,credit:photo};};
const study=(id:VisualStudyId):EditorialVisual=>{
 const item=visualStudies[id];
 return {src:item.path,preview:item.preview,width:item.width,height:item.height,label:[item.title.it,item.title.en],caption:[item.caption.it,item.caption.en],alt:[item.alt.it,item.alt.en]};
};
const photograph=(id:string,label:Pair,caption:Pair,alt:Pair,folder='quaderni'):EditorialVisual=>({src:`/images/${folder}/${id}.webp`,preview:`/images/${folder}/${id}-${folder==='catalogo'?720:768}.webp`,width:folder==='catalogo'?1440:1536,height:folder==='catalogo'?960:1024,label,caption,alt});
export const leafVisual=photograph('foglia-struttura',['La foglia e la forma','The leaf and the form'],['Una foglia essiccata e un sigaro, per osservare pieghe, venature e struttura.','A dried leaf and a cigar: folds, veins and structure.'],['Foglia essiccata e sigaro senza marchio su carta avorio','Dried leaf and unbranded cigar on ivory paper']);
export const namesVisual=photograph('carta-e-nomi',['Nomi e storie','Names and stories'],['Un libro aperto, carta e spazio per le parole.','An open book, paper and space for words.'],['Libro aperto, penna blu e fogli su un tavolo di legno','Open book, blue pen and paper on a wooden table']);
const botany=study('botanical-erica-study');
const mineral=study('mineral-sepiolite-study');
const travel:EditorialVisual={src:'/images/hero/portico.webp',preview:'/images/hero/portico-960.webp',width:1672,height:940,label:['Sotto i portici','Under the porticoes'],caption:['Una passeggiata in Via Guerrazzi, tra Santo Stefano e Strada Maggiore.','A walk on Via Guerrazzi, between Santo Stefano and Strada Maggiore.'],alt:['Portico e vetrina in Via Guerrazzi','Portico and shopfront on Via Guerrazzi']};
const paper=photograph('quaderni',['Carta e scrittura','Paper and writing'],['Quaderni, pagine e nuove idee.','Notebooks, pages and new ideas.'],['Quaderni su carta avorio','Notebooks on ivory paper'],'catalogo');
const gift=photograph('piccoli-regali',['Un piccolo pensiero','A little gift'],['La scelta comincia da chi lo riceve.','The choice begins with its recipient.'],['Piccoli oggetti regalo su un tavolo chiaro','Little gifts on a pale table'],'catalogo');
const play=photograph('giochi',['Il tempo del gioco','Time to play'],['Colori e piccoli oggetti che accendono la curiosità.','Colours and little objects that spark curiosity.'],['Giochi colorati su carta chiara','Colourful toys on pale paper'],'catalogo');
const services=study('service-paper-study');
const celebration=photograph('auguri',['Le parole sono tue','The words are yours'],['Un biglietto per dire qualcosa di personale.','A card for something personal.'],['Biglietti di auguri illustrati e buste','Illustrated greeting cards and envelopes'],'catalogo');
const phone=photograph('cavi',['Il collegamento giusto','The right connection'],['Cavi e connettori da guardare da vicino.','Cables and connectors to look at closely.'],['Cavi USB arrotolati su carta chiara','Coiled USB cables on pale paper'],'catalogo');
const souvenir=photograph('calamite',['Un ricordo di Bologna','A Bologna keepsake'],['Le torri e i giorni passati qui.','The towers and the days spent here.'],['Calamite con soggetti di Bologna','Magnets with Bologna designs'],'catalogo');
export const clusterVisuals:Record<string,EditorialVisual>={servizi:services,regali:gift,giochi:play,quartiere:travel,'informazione-tabacco':leafVisual,'materiali-e-storia':botany,'lessico-e-fonti':namesVisual};
const guideVisuals:Record<string,EditorialVisual>={
 'ricariche-telefoniche':phone,'bollettini-e-pagopa':services,'scegliere-un-regalo':gift,'scegliere-un-gioco':play,'marchi-trattati':paper,'raggiungere-il-negozio':travel,
 'sigari-termini-informazioni':leafVisual,'tabacco-minori-documenti':namesVisual,'tabacco-confezioni-avvertenze':namesVisual,'radica-erica-arborea':botany,'schiuma-di-mare-sepiolite':mineral,'pipe-materiali-storia':namesVisual,'sigaro-struttura-termini':leafVisual,'nicotiana-tabacum-botanica':leafVisual,'tipologie-di-sigaro':leafVisual,'confrontare-schede-sigari':namesVisual
};
const articleVisuals:Record<string,EditorialVisual>={
 'ricarica-telefonica-cosa-preparare':phone,'regalo-compleanno-da-dove-partire':celebration,'piccolo-pensiero-occasione':souvenir,'scegliere-regalo-ultimi-minuti':gift,
 'guerrazzi-via-guerrazzi-bologna':travel,'vetrina-guerrazzi-piccole-scelte':paper,'angela-attenzione-negozio':travel,
 'la-aurora-storia-santiago-leone':documentary('la-aurora-factory',['Santiago de los Caballeros','Santiago de los Caballeros']),'tornabuoni-nome-rinascimento-sansepolcro':namesVisual,
 'sigari-sigaretti-informazioni-termini':leafVisual,'tabacco-18-anni-conferma-documento':namesVisual,'tabacco-confezioni-fonti-informazione':namesVisual,'radica-non-semplice-radice':botany,'schiuma-mare-nome-minerale':mineral,'nomi-botanici-denominazioni-tabacco':leafVisual,
 'deposito-bagagli-santo-stefano-strada-maggiore-bologna':travel,'regali-cartoleria-santo-stefano-aldrovandi-bologna':paper,'commissioni-san-petronio-vecchio-strada-maggiore':services
};
export const visualForGuide=(slug:string)=>guideVisuals[slug]||paper;
export const visualForArticle=(slug:string,cluster:string)=>articleVisuals[slug]||clusterVisuals[cluster]||namesVisual;
export const clusterIntroductions:Record<string,string>={
 servizi:'Una ricarica, un avviso, una valigia. Le risposte per organizzare la giornata.',regali:'Un’occasione e una persona a cui pensare. Da qui nascono le idee.',giochi:'Regali, viaggi e piccoli momenti da dedicare al gioco.',quartiere:'Da Santo Stefano ad Aldrovandi, le strade intorno alla bottega.',
 'informazione-tabacco':'Le parole del sigaro e le informazioni sulle confezioni.','materiali-e-storia':'Dalle piante ai minerali: storie nascoste nella materia.','lessico-e-fonti':'I nomi raccontano. Proviamo a leggerli da vicino.'
};
