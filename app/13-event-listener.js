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

// ----------------------------------------------------------------
//---------- INPUT-------------------------------------------------

/*
 * Pattern «Object links» --> refs{...}, elements {...}, ...
 
 * Events
 * - focus & blur
 * - input & change, input --> only text, change --> checkbox and radio
 * - checkboxes & value checked --> value -- on, cheked -- true --> if checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChangeEventChange); // --> CHANGE DON`T USE ON INPUT, ONLY CHECKBOX & TYPE BUTTON
refs.input.addEventListener('input', onInputChangeEventInput);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

// потеря фокуса
function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

// получить значение события -- получаем при потере фокуса --> использовать только на чекбоксах и radio button -- DON`T ON INPUT
function onInputChangeEventChange(event) {
  console.log(event); // Event {isTrusted: true, type: 'change', target: input.js-input, currentTarget: input.js-input, eventPhase: 2, …}
  console.log(event.currentTarget.value); // Helen --> получаем при потере фокуса
}

function onInputChangeEventInput(event) {
  // выведет в консоль каждую введенное значение в input
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log('hello world');
  //refs.input.value = 'License changed';
  console.log(event.currentTarget); // <input type="checkbox" class="js-license">
  console.log(event.currentTarget.value); // on
  console.log(event.currentTarget.checked); // true if checked
  console.log(refs.btn.disabled); // true
  // кнопка выключена, когда checkbox НЕ выбран
  refs.btn.disabled = !event.currentTarget.checked;
}

// --------------------------------------------------------------------------------
//----------  KEYPRESS, KEYDOWN, KEYUP --------------------------------------------
/*
Type Events: keypress, keydown, keyup
- keydown, keyup - реагируют на события всех клавиш, тоесть и на служебные Escape, Alt, Enter
- keypress - реагируют на события тех клавиш, которые генерят какой-то символ
- Restrictions keypress
- KeyboardEvent.key
- KeyboardEvent.code
 */

const refs2 = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs2.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  console.log(event);
  console.log('event.key: ', event.key); // g / п-- буква, которую набираем на каком-либо языке
  console.log('event.code: ', event.code); // KeyG --> физическая кнопка

  refs2.output.textContent += event.key; // на єкране именно символ клавиши k/л ...
}

function onClearOutput() {
  refs2.output.textContent = '';
}

//----------------------------------------------------------------
//----------  MOUSE EVENTS -----------------------------------------------------------
/*
Mouse Events
- mouseenter & mouseleave => hover
- mouseover & mouseout
- mousemove (chatty event - болтливое событие)
- Mouse position: https://nerdparadise.com/programming/javascriptmouseposition
- task - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter); // hover
boxRef.addEventListener('mouseout', onMouseLeave); // hover
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}

// --------------------------------------------------------------------------------
// ----------  MODAL -----------------------------------------------------------
/*
 1. open and close on click btn
 2. close on click backdrop: onBackDropClick
 3. close on click ESC: onEscapeKeypress

Все що вкладене - найближче до очей по осі z

   BUBLING  backdrop ------------------------------------------ => event.currentTarget ЛОВИМО ТУТ
                      modal --------------------- /modal
                          CLICK p -------- /p  <--> найближче до очей => event.target

 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs3 = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs3.openModalBtn.addEventListener('click', onOpenModal);
refs3.closeModalBtn.addEventListener('click', onCloseModal);
refs3.backdrop.addEventListener('click', onBackdropClick); // => refs3.backdrop event.currentTarget

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    // сheck click on backdrop or not on backdrop
    console.log('Click on Backdrop!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

// --------------------------------------------------------------------------------
//----------  Anonymous -----------------------------------------------------------
//script that, when typing text in the input input#name-input (input event), substitutes its current value in span#name-output
const refs4 = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs4.nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
  refs4.nameOutput.textContent = event.currentTarget.value;
}

// --------------------------------------------------------------------------------
//----------  check validation-input -----------------------------------------------------------
// script that, when input loses focus (blur event), checks its content for the correct number of input characters.
const validationInput = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]');
console.log(dataLength.dataset.length);
console.log(validationInput);

validationInput.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
  event.preventDefault();
  const inputContentLength = event.currentTarget.value.length;
  const validLength = dataLength.dataset.length;
  console.log(validLength);
  console.log(inputContentLength);

  if (Number(inputContentLength) === Number(validLength)) {
    validationInput.classList.add('valid');
    console.log(validationInput);
    validationInput.classList.remove('invalid');
  }
  if (Number(inputContentLength) !== Number(validLength) && Number(inputContentLength) !== 0) {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
    console.log(validationInput);
  }
  if (Number(inputContentLength) === 0) {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
    console.log(validationInput);
  }
}

//------------------------------------------------------------------------------------------------
//----------  check validation-input -----------------------------------------------------------
//script that responds to a change in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, dragging the slider will change the size of the text.

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('span#text');
console.log(text.textContent); //Abracadabra!

fontSizeControl.addEventListener('input', onFontSizeControl);

function onFontSizeControl(e) {
  console.log(e.currentTarget.value);
  text.style.fontSize = `${e.currentTarget.value}px`;
}

//------------------------------------------------------------------------------------------------
// ---------- form.login-form --------------------------------------------------------------------
// login form management script
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name} ${value}`);
  });
  e.currentTarget.reset();
}
