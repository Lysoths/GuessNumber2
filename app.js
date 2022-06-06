const coldOrHot = document.querySelector('.correct-number span');
const score = document.querySelector('.score span');
const highScore = document.querySelector('.highscore span');
const checkBtn = document.querySelector('.btn-gues button');
const resetBtn = document.querySelector('.top-side button');
const showResult = document.querySelector('.result span');
const textarea = document.querySelector('.guessing textarea');
const body = document.querySelector('body');

const randomNumber = Math.ceil(Math.random() * 20);
let startScore = 20;
let lastHighScore = 20;
score.innerHTML = `💯 Score : ${startScore}`;
highScore.innerHTML = `😎 Hightscore : ${lastHighScore}`;
checkBtn.addEventListener('click', () => {
  if (textarea.value == randomNumber && textarea.value !== '') {
    showResult.innerHTML = randomNumber;
    coldOrHot.innerHTML = "🎉  It's correct ! ";
    highScore.innerHTML = `😎 Hightscore : ${startScore}`;
    body.style.backgroundColor = '#4f772d';
  } else if (textarea.value > '20') {
    alert('Between 1 and 20 !');
  } else if (textarea.value == '') {
    alert('Enter a Number !');
  } else if (textarea.value >= randomNumber) {
    startScore = startScore - 1;
    score.innerHTML = `💯 Score : ${startScore}`;
    coldOrHot.innerHTML = `🤢 Too hight`;
    console.log('high');
    if (startScore == 0) {
      alert('Are you kidding me ?');
      location.reload();
    }
  } else if (textarea.value <= randomNumber) {
    startScore = startScore - 1;
    score.innerHTML = `💯 Score : ${startScore}`;
    coldOrHot.innerHTML = `🤢 Too low`;
    console.log('low');
    if (startScore == 0) {
      alert('Are you kidding me ?');
      location.reload();
    }
  }
});

resetBtn.addEventListener('click', () => {
  startScore = 20;
  score.innerHTML = `💯 Score : ${startScore}`;
});
console.log = function () {};
