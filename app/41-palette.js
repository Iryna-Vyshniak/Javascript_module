/**
 * 1. Написать функцию createPalette(n), которая создает
 * n кнопок внутри контейнера div.color-palette. У каждой кнопки
 * должен быть атрибут data-color такой же как цвет её фона.
 * Цвет каждой кнопки составляется динамически, вызовом функции getRangomColor.
 *
 * 2. При клике на элемент палитры, в поле p.output должно отображаться
 * hex значение цвета элемента. Цвет текста должен быть такой же как выбранный.
 */
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output > span');

createPalettes(200);

colorPalette.addEventListener('click', onPaletteClick);

function onPaletteClick(e) {
  //   console.log(e.target);
  //   console.log(e.target.dataset);
  output.textContent = e.target.dataset.color;
  document.body.style.backgroundColor = e.target.dataset.color;
  output.style.color = e.target.dataset.color;
}

function createPalettes(amountCards) {
  const cards = [];
  //   console.log('cards:', cards);
  for (let i = 0; i < amountCards; i += 1) {
    const color = getRandomHexColor();
    const card = `<button class="item" type="button" data-color="${color}" style="background-color: ${color};"></button>`;
    cards.push(card);
  }
  colorPalette.insertAdjacentHTML('beforeend', cards.join(''));
}

// function createPalette(numberOfItems) {
//   const items = [];
//   for (let i = 0; i < numberOfItems; i += 1) {
//     const color = getRandomHexColor();
//     const item = document.createElement('button');
//     item.classList.add('item');
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
