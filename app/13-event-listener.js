'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 * Basics of events. Create and delete listeners. Event object
 * Подія - це реакція браузера на дію користувача. Дію генерить браузер.
 * Publisher subscriber - издатель-подписчик. Издатель - браузер. Подписчик - пользователь.
 * - Creation and deletion of listeners
 
 * - Naming callback for listeners
     - handle*: handleSubjectEvent =>  handleBtnClick, handleTargetBtnClick
     - *Handler: subjectEventHandler => btnClickHandler, targetBtnClickHandler (обработчик клика на целевую кнопку)
     - on*: onSubjectEvent => onBtnClick, onTargetBtnClick (при клике)
 
 * - Reference identity of callback
 * - Event object
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener-btn');
const removeListenerBtn = document.querySelector('.js-remove-listener-btn');

// при клике на одну кнопку вешаем слушатель событий на другую кнопку
// используем ссылочную идентичность колбеков, чтобы слушатели событий работали в паре
// targetBtn - this is a subscriber, it subscribes to the click event
// это подписчик, он подписывается на событие клик
addListenerBtn.addEventListener('click', event => {
  console.log('add event listener to target btn');
  // вешаем слушатель событий на целевую кнопку
  targetBtn.addEventListener(
    //   клик по целевой кнопке
    'click',
    // event => {
    //   console.log('click on target btn'); // => doesn`t work in pairs, because function - object and has same link
    // }
    OnTargetBtnClick
  );
});

removeListenerBtn.addEventListener('click', event => {
  console.log('remove listener from target btn');
  targetBtn.removeEventListener(
    'click',
    // event => {
    //   console.log('click on target btn');
    // } // => doesn`t work in pairs, because function - object and has same link
    OnTargetBtnClick
  );
});

// () => {} анонимная ф-ция, по ссылке не равны;
// function OnTargetBtnClick() => this function has same link and callback, ссылочная идентичность колбеков
// колбек сохраняем во внешней независимой ф-ции, если хотим отписаться, когда отписываться не надо  - анонимная ф-ция
// при подписке и отписке одинаковые данные - как подписывались, так и отписываемся
//targetBtn.addEventListener('click', OnTargetBtnClick);
//targetBtn.removeEventListener('click', OnTargetBtnClick);

function OnTargetBtnClick(event) {
  console.log('click on target btn');
}

//--------------------------------------------------------------------------------
