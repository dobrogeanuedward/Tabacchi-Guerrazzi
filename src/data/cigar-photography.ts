export type CigarPhotoStudyId = 'cigar-tapered-study'|'cigar-cylinder-study'|'cigarillo-form-study';

type CigarPhotoStudy = {
 id:CigarPhotoStudyId;
 path:string;
 preview:string;
 width:1536;
 height:1024;
 scope:'generated-generic-form-only';
 documentsSpecificProduct:false;
 alt:[string,string];
};

const study=(id:CigarPhotoStudyId,alt:[string,string]):CigarPhotoStudy=>({
 id,path:'/images/studies/'+id+'.webp',preview:'/images/studies/'+id+'-768.webp',
 width:1536,height:1024,scope:'generated-generic-form-only',documentsSpecificProduct:false,alt
});

// The group selects an editorial shape study, never an identification of the named item.
export const cigarPhotography:Record<CigarPhotoStudyId,CigarPhotoStudy>={
 'cigar-tapered-study':study('cigar-tapered-study',['Forma generica affusolata; immagine fotografica generata','Generic tapered form; generated photographic image']),
 'cigar-cylinder-study':study('cigar-cylinder-study',['Forma generica cilindrica; immagine fotografica generata','Generic cylindrical form; generated photographic image']),
 'cigarillo-form-study':study('cigarillo-form-study',['Forma generica sottile; immagine fotografica generata','Generic slender form; generated photographic image'])
};

export const cigarStudyForGroup=(group:string):CigarPhotoStudyId=>group==='Toscano'?'cigar-tapered-study':group==='Toscanello'?'cigarillo-form-study':'cigar-cylinder-study';
export const cigarPhotoForGroup=(group:string)=>cigarPhotography[cigarStudyForGroup(group)];
