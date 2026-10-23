import inventory from './fototeca-assets.json';

export type Photo = {
 id?:string;
 src:string;
 srcset?:string;
 width:number;
 height:number;
 alt:{it:string;en:string};
 corner?:'top-right'|'top-left'|'bottom-right'|'bottom-left';
 generated?:boolean;
};
export type FototecaPhoto = Photo & {familyIds?:string[];categorySlugs?:string[];sectionIds?:string[]};
export const fototeca = inventory as FototecaPhoto[];
export const familyPhotosFor=(id:string)=>fototeca.filter(photo=>photo.familyIds?.includes(id));
export const categoryPhotosFor=(slug:string)=>fototeca.filter(photo=>photo.categorySlugs?.includes(slug));
export const categoryPhotoFor=(slug:string)=>categoryPhotosFor(slug)[0];
export const sectionPhotosFor=(id:string)=>fototeca.filter(photo=>photo.sectionIds?.includes(id));
export const photoMetadataFor=(src:unknown)=>{
 if(typeof src!=='string')return undefined;
 const path=src.split(/[?#]/,1)[0];
 return fototeca.find(photo=>photo.src===path||(photo.srcset||'').split(',').some(variant=>variant.trim().split(/\s+/,1)[0]===path));
};
export const withHistoricalPhoto=(photos:Photo[],historical:Photo)=>photos.length
 ?[photos[0],historical,...photos.slice(1)].filter((photo,index,list)=>list.findIndex(item=>item.src===photo.src)===index)
 :[historical];
