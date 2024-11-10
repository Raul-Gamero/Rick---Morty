// Arrays of French grammar questions for each level
const questions = {
    A1: [
        {
            question: "Which article is correct: '____ maison'?",
            options: ["Le", "La", "Les", "Un"],
            answer: "La"
        },
        {
            question: "How do you say 'Good morning' in French?",
            options: ["Bonsoir", "Bonjour", "Salut", "Bonne nuit"],
            answer: "Bonjour"
        },
        {
            question: "What is the plural of 'ami'?",
            options: ["Amis", "Ami", "Amies", "Ame"],
            answer: "Amis"
        },
        {
            question: "How do you say 'Thank you' in French?",
            options: ["Merci", "S'il vous plaît", "Bonjour", "Excusez-moi"],
            answer: "Merci"
        },
        {
            question: "Translate: 'I am a student'.",
            options: ["Je suis un étudiant", "Je suis étudiant", "Il est étudiant", "Elle est étudiante"],
            answer: "Je suis étudiant"
        },
        {
            question: "What is the correct article for '____ livre'?",
            options: ["Le", "La", "Les", "Un"],
            answer: "Le"
        },
        {
            question: "How do you say 'See you soon' in French?",
            options: ["À bientôt", "À demain", "À ce soir", "À tout à l'heure"],
            answer: "À bientôt"
        },
        {
            question: "Which verb form is correct for 'I eat'?",
            options: ["Je manges", "Je mange", "Je manger", "Je mangé"],
            answer: "Je mange"
        },
        {
            question: "How do you say 'I live in Paris'?",
            options: ["Je habite à Paris", "J'habite à Paris", "Je vis à Paris", "Je suis à Paris"],
            answer: "J'habite à Paris"
        },
        {
            question: "How do you say 'Goodbye' in French?",
            options: ["Bonsoir", "Salut", "Bonne nuit", "Au revoir"],
            answer: "Au revoir"
        }
    ],
    A2: [
        {
            question: "Translate: 'They are going to the cinema'.",
            options: ["Ils vont au cinéma", "Elles vont à cinéma", "Ils vont cinéma", "Ils vont à la cinéma"],
            answer: "Ils vont au cinéma"
        },
        {
            question: "What is the French for 'a small house'?",
            options: ["Une maison petite", "Une petite maison", "Un petit maison", "Une maison petite"],
            answer: "Une petite maison"
        },
        {
            question: "Which of these means 'We are studying'?",
            options: ["Nous étudions", "Vous étudiez", "Ils étudient", "On étudie"],
            answer: "Nous étudions"
        },
        {
            question: "What is the plural of 'cheval'?",
            options: ["Chevaux", "Chevals", "Chevauxs", "Chevas"],
            answer: "Chevaux"
        },
        {
            question: "How do you say 'I don't like it'?",
            options: ["Je ne l'aime pas", "J'aime pas", "Je ne pas aime", "Je n'aime pas"],
            answer: "Je n'aime pas"
        },
        {
            question: "How do you say 'I have a question'?",
            options: ["J'ai une question", "J'ai un question", "Je ai une question", "Je suis question"],
            answer: "J'ai une question"
        },
        {
            question: "Which of these is correct for 'She speaks French'?",
            options: ["Elle parle français", "Elle parle le français", "Elle dit français", "Elle dit en français"],
            answer: "Elle parle français"
        },
        {
            question: "How do you say 'We don't have time'?",
            options: ["Nous n'avons pas de temps", "On a pas temps", "Nous n'a pas de temps", "On n'avons pas de temps"],
            answer: "Nous n'avons pas de temps"
        },
        {
            question: "Which article is correct: '____ enfants'?",
            options: ["Les", "Le", "Un", "Des"],
            answer: "Les"
        },
        {
            question: "Translate 'She is very kind'.",
            options: ["Elle est très gentille", "Elle est beaucoup gentil", "Elle très gentille", "Elle est gentille très"],
            answer: "Elle est très gentille"
        }
    ],
    B1: [
        {
            question: "Translate: 'They have been waiting for an hour.'",
            options: [
                "Ils attendent depuis une heure",
                "Ils ont attendu pour une heure",
                "Ils attendent pour une heure",
                "Ils ont attendu depuis une heure"
            ],
            answer: "Ils attendent depuis une heure"
        },
        {
            question: "How do you say 'I realized it'?",
            options: ["Je m'en suis rendu compte", "Je me suis réalise", "Je l'ai réalisé", "Je m'ai réalisé"],
            answer: "Je m'en suis rendu compte"
        },
        {
            question: "Which is correct for 'They would have gone'?",
            options: ["Ils seraient allés", "Ils iront", "Ils allaient", "Ils avaient allés"],
            answer: "Ils seraient allés"
        },
        {
            question: "Translate 'I hope it works'.",
            options: ["J'espère que ça marche", "Je souhaite que ça marche", "J'espère il marche", "Je espère qu'il fonctionne"],
            answer: "J'espère que ça marche"
        },
        {
            question: "How do you say 'I have been working here for two years'?",
            options: ["Je travaille ici depuis deux ans", "Je travaillé ici pour deux ans", "Je ai travaillé ici deux ans", "Je travaillais ici depuis deux ans"],
            answer: "Je travaille ici depuis deux ans"
        },
        {
            question: "What is the subjunctive form of 'Il faut que tu ____' (faire)?",
            options: ["fasses", "faites", "fais", "feras"],
            answer: "fasses"
        },
        {
            question: "How do you say 'She doesn’t believe me'?",
            options: ["Elle ne me croit pas", "Elle me croit non", "Elle ne me pas croit", "Elle croit moi non"],
            answer: "Elle ne me croit pas"
        },
        {
            question: "Translate 'I’m afraid he is wrong'.",
            options: ["J'ai peur qu'il ait tort", "J'ai peur qu'il a tort", "J'ai peur il est tort", "Je crains qu'il a tort"],
            answer: "J'ai peur qu'il ait tort"
        },
        {
            question: "How do you say 'Let’s talk about it'?",
            options: ["Parlons-en", "Parler de ça", "On en parle", "Disons-en"],
            answer: "Parlons-en"
        },
        {
            question: "Translate 'I need some advice'.",
            options: ["J'ai besoin de conseils", "Je veux de conseils", "Il faut des conseils", "J'ai conseils besoin"],
            answer: "J'ai besoin de conseils"
        }
    ],
    B2: [
        {
            question: "Which is the correct conjugation for 'Nous ____ fait' (Present Perfect)?",
            options: ["avons", "sommes", "faisons", "faire"],
            answer: "avons"
        },
        {
            question: "Translate 'The more I try, the more I fail'.",
            options: ["Plus j'essaie, plus j'échoue", "Autant j'essaie, autant j'échoue", "Plus j'essaie, moins j'échoue", "Moins j'essaie, plus j'échoue"],
            answer: "Plus j'essaie, plus j'échoue"
        },
        {
            question: "What is the past subjunctive of 'qu’il ____' (avoir)?",
            options: ["ait eu", "avait eu", "ait avoir", "avait avoir"],
            answer: "ait eu"
        },
        {
            question: "Translate 'I wouldn’t have come if I knew'.",
            options: ["Je ne serais pas venu si j'avais su", "Je ne viendrais pas si je savais", "Je n'étais pas venu si je savais", "Je ne serais pas venu si je savais"],
            answer: "Je ne serais pas venu si j'avais su"
        },
        {
            question: "How do you say 'They must have left already'?",
            options: ["Ils ont dû partir déjà", "Ils ont dû déjà partir", "Ils devaient partir déjà", "Ils sont partis déjà"],
            answer: "Ils ont dû déjà partir"
        },
        {
            question: "How do you say 'As far as I know'?",
            options: ["Autant que je sache", "Bien que je sache", "Pour autant je sache", "Même que je sache"],
            answer: "Autant que je sache"
        },
        {
            question: "Translate 'Unless she knows the truth'.",
            options: ["À moins qu'elle sache la vérité", "À moins que elle connaît la vérité", "À moins de savoir la vérité", "À moins qu'elle sait la vérité"],
            answer: "À moins qu'elle sache la vérité"
        },
        {
            question: "How do you say 'We would have liked to know it sooner'?",
            options: ["Nous aurions aimé le savoir plus tôt", "Nous avons aimé le savoir plus tôt", "Nous aimerions savoir plus tôt", "Nous avons voulu savoir plus tôt"],
            answer: "Nous aurions aimé le savoir plus tôt"
        },
        {
            question: "Translate 'Despite the bad weather'.",
            options: ["Malgré le mauvais temps", "Pourtant le mauvais temps", "Même avec le mauvais temps", "Contre le mauvais temps"],
            answer: "Malgré le mauvais temps"
        },
        {
            question: "What is the future perfect form of 'Ils ____' (être)?",
            options: ["auront été", "seront", "étaient", "seraient"],
            answer: "auront été"
        }
    ]
};


let currentQuestionIndex = 0;
let selectedLevel = null;
let rickHealth = 100;
let mortyHealth = 100;

// Function to start the game and display level selection menu
function startGame() {
    document.getElementById("level-selection").style.display = "block";
    document.getElementById("game-container").style.display = "none";
}

// Function to restart the game
document.getElementById("reset").addEventListener("click", resetGame);

function resetGame() {
    document.getElementById("level-selection").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    selectedLevel = null;
    currentQuestionIndex = 0;
    rickHealth = 100;
    mortyHealth = 100;
    updateHealthBars();
    
}

// Function to set the selected level and start the quiz
function selectLevel(level) {
    selectedLevel = level;
    currentQuestionIndex = 0;
    rickHealth = 100;
    mortyHealth = 100;
    updateHealthBars();
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    showQuestion();
}

// Function to display a question
function showQuestion() {
    const currentQuestion = questions[selectedLevel][currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("option1").textContent = currentQuestion.options[0];
    document.getElementById("option2").textContent = currentQuestion.options[1];
    document.getElementById("option3").textContent = currentQuestion.options[2];
    document.getElementById("option4").textContent = currentQuestion.options[3];

    document.getElementById("result").textContent = "";
}

// Function to check if the answer is correct .
function checkAnswer(selectedOption) {
    const currentQuestion = questions[selectedLevel][currentQuestionIndex];
    const resultDiv = document.getElementById("result");

    if (selectedOption.textContent === currentQuestion.answer) {
        resultDiv.textContent = "Correct! Morty hits Rick!";
        rickHealth -= 10;
        updateHealthBars();
        
        if (rickHealth <= 0) {
            resultDiv.textContent = "Morty wins!";
            endGame();
        } else {
            setTimeout(nextQuestion, 1000); // 1-second delay
        }
    } else {
        resultDiv.textContent = "Wrong! Rick hits Morty!";
        mortyHealth -= 10;
        updateHealthBars();
        
        if (mortyHealth <= 0) {
            resultDiv.textContent = "Morty has been defeated!";
            endGame();
        }
    }
    
}

// Function to automatically move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedLevel].length) {
        showQuestion();
    } else {
        document.getElementById("result").textContent = `Quiz completed! Morty wins!`;
        endGame();
    }
}

// Function to update health bars
function updateHealthBars() {
    document.getElementById("rick-health").style.width = `${rickHealth}%`;
    document.getElementById("morty-health").style.width = `${mortyHealth}%`;
    document.getElementById("rick-health-points").textContent = rickHealth;
    document.getElementById("morty-health-points").textContent = mortyHealth;
}

// Function to end the game
function endGame() {
    document.getElementById("question-container").style.display = "none";
}

// Add event listeners to options
document.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", function() {
        checkAnswer(this);
    });
});



// Initial setup
startGame();
