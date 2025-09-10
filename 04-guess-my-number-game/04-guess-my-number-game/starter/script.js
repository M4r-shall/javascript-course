'use strict';

console.log('Game setup ready');

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);

const scoreEl = document.querySelector('.score');
console.log(scoreEl);

const guessE1 = document.querySelector('.guess');
console.log(guessE1);

console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

messageEl.textContent = 'Hello from JavaScript!';
scoreEl.textContent = '15';

console.log('Elements updated!');

const guessInput = document.querySelector('.guess');

console.log('Current guess:',guessInput.value);

guessInput.value = '10';
console.log('guess set to:',guessInput.value);

const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessinput = document.querySelector('.guess');

numberEl.textContent = 15;
highscoreEl.textContent = 100;
guessInput.value = 7;

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput);



// Game State Variables - The Game's Memory

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);


let score = 20;

let highscore = 0;

document.querySelector('.score').textContent = score; document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!'); console.log('Secret:', secretNumber, 'Score:', score, 'Highscore:', highscore);


let playerName = 'Marius';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);



////////////////////////////////////
// Event Listeners - Making Buttons Interactive

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

const guess = Number(document.querySelector('.guess').value);

console.log('Input as string:', document.querySelector('.guess').value);
console.log('Input as number:', Number(document.querySelector('.guess').value));

console.log('String comparison:', '15' === 15);
console.log('Number comparison:', 15 === 15);

////////////////////////////////////
// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

////////////////////////////////////
// Score tracking - reduce score for wrong guesses

if (guess === secretNumber) {

} else if (guess > secretNumber) {
  console.log('Too high!');
  document.querySelector('.message').textContent = '📈 Too high!';
  
  score--;
} else if (guess < secretNumber) {
  console.log('Too low!');
  document.querySelector('.message').textContent = '📉 Too low!';
  score--;
}

document.querySelector('.score').textContent = score;

if (guess === secretNumber) {
  console.log('Correct guess!');
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  document.querySelector('.message').textContent = '🎉 You won!';
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
  document.body.style.backgroundColor = 'green';
}

if (score < 1) {
  document.querySelector('.message').textContent = '💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
  document.body.style.backgroundColor = 'red';
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

console.log('Test: Try to win, try to lose, then restart!');

////////////////////////////////////
// Input validation - check for valid input

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return;
  }

});

////////////////////////////////////
// Final polish - professional finishing touches

if (guess === secretNumber) {
  document.querySelector('.message').textContent = '🎉 Game Over!';
  document.querySelector('.guess').value = '';
}

if (score < 1) {
  document.querySelector('.message').textContent = '💀 Game Over!';
  document.querySelector('.guess').value = '';
}

// ////////////////////////////////////
// // Constants & Selectors

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const bodyEl = document.body;
const messageEla = document.querySelector('.message');
const numberEla = document.querySelector('.number');
const scoreEla = document.querySelector('.score');
const highscoreEla = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// UI Helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

////////////////////////////////////
// Game State & Reset

let secretNuumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let sscore = START_SCORE;
let hiighscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

////////////////////////////////////
// Handlers

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

window.addEventListener('keydown', function (e){
  if (e.key === 'Enter' && !checkBtnEl.disaabled){
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('click', function(){
  guessInputEl.focus();
});
