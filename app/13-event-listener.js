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
// ---------- EVENT -------------------------------------------------------------

targetBtn.addEventListener('click', event => {
  console.log(event);
  console.log('click on target btn');
});

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('add event listener on target btn');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('remove event listener from target btn');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('click on target btn');
}

//--------------------------------------------------------------------------------
// ---------- FORM -------------------------------------------------------------

/*
    - Подія submit
    - Дії браузера за замовчуванням
    - Властивість elements
    - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    formData --> для сбора и отправки данных на сервер: на сервер необходимо отправлять и имя name, и значение value, чтобы сервер знал что ему отправляют и что куда записывать
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log('it`s submit form');
  console.log(event); // SubmitEvent
  console.log(event.currentTarget);
  // <form class="js-register-form" autocomplete="off">...</form> --> current target ссылается на тот элемент, который прослушивает событие. В этом случае --> form.addEventListener; form подписалась на submit, во время submit current target будет ссылка на form
  console.dir(event.currentTarget);
  /*
  object form.js-register-form form.js-register-form
        input
        input
        input
        input
        input
        button
  elements HTMLFormControlsCollection(6)
        input
        input
        input
        input
        input
        button
        email: input
        password: input
        subscription: RadioNodeList(3) [input, input, input, value: '']
  */

  // ---------------------------------------------------------------------
  //----------DETAILED DESCRIPTION formData-------------------------------

  /*
  console.dir(event.currentTarget.elements.subscription.value); //basic

  const formElements = event.currentTarget.elements;
  console.log(formElements);

  const mail = formElements.email;
  console.log(mail); // <input type="email" name="email">

  const password = formElements.password;
  console.log(password); // <input type="password" name="password);

  const mailValue = mail.value;
  console.log(mailValue); // sds@dhdks.com

  const passwordValue = password.value;
  console.log(passwordValue); // sfsfds
  
  const subscriptionValue = formElements.subscription.value;
  console.log(subscriptionValue); // basic

  const formData = {
    mailValue,
    passwordValue,
    subscriptionValue,
  };

  console.log(formData); // {mailValue: 'dsd@dfdf.com', passwordValue: '3243vdf', subscriptionValue: 'free'}
*/

  const formData = new FormData(event.currentTarget); // event.currentTarget --> передаем ссылку на сам DOM element: собирает значение ВСЕХ полей формы

  console.log(formData); // FormData {} --> [[Prototype]]: FormData --> forEach, entries, keys, values...

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> key name: ', name); //  key name:  email
    console.log('onFormSubmit -> value: ', value); // value: sada@sd.com
  });
}
