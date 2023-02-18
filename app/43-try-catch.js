//If invalid JSON is passed to the methods of the JSON class, they will "throw" an error and the entire script will crash. To avoid this, the try...catch construct is used, which allows you to "catch" and handle script execution errors.
/* try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
} */

//By using the try...catch construct, we can handle this exception in such a way that the script continues to run even if an error occurs.

/* try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log('✅ This is fine, we handled parse error in try...catch'); */

//Для того, щоб скоротити кількість повторюваного коду при роботі з веб-сховищем, можна написати сервіс зі стандартними методами, наприклад, save і load. Вони будуть абстрагувати повторюваний код перевірки помилок парса і подібну рутину.

/* const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
}; */

const addLocal = document.querySelector('.js-addLocal');
const getLocal = document.querySelector('.js-getLocal');
const removeLocal = document.querySelector('.js-removeLocal');
const addSession = document.querySelector('.js-addSession');
const removeSession = document.querySelector('.js-removeSession');

const KEY_LOCAL = 'localStorage';
addLocal.addEventListener('click', onAddLocal);
getLocal.addEventListener('click', onGetLocal);
removeLocal.addEventListener('click', onRemoveLocal);

function onAddLocal() {
  const arr = [1, 2, 3, 5];
  localStorage.setItem(KEY_LOCAL, JSON.stringify(arr));
}

// 1st variant
/* function onGetLocal() {
  //якщо локал сторідж нічого не містить - перевірка
  // ok -> code inside try -> work
  try {
    // в змінну result зберегли результат виконання парсу, який отримали з localStorage по ключу KEY_LOCAL
    const result = JSON.parse(localStorage.getItem(KEY_LOCAL));
    result.forEach(item => console.log(item));
  } catch (err) {
    console.log(err); // TypeError: Cannot read properties of null (reading 'forEach')
  }
  // код нижче виконається, так як catch (err) обробить помилку
  console.log('Hello world');
}

function onRemoveLocal() {
  localStorage.removeItem(KEY_LOCAL);
}
 */

// 2nd variant
/* function onGetLocal() {
  //якщо локал сторідж нічого не містить - перевірка
  // ok -> code inside try -> work
  try {
    // в змінну result зберегли результат виконання парсу, який отримали з localStorage по ключу KEY_LOCAL
    const result = JSON.parse(localStorage.getItem(KEY_LOCAL));
    result.forEach(item => console.log(item));
  } catch (err) {
    console.log(err); // TypeError: Cannot read properties of null (reading 'forEach') - якщо localStorage пустий
  } finally {
    console.log('Hello world');
  }
} */

// 3rd variant
/* function onGetLocal() {
  //якщо локал сторідж нічого не містить - перевірка
  const result = JSON.parse(localStorage.getItem(KEY_LOCAL)) || [];
  result.forEach(item => console.log(item));
  console.log(result);
} */

// 4th variant
function onGetLocal() {
  //якщо локал сторідж нічого не містить - перевірка
  const result = JSON.parse(localStorage.getItem(KEY_LOCAL)) ?? []; // null or undefined
  result.forEach(item => console.log(item));
  console.log(result);
}

function onRemoveLocal() {
  localStorage.removeItem(KEY_LOCAL);
}

//----------------------SESSION STORAGE------------------------------------------
addSession.addEventListener('click', onAddSession);
removeSession.addEventListener('click', onRemoveSession);

function onAddSession() {
  const obj = {
    name: 'User',
    getName() {
      console.log(`Hello i'm ${this.name}`);
    },
  };
  sessionStorage.setItem('sessionStorage', JSON.stringify(obj)); // {'name': 'User'}
}

function onRemoveSession() {
  sessionStorage.removeItem('sessionStorage');
}
