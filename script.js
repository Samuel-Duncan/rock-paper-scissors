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
function getPlayerChoice() {
  const playerChoice = prompt('Rock, Paper, or Scissors?');
  const formattedChoice = playerChoice.toLowerCase();
  return formattedChoice;
}

// Keep score
let playerScore = 0;
let computerScore = 0;

// Play a single round
function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
  console.log(`Player choice: ${playerSelection}`);
  console.log(`Computer choice: ${computerSelection}`);

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return 'Computer wins! Paper beats rock.';
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return 'Player wins! Rock beats scissors.';
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return 'Player wins! Paper beats rock.';
  } if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return 'Computer wins! Scissors beats paper.';
  } if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'Computer wins! Rock beats scissors.';
  } if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return 'Player wins! Scissors beats paper.';
  } if (playerSelection === computerSelection) {
    return 'It\'s a tie! Play again.';
  }
}

// Play a 5 round game
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();

// Declare winner
function getWinner() {
  if (playerScore > computerScore) {
    console.log(`Player has won the game ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Computer has won the game ${computerScore} to ${playerScore}`);
  } else {
    console.log('The game has ended in a tie. Please play again.');
  }
}

getWinner();
