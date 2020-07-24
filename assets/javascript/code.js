








const start = document.getElementById("start");
const quiz= document.getElementById("quiz");
const question= document.getElementById("question");
// const optionA= document.getElementById("A");
// const optionB= document.getElementById("B");
// const optionC= document.getElementById("C");
const counter= document.getElementById("counter");
const progress= document.getElementById("progress");
const scoreDiv= document.getElementById("score");







//arrays
    var questions = [
        {
        question: "Inside which HTML element do we put the Javacript?",
            choices:["<script>",  "<javascript>", "scripting", "<div>"],
        correct: "<script>"
        }, 
    
      {
        question : "Where is the correct place to insert a JavaScript?",
        choices:[    
        "The <head> section",
        "the <body> section","Both the <head> section and <body> section are correct",],
        correct: "Both the <head> section and <body> section are correct"
        }, 
    
        {
        question: "How do you create a function in JavaScript?",
        choices:["function: myFunction()","function myFunction()","function=myFunction()"],
        correct: "function myFunction()"
        },
    
      
    ];
    

const lastQuestion=questions.lengt-1;
var runningQuestion=0;
var count =0;
const questionTime=10;
var TIMER;
var score=0;

function renderQuestion(){

    var q = questions[runningQuestion];
    question.innerHTML="<p>"+ q.question +"</p>"
for (let i = 0; i < questions[runningQuestion].choices.length; i++) {
    var button = document.createElement("button")
    button.setAttribute("class", "userChoice")
    button.setAttribute("value", questions[runningQuestion].choices[i])
    button.onclick =  selectedButton
    button.textContent = questions[runningQuestion].choices[i]
    question.appendChild(button)

}

function selectedButton() {
    runningQuestion++
    renderQuestion()
}

    


}
    // optionA.innerHTML=q.optionA;
    // optionB.innerHTML=q.optionB;
    // optionC.innerHTML=q.optionC;




start.addEventListener("click",startQuiz);



function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block"
    renderProgress();
    renderCounter();
    TIMER=setInterval(renderCounter,1000);

}



 


function checkAnswer(){
if(correct== questions[runningQuestion].correct){
    score++
}else{


    
}


}
 



