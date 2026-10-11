type LocalizedReferenceText = [string,string];
export interface CigarReferencePhoto {
 id:string;
 name:string;
 slug:string;
 path:string;
 preview:string;
 width:number;
 height:number;
 previewWidth:number;
 previewHeight:number;
 scope:'licensed-reference-specific-name';
 documentsCurrentPackaging:false;
 documentsShopStock:false;
 sourcePage:string;
 sourceRevision:string;
 originalUrl:string;
 fileTitle:string;
 author:string;
 authorUrl:string;
 authorAlias:string|null;
 license:'CC BY 3.0'|'CC BY-SA 3.0';
 licenseUrl:string;
 medium:'photograph'|'scan';
 dateCreated:string|null;
 uploadedAt:string;
 dateType:'creation-date-as-declared-by-contributor'|'upload-date-only-capture-date-not-supplied';
 alt:LocalizedReferenceText;
 caption:LocalizedReferenceText;
 changes:LocalizedReferenceText;
}

// Exact-name historical references from contributor descriptions, never current product authentication.
export const cigarReferencePhotos:Record<string,CigarReferencePhoto> = {
  "Toscano Classico": {
    "id": "toscano-classico",
    "name": "Toscano Classico",
    "slug": "toscano-classico",
    "path": "/images/reference-cigars/toscano-classico.webp",
    "preview": "/images/reference-cigars/toscano-classico-768.webp",
    "width": 1536,
    "height": 212,
    "previewWidth": 768,
    "previewHeight": 106,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:ToscanoClassico_(orizzontale).jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:ToscanoClassico_(orizzontale).jpg&oldid=1257594708",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/ToscanoClassico_%28orizzontale%29.jpg",
    "fileTitle": "ToscanoClassico (orizzontale).jpg",
    "author": "Velq1958",
    "authorUrl": "https://commons.wikimedia.org/wiki/User:Velq1958",
    "authorAlias": "Buggia",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
    "medium": "photograph",
    "dateCreated": "2010",
    "uploadedAt": "2010-02-01T08:42:00Z",
    "dateType": "creation-date-as-declared-by-contributor",
    "alt": [
      "Foto storica identificata dalla fonte come Toscano Classico; riferimento senza conferma della variante attuale",
      "Historical photograph identified by the source as Toscano Classico; reference without confirmation of the current variant"
    ],
    "caption": [
      "Foto di riferimento identificata dalla fonte come «Toscano Classico», 2010. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference photograph identified by the source as “Toscano Classico”, 2010. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive. Immagine servita con la licenza CC BY 3.0.",
      "WebP conversion and proportional resizing of responsive versions. Served image licensed under CC BY 3.0."
    ]
  },
  "Toscano Extravecchio": {
    "id": "toscano-extravecchio",
    "name": "Toscano Extravecchio",
    "slug": "toscano-extravecchio",
    "path": "/images/reference-cigars/toscano-extravecchio.webp",
    "preview": "/images/reference-cigars/toscano-extravecchio-768.webp",
    "width": 1536,
    "height": 192,
    "previewWidth": 768,
    "previewHeight": 96,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:ToscanoExtravecchio.jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:ToscanoExtravecchio.jpg&oldid=957647182",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/ToscanoExtravecchio.jpg",
    "fileTitle": "ToscanoExtravecchio.jpg",
    "author": "Velq1958",
    "authorUrl": "https://commons.wikimedia.org/wiki/User:Velq1958",
    "authorAlias": "Buggia",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
    "medium": "photograph",
    "dateCreated": "2010",
    "uploadedAt": "2010-01-30T17:34:00Z",
    "dateType": "creation-date-as-declared-by-contributor",
    "alt": [
      "Foto storica identificata dalla fonte come Toscano Extravecchio; riferimento senza conferma della variante attuale",
      "Historical photograph identified by the source as Toscano Extravecchio; reference without confirmation of the current variant"
    ],
    "caption": [
      "Foto di riferimento identificata dalla fonte come «Toscano Extravecchio», 2010. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference photograph identified by the source as “Toscano Extravecchio”, 2010. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive; orientamento ruotato di 90°. Immagine servita con la licenza CC BY 3.0.",
      "WebP conversion and proportional resizing of responsive versions; orientation rotated by 90°. Served image licensed under CC BY 3.0."
    ]
  },
  "Toscano Garibaldi": {
    "id": "toscano-garibaldi",
    "name": "Toscano Garibaldi",
    "slug": "toscano-garibaldi",
    "path": "/images/reference-cigars/toscano-garibaldi.webp",
    "preview": "/images/reference-cigars/toscano-garibaldi-768.webp",
    "width": 1536,
    "height": 209,
    "previewWidth": 768,
    "previewHeight": 104,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:ToscanoGaribaldi.jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:ToscanoGaribaldi.jpg&oldid=543822409",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b9/ToscanoGaribaldi.jpg",
    "fileTitle": "ToscanoGaribaldi.jpg",
    "author": "Velq1958",
    "authorUrl": "https://commons.wikimedia.org/wiki/User:Velq1958",
    "authorAlias": "Buggia",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
    "medium": "photograph",
    "dateCreated": "2010",
    "uploadedAt": "2010-01-16T11:18:00Z",
    "dateType": "creation-date-as-declared-by-contributor",
    "alt": [
      "Foto storica identificata dalla fonte come Toscano Garibaldi; riferimento senza conferma della variante attuale",
      "Historical photograph identified by the source as Toscano Garibaldi; reference without confirmation of the current variant"
    ],
    "caption": [
      "Foto di riferimento identificata dalla fonte come «Toscano Garibaldi», 2010. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference photograph identified by the source as “Toscano Garibaldi”, 2010. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive; orientamento ruotato di 90°. Immagine servita con la licenza CC BY 3.0.",
      "WebP conversion and proportional resizing of responsive versions; orientation rotated by 90°. Served image licensed under CC BY 3.0."
    ]
  },
  "Toscano Antico": {
    "id": "toscano-antico",
    "name": "Toscano Antico",
    "slug": "toscano-antico",
    "path": "/images/reference-cigars/toscano-antico.webp",
    "preview": "/images/reference-cigars/toscano-antico-768.webp",
    "width": 1536,
    "height": 256,
    "previewWidth": 768,
    "previewHeight": 128,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:ToscanoAntico.jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:ToscanoAntico.jpg&oldid=925221097",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/ToscanoAntico.jpg",
    "fileTitle": "ToscanoAntico.jpg",
    "author": "Velq1958",
    "authorUrl": "https://commons.wikimedia.org/wiki/User:Velq1958",
    "authorAlias": "Buggia",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
    "medium": "photograph",
    "dateCreated": null,
    "uploadedAt": "2010-02-05T13:45:00Z",
    "dateType": "upload-date-only-capture-date-not-supplied",
    "alt": [
      "Foto storica identificata dalla fonte come Toscano Antico; riferimento senza conferma della variante attuale",
      "Historical photograph identified by the source as Toscano Antico; reference without confirmation of the current variant"
    ],
    "caption": [
      "Foto di riferimento identificata dalla fonte come «Toscano Antico». Data di ripresa non indicata; caricata su Commons il 5 febbraio 2010. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference photograph identified by the source as “Toscano Antico”. Capture date not supplied; uploaded to Commons on 5 February 2010. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive; orientamento ruotato di 90°. Immagine servita con la licenza CC BY 3.0.",
      "WebP conversion and proportional resizing of responsive versions; orientation rotated by 90°. Served image licensed under CC BY 3.0."
    ]
  },
  "Toscano Soldati": {
    "id": "toscano-soldati",
    "name": "Toscano Soldati",
    "slug": "toscano-soldati",
    "path": "/images/reference-cigars/toscano-soldati.webp",
    "preview": "/images/reference-cigars/toscano-soldati-768.webp",
    "width": 1536,
    "height": 264,
    "previewWidth": 768,
    "previewHeight": 132,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:ToscanoSoldati.jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:ToscanoSoldati.jpg&oldid=1211047108",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/ToscanoSoldati.jpg",
    "fileTitle": "ToscanoSoldati.jpg",
    "author": "Stefano Nesti",
    "authorUrl": "https://commons.wikimedia.org/wiki/User:Stefano_Nesti",
    "authorAlias": null,
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "medium": "photograph",
    "dateCreated": "2010",
    "uploadedAt": "2010-02-02T20:15:00Z",
    "dateType": "creation-date-as-declared-by-contributor",
    "alt": [
      "Foto storica identificata dalla fonte come Toscano Soldati; riferimento senza conferma della variante attuale",
      "Historical photograph identified by the source as Toscano Soldati; reference without confirmation of the current variant"
    ],
    "caption": [
      "Foto di riferimento identificata dalla fonte come «Toscano Soldati», 2010. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference photograph identified by the source as “Toscano Soldati”, 2010. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive; orientamento ruotato di 90°. Immagine servita con la licenza CC BY-SA 3.0.",
      "WebP conversion and proportional resizing of responsive versions; orientation rotated by 90°. Served image licensed under CC BY-SA 3.0."
    ]
  },
  "Toscano Originale": {
    "id": "toscano-originale",
    "name": "Toscano Originale",
    "slug": "toscano-originale",
    "path": "/images/reference-cigars/toscano-originale.webp",
    "preview": "/images/reference-cigars/toscano-originale-768.webp",
    "width": 973,
    "height": 137,
    "previewWidth": 768,
    "previewHeight": 108,
    "scope": "licensed-reference-specific-name",
    "documentsCurrentPackaging": false,
    "documentsShopStock": false,
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Toscano_Originale.jpg",
    "sourceRevision": "https://commons.wikimedia.org/w/index.php?title=File:Toscano_Originale.jpg&oldid=805431254",
    "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Toscano_Originale.jpg",
    "fileTitle": "Toscano Originale.jpg",
    "author": "Gianluca111",
    "authorUrl": "https://it.wikipedia.org/wiki/Utente:Gianluca111",
    "authorAlias": null,
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "medium": "scan",
    "dateCreated": "2009-02-20",
    "uploadedAt": "2010-02-01T19:41:00Z",
    "dateType": "creation-date-as-declared-by-contributor",
    "alt": [
      "Scansione storica identificata dalla fonte come Toscano Originale; riferimento senza conferma della variante attuale",
      "Historical scan identified by the source as Toscano Originale; reference without confirmation of the current variant"
    ],
    "caption": [
      "Scansione di riferimento identificata dalla fonte come «Toscano Originale», datata 20 febbraio 2009. Non conferma la confezione attuale né documenta l’articolo presente in negozio.",
      "Reference scan identified by the source as “Toscano Originale”, dated 20 February 2009. It does not confirm current packaging or document an item held by the shop."
    ],
    "changes": [
      "Conversione WebP e ridimensionamento proporzionale delle versioni responsive; orientamento ruotato di 90°. Immagine servita con la licenza CC BY-SA 3.0.",
      "WebP conversion and proportional resizing of responsive versions; orientation rotated by 90°. Served image licensed under CC BY-SA 3.0."
    ]
  }
};

export const referenceCigarPhotoForName=(name:string):CigarReferencePhoto|undefined=>cigarReferencePhotos[name];
