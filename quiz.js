let currentQuestionIndex = 0;
let score = 0;

// Questions data
const questions = [
    {
        question: "1. Do you sleep within 5-7 minutes of your head touching the pillow?",
        name: "q1"
    },
    {
        question: "2. Do you wake up straight away in the morning?",
        name: "q2"
    },
    {
        question: "3. Do you rarely snooze alarm and wake up in one go?",
        name: "q3"
    },
    {
        question: "4. Do you wake up feeling fresh in the morning, excited to start a new day?",
        name: "q4"
    },
    {
        question: "5. Do you need coffee to stay active?",
        name: "q5"
    },
    {
        question: "6. Can you easily stay awake all day or need an afternoon nap?",
        name: "q6"
    },
    {
        question: "7. Do you need extra sleep on weekends?",
        name: "q7"
    }
];

// Function to display the current question
function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <label><input type="radio" name="${currentQuestion.name}" value="0"> 0</label>
        <label><input type="radio" name="${currentQuestion.name}" value="1"> 1</label>
        <label><input type="radio" name="${currentQuestion.name}" value="2"> 2</label>
        <label><input type="radio" name="${currentQuestion.name}" value="3"> 3</label>
        <label><input type="radio" name="${currentQuestion.name}" value="4"> 4</label>
    `;
}

// Function to move to the next question
function nextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = document.querySelector(`input[name="${currentQuestion.name}"]:checked`);

    // If no answer is selected, return
    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    // Add the selected answer to the score
    score += parseInt(selectedAnswer.value);
    currentQuestionIndex++;

    // If there are more questions, show the next one
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // If no more questions, display the result
        displayResult();
    }
}

// Function to display the result based on the score
function displayResult() {
    const resultDiv = document.getElementById('result');
    let result;

    if (score >= 0 && score <= 7) {
        result = "Zombie";
    } else if (score >= 8 && score <= 14) {
        result = "Alert Zone";
    } else if (score >= 15 && score <= 21) {
        result = "Light Sleeper";
    } else if (score >= 22 && score <= 28) {
        result = "Deep Sleep";
    } else {
        result = "Invalid score";
    }

    // Display result
    resultDiv.innerHTML = `<h2>Your Sleep Profile: ${result}</h2><p>Your score is ${score}.</p>`;
}

// Initialize the quiz by showing the first question
showQuestion();
