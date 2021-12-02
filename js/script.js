/*My array of questions, to be used in the quiz. Each object contains a question element,
an array of possible answers, and the correct answer element*/
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
/*Creating variables tied to the html sections*/
const welcomeEl = document.querySelector('#welcome');
const startBtnEl = document.querySelector('#startButton');
const leaderBtnEl = document.querySelector('#leaderboardButton');
let timerEl = document.querySelector("#timer");
let gameEl = document.querySelector('#game');
let leaderboardEl = document.querySelector('#leaderboard');
let endEl = document.querySelector('#end');

/*Dynamically create an h2 element and name it questionEl*/
let questionEl = document.createElement('h2');

/*Give questionEl an id of questionEl*/
questionEl.setAttribute('id', 'questionEl');

/*set the variables to be used later*/
let i;
let currentQuestion = myQuestions[i];

/*create an array to hold the user selected answers*/
let userChoice = [];

/*Start the countdown, hide the welcome screen, and display the first question and possible answers.*/
function startQuiz() {
    i = 0;
    countdown();
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
        return;
    }
    questionEl.textContent = (currentQuestion.question);
    gameEl.append(questionEl);
    /*Dynamically create buttons for each of the possible answers in the myQuestions array
    set values and style the buttons dynamically*/
    for (let j=0; j<currentQuestion.answers.length; j++) {
        let mcButton = document.createElement('button');
        mcButton.setAttribute('value', currentQuestion.answers[j]);
        mcButton.textContent = (currentQuestion.answers[j]);
        gameEl.append(mcButton);
        mcButton.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
        mcButton.setAttribute("style", "width: 80%; height: 80px; font-size: 26px; margin: 20px; background-color: var(--red); color: var(--blue); border: 5px solid var(--white); border-radius: 15px; cursor: pointer; font-weight: bold;");
    }
    i++;
};

/*The timer is hidden and the game screen is hidden,
the users score is displayed*/
function endGame(timeLeft) {  
    /*Create an array to hold the highscores, which will be saved to local storage*/
    timerEl.style.display ='none';
    gameEl.style.display ='none';
    endEl.style.display = 'flex';
    let gameOver = document.createElement('h1');
    gameOver.textContent = "Game Over"
   
    /**/
    let userScore = timeLeft;  
    
    if (localStorage.getItem("highscores") === null) {
        highScores = [];
    } else {
        highScores = JSON.parse(localStorage.getItem(highScores));
    }

    highScores.push(userScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    /**/
    let displayScore = document.createElement('h2');
    displayScore.textContent = " Your score is " + userScore;
    gameOver.append(displayScore);
    endEl.append(gameOver);

    /*Dynamically create and style a reset button, to reset the quiz to the welcome screen*/
    let resetButton = document.createElement('button');
    resetButton.setAttribute('value', 'reset');
    resetButton.textContent = "Reset";
    endEl.append(resetButton);
    resetButton.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
    resetButton.setAttribute("style", "width: 80%; height: 80px; font-size: 26px; margin: 20px; background-color: var(--red); color: var(--blue); border: 5px solid var(--white); border-radius: 15px; cursor: pointer; font-weight: bold;");
}

/*The game resets back to the welcome screen*/
function reset() {
    document.location.reload();
}

/*Start the countdown from 45 seconds, display the countdown timer on the screen,
when the timer hits 0 seconds run the endGame function*/
function countdown() {
    let k = -1;
    let secondsLeft = 45;
    timerEl.style.display ='flex';
    console.log("countdown");
    let timerInterval = setInterval( function() {
    if(secondsLeft > 1) {
        timerEl.textContent = (secondsLeft + ' seconds remaining');
        secondsLeft--;
    } else if (secondsLeft === 1) {
        timerEl.textContent = (secondsLeft + ' second remaining');
        secondsLeft--;
    } else if (secondsLeft === 0) {
        clearInterval(timerInterval)
        k = -1;
        endGame(secondsLeft);
    } 
    }, 1000);    
    
    /*every time the user clicks on an answer, the nextQuestion function is ran
    and the users selected answers are added to the user choice array*/
    gameEl.addEventListener("click", function choice(event) {
        let element = event.target
        if (element.matches('button')) {
            nextQuestion();
            userChoice.push(event.target.value);
        }

        /*When there are no more questions to the quiz, stop the timer and run the endgame function*/
        function userScore(click) {
            k = k + click;
        }
        userScore(1);
        if (userChoice[k] === myQuestions[k].correctAnswer) {
           
        } else {
            secondsLeft = secondsLeft - 10;
        }
        if (k > myQuestions.length - 2) {
            clearInterval(timerInterval);
            endGame(secondsLeft);
        } 
    });
};

/*Run the startQuiz function when the user clicks on the startButton*/
startBtnEl.addEventListener("click", startQuiz);

/*Run the reset function when the reset button is clicked*/
endEl.addEventListener("click", function(event) {
    let element = event.target
    if (element.matches('button')) {
       reset();
    }
})
/*Run the leaderboard function when the leaderboard button is clicked*/
leaderBtnEl.addEventListener("click", function leaderboard() {
    /*Show the leaderboard, creating an h1 and ol dynamically*/
    welcomeEl.style.display = "none";
    let scoresEl = document.createElement('h1');
    scoresEl.textContent = "High Scores";
    let scoreboard = document.createElement('ol');  
    let userScore = JSON.parse(localStorage.getItem('highScores'));

    let scores = document.createElement('li')
    scores.textContent = userScore;
    scoreboard.appendChild(scores);    
    scoresEl.appendChild(scoreboard);
    leaderboardEl.append(scoresEl);

    /*Dynamically create a main menu button that will reset the quiz back to the main menu*/
    let mainMenuButton = document.createElement('button');
    mainMenuButton.setAttribute('value', 'mainMenu');
    mainMenuButton.textContent = "Main Menu";
    leaderboardEl.append(mainMenuButton);
    mainMenuButton.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
    mainMenuButton.setAttribute("style", "width: 80%; height: 80px; font-size: 26px; margin: 20px; background-color: var(--red); color: var(--blue); border: 5px solid var(--white); border-radius: 15px; cursor: pointer; font-weight: bold;");

    /*Add event listener to the mainMenuButton*/
    mainMenuButton.addEventListener('click', function() {
       document.location.reload();
    });
});