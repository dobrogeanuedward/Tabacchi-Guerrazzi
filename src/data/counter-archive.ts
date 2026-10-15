type Pair=[string,string];
export const pipeNames:{brand:string;names:string[];note:Pair}[]=[
 {brand:'Amphora',names:['Rich','Original','Special Reserve No. 2','Black Cavendish'],note:['Amphora è il marchio; Rich, Original, Special Reserve No. 2 e Black Cavendish sono denominazioni differenti. La voce riguarda la lettura dei nomi sulla confezione.','Amphora is the brand; Rich, Original, Special Reserve No. 2 and Black Cavendish are different names. This entry concerns how packaging names are read.']},
 {brand:'Skandinavik',names:['Regular','Sungold','Navy'],note:['Regular, Sungold e Navy appartengono alle denominazioni Skandinavik. Il nome della linea non basta a ricostruire composizione o formato.','Regular, Sungold and Navy are Skandinavik names. A line name does not establish composition or pack size.']},
 {brand:'Mac Baren',names:['Original Choice','Mixture Scottish Blend','Cube'],note:['Il nome Mac Baren compare con Original Choice e Mixture Scottish Blend; Cube è un’altra denominazione presente. Marchio e linea sono livelli diversi della lettura.','Mac Baren appears with Original Choice and Mixture Scottish Blend; Cube is another name present. Brand and line are different naming levels.']},
 {brand:'Clan',names:['Original'],note:['Original accompagna il marchio Clan. La denominazione va letta insieme alla categoria riportata sull’imballaggio.','Original accompanies the Clan brand. Read the name with the category stated on the packaging.']},
 {brand:'Kentucky Bird',names:['Pipe Tobacco'],note:['Kentucky Bird è un nome di prodotto; Pipe Tobacco indica la categoria in inglese. Un termine geografico nel nome non certifica da solo una provenienza.','Kentucky Bird is a product name; Pipe Tobacco states the category in English. A geographical word alone does not establish origin.']},
 {brand:'Thomas Radford',names:["Sunday’s Fantasy"],note:['Sunday’s Fantasy è la denominazione associata a Thomas Radford. La confezione riporta separatamente la categoria Pipe Tobacco.','Sunday’s Fantasy is the name associated with Thomas Radford. The pack states Pipe Tobacco separately as the category.']},
 {brand:"Golden Blend’s",names:['No. 1'],note:['No. 1 è una denominazione della linea Golden Blend’s. Un numero nel nome non è un giudizio di qualità o una classifica.','No. 1 is a Golden Blend’s line name. A number in a name is not a quality rating or ranking.']},
 {brand:'Park Lane',names:['7'],note:['Il numero 7 accompagna il nome Park Lane. La dicitura Sliced Pipe Tobacco descrive invece una categoria del lessico della confezione.','The number 7 accompanies Park Lane. Sliced Pipe Tobacco is a separate piece of packaging vocabulary.']},
 {brand:'Cellini',names:['Classico Riserva'],note:['Classico e Riserva fanno parte della denominazione Cellini. Non sono assunti come indicazioni relative alla salute.','Classico and Riserva belong to the Cellini name. They are not interpreted as health information.']},
 {brand:'7 Seas',names:['Gold Blend'],note:['7 Seas è il marchio e Gold Blend la denominazione riportata. La traduzione delle parole non sostituisce le informazioni sulla confezione.','7 Seas is the brand and Gold Blend the stated name. Translating the words does not replace packaging information.']},
 {brand:'Henri Wintermans',names:['Confezioni per tabacco da pipa'],note:['Il nome Henri Wintermans compare anche nell’area del tabacco da pipa. La singola variante si distingue dalla categoria generale.','Henri Wintermans also appears in the pipe-tobacco area. The individual variant is separate from the general category.']},
];
export const otherAdultNames=[
 {category:['Tabacco e sigaretti','Tobacco and cigarillos'] as Pair,names:['Chesterfield','Winston','Camel','Philip Morris','Marlboro','JPS','Pueblo','American Spirit','Mehari’s','Moods','Café Crème','Toscano','Toscanello','Avanti']},
 {category:['Dispositivi e confezioni con nicotina','Devices and nicotine packaging'] as Pair,names:['Ploom','RELX','Vuse','blu','Lost Mary','Air Bar','WAKA','KIWI','FUYL','ZYN','VELO']},
];
export const otherAccessoryBrands=['BIC','PROF','Atomic','CHAMP HIGH'];
export const accessoryRecords=[
 {id:'clipper-metallo',name:['CLIPPER con finiture metalliche','CLIPPER with metal finishes'] as Pair,brands:['CLIPPER'],detail:['Formati tascabili con finiture argento e rose gold. Materiale, istruzioni e ricaricabilità si leggono sul modello preciso.','Pocket formats with silver and rose-gold finishes. Check material, instructions and refillability on the exact model.'] as Pair},
 {id:'clipper-lupin',name:['CLIPPER Lupin III e serie illustrate','CLIPPER Lupin III and illustrated series'] as Pair,brands:['CLIPPER'],detail:['Le grafiche Lupin III, Tribal Elephants e le altre serie distinguono il decoro dal modello. Un soggetto stampato non ne cambia le istruzioni.','Lupin III, Tribal Elephants and other series identify the decoration separately from the model. Printed artwork does not change its instructions.'] as Pair},
 {id:'ciao-goldrake',name:['CIAO Goldrake e Roll in Box','CIAO Goldrake and Roll in Box'] as Pair,brands:['CIAO'],detail:['Goldrake compare sulle serie illustrate CIAO. Roll in Box è una denominazione distinta per piccoli contenitori e accessori.','Goldrake appears on CIAO illustrated series. Roll in Box is a separate name for small containers and accessories.'] as Pair},
 {id:'cartel-130',name:['Cartel 130 mm e Robot Universe','Cartel 130 mm and Robot Universe'] as Pair,brands:['Cartel'],detail:['130 mm è la misura riportata; le confezioni mostrano varianti con cartine e filtri in cartoncino, anche con dicitura non-blanchi. Robot Universe è il nome di una grafica.','130 mm is the stated length. Packs include papers and card tips, with some labelled non-blanchi. Robot Universe names a design.'] as Pair},
 {id:'cartine-filtri',name:['Cartine, filtri e formati','Papers, filters and formats'] as Pair,brands:['GIZEH','Rizla+','OCB','RAW','Smoking','Juicy Jay’s','Energy'],detail:['GIZEH Active Filters 6 mm, filtri slim e diversi formati di cartine. Dimensione, materiale e numero di pezzi si leggono separatamente sulla confezione.','GIZEH Active Filters 6 mm, slim filters and different paper formats. Size, material and quantity are separate pieces of package information.'] as Pair},
];
export const octoberCigarNames=[
 ['la-aurora-family-creed-fuerte-sol','La Aurora Family Creed Fuerte Sol','La Aurora'],
 ['nostrano-il-ducale','Antico Sigaro Nostrano del Brenta Il Ducale','Nostrano del Brenta'],
 ['nostrano-il-benedettino','Antico Sigaro Nostrano del Brenta Il Benedettino','Nostrano del Brenta'],
 ['nostrano-campesano','Antico Sigaro Nostrano del Brenta Campesano','Nostrano del Brenta'],
 ['nostrano-clandestino-tre-6','Antico Sigaro Nostrano del Brenta Clandestino Tre-6','Nostrano del Brenta'],
 ['nostrano-avanone','Antico Sigaro Nostrano del Brenta Avanone','Nostrano del Brenta'],
 ['nicita','Nicita','Altre denominazioni'],
 ['tornabuoni-archibugio','Tornabuoni Archibugio','Tornabuoni'],
 ['tornabuoni-rinascimento','Tornabuoni Rinascimento','Tornabuoni'],
 ['tornabuoni-spingarda-xo','Tornabuoni Spingarda XO','Tornabuoni'],
 ['tornabuoni-amarcord','Tornabuoni Amarcord','Tornabuoni'],
 ['tornabuoni-allegro','Tornabuoni Allegro','Tornabuoni'],
 ['tornabuoni-cimette','Cimette di Mastro Tornabuoni','Tornabuoni'],
 ['davidoff-aniversario-short-perfecto','Davidoff Aniversario Short Perfecto','Davidoff'],
];
