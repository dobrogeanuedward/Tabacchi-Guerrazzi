import {octoberCigarNames} from './counter-archive';
import {storyForCigarName} from './cigar-brand-stories';
export type CigarRecord={slug:string;name:string;group:string;reference:string;photo:string;detail:[string,string]};
type Pair=[string,string];
type CigarContext={title:Pair;paragraphs:Pair[];photo?:string;sources:{label:string;url:string}[]};
const sourceRecords:CigarRecord[]=[
  {
    "slug": "toscano-extravecchio",
    "name": "Toscano Extravecchio",
    "group": "Toscano",
    "reference": "GF01-064",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Extravecchio» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Extravecchio” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-garibaldi",
    "name": "Toscano Garibaldi",
    "group": "Toscano",
    "reference": "GF01-065",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Garibaldi» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Garibaldi” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-il-grande",
    "name": "Toscano Il Grande",
    "group": "Toscano",
    "reference": "GF01-065",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Il Grande» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Il Grande” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-il-bracco",
    "name": "Toscano Il Bracco",
    "group": "Toscano",
    "reference": "GF01-066",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Il Bracco» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Il Bracco” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-aquila",
    "name": "Toscano Aquila",
    "group": "Toscano",
    "reference": "GF01-066",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Aquila» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Aquila” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-classico",
    "name": "Toscano Classico",
    "group": "Toscano",
    "reference": "GF01-067",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Classico» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Classico” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-leggendario",
    "name": "Toscano Leggendario",
    "group": "Toscano",
    "reference": "GF01-067",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Leggendario» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Leggendario” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-terre",
    "name": "Toscano Terre",
    "group": "Toscano",
    "reference": "GF01-068",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Terre» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Terre” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-maremmano",
    "name": "Toscano Maremmano",
    "group": "Toscano",
    "reference": "GF01-068",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Maremmano» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Maremmano” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-puccini",
    "name": "Toscano Puccini",
    "group": "Toscano",
    "reference": "GF01-069",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Puccini» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Puccini” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-soldati",
    "name": "Toscano Soldati",
    "group": "Toscano",
    "reference": "GF01-069",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Soldati» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Soldati” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-originale",
    "name": "Toscano Originale",
    "group": "Toscano",
    "reference": "GF01-070",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Originale» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Originale” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscano-antico",
    "name": "Toscano Antico",
    "group": "Toscano",
    "reference": "GF01-070",
    "photo": "5254",
    "detail": [
      "La ricognizione del negozio registra la dicitura «Antico» fra le confezioni Toscano. Non documenta il formato completo, il numero di pezzi o la giacenza attuale.",
      "The shop survey records the wording “Antico” among the Toscano packs. It does not document the complete format, pack quantity or current stock."
    ]
  },
  {
    "slug": "toscanello-bianco",
    "name": "Toscanello Bianco",
    "group": "Toscanello",
    "reference": "GF02-033",
    "photo": "5245",
    "detail": [
      "«Bianco» è una dicitura leggibile sulle confezioni della vetrina in legno. La fotografia non consente di elencare tutte le eventuali sottovarianti; XXL non viene trattato come una composizione o una caratteristica sanitaria.",
      "“Bianco” is visible on packs in the wooden cabinet. The photograph does not establish every possible subvariant; XXL is not treated as a composition or health claim."
    ]
  },
  {
    "slug": "toscanello-blu",
    "name": "Toscanello Blu",
    "group": "Toscanello",
    "reference": "GF02-033",
    "photo": "5245",
    "detail": [
      "«Blu» è una dicitura leggibile sulle confezioni della vetrina in legno. La fotografia non consente di elencare tutte le eventuali sottovarianti; XXL non viene trattato come una composizione o una caratteristica sanitaria.",
      "“Blu” is visible on packs in the wooden cabinet. The photograph does not establish every possible subvariant; XXL is not treated as a composition or health claim."
    ]
  },
  {
    "slug": "toscanello-rosso",
    "name": "Toscanello Rosso",
    "group": "Toscanello",
    "reference": "GF02-033",
    "photo": "5245",
    "detail": [
      "«Rosso» è una dicitura leggibile sulle confezioni della vetrina in legno. La fotografia non consente di elencare tutte le eventuali sottovarianti; XXL non viene trattato come una composizione o una caratteristica sanitaria.",
      "“Rosso” is visible on packs in the wooden cabinet. The photograph does not establish every possible subvariant; XXL is not treated as a composition or health claim."
    ]
  },
  {
    "slug": "toscanello-xxl",
    "name": "Toscanello XXL",
    "group": "Toscanello",
    "reference": "GF02-033",
    "photo": "5245",
    "detail": [
      "«XXL» è una dicitura leggibile sulle confezioni della vetrina in legno. La fotografia non consente di elencare tutte le eventuali sottovarianti; XXL non viene trattato come una composizione o una caratteristica sanitaria.",
      "“XXL” is visible on packs in the wooden cabinet. The photograph does not establish every possible subvariant; XXL is not treated as a composition or health claim."
    ]
  },
  {
    "slug": "denominazione-arcano",
    "name": "Arcano",
    "group": "Denominazioni da completare",
    "reference": "GF01-071",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Arcano». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Arcano”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "denominazione-il-lustro",
    "name": "Il Lustro",
    "group": "Denominazioni da completare",
    "reference": "GF01-071",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Il Lustro». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Il Lustro”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "denominazione-long-riserva",
    "name": "Long Riserva",
    "group": "Denominazioni da completare",
    "reference": "GF01-072",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Long Riserva». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Long Riserva”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "denominazione-long-filler",
    "name": "Long Filler",
    "group": "Denominazioni da completare",
    "reference": "GF01-072",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Long Filler». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Long Filler”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "denominazione-galante",
    "name": "Galante",
    "group": "Denominazioni da completare",
    "reference": "GF01-073",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Galante». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Galante”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "denominazione-cacciatore-maremmano",
    "name": "Cacciatore maremmano",
    "group": "Denominazioni da completare",
    "reference": "GF01-073",
    "photo": "5255",
    "detail": [
      "Il registro annota il nome «Cacciatore maremmano». L’attribuzione del produttore e la denominazione commerciale completa richiedono una fotografia frontale della confezione: non vengono dedotte dal marchio vicino.",
      "The survey records the name “Cacciatore maremmano”. The manufacturer and complete commercial name need a front-facing pack photograph and are not inferred from an adjacent brand."
    ]
  },
  {
    "slug": "tornabuoni-amarcord",
    "name": "Tornabuoni Amarcord",
    "group": "Altre denominazioni",
    "reference": "GF02-034",
    "photo": "5243",
    "detail": [
      "Il nome «Amarcord» compare nell’espositore fotografato. Questa voce resta distinta dall’altra denominazione registrata nella stessa fotografia: non ne trasferisce dati o caratteristiche.",
      "The name “Amarcord” appears in the photographed display. This record remains separate from the other name recorded in that photograph; no details or features are transferred between them."
    ]
  },
  {
    "slug": "tornabuoni-allegro",
    "name": "Tornabuoni Allegro",
    "group": "Altre denominazioni",
    "reference": "GF02-034",
    "photo": "5243",
    "detail": [
      "Il nome «Allegro» compare nell’espositore fotografato. Questa voce resta distinta dall’altra denominazione registrata nella stessa fotografia: non ne trasferisce dati o caratteristiche.",
      "The name “Allegro” appears in the photographed display. This record remains separate from the other name recorded in that photograph; no details or features are transferred between them."
    ]
  },
  {
    "slug": "zino-nicaragua",
    "name": "Zino Nicaragua",
    "group": "Altre denominazioni",
    "reference": "GF02-028",
    "photo": "5247;5249",
    "detail": [
      "Il marchio Zino e la dicitura Nicaragua sono registrati sulle scatole. La ricognizione non identifica una misura o una linea completa.",
      "Zino and the wording Nicaragua are recorded on the boxes. The survey does not establish a size or complete line."
    ]
  },
  {
    "slug": "la-aurora-107",
    "name": "La Aurora 107",
    "group": "Altre denominazioni",
    "reference": "GF02-029",
    "photo": "5247;5249",
    "detail": [
      "Il registro distingue la dicitura 107 da Escogidos. Il numero non viene usato per dedurre formato, composizione o data di produzione.",
      "The survey distinguishes 107 from Escogidos. The number is not used to infer size, composition or production date."
    ]
  },
  {
    "slug": "la-aurora-escogidos",
    "name": "La Aurora Escogidos",
    "group": "Altre denominazioni",
    "reference": "GF02-029",
    "photo": "5247;5249",
    "detail": [
      "Escogidos è una denominazione distinta da 107 nella ricognizione. Misura e confezione specifica restano da leggere per intero.",
      "Escogidos is recorded separately from 107. The specific size and complete pack remain to be read."
    ]
  },
  {
    "slug": "plasencia-alma",
    "name": "Plasencia — dicitura Alma",
    "group": "Altre denominazioni",
    "reference": "GF02-030",
    "photo": "5247;5249",
    "detail": [
      "La fotografia documenta il marchio Plasencia e la parola Alma, non il nome completo della variante. Questa voce non viene ampliata con suffissi ipotizzati.",
      "The photograph records Plasencia and the word Alma, not the full variant name. No speculative suffixes are added."
    ]
  },
  {
    "slug": "villa-zamorano",
    "name": "Villa Zamorano",
    "group": "Altre denominazioni",
    "reference": "GF02-031",
    "photo": "5247",
    "detail": [
      "È identificabile il marchio sulla scatola; la linea e il formato non sono confermati. La scheda riguarda la denominazione osservata, non una referenza precisa.",
      "The box brand is identifiable; the line and format are unconfirmed. This record covers the observed name, not a precise item."
    ]
  },
  {
    "slug": "parcero",
    "name": "Parcero",
    "group": "Altre denominazioni",
    "reference": "GF02-032",
    "photo": "5247",
    "detail": [
      "Parcero è registrato sulle confezioni. Non sono confermati una sottolinea, una misura o un numero di pezzi.",
      "Parcero is recorded on the packs. No subline, size or pack quantity is confirmed."
    ]
  },
  {
    "slug": "italico",
    "name": "Italico",
    "group": "Altre denominazioni",
    "reference": "GF02-035",
    "photo": "5242;5243",
    "detail": [
      "Il nome Italico compare nell’area espositiva. La ricognizione non permette di associare tutte le confezioni vicine a una variante specifica.",
      "Italico appears in the display area. The survey does not assign every nearby pack to a specific variant."
    ]
  },
  {
    "slug": "nostrano-cannaregio",
    "name": "Nostrano Cannaregio",
    "group": "Altre denominazioni",
    "reference": "GF02-036",
    "photo": "5243",
    "detail": [
      "Cannaregio è leggibile sulle confezioni Nostrano; è tenuto distinto da Foscari. Quantità e dettagli della confezione non sono trascritti dalla foto.",
      "Cannaregio is readable on Nostrano packs and kept separate from Foscari. Pack quantities and details are not transcribed from the photo."
    ]
  },
  {
    "slug": "nostrano-foscari",
    "name": "Nostrano Foscari",
    "group": "Altre denominazioni",
    "reference": "GF02-036",
    "photo": "5243",
    "detail": [
      "Foscari è leggibile sulle confezioni Nostrano; è tenuto distinto da Cannaregio. Nessuna caratteristica viene dedotta dal solo nome.",
      "Foscari is readable on Nostrano packs and kept separate from Cannaregio. No feature is inferred from the name alone."
    ]
  }
];

// Survey observations stay in sourceRecords for internal reference. Public copy
// is supplied separately; unknown product specifications are never inferred.
export const cigarRecords:CigarRecord[]=sourceRecords.map(record=>({...record,detail:['',''] as Pair}));

for(const [slug,name,group] of octoberCigarNames){
 if(cigarRecords.some(record=>record.slug===slug||record.name.toLowerCase()===name.toLowerCase()))continue;
 cigarRecords.push({slug,name,group,reference:'GF03-'+slug,photo:slug.startsWith('la-aurora')?'5478;5479':slug.startsWith('nostrano')?'5458;5459;5467':slug.startsWith('tornabuoni')?'5458;5459;5500':'5500',detail:['','']});
}

type CigarFact={detail:Pair;sources:{label:string;url:string}[];evidenceSources:{label:string;url:string}[];name?:string;group?:string};
const identityFact=(it:string,en:string,label:string,url:string,name?:string,group?:string,publicSource=true):CigarFact=>({detail:[it,en],sources:publicSource?[{label,url}]:[],evidenceSources:[{label,url}],name,group});
const admCigarNames='https://www.adm.gov.it/portale/documents/20182/1106899/2.1+LIST+SIGARI.pdf/b42f5a7c-c376-cabc-16d9-c150dc0dea12?t=1792407883110';
const admFact=(it:string,en:string,page:number,name?:string)=>identityFact(it,en,'ADM — denominazioni e confezioni dei sigari, 19 ottobre 2026, pag. '+page,admCigarNames+'#page='+page,name);
export const cigarIdentityFacts:Record<string,CigarFact>={
 'toscano-extravecchio':admFact('Toscano Extravecchio è una denominazione della famiglia Toscano, confezionata da cinque pezzi. Il nome Extravecchio identifica questa voce all’interno della famiglia.','Toscano Extravecchio is a Toscano family name, supplied in a five-piece pack. Extravecchio identifies this entry within the family.',44),
 'toscano-garibaldi':admFact('Toscano Garibaldi è confezionato da cinque pezzi. La denominazione è distinta da Garibaldi Il Grande, presente in confezioni da due e da cinque pezzi.','Toscano Garibaldi comes in a five-piece pack. It is distinct from Garibaldi Il Grande, available in two- and five-piece packs.',44),
 'toscano-il-grande':admFact('Il nome completo è Toscano Garibaldi Il Grande. La stessa denominazione compare con confezioni da due e da cinque pezzi: il numero dei pezzi distingue le due presentazioni.','The full name is Toscano Garibaldi Il Grande. The same name appears in two- and five-piece packs; the piece count distinguishes the two presentations.',44,'Toscano Garibaldi Il Grande'),
 'toscano-il-bracco':admFact('Toscano Bracco comprende i formati Assolo, Originale e Robusto. Le tre denominazioni hanno confezioni da quattro pezzi; il nome del formato accompagna quello della linea Bracco.','Toscano Bracco includes Assolo, Originale and Robusto formats. All three names come in four-piece packs; the format name accompanies the Bracco line name.',44,'Toscano Bracco'),
 'toscano-aquila':admFact('Toscano Aquila comprende i formati Assolo e Robusto, entrambi con confezione da quattro pezzi. Aquila indica la linea, mentre Assolo e Robusto distinguono i due formati.','Toscano Aquila includes Assolo and Robusto formats, both in four-piece packs. Aquila identifies the line, while Assolo and Robusto distinguish the formats.',44),
 'toscano-classico':admFact('Toscano Classico appartiene alla famiglia Toscano. La confezione di questa denominazione comprende cinque pezzi.','Toscano Classico belongs to the Toscano family. The pack for this name contains five pieces.',44),
 'toscano-leggendario':admFact('La denominazione completa è Toscano Il Leggendario. La confezione comprende cinque pezzi.','The full name is Toscano Il Leggendario. The pack contains five pieces.',44,'Toscano Il Leggendario'),
 'toscano-terre':admFact('Toscano Terre appartiene alle denominazioni Toscano ed è confezionato da cinque pezzi. Il nome della linea è Terre.','Toscano Terre belongs to the Toscano names and comes in a five-piece pack. The line name is Terre.',45),
 'toscano-maremmano':admFact('Toscano Maremmano è una denominazione della famiglia Toscano con confezione da cinque pezzi. Maremmano fa parte del nome completo del prodotto.','Toscano Maremmano is a Toscano family name in a five-piece pack. Maremmano forms part of the full product name.',44),
 'toscano-puccini':admFact('Toscano Puccini è una denominazione della famiglia Toscano, confezionata da cinque pezzi. Puccini è il nome che distingue questa linea.','Toscano Puccini is a Toscano family name, supplied in a five-piece pack. Puccini is the name distinguishing the line.',45),
 'toscano-soldati':admFact('Toscano Soldati compare come denominazione distinta nella famiglia Toscano. La confezione è da cinque pezzi.','Toscano Soldati is a separate name within the Toscano family. The pack contains five pieces.',45),
 'toscano-originale':admFact('Toscano Originale è confezionato da due pezzi. La denominazione Originale si distingue da quella Classico, che ha una confezione da cinque pezzi.','Toscano Originale comes in a two-piece pack. Originale is distinct from Classico, which comes in a five-piece pack.',45),
 'toscano-antico':admFact('La denominazione è Antico Toscano. La confezione comprende cinque pezzi; Antico fa parte del nome del prodotto.','The name is Antico Toscano. The pack contains five pieces; Antico forms part of the product name.',4,'Antico Toscano'),
 'nostrano-campesano':admFact('Campesano appartiene alle denominazioni Antico Sigaro Nostrano del Brenta 1763. La confezione comprende due pezzi.','Campesano belongs to the Antico Sigaro Nostrano del Brenta 1763 names. The pack contains two pieces.',3),
 'nostrano-cannaregio':admFact('Cannaregio è una denominazione Antico Sigaro Nostrano del Brenta 1763, confezionata da tre pezzi. È distinta da Foscari, che ha una confezione da due.','Cannaregio is an Antico Sigaro Nostrano del Brenta 1763 name, supplied in a three-piece pack. It is distinct from Foscari, which comes in a two-piece pack.',3),
 'nostrano-clandestino-tre-6':admFact('Clandestino Tre-6 è una denominazione Antico Sigaro Nostrano del Brenta 1763. La presentazione comprende un pezzo singolo.','Clandestino Tre-6 is an Antico Sigaro Nostrano del Brenta 1763 name. Its presentation contains one individual piece.',3),
 'nostrano-foscari':admFact('Foscari è una denominazione Antico Sigaro Nostrano del Brenta 1763 con confezione da due pezzi. È distinta dalla denominazione Cannaregio.','Foscari is an Antico Sigaro Nostrano del Brenta 1763 name in a two-piece pack. It is distinct from Cannaregio.',3),
 'nostrano-il-benedettino':admFact('Il Benedettino appartiene alle denominazioni Antico Sigaro Nostrano del Brenta 1763. La confezione comprende due pezzi.','Il Benedettino belongs to the Antico Sigaro Nostrano del Brenta 1763 names. The pack contains two pieces.',3),
 'nostrano-il-ducale':admFact('Il Ducale è una denominazione Antico Sigaro Nostrano del Brenta 1763, confezionata da due pezzi. Il nome completo tiene insieme la famiglia e la linea.','Il Ducale is an Antico Sigaro Nostrano del Brenta 1763 name, supplied in a two-piece pack. The full name combines the family and the line.',3),
 'nostrano-avanone':admFact('Avanone del Brenta compare con una confezione da ventuno pezzi. Avanone del Brenta Edizione 2025 è una denominazione separata, con confezione da venti pezzi.','Avanone del Brenta appears in a twenty-one-piece pack. Avanone del Brenta Edizione 2025 is a separate name in a twenty-piece pack.',3),
 'tornabuoni-amarcord':admFact('Tornabuoni Amarcord è una denominazione della famiglia Tornabuoni. La confezione comprende venti pezzi.','Tornabuoni Amarcord is a name within the Tornabuoni family. The pack contains twenty pieces.',43),
 'tornabuoni-archibugio':admFact('Tornabuoni Archibugio è confezionato da quattro pezzi. Archibugio è il nome che distingue questa voce della famiglia Tornabuoni.','Tornabuoni Archibugio comes in a four-piece pack. Archibugio identifies this entry within the Tornabuoni family.',43),
 'tornabuoni-rinascimento':admFact('Tornabuoni Rinascimento è una denominazione della famiglia Tornabuoni con confezione da cinque pezzi.','Tornabuoni Rinascimento is a Tornabuoni family name in a five-piece pack.',43),
 'davidoff-aniversario-short-perfecto':admFact('Davidoff Aniversario Short Perfecto compare con confezioni da quattro e da venticinque pezzi. Il nome della linea, Aniversario, è seguito da quello del formato, Short Perfecto.','Davidoff Aniversario Short Perfecto appears in four- and twenty-five-piece packs. The line name, Aniversario, is followed by the format name, Short Perfecto.',12),
 'zino-nicaragua':admFact('Zino Nicaragua comprende denominazioni di formato come Gordo, Half Corona, Robusto, Short Torpedo e Toro. Le confezioni variano secondo la versione: per Robusto e Toro compaiono presentazioni da quattro, cinque e venticinque pezzi.','Zino Nicaragua includes format names such as Gordo, Half Corona, Robusto, Short Torpedo and Toro. Packs vary by version; Robusto and Toro appear in four-, five- and twenty-five-piece presentations.',49),
 'la-aurora-107':admFact('La Aurora 107 è una famiglia di denominazioni che comprende Corona, Robusto, Sumo Short Robusto e Toros. Al nome 107 si affiancano anche versioni Nicaragua ed Ecuador: il nome completo distingue le singole presentazioni.','La Aurora 107 is a family of names including Corona, Robusto, Sumo Short Robusto and Toros. Nicaragua and Ecuador versions also accompany 107; the full name distinguishes the individual presentations.',24),
 'la-aurora-escogidos':admFact('La Aurora Escogidos comprende i formati Gran Toro, Robusto, Short Robusto e Toro. Le quattro presentazioni hanno confezioni da venti pezzi.','La Aurora Escogidos includes Gran Toro, Robusto, Short Robusto and Toro formats. All four presentations come in twenty-piece packs.',25),
 'la-aurora-family-creed-fuerte-sol':admFact('La Aurora Family Creed Fuerte Sol comprende le denominazioni G. Toro, Robusto e Toro. Le tre presentazioni hanno confezioni da venti pezzi.','La Aurora Family Creed Fuerte Sol includes G. Toro, Robusto and Toro names. The three presentations come in twenty-piece packs.',25),
 'parcero':admFact('Parcero comprende le denominazioni Brazil e Dominicano, ciascuna presente nei formati Churchill, Robusto e Toro. Le presentazioni elencate hanno confezioni da venti pezzi.','Parcero includes Brazil and Dominicano names, each appearing in Churchill, Robusto and Toro formats. The listed presentations come in twenty-piece packs.',34),
 'plasencia-alma':admFact('Alma ricorre in più linee Plasencia, fra cui Alma del Campo, Alma del Cielo, Alma del Fuego e Alma Fuerte. Il nome della linea si completa con quello del formato: sono denominazioni distinte della stessa famiglia.','Alma appears in several Plasencia lines, including Alma del Campo, Alma del Cielo, Alma del Fuego and Alma Fuerte. The line name is completed by the format name; these are separate names within the same family.',36,'Plasencia Alma'),
 'toscanello-bianco':identityFact('Toscanello Bianco e Toscanello Bianco Raffinato sono due denominazioni distinte. La confezione di Toscanello Bianco è da cinque pezzi: il nome completo permette di distinguerlo dalla versione Raffinato.','Toscanello Bianco and Toscanello Bianco Raffinato are separate names. Toscanello Bianco comes in a five-piece pack; the full name distinguishes it from the Raffinato version.','ADM — denominazioni e confezioni dei sigari, 19 ottobre 2026, pag. 43',admCigarNames+'#page=43'),
 'toscanello-blu':identityFact('Toscanello Blu è una denominazione con confezione da cinque pezzi. È distinta da Toscanello XXL Blu Raffinato, che appartiene alle versioni XXL e ha una confezione da quattro pezzi.','Toscanello Blu is a five-piece pack name. It is distinct from Toscanello XXL Blu Raffinato, which belongs to the XXL versions and comes in a four-piece pack.','ADM — denominazioni e confezioni dei sigari, 19 ottobre 2026, pagg. 43–44',admCigarNames+'#page=43'),
 'toscanello-rosso':identityFact('Toscanello Rosso è la denominazione della confezione da cinque pezzi. Rosso Arabica, Rosso Mokhâ e Rosso Raffinato sono nomi distinti della stessa famiglia: leggere il nome per intero aiuta a riconoscere la versione.','Toscanello Rosso is the name of the five-piece pack. Rosso Arabica, Rosso Mokhâ and Rosso Raffinato are separate names within the family; reading the full name identifies the version.','ADM — denominazioni e confezioni dei sigari, 19 ottobre 2026, pag. 44',admCigarNames+'#page=44'),
 'toscanello-xxl':identityFact('XXL ricorre in più denominazioni Toscanello. Fra queste ci sono Blend 1, Blend 2 e Blend 3, confezionati da quattro pezzi, e Fascia Italiana e Fascia Nordamericana, confezionati da cinque. Il nome della serie e quello della versione sono due parti della denominazione completa.','XXL appears in several Toscanello names. These include Blend 1, Blend 2 and Blend 3 in four-piece packs, and Fascia Italiana and Fascia Nordamericana in five-piece packs. The series and version names are separate parts of the full name.','ADM — denominazioni e confezioni dei sigari, 19 ottobre 2026, pag. 44',admCigarNames+'#page=44','Toscanello XXL'),
 'denominazione-arcano':identityFact('Arcano è una denominazione Tornabuoni della Compagnia Toscana Sigari. Il produttore ne descrive la lavorazione del Kentucky della Valtiberina con un passaggio di affumicatura successivo alla cura a fuoco.','Arcano is a Tornabuoni name from Compagnia Toscana Sigari. The maker describes its Valtiberina Kentucky processing with an additional smoking stage after fire curing.','Compagnia Toscana Sigari — Arcano','https://www.tornabuoniclub.it/portfolio/arcano/','Tornabuoni Arcano','Tornabuoni'),
 'denominazione-il-lustro':identityFact('Tornabuoni Lustro è nato per il quinto anniversario della Compagnia Toscana Sigari. La sua storia è legata al Kentucky coltivato in Valtiberina; il produttore distingue la preparazione del ripieno dalla successiva stagionatura del sigaro.','Tornabuoni Lustro was introduced for Compagnia Toscana Sigari’s fifth anniversary. Its history is connected with Kentucky grown in Valtiberina; the maker distinguishes filler processing from the cigar’s subsequent ageing.','Compagnia Toscana Sigari — Tornabuoni Lustro','https://www.tornabuoniclub.it/portfolio/side-portfolio-v4/','Tornabuoni Lustro','Tornabuoni'),
 'denominazione-galante':identityFact('Galante appartiene alla famiglia Tornabuoni. Il produttore indica Kentucky della Valtiberina e del Casertano e descrive la preparazione del ripieno, seguita dal confezionamento mediante macchinari storici.','Galante belongs to the Tornabuoni family. The maker identifies Kentucky from Valtiberina and the Caserta area and describes filler preparation followed by construction using historical machinery.','Compagnia Toscana Sigari — Galante','https://www.tornabuoniclub.it/portfolio/il-tornabuoni-galante/','Tornabuoni Galante','Tornabuoni'),
 'denominazione-long-riserva':identityFact('Mastro Tornabuoni Long Riserva è una denominazione distinta da Long e Long XO. Il repertorio del produttore la identifica attraverso una stagionatura di diciotto mesi.','Mastro Tornabuoni Long Riserva is distinct from Long and Long XO. The maker’s catalogue identifies it by an eighteen-month ageing period.','Compagnia Toscana Sigari — Mastro Tornabuoni Long Riserva','https://www.tornabuoniclub.it/portfolio/tornabuoni-anniversario/','Mastro Tornabuoni Long Riserva','Tornabuoni'),
 'denominazione-long-filler':identityFact('Long filler descrive una costruzione del ripieno a foglia intera. Nel lessico della Compagnia Toscana Sigari il termine riguarda i sigari lavorati interamente a mano, distinti dagli short filler.','Long filler describes a whole-leaf filler construction. In Compagnia Toscana Sigari’s terminology it applies to entirely handmade cigars, distinguished from short filler construction.','Gabriele Zippilli, Compagnia Toscana Sigari — Long filler secondo tradizione','https://www.tornabuoniclub.it/?portfolio=long-filler-secondo-tradizione','Long filler','Lessico della costruzione'),
 'denominazione-cacciatore-maremmano':identityFact('Il repertorio Tornabuoni distingue Il Cacciatore da Il Cacciatore alla Maremmana: sono due denominazioni separate della Compagnia Toscana Sigari.','The Tornabuoni catalogue distinguishes Il Cacciatore from Il Cacciatore alla Maremmana: they are separate Compagnia Toscana Sigari names.','Compagnia Toscana Sigari — repertorio delle denominazioni, 2 aprile 2026','https://www.compagniatoscanasigari.it/wp-content/uploads/2026/04/CTS_Mod.-U88-FAX-format-del-2-aprile-2026-F.-Alessi_con-Tornabuoni-Il-Cacciatore-alla-Maremmana.pdf','Il Cacciatore e Il Cacciatore alla Maremmana','Tornabuoni',false),
 'italico':identityFact('Ambasciator Italico è il marchio del Moderno Opificio del Sigaro Italiano, MOSI. L’azienda è nata nel 2014 e ha sede a Orsago, in provincia di Treviso.','Ambasciator Italico is the brand of Moderno Opificio del Sigaro Italiano, MOSI. The company was founded in 2014 and is based in Orsago, in the province of Treviso.','MOSI — storia e sede dell’azienda','https://www.mosi.it/home'),
 'nicita':identityFact('Nicita nasce dalla collaborazione fra Federico Marino e Victor Calvo. Vision Tobacco World lo presenta come un progetto italo-nicaraguense, collegato alla coltivazione del tabacco avviata in Sicilia nel 2014.','Nicita originated in a collaboration between Federico Marino and Victor Calvo. Vision Tobacco World presents it as an Italian–Nicaraguan project connected with tobacco cultivation begun in Sicily in 2014.','Vision Tobacco World — la storia del progetto','https://www.visiontobaccoworld.com/chi-siamo/'),
 'villa-zamorano':identityFact('Maya Selva ha introdotto Villa Zamorano nel 2002. La storia del marchio è legata a Danlí, in Honduras; dal gennaio 2024 la lavorazione VZ si svolge nella nuova Fábrica de Puros MSC.','Maya Selva introduced Villa Zamorano in 2002. The brand’s history is linked to Danlí, Honduras; since January 2024 VZ production has taken place at the new Fábrica de Puros MSC.','Maya Selva — Villa Zamorano e la manifattura di Danlí, 10 settembre 2024','https://www.mayaselvacigars.com/single-post/villa-zamorano-has-a-brand-new-image')
};
cigarIdentityFacts['denominazione-cacciatore-maremmano'].sources=[{label:'Compagnia Toscana Sigari — l’azienda',url:'https://www.compagniatoscanasigari.it/'}];
for(const record of cigarRecords){
 const identity=cigarIdentityFacts[record.slug];
 if(identity){record.detail=identity.detail;if(identity.name)record.name=identity.name;if(identity.group)record.group=identity.group;}
}

export function cigarContextForRecord(record:CigarRecord):CigarContext|undefined {
 if(record.group==='Toscano')return {
  title:['Lucca e il lavoro delle sigaraie','Lucca and the women of the factory'],photo:'lucca-manifattura',
  paragraphs:[['La storia della manifattura lucchese attraversa l’Ottocento e il Novecento. Il fondo conservato dall’Archivio di Stato di Lucca copre il periodo 1847–2003: fra i documenti ci sono le tracce dei laboratori dei sigari Toscani e Nazionali, dell’organizzazione del lavoro e delle sigaraie. Una parte della storia del sigaro passa da questi luoghi e dalle persone che vi lavoravano.','Lucca’s manufacturing history spans the nineteenth and twentieth centuries. Its State Archive holds records covering 1847–2003, including the Toscani and Nazionali cigar workshops, the organisation of work and the women employed there. These places and workers form part of cigar history.']],
  sources:[{label:'Ministero della Cultura, SIUSA — Manifattura tabacchi di Lucca; scheda archivistica',url:'https://siusa-archivi.cultura.gov.it/cgi-bin/siusa/pagina.pl?Chiave=60145&RicDimF=2&RicSez=prodenti&RicTipoScheda=pe&RicVM=indice&TipoPag=prodente'}]
 };
 if(record.name.includes('Nostrano'))return {
  title:['Un nome legato alla Valle del Brenta','A name connected with the Brenta Valley'],
  paragraphs:[['Nostrano del Brenta è anche il nome di una varietà di Nicotiana tabacum che la Regione del Veneto descrive come probabilmente originaria della Valle del Brenta. La sua storia agricola tocca le province di Vicenza, Padova, Treviso e Verona; nella documentazione regionale compaiono anche i nomi Avanetta e Avanone.','Nostrano del Brenta is also the name of a Nicotiana tabacum variety that Veneto’s regional government describes as probably originating in the Brenta Valley. Its agricultural history spans Vicenza, Padua, Treviso and Verona; the regional record also includes the names Avanetta and Avanone.']],
  sources:[{label:'Regione del Veneto — Nostrano del Brenta, documento agronomico 2000–2003, pag. 126',url:'https://www.regione.veneto.it/static/www/agricoltura-e-foreste/partexidocumentodiintegrazionenormativa.pdf#page=127'}]
 };
 if(record.group==='Tornabuoni'||record.name.includes('Tornabuoni'))return {
  title:['Tornabuoni e l’«erba tornabuona»','Tornabuoni and erba tornabuona'],photo:'sansepolcro-citerna',
  paragraphs:[['Il cognome rimanda anche alla storia di Niccolò di Donato Tornabuoni: nobile fiorentino, vescovo di Borgo San Sepolcro e ambasciatore alla corte di Francia intorno al 1560. Treccani gli collega l’introduzione della coltivazione del tabacco in Toscana. La pianta venne allora chiamata «erba tornabuona», conservando il cognome nel lessico dell’epoca.','The surname also recalls Niccolò di Donato Tornabuoni: a Florentine nobleman, bishop of Borgo San Sepolcro and ambassador to the French court around 1560. Treccani connects him with the introduction of tobacco cultivation to Tuscany. The plant was then called erba tornabuona, preserving the surname in the terminology of the time.']],
  sources:[{label:'Treccani — Tornabuoni, Niccolò di Donato; voce enciclopedica',url:'https://www.treccani.it/enciclopedia/niccolo-di-donato-tornabuoni/'}]
 };
 const history=storyForCigarName(record.name);
 if(!history)return undefined;
 return {title:history.title,paragraphs:[history.sections[0].body,history.sections[1].body],photo:history.photo,sources:history.sources};
}
