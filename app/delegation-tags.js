/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */


// =============== один из многих  ===================================================
/*
const tagContainer = document.querySelector('.js-tags');

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
    // фильтруем кнопки -при каждом клике ищем текущий активный, если такой активный есть - снимаем класс, а куда клацнули добавляем
    const currentActiveBtn = document.querySelector('.tags__btn--active');

    console.log(currentActiveBtn);  // null -> its ok

    // если в currentActiveBtn есть класс .tags__btn--active удали его
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active');
    }
    // добавь класс .tags__btn--active в целевую кнопку
    const nextActiveBtn = e.target;
    nextActiveBtn.classList.add('tags__btn--active');
    // получаем значение через dataset value кнопки, по которой кликнули
    selectedTag = nextActiveBtn.dataset.value;  // 'nodejs'

    console.log(selectedTag);
};

*/

// var.1
// const tagContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagContainer.addEventListener('click', onTagContainerClick);

// function onTagContainerClick(e) {
//     if (e.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');
//     // вместо if можно использовать новый стек ?, только если нет в currentActiveBtn -> null or undefined
//     currentActiveBtn?.classList.remove('tags__btn--active');
//     /*
//     if (currentActiveBtn){
//         currentActiveBtn?.classList.remove('tags__btn--active');
//     }
//     */

//     const nextActiveBtn = e.target;
//     e.target.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.log(selectedTag);
// };

// ================ несколько из многих и Set ====================================================

// var.1
/*
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = [];

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const btn = e.target;
    const tag = btn.dataset.value;

    btn.classList.toggle('tags__btn--active');

    selectedTags.push(btn.dataset.value);
    console.log(selectedTags);
}

*/

// var 2 but steck set don`t delete
/*
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const btn = e.target;
    btn.classList.toggle('tags__btn--active');

    selectedTags.add(btn.dataset.value);
    console.log(selectedTags);

// Set(1) { 'redux' }
// Set(2) { 'redux', 'react' }
// Set(3) { 'redux', 'react', 'webpack' }
// Set(4) { 'redux', 'react', 'webpack', 'npm' }
// Set(5) { 'redux', 'react', 'webpack', 'npm', 'javascript' }
}
*/


// var 3
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
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
        selectedTags.delete(btn.dataset.value);
    } else {
        selectedTags.add(btn.dataset.value);
    }

    // управление рисованием интерфейса

    btn.classList.toggle('tags__btn--active');
    console.log(selectedTags);
    // Set(1) {'redux'}
    // Set(2) { 'redux', 'react' }
    // Set(3) { 'redux', 'react', 'webpack' }
    // Set(2) { 'redux', 'react' }
    // Set(1) { 'react' }
}

