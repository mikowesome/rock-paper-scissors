/* Create a function called getComputerChoice that will randomly
return either 'Rock', 'Paper', 'Scissors'
*/

function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
    let choice;
    if (x === 0) {
        choice = 'Rock';
    } else if (x === 1) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    return choice.toLowerCase();
}


/*
Write a function that plays a single round of Rock Paper Scissors.
The function should take two parameters - the playerSelection
and computerSelection
and then return a string that declares the winner of the round
like so: "You lose! Paper beats Rock"
*/

function playRound(playerSelection, computerSelection) {
    let x = playerSelection;
    let y = computerSelection;
    let result;
    if (x == 'rock' && y == 'scissors') {
        result = 'You win! Rock beats Scissors.';
    } else if (x == 'rock' && y == 'paper') {
        result = 'You lose! Paper beats Rock.';
    } else if (x == 'rock' && y == 'rock') {
        result = 'Draw. Play again.'
    } else if (x == 'paper' && y =='rock') {
        result = 'You win! Paper beats Rock.'
    } else if (x == 'paper' && y == 'scissors') {
        result = 'You lose! Scissors beats Paper.';
    } else if (x == 'paper' && y == 'paper') {
        result = 'Draw. Play again';
    } else if (x == 'scissors' && y == 'rock') {
        result = 'You lose! Rock beats Scissors.';
    } else if (x == 'scissors' && y == 'paper') {
        result = 'You win! Scissors beats Paper.';
    } else if (x == 'scissors' && y == 'scissors') {
        result = 'Draw. Play again.';
    }

    return result;
}
// let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
// let computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));


/*
Write a NEW function called game().
Call the playRound function inside of this one to play 5 round game
that keeps score and reports a winner and a loser.
*/

function game() {
    for (let i = 0; i < 5; i++) {
        playerScore = 0;
        computerScore = 0;
        playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result.includes('win')) {
            playerScore = +1;
        } else if (result.includes('lose')) {
            computerScore = +1;
        }
        score = `${playerScore}:${computerScore}`;
        console.log(playRound(playerSelection, computerSelection));
        console.log(score);
    }
    if (playerScore > computerScore) {
        message = 'You win!';
    } else if (playerScore < computerScore) {
        message = 'You lose!';
    } else {
        message = "It's a tie.";
    }
    console.log(message);

}
game();