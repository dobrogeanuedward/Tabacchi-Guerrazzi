# Guerrazzi di Angela — identità e interfaccia

Il nome in Bodoni e la firma «di Angela» restano il punto di riconoscimento. Gli elementi nuovi accompagnano il logo senza sostituirlo. La direzione è quella di una bottega bolognese: inchiostro cobalto, carta, portici e gesti personali.

## Colori

| Ruolo | Colore | Uso |
| --- | --- | --- |
| Cobalto | #0645c0 | Identità, azioni principali, titoli |
| Blu profondo | #132f61 | Testi secondari e dettagli |
| Carta | #f8f8f3 | Superficie principale |
| Inchiostro | #171a22 | Testo corrente |
| Ocra | #f3cb51 | Accento della sezione giochi |
| Terracotta | #a1472e | Richiamo alla strada e al negozio |

I testi lunghi restano su fondi uniformi; le texture non devono compromettere il contrasto. Il cobalto ha priorità sugli accenti delle singole sezioni.

## Tipografia e composizione

Bodoni Moda per titoli e piccoli momenti editoriali; Manrope per lettura e controlli. Font locali. Testo principale almeno 16 px, righe brevi, titoli dimensionati per schermi da 320 px. L’asimmetria degli angoli richiama l’apertura di una vetrina: applicarla ai pulsanti e ai pannelli principali, evitando di ripeterla su ogni elemento.

## Famiglia di illustrazioni

Asset originali generati con ImageGen: portici, regalo, giochi e fondo carta/inchiostro. Tratto a stampa, grana discreta, cobalto dominante. Le illustrazioni sono decorative: non rappresentano prodotti disponibili, una mappa o il rilievo del negozio. Non contengono testo necessario a capire o usare il sito. File trasparenti per mantenere flessibili le superfici. Gli originali sono conservati fra i risultati di generazione; il repository contiene le versioni WebP ottimizzate.

## Contenuti e interazioni

Una voce personale, concreta e senza superlativi: «Per chi è?», «Con chi si gioca?», «Apri le indicazioni». Nessuna disponibilità, recensione, affiliazione o condizione di servizio inventata. I contenuti IT/EN danno la stessa informazione; il diario resta in italiano con lingua dichiarata.

Pulsanti con rilievo sottile e pressione visibile; focus da tastiera evidente; icone funzionali sempre accompagnate da etichetta. Le illustrazioni non catturano clic e sono escluse dall’albero di accessibilità. Movimento solo in risposta alle azioni, con rispetto di reduced motion. Su mobile: controlli almeno 44 px, schede in colonna e decorazioni subordinate al testo.

## Impiego

- Portico: invito alla visita e indirizzo; nessuna funzione cartografica.
- Regalo: guida alla scelta e stato vuoto del catalogo.
- Giochi: domande su età, partecipanti e luogo di gioco.
- Carta/inchiostro: superfici brevi e aree editoriali, mai sotto campi di input o lunghi paragrafi.

Per aggiungere asset seguire il manifest `assets.json`, mantenendo prompt, dimensioni, destinazione e testo alternativo. Non rigenerare il logo quando serve solo un altro formato: usare il master esistente.
