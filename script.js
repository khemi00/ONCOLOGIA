// Array di domande e risposte
const questions = [
    {
        "question": "Qual è la patologia più frequente dell’orecchio esterno?",
        "options": [
            "Otite esterna",
            "Carcinoma basocellulare",
            "Colesteatoma"
        ],
        "correct": 0
    },
    {
        "question": "L'otite esterna:",
        "options": [
            "Deriva sempre da un raffreddore",
            "Può derivare da un raffreddore",
            "Non ha rapporti diretti con il raffreddore"
        ],
        "correct": 1
    }
];

// Funzione per generare il quiz dinamicamente
function generaQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = ''; // Svuota il contenuto attuale

    questions.forEach((item, index) => {
        // Crea un contenitore per ogni domanda
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Aggiungi il testo della domanda
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);

        // Aggiungi le opzioni di risposta
        item.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        form.appendChild(questionDiv);
    });

    // Aggiungi il pulsante per inviare le risposte
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Invia Risposte';
    button.classList.add('button');
    button.onclick = () => calcolaPunteggio();
    form.appendChild(button);
}

// Funzione per calcolare il punteggio
function calcolaPunteggio() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = new FormData(form);
    questions.forEach((item, index) => {
        const userAnswer = answers.get(`q${index}`);
        if (parseInt(userAnswer) === item.correct) {
            score++;
        }
    });

    resultDiv.textContent = `Il tuo punteggio è: ${score} su ${questions.length}`;
}

// Carica il quiz quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', generaQuiz);
