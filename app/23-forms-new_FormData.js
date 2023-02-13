'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

/*
const form = document.querySelector('.js-register-form');

// блок подписок
// добавляем слушателя события submit
// submit вешаем всегда на форму, т.к. отправляем ее по клику на кнопку submit
form.addEventListener('submit', onFormSubmit);


// блок обработчиков подписок
function onFormSubmit(event) {
    // когда отправляется форма - перезагрузка браузера, отменяем
    event.preventDefault();

    // собираем значения элементов этой формы
    // сurrentTarget - текущая цель; свойство (event) текущей цели (currentTarget) ссылается на тот элемент, который прослушивает это событие. В нашем случае это form, так как на нем addEventListener => form.addEventListener. То есть наша форма подписалась на submit,поэтому во время этого submit на event.currentTarget будет ссылка на эту форму
    // elements - все элементы нашей формы
    // subscription - имя группы в форме ( там где radio)
    // console.dir(event.currentTarget.elements.subsription.value);
    // formElements для того, чтобы как-то обратится к элементу, поработать, почитать их значение, но не для того, чтобы собирать все данные из нашей формы.
    // Example: потом куда-то на сервер отправляем какой-то объект
    // const formData = {email, password, subscription}; console.log(formData); => полей не 3 может быть, а 150, чтобы не прописывать руками
    /*
        const formElements = event.currentTarget.elements;
        console.dir(formElements);
    
        // ссылки на элементы, это не их значения
    
        const email = formElements.email.value;
        const password = formElements.password.value;
        const subscription = formElements.subscription.value;
    
        console.log(email);
        console.log(password);
    
        console.log('send/submit form');
    */

/*
    // event.currentTarget - ссылка на сам DOM элемент, на form в нашем случае, form не пишем, т.к. ф-ция динамична
    // FormData собирает значения всех полей в форме; под капотом в _proto_ есть forEach (не тот, что в массивах, одноименное название, 1ым параметром собирает значение этого поля, 2ым  - имя этого поля)
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    // проверяем как собрало
    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name:', name);
        console.log('onFormSubmit -> value:', value);
    
// aвтоматически проходит по всем элементам формы и собирает из них данные, которые ввели 
// FormData {}
// onFormSubmit -> name: email
// onFormSubmit -> value: w@klds.com
// onFormSubmit -> name: password
// onFormSubmit -> value: saddsc
// onFormSubmit -> name: subscription
// onFormSubmit -> value: free
       
    })
}

*/
//  ===========================================================================

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  console.log(email);

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(name, value);
  });

  // or next variant
  //   const data = {};
  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => (data[name] = value));
  //   console.log(data);
}
//=================================================================

const inputRef = document.querySelector('.js-username-input');
const btnRef = document.querySelector('.js-contact-form-submit');
const checkboxRef = document.querySelector('.js-policy-checkbox');
const formRef = document.querySelector('.js-contact-form');
const outputRef = document.querySelector('.js-username-output');

function inputFocus(e) {
  e.currentTarget.classList.add('focus');
}

function inputBlur(e) {
  e.currentTarget.classList.remove('focus');
}

function inputInput({ currentTarget }) {
  const { dataset, value } = currentTarget;

  const isCheck = +dataset.length === value.length;

  if (isCheck) {
    changeClass('valid', 'invalid', currentTarget);
    btnRef.disabled = false;
    return;
  }

  btnRef.disabled = true;
  changeClass('invalid', 'valid', currentTarget);
}

function inputChange({ currentTarget }) {
  const { dataset, value } = currentTarget;

  const isCheck = +dataset.length === value.length;

  if (isCheck) {
    changeClass('valid', 'invalid', currentTarget);
    return;
  }

  changeClass('invalid', 'valid', currentTarget);
}

function changeClass(classAdd, classRemove, element) {
  element.classList.add(classAdd);
  element.classList.remove(classRemove);
}

function formSubmit(e) {
  e.preventDefault();

  const { currentTarget: elem } = e;

  if (checkboxRef.checked) {
    elem.elements[0].classList.remove('valid');
    console.log(elem.elements[0].value);
    elem.reset();

    return;
  }

  console.log('not checked');
}

inputRef.addEventListener('focus', inputFocus);
inputRef.addEventListener('blur', inputBlur);
inputRef.addEventListener('input', inputInput);
inputRef.addEventListener('change', inputChange);
formRef.addEventListener('submit', formSubmit);
