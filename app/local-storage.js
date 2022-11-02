/*
const Joy = require('joy');

const passwordShema = Joy.string().min(3).max(10).alphanum(); // alphanumeric -> only letters & num
console.log(passwordShema.validate('q'));
*/

// JSON.

console.log(localStorage); // в localStorage между перезагрузками страницы браузера сохраняет данные: key  value, можем их видеть и надеяться, они будут там лежать даже когда закроем вкладку, а потом снова вернемся; будут до тех пор пока сами явно их не удалим

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));// под одним ключем одна сущность: 1 объект или 1 массив, илт 1 строка. Несколо ключей - несколько сущностей

const savedData = localStorage.getItem('my-data'); // 
console.log('savedData', savedData); // savedData { 'name': 'Mango', 'age': 2 } -> string

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData); // parsedData { name: 'Mango', age: 2 } -> object

sessionStorage // хранилище сессии; закрыл вкладку - данные стерлись - для корзин покупок

