/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const CHOICES = ['rock', 'paper', 'scissors'];

// Get computer choice
function getComputerChoice() {
  const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return randomChoice;
}

// Get player choice
let playerChoice;

// Declare player choice from button clicks
const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
  playerChoice = CHOICES[0];
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
  playerChoice = CHOICES[1];
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
  playerChoice = CHOICES[2];
});

// Keep Score
let playerScore = 0;
let computerScore = 0;

// Play one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
  }
}

// Call functions on each button click
const choiceButtons = document.querySelectorAll('#playerChoice');
choiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    displayChoice(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
    displayScore();
    declareWinner();
  });
});

// Display both players choice each round
function displayChoice(playerSelection, computerSelection) {
  const results = document.getElementById('results');
  results.innerText = `Player choice: ${playerSelection} | Computer choice: ${computerSelection}`;
}

const results = document.getElementById('results');

// Display both players score each round
function displayScore() {
  results.innerText += `\nPlayer score: ${playerScore} | Computer score: ${computerScore}\n`;
}

// Display winner
const MAX_SCORE = 5;

function displayWinner(text) {
  results.innerText += text;
}

function declareWinner() {
  if (playerScore === MAX_SCORE) {
    displayWinner(`Player has won the game ${playerScore} to ${computerScore}.`);
    setTimeout(() => {
      resetGame();
    }, RESET_TIMER); // Reset after 3 seconds
  } else if (computerScore === MAX_SCORE) {
    displayWinner(`Computer has won the game ${computerScore} to ${playerScore}.`);
    setTimeout(() => {
      resetGame();
    }, RESET_TIMER); // Reset after 3 seconds
  }
}

// Reset Game
const RESET_TIMER = 2500;

function resetGame() {
  results.innerText = '';
  playerScore = 0;
  computerScore = 0;
}
