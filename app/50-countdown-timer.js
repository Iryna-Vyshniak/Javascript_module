//import { Notify } from 'notiflix/build/notiflix-notify-aio';

// If  using a bundler, e.g. webpack, need to import flatpickr.
// import flatpickr from '../node_modules/flatpickr';
// import '../node_modules/flatpickr/dist/flatpickr.min.css';

const startBtn1 = document.querySelector('[data-start1]');
const timer1 = document.querySelector('.timer');
const dataDays1 = document.querySelector('[data-days1]');
const dataHours1 = document.querySelector('[data-hours1]');
const dataMinutes1 = document.querySelector('[data-minutes1]');
const dataSeconds1 = document.querySelector('[data-seconds1]');

const flatpickrInput1 = document.querySelector('#datetime-picker1');
//let currentTime = Date.now(); // 1677453400777
// const currentTime = new Date().getTime();
let setDate1 = null;
let intervalId1 = null;
let currentDate1 = null;

startBtn1.disabled = true;
startBtn1.addEventListener('click', onStartCounter);

const options1 = {
  enableTime: true, // Вмикає засіб вибору часу
  time_24hr: true, // Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати.
  minuteIncrement: 1, // Регулює крок для введення хвилин (включно з прокручуванням)
  onClose(selectedDates) {
    //Функція, якa запускаються щоразу, коли календар закривається
    if (selectedDates[0].getTime() < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      setDate1 = selectedDates[0].getTime();
      startBtn1.disabled = false;
    }
  },
};

const fp1 = flatpickr(flatpickrInput1, options1);

function onStartCounter() {
  counter1.start();
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

const counter1 = {
  start() {
    intervalId1 = setInterval(() => {
      currentDate1 = Date.now();
      const deltaTime = setDate1 - currentDate1;
      //const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimerface(convertMs(deltaTime));
      startBtn1.disabled = true;
      flatpickrInput1.disabled = true;

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
    startBtn1.disabled = true;
    flatpickrInput1.disabled = false;
    clearInterval(intervalId1);
    return;
  },
};

function updateTimerface({ days, hours, minutes, seconds }) {
  dataDays1.textContent = `${days}`;
  dataHours1.textContent = `${hours}`;
  dataMinutes1.textContent = `${minutes}`;
  dataSeconds1.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//TODO: NEXT SIMPLE VARIANT ---------------------------------------------------------------------------
const wrapper = document.querySelector('.timer__items');
const TIMER_DEADLINE = new Date(2023, 11, 31, 59, 59, 59);
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
      this.currentDate = Date.now();
      const delta = this.targetDate - this.currentDate;
      this.convertMs(delta);
      console.log(this.convertMs(delta));
      this.updateClockface(this.convertMs(delta));

      if (delta <= 1000) {
        this.stop();
        return;
      }
    }, 1000);
  }
  stop() {
    this.updateClockface(convertMs(0));
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

//countdownTimer.start();

//TODO ----------------------------------------------------------------

const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
// const timer = document.querySelectorAll('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let selectedDate = null;
let currentDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    onChooseDate(selectedDates[0]);
    console.log(onChooseDate(selectedDates[0]));
  },
};

function onChooseDate(day) {
  selectedDate = day.getTime();
  currentDate = Date.now();
  if (selectedDate < currentDate) {
    //Notiflix.Notify.failure('Qui timide rogat docet negare');
    //Notify.failure('Qui timide rogat docet negare');
    alert('Qui timide rogat docet negare');
  }
  startBtn.disabled = false;
  calendar.disabled = true;
  return selectedDate;
  //Notiflix.Notify.success('Sol lucet omnibus');
  //Notify.success('Sol lucet omnibus');
  // Notiflix.Report.success(
  //   'Notiflix Success',
  //   '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
  //   'Okay'
  // );
}

const fp = flatpickr(calendar, options);

class CountdownTimer {
  intervalId = null;

  constructor(rootSelectorDay, rootSelectorHours, rootSelectorMinutes, rootSelectorSeconds) {
    this.rootSelectorDay = rootSelectorDay;
    this.rootSelectorHours = rootSelectorHours;
    this.rootSelectorMinutes = rootSelectorMinutes;
    this.rootSelectorSeconds = rootSelectorSeconds;
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      // selectedDate = this.targetDate;
      currentDate = Date.now();
      let delta = selectedDate - currentDate;
      //console.log(delta);
      // this.convertMs(delta);
      // console.log(this.convertMs(delta));
      this.updateClockface(this.convertMs(delta));

      if (delta <= 1000) {
        this.stop();
        this.updateClockface(this.convertMs(0));
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    startBtn.disabled = true;
    calendar.disabled = false;
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
    this.rootSelectorDay.textContent = `${days}`;
    this.rootSelectorHours.textContent = `${hours}`;
    this.rootSelectorMinutes.textContent = `${minutes}`;
    this.rootSelectorSeconds.textContent = `${seconds}`;
  }
}

const timerCountdown = new CountdownTimer(dataDays, dataHours, dataMinutes, dataSeconds);
console.log(Date.now());
console.log(selectedDate);

// timerCountdown.start();
startBtn.addEventListener('click', () => {
  timerCountdown.start();
});
