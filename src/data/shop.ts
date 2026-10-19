import {assortmentLinks} from './assortment';
export type Lang = 'it' | 'en';
export const shop = {
 name: 'Tabaccheria Guerrazzi di Angela', address: 'Via Guerrazzi 10/F', postcode:'40125', city: 'Bologna',
 phone: '+39 051 498 3858', email: '', vat: '', legalName:'',
 hours: [
  {day:'Lunedì–sabato',dayEn:'Monday–Saturday',hours:'07:30–20:30',days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],opens:'07:30',closes:'20:30'},
  {day:'Domenica',dayEn:'Sunday',hours:'10:00–20:00',days:['Sunday'],opens:'10:00',closes:'20:00'},
 ],
 profileSource:{label:'Google Maps',url:'https://maps.google.com/maps?ftid=0x477fd5904f1d6f3d:0xea65e530ca1bdcdb',checkedOn:'2026-10-19'},
 instagram:'https://www.instagram.com/tabaccheria_guerrazzi/',
 maps:'https://maps.google.com/maps?ftid=0x477fd5904f1d6f3d:0xea65e530ca1bdcdb',
 reviewUrl:'', reviews: [] as {name:string;body:string;date:string;sourceUrl:string}[],
};
export const pathFor = (slug:string,lang:Lang='it') => `${lang==='en'?'/en':''}/${slug ? slug+'/' : ''}`;
export const text = (lang:Lang,it:string,en:string) => lang==='en'?en:it;
export const mainPages = [
 {slug:'',it:'Home',en:'Home'}, {slug:'il-negozio',it:'Il negozio',en:'The shop'},
 {slug:'servizi',it:'Servizi',en:'Services'}, {slug:'sigari',it:'Sigari',en:'Cigars'},
 {slug:'pipe-e-tabacchi-da-pipa',it:'Pipe e tabacchi da pipa',en:'Pipes and pipe tobacco'},
 {slug:'idee-regalo',it:'Idee regalo',en:'Gift ideas'}, {slug:'giochi-e-giocattoli',it:'Giochi e giocattoli',en:'Games and toys'},
 {slug:'marchi-e-competenze',it:'Marchi e competenze',en:'Brands and expertise'},
 {slug:'storia-e-serrande',it:'Storia e serrande',en:'Our story and shutters'},
 {slug:'recensioni',it:'Recensioni',en:'Reviews'}, {slug:'catalogo',it:'Catalogo',en:'Catalogue'},
 {slug:'contatti',it:'Contatti',en:'Contact'}, {slug:'il-quartiere',it:'Il quartiere',en:'The neighbourhood'}, ...assortmentLinks,
];
export const categories = [
 {id:'regali',it:'Idee regalo',en:'Gift ideas'}, {id:'giochi',it:'Giochi e giocattoli',en:'Games and toys'},
 {id:'cartoleria',it:'Cartoleria',en:'Stationery'}, {id:'accessori',it:'Accessori regalo',en:'Gift accessories'},
];
export const story = [
 {src:'/images/scelta.webp',it:'Tutto comincia da una vetrina.',en:'It all starts with a shop window.',altIt:'Una bambina nel passeggino guarda i giochi nella vetrina di Guerrazzi',altEn:'A child in a stroller looks at the toys in the Guerrazzi shop window'},
 {src:'/images/incontro.webp',it:'Poi qualcuno capisce cosa cerchi.',en:'Then someone understands what you are looking for.',altIt:'Angela porta un gioco alla bambina, insieme alla sua famiglia',altEn:'Angela brings a toy to the child and her family'},
 {src:'/images/regalo.webp',it:'E un piccolo gioco diventa un grande momento.',en:'And a little toy becomes a big moment.',altIt:'La bambina riceve il gioco dalle mani di Angela',altEn:'The child receives the toy from Angela'},
];
