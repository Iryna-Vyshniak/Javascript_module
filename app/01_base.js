// 1 Переменные
// camelCase
// const firstName = 'Iryna'
// // const age = 18 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' // err
// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1993
//
// // const age = currentYear + birthYear
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Iryna'
// const age = 50
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 46
// const birthYear = 1999
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные опрераторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year
// }
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
//
// }
//
// logInfoAbout('Влад', 1993)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
const person = {
  firstName: 'Iryna',
  lastName: 'V-N',
  year: 1993,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function () {
    console.log('greet from person');
  },
};

console.log(person.firstName);
console.log(person['lastName']);
const key = 'year';
console.log(person[key]);
person.hasWife = true;
person.isProgrammer = true;
console.log(person);

person.greet();

const checkPassword = password => {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  console.log(message);
  return message;
};
checkPassword('mangohackzor');
checkPassword(null);
checkPassword('polyhax');
checkPassword('jqueryismyjam');

// ternary operator and switch
const name = 'John';
const ageUser = 16;

//ageUser >= 18 ? console.log(name + ' drinks beer.') : console.log(name + ' drinks juice.');
ageUser >= 18 ? console.log(`${name} drinks beer.`) : console.log(`${name} drinks juice.`);

//
const age = 20;
switch (true) {
  case age < 13:
    console.log(name + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(name + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(name + ' is a young man.');
    break;
  default:
    console.log(name + ' is a man.');
    break;
}

//
const drink = age > 18 ? 'beer' : 'juice';
console.log(drink);

//
const job = 'teacher';

//pass in the value we want to test
switch (job) {
  case 'teacher':
    // (case 'instructor':) //also will work
    console.log('teaches kids how to code.');
    break;
  case 'driver':
    console.log('drives car in the city.');
    break;
  case 'designer':
    console.log('design pretty website');
    break;
  default:
    console.log('does something else');
}

//
const number = prompt('Hello, enter please the number between  0 and 59');

const answerNum = Number(parseInt(number));

const quoter = Math.ceil(answerNum / 15);

switch (true) {
  case Number.isNaN(answerNum):
    alert(`Please, enter valid value - number from 1 to 59`);
    break;
  case answerNum > 59 || answerNum < 0:
    alert(`The ${answerNum} is outside 0 and 59`);
    break;
  default:
    switch (quoter) {
      case 1:
        console.log(`Number ${answerNum} refers to 1 quarters`);
        break;
      case 2:
        console.log(`Number ${answerNum} refers to 2 quarters`);
        break;
      case 3:
        console.log(`Number ${answerNum} refers to 3 quarters`);
        break;
      case 4:
        console.log(`Number ${answerNum} refers to 4 quarters`);
        break;
      default:
        console.log(`The ${answerNum} is outside 0 and 59`);
        break;
    }
}
