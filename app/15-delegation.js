/*
 * паттерн делегирования событий -> когда есть однотипная коллекция элементов, хотим обработать какое-то одно событие для всех элементов одинаково, чтобы всем не вешать слушателя addEventListener
 * - общий слушатель
 * - фильтр цели клика
 * - nodeName - свойство, которое показывает строку названия, куда кликаем -> BUTTON, DIV
 */

/*
const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event) {
    // console.log(event.target); // в parent container получили ссылку на тот элемент, куда кликнули - on button, имено на какую кнопку кликнули: на 1, 2 или 5

    // console.log(event.target.textContent); // Кнопка 5
    // но если кликаем по div получаем список всеех кнопок вместе  Кнопка 1
    // Button 2
    // Button 3
    // Button 4
    // Button 5

    // фильтр цели клика
    // console.log(event.target.nodeName);
    // если хотим, чтобы сработало только на кнопку - pattern hard close ->если что-то не соответствует условию - уходим
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(event.target.nodeName);
}
*/

const container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(event) {
  console.log(event.target.textContent);
  if (event.target.nodeName !== 'BUTTON') {
    console.log(event.target.nodeName);
    return;
  }
  console.log(event.target.nodeName);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6; // у нас есть 5 кнопок, поэтому пишем начало с 6

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick(e) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = `Button ${labelCounter}`;

  container.appendChild(btn);
  labelCounter += 1;
}
