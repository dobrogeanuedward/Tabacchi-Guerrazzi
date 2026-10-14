import data from './commons-photography.json';
type Pair=[string,string];
export interface CommonsPhotograph {
 id:string;path:string;preview:string;width:number;height:number;previewWidth:number;previewHeight:number;
 caption:Pair;alt:Pair;author:string;authorUrl:string|null;license:string;licenseUrl:string;
 fileTitle:string;sourcePage:string;sourceRevision:string;originalUrl:string;originalSha1:string;date:string|null;
 scope:string;documentsShopStock:boolean;changes:Pair;
}
export const commonsPhotographs=data as unknown as Record<string,CommonsPhotograph>;
