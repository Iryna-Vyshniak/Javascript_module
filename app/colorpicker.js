const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
// 1 - рендерим разметку в html: *создаем ф-цию createColorCardsMarkup(colors); * создаем переменную, куда присваиваем ф-цию; *через insertAdjacentHTML в paletteContainer перед концом 'beforeend' вставляем разметку, которая присвоена переменной через ф-цию
const cardsMarkup = createColorCardsMarkup(colors);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// 2 - при клике на цвет карточки изменять цвет body
paletteContainer.addEventListener('click', onPaletteContainerClick);

// 1
function createColorCardsMarkup(colors) { // (colors) & const colors -> абсолютно 2 разные переменные 
    return colors
        .map(({ hex, rgb }) => {
            return `
    <div class="color-card">
     <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
        })
        .join('');
}

// 2 реализация делегирования
function onPaletteContainerClick(e) {
    // проверяем, куда кликаем, чтобы клик был именно по div с классом 'color-swatch', если такого класса в div нет - уходим
    //  есть ли это элемент color-swatch -> isColorSwatchEl
    const isColorSwatchEl = e.target.classList.contains('color-swatch');

    if (!isColorSwatchEl) {
        return;
    }
    // console.log(e.target);


    const swatchEl = e.target;

    // 3 -> хотим добавить класс 'is-active', в котором прописана перспектива, поэтому находим родительский див на котором висит этот класс
    // const parentColorCard = swatchEl.parentNode; -> но это один уровень вложенности и при изменении разметки все полетит, родитель изменится, поэтому лучше найти предка - ближайшего элемента с таким селектором в этом уровне вложенности; closest - идет вверх по вложености пока не встретит предка с таким селектором. Поиск в глубь querySelector, вверх - closest
    const parentColorCard = swatchEl.closest('.color-card');

    // 3 снимаем и удаляем активный класс
    removeActiveCardClass();
    // 4 добавляем класс 'is-active'
    addActiveCardClass(parentColorCard);
    // 5 на body добавляем hex, который указан при клике на карточку
    setBodyBgColor(swatchEl.dataset.hex);
}

// 5 на body добавляем стиль style.backgroundColor = color;
function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

// 3 снимаем и удаляем активный класс, где указана перспектива, для выбора одного из многих
function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}


// 4 добавляем класс 'is-active', в котором прописана перспектива, находим родительский див на котором висит этот класс
function addActiveCardClass(card) {
    card.classList.add('is-active');
}

