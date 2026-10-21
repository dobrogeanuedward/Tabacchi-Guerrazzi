import {catalogueBrands} from './brand-catalogue';

// Gift ideas also points to these documented alternatives in its own copy.
const giftAlternatives=['LEGO','Clementoni','Raptus'];

export const brandsForCategory=(slug:string)=>catalogueBrands.filter(brand=>
 brand.items.some(item=>item.page===slug)||
 (slug==='idee-regalo'&&giftAlternatives.includes(brand.name))
);
