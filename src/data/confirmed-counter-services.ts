import type {ServiceIdentity} from './service-identities';

const contacts={slug:'contatti',label:['Orari e contatti','Opening hours and contact'] as [string,string]};
const bills={slug:'servizi/bollettini',label:['Pagamento bollettini','Bill payments'] as [string,string]};
const pagopa={slug:'servizi/pagopa',label:['Pagamenti pagoPA','pagoPA payments'] as [string,string]};

// Availability comes from the owner's direct confirmation, not provider logos.
// Network lists, providers, fees, limits and individual stamp types remain unspecified.
export const counterServiceConfirmation={
 confirmedOn:'2026-10-20',
 source:'Conferma diretta del titolare nella conversazione di lavoro',
 slugs:['ricariche-telefoniche','bollettini','pagopa','valori-bollati'],
};

export const confirmedCounterServices:ServiceIdentity[]=[
 {
  slug:'ricariche-telefoniche',title:['Ricariche telefoniche','Mobile top-ups'],
  seoTitle:['Ricariche telefoniche a Bologna · Via Guerrazzi 10/F','Mobile top-ups in Bologna · Via Guerrazzi 10/F'],
  serviceType:['Ricariche telefoniche al banco','Mobile phone top-ups at the counter'],
  intro:['Ricariche telefoniche da Angela, in Via Guerrazzi 10/F a Bologna. Porta il numero completo, il nome dell’operatore e l’importo che vuoi ricaricare: al banco controlliamo le opzioni per la tua richiesta.','Mobile top-ups at Angela’s, Via Guerrazzi 10/F, Bologna. Have the full phone number, network name and amount ready: we will check the options for your request at the counter.'],
  logos:[],hours:'counter',
  preparation:[['Numero completo da ricaricare','Full phone number to top up'],['Nome dell’operatore','Network name'],['Importo desiderato','Requested top-up amount']],
  sections:[
   {title:['Il numero e l’operatore','Phone number and network'],text:['Comunica il numero completo e l’operatore attuale. Se ricarichi per un’altra persona, fatti mandare questi dati prima di passare: controllarli insieme è più semplice che ricostruirli al banco. Per un operatore specifico puoi telefonare al negozio prima di una visita dedicata.','Give the full number and current network. If you are topping up for someone else, ask them for these details before visiting. Call the shop first if you need to check a particular network.']},
   {title:['Taglio e costo prima della conferma','Amount and cost before confirming'],text:['Indica quanto vuoi ricaricare. I tagli disponibili, le modalità di pagamento e gli eventuali costi si verificano per l’operazione richiesta. Prima della conferma rileggi il numero e controlla l’importo.','Say how much you want to add. Available top-up amounts, payment methods and any fees are checked for the requested transaction. Read back the number and check the amount before confirming.']},
   {title:['Conserva il riscontro','Keep the transaction record'],text:['Dopo l’operazione conserva il riscontro e verifica la ricarica sul telefono. Il servizio si effettua al banco durante l’apertura del negozio; questa pagina ti aiuta a preparare la visita.','After the transaction, keep the record and check the top-up on your phone. This service takes place at the counter during shop opening hours; this page helps you prepare your visit.']},
  ],
  faqs:[
   {question:['Dove posso fare una ricarica telefonica in Via Guerrazzi?','Where can I top up a mobile phone on Via Guerrazzi?'],answer:['Alla Tabaccheria Guerrazzi di Angela, in Via Guerrazzi 10/F a Bologna, durante gli orari del banco. Tieni pronti numero completo, operatore e importo.','At Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F, Bologna, during counter opening hours. Have the full number, network and amount ready.']},
   {question:['Quali operatori e tagli sono disponibili?','Which networks and top-up amounts are available?'],answer:['Per il tuo operatore e per il taglio desiderato chiedi al banco o telefona prima di passare. Le opzioni e gli eventuali costi si controllano prima della conferma.','Ask at the counter or call before visiting about your network and requested amount. Options and any fees are checked before confirmation.']},
   {question:['Posso ricaricare il numero di un’altra persona?','Can I ask for a top-up for someone else?'],answer:['Porta il numero completo e il nome dell’operatore della persona per cui chiedi la ricarica. Al banco verifichiamo l’operazione e rileggiamo i dati prima di confermare.','Bring the full phone number and network name for the person receiving the top-up. We check the transaction and read back the details before confirming.']},
  ],
  related:[contacts,{slug:'schede/ricariche-telefoniche',label:['La guida: numero, operatore e ricevuta','Guide: number, network and transaction record']},{slug:'servizi/ricariche-postepay',label:['Ricariche Postepay','Postepay top-ups']}],
  sources:[],
 },
 {
  slug:'bollettini',title:['Pagamento bollettini','Bill payments'],
  seoTitle:['Pagamento bollettini a Bologna · Via Guerrazzi 10/F','Bill payments in Bologna · Via Guerrazzi 10/F'],
  serviceType:['Pagamento bollettini al banco','Bill payments at the counter'],
  intro:['Puoi pagare i bollettini al banco di Angela, in Via Guerrazzi 10/F a Bologna. Porta il documento completo e leggibile: controlliamo la tipologia, i dati e il costo dell’operazione prima della conferma.','Pay bills at Angela’s counter, Via Guerrazzi 10/F, Bologna. Bring the complete, legible document so we can check its type, details and transaction cost before confirmation.'],
  logos:[],hours:'counter',
  preparation:[['Bollettino completo e leggibile','Complete, legible bill or payment slip'],['Tutti i codici e i riferimenti del documento','All document codes and references'],['Controllo di importo e scadenza','Check the amount and due date']],
  sections:[
   {title:['Porta il bollettino intero','Bring the whole document'],text:['Non ritagliare i codici o i riferimenti del destinatario. Se usi un file o una foto, aprilo prima di arrivare al banco e verifica che tutte le parti siano leggibili. Per una tipologia particolare, telefona prima di una visita dedicata.','Do not crop the codes or payee details. If using a file or photo, open it before reaching the counter and check that all parts are legible. Call before making a special trip for a particular bill type.']},
   {title:['Il costo, prima di procedere','Check the cost before proceeding'],text:['Al banco verifichiamo che il singolo bollettino possa essere gestito e ti indichiamo modalità di pagamento e commissione. Controlla destinatario, importo e riferimenti prima della conferma.','At the counter we check whether the individual bill can be processed and explain payment methods and the fee. Check the payee, amount and references before confirming.']},
   {title:['Dopo il pagamento','After payment'],text:['Conserva la ricevuta insieme al bollettino. Se devi chiedere chiarimenti sull’importo dovuto o sulla scadenza, tieni come riferimento chi ha emesso il documento. Per un avviso con il logo pagoPA trovi una pagina dedicata.','Keep the receipt with the bill. Direct questions about the amount due or due date to the document’s issuer. There is a separate page for notices bearing the pagoPA logo.']},
  ],
  faqs:[
   {question:['Dove posso pagare un bollettino in centro a Bologna?','Where can I pay a bill in central Bologna?'],answer:['Da Angela, in Via Guerrazzi 10/F, durante gli orari di apertura del banco. Porta il bollettino completo e leggibile.','At Angela’s, Via Guerrazzi 10/F, during counter opening hours. Bring the complete, legible bill.']},
   {question:['Si possono pagare tutte le tipologie di bollettino?','Can every type of bill be paid?'],answer:['La tipologia e i riferimenti del singolo documento si verificano al banco. Per una richiesta particolare telefona prima; commissione e modalità di pagamento si controllano prima di procedere.','The type and references of each document are checked at the counter. Call first about a particular request; the fee and payment methods are checked before proceeding.']},
   {question:['Bollettino e avviso pagoPA sono lo stesso documento?','Are a bill payment slip and a pagoPA notice the same document?'],answer:['Possono richiedere percorsi diversi. Porta sempre il documento completo; se compare il logo pagoPA, consulta anche la pagina Pagamenti pagoPA.','They may require different payment routes. Always bring the complete document; if it bears the pagoPA logo, also read the pagoPA payments page.']},
  ],
  related:[pagopa,contacts,{slug:'schede/bollettini-e-pagopa',label:['La guida ai documenti di pagamento','Guide to payment documents']}],
  sources:[],
 },
 {
  slug:'pagopa',title:['Pagamenti pagoPA','pagoPA payments'],
  seoTitle:['Pagamenti pagoPA a Bologna · Via Guerrazzi 10/F','pagoPA payments in Bologna · Via Guerrazzi 10/F'],
  serviceType:['Pagamento avvisi pagoPA al banco','pagoPA notice payments at the counter'],
  intro:['Paghi gli avvisi pagoPA da Angela, in Via Guerrazzi 10/F a Bologna. Porta l’avviso completo con il codice leggibile: al banco controlliamo i riferimenti e il costo prima della conferma.','Pay pagoPA notices at Angela’s, Via Guerrazzi 10/F, Bologna. Bring the complete notice with a legible code: we check the details and cost at the counter before confirmation.'],
  logos:[{name:'pagoPA',file:'pagopa-official.svg',width:95,height:34}],hours:'counter',
  preparation:[['Avviso pagoPA completo','Complete pagoPA payment notice'],['Codice Avviso e codice fiscale dell’ente creditore leggibili','Legible notice code and payee institution’s tax code'],['Importo e scadenza da controllare','Check the amount and due date']],
  sections:[
   {title:['Riconosci l’avviso','Identify the notice'],text:['Cerca la dicitura “Avviso di pagamento” e il logo pagoPA. Porta il foglio completo o una versione digitale leggibile, senza tagliare il codice QR e gli altri riferimenti. Il centro assistenza pagoPA indica anche il Codice Avviso e il codice fiscale dell’ente creditore come dati per il pagamento.','Look for “Avviso di pagamento” and the pagoPA logo. Bring the whole document or a legible digital version, keeping the QR code and other references visible. The pagoPA help centre also identifies the notice code and the payee institution’s tax code as payment details.']},
   {title:['Controlla i dati e la commissione','Check the details and fee'],text:['Prima di confermare verifichiamo il singolo avviso e ti indichiamo modalità ammesse e commissione. Rileggi ente creditore, causale e importo dell’operazione; per chiarimenti sul debito o su un avviso errato rivolgiti all’ente che lo ha emesso.','Before confirmation, we check the individual notice and explain accepted payment methods and the fee. Check the payee institution, payment reference and transaction amount. Contact the issuing institution about the debt or an incorrect notice.']},
   {title:['Tieni la ricevuta','Keep the receipt'],text:['Dopo il pagamento conserva il riscontro insieme all’avviso. Il servizio si svolge al banco durante gli orari del negozio; se hai una richiesta particolare puoi telefonare prima di passare.','After payment, keep the transaction record with the notice. The service takes place at the counter during shop opening hours; call before visiting about a particular request.']},
  ],
  faqs:[
   {question:['Dove posso pagare un avviso pagoPA in Via Guerrazzi?','Where can I pay a pagoPA notice on Via Guerrazzi?'],answer:['Alla Tabaccheria Guerrazzi di Angela, in Via Guerrazzi 10/F a Bologna, durante gli orari del banco. Porta l’avviso completo e leggibile.','At Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F, Bologna, during counter opening hours. Bring the complete, legible notice.']},
   {question:['Che cosa serve per il pagamento?','What do I need for payment?'],answer:['Porta l’avviso pagoPA completo, con il codice QR e i riferimenti leggibili. Le informazioni utili comprendono il Codice Avviso e il codice fiscale dell’ente creditore.','Bring the complete pagoPA notice, with a legible QR code and references. Useful details include the notice code and the payee institution’s tax code.']},
   {question:['Quanto costa pagare l’avviso?','How much does paying the notice cost?'],answer:['Importo, commissione e modalità ammesse si controllano al banco prima della conferma. Questa pagina non indica una commissione unica per tutti gli avvisi.','The amount, fee and accepted methods are checked at the counter before confirmation. This page does not give a single fee for every notice.']},
  ],
  related:[bills,contacts,{slug:'schede/bollettini-e-pagopa',label:['La guida ai documenti di pagamento','Guide to payment documents']}],
  sources:[{label:'pagoPA · cosa serve per pagare un avviso',url:'https://assistenza.pagopa.gov.it/hc/it/articles/31958790454417-Pagare-con-pagoPA'},{label:'pagoPA · riconoscere il codice QR dell’avviso',url:'https://assistenza.pagopa.gov.it/hc/it/articles/34578368277777-Inquadrare-il-codice-QR-di-un-avviso-pagoPA'}],
 },
 {
  slug:'valori-bollati',title:['Valori bollati','Revenue stamps'],
  seoTitle:['Valori bollati a Bologna · Via Guerrazzi 10/F','Revenue stamps in Bologna · Via Guerrazzi 10/F'],
  serviceType:['Valori bollati al banco','Revenue stamp service at the counter'],
  intro:['Il servizio valori bollati è disponibile da Angela, in Via Guerrazzi 10/F a Bologna. Porta le indicazioni della pratica e l’importo richiesto, così possiamo verificare la tua richiesta al banco.','Revenue stamp service is available at Angela’s, Via Guerrazzi 10/F, Bologna. Bring the instructions for your paperwork and the required amount so we can check your request at the counter.'],
  logos:[],hours:'counter',
  preparation:[['Indicazioni dell’ente o dell’ufficio destinatario','Instructions from the receiving institution or office'],['Importo e tipologia richiesti','Required amount and type'],['Eventuali riferimenti della pratica','Any paperwork references']],
  sections:[
   {title:['Parti dalle indicazioni della pratica','Start with your paperwork instructions'],text:['Per una marca da bollo o un altro valore richiesto da un ufficio, porta le istruzioni che hai ricevuto. Importo, tipologia e momento di utilizzo dipendono dalla pratica: se un punto non è chiaro, chiariscilo con l’ente destinatario prima dell’acquisto.','For a revenue stamp or another item requested by an office, bring the instructions you received. The amount, type and timing depend on the paperwork; clarify any uncertainty with the receiving institution before purchasing.']},
   {title:['La richiesta al banco','At the counter'],text:['Comunica il valore e la quantità richiesti. Verifichiamo la singola operazione e le modalità ammesse prima di procedere. Per esigenze particolari o più pezzi, telefona prima di una visita dedicata.','Tell us the required value and quantity. We check the individual request and accepted methods before proceeding. Call before making a special trip for a particular requirement or multiple items.']},
   {title:['Il riferimento dopo l’acquisto','Your reference after purchase'],text:['Conserva il contrassegno e il riscontro secondo le indicazioni della tua pratica. Per i contrassegni telematici, l’Agenzia delle Entrate mette a disposizione un servizio ufficiale di controllo; segui le istruzioni riportate sul suo sito.','Keep the stamp and transaction record according to your paperwork instructions. The Italian Revenue Agency provides an official checking service for electronic revenue stamps; follow the instructions on its website.']},
  ],
  faqs:[
   {question:['Dove trovo il servizio valori bollati in centro a Bologna?','Where can I find revenue stamp service in central Bologna?'],answer:['Da Angela, in Via Guerrazzi 10/F, durante gli orari del banco. Porta l’importo e le indicazioni della pratica.','At Angela’s, Via Guerrazzi 10/F, during counter opening hours. Bring the required amount and paperwork instructions.']},
   {question:['Come capisco quale importo mi serve?','How do I know the required amount?'],answer:['Usa le indicazioni dell’ente o dell’ufficio che riceve il documento. Se non sono chiare, chiedi conferma a quell’ente prima di acquistare il valore bollato.','Follow the instructions of the institution or office receiving the document. If unclear, ask that institution to confirm before buying the stamp.']},
   {question:['Posso verificare una richiesta particolare prima di passare?','Can I check a particular request before visiting?'],answer:['Sì, puoi telefonare al negozio con tipologia, importo e quantità richiesti. La singola operazione e le modalità ammesse si verificano al banco.','Yes. Call the shop with the required type, amount and quantity. The individual transaction and accepted methods are checked at the counter.']},
  ],
  related:[contacts,bills,pagopa],
  sources:[{label:'Agenzia delle Entrate · controllo dei contrassegni telematici',url:'https://www1.agenziaentrate.gov.it/servizi/valoribollati/index.htm'}],
 },
];
