et myQuestions = [
    {   question: "What is Javascript used for?", 
        answers: [
                "A: JavaScript gives structure to a web page.",
                "B: JavaScript gives style to a web page.",
                "C: JavaScript gives interactive elements to a web page.", 
                "D: Javascript is what web developers call coffee."
                ],
        correct: "C"
    },    
    {   question: "Which of the following is NOT a Javascript data type?",        
        answers: ["A: Boolean", "B: Object", "C: String", "D: Boomerang"],
        correct: "D"
    },    
    {   question: "What is the code used for strict equality?",        
        answers: ["A: ===", "B: !==", "C: =", "D: <=>"],
        correct: "A"
    }
];
const welcomeEl = $('#welcome');
const startBtnEl = $('#startButton');
const leaderBtnEl = $('#leaderboardButton');
const btnMCEl = $('.butonsMC');
// const AbtnMCEl = $('#buttonA');
// const BbtnMCEl = $('#buttonB');
// const CbtnMCEl = $('#buttonC');
// const DbtnMCEl = $('#buttonD');
let gameEl = $('#game');
let timerEl = $("#timer");
/*We are going to hide the timer and Multiple Coice buttons until the quiz is started*/
// timerEl.hide();
// AbtnMCEl.hide();
// BbtnMCEl.hide();
// CbtnMCEl.hide();
// DbtnMCEl.hide();
let questionEl = $('<h2>');
// let answersEl = $('<ul>');
// let answerElA = $('<li>');
// let answerElB = $('<li>');
// let answerElC = $('<li>');
// let answerElD = $('<li>');
let i = 0;
let currentQuestion=myQuestions[i]
answersEl.attr('class', 'answers');
questionEl.attr('id', 'questionEl');
/*The timer will show and the welcome message will be hidden when the quiz starts*/
/*And the first question will appear on the screen*/
function startQuiz() { 
    countdown()
    $('#welcome').hide();
    AbtnMCEl.show();
    BbtnMCEl.show();
    CbtnMCEl.show();
    DbtnMCEl.show();
    nextQuestion();
}      
function nextQuestion(event) {
    let currentQuestion=myQuestions[i];
    if (i > myQuestions.length -1) {
        leaderboard();
        return
    }   
    questionEl.text(currentQuestion.question);
    gameEl.append(questionEl);
    answerElA.text(currentQuestion.answers[0]);
    answerElB.text(currentQuestion.answers[1]);
    answerElC.text(currentQuestion.answers[2]);
    answerElD.text(currentQuestion.answers[3]);
    answersEl.append(answerElA);
    answersEl.append(answerElB);
    answersEl.append(answerElC);
    answersEl.append(answerElD);
    gameEl.append(answersEl);
    i++; 
    if (currentQuestion.correct === "A") {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
;      
BbtnMCEl.on("click", function(event) {
    if (currentQuestion.correct === "B") {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
});
CbtnMCEl.on("click", function(event) {
    if (currentQuestion.correct === "C") {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
});
DbtnMCEl.on("click", function(event) {
    if (currentQuestion.correct === "D") {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
});
}    
/*The timer will countdown from 60*/
let secondsLeft = 60;
function countdown(){
    timerEl.show();
    let timerInterval = setInterval(function() {
        if(secondsLeft > 1) {
            timerEl.text(secondsLeft + ' seconds remaining');
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timerEl.text(secondsLeft + ' second remaining');
            secondsLeft--;
        } else {
            timerEl.text('');
            clearInterval(timerInterval);
            leaderboard();
        }    
    }, 1000);
}
function leaderboard() {
    timerEl.hide();
    welcomeEl.hide();
    gameEl.hide();  
    AbtnMCEl.hide();
    BbtnMCEl.hide();
    CbtnMCEl.hide();
    DbtnMCEl.hide();
}
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.on("click", startQuiz);
leaderBtnEl.on("click", leaderboard);
btnMCEl.on("click", nextQuestion);
AbtnMCEl.on("click", nextQuestion);
BbtnMCEl.on("click", nextQuestion);
CbtnMCEl.on("click", nextQuestion);
DbtnMCEl.on("click", nextQuestion);