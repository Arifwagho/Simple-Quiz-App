
var questionData = [
    //QUESTIONS ARRAY
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: ["1996", "1995", "1994", "None of the Above"],
    },
  ];







var quizAppBody = document.getElementById("quizAppBody");
var options = document.getElementById("options");
var nextBt = document.getElementById("nextBt");
var questionCount =0;
var score =0;
var timerCountMin =4;
var timerCountSec =59;
var interval;
function render (){if(questionCount<questionData.length){
    quizAppBody.innerHTML = `<div class="container">
    <div class="row">
        <div class="col-sm" >
            Question No: ${questionCount+1}/ ${questionData.length}
        </div>
        <div class="col-sm" id="timer">
            Durration: 00:${timerCountMin}:${timerCountSec}
        </div>

    </div>
    <h2> ${questionData[questionCount].question}</h2> `

}
options.innerHTML = " ";
for (var i=0;i<questionData[questionCount].options.length;i++){

    options.innerHTML += `<div><button  class="btn btn-secondary py-3 my-3 " onclick="valCheck('${questionData[questionCount].options[i]}','${questionData[questionCount].answer}')"> ${questionData[questionCount].options[i]} </button> </div>`
}
}

render();

function nextQuestion(){if((questionCount+1)===questionData.length){
  quizAppBody.innerHTML=" "; 
  options.innerHTML = " ";
  nextBt.style="display:none";
quizAppBody.innerHTML = `<div> <h2> Result: ${score}</h2>  <h2> Percentage:${(score/questionData.length)*100}%</h2>  

<button class="btn btn-primary py-3 my-3" onclick="tryAgain()">Try Again </button></div>`
}


else {
    questionCount++;
    render();
}
} 


function valCheck(userSelected,ans){

  
if(userSelected === ans){
  
    score++;
console.log("Correct Answer ===>>" ,score);
// options.className="btn btn-success";
}
else{
  // options.className="btn btn-danger";
console.log("Wrong Answer ====>");

}
nextQuestion();
}


function tryAgain(){
  nextBt.style="display";
  questionCount=0;
  score=0;
  render();

}

// function timeStart(){
//   timerCountSec--
//   if(timerCountSec<=0){
//   timerCountMin--; 
  
// }}