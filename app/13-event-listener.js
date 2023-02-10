// 'use strict';
// /*
//  * Основи подій. Створення та видалення слухачів. Об'єкт події
//  * Basics of events. Create and delete listeners. Event object
//  * Подія - це реакція браузера на дію користувача. Дію генерить браузер.
//  * Publisher subscriber - издатель-подписчик. Издатель - браузер. Подписчик - пользователь.
//  * - Creation and deletion of listeners

//  * - Naming callback for listeners
//      - handle*: handleSubjectEvent =>  handleBtnClick, handleTargetBtnClick
//      - *Handler: subjectEventHandler => btnClickHandler, targetBtnClickHandler (обработчик клика на целевую кнопку)
//      - on*: onSubjectEvent => onBtnClick, onTargetBtnClick (при клике)

//  * - Reference identity of callback
//  * - Event object
//  */
// //  НА СТОРІНЦІ ДВІЧІ ОДНОЧАСНО 2 РІЗНИХ ІВЕНТИ НЕ  ВІДПРАЦЬОВУЮТЬ ЗА РАХУНОК ТОГО, ЩО JS АСИНХРОННИЙ, АЛЕ ОДНОПОТОЧНИЙ

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener-btn');
// const removeListenerBtn = document.querySelector('.js-remove-listener-btn');

// // при клике на одну кнопку вешаем слушатель событий на другую кнопку
// // используем ссылочную идентичность колбеков, чтобы слушатели событий работали в паре
// // targetBtn - this is a subscriber, it subscribes to the click event
// // это подписчик, он подписывается на событие клик
// addListenerBtn.addEventListener('click', event => {
//   console.log('add event listener to target btn');
//   // вешаем слушатель событий на целевую кнопку
//   targetBtn.addEventListener(
//     //   клик по целевой кнопке
//     'click',
//     // event => {
//     //   console.log('click on target btn'); // => doesn`t work in pairs, because function - object and has same link
//     // }
//     OnTargetBtnClick
//   );
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log('remove listener from target btn');
//   targetBtn.removeEventListener(
//     'click',
//     // event => {
//     //   console.log('click on target btn');
//     // } // => doesn`t work in pairs, because function - object and has same link
//     OnTargetBtnClick
//   );
// });

// // () => {} анонимная ф-ция, по ссылке не равны;
// // function OnTargetBtnClick() => this function has same link and callback, ссылочная идентичность колбеков
// // колбек сохраняем во внешней независимой ф-ции, если хотим отписаться, когда отписываться не надо  - анонимная ф-ция
// // при подписке и отписке одинаковые данные - как подписывались, так и отписываемся
// //targetBtn.addEventListener('click', OnTargetBtnClick);
// //targetBtn.removeEventListener('click', OnTargetBtnClick);

// function OnTargetBtnClick(event) {
//   console.log('click on target btn');
// }

// //--------------------------------------------------------------------------------
// // ---------- EVENT -------------------------------------------------------------

// targetBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('click on target btn');
// });

// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('add event listener on target btn');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('remove event listener from target btn');
//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('click on target btn');
// }

// //--------------------------------------------------------------------------------
// // ---------- FORM -------------------------------------------------------------

// /*
//     - Подія submit
//     - Дії браузера за замовчуванням
//     - Властивість elements
//     - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
//     formData --> для сбора и отправки данных на сервер: на сервер необходимо отправлять и имя name, и значение value, чтобы сервер знал что ему отправляют и что куда записывать
//  */

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('it`s submit form');
//   console.log(event); // SubmitEvent
//   console.log(event.currentTarget);
//   // <form class="js-register-form" autocomplete="off">...</form> --> current target ссылается на тот элемент, который прослушивает событие. В этом случае --> form.addEventListener; form подписалась на submit, во время submit current target будет ссылка на form
//   console.dir(event.currentTarget);
//   /*
//   object form.js-register-form form.js-register-form
//         input
//         input
//         input
//         input
//         input
//         button
//   elements HTMLFormControlsCollection(6)
//         input
//         input
//         input
//         input
//         input
//         button
//         email: input
//         password: input
//         subscription: RadioNodeList(3) [input, input, input, value: '']
//   */

//   // ---------------------------------------------------------------------
//   //----------DETAILED DESCRIPTION formData-------------------------------

//   /*
//   console.dir(event.currentTarget.elements.subscription.value); //basic

//   const formElements = event.currentTarget.elements;
//   console.log(formElements);

//   const mail = formElements.email;
//   console.log(mail); // <input type="email" name="email">

//   const password = formElements.password;
//   console.log(password); // <input type="password" name="password);

//   const mailValue = mail.value;
//   console.log(mailValue); // sds@dhdks.com

//   const passwordValue = password.value;
//   console.log(passwordValue); // sfsfds

//   const subscriptionValue = formElements.subscription.value;
//   console.log(subscriptionValue); // basic

//   const formData = {
//     mailValue,
//     passwordValue,
//     subscriptionValue,
//   };

//   console.log(formData); // {mailValue: 'dsd@dfdf.com', passwordValue: '3243vdf', subscriptionValue: 'free'}
// */

//   const formData = new FormData(event.currentTarget); // event.currentTarget --> передаем ссылку на сам DOM element: собирает значение ВСЕХ полей формы

//   console.log(formData); // FormData {} --> [[Prototype]]: FormData --> forEach, entries, keys, values...

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> key name: ', name); //  key name:  email
//     console.log('onFormSubmit -> value: ', value); // value: sada@sd.com
//   });
// }

// // ----------------------------------------------------------------
// //---------- INPUT-------------------------------------------------

// /*
//  * Pattern «Object links» --> refs{...}, elements {...}, ...

//  * Events
//  * - focus & blur
//  * - input & change, input --> only text, change --> checkbox and radio
//  * - checkboxes & value checked --> value -- on, checked -- true --> if checked
//  */

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChangeEventChange); // --> CHANGE DON`T USE ON INPUT, ONLY CHECKBOX & TYPE BUTTON
// refs.input.addEventListener('input', onInputChangeEventInput);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// // потеря фокуса
// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// // получить значение события -- получаем при потере фокуса --> использовать только на чекбоксах и radio button -- DON`T ON INPUT
// function onInputChangeEventChange(event) {
//   console.log(event); // Event {isTrusted: true, type: 'change', target: input.js-input, currentTarget: input.js-input, eventPhase: 2, …}
//   console.log(event.currentTarget.value); // Helen --> получаем при потере фокуса
// }

// function onInputChangeEventInput(event) {
//   // выведет в консоль каждую введенное значение в input
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   console.log('hello world');
//   //refs.input.value = 'License changed';
//   console.log(event.currentTarget); // <input type="checkbox" class="js-license">
//   console.log(event.currentTarget.value); // on
//   console.log(event.currentTarget.checked); // true if checked
//   console.log(refs.btn.disabled); // true
//   // кнопка выключена, когда checkbox НЕ выбран
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// // --------------------------------------------------------------------------------
// //----------  KEYPRESS, KEYDOWN, KEYUP --------------------------------------------
// /*
// Type Events: keypress, keydown, keyup
// - keydown - натискаємо; код з'являється, коли натискаємо клавішу
// - keyup - відпускаємо; код з'являється, коли відпускаємо клавішу; коли затискаємо - не з'являються
// - keydown, keyup - реагируют на события всех клавиш, тоесть и на системные Escape, Alt, Enter, Tab, Shift, Ctrl, Capslock
// - keypress - реагируют на события только тех клавиш, которые генерят какой-то символ => a, b, c, d, e, f, g, h, i, j, k
// - Restrictions keypress
// - KeyboardEvent.key
// - KeyboardEvent.code
//  */

// const refs2 = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs2.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//   console.log(event);
//   console.log('event.key: ', event.key); // g / п-- буква, которую набираем на каком-либо языке
//   console.log('event.code: ', event.code); // KeyG --> физическая кнопка

//   refs2.output.textContent += event.key; // на єкране именно символ клавиши k/л ...
// }

// function onClearOutput() {
//   refs2.output.textContent = '';
// }

// //------ keyDown Ctrl + C Shift----------------------------------------
// document.addEventListener('keydown', onPress);
// // document.addEventListener('') // =>

// function onPress(e) {
//   e.preventDefault(); // використовуємо лише коли працюємо з модифікаторами клавіш, коли хочемо обробити декілька подій: наприклад зловити Ctrl + C
//   const keyName = 'KeyA';
//   if (e.code === keyName) {
//     console.log('YEP');
//   }
//   console.log(e);

//   // if (e.code === 'ControlLeft' && e.code === 'KeyV') { => don`t work, we must use ctrlKey instead e.code === 'ControlLeft' for combitation; ctrlKey: true; ctrlKey: false; or altKey: true etc
//   // if pressed alone keyV => ctrlKey: false; If pressed Ctrl, than keyV -> keyV has ctrlKey: true
//   if (e.ctrlKey && e.code === 'KeyV') {
//     console.log('You pressed Сtrl + V');
//   }

//   // блокуємо можливість копіювання через Ctrl + C
//   if (e.ctrlKey && e.code === 'KeyC') {
//     alert('NO no no');
//     return;
//   }
//   if (e.shiftKey) {
//     console.log('Print Caps lock?');
//   }
// }

// //----------------------------------------------------------------
// //----------  MOUSE EVENTS -----------------------------------------------------------
// /*
// Mouse Events
// - mouseenter & mouseleave => hover
// - mouseover & mouseout
// - mousemove (chatty event - болтливое событие)
// - Mouse position: https://nerdparadise.com/programming/javascriptmouseposition
// - task - https://learn.javascript.ru/task/move-ball-field
//  */

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter); // hover
// boxRef.addEventListener('mouseout', onMouseLeave); // hover
// // boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }

// // --------------------------------------------------------------------------------
// // ----------  MODAL -----------------------------------------------------------
// /*
//  1. open and close on click btn
//  2. close on click backdrop: onBackDropClick
//  3. close on click ESC: onEscapeKeypress

// Все що вкладене - найближче до очей по осі z

//    BUBLING  backdrop ------------------------------------------ => event.currentTarget ЛОВИМО ТУТ
//                       modal --------------------- /modal
//                           CLICK p -------- /p  <--> найближче до очей => event.target

//  * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
//  */

// const refs3 = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs3.openModalBtn.addEventListener('click', onOpenModal);
// refs3.closeModalBtn.addEventListener('click', onCloseModal);
// refs3.backdrop.addEventListener('click', onBackdropClick); // => refs3.backdrop event.currentTarget

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     // сheck click on backdrop or not on backdrop
//     console.log('Click on Backdrop!');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }

// // --------------------------------------------------------------------------------
// //----------  Anonymous -----------------------------------------------------------
// //script that, when typing text in the input input#name-input (input event), substitutes its current value in span#name-output
const refs4 = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

// refs4.nameInput.addEventListener('input', onNameInput);

// function onNameInput(event) {
//   refs4.nameOutput.textContent = event.currentTarget.value.trim();
// }
// refs4.nameInput.addEventListener('input', e => {
//   console.log(e.currentTarget.value);
//   console.log(e.currentTarget.value.trim());
//   console.log(refs4.nameOutput.textContent);
//   refs4.nameOutput.textContent = e.currentTarget.value.trim();
// });
refs4.nameInput.addEventListener('input', getNameInput);

function getNameInput({ currentTarget }) {
  console.log(currentTarget.value);
  console.log(currentTarget.value.trim());
  console.log(refs4.nameOutput.textContent);
  return (refs4.nameOutput.textContent = currentTarget.value.trim()
    ? currentTarget.value.trim()
    : 'Anonymous');
}

// // --------------------------------------------------------------------------------
// //----------  check validation-input -----------------------------------------------------------
// // script that, when input loses focus (blur event), checks its content for the correct number of input characters.
// const validationInput = document.querySelector('#validation-input');
// const dataLength = document.querySelector('[data-length]');
// console.log(dataLength.dataset.length);
// console.log(validationInput);

// validationInput.addEventListener('blur', onValidationInput);

// function onValidationInput(event) {
//   event.preventDefault();
//   const inputContentLength = event.currentTarget.value.length;
//   const validLength = dataLength.dataset.length;
//   console.log(validLength);
//   console.log(inputContentLength);

//   if (Number(inputContentLength) === Number(validLength)) {
//     validationInput.classList.add('valid');
//     console.log(validationInput);
//     validationInput.classList.remove('invalid');
//   }
//   if (Number(inputContentLength) !== Number(validLength) && Number(inputContentLength) !== 0) {
//     validationInput.classList.remove('valid');
//     validationInput.classList.add('invalid');
//     console.log(validationInput);
//   }
//   if (Number(inputContentLength) === 0) {
//     validationInput.classList.remove('valid');
//     validationInput.classList.remove('invalid');
//     console.log(validationInput);
//   }
// }

// //------------------------------------------------------------------------------------------------
// //----------  check validation-input -----------------------------------------------------------
// //script that responds to a change in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, dragging the slider will change the size of the text.

// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('span#text');
// console.log(text.textContent); //Abracadabra!

// fontSizeControl.addEventListener('input', onFontSizeControl);

// function onFontSizeControl(e) {
//   console.log(e.currentTarget.value);
//   text.style.fontSize = `${e.currentTarget.value}px`;
// }

// //------------------------------------------------------------------------------------------------
// // ---------- form.login-form --------------------------------------------------------------------
// // login form management script
// const loginForm = document.querySelector('.login-form');
// loginForm.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, password },
//   } = e.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   const formData = new FormData(e.currentTarget);

//   formData.forEach((value, name) => {
//     console.log(`${name} ${value}`);
//   });
//   e.currentTarget.reset();
// }

// //------------------------------------------------------------------------------------------------
// //--------- change-color -------------------------------------------------------------------------
// //a script that changes the background colors of the <body> element via inline styling when button.change-color is clicked and outputs the color value in span.color
// const color = document.querySelector('span.color');
// const changeColorBtn = document.querySelector('.change-color');

// changeColorBtn.addEventListener('click', changeColor);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function changeColor() {
//   color.textContent = getRandomHexColor();
//   console.log(color.textContent);
//   document.body.style.backgroundColor = color.textContent;
// }

// //----------------------------------------------------------------
// // ----------- create elements -----------------------------------
// //script for creating and cleaning a collection of elements. The user enters the number of elements in input and clicks the Create button, after which the collection is rendered. Clicking the Clear button clears the collection of items
// // const boxes = document.querySelector('div#boxes');
// // const inputNumber = document.querySelector('input[type="number"]');
// // console.log(inputNumber.max);
// // const createBtn = document.querySelector('button[data-create]');
// // const destroyBtn = document.querySelector('button[data-destroy]');

// // createBtn.addEventListener('click', () => {
// //   console.log(inputNumber.value);
// //   Number(inputNumber.value) > Number(inputNumber.max) ||
// //   Number(inputNumber.value) < Number(inputNumber.min)
// //     ? alert('Please enter number from 1 to 100')
// //     : createBoxes(inputNumber.value);
// //   inputNumber.value = '';
// // });

// // destroyBtn.addEventListener('click', destroyBoxes);

// // function createBoxes(amount) {
// //   let defaultSize = 30;
// //   const boxesArr = [];
// //   for (let i = 0; i < amount; i += 1) {
// //     defaultSize += 10 * i;
// //     const div = document.createElement('div');
// //     div.style.width = `${defaultSize}px`;
// //     div.style.height = `${defaultSize}px`;
// //     div.style.backgroundColor = getRandomHexColor();
// //     boxesArr.push(div);
// //     console.log('arr length', boxesArr.length);
// //   }
// //   return boxes.append(...boxesArr);
// // }

// // function destroyBoxes() {
// //   inputNumber.value = '';
// //   boxes.innerHTML = '';
// // }

// // next variant----------------------------
// const boxesDiv = document.querySelector('div#boxes');
// const inputNumbers = document.querySelector('input[type="number"]');
// console.log(inputNumbers.max);
// const createBtn1 = document.querySelector('button[data-create]');
// const destroyBtn1 = document.querySelector('button[data-destroy]');

// createBtn1.addEventListener('click', () => {
//   Number(inputNumbers.value.trim()) > Number(inputNumbers.max) ||
//   Number(inputNumbers.value.trim()) < Number(inputNumbers.min)
//     ? alert('Please select number from 1 to 100')
//     : createBoxes(Number(inputNumbers.value));
//   inputNumbers.value = '';
// });

// function createBoxes(amount) {
//   let size = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10 * i;
//     const div = `<div class="box" style="display: block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//     console.log(boxesArr);
//   }
//   boxesDiv.insertAdjacentHTML('beforeend', boxesArr.join(''));
// }

// destroyBtn1.addEventListener('click', destroyBoxes);
// function destroyBoxes() {
//   inputNumbers.value = '';
//   boxesDiv.innerHTML = '';
// }

// //------------------------------------------------------------------------------------------------
// // ----- BOX MOVE ----------------------------------------------------

// const box = document.querySelector('.js-box-move');
// console.log(box);
// let step = 30;

// box.addEventListener('click', e => randomMove(e));

// // function onBoxClick(e) {
// //   step += 30;
// //   e.currentTarget.style.margin = `${step}px`;
// // }

// function randomMove(e) {
//   let randomX = Math.floor(Math.random() * (window.innerWidth / 8 - step));
//   let randomY = Math.floor(Math.random() * (window.innerHeight / 8 - step));
//   e.currentTarget.style.transform = `translate(${randomX}px, ${-randomY}px)`;
// }

// //--------------- REMOVE EVENT LISTENER --------------------------------
// const btnExp = document.querySelector('.btn-exp');
// const titleClick = document.querySelector('.title-click');

// btnExp.addEventListener('click', getTitleClickBtn);

// function getTitleClickBtn(e) {
//   titleClick.textContent = `Expand`;
//   // e.currentTarget.disabled = true;
//   console.log(e.currentTarget);
//   // знімаємо слухача подій
//   btnExp.removeEventListener('click', getTitleClickBtn);
// }

// // ----------------------------------------------------------------
// // next variant remove event listener
// btnExp.addEventListener('click', getTitleClickBtn, { once: true }); // викликати слухача подій лише один раз

// // якщо подію необхідно зняти з декількох варіантів (backdrop, Escape, modal close btn)- use removeEventListener, якщо з чогось одного - { once: true }
// // в середині addEventListener ми звертаємось до (наприклад) btn через event.currentTarget
// // коли необхідно зняти прослуховувач подій .removeEventListener в середині .addEventListener тоді звертаємось до btn => так загально прийнято(але можна і через event.currentTarget.removeEventListener)

// //------------------------------------------------------------------------------------------------
// // ----------- FORM SEARCH ------------------------------------------------------------------
// const cars = [
//   {
//     id: 1,
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     id: 2,
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     id: 33,
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     id: 3,
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     number: '+380000000000',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     id: 4,
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const formSearch = document.querySelector('.js-search');
// const listSearch = document.querySelector('.js-list-search');

// formSearch.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   const { queryValue, selectValue } = e.currentTarget.elements;

//   // another variant
//   // const {elements: {queryValue, selectValue}} = e.currentTarget;

//   // bad practic but than don`t write value => deep Destructuring assignment
//   // const {
//   //     elements: {
//   //         queryValue: {
//   //             value: queryValue
//   //         },
//   //         selectValue: {
//   //             value: selectValue
//   //         }
//   //     }
//   // } = e.currentTarget

//   console.log(queryValue); // <input type="text" name="queryValue">
//   console.log(selectValue); // <select name="selectValue>...</select>

//   const searchResult = cars.filter(item => item[selectValue.value] === queryValue.value); // item з ключем selectValue.value => car, type
//   console.log(searchResult); // { id: 2, car: 'Audi', type: 'Q7', price: 40000, ...}

//   const markupSearch = searchResult
//     .map(
//       ({ car, type, price, img }) => ` <li>
//     <img src="${img}" alt="${car}" width="300">
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <h4>${price}</h4>
//     </li>`
//     )
//     .join('');

//   listSearch.innerHTML = markupSearch;
// }

// // -------------------------------------------------------------------
// //------- FORM input--------------------------------------------------
// const input = document.querySelector('.js-input-exp');

// input.addEventListener('focus', onFocus);
// function onFocus(e) {
//   // console.log(e);
//   console.log('Write, please');
// }

// input.addEventListener('blur', onBlur);
// function onBlur(e) {
//   // console.log(e);
//   console.log('Have you already writting???');
// }

// input.addEventListener('input', onInput);
// function onInput(e) {
//   const query = e.currentTarget.value;
//   console.log(query);
//   // '' => false; query ==== '' => query === false => !query
//   //  "asd" => true => !true => false
//   //  query => !false => true
//   if (!query) {
//     console.log('Empty string');
//   }
// }

// //----------------------------------------------------------------
