/** Editorial family photographs: distinct subjects, no inferred SKU or stock. */
export const catalogPhotoFor=(id:string)=>{
 const path=`/images/catalogo/${id}`;
 return {src:`${path}.webp`,srcset:`${path}-360.webp 360w, ${path}-720.webp 720w, ${path}.webp 1440w`,width:1440,height:960};
};
