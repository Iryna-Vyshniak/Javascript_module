/**
 libraries:
 1) https://momentjs.com/  - heavy for memory ~ 400kb, but excellent, because has many features
 
 2) https://timezones.js.org/
 
 3) Modern JavaScript date utility library  https://date-fns.org/ !!! - very simple and interesting


 date.toLocaleString() - use for different region, because return different content inside string (for every region - region type date); for ex: 3/16/2023, 2:25:00 PM, or 2023/3/16 ..., or 16/3/2023..., or ... etc
 
 UTC - Greenwich Mean Time
 use for send to backend =>
  date.toUTCString();
  date.toISOString();
 
 Unix-time - 01 January 1970 00:00:00
 */

//TODO -------- examples ------------------------------
const date = new Date(); // Object with methods
console.log(date.getDay()); // 0 - Sunday
console.log(date.getDate()); // 26
console.log(date.getMonth()); // 1 - February
console.log(date.getFullYear()); // 2023
console.log(date.getHours()); // 1 - now 01:32
console.log(date.getMinutes()); // 32 - now 01:32
console.log(date.getSeconds()); // 59
console.log(date.getMilliseconds()); // 289
console.log(date.getUTCDate()); // 25
console.log(date.getUTCDay()); // 6
console.log(date.getUTCMonth()); // 1
console.log(date.getUTCFullYear()); // 2023
console.log(date.getUTCHours()); // 23
console.log(date.getUTCMinutes()); // 36

// const date1 = new Date().getTime(); //  1677368599514
const date1 = Date.now(); // better then use Object - мітка часу, не створює екземпляр, краще для пам'яті
console.log('date1', date1); // 1677368599514

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1); // 1677368599514
  console.log('date2', date2); // 1677368624481 after 3 seconds

  console.log(date2 - date1); // 3006
}, 3000);

//TODO --- SIMPLE TIMER --------------------------------
//  how many times (delay) leave for current Date; delay -> current Date
const millisecondsInSec = 1000;
const secondsInMin = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const timerStopwatch = targetDate => {
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
timerStopwatch(new Date('2023/04/30')); // mseconds from 01/01/1970 to 2023/02/25 => for ex: 23345678

//TODO --- STOPWATCH --------------------------------
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

//TODO -------- TIMER --------------------------------------
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

//  клас не повинен нічого знати про інтерфейс
class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  /*
   * - Takes time in milliseconds
   * - Calculates how many hours/minutes/seconds fit into them
   * - Returns an object with the properties hours, mins, secs
   * - Hellish copy paste sauce stack
   * – час у мілісекундах
   * - Обчислює, скільки годин/хвилин/секунд вміщується в них
   * - Повертає об'єкт із властивостями години, хвилини, секунди
   * - пекельний соус із копі-пасти
   */
  getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Accepts a number, leads to a string and adds 0 to the beginning if the number is less than 2 digits

   * Приймає число, веде до рядка та додає 0 до початку, якщо число менше 2 цифр
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Takes time in milliseconds
 * - Calculates how many hours/minutes/seconds fit into them
 * - Drawing interface
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
