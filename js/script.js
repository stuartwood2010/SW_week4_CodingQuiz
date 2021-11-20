let myQuestions = [
    {   question: "What is Javascript used for?", 
        answers: [
                "A: JavaScript gives structure to a web page.",
                "B: JavaScript gives style to a web page.",
                "C: JavaScript gives interactive elements to a web page.", 
                "D: Javascript is what web developers call coffee."
                ],
        correctAnswer: "C: JavaScript gives interactive elements to a web page."
    },    
    {   question: "Which of the following is NOT a Javascript data type?",        
        answers: ["A: Boolean", "B: Object", "C: String", "D: Boomerang"],
        correctAnswer: "D: Boomerang"
    },    
    {   question: "What is the code used for strict equality?",        
        answers: ["A: ===", "B: !==", "C: =", "D: <=>"],
        correctAnswer: "A: ==="
    }
];
const welcomeEl = document.querySelector('#welcome');
const startBtnEl = document.querySelector('#startButton');
const leaderBtnEl = document.querySelector('#leaderboardButton');
let gameEl = document.querySelector('#game');
let timerEl = document.querySelector("#timer");
let questionEl = document.createElement('h2');
questionEl.setAttribute('id', 'questionEl');
userChoice = [];
let i = 0;
let k = -1;
let currentQuestion=myQuestions[i];
/**/
function startQuiz() { 
    countdown()
    welcomeEl.style.display = 'none';
    nextQuestion();
}
/**/
function nextQuestion() {
    gameEl.innerHTML = "";
    let currentQuestion=myQuestions[i];
    if (i > myQuestions.length -1) {
        leaderboard();
        return
    }   
    questionEl.textContent = (currentQuestion.question);
    gameEl.append(questionEl);
    for (let j=0; j<currentQuestion.answers.length; j++) {
        let MCbutton = document.createElement('button');
        MCbutton.setAttribute('value', currentQuestion.answers[j]);
        MCbutton.textContent = (currentQuestion.answers[j]);
        gameEl.append(MCbutton);
        MCbutton.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
        MCbutton.setAttribute("style", "width: 80%; height: 80px; font-size: 26px; margin: 20px; background-color: var(--red); color: var(--blue); border: 5px solid var(--white); border-radius: 15px; cursor: pointer; font-weight: bold;");
    }
    i++;
};
/*The timer will countdown from 60*/
let secondsLeft = 60;
function countdown(){
    timerEl.style.display ='inline';
    let timerInterval = setInterval(function() {
        if(secondsLeft > 1) {
            timerEl.textContent = (secondsLeft + ' seconds remaining');
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timerEl.textContent = (secondsLeft + ' second remaining');
            secondsLeft--;
        } else {
            timerEl.textContent = ('');
            clearInterval(timerInterval);
            leaderboard();
        }    
    }, 1000);
}
/**/
function leaderboard() {
    timerEl.style.display ='none';
    welcomeEl.style.display ='none';
    gameEl.style.display ='none';
}
/**/
function score(click) {
    k = k + click;
    if (k > myQuestions.length) {
        leaderboard();
    }
} 
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.addEventListener("click", startQuiz);
/**/
leaderBtnEl.addEventListener("click", leaderboard);
/**/
gameEl.addEventListener("click", function(event) {
    let element = event.target
    if (element.matches('button')) {
        nextQuestion();
    }
});
/**/
gameEl.addEventListener("click", function choice(event) {
    let element = event.target
    if (element.matches('button')) {
        userChoice.push(event.target.value);
    }
    score(1);
    if (userChoice[k] === myQuestions[k].correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
}
})