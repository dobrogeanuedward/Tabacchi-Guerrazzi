import {collectionPhotoById} from './collection-october';
import {familyPhotosFor,withHistoricalPhoto,type Photo} from './fototeca';
/** Photographic assets are independent from stock and price records. */
export const historicalCatalogPhotoFor=(id:string)=>{
 const path=collectionPhotoById[id]?`/images/collection/${collectionPhotoById[id]}`:`/images/catalogo/${id}`;
 return {src:`${path}.webp`,srcset:`${path}-360.webp 360w, ${path}-720.webp 720w, ${path}.webp 1440w`,width:1440,height:960,alt:id==='profumi-raptus'?['Composizione illustrativa sul tema del profumo','Illustrative composition on the theme of fragrance'] as [string,string]:['bambole-disney','personaggi-marvel'].includes(id)?['Vetrina dei giochi, con personaggi e confezioni','Toy window with characters and packaged toys'] as [string,string]:undefined};
};
export const catalogPhotoFor=(id:string)=>{
 const photo=familyPhotosFor(id)[0];
 return photo?{...photo,alt:[photo.alt.it,photo.alt.en] as [string,string]}:historicalCatalogPhotoFor(id);
};
export const catalogGalleryFor=(id:string,alt:[string,string])=>{
 const historical=historicalCatalogPhotoFor(id);
 return withHistoricalPhoto(familyPhotosFor(id),{...historical,alt:{it:historical.alt?.[0]||alt[0],en:historical.alt?.[1]||alt[1]}} as Photo);
};
