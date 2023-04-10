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
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// Play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'It\'s a tie! Play again.';
  } if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer wins! Paper beats rock.';
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Player wins! Rock beats scissors.';
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Player wins! Paper beats rock.';
  } if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'It\'s a tie! Play again.';
  } if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Computer wins! Scissors beats paper.';
  } if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer wins! Rock beats scissors.';
  } if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'Player wins! Scissors beats paper.';
  } if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'It\'s a tie! Play again.';
  }
}

// Play a 5 round game

// Declare winner
