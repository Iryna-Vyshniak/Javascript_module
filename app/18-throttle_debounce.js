// https://bundlephobia.com/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators

/*
  Сhatty events
  Приемы throttling и debouncing c Lodash

  троттлинг можно представить так: «Привет, похоже ты начал что-то делать, если ты хочешь продолжить, — нет проблем, я пока не буду обращать на это внимание». 
  А debouncing, так: «Похоже ты ещё не закончил, ― продолжай, а я подожду».
 */

/*
 * Mousemove и throttle

Arguments
func (Function): The function to throttle.
[wait=0] (number): The number of milliseconds to throttle invocations to.
[options={}] (Object): The options object.
[options.leading=true] (boolean): Specify invoking on the leading edge of the timeout.
[options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.

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

Arguments
func (Function): The function to debounce.
[wait=0] (number): The number of milliseconds to delay.
[options={}] (Object): The options object.
[options.leading=false] (boolean): Specify invoking on the leading edge of the timeout.
[options.maxWait] (number): The maximum time func is allowed to be delayed before it’s invoked.
[options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.

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

// ----------------------------------------------------------------------------------------------------

const cats = [
  'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
  'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
  'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
  'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
  'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
  'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
  'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
  'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
  'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
  'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_1200x1200.jpeg',
  'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
  'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
];

const list = document.querySelector('.js-list');

const markup = cats.map(
  url => `<div><img src="${url}" loading="lazy" alt="cat" width="300"> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?</p></div>`
);
list.innerHTML = markup.join('');

document.addEventListener(
  'scroll',
  _.throttle(onScroll, 1000, {
    leading: true,
    trailing: true,
  })
);
let counter = 0;

function onScroll(evt) {
  counter += 1;
  console.log(counter);
}
