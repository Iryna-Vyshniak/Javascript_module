/*
const Joy = require('joy');

const passwordShema = Joy.string().min(3).max(10).alphanum(); // alphanumeric -> only letters & num
console.log(passwordShema.validate('q'));
*/

// JSON.
//-----------------------------------------------------------------------------------------------------
// Результат виклику JSON.stringify(dog) - це валідний JSON (рядок),
// який може бути збережений у файл або переданий мережею.

const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}" -> string

//Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити (parse).
//Це операція зворотна перетворенню в рядок(stringify).
const dogObj = JSON.parse(dogJSON);
console.log(dogObj); // {name: 'Mango', age: 3, isHappy: true} -> object
//-------------------------------------------------------------------------------------------------------------

JSON.stringify(() => console.log('Well, this is awkward')); // undefined -> при спробі перетворити функцію в JSON, результатом буде undefined.

// -------------------------------------------------------------------------------------------------------------
//Не будь-який JavaScript об'єкт може бути перетворений один до одного у JSON.
//Наприклад, якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані.
const dog1 = {
  name: 'Mango',
  age: 3,
  isHappy: true,
  bark() {
    console.log('Woof!');
  },
};

const dogJSON1 = JSON.stringify(dog1);
console.log(dogJSON1); // "{"name":"Mango","age":3,"isHappy":true}"

//-------------------------------------------------------------------------------------------------------------
//LOCALESTORAGE

//Локальне сховище (localStorage) - унікальне для кожного веб-застосунку і буде однаковим на декількох вкладках, в яких він (веб-застосунок) запущений. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, необхідно використовувати JavaScript.

console.log(localStorage); // Storage {length: 0} -> поки що нічого не записано Application -> LocalStorage -> localhost

//----------------------------------------------------------------

// в localStorage между перезагрузками страницы браузера сохраняет данные: key  value, можем их видеть и надеяться, они будут там лежать даже когда закроем вкладку, а потом снова вернемся; будут до тех пор пока сами явно их не удалим
// save in localeStorage 1 - string -> key, 2 - value -> if string -> string, another ->  JSON.stringify
//Використовуючи метод setItem(key, value), можна додати новий запис у вигляді пари ключ:значення.

localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');

//Якщо необхідно зберегти щось, крім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 })); // под одним ключем одна сущность: 1 объект или 1 массив, илт 1 строка. Несколо ключей - несколько сущностей
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

//----------------------------------------------------------------

// read from  localStorage, write only key
//Метод getItem(key) дозволяє прочитати зі сховища запис з ключем key. Якщо у сховищі відсутній запис з таким ключем, метод повертає null. Якщо значення - це звичайний рядок, немає потреби його парсити.
localStorage.setItem('ui-theme', 'dark');

const theme = localStorage.getItem('ui-theme');
console.log(theme); // "dark"

const savedData = localStorage.getItem('my-data'); // return string
console.log('savedData', savedData); // savedData { 'name': 'Mango', 'age': 2 } -> string

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData); // parsedData { name: 'Mango', age: 2 } -> object
//В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.

const setting = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(setting));

const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // settings object

//----------------------------------------------------------------

// Метод removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.

localStorage.setItem('ui-theme', 'dark');
console.log(localStorage.getItem('ui-theme')); // "dark"

localStorage.removeItem('ui-theme');
console.log(localStorage.getItem('ui-theme')); // null

//----------------------------------------------------------------

//Операція повного очищення сховища - небезпечна, оскільки може порушити записи, зроблені іншими розробниками проекту. Проте, якщо ви хочете повністю очистити сховище, потрібно викликати метод clear().

localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');
console.log(localStorage.getItem('ui-theme')); // "light"
console.log(localStorage.getItem('sidebar')); // "expanded"
console.log(localStorage.getItem('notification-level')); // "mute"

localStorage.clear();
console.log(localStorage.getItem('ui-theme')); // null
console.log(localStorage.getItem('sidebar')); // null
console.log(localStorage.getItem('notification-level')); // null

//----------------------------------------------------------------

sessionStorage; // хранилище сессии; закрыл вкладку - данные стерлись - для корзин покупок
