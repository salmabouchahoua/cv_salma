const quizData = [
    {
        question: "What is your greatest quality, in your opinion?",
        options: [
            { text: "Your intelligence. Not dumb at all!", points: 2 },
            { text: "Your kindness. You're softer than a lamb!", points: 1 },
            { text: "Your creativity. You have an overflowing imagination!", points: 3 }
        ]
    },
    {
        question: "It's the end of the world, and it's your last day on Earth. How do you spend it?",
        options: [
            { text: "Option A: Spend as much time as possible with your loved ones.", points: 1 },
            { text: "Option B: Do all the forbidden things possible.", points: 3 },
            { text: "Option C: Do as many things as you've always dreamed of.", points: 2 }
        ]
    },
    {
        question: "You are at a party where you don't know anyone. What would you rather do?",
        options: [
            { text: "Option A: Integrate yourself into everyone's conversations.", points: 1 },
            { text: "Option B: Stay in your corner the whole evening.", points: 2 },
            { text: "Option C: Approach a friendly group, listen, and participate occasionally.", points: 3 }
        ]
    },
    {
        question: "When someone annoys you, what do you feel like doing?",
        options: [
            { text: "Option A: Pour gasoline on them, light a match, throw it, and watch the person burn slowly.", points: 3 },
            { text: "Option B: Smash their face against a wall.", points: 2 },
            { text: "Option C: Send them away with a good insult.", points: 1 }
        ]
    },
    {
        question: "What is your relationship with rules and authority?",
        options: [
            { text: "Option A: Follow the rules if they don't go against your principles.", points: 2 },
            { text: "Option B: You are more likely to follow the rules quietly; you prefer to avoid trouble.", points: 1 },
            { text: "Option C: You hate being given orders, and you do things your own way.", points: 3 }
        ]
    },
    {
        question: "How do you react when you see someone suffering?",
        options: [
            { text: "Option A: Try to find solutions to help them as much as possible.", points: 1 },
            { text: "Option B: Honestly? You already have too much to deal with to worry about it.", points: 2 },
            { text: "Option C: Suffer internally with them. You are on the verge of tears, and you can't stand to see it.", points: 3 }
        ]
    },
    {
        question: "If the concept of the Purge (a night where everyone has the right to kill) existed, how would you spend your night?",
        options: [
            { text: "Option A: Go and kill those who kill innocent people.", points: 3 },
            { text: "Option B: Barricade yourself at home with your loved ones, waiting for it to pass.", points: 1 },
            { text: "Option C: Go and kill all your enemies. And the idiots too.", points: 2 }
        ]
    },
    {
        question: "Socially, how would you describe yourself?",
        options: [
            { text: "Option A: Easily make more or less cool friendships.", points: 1 },
            { text: "Option B: Have difficulty forming relationships.", points: 2 },
            { text: "Option C: Have friends that can be counted on one hand.", points: 3 }
        ]
    },
    {
        question: "Which phrase describes you best?",
        options: [
            { text: "Option A: You are an optimist, always seeing the glass half full rather than half empty!", points: 1 },
            { text: "Option B: You tend to get angry quickly when things don't go as planned.", points: 2 },
            { text: "Option C: You are very sensitive, taking other people's problems to heart.", points: 3 }
        ]
    },
    {
        question: "What is your biggest weakness?",
        options: [
            { text: "Option A: Love. You are ready to do anything for your loved ones!", points: 1 },
            { text: "Option B: Your temperament. You react at the drop of a hat.", points: 2 },
            { text: "Option C: Animals. You would prefer to save an animal over a human.", points: 3 }
        ]
    }
 
];


let currentQuestion = 0;
let score = 0;


function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");

    
    const currentQuizData = quizData[currentQuestion];

 
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

   
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.value = option.points;
        button.addEventListener("click", () => selectAnswer(option.points));
        optionsContainer.appendChild(button);
    });

   
    resultContainer.innerText = `Score : ${score}`;
}


function selectAnswer(points) {
 
    score += points;
   
    currentQuestion++;

   
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}



function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");

    // Check if there are more questions
    if (currentQuestion < quizData.length) {
        const currentQuizData = quizData[currentQuestion];

        questionContainer.innerText = currentQuizData.question;
        optionsContainer.innerHTML = "";

        currentQuizData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.value = option.points;
            button.addEventListener("click", () => selectAnswer(option.points));
            optionsContainer.appendChild(button);
        });

       
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");

    // Hide the question and options containers
    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    // Display the result
    const totalPoints = quizData.reduce((acc, question) => acc + Math.max(...question.options.map(option => option.points)), 0);
    const psychopathyPercentage = (score / totalPoints) * 100;

    resultContainer.innerText = ` Vous avez un pourcentage  de ${psychopathyPercentage.toFixed(2)}%.`;

}




loadQuestion();
