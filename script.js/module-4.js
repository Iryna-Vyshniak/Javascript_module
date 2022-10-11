// callback function
// const arr = ['Dan', 'Olha', 'John', 'Leo'];
// // we want => [3, 4, 4, 3];

// // old method =>
// let newArr = [];
// for (i = 0; i < arr.length; i += 1) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// // for uppercase letter
// // old method
// let newArr1 = [];
// for (i = 0; i < arr.length; i += 1) {
//   newArr1.push(arr[i].toUpperCase());
// }
// console.log(newArr1);

//  MODERN METHOD
const names = ['Dan', 'Olha', 'John', 'Leo'];

function mapArray(arr, fn) {
  const res = [];
  // console.log(res);
  for (let i = 0; i < arr.length; i += 1) {
    res.push(fn(arr[i]));
  }
  return res;
}

// el => 1 element
function nameLength(el) {
  //   console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  //   console.log(el);
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const upperCaseElements = mapArray(names, nameToUpperCase);
console.log(result);
console.log(upperCaseElements);

// 2 GREETING
function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting('Nick');
// const fullName = testGreeting('Sokol');
const fullName = greeting('Nick')('Sokol');
console.log(fullName);

// 3 TEST QUESTION
function question(job) {
  const jobDictionary = {
    developer: `what's JS?`,
    teacher: `what's your subject?`,
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}

const developerQuestion = question('developer');
console.log(developerQuestion('Nick'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Olha'));

// 1
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// const result = makePizza();
// const pointer = makePizza;

// 2
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// 3
//Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}
makePizza('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
makePizza('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

// 4
//Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.
// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// 5
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(item => {
    totalPrice += item;
  });
  return totalPrice;
}
