// когда писал отзыв, пропал интернет, и сообщение, которое писал, исчезло;
//  скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// import throttle from 'lodash.throttle';
// import '../css/style.css';
// import '../css/feedback.css';

// антипаттерн - не записать в константу ключ, т.к мы его используем часто и при повторении, чтобы не сделать ошибку в написании
const STORAGE_KEY1 = 'feedback-msg';

const refs = {
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
  // заповнити textarea
  const savedMessage = localStorage.getItem(STORAGE_KEY1); // если ничего нет - возвращает  null, всегда проверять а есть ли там что-то

  if (savedMessage) {
    // если есть в localStorage сохраненные данные TRUE- обновляем DOM
    refs.textarea.value = savedMessage;
  }
}

/*
const STORAGE_KEY1 = 'feedback-msg';

const form = document.querySelector('.js-feedback-form');
const textarea = document.querySelector('.js-feedback-form  textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY1);
}

function onTextareaInput(e) {
  const msg = e.target.value;
  localStorage.setItem(STORAGE_KEY1, msg);
}

function populateTextarea() {
  const savedValue = localStorage.getItem(STORAGE_KEY1);

  if (savedValue) {
    textarea.value = savedValue;
  }
}
*/
