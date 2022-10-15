// 1 Функции
// Function Declaration
function greet(name) {
  console.log('Welcome - ', name);
}

// Function Expression
const greet2 = function greet2(name) {
  console.log('Greeting - ', name);
};

greet('Valik');
greet2('Ielisei');

console.log(typeof greet);
console.dir(greet);

// 2 Анонимные функции
let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval); // clearTimeout
  } else {
    console.log(++counter);
  }
}, 1000);

// 3 Стрелочные функции
function greet() {
  console.log('Aloha - ');
}

const arrow = (name, age) => {
  console.log('Hello - ', name, age);
};

const arrow2 = name => console.log('Welcome - ', name);

// arrow2('Andrew')

const pow2 = num => num ** 2;

// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b;

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5);
console.log(res);

// 5 Замыкания -из одной функции возвращаем другую функцию
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember('Andrew');
console.log(logWithLastName(' Glagolev')); /* Andrew Glagolev */
console.log(logWithLastName(' Vyshniak')); /* Andrew Vyshniak */

//
let nameUa = 'Іван';

function sayHi() {
  alert('Привіт, ' + nameUa);
}

nameUa = 'Петро';

sayHi(); // що вона покаже "Іван" чи "Петро"?
//Відповідь: Петро.
// Функція отримує зовнішні змінні такими, якими вони є зараз, тобто вона використовує останні значення.
// Старі значення змінних ніде не зберігаються. Коли функція потребує змінної, вона бере поточне значення зі свого власного або зовнішнього лексичного середовища.

//
function makeWorker() {
  let name1 = 'Петро';

  return function () {
    alert(name1);
  };
}

let name1 = 'Іван';

// створити функцію
let work = makeWorker();

// викликати її
work(); // Що вона покаже?
// Відповідь: Петро.

// Функція work() в коді нижче отримує name від місця його походження через посилання на зовнішнє лексичне середовище:
//Але якби не було let name у makeWorker(), тоді пошук вийшов би за межі лексичного середовища та взяв би глобальну змінну, як ми бачимо з ланцюжка вище. В такому випадку відповідь була б "Іван".

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1()); // 0
alert(counter1()); // 1

alert(counter2()); // 0
alert(counter2()); // 1

// Функції counter і counter2 створюються різними викликами makeCounter.
// Отже, вони мають незалежні зовнішні лексичні середовища, кожне з яких має свою власну змінну count.

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter();

alert(counter3.up()); // 1
alert(counter3.up()); // 2
alert(counter3.down()); // 1
// Обидві вкладені функції створюються в межах єдиного зовнішнього лексичного середовища, тому вони мають спільний доступ до однієї змінної count.

// У нас є вбудований для масивів метод arr.filter(f). Він фільтрує всі елементи через функцію f. Якщо вона повертає true, цей елемент повертається в отриманому масиві.

// Зробіть набір “готових до використання” фільтрів:

// inBetween(a, b) – фільтрує елементи які більше a та менше b. Також має включати елементи, які дорівнюють їм.
// inArray([...]) – фільтрує елементи, які включено у заданий масив.
// Використання має бути таким:

// arr.filter(inBetween(3,6)) – вибирає лише значення від 3 до 6.
// arr.filter(inArray([1,2,3])) – вибирає лише елементи, які включені у масив [1,2,3].
// Наприклад:

/* .. ваш код для inBetween та inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
// Фільтр inBetween
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// Фільтр inArray
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
alert(arr2.filter(inArray([1, 2, 10]))); // 1,2
