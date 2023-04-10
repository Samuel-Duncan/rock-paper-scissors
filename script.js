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

console.log(getPlayerChoice());
// Play a single round
// Declare winner
// Play a 5 round game
