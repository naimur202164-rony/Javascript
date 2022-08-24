'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 'j';

// console.log(document.querySelector('.guess').value=12);
// console.log(document.querySelector('.guess').value=12);

const secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }else if(guess==secretNumber){

  }
});
