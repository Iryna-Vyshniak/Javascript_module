/*
  Сhatty events
  Приемы throttling и debouncing c Lodash

  троттлинг можно представить так: «Привет, похоже ты начал что-то делать, если ты хочешь продолжить, — нет проблем, я пока не буду обращать на это внимание». 
  А debouncing, так: «Похоже ты ещё не закончил, ― продолжай, а я подожду».
 */

/*
 * Mousemove и throttle

Throttling — функция будет выполняться не чаще одного раза в указанный период, даже если она будет вызвана много раз в течение этого периода. Например если повесить throttle на onscroll с временем 100ms, то функция будет выполнятся каждые 100ms пока происходит скролинг.

Прием throttle обеспечивает контроль над количеством раз, которое функция может быть вызвана в течение промежутка времени. То есть позволяет выполнять функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.


example: Infinite scrolling, resize viewport

requestAnimationFrame: a throttle alternative. When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations. Note: no IE9 support.
 */

//  -----------------------------------------------------------------------------------------------------
window.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log('Scroll event handler invocation every 300ms.');
  }, 300)
);

//  -----------------------------------------------------------------------------------------------------
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// вернет другую ф-цию, которая вызывает нашу, но не чаще, чем 1 раз в 250мс
// метод возвращает новую ф-цию, которая под капотом, даже, если ее вызываем, вызывает нашу только 1 раз в 500мс
// const throttledOnMouseMove = _.throttle(onMouseMove, 500);
// window.addEventListener('mousemove', throttledOnMouseMove);

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce,

Debounce — функция будет выполнена только тогда, когда после последней попытки вызова прошло определённое время. Задержка начинает заново отсчитываться с каждой новой попыткой вызова. Например если повесить debounce на onscroll с временем 100ms, то функция выполнится через 100ms после прекращения скрола.


Прием debounce гарантирует, что функция не будет вызвана снова, пока не пройдет определенное количество времени без ее вызова. То есть позволяет выполнить функцию, только если прошло N миллисекунд без ее вызова, группируя множественные вызовы в один.

example: input
практический пример: строка поиска, где часто реализуют автозаполнение для текущего ввода пользователя.

Debouncing функции автозаполнения на одну секунду позволит ограничить запросы, пока пользователь не перестанет печатать.
 */

//  -----------------------------------------------------------------------------------------------------

document.querySelector('input').addEventListener(
  'input',
  _.debounce(() => {
    console.log('Input event handler invocation after 300ms of inactivity past burst.');
  }, 300)
);

// ----------------------------------------------------------------------------------------------------

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
