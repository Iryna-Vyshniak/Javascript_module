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
