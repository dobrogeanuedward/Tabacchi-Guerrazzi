/** Temporary visual treatment for selected AI reconstructions, 19 October 2026.
 * Sources: docs/identita/shooting-2026-10-15.json,
 * catalog-photography-2026-10-14.json and editorial-production-manifest.json.
 * This explicit inventory does not classify future photographs and does not
 * change source files or establish rights clearance. Remove a group when its
 * reconstruction is replaced with an approved photograph.
 */
const collectionSubjects=[
 'costruzioni-lego','meccanica-clementoni','vetrina-giochi','modellini-auto',
 'giochi-nuby','adesivi-personaggi','giochi-magnetici','palloncini-acqua',
 'giochi-aperto','figurine-panini','distributore-sorprese','chupa-chups',
 'haribo-rotella','caramelle-miste','liquirizia-gatos','ricola-erbe',
 'salina-cervia','guanti-spontex','pile-lampadine','necessita-pannello',
 'ciao-goldrake','clipper-lupin','cartel-130','cartine-filtri'
];
const catalogueSubjects=['profumi-raptus','proteggi-fili-in-uso','proteggi-fili-dettaglio','proteggi-fili-varianti'];
const responsiveFiles=(directory,subject)=>['','-360','-720'].map(suffix=>`/images/${directory}/${subject}${suffix}.webp`);
export const temporaryProductImageInventory=[
 ...collectionSubjects.flatMap(subject=>responsiveFiles('collection',subject)),
 ...catalogueSubjects.flatMap(subject=>responsiveFiles('catalogo',subject)),
 ...['necessita','dolciumi'].flatMap(subject=>['-desktop','-desktop-800','-mobile','-mobile-480'].map(suffix=>`/images/editorial/${subject}${suffix}.webp`))
];
const softenedImages=new Set(temporaryProductImageInventory);
export function isSoftenedProductImage(src){
 if(typeof src!=='string')return false;
 const path=src.startsWith('https://')||src.startsWith('http://')?new URL(src).pathname:src.split(/[?#]/,1)[0];
 return softenedImages.has(path);
}
