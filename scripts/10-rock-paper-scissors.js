// using default operator 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


// get the par elem and put it inside the JS 
updateScoreElememt();

function playGame(playermove) {
// computer move
const computerMove = pickComputerMove();
let result = ''; 

// comparing result 
if (playermove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose!';
  } else if (computerMove === 'paper') {
    result = 'You win!';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }    
  
} else if(playermove === 'paper') {
  if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'rock') {
    result = 'You win!';
  } else if (computerMove === 'scissors') {
    result = 'You lose!';
  }
  
} else if(playermove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose!';
  } else if (computerMove === 'scissors') {
    result = 'You win!';
  } 
}

// updating score 
if (result === 'You win!') {
  score.wins += 1;
} else if (result === 'You lose!') {
  score.losses += 1;
} else if (result === 'Tie.' ) {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElememt();

// get result 
document.querySelector('.js-result')
  .innerHTML = result;

// get moves 
document.querySelector('.js-moves')
  .innerHTML = `You
  <img class="move-icon" src="/Rock Paper Scissors_files/${playermove}-emoji.png">
  <img class="move-icon" src="/Rock Paper Scissors_files/${computerMove}-emoji.png"> 
  Computer`
}

function updateScoreElememt() {
// update score in the page 
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// using verb/action om the name of the function
function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = ''; 

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock'; 
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'paper'; 
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'scissors'; 
}

return computerMove;
}