/* 
event loop => call stack - Web API - the callback queue - call stack 
цикл подій => кол стек - Веб-інтерфейси API - черга зворотних викликів - кол стек
Method LIFO 
*/

/**  ----- setTimeout -------------------------------------------------------------- **/

/*
 * Method window.setTimeout(callback, delay, arg1, arg2, ...);  => for ex: callback, 2000 - ms, 3000 - args

 Returns the numeric ID of the created timer that is used to delete it.
 
  https://www.jscamp.app/ru/docs/javascript25/

  Web-APICallback - Таймер працює до тих пір, поки другий аргумент, який ми передали йому, не чекає 1000 мс. не відразу додавався в стек викликів, а переходив до чогось, що називається чергою.
 */

// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000;
//     setTimeout(() => console.log(`delay ${delay}`, i), delay)
// }

// for (let i = 1; i <= 3; i++) {
//     const delay = i * 1000;
//     setTimeout(() => console.log(`delay ${delay}`, i), delay)
// }

//TODO ---- next example --------------------------------
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'), 500);
const baz = () => console.log('Third');

bar();
foo();
baz();

//bar setTimeou tCallback setTimeout Web API setTimeout bar

// foo First foo undefined baz callback baz Third baz Callback Second

// ----- next example --------------------------------

// console.log('Before call setTimeout');

// setTimeout(() => {
//   console.log('1 - Inside callback for setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 -  Inside callback for setTimeout');
// }, 1000);

// console.log('After call setTimeout');

//TODO---- next example ------------------------------------------------------
// Will run first
console.log('First log');

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('Second log');
}, 2000);

// Will run second
console.log('Third log');

//TODO --- next example ----------------------------------------------------
const button = document.querySelector('button');

const onClick = () => {
  setTimeout(() => {
    alert('I love async JS!');
  }, 2000);
};

// Two seconds after clicking the button,
// alert specified inside the setTimeout callback will appear.
button.addEventListener('click', onClick);

/*
 * Clear timeout with clearTimeout(timeoutId)
 */

// first example
/* when you want then clear - must find timer id! */

let timerIdFirst = null;

if (timerIdFirst) {
  clearTimeout(timerIdFirst);
}

const onClick2 = () => {
  timerIdFirst = setTimeout(() => {
    alert('I love async JS!');
  }, 2000);
};

const logger = time => {
  console.log(`Log after ${time}ms because timeout was not canceled`);
};
// second example

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId); // for ex: 1

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}

//TODO----------------- next example -----------------------------------------------
const greet = () => {
  console.log('Hello!');
};

const timerId2 = setTimeout(greet, 3000);

clearTimeout(timerId2); // clearTimeout() виповниться раніше, ніж буде викликана функція greet(), таймер з timerId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.

/**  ----- setInterval -------------------------------------------------------------- **/

/*
 * Method setInterval(callback, delay, arg1, arg2, ...) => for ex: callback, 2000 - ms, 3000 - args

the interval does not trigger the execution of the function once, but regularly repeats it after the specified time interval. You can stop execution by calling the clearInterval(id) method.

 інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу. Зупинити виконання можна викликом методу clearInterval(id). 
 */

// const loggerForInterval = time => console.log(`Log every ${time}ms - ${Date.now()}`);

// console.log('Before call setInterval');
// setInterval(loggerForInterval, 2000, 2000);
// console.log('After call setInterval');

/*
 * Clear interval with clearInterval(intervalId)
 */

// const intervalId = setInterval(loggerForInterval, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }

//TODO ----- next example --------------------------------
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId3 = null;

startBtn.addEventListener('click', () => {
  timerId3 = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000); // every 1s console.log => "I love async JS!
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId3);
  console.log(`Interval with id ${timerId3} has stopped!`);
});
//"I love async JS!  0.8559913757438913"
// "I love async JS!  0.8229624185888034"
// "I love async JS!  0.5918739577953411"
// "I love async JS!  0.04339901274345914"
// "I love async JS!  0.9658561255112745"
// "I love async JS!  0.28889223452054"
// "Interval with id 4 has stopped!"

/*У браузерного таймера є мінімально можлива затримка. У сучасних браузерах вона коливається приблизно від 0 до 4 мілісекунд. У старіших браузерах затримка може бути більшою і досягати 15 мілісекунд. За стандартом, мінімальна затримка становить 4 мілісекунди, тому різниці між setTimeout(callback, 1) і setTimeout(callback, 4) немає. */

//TODO ----------------------------------------------------------------
// ?? більш точна затримка - викликати в середині функції рекурсивний setTimeout також
function showMessage(text, message, num) {
  console.log(`${text}, ${message} ${num}`); // 6 times in console 'Hallo, Harry! '
  if (num < 6) {
    setTimeout(showMessage, 500, 'Hallo', 'Harry!', (num += 1));
  }
}

// setTimeout(() => {
//   showMessage;
// }, 500, 'Hallo', 'Harry!', 1);
// or
setTimeout(showMessage, 500, 'Hallo', 'Harry!', 1);

// ----------------------------------------------------------------------
let start = 0;
function showGreeting(text, message, num) {
  start += num;
  console.log(`${text}, ${message} ${num}`);
  if (start === 6) {
    clearInterval(timeId7);
  }
}
let timeId7 = setInterval(showGreeting, 1000, 'Hallo', 'Harry!', 1);

//TODO ----------------------------------------------------------------

function showNumber(num) {
  console.log(num);
  let timerId = setTimeout(showNumber, 1000, (num += 1));
  if (num === 5) {
    clearTimeout(timerId);
  }
}
setTimeout(showNumber, 1000, 1); // 1 2 3 4

//---------------------------------------------------------------------
let result = 0;
function showNum(num) {
  result += num;
  console.log(result);
  if (result === 10) {
    clearInterval(timeId6);
  }
}
let timeId6 = setInterval(showNum, 1000, 1); // 1 2 3 4 5 6 7 8 9 10

//----------------------------------------------------------------
if (2 > 1) {
  function showMessage() {
    console.log('HI');
  }
  showMessage();
}

// TODO ----------------NOTIFICATIONS-------------------------------

/**
 * - Show and hide by adding/removing the is-visible class
 * - We hide after a certain time
 * - Hide when clicked
 * - Do not forget to clean the timer
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Block with Functions
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('close the alert automatically so that it does not hang');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
//TODO---------------------------------------------------------------------------
const testBtn = document.querySelector('.js-test-btn');
const spam = document.querySelector('.js-spam');
const timeAd = document.querySelector('.js-timer-ad');
const timeEnd = 7000;
timeAd.textContent = `ad hide after 7seconds`;
let count = 7;

const intervalId = setInterval(() => {
  count -= 1;
  timeAd.textContent = `ad hide after ${count}seconds`;
}, 1000);

setTimeout(() => {
  spam.textContent = '';
  timeAd.textContent = '';
  clearInterval(intervalId);
}, timeEnd);

testBtn.addEventListener('click', onClickTestBtn);

function onClickTestBtn() {
  console.log('Clicked');
}

//TODO --------------------------------------------------------
const arr = ['😄', '😊', '🤗', '😎', '🥰'];

for (let i = 0; i < arr.length; i += 1) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 5000 * (i + 1));
}
