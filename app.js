const coldOrHot = document.querySelector('.correct-number span');
const score = document.querySelector('.score span');
const highScore = document.querySelector('.highscore span');
const checkBtn = document.querySelector('.btn-gues button');
const resetBtn = document.querySelector('.top-side button');
const showResult = document.querySelector('.result span');
const textarea = document.querySelector('.guessing textarea');
const body = document.querySelector('body');

let randomNumber = Math.ceil(Math.random() * 20);
let startScore = 20;
let lastHighScore = 20;
score.innerHTML = `💯 Score : ${startScore}`;
highScore.innerHTML = `😎 Hightscore : ${lastHighScore}`;
checkBtn.addEventListener('click', () => {
  if (textarea.value == randomNumber && textarea.value !== '') {
    showResult.innerHTML = randomNumber;
    coldOrHot.innerHTML = "🎉  It's correct ! ";
    body.style.backgroundColor = '#4f772d';
    highScore.innerHTML = `😎 Hightscore : ${startScore}`;
  } else if (textarea.value > 20) {
    alert('Between 1 and 20 !');
  } else if (textarea.value == '') {
    alert('Enter a Number !');
  } else if (textarea.value >= randomNumber) {
    startScore = startScore - 1;
    score.innerHTML = `💯 Score : ${startScore}`;
    coldOrHot.innerHTML = `🤢 Too hight`;
    coldOrHot.style.backgroundColor = '#d904293d';
    coldOrHot.style.padding = '20px';
    coldOrHot.style.borderRadius = '5px';
    console.log('high');
    if (startScore == 0) {
      alert('Are you kidding me ?');
      location.reload();
    }
  } else if (textarea.value <= randomNumber) {
    startScore = startScore - 1;
    score.innerHTML = `💯 Score : ${startScore}`;
    coldOrHot.innerHTML = `🤢 Too low`;
    coldOrHot.style.backgroundColor = '#a2d2ff3d';
    coldOrHot.style.padding = '20px';
    coldOrHot.style.borderRadius = '5px';
    console.log('low');
    if (startScore == 0) {
      alert('Are you kidding me ?');
      location.reload();
    }
  }
  if (startScore > highScore.innerHTML) {
    highScore.innerHTML = `😎 Hightscore : ${startScore}`;
  }
});

resetBtn.addEventListener('click', () => {
  startScore = 20;
  score.innerHTML = `💯 Score : ${startScore}`;
  body.style.backgroundColor = '#201f20';
  showResult.innerHTML = '?';
  randomNumber = Math.ceil(Math.random() * 20);
  textarea.value = '';
});
console.log = function () {};
