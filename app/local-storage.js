/*
const Joy = require('joy');

const passwordShema = Joy.string().min(3).max(10).alphanum(); // alphanumeric -> only letters & num
console.log(passwordShema.validate('q'));
*/

JSON.





    console.log(localStorage); // в localStorage между перезагрузками страницы браузера сохраняет данные: key  value, можем их видеть и надеяться, они будут там лежать даже когда закроем вкладку, а потом снова вернемся; будут до тех пор пока сами явно их не удалим

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));// под одним ключем одна сущность: 1 объект или 1 массив, илт 1 строка. Несколо ключей - несколько сущностей

const savedData = localStorage.getItem('my-data'); // 
console.log('savedData', savedData); // savedData { 'name': 'Mango', 'age': 2 } -> string

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData); // parsedData { name: 'Mango', age: 2 } -> object

sessionStorage // хранилище сессии; закрыл вкладку - данные стерлись - для корзин покупок


/*

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
// const formEmail = form.querySelector('input[name="email"]');
// const formTextarea = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state";
const inputsData = {};
const savedData = localStorage.getItem(STORAGE_KEY);
const savedDataObject = JSON.parse(savedData);

// console.log(savedData);
// console.log(Object.keys(savedDataObject));
// console.log(Object.values(savedDataObject));

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onInputsChange, 500));

onPageReload();

function onInputsChange(event) {
    inputsData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsData));
}

function onFormSubmit(event) {
    event.preventDefault();
    if (
        event.currentTarget.elements.email.value == "" ||
        event.currentTarget.elements.message.value == ""
    ) {
        alert("Всі поля повинні бути заповнені!");
    } else {
        const formData = {
            email: event.currentTarget.elements.email.value,
            message: event.currentTarget.elements.message.value,
        };
        console.log(formData);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
}

function onPageReload() {
    if (savedData) {
        for (let el of form.elements) {
            if (Object.keys(savedDataObject).includes(el.name)) {
                let i = Object.keys(savedDataObject).indexOf(el.name);
                el.value = Object.values(savedDataObject)[i];
            }
        }

        // if (savedDataObject.email) {
        //   formEmail.value = savedDataObject.email;
        // }
        // if (savedDataObject.message) {
        //   formTextarea.value = savedDataObject.message;
        // }
    }
}

*/