const myQuestions = [
    {
        question: "What is javascript used for?",
        
        answers: [
        "JavaScript gives structure to a web page.", "JavaScript gives style to a web page.",
        "JavaScript gives interactive elements to a web page.", 
        "Javascript is the name that web developers give to coffee."],
        
        correctAnswer: "JavaScript gives interactive elements to a web page."
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        
        answers: ["Boolean", "Object", "String", "Boomerang"],
        
        correctAnswer: "Boomerang",
    },
    {
        question: "What is the code used for strict equality?",
        
        answers: ["===", "!==", "="],
        
        correctAnswer: "==="
    }
];
const startBtnEl = document.querySelector("#startButton");
const leaderBtnEl = document.querySelector("#leaderboardButton");
const questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let answersEl = document.querySelector(".answers");
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let possibleAnswerA = document.createTextNode(myQuestions[0].answers[0]);
let possibleAnswerB = document.createTextNode(myQuestions[0].answers[1]);
let possibleAnswerC = document.createTextNode(myQuestions[0].answers[2]);
let possibleAnswerD = document.createTextNode(myQuestions[0].answers[3]);
/*We are going to hide the timer until the quiz is started*/
$('#timer').hide();
$('.answers').hide();
/*The timer will show and the welcome message will be hidden when the quiz starts*/
/*And the first question will appear on the screen*/
function startQuiz() { 
    countdown()
    $('#timer').show();
    $('#welcome').hide();
    $('.answers').show();
    console.log("Quiz has been started");
    let quizContent = document.createTextNode(myQuestions[0].question);
    questionEl.appendChild(quizContent);    
/*along with the multiple choice answers*/
    answerA.appendChild(possibleAnswerA);
    answerB.appendChild(possibleAnswerB);
    answerC.appendChild(possibleAnswerC);
    answerD.appendChild(possibleAnswerD);
    console.log(answersEl);
    console.log(answerA);
}
/*The timer will countdown from 30, with every wrong answer the user gets 10 seconds deducted*/
/*Every right answer the timer will add 10 seconds; the time left on the clock when the quiz ends is the score*/
let secondsLeft = 25;
function countdown(){
    let timerInterval = setInterval(function() {
        if(secondsLeft > 1) {
            timerEl.textContent = secondsLeft + ' seconds remaining';
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timerEl.textContent = secondsLeft + ' second remaining';
            secondsLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
            leaderboard();
         }    
    }, 1000);
}

function leaderboard() {
    $('#timer').hide();
    $('#question').hide();
    $('.answers').hide();
}
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.addEventListener("click", startQuiz);