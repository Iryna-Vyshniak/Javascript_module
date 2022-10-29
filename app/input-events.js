/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */


/*
const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');
*/
// const elements or const refs - паттерн объект ссылок
// refs.input - это ссылка на объект input

/*
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};


// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange); // => on checkbox and radio button
// refs.input.addEventListener('input', onInputChange); // => for input, textarea

refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value; // в текстовый контент span (в кнопке) присваиваем значение event.currentTarget.value
    console.log(event.currentTarget.value);

}

function onLicenseChange(event) {
    refs.btn.disabled = !event.currentTarget.checked;
};

*/

const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseCheck);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}


function onLicenseCheck(event) {
    console.log(event.currentTarget.checked);
    refs.btn.disabled = !event.currentTarget.checked;
}

