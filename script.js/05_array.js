const cars = ['Mazda', 'Ford', 'BMW', 'Porshe'];
console.log(cars.length);
// 4
cars[cars.length];

//  Method
cars.push('Toyota');
cars.unshift('Volvo');
// cars.pop();
// cars.shift();

const firstCar = cars.shift();
const lastCar = cars.pop();

// reverse
cars.reverse();

// task 1
const text = 'Hi, we`re learning JS';
const reverseText = text.split('').reverse().join('');
console.log(reverseText);
// SJ gninrael er`ew ,iH

// task 2 Finf element BMW & change
// indexOf() => use with primitive type
const carsIndex = cars.indexOf('BMW');
cars[carsIndex] = 'Reno';
console.log(cars);

// find() => use with objects, arrays
const people = [
  { name: 'Andrew', budget: 30567 },
  { name: 'Valik', budget: 42780 },
  { name: 'Nick', budget: 42450 },
];
// find person with budget 42780
// v1
const personFind = people.find(person => person.budget === 42780);
console.log(personFind);
// {name: 'Valik', budget: 42780}

// v2
let findPerson;
for (let person of people) {
  if (person.budget === 42780) {
    findPerson = person;
  }
}
console.log(findPerson);
//{name: 'Valik', budget: 42780}

// includes()
cars.includes('W');

// МЕТОДЫ ВЫСОКОГО ПОРЯДКА
const upperCaseCars = cars.map(car => car.toUpperCase());
console.log(upperCaseCars);
// (4) ['PORSHE', 'RENO', 'FORD', 'MAZDA']

const fib = [1, 1, 2, 3, 5, 8, 13];
const pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2);
console.log(pow2Fib);
// (7) [1, 1, 4, 9, 25, 64, 169]

const sqrt = num => Math.sqrt(num);
const numFib = fib.map(pow2).map(sqrt);
console.log(numFib);
// (7) [1, 1, 2, 3, 5, 8, 13]

// filter => new array, for <= === =>
const filteredNum = pow2Fib.filter(num => num > 20);
console.log(filteredNum);
// (3) [25, 64, 169]

// reduce
const persons = [
  { name: 'Andrew', budget: 30567 },
  { name: 'Valik', budget: 42780 },
  { name: 'Nick', budget: 42450 },
];

const allBudget = persons.reduce((acc, person) => {
  acc += person.budget;
  return acc;
}, 0);
console.log(allBudget);
// 115797

const someBudget = persons.reduce((acc, person) => {
  if (person.budget > 40000) {
    acc += person.budget;
  }
  return acc;
}, 0);

console.log(someBudget);
// 85230

// declaration method
// short & true
const filterBudget = persons
  .filter(person => person.budget > 40000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(filterBudget);
// 85230

const displayItems = allItems.filter(item => item.name.contains('phone'));
// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

console.table(cards);

// Удаление (по индексу), метод indexOf()
const cardToRemove = 'Карточка-3';
const indexCard = cards.indexOf(cardToRemove);
console.log(indexCard);

cards.splice(indexCard, 1);

console.table(cards);

// Добавление (по индексу)
const cardToInsert = 'Карточка-6';
const indexCardToInsert = 3;

cards.splice(indexCardToInsert, 0, cardToInsert);
console.table(cards);

//Обновление (по индексу)
const cardToUpdate = 'Карточка-4';
const indexCardToUpdate = cards.indexOf(cardToUpdate);
console.log(indexCardToUpdate);
cards.splice(indexCardToUpdate, 1, 'Обновленная карточка-4');
console.table(cards);

// суммa элементов двух массивов.
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
  total += number;
}

console.log(total);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
// variant 1
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// variant 2
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);

/*
 * замена регистра каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнет регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  const isEqual = letter === letter.toLowerCase();

  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

const stringFriends = friends.join(',');
console.log(friends);
console.log(stringFriends);

// Должно получиться 'Mango,Poly,Kiwi,Ajax'

/*
 * поиск самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);
