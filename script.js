let playerScore = 0;
let computerScore = 0;
let roundResult = "";

// DOM
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const displayMessage = document.getElementById("display-message");
const displayResult = document.getElementById("display-result");
const buttons = document.getElementById("buttons");
const playerHealth = document.getElementById("player-health");
const computerHealth = document.getElementById("computer-health");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

// Events
rockBtn.addEventListener('click', () => clickButton('rock'));
paperBtn.addEventListener('click', () => clickButton('paper'));
scissorsBtn.addEventListener('click', () => clickButton('scissors'));


function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = "draw";
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        roundResult = "computer";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
     // computerHealth.textContent = computerHealth.slice(0,(computerHealth.length - 1));
        playerScore++;
        roundResult = "player";
    }
    updateRoundMessage(roundResult, playerSelection, computerSelection);
    
}
function clickButton(playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayChoice(playerChoice, computerChoice);
    updateRound();
    console.log(playerScore, computerScore);

}

function updateRound() {
    if (roundResult === 'draw') {
        displayResult.textContent = "It's a draw!";
    } else if (roundResult === 'computer') {
        displayResult.textContent = 'You lost!';
    } else if (roundResult === 'player') {
        displayResult.textContent = 'You won!';
    }
}

function updateRoundMessage(roundResult, playerSelection, computerSelection) {
    if (roundResult ==='draw') {
        displayMessage.textContent = `${playerSelection} draws with ${computerSelection}`;
    } else if (roundResult === 'computer') {
        displayMessage.textContent = `${playerSelection} is beaten by ${computerSelection}`;
    } else if (roundResult === 'player') {
        displayMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    }
}

function displayChoice(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            playerChoice.src = "images/rock.jpg";
            break;
        case "paper":
            playerChoice.src = "images/paper.png";
            break;
        case "scissors":
            playerChoice.src = "images/patrick.png";
            break;
    }

    switch (computerSelection) {
        case "rock":
            computerChoice.src = "images/rock.jpg";
            break;
        case "rock":
            computerChoice.src = "images/paper.png";
            break;
        case "rock":
            computerChoice.src = "images/patrick.png";
            break;
    }
    
}
// displayMessage.textContent = `${playerSelection} beats ${computerSelection}`
// displayMessage.textContent = `${playerSelection} is beaten by ${computerSelection}`
// displayMessage.textContent = `${playerSelection} draws with ${computerSelection}`

