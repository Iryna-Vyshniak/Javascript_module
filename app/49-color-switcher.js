const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const CHANGE_COLOR_DELAY = 1000;
let intervalId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log('start');
  }, INTERVAL);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onClickStop() {
  if (intervalId) {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.log('stop');
  }
}
