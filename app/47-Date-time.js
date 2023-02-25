/**
 * libraries:
 * 1) https://momentjs.com/  - heavy for memory ~ 400kb, but excellent, because has many features
 *
 * 2) https://timezones.js.org/
 *
 * date.toLocaleString() - use for different region, because return different content inside string (for every region - region type date); for ex: 3/16/2023, 2:25:00 PM, or 2023/3/16 ..., or 16/3/2023..., or ... etc
 *
 * use for send to backend =>
 * date.toUTCString();
 * date.toISOString();
 *
 */

// --- SIMPLE TIMER --------------------------------
//  how many times (delay) leave for current Date; delay -> current Date
const millisecondsInSec = 1000;
const secondsInMin = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const timer = targetDate => {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date(); // for ex: 23345678
    const seconds = Math.floor((delta / millisecondsInSec) % secondsInMin);
    const minutes = Math.floor((delta / (millisecondsInSec * secondsInMin)) % minutesInHour);
    const hours = Math.floor(
      (delta / (millisecondsInSec * secondsInMin * minutesInHour)) % hoursInDay
    );
    const days = Math.floor(
      delta / (millisecondsInSec * secondsInMin * minutesInHour * hoursInDay)
    );

    const timerFormat = `${days} days ${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
    // renderTimer(+new Date(targetDate));
    //renderTimer(new Date(targetDate).getTime());
    //renderTimer(delta);
    //renderTimer(seconds);
    renderTimer(timerFormat);
  }, 1000);
};

const renderTimer = str => (document.querySelector('.simple-timer').innerText = str);
timer(new Date('2023/02/26')); // mseconds from 01/01/1970 to 2023/02/25 => for ex: 23345678

// --- STOPWATCH --------------------------------
const stopBtn = document.querySelector('.js-stop');
const startBtn = document.querySelector('.js-start');

let intervalId;

const pause = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

const start = () => {
  const initialDate = new Date();
  intervalId = setInterval(() => {
    const delta = new Date() - initialDate;

    const milliseconds = Math.floor(delta % millisecondsInSec);
    const seconds = Math.floor((delta / millisecondsInSec) % secondsInMin);
    const minutes = Math.floor((delta / (millisecondsInSec * secondsInMin)) % minutesInHour);
    const hours = Math.floor(
      (delta / (millisecondsInSec * secondsInMin * minutesInHour)) % hoursInDay
    );
    const days = Math.floor(
      delta / (millisecondsInSec * secondsInMin * minutesInHour * hoursInDay)
    );

    // const UISeconds = String(seconds).length === 2 ? seconds : `0${seconds}`;
    // const UIMinutes = String(minutes).length === 2 ? minutes : `0${minutes}`;
    // const UIHours = String(hours).length === 2 ? hours : `0${hours}`;

    const UISeconds = String(seconds).padStart(2, '0');
    const UIMinutes = String(minutes).padStart(2, '0');
    const UIHours = String(hours).padStart(2, '0');

    const stopwatcherFormat = `${days} days ${UIHours}:${UIMinutes}:${UISeconds}:${milliseconds}`;

    renderStopWatch(stopwatcherFormat);
  }, 0);
};

const renderStopWatch = str => (document.querySelector('.stopwatch').innerText = str);

stopBtn.addEventListener('click', () => {
  pause();
});

startBtn.addEventListener('click', () => {
  start();
});
