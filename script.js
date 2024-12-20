// Array di domande e risposte
const questions = [
    {
        "question": "Secondo le ultime linee guida Europee (ESMO 2021), quale tra le seguenti sono considerate possibili alternative di prima linea nel trattamento sistemico del tumore del rene in stadio avanzato 'intermediate/poor-diagnosis'?",
        "options": [
            "Cabozantinib",
            "Pembrolizumab + Axitinib",
            "Pembrolizumab + Lenvatinib (non ancora approvato in Italia)",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Nei pazienti con carcinoma del retto, quale delle seguenti indagini strumentali NON è ancora utilizzata di routine per una corretta stadiazione locale di malattia?",
        "options": [
            "RMN pelvi",
            "TC torace-addome-pelvi con mdc",
            "PET-FDG",
            "Ecografia trans-anale"
        ],
        "correct": 2
    },
    {
        "question": "Allodinia è:",
        "options": [
            "La percezione del dolore per uno stimolo che abitualmente è doloroso",
            "La percezione di benessere per uno stimolo che abitualmente non è doloroso",
            "La percezione del mancamento per uno stimolo che abitualmente non è doloroso",
            "La percezione del dolore per uno stimolo che abitualmente non è doloroso"
        ],
        "correct": 3
    },
    {
        "question": "Quale delle seguenti affermazioni sul carcinoma pancreatico 'resecabile' è SBAGLIATA?",
        "options": [
            "Rappresentano circa il 20% dei casi alla diagnosi",
            "Quando possibile, la chirurgia upfront rimane l'opzione di scelta (salvo ingresso in studi clinici)",
            "Il tipo di intervento chirurgico dipende dalla sede del tumore (DPC, pancreatisectomia distale o totale)",
            "La sopravvivenza globale a 5 anni dall'intervento chirurgico resettivo è pari al 50%"
        ],
        "correct": 3
    },
    {
        "question": "Il Tapentadolo impedisce:",
        "options": [
            "La ricaptazione della Nor-capsaicina",
            "La ricaptazione della Nor-serotonina",
            "La ricaptazione della Nor-adrenalina",
            "La ricaptazione della Nor-glutamina"
        ],
        "correct": 2
    },
    {
        "question": "Nella valutazione clinica di un paziente affetto da HCC, quale tra i seguenti NON è uno dei parametri necessari per il calcolo del 'Child-Pugh score'?",
        "options": [
            "Presenza/assenza di ascite",
            "Valori di INR",
            "Valori di creatinina",
            "Valori di albuminemia"
        ],
        "correct": 2
    },
    {
        "question": "Quale dei seguenti NON è considerato uno dei 'Sette sigilli del cancro'?",
        "options": [
            "Accorciamento progressivo dei telomeri",
            "Microambiente infiammatorio",
            "Insensibilità ai fattori anti-crescita",
            "Invasione tissutale e metastasi"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti NON rientra tra le caratteristiche del paziente ottimale candidabile alla TACE nel trattamento dell'HCC?",
        "options": [
            "Assenza di metastasi extraepatiche",
            "BCLC stage B",
            "Presenza di trombosi vascolare",
            "Funzione epatica preservata"
        ],
        "correct": 2
    },
    {
        "question": "Quali delle seguenti affermazioni riguardo la terapia adiuvante nei pazienti operati per CRC è CORRETTA?",
        "options": [
            "Prevede l'impiego di doppiette di farmaci a base di Irinotecan",
            "Deve essere iniziata entro 6-8 settimane dall'intervento chirurgico",
            "È sempre raccomandata indipendentemente dallo stadio di malattia",
            "Non è mai indicata"
        ],
        "correct": 1
    },
    {
        "question": "L'acceleratore lineare è impiegato nei trattamenti di radioterapia:",
        "options": [
            "Con fasci provenienti da una sorgente posta all'esterno del paziente",
            "Con sorgenti radioattive non sigillate",
            "Con sorgenti radioattive sigillate",
            "Associata a farmaci ipotensivi"
        ],
        "correct": 0
    },
    {
        "question": "A partire dal XIX secolo:",
        "options": [
            "La scienza medica ha assunto su di sé le funzioni precedentemente svolte dalla religione",
            "La religione ha assunto su di sé le funzioni precedentemente svolte dalla scienza medica",
            "La religione ha assunto su di sé le funzioni precedentemente svolte dalla psicologia",
            "La scienza medica ha assunto su di sé le funzioni precedentemente svolte dalla psicologia"
        ],
        "correct": 0
    },
    {
        "question": "Quale fra i seguenti NON è comunemente considerato un fattore prognostico per un paziente con tumore del rene?",
        "options": [
            "Presenza di ipomagnesemia",
            "Grading della neoplasia renale",
            "Presenza di componente sarcomatoide",
            "Parametro T"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti affermazioni circa il trattamento sistemico di prima linea nei pazienti con tumore del polmone non a piccole cellule in stadio IV è ERRATA?",
        "options": [
            "Nei pazienti con malattia 'oncogene-addicted', il trattamento di scelta è rappresentato dalla chemio-immunoterapia",
            "Nei pazienti con mutazione di EGFR, il trattamento di scelta è rappresentato da inibitori di EGFR di III generazione (Osimertinib)",
            "Nei pazienti 'non oncogene-addicted' con espressione di PD-L1 > 50%, il trattamento di scelta è rappresentato dall'immunoterapia",
            "Nei pazienti con riarrangiamento di ALK, il trattamento di scelta è rappresentato da inibitori di ALK di II generazione (Alectinib)"
        ],
        "correct": 0
    },
    {
        "question": "L'HIPEC (indica l’affermazione sbagliata):",
        "options": [
            "Consiste nella somministrazione intraperitoneale di antiblastici",
            "Tra i farmaci più utilizzati ci sono cisplatino e taxolo",
            "È indicata in tutti i casi di carcinoma ovarico",
            "L’ipertermia applicata aumenta la permeabilità delle membrane cellulari ai chemioterapici"
        ],
        "correct": 2
    },
    {
        "question": "L'esposizione lavorativa all'asbesto (amianto) è considerato un fattore di rischio per lo sviluppo di quale tumori?",
        "options": [
            "Mesotelioma",
            "Tumore ovarico",
            "Colangiocarcinoma",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Il microcitoma polmonare o SCLC (indicare l'unica affermazione CORRETTA):",
        "options": [
            "È scarsamente chemiosensibile",
            "È un tumore a prevalente localizzazione subpleurica",
            "È spesso operabile alla diagnosi",
            "Rappresenta circa il 10-15% dei tumori del polmone"
        ],
        "correct": 3
    },
    {
        "question": "Il cancro:",
        "options": [
            "A prescindere dalla sua effettiva gravità, ci costringe a negare l'idea della finitudine",
            "Solo se estremamente grave ci costringe a negare l'idea della finitudine",
            "A prescindere dalla sua effettiva gravità, ci costringe a non negare più l'idea della finitudine",
            "Solo se estremamente grave ci costringe a non negare più l'idea della finitudine"
        ],
        "correct": 2
    },
    {
        "question": "La radioterapia esterna con acceleratore lineare si basa sull'uso di:",
        "options": [
            "Fasci di elettroni e neutroni",
            "Protoni e ioni carbonio",
            "Fotoni ed elettroni",
            "Protoni e fotoni"
        ],
        "correct": 2
    },
    {
        "question": "Durante la radioterapia 'frazionata' si assiste:",
        "options": [
            "Al progressivo peggioramento dell'ipossia tumorale",
            "Alla comparsa del fenomeno dell'ipossia acuta",
            "Ad una accelerata neoangiogenesi",
            "Alla progressiva riossigenazione del tumore"
        ],
        "correct": 3
    },
    {
        "question": "Quale fra le seguenti affermazioni sul colangiocarcinoma (CCA) è SBAGLIATA?",
        "options": [
            "Un trattamento chemio-radioterapico adiuvante al momento è raccomandato nei pazienti sottoposti a resezione R1",
            "Non vi è alcun trattamento adiuvante approvato in questa neoplasia",
            "Lo 'standard of care' di prima linea è rappresentato dall'associazione Cisplatino + Gemcitabina (Schema ABC02)",
            "Nei pazienti con CCA avanzato che non ricevono alcun tipo di trattamento (chirurgia, chemioterapia e/o radioterapia) la sopravvivenza mediana è circa 4 mesi"
        ],
        "correct": 1
    },
    {
        "question": "Nella titolazione degli oppiacei il farmaco oppiaceo è:",
        "options": [
            "L'indicatore",
            "L'intervallo",
            "Il titolando",
            "Il titolante"
        ],
        "correct": 3
    },
    {
        "question": "Quale dei seguenti è il regime chemioterapico più usato per il trattamento del carcinoma ovarico?",
        "options": [
            "Carboplatino e Taxolo",
            "Vinorelbina",
            "5-fluoro-uracile",
            "5-fluoro-uracile e Oxaliplatino"
        ],
        "correct": 0
    },
    {
        "question": "Secondo le ultime linee guida nazionali (AIOM 2019), quale strategia terapeutica nel setting adiuvante è percorribile nei pazienti con melanoma operato?",
        "options": [
            "INF-alfa",
            "Dabrafenib-Trametinib (se BRAF mut)",
            "Trial clinico",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Il 'Melanoma nodulare' (indicare la risposta SBAGLIATA):",
        "options": [
            "Esiste una variante amelanotica",
            "Rappresenta circa il 40% di tutti i melanomi cutanei",
            "Può essere ulcerato o crostoso",
            "È il secondo tipo più comune di melanoma"
        ],
        "correct": 1
    },
    {
        "question": "La radioterapia intraoperatoria:",
        "options": [
            "Permette la diretta esposizione e individuazione del bersaglio radioterapico",
            "Permette di evitare l'irradiazione degli organi sani grazie al loro diretto allontanamento dalla proiezione del fascio di radiazioni",
            "È in genere somministrata con fasci di elettroni per ridurre l'irradiazione di organi 'a valle' del bersaglio",
            "Tutte le risposte sono corrette"
        ],
        "correct": 3
    },
    {
        "question": "Nei pazienti con tumore del pancreas radicalmente operato, il trattamento chemioterapico adiuvante (indicare la risposta SBAGLIATA):",
        "options": [
            "Prevede l'impiego di immunoterapia",
            "La scelta dello schema terapeutico deve considerare le condizioni cliniche generali del paziente",
            "Si può valutare anche un trattamento radioterapico in casi selezionati (resezione R1)",
            "Può prevedere schemi di monochemioterapia o di combinazione"
        ],
        "correct": 0
    },
    {
        "question": "Quali sono i principali fattori di rischio per lo sviluppo del colangiocarcinoma intraepatico (iCCA)?",
        "options": [
            "Malattia di Caroli",
            "NAFLD/NASH",
            "HBV - HCV",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Un adeguato frazionamento della dose (almeno 3-4 settimane di trattamento) è utile in caso di:",
        "options": [
            "Radioterapia curativa",
            "Radioterapia palliativa",
            "Brachiterapia con Californio 252",
            "Ipertermia"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra i seguenti fattori di rischio può influenzare la prognosi di un paziente neoplastico?",
        "options": [
            "Stadio di malattia",
            "Istotipo",
            "Performance status",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "È corretto dire che la chirurgia per il tumore del polmone non a piccole cellule (NSCLC):",
        "options": [
            "È di elezione anche nei pazienti con interessamento linfonodale extraregionale (N3)",
            "Con l'avvento dell'immunoterapia non è più una terapia di riferimento",
            "È parte dell'approccio multidisciplinare anche nei pazienti in stadio IV",
            "È di elezione per gli stadi I, IIa, IIb, IIIa"
        ],
        "correct": 3
    },
    {
        "question": "Nelle pazienti con tumore della mammella triple-negative radicalmente operate quale delle seguenti affermazioni è CORRETTA?",
        "options": [
            "Non è mai indicato alcun trattamento ad intento adiuvante",
            "Per gli stadi II e III considerare chemioterapia adiuvante",
            "È sempre indicata una terapia ormonale post-chirurgia",
            "È indicata solo RT post-chirurgica quando l'intervento non è radicale"
        ],
        "correct": 1
    },
    {
        "question": "Secondo la Classificazione di Bismuth-Corlette, il colangiocarcinoma perilare (o Tumore di Klatskin) di tipo II è (indicare la definizione CORRETTA):",
        "options": [
            "Un tumore multifocale o che interessa la confluenza ed i dotti biliari di II ordine bilateralmente",
            "Un tumore che interessa il dotto epatico comune ed il dotto epatico di sinistra",
            "Un tumore del dotto epatico comune che raggiunge la confluenza dei dotti epatici destro e sinistro",
            "Un tumore che interessa il dotto epatico comune ed il dotto epatico di destra"
        ],
        "correct": 0
    },
    {
        "question": "Per la valutazione del parametro N nella stadiazione del tumore del polmone non è di comune impiego?",
        "options": [
            "La mediastinoscopia",
            "La videotoracoscopia",
            "La PET FDG",
            "La toracotomia esplorativa"
        ],
        "correct": 3
    },
    {
        "question": "Quale tra le seguenti NON è considerata dalle linee guida una possibile opzione di trattamento per i pazienti con colangiocarcinoma intraepatico metastatico?",
        "options": [
            "Prima linea con l’associazione Carboplatino + Vinorelbina",
            "Seconda linea con Ivosidenib se IDH1-mutati",
            "Seconda linea con Pemigatinib con fusioni/riarrangiamenti di FGFR2",
            "Prima linea con l’associazione Cisplatino + Gemcitabina (ABC02)"
        ],
        "correct": 0
    },
    {
        "question": "Nei pazienti naive agli oppiacei, il protocollo CoDem prevede la somministrazione di:",
        "options": [
            "Ossicodone 10 mg due volte die e 5 mg di morfina solfato a rilascio immediato come ‘rescue dose’, massimo 4 volte die",
            "Ossicodone 5 mg due volte die e 5 mg di morfina solfato a rilascio immediato come ‘rescue dose’ massimo 6 volte die",
            "Ossicodone 20 mg due volte die e 5 mg di morfina solfato a rilascio immediato come ‘rescue dose’ massimo 4 volte die",
            "Ossicodone 5 mg due volte die e 5 mg di morfina solfato a rilascio immediato come ‘rescue dose’ massimo 4 volte die"
        ],
        "correct": 3
    },
    {
        "question": "La resilienza:",
        "options": [
            "Porta a rifiutare il cambiamento",
            "Porta a essere disposti a cambiare",
            "Porta a rispondere con strategie passive alle difficoltà",
            "Porta a confermare i precedenti significati degli eventi"
        ],
        "correct": 1
    },
    {
        "question": "Quale è il ruolo del Sorafenib nel trattamento del carcinoma epatocellulare?",
        "options": [
            "È indicato in prima linea nel trattamento dell’HCC avanzato",
            "Non è un farmaco utilizzabile nel trattamento dell’HCC per la sua tossicità",
            "È indicato solo in terza linea nel trattamento dell’HCC avanzato",
            "Il farmaco è tuttora in sperimentazione"
        ],
        "correct": 0
    },
    {
        "question": "In un paziente con metastasi epatiche da CRC, la metastasectomia può essere indicata se:",
        "options": [
            "L’intervento chirurgico è potenzialmente radicale",
            "Anche se l’intervento chirurgico non è previsto essere radicale",
            "Anche se l’intervento comporta una funzionalità epatica residua non adeguata",
            "Sono presenti multiple metastasi extra-epatiche"
        ],
        "correct": 0
    },
    {
        "question": "Tra i vari sottotipi di melanoma, tutte le seguenti affermazioni sulle caratteristiche tipiche del 'Lentigo Maligna Melanoma' sono vere, TRANNE (INDICARE L’UNICA RISPOSTA ERRATA):",
        "options": [
            "È limitata alle sedi fotoesposte",
            "Rappresenta il 5-10 % dei casi di melanoma cutaneo",
            "Si presenta come chiazza asimmetrica variamente pigmentata",
            "Presenta rapida evoluzione (in pochi mesi)"
        ],
        "correct": 3
    },
    {
        "question": "A partire dal XIX secolo:",
        "options": [
            "Malattia e morte accentuano il loro carattere comunitario e diventano sempre più un 'affare' privato, non gestito da specialisti",
            "Malattia e morte perdono il loro carattere comunitario e diventano sempre più un 'affare' privato e gestito da specialisti",
            "Malattia e morte accentuano il loro carattere comunitario e diventano sempre più un 'affare' privato e gestito da specialisti",
            "Malattia e morte accentuano il loro carattere comunitario e diventano sempre meno un 'affare' privato e gestito da specialisti"
        ],
        "correct": 1
    },
    {
        "question": "In radioterapia, sono alla base della necessità di frazionare la dose radioterapica in numerose sedute i seguenti fenomeni radiobiologici:",
        "options": [
            "Riossigenazione",
            "Redistribuzione nelle diverse fasi del ciclo cellulare",
            "Riparazione del danno al DNA",
            "Tutte le risposte sono corrette"
        ],
        "correct": 3
    },
    {
        "question": "Da un punto di vista epidemiologico, il CRC … indicare l’affermazione CORRETTA:",
        "options": [
            "È la prima neoplasia per frequenza in entrambi i sessi",
            "L’incidenza è attualmente in calo grazie ai programmi di screening in entrambi i sessi",
            "L’incidenza è in graduale aumento",
            "È la quinta causa di morte per neoplasia nel sesso femminile"
        ],
        "correct": 1
    },
    {
        "question": "Convenzionalmente, il retto è esteso:",
        "options": [
            "Fino a 20 cm dal margine anale",
            "Fino a 5 cm dal margine anale",
            "Fino a 12 cm dal margine anale",
            "Fino a 8 cm dal margine anale"
        ],
        "correct": 2
    },
    {
        "question": "Quale di questi non è un fattore prognostico per il tumore della mammella?",
        "options": [
            "Grado istologico",
            "EGFR",
            "HER2",
            "Età della paziente"
        ],
        "correct": 1
    },
    {
        "question": "La somministrazione transdermica di oppiacei:",
        "options": [
            "Prevede la formazione di un accumulo transitorio dell’oppiaceo nella cute",
            "Prevede la formazione di un accumulo dinamico dell’oppiaceo nella cute",
            "Prevede la formazione di un accumulo intermittente dell’oppiaceo nella cute",
            "Non prevede la formazione di un accumulo transitorio dell’oppiaceo nella cute"
        ],
        "correct": 0
    },
    {
        "question": "Il principale vantaggio della brachiterapia è rappresentato da:",
        "options": [
            "La possibilità di somministrare una dose di radiazioni elevata al tumore e molto ridotta agli organi circostanti",
            "La possibilità di visualizzare il tumore durante l’irradiazione",
            "La possibilità di associare farmaci targeted prima e dopo l’irradiazione",
            "Tutte le risposte sono corrette"
        ],
        "correct": 0
    },
    {
        "question": "L’impiego di immunoterapia con farmaci anti PD-1 (Pembrolizumab) in prima linea in pazienti affetti da NSCLC ed espressione del PD-1>50% (indicare l’unica affermazione CORRETTA):",
        "options": [
            "Ha mostrato risultati detrimentali rispetto alla chemioterapia",
            "Si associa ad un aumento della OS",
            "Può essere utilizzato solo in pazienti unfit per chemioterapia",
            "Non ha mostrato alcuna efficacia rispetto alla chemioterapia"
        ],
        "correct": 1
    },
    {
        "question": "Il trattamento medico dei pazienti con tumore del polmone non a piccole cellule in stadio IV:",
        "options": [
            "Può prevedere diverse opzioni terapeutiche tra le quali: immunoterapia, farmaci target e chemioterapia",
            "Non prevede la valutazione preventiva dell’“oncogene-addicted”",
            "Prevede unicamente l’impiego di chemioterapici",
            "Prevede sempre l’impiego d’immunoterapia"
        ],
        "correct": 0
    },
    {
        "question": "Quale fra i seguenti affermazioni sul tumore del rene è CORRETTA?",
        "options": [
            "Solo il 10% dei pazienti che esordiscono con malattia localizzata svilupperà in seguito una malattia avanzata",
            "Il 50% esordisce con una malattia metastatica",
            "La sopravvivenza a 5 anni è strettamente correlata allo stadio di malattia",
            "È nettamente più frequente nelle donne"
        ],
        "correct": 2
    },
    {
        "question": "Un carcinoma ovarico con versamento pleurico (citologia positiva) rappresenta uno stadio FIGO:",
        "options": [
            "Stadio IV",
            "Stadio I",
            "Stadio II",
            "Stadio III"
        ],
        "correct": 0
    },
    {
        "question": "Si intende per brachiterapia un trattamento radioterapico:",
        "options": [
            "Somministrato lentamente",
            "Dedicato a pazienti di bassa statura",
            "Usato solo nei tumori uterini",
            "Basato sull’uso di sorgenti radioattive"
        ],
        "correct": 3
    },
    {
        "question": "La radiosensibilità dei tumori è:",
        "options": [
            "Scarsissima per tutte le neoplasie",
            "Elevatissima per tutte le neoplasie",
            "Molto diversa tra le diverse neoplasie",
            "La stessa per tutte le neoplasie"
        ],
        "correct": 2
    },
    {
        "question": "L’adroterapia, o radioterapia basata sull’uso di particelle pesanti, può essere particolarmente utile in caso di tumori:",
        "options": [
            "Molto radio resistenti",
            "Molto sintomatici",
            "Molto indifferenziati",
            "Molto mobili"
        ],
        "correct": 0
    },
    {
        "question": "Il Dabrafenib (indicare l’unica risposta corretta):",
        "options": [
            "E’ indicato nel trattamento del melanoma avanzato con mutazione BRAF V600E",
            "E’ un anticorpo monoclonale anti-PD-1",
            "E’ un anticorpo monoclonale anti-PD-L1",
            "E’ indicato nel trattamento del melanoma avanzato senza mutazione BRAF V600E"
        ],
        "correct": 0
    },
    {
        "question": "Nella valutazione del dolore, la Scala Analogica Visiva (VAS):",
        "options": [
            "Richiede coordinazione visivo-motoria da parte del paziente",
            "Non richiede alcuna capacità di astrazione",
            "È un metodo multidimensionale di valutazione del dolore",
            "È di solito composta da una retta di 15 cm"
        ],
        "correct": 0
    },
    {
        "question": "Quale dei seguenti NON è un’opzione terapeutica per il trattamento dei pazienti con HCC avanzato?",
        "options": [
            "Lenvatinib",
            "Atezolizumab + Bevacizumab",
            "Pazopanib",
            "Cabozantinib"
        ],
        "correct": 2
    },
    {
        "question": "Nei pazienti con colangiocarcinoma operato, quale delle seguenti affermazioni sulla terapia adiuvante è CORRETTA?",
        "options": [
            "Prevede esclusivamente la radioterapia",
            "È indicata solo nei pazienti con resezione R2",
            "Non è mai indicata",
            "È raccomandata nei pazienti sottoposti a resezione R0-R1"
        ],
        "correct": 3
    },
    {
        "question": "Quale tra le seguenti NON è considerata un’indagine di secondo livello per la diagnosi di carcinoma pancreatico?",
        "options": [
            "RM addome + Colangio-Wirsung RMN",
            "ERCP",
            "Ecoendoscopia",
            "Scintigrafia ossea"
        ],
        "correct": 3
    },
    {
        "question": "Riguardo la terapia adiuvante indicata nei pazienti con carcinoma pancreatico operati radicalmente, tutte le seguenti affermazioni sono corrette TRANNE una (indicare l’unica SBAGLIATA):",
        "options": [
            "Può prevedere l’utilizzo di regimi di a 1, 2 o 3 farmaci (in base alle condizioni cliniche del paziente)",
            "È raccomandata solo nello Stadio I",
            "Tra i regimi di chemioterapia più studiati in questo setting vi sono quelli a base di 5-FU e Gemcitabina",
            "Un recente studio di fase III ha valutato l’efficacia dello schema FOLFIRINOX anche nel setting adiuvante"
        ],
        "correct": 1
    },
    {
        "question": "Il programma di screening per le donne dai 45 ai 49 anni prevede:",
        "options": [
            "Mammografia ogni 2 anni",
            "Mammografia ogni anno",
            "Mammografia ogni 5 anni",
            "Mammografia e RMN mammaria ogni anno"
        ],
        "correct": 1
    },
    {
        "question": "Secondo Aries (1975), la morte e il morire:",
        "options": [
            "Affiancano la superstizione come tabù della nostra epoca",
            "Hanno preso il posto del sesso come nuovo tabù della nostra epoca",
            "Affiancano il sesso come tabù della nostra epoca",
            "Hanno preso il posto della superstizione come nuovo tabù della nostra epoca"
        ],
        "correct": 1
    },
    {
        "question": "Nei tumori del retto sottoposti a terapia neo-adiuvante e successiva chirurgia radicale, tutte le seguenti affermazioni su un eventuale terapia adiuvante sono corrette tranne UNA (indicare l’unica affermazione SBAGLIATA):",
        "options": [
            "In caso di scarsa risposta (yp T3-4 e/o ypN+), è indicato considerare chemioterapia a base oxaliplatino + fluoro pirimidine",
            "In caso di residuo minimo di malattia (ypT1-2 N0), è indicato considerare una monochemioterapia con fluoropirimidine",
            "In caso di risposta completa al trattamento neo-adiuvante, si può considerare una monochemioterapia con fluoro pirimidine",
            "È sempre indicata una chemioterapia a base di platino + fluoro pirimidine associato ad un farmaco biologico (a seconda dell’analisi molecolare sul pezzo operatorio)"
        ],
        "correct": 3
    },
    {
        "question": "Nei pazienti con carcinoma pancreatico operati radicalmente, quali delle seguenti affermazioni riguardanti la terapia adiuvante è sbagliata?",
        "options": [
            "Un recente studio di fase III ha valutato l'efficacia dello schema FOLFIRINOX anche nel setting adiuvante",
            "È raccomandata solo in un piccolo sottogruppo di pazienti",
            "Tra i regimi di chemioterapia più studiati in questo setting vi sono quelli a base di 5-FU e Gemcitabina",
            "Può prevedere l'utilizzo di regimi a 1, 2 o 3 farmaci (in base alle condizioni cliniche del paziente)"
        ],
        "correct": 1
    },
    {
        "question": "Nel colloquio col paziente, l'uso delle reflection skills serve:",
        "options": [
            "Per riflettere la comprensione del vissuto emotivo del paziente",
            "Per riassumere quanto ha detto il medico",
            "Per riflettere la comprensione della malattia del paziente",
            "Per riassumere quanto ha detto il paziente"
        ],
        "correct": 0
    },
    {
        "question": "L'effetto della radioterapia è limitato dall'ipossia tumorale; questa può essere:",
        "options": [
            "Acuta o cronica",
            "Sempre temporanea",
            "Sempre persistente",
            "Presente soprattutto alla fine del trattamento"
        ],
        "correct": 0
    },
    {
        "question": "Nella stadiazione del tumore alla mammella, T1c significa che il tumore primitivo è?",
        "options": [
            "> di 1 cm ma < di 2 cm",
            "Uguale a 2 cm",
            "> di 2 cm ma < di 5 cm",
            "> di 2 cm ma < di 10 cm"
        ],
        "correct": 0
    },
    {
        "question": "Si intende per effetto ossigeno:",
        "options": [
            "La minore sensibilità alle radiazioni delle cellule ossigenate",
            "La maggiore sensibilità alle radiazioni delle cellule non ossigenate",
            "La minor tossicità nei tessuti ipossici ipo-ossigenati",
            "Nessuna risposta è corretta"
        ],
        "correct": 3
    },
    {
        "question": "Quale fra queste non è una terapia anti-HER2?",
        "options": [
            "Trastuzumab",
            "Pertuzumab",
            "Lapatinib",
            "Atezolizumab"
        ],
        "correct": 3
    },
    {
        "question": "Qual è la sopravvivenza a 5 anni per le pazienti con tumore alla mammella localizzato?",
        "options": [
            "60%",
            "80%",
            "95%",
            "100%"
        ],
        "correct": 2
    },
    {
        "question": "La chirurgia per il NSCLC:",
        "options": [
            "È di elezione per gli stadi I, IIa, IIb, IIIa",
            "È di elezione anche nei pazienti con interessamento linfonodale extraregionale",
            "È parte dell'approccio multidisciplinare anche nei pazienti in stadio IV",
            "Con l'avvento dell'immunoterapia non è più una terapia di riferimento"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti affermazioni sull'inquadramento diagnostico-terapeutico del tumore del testicolo è sbagliata?",
        "options": [
            "Nell'ambito del work-up diagnostico, è importante valutare il dosaggio dei marcatori tumorali (AFP, LDH, beta-HCG)",
            "La biopsia testicolare viene sempre eseguita al momento della diagnosi, prima di pianificare qualunque futuro iter terapeutico (chirurgico o non chirurgico)",
            "L'intervento chirurgico (orchiectomia) rappresenta il primo atto diagnostico-terapeutico",
            "La presentazione più comune è rappresentata dalla presenza di una tumefazione testicolare"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti affermazioni è sbagliata?",
        "options": [
            "L'esplorazione rettale costituisce generalmente il primo approccio diagnostico nei pazienti con tumore prostatico",
            "L'ecografia trans-rettale e la RMN con bobina endorettale permettono di valutare l'estensione del tumore a livello locale (T)",
            "La PET-colina è fondamentale per la valutazione pre-operatoria dei parametri N e M",
            "La TC permette di valutare l'eventuale interessamento dei linfonodi pelvici (N)"
        ],
        "correct": 2
    },
    {
        "question": "Il trattamento medico dei pazienti con NSCLC in stadio IV e presenza di riarrangiamento di ALK:",
        "options": [
            "Prevede l'impiego di farmaci inibitori di ALK (es. alectinib, ceritinib o crizotinib) in prima linea",
            "Prevede unicamente l'impiego di chemioterapici",
            "Prevede sempre l'impiego di immunoterapia di prima linea",
            "Prevede l'impiego di farmaci quali erlotinib, gefitinib, afatinib, osimertinib"
        ],
        "correct": 0
    },
    {
        "question": "Il vemurafenib è:",
        "options": [
            "Un anti-PD-1",
            "Un anti-CTLA4",
            "Un inibitore di BRAF",
            "Un inibitore di NRAS"
        ],
        "correct": 2
    },
    {
        "question": "Nei pazienti con NSCLC in stadio avanzato, 'oncogene-addicted' con EGFR+ (indicare l'affermazione corretta):",
        "options": [
            "In presenza di mutazione di EGFR, i pazienti possono essere trattati in prima linea con un EGFR-inibitore",
            "Dai risultati di recenti studi, in prima linea dovrebbe essere preso in considerazione un EGFR-inibitore di III generazione (Osimertinib)",
            "In caso di progressione ad una prima linea con EGFR-inibitore, deve essere valutata la presenza dell'eventuale mutazione T790M",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
     {
        "question": "Quale delle seguenti affermazioni riguardo il trattamento chirurgico del carcinoma gastrico è corretta:",
        "options": [
            "La resezione endoscopica è comunemente utilizzata in tutti i pazienti in stadio I-II",
            "La linfoadenectomia D2 prevede l'asportazione di massimo 10 linfonodi",
            "Il tipo di intervento chirurgico dipende dalla sede e dallo stadio di malattia",
            "La linfoadenectomia è effettuata solo in casi altamente selezionati"
        ],
        "correct": 2
    },
    {
        "question": "Nell'ambito della biologia molecolare del carcinoma pancreatico, quali dei seguenti geni sono frequentemente mutati in questa patologia?",
        "options": [
            "KRAS",
            "p16",
            "SMAD4",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Tra i segnali per cogliere l'agenda del paziente rientrano:",
        "options": [
            "Temi reiterati dal paziente",
            "Argomenti che riguardano la malattia",
            "Esame obiettivo",
            "Le reazioni dei familiari"
        ],
        "correct": 0
    },
    {
        "question": "La radioterapia può avere finalità:",
        "options": [
            "Curativa",
            "Adiuvante",
            "Palliativa",
            "Tutte le risposte sono corrette"
        ],
        "correct": 3
    },
    {
        "question": "Quale tra i seguenti farmaci rientra tra le possibili alternative nel trattamento sistemico del tumore del rene in stadio avanzato 'intermediate/poor-prognosis'?",
        "options": [
            "Cabozantinib",
            "Pazopanib",
            "Tivozanib",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Nella valutazione clinica di un paziente affetto da HCC, quale tra i seguenti NON è un parametro necessario per il calcolo del 'Child-Pugh Score'?",
        "options": [
            "Presenza/assenza di ascite",
            "Valori di albuminemia",
            "Valori del tempo di protrombina (PT)",
            "Valori del tempo di tromboplastina (aPTT)"
        ],
        "correct": 3
    },
    {
        "question": "Qual è la risposta corretta riguardo l'utilizzo della chemioterapia nel caso dell'HCC?",
        "options": [
            "È risultata nel complesso scarsamente efficace nel trattamento dell'HCC",
            "Il Cisplatino è uno dei chemioterapici più utilizzati in questa neoplasia",
            "È efficace e impiegata di routine in prima linea",
            "La Doxorubicina è uno dei chemioterapici più utilizzati in questa neoplasia"
        ],
        "correct": 0
    },
    {
        "question": "Il più temuto effetto collaterale dei FANS è:",
        "options": [
            "La nausea",
            "Il prurito",
            "La costipazione",
            "La gastrolesività"
        ],
        "correct": 3
    },
     {
        "question": "La radioterapia palliativa richiede tempi, rispetto alla radioterapia curativa:",
        "options": [
            "Più brevi",
            "Più lunghi",
            "Uguali",
            "Variabili in base all'uso di immunoterapia concomitante"
        ],
        "correct": 0
    },
    {
        "question": "Quando è indicato l'uso del Palbociclib (secondo le attuali linee guida)?",
        "options": [
            "Tumore della mammella metastatico con recettori ormonali positivi",
            "Tumore della mammella metastatico con HER2 positivo",
            "Tumore della mammella localizzato con recettori ormonali positivi",
            "Tumore della mammella localizzato con HER2 positivo"
        ],
        "correct": 0
    },
    {
        "question": "Il melanoma nodulare (indicare la risposta SBAGLIATA):",
        "options": [
            "È il secondo tipo più comune di melanoma",
            "Rappresenta circa il 30% di tutti i melanomi cutanei",
            "Può essere ulcerato o crostoso",
            "Esiste una variante amelanotica"
        ],
        "correct": 1
    },
    {
        "question": "In pz con carcinoma pancreatico avanzato, la scelta del trattamento chemioterapico dipende da diversi fattori, quali?",
        "options": [
            "Performance status del paziente",
            "Tossicità dello schema proposto",
            "Sintomatologia riferita dal paziente",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Tra gli agenti chemioterapici utilizzati nel trattamento del melanoma in stadio avanzato vi sono:",
        "options": [
            "Temozolomide",
            "Dacarbazina",
            "Fotoemustina",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Il Fentanile è un analgesico che può essere somministrato per via:",
        "options": [
            "Sistemica",
            "Transdermica",
            "Transmucosale",
            "Tutte le precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Il dolore nocicettivo si genera per:",
        "options": [
            "Blocco dei nocicettori in periferia",
            "Attivazione dei nocicettori in periferia",
            "Blocco dei nocicettori nel sistema nervoso centrale",
            "Nessuno dei precedenti"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti affermazioni sul tumore del rene è sbagliata?",
        "options": [
            "La sopravvivenza a 5 anni è strettamente legata allo stadio alla diagnosi",
            "Il 25-30% dei casi esordisce con malattia metastatica",
            "Meno del 20% dei pazienti che esordiscono con malattia localizzata svilupperà una malattia sistemica in seguito",
            "In Europa rappresenta il 3-4% di tutte le neoplasie dell'adulto"
        ],
        "correct": 2
    },
    {
        "question": "Il sistema stadiativo comunemente impiegato nei Paesi occidentali per valutare i pazienti affetti da HCC su fegato cirrotico e per guidare la scelta terapeutica è:",
        "options": [
            "Il sistema di stadiazione TNM",
            "La 'Barcellona Clinic Liver Cancer (BCLC) classification'",
            "Il sistema di valutazione della funzionalità epatica (o classificazione di Child-Pugh)",
            "Il sistema di stadiazione FIGO"
        ],
        "correct": 1
    },
    {
    "question": "Qual è la percentuale di mutazioni BRCA1 e BRCA2 associate al carcinoma della mammella e dell'ovaio?",
    "options": [
        "BRCA1: mammella 70%, ovaio 40%; BRCA2: mammella 40%, ovaio 15%",
        "BRCA1: mammella 50%, ovaio 25%; BRCA2: mammella 30%, ovaio 10%",
        "BRCA1: mammella 80%, ovaio 50%; BRCA2: mammella 60%, ovaio 20%",
        "BRCA1: mammella 40%, ovaio 30%; BRCA2: mammella 25%, ovaio 10%"
    ],
    "correct": 0
},
    {
        "question": "Il tumore della mammella infiltrante più frequente è il:",
        "options": [
            "ca in situ",
            "ca duttale",
            "ca tubulare",
            "ca mucinoso"
        ],
        "correct": 1
    },
    {
        "question": "Quante donne rischiano K mammella in Italia?",
        "options": [
            "1 su 8",
            "1 su 10",
            "1 su 6",
            "1 su 12"
        ],
        "correct": 0
    },
    {
        "question": "Nel tumore del rene, la sopravvivenza mediana a 5 anni è strettamente correlata allo stadio di malattia. Quale tra le seguenti affermazioni è CORRETTA?",
        "options": [
            "Stadio I - OS a 5 anni pari a circa 80%",
            "Stadio II - OS a 5 anni pari a circa 95%",
            "Stadio III - OS a 5 anni pari a circa il 65%",
            "Stadio IV - OS a 5 anni pari a circa il 30%"
        ],
        "correct": 2
    },
    {
        "question": "Terapia adiuvante del colon, quale non si usa?",
        "options": [
            "Irinotecan",
            "5-FU",
            "Capecitabina",
            "Oxaliplatino"
        ],
        "correct": 0
    },
    {
        "question": "Metastasectomia nel K colon metastatico:",
        "options": [
            "Solo quando l'intervento sulle metastasi sarà radicale",
            "Sempre indicata",
            "Non è mai indicata",
            "Solo in caso di coinvolgimento epatico"
        ],
        "correct": 0
    },
    {
        "question": "In ambito epidemiologico, l'HCC (indicare la RISPOSTA CORRETTA):",
        "options": [
            "È la decima causa di morte per neoplasia più frequente nel mondo",
            "In Italia rappresenta una causa molto rara di morte per neoplasia",
            "È più frequente nel sesso maschile",
            "Il picco di incidenza è fra i 40-49 anni"
        ],
        "correct": 2
    },
    {
        "question": "Farmaci per chemio del K pancreas:",
        "options": [
            "Gemcitabina",
            "FOLFIRINOX",
            "Capecitabina",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Quali delle seguenti coppie 'anticorpi immunomodulatori'/'immuno check-point' è SBAGLIATA?",
        "options": [
            "Nivolumab / PD-1",
            "Ipilimumab / CTLA-4",
            "Pembrolizumab / PD-1",
            "Dembrolimumab / PD-1"
        ],
        "correct": 3
    },
    {
        "question": "Il diabete può essere un segno di K pancreas più che un fattore di rischio?",
        "options": [
            "Sì, in alcuni casi",
            "No, è solo un fattore di rischio",
            "Dipende dalla durata del diabete",
            "Non è associato al K pancreas"
        ],
        "correct": 0
    },
    {
        "question": "Quale non è una lesione precancerosa del pancreas?",
        "options": [
            "Pseudocisti",
            "IPMN",
            "PanIN",
            "MCN"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il ruolo del Sorafenib nel trattamento del carcinoma epatocellulare?",
        "options": [
            "Non è un farmaco utilizzabile nel trattamento dell'HCC per la sua tossicità",
            "Il farmaco è tutt'ora in sperimentazione",
            "È indicato in prima linea nel trattamento dell'HCC avanzato",
            "È indicato in seconda linea nel trattamento dell'HCC avanzato"
        ],
        "correct": 2
    },
    {
        "question": "Ossicodone è:",
        "options": [
            "Oppioide maggiore",
            "Oppioide minore",
            "Un FANS",
            "Un analgesico non oppioide"
        ],
        "correct": 0
    },
    {
        "question": "Nella valutazione del dolore, la Scala Verbale Semplice (SVS):",
        "options": [
            "È particolarmente adatta a pazienti di età pre-scolare",
            "Richiede una importante coordinazione visivo-motoria",
            "È molto precisa e permette di valutare anche piccole modificazioni di intensità del dolore",
            "Utilizza una lista di descrittori dell'intensità del dolore, che formano diverse categorie"
        ],
        "correct": 3
    },
    {
        "question": "Uno stimolo nocivo:",
        "options": [
            "Causa risposte riflesse sia somatiche-motorie che neuro-vegetative",
            "Causa solo risposte riflesse somatiche-motorie",
            "Causa solo risposte riflesse neuro-vegetative",
            "Nessuna delle precedenti"
        ],
        "correct": 0
    },
    {
        "question": "Il termine Brachiterapia indica un trattamento con:",
        "options": [
            "Breve durata dell'irradiazione",
            "Breve distanza tra sorgente e tumore",
            "Breve intervallo con l'intervento chirurgico",
            "Breve intervallo con la chemioterapia"
        ],
        "correct": 1
    },
    {
        "question": "L'effetto della radioterapia è limitato dall'ipossia tumorale; questa può essere:",
        "options": [
            "Acuta e cronica",
            "Sempre temporanea",
            "Sempre persistente",
            "Presente soprattutto alla fine del trattamento"
        ],
        "correct": 0
    },
    {
        "question": "Una delle più frequenti indicazioni alla radioterapia palliativa è rappresentata dal trattamento:",
        "options": [
            "Delle metastasi epatiche",
            "Delle metastasi delle ghiandole surrenali",
            "Delle metastasi ossee",
            "Delle metastasi uveali"
        ],
        "correct": 2
    },
    {
        "question": "Una delle tecniche della visita centrata sul paziente è il focusing:",
        "options": [
            "Serve per ripetere le ultime parole dette dal paziente",
            "Serve per spiegare al paziente cosa sta per succedere",
            "Serve per portare l'attenzione del paziente su un aspetto specifico",
            "Serve per verificare che il paziente abbia capito"
        ],
        "correct": 2
    },
    {
        "question": "In sede di colloquio un medico può utilizzare 'domande aperte' soprattutto per:",
        "options": [
            "Controllare l'andamento della comunicazione mantenendone la direzione",
            "Suggerire al paziente il tipo di risposte cercate",
            "Mettere in difficoltà il paziente",
            "Raccogliere informazioni anche sullo stato emotivo del paziente"
        ],
        "correct": 3
    },    
    {
        "question": "La radioterapia delle lesioni delle corde vocali:",
        "options": [
            "Produce un analogo controllo di malattia rispetto alla chirurgia, ma con un miglior mantenimento della fonazione",
            "Produce un controllo di malattia inferiore rispetto alla chirurgia, ma con un miglior mantenimento della fonazione",
            "Produce un miglior controllo di malattia se associata alla laringectomia totale",
            "Produce un miglior controllo di malattia rispetto alla chirurgia, ma con un peggior mantenimento della fonazione"
        ],
        "correct": 0
    },
    {
        "question": "Nei pazienti con carcinoma prostatico, quale delle seguenti associazioni 'Score di Gleason – Gruppo prognostico' (conferenza ISUP 2014) è CORRETTO?",
        "options": [
            "Score di Gleason 9-10 = Gruppo 2",
            "Score di Gleason 3+4=7 = Gruppo 4",
            "Score di Gleason 4+3=7 = Gruppo 3",
            "Score di Gleason ≤ 6 = Gruppo 5"
        ],
        "correct": 2
    },
    {
        "question": "Una delle più frequenti indicazioni alla radioterapia palliativa è rappresentata dal trattamento:",
        "options": [
            "Delle metastasi delle ghiandole surrenali",
            "Delle metastasi ossee",
            "Delle metastasi uveali",
            "Delle metastasi epatiche"
        ],
        "correct": 1
    },
    {
        "question": "La radioterapia può integrarsi con la chemioterapia in modo:",
        "options": [
            "Alternante o neoadiuvante",
            "Sequenziale o concomitante",
            "Additivo o radioprotettivo",
            "Contemporaneo o intervallato ogni 2-3 mesi"
        ],
        "correct": 1
    },
    {
        "question": "Il tumore della mammella infiltrante più frequente è il?",
        "options": [
            "Carcinoma cribriforme",
            "Carcinoma tubulare",
            "Carcinoma duttale",
            "Carcinoma mucinoso"
        ],
        "correct": 2
    },
    {
        "question": "Da un punto di vista epidemiologico, il CRC … indicare l’affermazione CORRETTA:",
        "options": [
            "E’ la quinta causa di morte per neoplasia nel sesso femminile",
            "L’incidenza è in graduale aumento",
            "E’ la prima neoplasia per frequenza sia nell'uomo che nella donna",
            "L’incidenza è attualmente in calo grazie ai programmi di screening in entrambi i sessi"
        ],
        "correct": 3
    },
    {
        "question": "La tossicità tardiva da radioterapia dipende da:",
        "options": [
            "Radiosensibilità del tumore",
            "Durata del trattamento",
            "Frazionamento della dose",
            "Chemioterapia concomitante"
        ],
        "correct": 2
    },
    {
        "question": "La terapia adiuvante per il tumore del polmone NON a piccole cellule (NSCLC):",
        "options": [
            "NON prevede l’impiego di derivati del platino",
            "Sembra avere beneficio maggiore negli stadi II e III radicalmente operati",
            "NON è mai indicata",
            "Può essere proposta anche dopo 3 mesi dalla chirurgia"
        ],
        "correct": 1
    },
   {
        "question": "Nel melanoma, la mutazione dei gene BRAF è presente:",
        "options": [
            "Nel 50 % dei pazienti",
            "Nel 20-30 % dei pazienti",
            "Nel 5-10% dei pazienti",
            "Nell’1-3% dei pazienti"
        ],
        "correct": 0
    },
    {
        "question": "Il dolore nocicettivo si genera per:",
        "options": [
            "Blocco dei nocicettori in periferia",
            "Attivazione dei nocicettori in periferia",
            "Blocco dei nocicettori nel Sistema Nervoso Centrale",
            "Nessuno dei precedenti"
        ],
        "correct": 1
    },
    {
        "question": "Convenzionalmente, il retto è esteso:",
        "options": [
            "Fino a circa 12 cm dal margine anale",
            "Fino a circa 5 cm dal margine anale",
            "Fino a circa 20 cm dal margine anale",
            "Fino a circa 8 cm dal margine anale"
        ],
        "correct": 0
    },
    {
        "question": "Nel melanoma in stadio iniziale, il rischio di coinvolgimento linfonodale è (indicare l’unica risposta corretta):",
        "options": [
            "Circa il 60% se lo spessore del melanoma è tra 1,5 e 4 mm",
            "Circa il 25% se lo spessore del melanoma è >4 mm",
            "Circa il 60 % se lo spessore del melanoma è > 4mm",
            "Raro se lo spessore del melanoma è > 4mm"
        ],
        "correct": 2
    },
    {
        "question": "Quali tra i seguenti è considerato fattori di rischio per lo sviluppo del melanoma?",
        "options": [
            "Esposizione a raggi UV",
            "Presenza di mutazione del gene CDKN2A",
            "Fenotipo chiaro",
            "Tutti i precedenti"
        ],
        "correct": 3
    },
    {
        "question": "Dalla fine degli anni ‘90, quale tra i seguenti è considerato un chemioterapico “standard” nel trattamento del carcinoma pancreatico metastatico?",
        "options": [
            "Eribulina",
            "Gemcitabina",
            "Antracicline",
            "Irinotecan"
        ],
        "correct": 1
    },
    {
        "question": "Nella valutazione del dolore, la Scala Analogica Visiva (VAS):",
        "options": [
            "È di solito composta da una retta di 15 cm",
            "È un metodo mulitdimensionale di valutazione del dolore",
            "Richiede coordinazione visivo-motoria da parte del paziente",
            "NON richiede alcuna capacità di astrazione"
        ],
        "correct": 2
    },
    {
        "question": "L'Olaparib:",
        "options": [
            "Può essere prescritto solo per le pazienti con tumore della mammella localizzato BRCA mutato",
            "Può essere prescritto per tutti i tipi di tumore della mammella",
            "Può essere prescritto sia per il tumore della mammella HER2 positivo che per quello ovarico",
            "Può essere prescritto solo per le pazienti con tumore della mammella metastatico BRCA mutato"
        ],
        "correct": 3
    },
    {
        "question": "Tutte le seguenti affermazioni sul tumore del testicolo sono corrette, TRANNE una (indicare l’unica affermazione sbagliata):",
        "options": [
            "I tumori del testicolo sono per la maggior parte tumori a cellule germinali",
            "Dopo orchiectomia, i pazienti con seminoma sono sempre candidati a radioterapia adiuvante",
            "Frequentemente, si presentano con una tumefazione a livello del testicolo",
            "Circa il 30% dei NON-seminomi in stadio I presenta metastasi sub-cliniche"
        ],
        "correct": 1
    },
    {
        "question": "In sede di colloquio, un medico può utilizzare alcune tecniche comunicative per restituire le informazioni al paziente. Tra queste:",
        "options": [
            "Le domande concatenate",
            "Il distacco dello sguardo",
            "Le domande chiuse",
            "L'uso della parafrasi e le 'reflection skills'"
        ],
        "correct": 3
    },
    {
        "question": "I tumori della mammella triplo negativi?",
        "options": [
            "NON esprimono né HER2 né i recettori ormonali",
            "Esprimono i recettori ormonali",
            "Esprimono solo HER2",
            "Hanno una buona prognosi"
        ],
        "correct": 0
    },
    {
        "question": "Nella seguente frase, quale tecnica comunicativa viene utilizzata? 'È comprensibile che uno preferisca evitare di assumere una pillola tutti i giorni... ma i rischi che può procurare una patologia di questo tipo [un’ipertensione] sono... abbastanza importanti …'",
        "options": [
            "Chatting",
            "Eco",
            "Focusing",
            "Reflection skills"
        ],
        "correct": 3
    },
    {
        "question": "Quali delle seguenti affermazioni sui dati epidemiologici italiani dell’HCC è VERA?",
        "options": [
            "L’incidenza e la mortalità sono in graduale decremento (in entrambi i sessi)",
            "L’incidenza e la mortalità sono in decremento solo nel sesso maschile",
            "L’incidenza è in aumento ma la mortalità è in decremento (in entrambi i sessi)",
            "L’incidenza e la mortalità sono in graduale incremento (in entrambi i sessi)"
        ],
        "correct": 0
    },
    {
        "question": "Quale fra le seguenti affermazioni sul tumore del rene è SBAGLIATA?",
        "options": [
            "In Europa rappresenta il 3-4% di tutte le neoplasie dell’adulto",
            "Solo il 20% dei pazienti che esordiscono con malattia localizzata svilupperà una malattia sistemica in seguito",
            "La sopravvivenza a 5 anni è strettamente correlata allo stadio alla diagnosi",
            "Il 25-30% dei casi esordisce con malattia metastatica"
        ],
        "correct": 1
    },
    {
        "question": "Nei pazienti con carcinoma pancreatico operati radicalmente, quale delle seguenti affermazioni riguardanti la terapia adiuvante è SBAGLIATA?",
        "options": [
            "Può prevedere l’utilizzo di regimi di a 1, 2 o 3 farmaci (in base alle condizioni cliniche del paziente)",
            "Tra i regimi di chemioterapia più studiati in questo setting vi sono quelli a base di 5-FU e Gemcitabina",
            "Un recente studio di fase III ha valutato l’efficacia dello schema FOLFIRINOX anche nel setting adiuvante",
            "È raccomandata solo in un piccolo sottogruppo di pazienti"
        ],
        "correct": 3
    },
    {
        "question": "Quale delle seguenti affermazioni sul trattamento delle donne con carcinoma dell’endometrio in Stadio II è CORRETTA?",
        "options": [
            "Nessuna delle affermazioni elencate",
            "NON è mai indicato un trattamento chemioterapico ad intento adiuvante, nemmeno se vi sono fattori prognostici negativi",
            "L’approccio chirurgico è opzionale",
            "La linfoadenectomia ha un ruolo fondamentale per la stadiazione chirurgica"
        ],
        "correct": 3
    },
    {
        "question": "Secondo le ultime linee guida in ambito epatologico, la metodica raccomandata per la sorveglianza dei pazienti con cirrosi epatica, ritenuti a maggior rischio di sviluppo di HCC è:",
        "options": [
            "La TC torace addome completo senza mdc ogni 6 mesi",
            "L’ecografia epatica ogni 6 mesi",
            "Il dosaggio dell’alfa-feto-proteina e CEA ogni 6 mesi",
            "Tutte le precedenti"
        ],
        "correct": 1
    },
    {
        "question": "La terapia adiuvante dei tumori HER2 positivi della mammella comprende?",
        "options": [
            "Ormonoterapia e in alcuni casi chemioterapia e terapia target",
            "Ormonoterapia e in alcuni casi chemioterapia",
            "Ormonoterapia e chemioterapia",
            "Terapia target e chemioterapia e in alcuni casi ormonoterapia"
        ],
        "correct": 3
    },
    {
        "question": "Nelle pazienti affette da tumore della mammella metastico HER2 positivo, in prima linea insieme al trastuzumab devo prescrive?",
        "options": [
            "Pertuzumab",
            "Atezolizumab",
            "Lapatinib",
            "T-DM1"
        ],
        "correct": 0
    },
    {
        "question": "Il temine brachiterapia indica un trattamento con:",
        "options": [
            "Breve distanza tra sorgente e tumore",
            "Breve durata dell’irradiazione",
            "Breve intervallo con l’intervento chirurgico",
            "Breve intervallo con la chemioterapia"
        ],
        "correct": 0
    },
    {
        "question": "Per la valutazione del parametro N nella stadiazione del tumore del polmone NON è di comune impiego?",
        "options": [
            "La mediastinoscopia",
            "La videotoracoscopia",
            "La PET fdg",
            "La toracotomia esplorativa"
        ],
        "correct": 3
    },
    {
        "question": "Quale fra i seguenti NON è comunemente considerato un fattore prognostico per un paziente con tumore del rene?",
        "options": [
            "Presenza di insufficienza ipomagnesemia",
            "Parametro T",
            "Presenza di componente sarcomatoide",
            "Grading della neoplasia renale"
        ],
        "correct": 0
    },
    {
        "question": "Quali delle seguenti affermazioni sui dati epidemiologici italiani del carcinoma pancreatico è FALSA?",
        "options": [
            "Il picco di incidenza tra il sesto e settimo decennio",
            "L’incidenza è in decremento",
            "Circa l’80% dei casi è diagnosticato in stadio avanzato",
            "Rientra tra le neoplasie a prognosi più infausta"
        ],
        "correct": 1
    },
   {
    "question": "Il carcinoma del pancreas ereditario si associa a quale delle seguenti sindromi?",
    "options": [
        "Melanoma atipico familiare",
        "Sindrome di Turner",
        "Sindrome di Down",
        "Sindrome metabolica"
    ],
    "correct": 0
},
{
    "question": "Il carcinoma del pancreas ereditario può essere associato a mutazioni di:",
    "options": [
        "BRCA1/2",
        "P53 in tutte le forme",
        "Sindrome di Klinefelter",
        "Neoplasia endocrina multipla tipo 2B"
    ],
    "correct": 0
},
{
    "question": "Il carcinoma del pancreas ereditario si può associare a:",
    "options": [
        "Tumore ereditario del colon non poliposico",
        "Adenoma ipofisario",
        "Sindrome di Sjögren",
        "Neoplasia tiroidea papillare"
    ],
    "correct": 0
},
{
    "question": "Quale sindrome è associata al carcinoma del pancreas ereditario?",
    "options": [
        "Sindrome di Peutz-Jeghers",
        "Sindrome di Marfan",
        "Sindrome di Angelman",
        "Sindrome di Rett"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti è un'affermazione sbagliata riguardo al carcinoma pancreatico?",
    "options": [
        "Corpo/coda dà ittero",
        "La testa dà ittero",
        "Il corpo può causare dolore lombare",
        "La coda può portare a metastasi epatiche"
    ],
    "correct": 0
},
    {
    "question": "A cosa serve l’EUS nella stadiazione del carcinoma pancreatico?",
    "options": [
        "Per fare biopsia e diagnosi cito-istologica",
        "Per identificare metastasi ossee",
        "Per valutare la funzione epatica",
        "Per monitorare la risposta alla radioterapia"
    ],
    "correct": 0
},
{
    "question": "Qual è la terapia indicata per il carcinoma pancreatico avanzato?",
    "options": [
        "FOLFIRINOX",
        "Cisplatino in monoterapia",
        "Terapia ormonale",
        "Immunoterapia specifica"
    ],
    "correct": 0
},
{
    "question": "Quali dei seguenti non è indicato per il carcinoma pancreatico?",
    "options": [
        "Immunoterapia specifica",
        "FOLFIRINOX",
        "Gemcitabina + nab-Paclitaxel",
        "PAXG (Gemcitabina + Capecitabina + Cisplatino)"
    ],
    "correct": 0
},
{
    "question": "Qual è la sopravvivenza a 1 anno del carcinoma pancreatico resecato R0?",
    "options": [
        "60%",
        "20%",
        "80%",
        "45%"
    ],
    "correct": 0
},
{
    "question": "Qual è uno dei criteri di borderline resectable del carcinoma pancreatico?",
    "options": [
        "Interessamento vasi <180°",
        "Presenza di metastasi epatiche",
        "Infiltrazione della vena porta completa",
        "Invasione di strutture nervose"
    ],
    "correct": 0
},
{
    "question": "Dalla fine degli anni ‘90, quale chemioterapico è considerato “standard” nel trattamento del carcinoma pancreatico metastatico?",
    "options": [
        "Gemcitabina",
        "FOLFIRINOX",
        "Etoposide",
        "Cisplatino"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti affermazioni riguardanti la terapia adiuvante nei pazienti con carcinoma pancreatico operato radicalmente è SBAGLIATA?",
    "options": [
        "È raccomandata solo in un piccolo sottogruppo di pazienti",
        "È utilizzata per ridurre il rischio di recidiva",
        "È basata su chemioterapia con gemcitabina",
        "Può essere combinata con radioterapia in casi selezionati"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti affermazioni sui dati epidemiologici italiani del carcinoma pancreatico è FALSA?",
    "options": [
        "L'incidenza è in decremento",
        "È una delle principali cause di morte oncologica",
        "La sopravvivenza a 5 anni è molto bassa",
        "L’incidenza è in aumento negli ultimi decenni"
    ],
    "correct": 0
},
{
    "question": "Nei pazienti con carcinoma pancreatico avanzato, da quali fattori dipende la scelta del trattamento chemioterapico?",
    "options": [
        "Età, comorbidità, performance status, corredo sintomatologico",
        "Solo dall’età del paziente",
        "Esclusivamente dal tipo istologico del tumore",
        "Unicamente dalla presenza di metastasi epatiche"
    ],
    "correct": 0
},
{
    "question": "Quali dei seguenti geni sono frequentemente mutati nel carcinoma pancreatico?",
    "options": [
        "KRAS, p16/CDKN2A, SMAD4",
        "BRCA2, APC, TP53",
        "BRAF, EGFR, VHL",
        "RET, NF1, PTEN"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti NON è una lesione precancerosa del pancreas?",
    "options": [
        "Pseudocisti",
        "IPMN (neoplasia mucinosa intraduttale)",
        "PanIN (neoplasia intraepiteliale pancreatica)",
        "Cistoadenoma mucinoso"
    ],
    "correct": 0
},
    {
    "question": "In quale percentuale dei pazienti con melanoma è presente la mutazione del gene BRAF?",
    "options": [
        "50%",
        "30%",
        "70%",
        "10%"
    ],
    "correct": 0
},
{
    "question": "Nel melanoma in stadio iniziale, qual è il rischio di coinvolgimento linfonodale se lo spessore è >4mm?",
    "options": [
        "Circa il 60%",
        "Circa il 30%",
        "Circa il 80%",
        "Circa il 10%"
    ],
    "correct": 0
},
{
    "question": "Quali tra i seguenti è considerato un fattore di rischio per lo sviluppo del melanoma?",
    "options": [
        "Esposizione a raggi UV",
        "Fumo di sigaretta",
        "Dieta povera di fibre",
        "Uso cronico di corticosteroidi"
    ],
    "correct": 0
},
{
    "question": "Qual è il secondo tipo più comune di melanoma?",
    "options": [
        "Melanoma nodulare",
        "Melanoma lentigo maligna",
        "Melanoma acrale",
        "Melanoma amelanotico"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti affermazioni sul melanoma nodulare è SBAGLIATA?",
    "options": [
        "Rappresenta circa il 30% di tutti i melanomi cutanei",
        "Può essere ulcerato o crostoso",
        "Esiste anche una variante amelanotica",
        "È il secondo tipo più comune di melanoma"
    ],
    "correct": 3
},
{
    "question": "Quali agenti chemioterapici sono utilizzati nel trattamento del melanoma in stadio avanzato?",
    "options": [
        "Temozolomide, dacarbazina, fotoemustina",
        "Metotrexato, vincristina, 5-FU",
        "Ciclofosfamide, doxorubicina, cisplatino",
        "Carboplatino, paclitaxel, etoposide"
    ],
    "correct": 0
},
{
    "question": "Qual è la mutazione del gene BRAF nel melanoma?",
    "options": [
        "V600E",
        "P53",
        "KRAS G12D",
        "EGFR T790M"
    ],
    "correct": 0
},
{
    "question": "Quali sono i dati epidemiologici attuali del melanoma?",
    "options": [
        "Incidenza in crescita in entrambi i sessi e mortalità stabile",
        "Incidenza in calo e mortalità in aumento",
        "Incidenza stabile e mortalità in crescita",
        "Incidenza e mortalità entrambe in diminuzione"
    ],
    "correct": 0
},
{
    "question": "Quando si fa la terapia adiuvante nel melanoma?",
    "options": [
        "In stadio IIb-c e III",
        "Solo in stadio IV",
        "In tutti gli stadi della malattia",
        "Esclusivamente in stadio I"
    ],
    "correct": 0
},
{
    "question": "Quale farmaco è indicato nella terapia del melanoma avanzato con mutazione BRAF V600E?",
    "options": [
        "Dabrafenib",
        "Imatinib",
        "Sorafenib",
        "Cetuximab"
    ],
    "correct": 0
},
{
    "question": "Quale immunoterapia si utilizza nel melanoma in stadio avanzato?",
    "options": [
        "Nivolumab/pembrolizumab/ipilimumab",
        "Bevacizumab/trastuzumab",
        "Erlotinib/afatinib",
        "Rituximab/ibrutinib"
    ],
    "correct": 0
},
{
    "question": "Cosa è il vemurafenib?",
    "options": [
        "Un inibitore di BRAF",
        "Un inibitore di MEK",
        "Un agente chemioterapico alchilante",
        "Un immunomodulatore"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti affermazioni sui dati epidemiologici italiani dell’HCC è VERA?",
    "options": [
        "L’incidenza e la mortalità sono in graduale decremento (in entrambi i sessi)",
        "L’incidenza è in crescita e la mortalità è stabile",
        "L’incidenza è stabile ma la mortalità è in aumento",
        "L’incidenza e la mortalità sono entrambe in crescita"
    ],
    "correct": 0
},
{
    "question": "Quando si usa il Sorafenib?",
    "options": [
        "Si usa nel paziente in buona salute",
        "Si usa esclusivamente nei pazienti pediatrici",
        "Si utilizza solo nei pazienti con stadio terminale di malattia",
        "Si somministra come trattamento adiuvante post-resezione"
    ],
    "correct": 0
},
{
    "question": "Secondo le ultime linee guida epatologiche, quale metodica è raccomandata per la sorveglianza dei pazienti con cirrosi epatica a rischio di HCC?",
    "options": [
        "Ecografia epatica ogni 6 mesi",
        "TAC addominale annuale",
        "RMN epatica ogni 2 anni",
        "Biopsia epatica semestrale"
    ],
    "correct": 0
},
{
    "question": "Qual è il sistema stadiativo comunemente usato nei Paesi occidentali per valutare l’HCC su fegato cirrotico?",
    "options": [
        "Barcellona Clinic Liver Cancer (BCLC) classification",
        "Sistema di Child-Pugh",
        "Modello MELD (Model for End-Stage Liver Disease)",
        "Sistema TNM tradizionale"
    ],
    "correct": 0
},
{
    "question": "Nella valutazione clinica di un paziente con HCC, quale parametro NON è necessario per il calcolo del Child-Pugh Score?",
    "options": [
        "Valori del tempo di tromboplastina (aPTT)",
        "Bilirubina sierica",
        "Albumina sierica",
        "Presenza di ascite"
    ],
    "correct": 0
},
{
    "question": "Qual è la risposta corretta riguardo l'utilizzo della chemioterapia nel trattamento dell’HCC?",
    "options": [
        "È risultata nel complesso scarsamente efficace",
        "È il trattamento standard di prima linea",
        "È altamente efficace nei pazienti con stadio terminale",
        "È usata esclusivamente nei pazienti senza cirrosi"
    ],
    "correct": 0
},
{
    "question": "Quali sono i Criteri di Milano per il trattamento dell’HCC?",
    "options": [
        "Nodulo singolo < 5 cm o massimo 3 noduli con diametro < 3 cm",
        "Presenza di ascite e noduli multipli inferiori a 2 cm",
        "Nodulo singolo < 3 cm e trombosi portale assente",
        "Più di 3 noduli senza restrizioni di dimensione"
    ],
    "correct": 0
},
{
    "question": "In ambito epidemiologico, l’HCC è più frequente:",
    "options": [
        "Nel sesso maschile",
        "Nel sesso femminile",
        "Equamente nei due sessi",
        "Esclusivamente nei pazienti sopra i 70 anni"
    ],
    "correct": 0
},
{
    "question": "Qual è il ruolo del Sorafenib nel trattamento del carcinoma epatocellulare?",
    "options": [
        "È indicato in prima linea nel trattamento dell’HCC avanzato",
        "È utilizzato esclusivamente in combinazione con chemioembolizzazione (TACE)",
        "È indicato come terapia di mantenimento nei pazienti post-resezione",
        "Non ha alcun ruolo nel trattamento dell’HCC"
    ],
    "correct": 0
},
{
    "question": "Quali sono possibili controindicazioni alla TACE?",
    "options": [
        "La trombosi arteriosa",
        "Presenza di cirrosi compensata",
        "Nodulo inferiore a 1 cm",
        "Età inferiore ai 40 anni"
    ],
    "correct": 0
},
    {
    "question": "Da un punto di vista epidemiologico, qual è l’andamento dell’incidenza del carcinoma colorettale (CRC) attualmente?",
    "options": [
        "In calo grazie ai programmi di screening in entrambi i sessi",
        "In aumento solo nel sesso femminile",
        "Stabile negli ultimi 10 anni",
        "In aumento in entrambi i sessi"
    ],
    "correct": 0
},
{
    "question": "Convenzionalmente, fino a quale distanza si estende il retto dal margine anale?",
    "options": [
        "Circa 12 cm",
        "Circa 5 cm",
        "Circa 20 cm",
        "Circa 8 cm"
    ],
    "correct": 0
},
{
    "question": "Quale tra le seguenti NON è un’opzione chirurgica per il carcinoma del retto?",
    "options": [
        "Colectomia",
        "Resezione anteriore bassa",
        "Amputazione addomino-perineale",
        "Escissione locale transanale"
    ],
    "correct": 0
},
{
    "question": "Nella terapia adiuvante del carcinoma del colon, quale farmaco NON viene utilizzato?",
    "options": [
        "Irinotecan",
        "Fluorouracile (5-FU)",
        "Oxaliplatino",
        "Capecitabina"
    ],
    "correct": 0
},
{
    "question": "Quando si esegue la metastasectomia nel carcinoma del colon metastatico?",
    "options": [
        "Solo quando l'intervento sulle metastasi sarà radicale",
        "Quando la metastasi è di grandi dimensioni",
        "Quando la chirurgia del tumore primario non è fattibile",
        "Sempre indipendentemente dalla localizzazione"
    ],
    "correct": 0
},
{
    "question": "Qual è il trattamento delle metastasi epatiche resecabili sincrone nel carcinoma del colon?",
    "options": [
        "Trattamento neoadiuvante e chirurgia",
        "Resezione diretta senza trattamenti pre-operatori",
        "Solo chemioterapia palliativa",
        "Radioterapia mirata"
    ],
    "correct": 0
},
{
    "question": "Nel trattamento delle piccole metastasi subdiaframmatiche da cancro del colon, cosa si utilizza?",
    "options": [
        "Radiofrequenza",
        "Radioterapia",
        "Chemioterapia endovenosa",
        "Immunoterapia"
    ],
    "correct": 0
},
{
    "question": "La radiofrequenza è utilizzata soprattutto nel trattamento di:",
    "options": [
        "Metastasi epatiche",
        "Tumori del colon localizzati",
        "Metastasi polmonari",
        "Lesioni ossee metastatiche"
    ],
    "correct": 0
},
{
    "question": "In che tipo di carcinoma del colon è indicato l’impiego del cetuximab?",
    "options": [
        "K-RAS non mutato",
        "K-RAS mutato",
        "In tutti i pazienti indipendentemente dalla mutazione",
        "Solo nei pazienti con metastasi ossee"
    ],
    "correct": 0
},
{
    "question": "La determinazione delle mutazioni del gene K-RAS è utile per la terapia di quale patologia?",
    "options": [
        "Cancro del colon",
        "Cancro della prostata",
        "Carcinoma del polmone",
        "Epatocarcinoma"
    ],
    "correct": 0
},
{
    "question": "Qual è la strategia più accreditata per il trattamento del cancro del retto stadio cT2N1M0?",
    "options": [
        "Chemioradioterapia preoperatoria",
        "Chirurgia diretta",
        "Solo chemioterapia adiuvante",
        "Radioterapia palliativa"
    ],
    "correct": 0
},
{
    "question": "Nel cancro del retto senza metastasi, quale trattamento viene utilizzato?",
    "options": [
        "Radioterapia + chemioterapia neoadiuvante + chirurgia",
        "Solo chirurgia",
        "Chemioterapia preoperatoria",
        "Immunoterapia preoperatoria"
    ],
    "correct": 0
},
{
    "question": "Qual è la sopravvivenza a 5 anni dopo colectomia radicale in un paziente con carcinoma in stadio 2?",
    "options": [
        "75-80%",
        "50-55%",
        "90-95%",
        "60-65%"
    ],
    "correct": 0
},
{
    "question": "Quale di questi esami NON è indicato nella stadiazione del carcinoma colorettale (CRC)?",
    "options": [
        "Scintigrafia ossea",
        "TAC addome",
        "RMN pelvica",
        "Ecografia epatica"
    ],
    "correct": 0
},
{
    "question": "La chemioterapia adiuvante post-metastasectomia epatica nel CRC ha quale effetto?",
    "options": [
        "Diminuisce solamente la recidiva, non è curativa",
        "Aumenta drasticamente la sopravvivenza globale",
        "Guarisce la malattia in oltre il 50% dei pazienti",
        "Non ha alcun impatto clinico"
    ],
    "correct": 0
},
{
    "question": "Per la terapia anti-EGFR nel carcinoma del colon, quale deve essere il tipo del gene Ras?",
    "options": [
        "Wild type",
        "Mutato",
        "Espresso in eccesso",
        "Non espresso"
    ],
    "correct": 0
},
{
    "question": "Quale farmaco monoclonale viene utilizzato nel trattamento del carcinoma di colon e retto?",
    "options": [
        "Bevacizumab",
        "Trastuzumab",
        "Nivolumab",
        "Pembrolizumab"
    ],
    "correct": 0
},
    {
    "question": "La terapia adiuvante per il tumore del polmone NON a piccole cellule (NSCLC) sembra avere un beneficio maggiore in quali stadi?",
    "options": [
        "Stadi II e III radicalmente operati",
        "Stadi I e IV",
        "Solo negli stadi I",
        "Negli stadi avanzati IV e IIIb"
    ],
    "correct": 0
},
{
    "question": "Quale metodica NON è di comune impiego per la valutazione del parametro N nella stadiazione del tumore del polmone?",
    "options": [
        "Toracotomia esplorativa",
        "PET-TAC",
        "Mediastinoscopia",
        "Ecografia endobronchiale (EBUS)"
    ],
    "correct": 0
},
{
    "question": "In quali stadi è di elezione la chirurgia per il NSCLC?",
    "options": [
        "Stadi I, IIa, IIb, IIIa",
        "Solo stadio IV",
        "Stadio IIIb e IV",
        "Stadi iniziali I e IIIb"
    ],
    "correct": 0
},
{
    "question": "Quale trattamento è indicato in prima linea per NSCLC in stadio IV con riarrangiamento di ALK?",
    "options": [
        "Farmaci inibitori di ALK (es. alectinib, ceritinib o crizotinib)",
        "Chemioterapia con cisplatino",
        "Immunoterapia con nivolumab",
        "Radioterapia palliativa"
    ],
    "correct": 0
},
{
    "question": "Nei pazienti con NSCLC avanzato EGFR+, quale farmaco è indicato come prima linea di trattamento?",
    "options": [
        "EGFR-inibitore di III generazione (Osimertinib)",
        "Chemioterapia con carboplatino e paclitaxel",
        "Immunoterapia con pembrolizumab",
        "Radioterapia esclusiva"
    ],
    "correct": 0
},
{
    "question": "Qual è la prevalenza della mutazione di ALK nei pazienti con NSCLC?",
    "options": [
        "7%",
        "15%",
        "2%",
        "10%"
    ],
    "correct": 0
},
{
    "question": "La determinazione della mutazione di ALK è utile per la diagnosi di quale tumore?",
    "options": [
        "Tumore del polmone",
        "Tumore del colon",
        "Epatocarcinoma",
        "Carcinoma mammario"
    ],
    "correct": 0
},
{
    "question": "Qual è la percentuale rappresentata dal carcinoma neuroendocrino a grandi cellule rispetto al totale dei tumori polmonari?",
    "options": [
        "10%",
        "5%",
        "20%",
        "15%"
    ],
    "correct": 0
},
{
    "question": "Un tumore NSCLC tra 3 e 5 cm con interessamento della pleura viscerale viene classificato come:",
    "options": [
        "T2",
        "T1b",
        "T3",
        "T4"
    ],
    "correct": 0
},
{
    "question": "Che cos’è il tumore di Pancoast?",
    "options": [
        "Un tumore polmonare",
        "Un tumore pleurico",
        "Un tumore mediastinico",
        "Un tumore neuroendocrino"
    ],
    "correct": 0
},
{
    "question": "Qual è il trattamento indicato per il tumore di Pancoast?",
    "options": [
        "Chirurgia e radiochemioterapia",
        "Chemioterapia esclusiva",
        "Radioterapia esclusiva",
        "Immunoterapia con anticorpi monoclonali"
    ],
    "correct": 0
},
{
    "question": "Qual è il trattamento indicato per il microcitoma polmonare?",
    "options": [
        "Chemioterapia e radioterapia",
        "Chirurgia radicale",
        "Immunoterapia con nivolumab",
        "Terapia anti-ALK"
    ],
    "correct": 0
},
    {
    "question": "Quale fra le seguenti affermazioni sul tumore del rene è SBAGLIATA?",
    "options": [
        "Solo il 20% dei pazienti che esordiscono con malattia localizzata svilupperà una malattia sistemica in seguito",
        "La chirurgia è il trattamento principale nella malattia localizzata",
        "La sorveglianza attiva è un'opzione nei pazienti anziani con tumore di piccole dimensioni",
        "La malattia metastatica può beneficiare di terapia sistemica"
    ],
    "correct": 0
},
{
    "question": "Quale dei seguenti NON è comunemente considerato un fattore prognostico per un paziente con tumore del rene?",
    "options": [
        "Presenza di ipomagnesemia",
        "Performance status del paziente",
        "Livelli di emoglobina",
        "Dimensioni del tumore"
    ],
    "correct": 0
},
{
    "question": "Quale tra i seguenti farmaci NON rientra tra le possibili alternative nel trattamento sistemico del tumore del rene in stadio avanzato “good prognosis”?",
    "options": [
        "Cabozantinib",
        "Pazopanib",
        "Sunitinib",
        "Nivolumab"
    ],
    "correct": 0
},
{
    "question": "Quale dei seguenti farmaci è una possibile alternativa nel trattamento sistemico del tumore del rene in stadio avanzato “intermediate/poor-prognosis”?",
    "options": [
        "Cabozantinib, Pazopanib, Tivozanib",
        "Sorafenib, Lenalidomide, Olaparib",
        "Everolimus, Cetuximab, Bevacizumab",
        "Temsirolimus, Imatinib, Erlotinib"
    ],
    "correct": 0
},
{
    "question": "Nel tumore del rene, la sopravvivenza mediana a 5 anni è:",
    "options": [
        "Strettamente correlata allo stadio di malattia",
        "Indipendente dallo stadio di malattia",
        "Influenzata solo dal tipo istologico del tumore",
        "Invariata negli ultimi 20 anni"
    ],
    "correct": 0
},
{
    "question": "Quale tra le seguenti affermazioni è CORRETTA riguardo il tumore del rene?",
    "options": [
        "Stadio III – OS a 5 anni pari a circa il 65%",
        "Stadio II – OS a 5 anni inferiore al 20%",
        "Stadio IV – OS a 5 anni superiore all’80%",
        "Stadio I – OS a 5 anni pari al 30%"
    ],
    "correct": 0
},
    {
    "question": "Quale delle seguenti condizioni NON è considerata un fattore di rischio per il carcinoma dell'ovaio?",
    "options": [
        "L’ovaio policistico",
        "Nulliparità",
        "Storia familiare di carcinoma ovarico",
        "Mutazione dei geni BRCA1/BRCA2"
    ],
    "correct": 0
},
{
    "question": "Quale terapia monoclonale viene utilizzata nei tumori ginecologici?",
    "options": [
        "Bevacizumab",
        "Trastuzumab",
        "Cetuximab",
        "Pembrolizumab"
    ],
    "correct": 0
},
{
    "question": "Quali farmaci vengono utilizzati nella terapia dei tumori dell’ovaio?",
    "options": [
        "Platino e taxani",
        "Antracicline e vincristina",
        "Ciclofosfamide e metotrexato",
        "Inibitori di EGFR e PD-L1"
    ],
    "correct": 0
},
{
    "question": "In quale contesto l’Olaparib può essere prescritto?",
    "options": [
        "Solo per pazienti con tumore della mammella metastatico BRCA mutato",
        "Per tutti i tipi di tumore ovarico",
        "Come trattamento adiuvante nei tumori endometriali",
        "Nei tumori del collo dell’utero in fase iniziale"
    ],
    "correct": 0
},
    {
    "question": "Quale delle seguenti affermazioni riguardo il trattamento chirurgico del carcinoma gastrico è corretta?",
    "options": [
        "La resezione endoscopica è comunemente utilizzata in tutti i pazienti in stadio I-II",
        "La gastrectomia totale è obbligatoria in ogni stadio",
        "La chirurgia non ha alcun ruolo nelle forme localizzate",
        "La resezione endoscopica è riservata ai casi selezionati di stadio precoce"
    ],
    "correct": 3
},
{
    "question": "Qual è la sopravvivenza a 5 anni per l'early gastric cancer?",
    "options": [
        "85%",
        "50%",
        "30%",
        "95%"
    ],
    "correct": 0
},
{
    "question": "Quale tra le seguenti affermazioni è vera riguardo il ruolo del fumo nel carcinoma gastrico?",
    "options": [
        "Il fumo è un principale fattore di rischio, soprattutto per tumori antrali",
        "Il fumo è irrilevante nel carcinoma gastrico",
        "Il fumo causa solo tumori gastrici prossimali",
        "Il fumo è responsabile di meno del 5% dei casi"
    ],
    "correct": 0
},
{
    "question": "Nella chirurgia del carcinoma gastrico, quale approccio è considerato la scelta ottimale?",
    "options": [
        "Linfoadenectomia D2",
        "Linfoadenectomia D1 limitata",
        "Resezione parziale senza dissezione linfonodale",
        "Esclusiva radioterapia senza chirurgia"
    ],
    "correct": 0
},
{
    "question": "Qual è la terapia utilizzata nei pazienti con carcinoma gastrico avanzato e buon performance status?",
    "options": [
        "Ramucirumab",
        "Chemioterapia con metotrexato",
        "Immunoterapia con nivolumab",
        "Resezione endoscopica delle metastasi"
    ],
    "correct": 0
},
{
    "question": "Quale terapia adiuvante si utilizza nel carcinoma gastrico?",
    "options": [
        "Fluoropirimidina, oxaliplatino + capecitabina",
        "Chemioterapia con ciclofosfamide e vincristina",
        "Immunoterapia con pembrolizumab",
        "Terapia ormonale con tamoxifene"
    ],
    "correct": 0
},
    {
    "question": "Quale delle seguenti affermazioni è SBAGLIATA?",
    "options": [
        "La TC permette di valutare l'eventuale interessamento dei linfonodi pelvici (N)",
        "La RMN è più indicata per la valutazione dell'estensione locale del tumore prostatico",
        "La PET con PSMA è utile nella diagnosi delle metastasi ossee",
        "L'ecografia transrettale è spesso usata nella biopsia prostatica"
    ],
    "correct": 0
},
{
    "question": "Nei pazienti con carcinoma prostatico, quale delle seguenti associazioni 'Score di Gleason – Gruppo prognostico' (conferenza ISUP 2014) è CORRETTA?",
    "options": [
        "Score di Gleason 4+3=7 = Gruppo 3",
        "Score di Gleason 3+3=6 = Gruppo 4",
        "Score di Gleason 4+4=8 = Gruppo 2",
        "Score di Gleason 3+4=7 = Gruppo 5"
    ],
    "correct": 0
},
{
    "question": "Tutte le seguenti affermazioni sul tumore del testicolo sono corrette, TRANNE una. Qual è l’unica affermazione SBAGLIATA?",
    "options": [
        "Dopo orchiectomia, i pazienti con seminoma sono sempre candidati a radioterapia adiuvante",
        "La chemioterapia è un'opzione per le forme avanzate",
        "La sorveglianza attiva è una scelta per i pazienti a basso rischio",
        "L'orchiectomia rappresenta il trattamento di prima linea"
    ],
    "correct": 0
},
{
    "question": "Quale delle seguenti affermazioni sull'inquadramento diagnostico-terapeutico del tumore del testicolo è SBAGLIATA?",
    "options": [
        "L'intervento chirurgico (orchiectomia) rappresenta il primo atto diagnostico-terapeutico",
        "I marker tumorali (AFP, hCG, LDH) sono fondamentali nella diagnosi e nel follow-up",
        "La biopsia testicolare è raccomandata per confermare la diagnosi prima dell'orchiectomia",
        "La TC torace-addome-pelvi è utilizzata per la stadiazione"
    ],
    "correct": 0
},
    {
    "question": "Quale delle seguenti affermazioni sul trattamento delle donne con carcinoma dell’endometrio in Stadio II è CORRETTA?",
    "options": [
        "La linfoadenectomia ha un ruolo fondamentale per la stadiazione chirurgica",
        "La radioterapia è il trattamento esclusivo",
        "La chemioterapia è l’unico approccio terapeutico",
        "L’ormonoterapia è sufficiente per la gestione della malattia"
    ],
    "correct": 0
},
{
    "question": "Qual è il tumore della mammella infiltrante più frequente?",
    "options": [
        "Carcinoma duttale",
        "Carcinoma lobulare",
        "Carcinoma mucinoso",
        "Carcinoma papillare"
    ],
    "correct": 0
},
{
    "question": "L’Olaparib può essere prescritto solo in quale contesto clinico?",
    "options": [
        "Tumore della mammella metastatico BRCA mutato",
        "Tumore ovarico localizzato BRCA mutato",
        "Carcinoma della cervice uterina avanzato",
        "Tumore della mammella HER2 positivo"
    ],
    "correct": 0
},
{
    "question": "I tumori della mammella triplo negativi:",
    "options": [
        "Non esprimono né HER2 né i recettori ormonali",
        "Esprimono solo i recettori ormonali",
        "Sono caratterizzati da alta espressione di HER2",
        "Rispondono esclusivamente all’ormonoterapia"
    ],
    "correct": 0
},
{
    "question": "Qual è la terapia adiuvante nei tumori HER2 positivi della mammella?",
    "options": [
        "Terapia target e chemioterapia, e in alcuni casi ormonoterapia",
        "Solo terapia ormonale",
        "Esclusivamente radioterapia",
        "Immunoterapia con inibitori di PD-L1"
    ],
    "correct": 0
},
{
    "question": "Nelle pazienti con tumore della mammella metastatico HER2 positivo, quale farmaco deve essere prescritto insieme al trastuzumab in prima linea?",
    "options": [
        "Pertuzumab",
        "Bevacizumab",
        "Tamoxifene",
        "Letrozolo"
    ],
    "correct": 0
},
{
    "question": "Quale farmaco è un esempio di terapia adiuvante per i tumori della mammella triplo negativi?",
    "options": [
        "Antracicline + taxano",
        "Tamoxifene",
        "Inibitori di aromatasi",
        "Trastuzumab"
    ],
    "correct": 0
},
{
    "question": "Nel carcinoma della mammella con recettori ormonali positivi e HER2 negativo, quale trattamento viene utilizzato?",
    "options": [
        "Terapia anti-ormonale",
        "Chemioterapia con antracicline",
        "Terapia anti-HER2",
        "Immunoterapia"
    ],
    "correct": 0
},
{
    "question": "Qual è la sopravvivenza a 5 anni per le pazienti con tumore alla mammella localizzato?",
    "options": [
        "95%",
        "80%",
        "70%",
        "60%"
    ],
    "correct": 0
},
{
    "question": "Qual è la sopravvivenza a 5 anni nel carcinoma della mammella in stadio IV?",
    "options": [
        "20-25%",
        "50-55%",
        "10-15%",
        "30-35%"
    ],
    "correct": 0
},
{
    "question": "Quando è indicato l'uso del Palbociclib secondo le attuali linee guida?",
    "options": [
        "Nel tumore della mammella metastatico con recettori ormonali positivi",
        "Nel carcinoma HER2 positivo localizzato",
        "Nel carcinoma triplo negativo avanzato",
        "Nelle pazienti con recidiva locale post-chirurgia"
    ],
    "correct": 0
},
{
    "question": "Quale terapia viene utilizzata nel carcinoma della mammella localizzato?",
    "options": [
        "Chirurgia + radioterapia",
        "Chemioterapia esclusiva",
        "Immunoterapia con nivolumab",
        "Terapia ormonale esclusiva"
    ],
    "correct": 0
},
{
    "question": "Quale fra le seguenti NON è una terapia anti-HER2?",
    "options": [
        "Atezolizumab",
        "Trastuzumab",
        "Pertuzumab",
        "Lapatinib"
    ],
    "correct": 0
},
{
    "question": "Che farmaco chemioterapico adiuvante si utilizza nel carcinoma mammario?",
    "options": [
        "Epirubicina",
        "Cisplatino",
        "Bevacizumab",
        "Tamoxifene"
    ],
    "correct": 0
},
{
    "question": "Dopo mastectomia nel carcinoma mammario, quale trattamento è indicato?",
    "options": [
        "Radioterapia",
        "Chemioterapia esclusiva",
        "Sorveglianza attiva senza trattamenti",
        "Immunoterapia con pembrolizumab"
    ],
    "correct": 0
},
    {
    "question": "Quale affermazione è corretta sulla radioterapia delle lesioni delle corde vocali?",
    "options": [
        "Produce un analogo controllo di malattia rispetto alla chirurgia, ma con un miglior mantenimento della fonazione",
        "È meno efficace della chirurgia nel controllo della malattia",
        "Causa un peggioramento della fonazione rispetto alla chirurgia",
        "Non è utilizzata per le lesioni in stadio precoce"
    ],
    "correct": 0
},
{
    "question": "Una delle più frequenti indicazioni alla radioterapia palliativa è rappresentata dal trattamento di:",
    "options": [
        "Metastasi ossee",
        "Metastasi polmonari",
        "Metastasi cerebrali",
        "Tumore primario non operabile"
    ],
    "correct": 0
},
{
    "question": "La tossicità tardiva da radioterapia dipende principalmente da:",
    "options": [
        "Frazionamento della dose",
        "Dose totale somministrata",
        "Tipo di tumore trattato",
        "Posizionamento del paziente"
    ],
    "correct": 0
},
{
    "question": "Il dolore nocicettivo si genera per:",
    "options": [
        "Attivazione dei nocicettori in periferia",
        "Danno diretto ai nervi periferici",
        "Compressione del midollo spinale",
        "Anomalie nella trasmissione centrale del dolore"
    ],
    "correct": 0
},
{
    "question": "Quale trattamento è utile per piccole metastasi subdiaframmatiche da cancro del colon?",
    "options": [
        "Radiofrequenza",
        "Chemioterapia sistemica",
        "Radioterapia stereotassica",
        "Immunoterapia con PD-L1"
    ],
    "correct": 0
},
{
    "question": "Cosa indica il termine brachiterapia?",
    "options": [
        "Breve distanza tra sorgente e tumore",
        "Irradiazione a distanza con fotoni",
        "Trattamento con particelle pesanti",
        "Somministrazione di radiofarmaci per via endovenosa"
    ],
    "correct": 0
},
{
    "question": "Il fentanyl può essere somministrato per via:",
    "options": [
        "Sistemica, transdermica, transmucosale",
        "Endovenosa, intratecale, intradermica",
        "Orale, sublinguale, intramuscolare",
        "Topica, orale, sottocutanea"
    ],
    "correct": 0
},
{
    "question": "Qual è il più temuto effetto collaterale dei FANS?",
    "options": [
        "Gastrolesività",
        "Insufficienza renale acuta",
        "Cefalea",
        "Ipotensione"
    ],
    "correct": 0
},
{
    "question": "Quali sono i farmaci di scelta nella sedazione palliativa?",
    "options": [
        "Oppioidi, ansiolitici",
        "FANS, corticosteroidi",
        "Chemioterapici, analgesici",
        "Inibitori del recettore NMDA, antidepressivi"
    ],
    "correct": 0
},
{
    "question": "Quale particella è utilizzata in radioterapia?",
    "options": [
        "Fotoni ed elettroni",
        "Neutroni e protoni",
        "Particelle alfa",
        "Gluoni"
    ],
    "correct": 0
},
{
    "question": "Cosa si intende per trattamento adiuvante in oncologia?",
    "options": [
        "Trattamento post-chirurgico",
        "Trattamento pre-chirurgico",
        "Trattamento di supporto palliativo",
        "Trattamento sperimentale"
    ],
    "correct": 0
},
{
    "question": "Quale farmaco è un inibitore delle tirosin chinasi?",
    "options": [
        "Imatinib",
        "Bevacizumab",
        "Trastuzumab",
        "Tamoxifene"
    ],
    "correct": 0
},
{
    "question": "La radioterapia dei tumori del retto viene generalmente impiegata:",
    "options": [
        "Prima della chirurgia",
        "Dopo la chirurgia come unico trattamento",
        "Esclusivamente nelle metastasi ossee",
        "Solo nei pazienti con stadio avanzato IV"
    ],
    "correct": 0
},
{
    "question": "Se interrompo la radioterapia curativa radicale, cosa rischio?",
    "options": [
        "Crescita del tumore",
        "Necrosi dei tessuti sani circostanti",
        "Incremento della radiosensibilità",
        "Riduzione della tossicità"
    ],
    "correct": 0
},
{
    "question": "Cosa sono i raggi X?",
    "options": [
        "Onde elettromagnetiche",
        "Particelle alfa",
        "Particelle beta",
        "Radiazioni termiche"
    ],
    "correct": 0
},
{
    "question": "Il Tramadolo è classificato come:",
    "options": [
        "Oppioide minore",
        "Oppioide maggiore",
        "FANS",
        "Anestetico locale"
    ],
    "correct": 0
},
{
    "question": "Qual è un oppioide sintetico?",
    "options": [
        "Fenilpiperidina",
        "Morfina",
        "Codeina",
        "Buprenorfina"
    ],
    "correct": 0
},
{
    "question": "Cosa serve per ottenere analgesia tronculare?",
    "options": [
        "Iniezione di anestetico locale nello spazio peridurale o subaracnoideo",
        "Somministrazione di FANS endovenosi",
        "Infusione di oppioidi sottocutanei",
        "Blocco dei gangli simpatici con corticosteroidi"
    ],
    "correct": 0
},
{
    "question": "In sede di colloquio, un medico può utilizzare alcune tecniche comunicative per restituire le informazioni al paziente. Tra queste vi sono:",
    "options": [
        "L’uso della parafrasi e delle reflection skills",
        "L’uso esclusivo di domande chiuse",
        "L’uso della ripetizione meccanica delle parole del paziente",
        "L’interruzione frequente per mantenere il ritmo del colloquio"
    ],
    "correct": 0
},
{
    "question": "Nella frase: 'È comprensibile che uno preferisca evitare di assumere una pillola tutti i giorni... ma i rischi che può procurare una patologia di questo tipo [un’ipertensione] sono... abbastanza importanti…' quale tecnica comunicativa viene utilizzata?",
    "options": [
        "Reflection skills",
        "Parafrasi",
        "Domanda aperta",
        "Sommario"
    ],
    "correct": 0
},
{
    "question": "Qual è il vantaggio della disease-centered care?",
    "options": [
        "Essere ripetibile e insegnabile",
        "Migliorare il coinvolgimento emotivo del paziente",
        "Rendere la comunicazione empatica",
        "Facilitare la narrazione del vissuto del paziente"
    ],
    "correct": 0
},
{
    "question": "Cosa si intende per 'empatia del medico'?",
    "options": [
        "Atteggiamento di ascolto delle emozioni del paziente e restituzione della loro comprensione attraverso la comunicazione",
        "Capacità di prendere decisioni rapide senza consultare il paziente",
        "Atteggiamento esclusivamente diagnostico e terapeutico",
        "Esclusiva attenzione ai sintomi fisici del paziente"
    ],
    "correct": 0
},
{
    "question": "Cosa si intende per una 'brutta notizia'?",
    "options": [
        "Un’informazione che altera le aspettative del paziente",
        "Un risultato diagnostico incerto",
        "Una comunicazione troppo tecnica",
        "Un dato clinico non rilevante"
    ],
    "correct": 0
},
{
    "question": "Scrivere la propria esperienza di malattia può essere utile perché:",
    "options": [
        "Aiuta a dare un tempo e un luogo all’esperienza di malattia",
        "Serve esclusivamente per fini diagnostici",
        "Riduce la necessità di comunicazione con il medico",
        "È una pratica esclusivamente terapeutica"
    ],
    "correct": 0
},
{
    "question": "Quale strumento è fondamentale per stabilire una relazione medico-paziente?",
    "options": [
        "La comunicazione",
        "L’uso di esami diagnostici approfonditi",
        "L’autorità medica",
        "La prescrizione rapida della terapia"
    ],
    "correct": 0
},
{
    "question": "Nella medicina narrativa, come viene effettuata l'anamnesi?",
    "options": [
        "Viene co-costruita",
        "Viene scritta unilateralmente dal medico",
        "È basata solo su questionari standardizzati",
        "È esclusivamente orientata ai sintomi fisici"
    ],
    "correct": 0
},
{
    "question": "Tra i segnali per cogliere l'agenda del paziente rientrano:",
    "options": [
        "Temi reiterati dal paziente",
        "Interruzioni frequenti da parte del medico",
        "Domande tecniche del paziente",
        "Reazioni emotive del medico"
    ],
    "correct": 0
},
{
    "question": "A cosa serve l'uso delle reflection skills nel colloquio con il paziente?",
    "options": [
        "Per riflettere la comprensione del vissuto emotivo del paziente",
        "Per ripetere le informazioni in modo meccanico",
        "Per focalizzare l'attenzione esclusivamente sui sintomi fisici",
        "Per interrompere il paziente quando parla troppo"
    ],
    "correct": 0
},
{
    "question": "Qual è lo scopo della tecnica di 'focusing' nella visita centrata sul paziente?",
    "options": [
        "Portare l’attenzione su un aspetto specifico",
        "Distrarre il paziente dal suo problema principale",
        "Accelerare la conclusione del colloquio",
        "Valutare esclusivamente i sintomi fisici"
    ],
    "correct": 0
},
{
    "question": "L'uso delle domande aperte durante il colloquio con il paziente serve soprattutto per:",
    "options": [
        "Raccogliere informazioni anche sullo stato emotivo del paziente",
        "Impedire al paziente di parlare troppo",
        "Guidare il paziente verso una risposta chiusa",
        "Confermare una diagnosi già stabilita"
    ],
    "correct": 0
}  
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Prendi 40 domande a caso
function getRandomQuestions(allQuestions, num) {
    if (allQuestions.length < num) {
        console.error("Non ci sono abbastanza domande!");
        num = allQuestions.length; // Usa tutte le domande disponibili se sono meno di 40
    }
    shuffleArray(allQuestions);
    return allQuestions.slice(0, num);
}

const selectedQuestions = getRandomQuestions(questions, 40);

function generaQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);

        // Mischia le opzioni mantenendo il mapping originale
        const originalOptions = item.options.map((opt, i) => ({ text: opt, index: i }));
        shuffleArray(originalOptions);

        originalOptions.forEach((option) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = option.index; // Mantiene l'indice originale
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        form.appendChild(questionDiv);
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Invia Risposte';
    button.classList.add('button');
    button.onclick = () => calcolaPunteggio();
    form.appendChild(button);
}

function calcolaPunteggio() {
    const form = document.getElementById('quiz-form');
    let score = 0;

    const answers = new FormData(form);

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.querySelectorAll('.question')[index]; // Seleziona il div della domanda
        const userAnswer = answers.get(`q${index}`);

        // Rimuovi eventuali feedback precedenti
        const existingFeedback = questionDiv.querySelector('.feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Crea un elemento per il feedback
        const feedback = document.createElement('span');
        feedback.classList.add('feedback');
        feedback.style.marginLeft = '10px';

        // Verifica la risposta e aggiungi il feedback
        if (parseInt(userAnswer) === item.correct) {
            score++;
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Risposta corretta';
        } else {
            feedback.className = 'feedback wrong';
            feedback.textContent = `✗ Sbagliata. Corretto: ${item.options[item.correct]}`;
        }

        // Aggiungi il feedback accanto alla domanda
        questionDiv.appendChild(feedback);
    });

    // Mostra il punteggio totale in alto
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Il tuo punteggio è: ${score} su ${selectedQuestions.length}</h2>`;
}

document.addEventListener('DOMContentLoaded', generaQuiz);
