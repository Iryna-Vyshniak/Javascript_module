import Throttle from "lodash.throttle";
// Variables
const form = document.querySelector(".feedback-form");
const email = form.querySelector("[name='email']");
const message = form.querySelector("[name='message']");
// 1. created a variable for the key in localStorage
const localKey = 'feedback-form-state';
// Listeners. Adds listeners on the form for the submit and input events. 
// Throttle is a function. 
form.addEventListener('input', Throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);
// Adds listener on the window for the load event. Saves what is recorded in the Storage.


window.addEventListener('load', checkStorage);
// Functions
// Check the Storage for the presence of recorded keys (якщо в localStorage щось є, то ф-ція бере дані з об'єкта з localStorage, і розбиває на окремі ключі і заповнює ними inputs, коли ми перезавантажуємо сторінку).
function checkStorage() {
    if (!localStorage.getItem(localKey)) return;
    const formValue = JSON.parse(localStorage.getItem(localKey));
    // Added for..in statement since there can be many fields in the form!!!
    console.dir(formValue);
    for (const key in formValue) {
        form.elements[key].value = formValue[key];
    }
    // Alternative. If the form has only 1 field.
    // email.value = formValue.email;
    // message.value = formValue.message;
}
// Function for submit. 
function onFormSubmit(event) {
    // prevent the default browser action
    event.preventDefault();
    // receive the data and console it
    const savedData = JSON.parse(localStorage.getItem(localKey));
    console.dir(savedData);
    // Alternative to receiving data.
    // const { email, message } = event.currentTarget.elements;
    // console.dir({ email: email.value, message: message.value });
    // remove data from localStorage & clear/reset/ all forms
    localStorage.removeItem(localKey);
    event.currentTarget.reset();
}
// Function data storing in localStorage (in order for data from Inputs will be recorded in localStorage).
function storageFormData(event) {
    const formValue = { email: '', message: '' };
    // якщо наш об'ект щось містить, то додаємо нові до вже існуючих
    // що б не затирались дані коли вводимо в іншому полі
    if (localStorage.getItem(localKey)) {
        Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)));
    }
    // console.dir(event.target.value);
    // console.log('name input:', event.target.name);
    // console.log('value input:', event.target.value);
    //  створюємо localSrorage, приводимо дані в строку та записуємо
    formValue[event.target.name] = event.target.value.trim();
    // console.log(formValue);
    localStorage.setItem(localKey, JSON.stringify(formValue));
}

//===========================================================================================


function reloadPage() {
    const saveValues = localStorage.getItem(STORAGE_KEY);

    if (saveValues) {
        formData = JSON.parse(saveValues);
        console.log(formData);
        Object.entries(formData).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
    }
}

//=====================================================================================

checkStorage();

function checkStorage() {
    if (localStorage.getItem(STORAGE_KEY)) {
        saveObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

        for (let key in saveObject) {
            formEl.elements[key].value = saveObject[key];
        }
    }
}
