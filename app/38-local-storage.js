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
