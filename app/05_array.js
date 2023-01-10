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

// const displayItems = allItems.filter(item => item.name.contains('phone'));
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

const numbersAll = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbersAll[0];

for (const number of numbersAll) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let newArr = [];
  let positiveNumber = 0;
  let negativeNumber = 0;

  // Validate Input
  if (input === null || input.length === 0) return newArr;

  // Loop through array of Numbers
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0) continue;
    // Count positives
    else if (input[i] > 0) positiveNumber++;
    // Sum negatives
    else if (input[i] < 0) negativeNumber += input[i];
  }

  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);

  return newArr;
}

// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.
// Приклади:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = str => {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

console.log(camelize('index-phone-number'));

// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
// Функція повинна повертати новий масив і не змінювати вихідний.
// Наприклад:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (відфільтровані значення)
// alert( arr ); // 5,3,8,1 (не змінюється)

const filterRange = (arr, a, b) => {
  let filtered = arr.filter(index => index >= a && index <= b);
  return filtered;
};

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(arr); // 5,3,8,1 (не змінюється)
console.log(filtered); // 3,1 (відфільтровані значення)

// Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
// Функція повинна змінювати поточний масив і нічого не повертати.
// Наприклад:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4
// alert( arr ); // [3, 1]

const filterRangeInPlace = (array, a, b) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < a || array[i] > b) {
      array.splice(i, 1);
      i -= 1;
    }
  }
};

let array = [5, 3, 8, 1];
filterRangeInPlace(array, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4
console.log(array); // [3, 1]

// array genres with elements jazz and blues
const genres = ['Jazz', 'Blues'];
console.log(genres);

console.log(genres[0]);
console.log(genres[genres.length - 1]);

genres.shift();
console.log(genres);

genres.unshift('Country', 'Reggae');
console.log(genres); // ['Jazz', 'Blues', 'Country']

//square

const values = '8 11';
const sidesArray = values.split(' ');
console.log(sidesArray);
const square = sidesArray[0] * sidesArray[1];
console.log(square); //88

// for ... of

const fruits = ['apple', 'grapes', 'lemon', 'mango'];
for (const fruit of fruits) {
  const index = fruits.indexOf(fruit) + 1;

  console.log(`${index}: ${fruit}`);
  // 1: apple
  // 2: grapes
  // 3: lemon
  // 4: mango
}

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}: ${fruits[i]}`);
  // 1: apple
  // 2: grapes
  // 3: lemon
  // 4: mango
}

// name and phone
const name = 'Jacobs, William, Solomon, Artemis';
const phones = '89095453464, 89034353454, 8904324354353, 890074392732';

const arrName = name.split(',');
const arrPhone = phones.split(',');
console.log(arrName); //['Jacobs', ' William', ' Solomon', ' Artemis']

for (let i = 0; i < arrName.length; i += 1) {
  console.log(`${arrName[i]}: ${arrPhone[i]}`); //Jacobs: 89095453464
}

// reverse string without  reverse()
function getReverseString(str) {
  const strSplit = str.split('');
  let result = [];

  for (const char of strSplit) {
    result.unshift(char);
  }
  const reverseStr = result.join('');
  console.log(reverseStr);
  return reverseStr;
}

getReverseString('welcome to the future'); // erutuf eht ot emoclew
getReverseString('JS is awesome!'); // !emosewa si SJ

function getStringOfReverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  console.log(result);
  return result;
}

getStringOfReverse('welcome to the future'); // erutuf eht ot emoclew
getStringOfReverse('JS is awesome!'); //!emosewa si SJ

function getReverseStr(str) {
  let arrStr = str.split('');
  let reverseStr = [];

  for (let i = arrStr.length - 1; i >= 0; i -= 1) {
    reverseStr.push(arrStr[i]);
  }
  const result = reverseStr.join('');
  console.log(result);
  return result;
}

getReverseStr('welcome to the future'); // erutuf eht ot emoclew
getReverseStr('JS is awesome!'); // erutuf eht ot emoclew

function reverseOfString(str) {
  console.log(str.split('').reverse().join(''));
  return str.split('').reverse().join('');
}

reverseOfString('welcome to the future'); // erutuf eht ot emoclew
reverseOfString('JS is awesome!'); // !emosewa si SJ

// min number
function getMinNum(num) {
  return Math.min(...num);
}

console.log(getMinNum([10, 45, 67, 8])); //8
console.log(getMinNum([101, 455, 6724, 8676])); //101

function getSmallestNum(numbers) {
  let smallestNumber = numbers[0];

  for (const num of numbers) {
    if (num < smallestNumber) {
      smallestNumber = num;
    }
  }
  console.log('smallestNumber: ', smallestNumber);
  return smallestNumber;
}

getSmallestNum([51, 18, 13, 24, 7, 85, 19]); // smallestNumber:  7
getSmallestNum([101, 455, 6724, 8676]); // smallestNumber:  101

//write a function that takes a String and returns an Array/list with the length of each word added to each element .Note: String will have at least one element; words will always be separated by a space.
function addLength(str) {
  const words = str.split(' ');
  console.log(words);
  const res = [];

  for (let word of words) {
    word += ` ${word.length}`;
    console.log(word);
    res.push(word);
  }
  console.log(res);
  return res;
}

addLength('apple ban'); //["apple 5", "ban 3"]
addLength('you will win'); // ["you 3", "will 4", "win 3"]

//next variant
function addWordLength(str) {
  return str.split(' ').map(word => word + ` ${word.length}`);
}

console.log(addWordLength('apple ban')); //["apple 5", "ban 3"]
console.log(addWordLength('you will win')); // ["you 3", "will 4", "win 3"]

//next variant
function addWordsLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}

console.log(addWordsLength('apple ban')); //["apple 5", "ban 3"]
console.log(addWordsLength('you will win')); // ["you 3", "will 4", "win 3"]

// Create a function called args_count that returns the number of arguments provided

const args_count = (...args) => args.length;

args_count(1, 2); // 2;
args_count(); // 0
args_count('A', 'B', 'C'); // 3;
args_count(['foo', 'bar']); // 1

//Write a function that returns both the minimum and maximum number of the given list/array.

const minMax = arr => [Math.min(...arr), Math.max(...arr)];
// const max = Math.max(...arr);
// const min = Math.min(...arr);
// const minmax = [min, max];
// console.log(minmax);
// return minmax;

console.log(minMax([1, 2, 3, 4, 5]));
// [1,5]
minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]); // [5,2334454]
minMax([1]); // [1,1]

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
const invert = array => array.map(i => i * -1);

console.log(invert([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]
console.log(invert([])); // []
console.log(invert([0])); // [-0]

//find longest word
const stringSimple = 'The brown fox jumps over lazy dog';

function findLongestWord(string) {
  const words = string.split(' ');
  console.log(words); //['The', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

  let longestWord = words[0];
  console.log(longestWord); // the

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(stringSimple)); //brown
