








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
    
        // {
        // question: "How do you create a function in JavaScript?",
        // optionA:"function: myFunction()",
        // optionB:"function myFunction()",
        // optionC:"function=myFunction()",
        // correct: "B",
        // },
    
      
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

function renderProgress(){
    for(let qIndex=0;qIndex<=lastQuestion;qIndex++){

progress.innerHTML+="<div class= 'prog' id="+ qIndex+"></div";

    }}

 


function checkAnswer(){
if(correct== questions[runningQuestion].correct){
    score++
}else{


    
}


}
 









    
//     var questionCounter = 0; //Tracks question number
//     var selections = []; //Array containing user choices
//     var quiz = $('#quiz'); //Quiz div object
    
//     // Display initial question
//     displayNext();
    
//     // Click handler for the 'next' button
//     $('#next').on('click', function (e) {
//       e.preventDefault();
      
//       // Suspend click listener during fade animation
//       if(quiz.is(':animated')) {        
//         return false;
//       }
//       choose();
      
//       // If no user selection, progress is stopped
//       if (isNaN(selections[questionCounter])) {
//         alert('Please make a selection!');
//       } else {
//         questionCounter++;
//         displayNext();
//       }
//     });
    
//     // Click handler for the 'prev' button
//     $('#prev').on('click', function (e) {
//       e.preventDefault();
      
//       if(quiz.is(':animated')) {
//         return false;
//       }
//       choose();
//       questionCounter--;
//       displayNext();
//     });
    
//     // Click handler for the 'Start Over' button
//     $('#start').on('click', function (e) {
//       e.preventDefault();
      
//       if(quiz.is(':animated')) {
//         return false;
//       }
//       questionCounter = 0;
//       selections = [];
//       displayNext();
//       $('#start').hide();
//     });
    
//     // Animates buttons on hover
//     $('.button').on('mouseenter', function () {
//       $(this).addClass('active');
//     });
//     $('.button').on('mouseleave', function () {
//       $(this).removeClass('active');
//     });
    
//     // Creates and returns the div that contains the questions and 
//     // the answer selections
//     function createQuestionElement(index) {
//       var qElement = $('<div>', {
//         id: 'question'
//       });
      
//       var header = $('<h2>Question ' + (index + 1) + ':</h2>');
//       qElement.append(header);
      
//       var question = $('<p>').append(questions[index].question);
//       qElement.append(question);
      
//       var radioButtons = createRadios(index);
//       qElement.append(radioButtons);
      
//       return qElement;
//     }
    
//     // Creates a list of the answer choices as radio inputs
//     function createRadios(index) {
//       var radioList = $('<ul>');
//       var item;
//       var input = '';
//       for (var i = 0; i < questions[index].choices.length; i++) {
//         item = $('<li>');
//         input = '<input type="radio" name="answer" value=' + i + ' />';
//         input += questions[index].choices[i];
//         item.append(input);
//         radioList.append(item);
//       }
//       return radioList;
//     }
    
//     // Reads the user selection and pushes the value to an array
//     function choose() {
//       selections[questionCounter] = +$('input[name="answer"]:checked').val();
//     }
    
//     // Displays next requested element
//     function displayNext() {
//       quiz.fadeOut(function() {
//         $('#question').remove();
        
//         if(questionCounter < questions.length){
//           var nextQuestion = createQuestionElement(questionCounter);
//           quiz.append(nextQuestion).fadeIn();
//           if (!(isNaN(selections[questionCounter]))) {
//             $('input[value='+selections[questionCounter]+']').prop('checked', true);
//           }
          
//           // Controls display of 'prev' button
//           if(questionCounter === 1){
//             $('#prev').show();
//           } else if(questionCounter === 0){
            
//             $('#prev').hide();
//             $('#next').show();
//           }
//         }else {
//           var scoreElem = displayScore();
//           quiz.append(scoreElem).fadeIn();
//           $('#next').hide();
//           $('#prev').hide();
//           $('#start').show();
//         }
//       });
//     }
    
//     // Computes score and returns a paragraph element to be displayed
//     function displayScore() {
//       var score = $('<p>',{id: 'question'});
      
//       var numCorrect = 0;
//       for (var i = 0; i < selections.length; i++) {
//         if (selections[i] === questions[i].correctAnswer) {
//           numCorrect++;
//         }
//       }
      
//       score.append('You got ' + numCorrect + ' questions out of ' +
//                    questions.length + ' right!!!');
//       return score;
//     }
//   })();













// var questions=[

//     {

//         question: "Inside qhich HTML element do we put the Javacript?",
//         option1:"<script>",
//         option2:"<javascript>",
//         option3:"scripting",
//         correctAnswer: "1",
//     },
    
//    { question : "Where is the correct place to insert a JavaScript?",
//    option1:"The <head> section",
//    option2:"the <body> section",
//    option3:"Both the <head> section and <body> section are correct",
//    correctAnswer: "3",

//    },

//    {

//  question: "The external JavaScript file must contain the <script> tag",
//  option1:"False",
//  option2:"True",
//  option3:"I dont know",
//  correctAnswer: "1",
//  options:[ "True", "False"],
// correctAnswer: "False",

//    },

//    { 
//     question: "How do you create a function in JavaScript?",
//     option1:"function: myFunction()",
//     option2:"function myFunction()",
//     option3:"function=myFunction()",
//     correctAnswer: "2",
    
    
//   }

// ]


// var currentQuestion=0;
// var score=0;

// var totalQuestions=questions.length;

// var container= document.getElementById("quizArea")
// var option1=document.getElementById("option1");
// var option2=document.getElementById("option2");
// var option3=document.getElementById("option3");
// var option4=document.getElementById("option4");

// function loadQuestion(questionIndex)
// { var q= questions[questionInex];
//     questionEl.textContent= (questionIndex +1)+ "."+q.question;
// option1.textContent=q.option1;
// option2.textContent=q.option2;
// option3.textContent=q.option3;
// option4.textContent=q.option4;

// };
// function loadQuestion(){
// var selectedOption= document.querySelector("input[type=radio]:checked"); 
// if (!selectedOption){
// alert ("Select an answer !");
// return;
// }
// var correctAnswer= selectedOption.nodeValue;
// if(questions[currentQuestion].correctAnswer==correctAnswer){
//     score+=10;
// }
// selectedOption.checked=false ;
// currentQuestion++;
// if (currentQuestion==totalQuestions-1) {
//     nextButton.textContent="Finish";
// }
//  if (currentQuestion==totalQuestions){

//     container.style.display="none";

//     resultCont.style.display="";
//     resultCont.textContent="Your score: " +score;
//  }

//  loadQuestion(currentQuestion);
//  loadQuestion(currentQuestion);
// }

