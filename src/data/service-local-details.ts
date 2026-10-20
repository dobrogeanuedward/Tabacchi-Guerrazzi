import type {ServiceIdentity} from './service-identities';

const contacts={slug:'contatti',label:['Orari e contatti','Opening hours and contact'] as [string,string]};
const postepay={slug:'servizi/ricariche-postepay',label:['Ricariche Postepay','Postepay top-ups'] as [string,string]};
const satispay={slug:'servizi/pagamenti-satispay',label:['Pagamenti Satispay','Satispay payments'] as [string,string]};
const nexi={slug:'servizi/pagamenti-carte-nexi',label:['Pagamenti con carta e Nexi','Card payments through Nexi'] as [string,string]};

export const localServiceUpdates:Record<string,Partial<ServiceIdentity>>={
 'ricariche-postepay':{
  seoTitle:['Ricariche Postepay a Bologna · Via Guerrazzi 10/F','Postepay top-ups in Bologna · Via Guerrazzi 10/F'],
  serviceType:['Ricarica carta Postepay al banco','Postepay card top-up at the counter'],
  preparation:[['Numero della carta','Card number'],['Documento valido e codice fiscale','Valid ID and tax code'],['Codice fiscale del titolare, se ricarichi per un’altra persona','Cardholder’s tax code when topping up for someone else']],
  related:[contacts,{slug:'servizi/paga-e-preleva',label:['Paga e Preleva PuntoLis','PuntoLis Paga e Preleva']},satispay,nexi],
 },
 pagamenti:{
  overview:true,
  seoTitle:['Come pagare da Guerrazzi a Bologna · Satispay e Nexi','Ways to pay at Guerrazzi in Bologna · Satispay and Nexi'],
  serviceType:['Accettazione pagamenti in negozio','In-store payment acceptance'],
  intro:['Satispay e pagamenti con carta tramite POS Nexi da Angela, in Via Guerrazzi 10/F a Bologna. Scegli il metodo e leggi le informazioni dedicate prima del pagamento.','Satispay and card payments through a Nexi POS at Angela’s, Via Guerrazzi 10/F, Bologna. Choose your method and read its dedicated information before paying.'],
  faqs:[
   {question:['Quali metodi di pagamento trovo da Angela?','Which payment methods are available at Angela’s?'],answer:['Il negozio accetta pagamenti Satispay e carte tramite POS Nexi per gli acquisti. Per ricariche e altri servizi chiedi le modalità ammesse per la singola operazione.','The shop accepts Satispay and card payments through a Nexi POS for purchases. Ask about the accepted methods for each top-up or other service.']},
   {question:['Dove si trovano le informazioni sui singoli metodi?','Where can I find details about each method?'],answer:['Le pagine Pagamenti Satispay e Pagamenti con carta e Nexi spiegano i controlli prima della conferma. Il negozio è in Via Guerrazzi 10/F, a Bologna.','The Satispay payments and Card payments through Nexi pages explain what to check before confirming. The shop is at Via Guerrazzi 10/F, Bologna.']},
  ],
  related:[satispay,nexi,postepay,contacts],
 },
 'paga-e-preleva':{
  seoTitle:['Paga e Preleva PuntoLis a Bologna · Via Guerrazzi','PuntoLis Paga e Preleva in Bologna · Via Guerrazzi'],
  serviceType:['Prelievo di contante abbinato a un acquisto','Cash withdrawal linked to a purchase'],
  intro:['Paga e Preleva PuntoLis da Angela, in Via Guerrazzi 10/F a Bologna: un prelievo di contante abbinato a un acquisto. Verifica al banco carta ammessa, condizioni e disponibilità di contante.','PuntoLis Paga e Preleva at Angela’s, Via Guerrazzi 10/F, Bologna: a cash withdrawal linked to a purchase. Check card eligibility, conditions and cash availability at the counter.'],
  provider:{name:'PostePay S.p.A.',url:'https://postepay.poste.it/'},
  preparation:[['Carta abilitata al servizio','A card enabled for the service'],['Richiesta prima del pagamento','Request before paying'],['Verifica del contante e delle condizioni','Check cash availability and conditions']],
  faqs:[
   {question:['Dove posso chiedere Paga e Preleva in Via Guerrazzi?','Where can I ask about Paga e Preleva on Via Guerrazzi?'],answer:['Al banco della Tabaccheria Guerrazzi di Angela, in Via Guerrazzi 10/F a Bologna. Comunica la richiesta prima di pagare e verifica la disponibilità di contante.','At the counter of Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F, Bologna. Explain your request before paying and check cash availability.']},
   {question:['È un prelievo come al bancomat?','Is this the same as an ATM withdrawal?'],answer:['Il servizio richiede un acquisto e una carta ammessa. Non tutte le carte sono abilitate; la pagina ufficiale PuntoLis e l’emittente della carta riportano condizioni, limiti e commissioni.','The service requires a purchase and an eligible card. Not all cards are enabled; check the official PuntoLis page and your card issuer for conditions, limits and fees.']},
   {question:['Paga e Preleva e ricarica Postepay sono la stessa operazione?','Are Paga e Preleva and a Postepay top-up the same transaction?'],answer:['Sono operazioni diverse: Paga e Preleva consente di ricevere contante a fronte di un acquisto; la ricarica aggiunge denaro alla carta Postepay. Per la ricarica prepara i documenti indicati nella pagina dedicata.','They are different transactions: Paga e Preleva provides cash with a purchase; a top-up adds funds to a Postepay card. Prepare the documents listed on the separate top-up page.']},
  ],
  related:[postepay,{slug:'servizi/pagamenti',label:['Come pagare in negozio','Ways to pay in store']},contacts],
 },
 'self-service':{
  seoTitle:['Distributore h24 in Via Guerrazzi a Bologna · eVx Luna','24-hour dispenser on Via Guerrazzi, Bologna · eVx Luna'],
  serviceType:['Distributore automatico esterno','Outdoor self-service dispenser'],
  hours:'always',
  faqs:[
   {question:['Dove si trova il distributore h24?','Where is the 24-hour dispenser?'],answer:['È sotto il portico di Via Guerrazzi 10/F a Bologna, alla destra dell’ingresso della Tabaccheria Guerrazzi di Angela.','Under the portico at Via Guerrazzi 10/F, Bologna, to the right of the entrance of Tabaccheria Guerrazzi di Angela.']},
   {question:['Il banco e il deposito bagagli sono aperti h24?','Are the counter and luggage storage open 24 hours?'],answer:['La dicitura h24 riguarda il distributore esterno. Il banco segue gli orari del negozio; per il deposito bagagli valgono gli orari e le condizioni della prenotazione Bounce.','The 24-hour wording applies to the outdoor dispenser. The counter follows shop opening hours; luggage storage follows the times and conditions of the Bounce booking.']},
   {question:['Posso usare questa pagina per fare una ricarica?','Can I make a top-up on this page?'],answer:['Questa pagina descrive dove si trova il distributore. Le ricariche Postepay descritte sul sito sono un servizio al banco durante l’apertura del negozio. Per le funzioni del distributore segui le indicazioni sullo schermo.','This page explains where the dispenser is. The Postepay top-ups described on this website take place at the counter during shop opening hours. Follow the machine’s screen instructions for its functions.']},
  ],
  related:[contacts,postepay,{slug:'deposito-bagagli',label:['Deposito bagagli Bounce','Bounce luggage storage']}],
  sources:[{label:'eVx · sito del costruttore',url:'https://www.evxvending.it/'}],
 },
};

export const individualPaymentServices:ServiceIdentity[]=[
 {slug:'pagamenti-satispay',title:['Pagamenti Satispay','Satispay payments'],
  seoTitle:['Pagamenti Satispay a Bologna · Guerrazzi, Via Guerrazzi 10/F','Satispay payments in Bologna · Guerrazzi, Via Guerrazzi 10/F'],
  serviceType:['Pagamento degli acquisti con Satispay','Payment for purchases with Satispay'],
  logos:[{name:'Satispay',file:'satispay-official.png',width:149,height:25}],
  intro:['Puoi pagare i tuoi acquisti con Satispay da Angela, in Via Guerrazzi 10/F a Bologna. Prima di inviare il pagamento controlla il negozio selezionato e l’importo nell’app.','Pay for your purchases with Satispay at Angela’s, Via Guerrazzi 10/F, Bologna. Check the selected shop and amount in the app before sending the payment.'],
  preparation:[['Smartphone con app Satispay attiva','Smartphone with an active Satispay app'],['Nome del negozio e importo da controllare','Check the shop name and amount']],
  sections:[
   {title:['Il pagamento parte dall’app','Start in the app'],text:['Al banco comunica che vuoi usare Satispay. Apri l’app e segui le indicazioni per selezionare il negozio o usare il codice esposto. Prima dell’invio rileggi nome del destinatario e importo: sono i due controlli che evitano di associare il pagamento alla richiesta sbagliata.','Tell the person at the counter you want to use Satispay. Open the app and follow the instructions to select the shop or use the displayed code. Before sending, check the recipient and amount so the payment matches your purchase.']},
   {title:['Controlla l’esito insieme al banco','Check the result at the counter'],text:['Dopo l’invio verifica lo stato nell’app e attendi il riscontro del negozio. Se l’esito non è chiaro, mostralo prima di ripetere il pagamento. Per assistenza sul conto o sull’app consulta il centro assistenza Satispay.','After sending, check the status in the app and wait for the shop’s confirmation. If the result is unclear, show it before repeating the payment. For account or app issues, use Satispay’s help centre.']},
   {title:['Acquisti e altre operazioni','Purchases and other transactions'],text:['Questa pagina riguarda il pagamento degli acquisti in negozio. Se devi ricaricare una Postepay o chiedere Paga e Preleva, consulta il percorso dedicato e domanda prima quali modalità sono ammesse per quell’operazione.','This page concerns payment for purchases in the shop. For a Postepay top-up or Paga e Preleva, use the dedicated page and first ask which methods are accepted for that transaction.']},
  ],
  faqs:[
   {question:['Dove posso pagare con Satispay in Via Guerrazzi?','Where can I pay with Satispay on Via Guerrazzi?'],answer:['Alla Tabaccheria Guerrazzi di Angela, in Via Guerrazzi 10/F a Bologna, per gli acquisti in negozio. Il negozio è nel centro storico, tra Via Santo Stefano e Strada Maggiore.','At Tabaccheria Guerrazzi di Angela, Via Guerrazzi 10/F, Bologna, for in-store purchases. The shop is in the historic centre, between Via Santo Stefano and Strada Maggiore.']},
   {question:['Che cosa controllo prima di inviare il pagamento?','What should I check before sending payment?'],answer:['Il nome del negozio selezionato e l’importo nell’app. Dopo l’invio controlla lo stato della transazione e il riscontro al banco prima di ripetere un pagamento.','The selected shop name and the amount in the app. After sending, check the transaction status and confirm it at the counter before repeating a payment.']},
   {question:['Posso dare per scontato lo stesso metodo per una ricarica?','Can I assume I can use the same method for a top-up?'],answer:['Per ricariche e altri servizi le modalità ammesse si verificano prima dell’operazione. L’accettazione di Satispay per gli acquisti non stabilisce le condizioni degli altri servizi.','Check the accepted methods before a top-up or other service. Satispay acceptance for purchases does not establish the conditions for other services.']},
  ],
  related:[nexi,postepay,contacts],
  sources:[{label:'Satispay · pagamento in negozio e assistenza',url:'https://www.satispay.com/it-it/privati/'}],
 },
 {slug:'pagamenti-carte-nexi',title:['Pagamenti con carta e Nexi','Card payments through Nexi'],
  seoTitle:['Pagamenti con carta a Bologna · POS Nexi in Via Guerrazzi','Card payments in Bologna · Nexi POS on Via Guerrazzi'],
  serviceType:['Pagamento degli acquisti con carta tramite POS Nexi','Card payment for purchases through a Nexi POS'],
  logos:[{name:'Nexi',file:'nexi-official.svg'}],
  intro:['Da Angela, in Via Guerrazzi 10/F a Bologna, puoi pagare gli acquisti con carta tramite POS Nexi. Controlla l’importo sul terminale e segui la richiesta di autorizzazione della tua carta.','Pay for purchases by card through a Nexi POS at Angela’s, Via Guerrazzi 10/F, Bologna. Check the amount on the terminal and follow your card’s authorisation instructions.'],
  preparation:[['Carta o dispositivo di pagamento','Payment card or device'],['PIN, se richiesto dal terminale','PIN if requested by the terminal'],['Controllo di importo ed esito','Check the amount and result']],
  sections:[
   {title:['Il riferimento è il terminale','Read the terminal'],text:['Prima di autorizzare verifica l’importo sul POS. Segui le indicazioni per usare la carta o il dispositivo; il terminale può richiedere il PIN anche quando usi il contactless. Tieni il codice riservato e inseriscilo personalmente quando richiesto.','Before authorising, check the amount on the POS. Follow the instructions for your card or device; the terminal may request your PIN even for contactless. Keep your PIN private and enter it yourself when asked.']},
   {title:['Circuiti ed esito del pagamento','Card networks and payment result'],text:['La presenza del POS Nexi non garantisce che qualsiasi carta o modalità sia abilitata. Per una richiesta particolare chiedi prima al banco. Attendi l’esito sul terminale e conserva il riscontro; se un’operazione non risulta chiara, verificala prima di ripeterla.','A Nexi POS does not guarantee that every card or method is enabled. Ask at the counter about a specific request. Wait for the terminal result and keep the transaction record; check an unclear result before repeating a payment.']},
   {title:['Per una ricarica serve il suo percorso','Use the right page for a top-up'],text:['Un pagamento per un articolo e una ricarica Postepay sono operazioni diverse. Anche Paga e Preleva richiede una carta ammessa e condizioni specifiche: controllale nella pagina dedicata e prima della conferma al banco.','Paying for an item and topping up Postepay are different transactions. Paga e Preleva also requires an eligible card and specific conditions: read the dedicated page and check at the counter before confirming.']},
  ],
  faqs:[
   {question:['Posso pagare con carta da Guerrazzi a Bologna?','Can I pay by card at Guerrazzi in Bologna?'],answer:['Sì, il negozio in Via Guerrazzi 10/F accetta pagamenti con carta tramite POS Nexi per gli acquisti. Per una carta o una modalità specifica verifica l’accettazione al banco.','Yes. The shop at Via Guerrazzi 10/F accepts card payments through a Nexi POS for purchases. Ask at the counter about a particular card or method.']},
   {question:['Con il contactless può essere richiesto il PIN?','Can contactless ask for a PIN?'],answer:['Sì. Segui la richiesta sul terminale e le indicazioni della tua carta; non dare per scontata un’autorizzazione senza PIN.','Yes. Follow the terminal request and your card’s instructions; do not assume PIN-free authorisation.']},
   {question:['Quale alternativa trovo in negozio?','What other method is available in the shop?'],answer:['Per gli acquisti è presente anche Satispay. La pagina dedicata spiega come controllare il destinatario, l’importo e l’esito nell’app.','Satispay is also accepted for purchases. Its dedicated page explains how to check the recipient, amount and payment status in the app.']},
  ],
  related:[satispay,postepay,contacts],
  sources:[{label:'Nexi · guida operativa ai pagamenti POS',url:'https://www.nexi.it/content/dam/nexinew/download/assistenza/guide-pos/Guida_operativa_all_uso.pdf'},{label:'Nexi · assistenza per transazioni negate',url:'https://www.nexi.it/it/supporto-carte/codici-sicurezza-pagamenti/pagamenti/transazioni-negate'}],
 },
];
