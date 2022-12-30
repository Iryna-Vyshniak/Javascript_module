/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// function myFunc() {
// const a = [4, 5, 6];
// document.querySelector('.out-1').innerHTML = a.join('-');
// }

// myFunc();
// // 4-5-6

// function myFunction(callback){
//     const a = [4, 5, 6];
//     let element = document.querySelector('.out-1');
//     callback(elem, a);
//     }

// // function callback
// function out(element, arr){
// element.innerHTML = arr.join('-');
// }

// myFunc(out);
// // 4-5-6

// example 2
function twoSquared() {
  return 2 * 2;
}
twoSquared();

function threeSquared() {
  // return Math.pow(3, 3);
  return 3 * 3;
}

const numSquared = num => {
  return num * num;
};

// ex 3 long result with typical steps
const copyArrAndSquareNums = arr => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] ** 2);
  }
  return output;
};

const nums = [1, 2, 3, 4];
const res = copyArrAndSquareNums(nums);

console.log(res);
// (4) [1, 4, 9, 16]

const copyArrDevideByTwo = arr => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] / 2);
  }
  return output;
};

const res2 = copyArrDevideByTwo(nums);
console.log(res2);
// (4) [0.5, 1, 1.5, 2]

// callback function
function copyArrDoSomething(arr, instructions) {
  // const output = [];

  // for (let i = 0; i < arr.length; i += 1) {
  //   output.push(instructions(arr[i]));
  // }
  // return output;
  return instructions(...arr);
}

const numInstructions = num => {
  return num * num;
};

const result = copyArrDoSomething([1, 3, 5, 6], numInstructions);
console.log(result);
// (4) [1, 9, 25, 36]

const numDevidedBy3 = num => {
  return Math.round(num / 3);
};
const result2 = copyArrDoSomething([66, 17, 27, 698], numDevidedBy3);
console.log(result2);
// (4) [22, 6, 9, 233]

const somethingNum = [55, 66, 33, 77];
const resultNum = copyArrDoSomething(somethingNum, numDevidedBy3);
console.log(resultNum);

// recursion
let a = 1;
const rec = () => {
  a++;
  console.log(a);
  if (a > 10) {
    return a;
  }
  rec();
};

rec();
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11

// for animation why didn't work???
let offset = 0;
function move() {
  offset += 5;

  document.querySelector('.test-2').style.left = offset + 'px';
  if (offset > 200) {
    return true;
  }
  setTimeout(move, 500);
}

// document.querySelector('button').onclick = move;

//
let globalA = 8;
const one = () => {
  globalA += 1;
  return globalA;
};

console.log(one()); // 9
console.log(one()); // 10
console.log(one()); // 11

const one1 = () => {
  let localA = 8;
  localA += 1;
  return localA;
};

console.log(one1()); // 9
console.log(one1()); // 9
console.log(one1()); // 9

function counter() {
  let localA = 8;
  return () => {
    localA += 1;
    return localA;
  };
}
console.log(counter());
// () => {
//     localA += 1;
//     return localA;
//   }

const counterB = counter();
console.log(counterB);
// () => {
//     localA += 1;
//     return localA;
//   }
console.log(counterB()); // 9
console.log(counterB()); // 10
console.log(counterB()); // 11
console.log(counterB()); // 12
console.log(counterB()); // 13

const counterC = counter();
console.log(counterC()); // 9
console.log(counterC()); // 10
console.log(counterC()); // 11
console.log(counterC()); // 12
console.log(counterC()); // 13

console.log(counterB()); // 14
console.log(counterB()); // 15

console.log(counterC()); // 14

/*
 * Отложенный вызов: регистрация событий
 */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Клик по кнопке ' + Date.now());
};

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */

const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

/*
 * Отложенный вызов: интервалы
 */

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
  console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фильтр
 */

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Ты офигел?';
      }

      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Текущая зарпалата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

const numbers = [1, 2, 3, 4, 5];
const each = function (array, callback) {
  const newArray = [];

  for (item of array) {
    newArray.push(callback(item));
  }
  return newArray;
};

//const eachReduce = each.reduce((acc, callback) => aac + callback, 0);

// capitalize letter

const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

const camelCase = (string, callback) => {
  const wordsArr = string.split(' ');
  const capitalizeWordsArr = [];
  // for (const word of wordsArr) {
  //     capitalizeWordsArr.push(callback(word));
  //   }
  // return capitalizeWordsArr.join(' ');
  wordsArr.forEach(word => capitalizeWordsArr.join(' '));
};

const newString = camelCase('this is funhouse', capitalize);

console.log(newString);

// get a room

// vip || standart
const getClientsStatus = () => (Math.round(Math.random()) % 2 !== 0 ? 'vip' : 'standart');

const offerLuxuryRoom = () => 'Luxury Room';
const offerStandartRoom = () => 'Standart Room';

// offerRoom(getClientsStatus, offerLuxuryRoom, offerStandartRoom);

function offerRoom(getClientsStatus, offerLuxuryRoom, offerStandartRoom) {
  return getClientsStatus() === 'standart' ? offerStandartRoom() : offerLuxuryRoom();
}

const result7 = offerRoom(getClientsStatus, offerLuxuryRoom, offerStandartRoom);

console.log(result7);

//
const filterData = (arr, test) => {
  const filter = [];

  for (const num of arr) {
    const passed = test(num);
    if (passed) {
      filter.push(num);
    }
  }
  console.log(filter);
  return filter;
};

const checkIsTrue = value => value >= 3;
const checkIs = value => value <= 4;

console.log(checkIsTrue(3));

console.log(filterData([2, 3, 56, 7, 1], checkIsTrue)); //[3, 56, 7]
console.log(filterData([2, 3, 56, 7, 1], checkIs)); //[2, 3, 1]
