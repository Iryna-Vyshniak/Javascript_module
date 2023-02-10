/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// =============== один из многих  ===================================================

const tagContainer = document.querySelector('.js-tags--first');

console.log(tagContainer);
tagContainer.addEventListener('click', onTagsContainerClick);
// cоздаем переменную выбора тeга
let selectedTag = null;
// по клику добавляется класс и меняется цвет
// убираем клик по div
function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  // фильтруем кнопки -при каждом клике ищем текущий активный, если такой активный есть - снимаем класс, а куда клацнули - добавляем
  const currentActiveBtn = document.querySelector('.tags__btn--active');

  console.log(currentActiveBtn); // null -> its ok

  // если в currentActiveBtn есть класс .tags__btn--active удали его
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');
  }
  // добавь класс .tags__btn--active в целевую кнопку
  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('tags__btn--active');
  // получаем значение через dataset value кнопки, по которой кликнули
  selectedTag = nextActiveBtn.dataset.value; // 'nodejs'

  console.log(selectedTag);
}

// var.2
const tagContainer2 = document.querySelector('.js-tags--second');
let selectedTag2 = null;

tagContainer2.addEventListener('click', onTagContainerClick2);

function onTagContainerClick2(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');
  // вместо if можно использовать новый стек ?., только если нет в currentActiveBtn -> null or undefined
  currentActiveBtn?.classList.remove('tags__btn--active');
  /*
    if (currentActiveBtn){
        currentActiveBtn?.classList.remove('tags__btn--active');
    }
    */

  const nextActiveBtn = e.target;
  e.target.classList.add('tags__btn--active');
  selectedTag2 = nextActiveBtn.dataset.value;

  console.log(selectedTag2);
}

// ================ несколько из многих и Set ========================================

const tagsContainer3 = document.querySelector('.js-tags--third');
const selectedTags3 = [];

tagsContainer3.addEventListener('click', onTagsContainerClick3);

function onTagsContainerClick3(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = e.target;
  const tag = btn.dataset.value;

  btn.classList.toggle('tags__btn--active');

  selectedTags3.push(tag);
  console.log(selectedTags3);
}

// var 2 but steck set don`t delete

const tagsContainer4 = document.querySelector('.js-tags--fourth');
const selectedTags4 = new Set();

tagsContainer4.addEventListener('click', onTagsContainerClick4);

function onTagsContainerClick4(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = e.target;
  btn.classList.toggle('tags__btn--active');

  selectedTags4.add(btn.dataset.value);
  console.log(selectedTags4);

  // Set(1) { 'redux' }
  // Set(2) { 'redux', 'react' }
  // Set(3) { 'redux', 'react', 'webpack' }
  // Set(4) { 'redux', 'react', 'webpack', 'npm' }
  // Set(5) { 'redux', 'react', 'webpack', 'npm', 'javascript' }
}

// var 3
const tagsContainer5 = document.querySelector('.js-tags--fifth');
const selectedTags5 = new Set();

tagsContainer5.addEventListener('click', onTagsContainerClick5);

function onTagsContainerClick5(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  // управление хранения даных

  const btn = e.target;
  // проверяем есть ли такой класс у целевой кнопки
  // console.log(btn.classList.contains('tags__btn--active'));
  // если кнопка активна = класс итеется
  const isActiveBtn = btn.classList.contains('tags__btn--active');

  // если класс есть - удаляем, нет - добавляем
  if (isActiveBtn) {
    selectedTags5.delete(btn.dataset.value);
  } else {
    selectedTags5.add(btn.dataset.value);
  }

  // управление рисованием интерфейса

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags5);
  // Set(1) {'redux'}
  // Set(2) { 'redux', 'react' }
  // Set(3) { 'redux', 'react', 'webpack' }
  // Set(2) { 'redux', 'react' }
  // Set(1) { 'react' }
}
