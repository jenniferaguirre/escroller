const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const timerEl = document.getElementById("timer");
const timeLeft = document.getElementById("timeLeft");
const finalScore = document.getElementById("finalScore");
const highScore = document.getElementById("highScore");
const question = document.getElementById("question");
const message = document.getElementById("message");
const scoreDiv = document.getElementById("score");


//arrays
var questions = [
    {
        question: "Inside which HTML element do we put the Javacript?",
        choices: ["<script>", "<javascript>", "scripting", "<div>"],
        correct: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: [
            "The <head> section",
            "the <body> section", "Both the <head> section and <body> section are correct",],
        correct: "Both the <head> section and <body> section are correct"
    },

    {
        question: "How do you create a function in JavaScript?",
        choices: ["function: myFunction()", "function myFunction()", "function=myFunction()"],
        correct: "function myFunction()"
    },


];

var timerId;
var runningQuestion;
var questionTime;
var score;
var highscore = 0;


start.addEventListener("click", startQuiz);


function startQuiz() {
    runningQuestion = 0;
    questionTime = 10;
    score = 0;

    message.style.display = "none";
    scoreDiv.style.display = "none";
    start.style.display = "none";
    quiz.style.display = "block";
    timerEl.style.display = "block";

    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timerId)
    timeLeft.textContent = questionTime

    timerId = setInterval(function () {
        questionTime--;
        timeLeft.textContent = questionTime

        if (questionTime <= 0) {
            renderScore()
        }

    }, 1 * 1000);
}

function renderQuestion() {
    const q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>"

    for (let i = 0; i < q.choices.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("class", "userChoice")
        button.setAttribute("value", q.choices[i])
        button.onclick = selectedButton
        button.textContent = q.choices[i]
        question.appendChild(button)
    }

}

function selectedButton() {
    if (this.value == questions[runningQuestion].correct) {
        score++
        questionTime += 10
    } else {
        questionTime += 5
    }

    runningQuestion++

    if (runningQuestion < questions.length) {
        renderQuestion()
    } else {
        renderScore()
    }
}

function renderScore() {
    clearInterval(timerId)

    timerEl.style.display = "none"
    quiz.style.display = "none"
    start.style.display = "block"
    scoreDiv.style.display = "block"
    message.style.display = "block"

    if (score > highscore) {
        highscore = score
        message.textContent = "YOU GOT THE HIGH SCORE!!"
    } else {
        message.textContent = "Nice try!!"
    }

    finalScore.textContent = score
    highScore.textContent = highscore
}



//THINGS TO NEED TO BE WORK ON'//
// DISPLAY HOW MANY POINTS the user got //
//display wrong anD correct questions
// else statmn taking down points
//try to make timer appear and show 