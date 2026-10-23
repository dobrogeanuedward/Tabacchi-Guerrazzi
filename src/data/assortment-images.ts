import {categoryPhotoFor} from './fototeca';
// Editorial category scenes; these images do not identify individual stock items.
export const categoryPhotos:Record<string,string>={cartoleria:'cartoleria',souvenir:'souvenir',feste:'auguri',telefono:'necessita',necessita:'necessita',dolciumi:'dolciumi',regali:'regali'};
const historicalAssortmentImage=(category:string,id='')=>['profumi','profumi-raptus'].includes(category)||id==='profumi-raptus'?'/images/studies/fragrance-paper-study-768.webp':category==='giochi'?'/images/games.webp':`/images/editorial/${['cerotti','labbra','capelli'].includes(id)?'cura':categoryPhotos[category]||'regali'}-desktop-800.webp`;

const categorySlugs:Record<string,string>={regali:'idee-regalo',profumi:'profumi-raptus',giochi:'giochi-e-giocattoli',souvenir:'souvenir-bologna',feste:'feste-e-compleanni',telefono:'accessori-telefono',necessita:'piccole-necessita'};
export const assortmentImage=(category:string,id='')=>categoryPhotoFor(categorySlugs[category]||category)?.src||historicalAssortmentImage(category,id);
