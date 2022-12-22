const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const buttons = document.querySelectorAll('.buttons');
let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
  
}));

function computerTurn(){

  const randomNum = Math.floor(Math.random() * 5) + 1;

  switch(randomNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
    case 4:
      computer = "SPOCK";
      break;
    case 5:
      computer = "LIZARD";
      break;
  }

}

function checkWinner(){

  if(player == computer){
    return "DRAW!";
  }else if(computer == "ROCK"){
    return (player == "PAPER" || player == "SPOCK") ? "YOU WIN!" : "YOU LOSE!";
  }else if(computer == "PAPER"){
    return (player == "SCISSORS" || player == "LIZARD") ? "YOU WIN!" : "YOU LOSE!";
  }else if(computer == "SCISSORS"){
    return (player == "ROCK" || player == "SPOCK") ? "YOU WIN!" : "YOU LOSE!";
  }else if(computer == "SPOCK"){
    return (player == "LIZARD" || player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
  }else if(computer == "LIZARD"){
    return (player == "ROCK" || player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
  }

}