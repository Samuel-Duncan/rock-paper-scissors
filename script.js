/* eslint-disable no-plusplus */

// Get computer choice
function getComputerChoice() {
  const randomChoice = Math.random();
  if (randomChoice < 0.33) {
    return 'rock';
  } if (randomChoice < 0.66) {
    return 'paper';
  }
  return 'scissors';
}

// Get player choice
let choice;

function getPlayerChoice() {
  return choice;
}

// Buttons update choice depending on which one was clicked
const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
  choice = 'rock';
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
  choice = 'paper';
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
  choice = 'scissors';
});

// Keep score
let playerScore = 0;
let computerScore = 0;

// Play a single round
function playRound(
  playerSelection = getPlayerChoice(),
  computerSelection = getComputerChoice(),
) {
  displayChoice();
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return 'Computer wins! Paper covers rock.';
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return 'Player wins! Rock smashes scissors.';
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return 'Player wins! Paper covers rock.';
  } if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return 'Computer wins! Scissors cuts paper.';
  } if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'Computer wins! Rock smashes scissors.';
  } if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return 'Player wins! Scissors cuts paper.';
  } if (playerSelection === computerSelection) {
    return 'It\'s a tie! Go again.';
  }
}

// Display both players choice each round
function displayChoice(
  playerSelection = getPlayerChoice(),
  computerSelection = getComputerChoice(),
) {
  const results = document.getElementById('results');
  results.innerText = `Player choice: ${playerSelection} | Computer choice: ${computerSelection}`;
}

// Display both players score each round
function displayScore() {
  const results = document.getElementById('results');
  results.innerText += `\nPlayer score: ${playerScore} | Computer score: ${computerScore}\n`;
}

// Display winner
function displayWinner(text) {
  const results = document.getElementById('results');
  results.innerText += text;
}
function declareWinner() {
  if (playerScore === 5 && playerScore > computerScore) {
    displayWinner(`Player has won the game ${playerScore} to ${computerScore}.`);
  } else if (computerScore === 5 && computerScore > playerScore) {
    displayWinner(`Computer has won the game ${computerScore} to ${playerScore}.`);
  }
}

// Calls playRound on each button click
const playerChoiceButtons = document.querySelectorAll('#playerChoice');
playerChoiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound();
    displayScore();
    declareWinner();
  });
});
