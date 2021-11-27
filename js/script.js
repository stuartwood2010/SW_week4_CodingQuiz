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
let endEl = document.querySelector('#end');
let timerEl = document.querySelector("#timer");
let questionEl = document.createElement('h2');
questionEl.setAttribute('id', 'questionEl');
let i = 0;
let k = -1;
let currentQuestion = myQuestions[i];
let userChoice = [];
let highScores = [];
/*Start the countdown, hide the welcome screen, and display the first question and possible answers.*/
function startQuiz() {
    countdown()
    welcomeEl.style.display = 'none';
    endEl.style.display = 'none';
    gameEl.style.display = 'flex';
    nextQuestion();
}
/*Reset the gameEl html to an empty string to hide the recent question and possible answers,
 display the next question and possible answers, continue until all questions have been answered. */
function nextQuestion() {
    gameEl.innerHTML = "";
    let currentQuestion = myQuestions[i];
    if (i > myQuestions.length -1) {
        endGame();
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
/*The timer will countdown from 45*/

let secondsLeft = 45;
timerEl.style.display ='flex';
function countdown() {
    let timerInterval = setInterval(function () {
    if(secondsLeft > 1) {
        timerEl.textContent = (secondsLeft + ' seconds remaining');
        secondsLeft--;
    } else if (secondsLeft === 1) {
        timerEl.textContent = (secondsLeft + ' second remaining');
        secondsLeft--;
    } else if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endGame();
    } 
    }, 1000);
    gameEl.addEventListener("click", function choice(event) {
        let element = event.target
        if (element.matches('button')) {
            nextQuestion();
            userChoice.push(event.target.value);
        }
        function userScore(click) {
            k = k + click;
            if (k > myQuestions.length - 2) {
                clearInterval(timerInterval);
                return;     
            } 
        }
        userScore(1);
        if (userChoice[k] === myQuestions[k].correctAnswer) {
            console.log("Correct");     
        } else {
            console.log("Incorrect");
            secondsLeft = secondsLeft - 10;
        }
        });
}
/*The welcome screen is hidden and the game screen is hidden,
the users score is displayed*/
function endGame() {
    welcomeEl.style.display ='none';
    // timerEl.style.display ='none';
    gameEl.style.display ='none';
    endEl.style.display = 'flex';
    let gameOver = document.createElement('h1');
    gameOver.textContent = "Game Over"
    let userScore = document.createElement('h2');
    userScore.textContent = " Your score is " + secondsLeft;
    gameOver.append(userScore);
    endEl.append(gameOver);
    let resetButton = document.createElement('button');
    resetButton.setAttribute('value', 'reset');
    resetButton.textContent = "Reset";
    endEl.append(resetButton);
    resetButton.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
    resetButton.setAttribute("style", "width: 80%; height: 80px; font-size: 26px; margin: 20px; background-color: var(--red); color: var(--blue); border: 5px solid var(--white); border-radius: 15px; cursor: pointer; font-weight: bold;");
}
/*The game resets back to the welcome screen*/
function reset() {
    let secondsLeft = 45;
    let i = 0;
    let k = -1;
    endEl.style.display = "none";
    gameEl.style.display = "none";
    welcomeEl.style.display = "flex";
}
/*Show the leaderboard, utilizing the local storage*/
function leaderboard() {


}
/*Start the quiz when the user clicks on the startButton*/
startBtnEl.addEventListener("click", startQuiz);
/**/
// leaderBtnEl.addEventListener("click", leaderboard);
/**/

/**/
endEl.addEventListener("click", function(event) {
    let element = event.target
    if (element.matches('button')) {
       reset();
    }
})