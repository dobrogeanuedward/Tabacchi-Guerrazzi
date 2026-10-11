// Editorial category scenes; these images do not identify individual stock items.
export const categoryPhotos:Record<string,string>={cartoleria:'cartoleria',souvenir:'souvenir',feste:'auguri',telefono:'necessita',necessita:'necessita',dolciumi:'dolciumi',regali:'regali'};
export const assortmentImage=(category:string,id='')=>category==='giochi'?'/images/games.webp':`/images/editorial/${['cerotti','labbra','capelli'].includes(id)?'cura':categoryPhotos[category]||'regali'}-desktop-800.webp`;
