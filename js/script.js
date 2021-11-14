const myQuestions = [
    question1 = { 
        question: "What is Javascript used for?", 
        answers: [
                "JavaScript gives structure to a web page.", "JavaScript gives style to a web page.",
                "JavaScript gives interactive elements to a web page.", 
                "Javascript is the name that web developers give to coffee."
                ],
        correctAnswer: "JavaScript gives interactive elements to a web page."
    },
    
    question2 = {
        question: "Which of the following is NOT a Javascript data type?",        
        answers: ["Boolean", "Object", "String", "Boomerang"],        
        correctAnswer: "Boomerang",
    },
    
    question3 = {
        question: "What is the code used for strict equality?",        
        answers: ["===", "!==", "="],        
        correctAnswer: "==="
    }
];
const startBtnEl = $('#startButton');
const leaderBtnEl = $('#leaderboardButton');
const gameEl = $('#game');
const timerEl = $("#timer");
/*We are going to hide the timer until the quiz is started*/
timerEl.hide();
/*The timer will show and the welcome message will be hidden when the quiz starts*/
/*And the first question will appear on the screen*/
function startQuiz() { 
    countdown()
    timerEl.show();
    $('#welcome').hide();
    let questionEl = $('<h2>');
    currentQuestion = myQuestions[0];
    questionEl.text(currentQuestion.question);
    gameEl.append(questionEl);
    let answersEl = $('ul');
    let answerEl = $('li');
    for (i=0; i < currentQuestion.answerslength; i++) {
        answerEl.text(currentQuestion.answers[0])
        // answersEl.append(answerEl);
        // gameEl.append(answersEl);
        console.log(answerEl);
    }
}
/*The timer will countdown from 30, with every wrong answer the user gets 10 seconds deducted*/
/*Every right answer the timer will add 10 seconds; the time left on the clock when the quiz ends is the score*/
let secondsLeft = 2;
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
            // nextQuestion();
         }    
    }, 1000);
}
// function nextQuestion() {
//     for (i=0; i < myQuestions.length; i++) {
//         console.log("Question " + myQuestions[i].question);
//     }
// }

function leaderboard() {
    timerEl.hide();
    gameEl.hide();    
}
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.on("click", startQuiz);