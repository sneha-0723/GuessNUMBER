'use strict';
let number = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.score').textContent = `7/7`;
let chances = 7;
document.querySelector('.highscore').textContent = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.enter').value);
  if (!guess) {
    document.querySelector('.correct').textContent = 'Number not entered';
  } else if (guess === number) {
    document.querySelector('#text').textContent = guess;
    document.querySelector('.correct').textContent = '🎉Correct!!';
    document.querySelector('.highscore').textContent = `${score}/20`;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('#text').style.width = '30%';
    document.querySelector('#text').style.height = '100px';
    document.querySelector('#text').style.lineHeight = '70px';
  } else if (guess !== number) {
    if (chances > 1) {
      let a = guess > number ? 'Too High📈' : 'Too Low📉';
      document.querySelector('.correct').textContent = a;
      score = score - 1;
      chances = chances - 1;
      document.querySelector('.score').textContent = `${chances}/7`;
    } else {
      document.querySelector('.correct').textContent = 'You lost the game☹';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector('#text').style.width = '30%';
      document.querySelector('#text').style.height = '100px';
      document.querySelector('#text').style.lineHeight = '70px';
      document.querySelector('#text').style.fontSize = '30px';
      document.querySelector('#text').textContent =
        'Correct Number:' + '\n' + number;
    }
  }
  document.querySelector('.last').textContent = guess;
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.correct').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = `7/7`;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('#text').textContent = '?';
  document.querySelector('.enter').value = null;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('#text').style.height = '70px';
  document.querySelector('#text').style.width = '10%';
  document.querySelector('#text').style.lineHeight = '60px';
  document.querySelector('#text').style.fontSize = '30px';
  document.querySelector('.last').textContent = 'None';
  number = Math.trunc(Math.random() * 100) + 1;
  chances = 7;
  score = 20;
});
