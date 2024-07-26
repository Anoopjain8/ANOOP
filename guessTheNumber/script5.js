let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#guessField");
const userInput = document.querySelector("#inp");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const LowOrHi = document.querySelector(".loworhi");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess == 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage(`congratulation! You guessed the right number`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Too Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is Too High`);
    } else {
    }
}

function displayMessage(message) {
    LowOrHi.innerHTML = message;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h3 id = "newGame" style = "text-align: center; background-color: #919191; cursor: pointer ">Start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled", "");
        startOver.removeChild(p);
        playGame = true;
    });
}
