import {collectionPhotoById} from './collection-october';
/** Photographic assets are independent from stock and price records. */
export const catalogPhotoFor=(id:string)=>{
 const path=collectionPhotoById[id]?`/images/collection/${collectionPhotoById[id]}`:`/images/catalogo/${id}`;
 return {src:`${path}.webp`,srcset:`${path}-360.webp 360w, ${path}-720.webp 720w, ${path}.webp 1440w`,width:1440,height:960,alt:['bambole-disney','personaggi-marvel'].includes(id)?['Vetrina dei giochi, con personaggi e confezioni','Toy window with characters and packaged toys'] as [string,string]:undefined};
};
