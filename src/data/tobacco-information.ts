import {materialGuides,materialArticles} from './materials-education';
import {guideCopy} from './guide-copy';
import {cigarHistoryArticles} from './cigar-history';
export const tobaccoSources=[
 {label:'D.Lgs. 6/2016 — testo pubblicato in Gazzetta Ufficiale',url:'https://www.gazzettaufficiale.it/eli/id/2016/01/18/16G00009/sg'},
 {label:'Legge 165/1962 — divieto di propaganda pubblicitaria (MEF)',url:'https://def.finanze.it/DocTribFrontend/executePrintArticolo.do?articolo=Articolo+testo&codiceOrdinamento=500000000000000&id=%7BBC90B8DD-4157-45FA-A42D-4EFC13554228%7D'},
 {label:'ADM — divieti di pubblicità e vendita a distanza; siti web inibiti',url:'https://www.adm.gov.it/portale/siti-inibiti-tabacchi'}
];
export type LegalNoticeKind='tobacco'|'pipe'|'accessories'|'gambling';
type LocalizedLegalText=readonly [string,string];
type LegalNoticeCopy={title:LocalizedLegalText;paragraphs:LocalizedLegalText[];source:{label:LocalizedLegalText;url:string}};
export const dependenceSupport={
 number:'800 940 789',phone:'800940789',
 label:['Sostegno anonimo e gratuito: Numero Verde Dipendenze ISS','Free, anonymous support: ISS national addiction helpline'] as LocalizedLegalText,
 url:'https://www.iss.it/-/numero-verde-nazionale-dipendenze-800-940-789',
};
const tobaccoHealthSource={
 label:['ISS — rischi del fumo di sigari e pipa','ISS — health risks of cigar and pipe smoking'] as LocalizedLegalText,
 url:'https://www.issalute.it/index.php/falsi-miti-e-bufale/fumo-alcol-droghe-dipendenze/e-vero-che-se-fumo-sigarette-leggere-sigari-o-pipa-non-corro-rischi-per-la-salute',
};
const tobaccoSaleNotice:LocalizedLegalText=[
 'La vendita di prodotti del tabacco ai minori di 18 anni è vietata. La conferma 18+ sul sito non sostituisce i controlli previsti al banco. Il sito non raccoglie ordini e non effettua vendite o spedizioni online di tabacco.',
 'Selling tobacco products to anyone under 18 is prohibited. The website’s 18+ confirmation does not replace the required in-store checks. This website does not accept tobacco orders or sell or ship tobacco online.',
];
export const legalNotices:Record<LegalNoticeKind,LegalNoticeCopy>={
 tobacco:{title:['Tabacco e salute','Tobacco and health'],paragraphs:[
  ['Fumare sigari o pipa comporta rischi per la salute anche senza aspirare il fumo e può causare dipendenza.','Smoking cigars or a pipe carries health risks even without inhaling and can cause dependence.'],
  tobaccoSaleNotice,
 ],source:tobaccoHealthSource},
 pipe:{title:['Pipe, tabacco e salute','Pipes, tobacco and health'],paragraphs:[
  ['Una pipa non rende sicuro il fumo di tabacco: i rischi per la salute rimangono anche senza aspirare il fumo. Il consumo di tabacco può causare dipendenza.','A pipe does not make tobacco smoking safe: health risks remain even without inhaling. Tobacco use can cause dependence.'],
  tobaccoSaleNotice,
 ],source:tobaccoHealthSource},
 accessories:{title:['Accessori per il fumo','Smoking accessories'],paragraphs:[
  ['Gli accessori non eliminano i rischi del fumo di tabacco. Il sito non raccoglie ordini e non effettua vendite o spedizioni online di tabacco.','Accessories do not eliminate the health risks of tobacco smoking. This website does not accept tobacco orders or sell or ship tobacco online.'],
 ],source:tobaccoHealthSource},
 gambling:{title:['Gioco e tutela della salute','Gambling and health'],paragraphs:[
  ['Il gioco con vincite in denaro è vietato ai minori di 18 anni e può causare dipendenza. Il sito non raccoglie giocate né pagamenti per il gioco.','Gambling for money is prohibited for anyone under 18 and can cause addiction. This website does not accept bets, lottery entries or gambling payments.'],
 ],source:{label:['ISS — informazioni e sostegno sulle dipendenze','ISS — addiction information and support'],url:dependenceSupport.url}},
};
export const tobaccoGuides:Record<string,any>={
 'sigari-termini-informazioni':{parent:'sigari',title:['Sigari, sigaretti e tabacco da pipa: i termini.','Cigars, cigarillos and pipe tobacco: terminology.'],intro:['Una scheda per capire le denominazioni, senza suggerimenti di consumo o confronti commerciali.','A guide to terminology, without consumption advice or commercial comparisons.'],sources:tobaccoSources.slice(0,1),sections:[
 [['Le categorie nel testo normativo','Categories in the legislation'],['L’articolo 2 del D.Lgs. 6/2016 distingue sigari, sigaretti e tabacco da pipa. Il sigaretto è definito come un sigaro piccolo; il tabacco da pipa è destinato esclusivamente all’impiego in una pipa.','Article 2 of Legislative Decree 6/2016 distinguishes cigars, cigarillos and pipe tobacco. A cigarillo is defined as a small cigar; pipe tobacco is intended exclusively for use in a pipe.']],
 [['Denominazione e singolo articolo','Category and individual item'],['Il nome della categoria non descrive da solo composizione, confezione o caratteristiche di un articolo. Per riconoscere una denominazione leggi la confezione completa, evitando di attribuire informazioni da una scatola a un’altra.','A category name does not fully describe an item’s composition, packaging or features. Read the complete pack to identify it, rather than applying details from one box to another.']],
 [['Informazioni a Guerrazzi','Information at Guerrazzi'],['Questa scheda spiega i termini. Il negozio si trova in Via Guerrazzi 10/F, Bologna; il sito non raccoglie ordini o richieste di spedizione per prodotti del tabacco.','This guide explains terminology. The shop is at Via Guerrazzi 10/F, Bologna; the website does not accept tobacco orders or shipping requests.']]]},
 'tabacco-minori-documenti':{parent:'sigari',title:['Tabacco, maggiore età e documento.','Tobacco, adulthood and identification.'],intro:['Le informazioni sulla tutela dei minori e la distinzione fra conferma sul sito e controllo al banco.','Information about protecting minors and the difference between website confirmation and in-store checks.'],sources:tobaccoSources.slice(0,1),sections:[
 [['Il limite di età','The age limit'],['La vendita di prodotti del tabacco ai minori di 18 anni è vietata. L’articolo 24 del D.Lgs. 6/2016 disciplina anche il controllo del documento, salvo i casi in cui la maggiore età sia manifesta.','Selling tobacco products to people under 18 is prohibited. Article 24 of Legislative Decree 6/2016 also covers identification checks, except when adulthood is apparent.']],
 [['Cosa confermi sul sito','What you confirm on the website'],['Il pulsante 18+ è un’autodichiarazione per consultare questa area informativa. Non identifica la persona e non sostituisce il controllo previsto al momento dell’acquisto. Qui non vengono richiesti una data di nascita o una copia del documento.','The 18+ button is a self-declaration for viewing this information area. It does not identify you or replace checks required at purchase. We do not request a birth date or a copy of an identity document here.']],
 [['Le informazioni restano separate','Information stays separate'],['Cartoleria, souvenir, giochi per bambini e informazioni sul deposito bagagli hanno percorsi propri. Puoi lasciare l’area riservata e continuare a consultare queste sezioni del sito.','Stationery, souvenirs, children’s toys and luggage-storage information have their own sections. You can leave this area and continue browsing them.']]]},
 'tabacco-confezioni-avvertenze':{parent:'pipe-e-tabacchi-da-pipa',title:['Confezioni del tabacco: leggere le informazioni.','Tobacco packs: reading the information.'],intro:['Denominazioni, avvertenze e riferimenti: una lettura informativa della confezione.','Names, warnings and references: an informational reading of the pack.'],sources:tobaccoSources,sections:[
 [['Le avvertenze sulla confezione','Warnings on the pack'],['Il D.Lgs. 6/2016 disciplina le avvertenze relative alla salute sui prodotti del tabacco. Leggi quelle riportate sulla confezione: un contenuto online non le sostituisce.','Legislative Decree 6/2016 regulates health warnings on tobacco products. Read those on the pack: online content does not replace them.']],
 [['Un nome non è una garanzia','A name is not a guarantee'],['Termini, grafica o presentazione di un articolo non sono una base per dedurne un vantaggio per la salute. Questa scheda non attribuisce proprietà sanitarie a marche o categorie.','An item’s terminology, design or presentation is not a basis for inferring a health benefit. This guide does not attribute health properties to brands or categories.']],
 [['Le fonti, prima delle interpretazioni','Sources before interpretations'],['Consulta i testi ufficiali collegati qui sotto. La Gazzetta riporta il provvedimento pubblicato: per ricostruire modifiche successive occorre consultare il testo vigente. Per dubbi sulla salute rivolgiti a un professionista sanitario.','Consult the official texts linked below. The Gazette records the published enactment; subsequent amendments must be checked in the current consolidated text. Discuss health concerns with a healthcare professional.']]]}
};
Object.assign(tobaccoGuides,{
 'tipologie-di-sigaro':{parent:'sigari',...guideCopy['tipologie-di-sigaro'],sources:[
  {label:'Habanos — glossario tecnico del produttore: parejo, figurado e origine',url:'https://www.habanos.com/en/glossary/'},
  {label:'Habanos — anatomia: capa, capote e tripa',url:'https://www.habanos.com/es/el-mundo-del-habano/anatomia-de-un-habano/'},
  {label:'Habanos — metodi di costruzione e tipi di ripieno',url:'https://www.habanos.com/en/totally-hand-made/'},
  {label:'UDSC svizzero — note tecniche, capitolo 24 (ottobre 2026; non normativa italiana)',url:'https://www.bazg.admin.ch/dam/it/sd-web/es3RC8ir8W6y/Kap_24_i.pdf'}
 ]},
 'confrontare-schede-sigari':{parent:'sigari',...guideCopy['confrontare-schede-sigari'],sources:tobaccoSources.slice(0,1)}
});
export const tobaccoArticles=[
 {slug:'sigari-sigaretti-informazioni-termini',cluster:'informazione-tabacco',title:'Sigari e sigaretti: orientarsi nei termini.',summary:'Denominazioni, confezioni e fonti: un percorso informativo per adulti.',guide:'sigari-termini-informazioni',sources:tobaccoSources.slice(0,1),sections:[['Comincia dalla denominazione.','Sigaro e sigaretto sono termini distinti nelle definizioni del D.Lgs. 6/2016. La scheda collegata riporta il riferimento normativo: serve a chiarire il linguaggio, non a suggerire un articolo.'],['La confezione è un riferimento concreto.','Un nome ricordato a metà o una fotografia ritagliata possono creare equivoci. Leggi la denominazione completa e le informazioni riportate sull’imballaggio. Non trasferire le caratteristiche di una confezione a un’altra.'],['Informarsi a Bologna.','Per ritrovare Guerrazzi il riferimento è Via Guerrazzi 10/F, Bologna. Il sito distingue questa area informativa dal catalogo di cartoleria, regali e piccoli articoli: qui non ci sono carrello, ordini o spedizioni di tabacco.']]},
 {slug:'tabacco-18-anni-conferma-documento',cluster:'informazione-tabacco',title:'Conferma 18+ e documento: due controlli diversi.',summary:'Cosa significa il pulsante sul sito e perché non sostituisce la verifica della maggiore età.',guide:'tabacco-minori-documenti',sources:tobaccoSources.slice(0,1),sections:[['Una dichiarazione per la consultazione.','Il sito chiede di confermare la maggiore età prima di entrare nelle sezioni pertinenti. La scelta è conservata nella sessione del browser; non viene raccolto un documento e non nasce un profilo dell’utente.'],['La verifica al banco resta distinta.','L’autodichiarazione online non sostituisce gli obblighi sulla vendita ai minori e sui controlli del documento. La scheda dedicata collega il riferimento normativo; non descrive il pulsante come una verifica dell’identità.'],['Puoi continuare sulle altre pagine.','Se non confermi, il collegamento di uscita porta alla home. Le sezioni cartoleria, idee regalo, giochi, souvenir e deposito bagagli restano consultabili senza questa conferma.']]},
 {slug:'tabacco-confezioni-fonti-informazione',cluster:'informazione-tabacco',title:'Confezioni e fonti: leggere senza interpretazioni commerciali.',summary:'Dove trovare i riferimenti ufficiali e come distinguere informazioni e messaggi promozionali.',guide:'tabacco-confezioni-avvertenze',sources:tobaccoSources,sections:[['Parti dall’articolo esatto.','Una famiglia di prodotti non coincide con una confezione precisa. Denominazione e informazioni sull’imballaggio vanno lette insieme; una scheda generale non è una certificazione del singolo articolo.'],['Le informazioni hanno una fonte.','Le schede di questa area citano testi pubblicati da enti pubblici e indicano il loro ruolo. La Gazzetta documenta il provvedimento originario; gli aggiornamenti normativi richiedono il testo vigente.'],['Il perimetro del sito.','Questa area non presenta offerte, classifiche, consigli di consumo o inviti all’acquisto di tabacco. Per gli articoli non regolamentati puoi consultare il catalogo separato; per le informazioni del luogo trovi l’indirizzo e le indicazioni del negozio.']]}
];
Object.assign(tobaccoGuides,materialGuides);
tobaccoArticles.push(...materialArticles,...cigarHistoryArticles);
export const adultSectionSlugs=['sigari','pipe-e-tabacchi-da-pipa','accendini-e-accessori','ricevitoria',...Object.keys(tobaccoGuides).map(s=>`schede/${s}`),...tobaccoArticles.map(a=>`approfondimenti/${a.slug}`)];
