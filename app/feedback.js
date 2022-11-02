// когда писал отзыв, а пропал интернет и сообщение, которое писал, исчезло;
//  скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
import throttle from 'lodash.throttle';
import '../css/style.css';
import '../css/feedback.css';

// антипаттерн - не записать в константу ключ, т.к мы его используем часто и при повторении, чтобы не сделать ошибку в написании
const STORAGE_KEY1 = 'feedback-msg';

const refS = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

/*
ИМИТАЦИЯ ОТПРАВЛЕНИЯ ФОРМЫ
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(e) {
    e.preventDefault();

    console.log('Отправляем форму');
    e.currentTarget.reset(); // очищаем форму - refs.form.
    localStorage.removeItem(STORAGE_KEY1); // очищаем  localStorage при отправке формы, следующий отзыв будет с пустой строчки. НЕ clear т.к. очитстим ВСЕ ключи, которые там есть
}


/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(e) {
    const message = e.target.value; // не используем currentTarget, так как он всплывает, а в throttle задержка. Пока throttle заработал, в currentTarget уже непонятно-что; когда сработала ф-ция и когда вызвалась - 2 совершенно разных времени

    localStorage.setItem(STORAGE_KEY1, message); // message не делаем JSON.stringify, так как value textarea это строка, валидный JSON. При каждом нажатии клавиши записываем значения в localStorage
}

/*
 * - хотим из локального хранилища получить данные при перезагрузке страницы. Когда загружается страница хотим пойти в localStorage, попытаться взять оттуда наши сохраненые данные и запихнуть в textarea
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY1); // если ничего нет - возвращает  null, всегда проверять а есть ли там что-то

    if (savedMessage) { // если есть в localStorage сохраненные данные - обновляем DOM
        refs.textarea.value = savedMessage;
    }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });



import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    // if (refs.input.value === "" || refs.textarea.value === "") {
    //     return alert(`Please fill in all the fields!`);
    // }

    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

function reloadPage() {
    // formData = { email: '', message: '' };
    const savedValues = localStorage.getItem(STORAGE_KEY);

    if (savedValues) {
        formData = JSON.parse(savedValues);
        console.log(formData);
        // Object.assign(formData, JSON.parse(savedValues));
        refs.input.value = formData.email;
        refs.textarea.value = formData.message;
    }
}