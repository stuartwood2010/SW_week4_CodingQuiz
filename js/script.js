const myQuestions = [
    {   question: "What is Javascript used for?", 
        answers: [
                "JavaScript gives structure to a web page.", "JavaScript gives style to a web page.",
                "JavaScript gives interactive elements to a web page.", 
                "Javascript is the name that web developers give to coffee."
                ],
        correctAnswer: "JavaScript gives interactive elements to a web page."
    },    
    {   question: "Which of the following is NOT a Javascript data type?",        
        answers: ["Boolean", "Object", "String", "Boomerang"],        
        correctAnswer: "Boomerang",
    },    
    {   question: "What is the code used for strict equality?",        
        answers: ["===", "!==", "="],        
        correctAnswer: "==="
    }
];
const welcomeEl = $('#welcome');
const startBtnEl = $('#startButton');
const leaderBtnEl = $('#leaderboardButton');
const gameEl = $('#game');
const timerEl = $("#timer");
/*We are going to hide the timer until the quiz is started*/
timerEl.hide();
/*The timer will show and the welcome message will be hidden when the quiz starts*/
/*And the first question will appear on the screen*/
let questionEl = $('<h2>');
questionEl.attr('id', 'questionEl');
let answersEl = $('<ul>');
let answerEl1 = $('<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1">""</label></div>');
let answerEl2 = $('<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault1">""</label></div>');
let answerEl3 = $('<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"><label class="form-check-label" for="flexRadioDefault1">""</label></div>');
let answerEl4 = $('<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"><label class="form-check-label" for="flexRadioDefault1">""</label></div>');
answersEl.attr('class', 'answers');
function startQuiz() { 
    countdown()
    timerEl.show();
    $('#welcome').hide();
    let i = 0;
    currentQuestion = myQuestions[i];
    questionEl.text(currentQuestion.question);
    gameEl.append(questionEl);    
    answerEl1.text(currentQuestion.answers[0]);
    answerEl2.text(currentQuestion.answers[1]);
    answerEl3.text(currentQuestion.answers[2]);
    answerEl4.text(currentQuestion.answers[3]);
    answersEl.append(answerEl1);
    answersEl.append(answerEl2);
    answersEl.append(answerEl3);
    answersEl.append(answerEl4);
    gameEl.append(answersEl);
}      
 
/*The timer will countdown from 30, with every wrong answer the user gets 10 seconds deducted*/
/*Every right answer the timer will add 10 seconds; the time left on the clock when the quiz ends is the score*/
let secondsLeft = 25;
function countdown(){
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
// function nextQuestion() {


function leaderboard() {
    timerEl.hide();
    gameEl.hide();    
}
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.on("click", startQuiz);