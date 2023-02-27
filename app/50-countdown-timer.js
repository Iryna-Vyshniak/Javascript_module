// If  using a bundler, e.g. webpack, need to import flatpickr.
// import flatpickr from '../node_modules/flatpickr';
// import '../node_modules/flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const flatpickrInput = document.querySelector('#datetime-picker');
//let currentTime = Date.now(); // 1677453400777
// const currentTime = new Date().getTime();
let setDate = null;
let intervalId = null;
let currentDate = null;

startBtn.disabled = true;
startBtn.addEventListener('click', onStartCounter);

const options = {
  enableTime: true, // Вмикає засіб вибору часу
  time_24hr: true, // Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати.
  minuteIncrement: 1, // Регулює крок для введення хвилин (включно з прокручуванням)
  onClose(selectedDates) {
    //Функція, якa запускаються щоразу, коли календар закривається
    if (selectedDates[0].getTime() < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      setDate = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};

const fp = flatpickr(flatpickrInput, options);

function onStartCounter() {
  counter.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// const startTime = Date.now();
// console.log(startTime);

const counter = {
  start() {
    intervalId = setInterval(() => {
      currentDate = Date.now();
      const deltaTime = setDate - currentDate;
      //const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimerface(convertMs(deltaTime));
      startBtn.disabled = true;
      flatpickrInput.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
      }
      //   dataDays.textContent = `${days}`;
      //   dataHours.textContent = `${hours}`;
      //   dataMinutes.textContent = `${minutes}`;
      //   dataSeconds.textContent = `${seconds}`;
    }, 1000);
  },

  stop() {
    startBtn.disabled = true;
    flatpickrInput.disabled = false;
    clearInterval(intervalId);
    return;
  },
};

function updateTimerface({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//TODO: NEXT SIMPLE VARIANT ---------------------------------------------------------------------------
const wrapper = document.querySelector('.timer__items');
const TIMER_DEADLINE = new Date(2023, 1, 27, 16, 58, 0);
console.log(TIMER_DEADLINE); // Mon Feb 27 2023 23:45:00

class Timer {
  intervalId = null;
  currentDate = null;

  constructor(rootSelector, targetDate) {
    this.rootSelector = rootSelector;
    this.targetDate = targetDate;
  }

  start() {
    this.intervalId = setInterval(() => {
      currentDate = Date.now();
      const delta = this.targetDate - currentDate;
      convertMs(delta);
      console.log(convertMs(delta));
      this.updateClockface(convertMs(delta));

      if (delta <= 1000) {
        this.stop();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    return;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = this.pad(Math.floor(ms / day));
    const hours = this.pad(Math.floor((ms % day) / hour));
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

  updateClockface({ days, hours, minutes, seconds }) {
    this.rootSelector.querySelector('.js-timer__days').textContent = `${days}`;
    this.rootSelector.querySelector('.js-timer__hours').textContent = `${hours}`;
    this.rootSelector.querySelector('.js-timer__minutes').textContent = `${minutes}`;
    this.rootSelector.querySelector('.js-timer__seconds').textContent = `${seconds}`;
  }
}

const countdownTimer = new Timer(wrapper, TIMER_DEADLINE);

countdownTimer.start();
