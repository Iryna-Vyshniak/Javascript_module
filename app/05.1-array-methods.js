// forEach => likes loop for..for
/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 
 * - element by element iterates over the original array
 * - Returns nothing
 * - Replaces the classic for if you don't need to break the loop
 *
 */
const numbers = [5, 10, 15, 20, 25];

numbers.forEach(number => {
  console.log('number', number);
  // number 5
  // number 10
  // number 15
  // number 20
  // number 25
});

console.log(numbers); // [5, 10, 15, 20, 25]

numbers.forEach(number => {
  console.log('number', number * 2);
  // number 10
  // number 20
  // number 30
  // number 40
  // number 50
});

console.log(numbers); // [5, 10, 15, 20, 25]

const newNumbers = numbers.forEach(number => {
  console.log('number', number * 2);
  // number 10
  // number 20
  // number 30
  // number 40
  // number 50
  return number * 2; // undefined
});

console.log(numbers); // [5, 10, 15, 20, 25]
console.log(newNumbers); // undefined

const numbersArr = [5, 10, 15, 20, 25];

//=============================================================================================
/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 
 * - element by element iterates over the original array
 * - Does not change the original array
 * - Returns a new array of the same length
 *
 */

const doubledNums = numbersArr.map(number => {
  return number * 3;
});

console.log('numbers', numbersArr); // [5, 10, 15, 20, 25]
console.log('doubledNums', doubledNums); // [15, 30, 45, 60, 75]

//task 2
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// get an array of names of all players
const playerNames = players.map(player => player.name);
console.log('playerNames', playerNames); // ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Chelsy']

const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds); // ['player-1', 'player-2', 'player-3', 'player-4', 'player-5']

const res = players.map(({ name, online }) => ({ name, online }));
console.log('res', res);
// {name: 'Mango', online: false}
// {name: 'Poly', online: true}
// {name: 'Kiwi', online: true}
// {name: 'Ajax', online: false}
// {name: 'Chelsy', online: true}

// increase the number of points of each player by 10%
const upatedPlayers = players.map(player => ({
  ...player,
  points: Number((player.points * 1.1).toFixed()),
}));
console.table(upatedPlayers);
// (index)  id       name    timePlayed points  online
// 0	'player-1'	'Mango'	  310 	     59	     false
// 1	'player-2'	'Poly'	  470 	     101	 true
// 2	'player-3'	'Kiwi'	  230 	     53	     true
// 3	'player-4'	'Ajax'	  150 	     78	     false
// 4	'player-5'	'Chelsy'  80	     53	     true

//Increasing the number of player hours by id
const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id ? { ...player, timePlayed: player.timePlayed + 100 } : player
);

console.log(updatedPlayers);
// {id: 'player-1', name: 'Mango',  timePlayed: 310, points: 54, online: false}
// {id: 'player-2', name: 'Poly',   timePlayed: 470, points: 92, online: true}
// {id: 'player-3', name: 'Kiwi',   timePlayed: 330, points: 48, online: true}
// {id: 'player-4', name: 'Ajax',   timePlayed: 150, points: 71, online: false}
// {id: 'player-5', name: 'Chelsy', timePlayed: 80,  points: 48, online: true}

//==============================================================================================
/*
 * Array.prototype.filter()
- Поелементо перебирає оригінальний масив
 * - Повертає новий масив (з елементами або порожнім)
 * - Додає в повертається масив елементи, які задовольняють умові коллбек-функції: 
 * - якщо коллбек повернув true елемент додається в масив, що повертається
 * - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 
* - element by element iterates over the original array
 * - Returns a new array (with elements or empty)
 * - Adds elements to the returned array that satisfy the condition of the callback function
 * - if the callback returned true the element is added to the returned array
 * - if the callback returned false the element is NOT added to the returned array
 */

const simpleNumbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

const playersSocks = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Get an array of all online players
 */

const onlinePlayers = players.filter(({ online }) => online);
// const onlinePlayers = players.filter(player.online => player.online);
console.log(onlinePlayers);
// {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true}
// {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true}
// {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true}

/*
 * Get an array of all offline players
 */

// const offlinePlayers = players.filter(player => !player.online);
const offlinePlayers = players.filter(({ online }) => !online);
console.log(offlinePlayers);
// {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false}
// {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false}

/*
 * Get a list of hardcore players with time over 250
 */

const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
console.table(hardcorePlayers);
// {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false}
// {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true}

// ==============================================================================================
/*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 
 * - element by element iterates over the original array
 * - Returns the first element that satisfies the condition or is undefined
 */

const allNums = [5, 10, 15, 20, 25];

const number = allNums.find(number => number === 10);
console.log(allNums); //[5, 10, 15, 20, 25]
console.log(number); // 10

const playersSocers = [
  { id: 'player-1', name: 'Roberto', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Mersi', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Pele', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Zigun', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * find player by id
 */
const playerIdToFind = 'player-3';
// const playerWithId = playersSocers.find(player => player.id === playerIdToFind);
const playerWithId = playersSocers.find(({ id }) => id === playerIdToFind);
console.log(playerWithId); //{ id: 'player-3', name: 'Pele', timePlayed: 230, points: 48, online: true },

const finPlayerById = (allPlayer, playerId) => allPlayer.find(({ id }) => id === playerId);

console.log(finPlayerById(players, 'player-1')); // { id: 'player-1', name: 'Roberto', timePlayed: 310, points: 54, online: false },
console.log(finPlayerById(players, 'player-6')); // undefined

/*
 * find player by name
 */
const playerNameToFind = 'Pele';
const playerWithName = players.find(({ name }) => name === playerNameToFind);
console.log(playerWithName); //{id: 'player-2', name: 'Pele', timePlayed: 470, points: 92, online: true}

const findPlayerWithName = (allPlayers, playerName) =>
  allPlayers.find(({ name }) => name === playerName);
findPlayerWithName(players, 'Chelsy');
console.log(findPlayerWithName(players, 'Chelsy'));
//{id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true}
console.log(findPlayerWithName(players, 'Roberts'));
//undefined

//================================================================================================
/*
 * Array.prototype.every()
 * - Поелементо перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умові
 *
 * - element by element iterates over the original array
 * - Returns true if all elements of the array satisfy the condition
 */

//1
// const isAllOnline = players.every(player => player.online);
const isAllOnline = players.every(({ online }) => online);
console.log('isAllOnline: ', isAllOnline); // false

//2
const isBelowThreshold = currentValue => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

//3
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

//short arrow fn
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true

//===============================================================================================
/*
 * Array.prototype.some()
 * - Поелементо перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 *
 * - element by element iterates over the original array
 * - Returns true if at least one element of the array satisfies the condition
 */

//1
// const isAnyOnline = players.some(player => player.online);
const isAnyOnline = players.some(({ online }) => online);
console.log('isAnyOnline: ', isAnyOnline); // true

//2
// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
const anyHardcorePlayers = players.some(({ timePlayed }) => timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers); // true
const anyHardcorePlayersA = players.some(({ timePlayed }) => timePlayed > 600);
console.log('anyHardcorePlayers: ', anyHardcorePlayersA); // false

//3
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = element => element % 2 === 0;
console.log(array.some(even)); //true, because 4 % 2 === 0

const twin = array.some(item => item % 2 === 0);
console.log(twin); // true, because 4 % 2 === 0

//4
[2, 5, 8, 1, 4].some(elem => elem > 10); // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true, because 12 > 10

// likes includes()
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');
console.log(checkAvailability(fruits, 'kela')); // false
checkAvailability(fruits, 'banana');
console.log(checkAvailability(fruits, 'banana')); // true

const checkAvailabilities = (arr, val) => arr.some(arrVal => val === arrVal);
console.log(checkAvailabilities(fruits, 'kela')); // false
console.log(checkAvailabilities(fruits, 'banana')); // true

//Casting a Value to a Boolean Type
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }
  return TRUTHY_VALUES.some(t => t === value);
}

getBoolean(false);
console.log(getBoolean(false)); // false
getBoolean('false');
console.log(getBoolean('false')); // false
getBoolean(1);
console.log(getBoolean(1)); // true
getBoolean('true');
console.log(getBoolean('true')); // true

// arrow fn
const getBooleanValue = value =>
  typeof value === 'string'
    ? (value = value.toLowerCase().trim())
    : TRUTHY_VALUES.some(item => item === value);

getBooleanValue(false);
console.log(getBooleanValue(false)); // false
getBooleanValue('false');
console.log(getBooleanValue('false')); // false
getBooleanValue(1);
console.log(getBooleanValue(1)); // true
getBoolean('field');
console.log(getBooleanValue('field')); // field

// ==============================================================================================
/*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає будь-що 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 
 * - element by element iterates over the original array
 * - Returns anything 🤯
 * - Replaces everything in the world, but you need to use it wisely
 */

//1
[0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}); // 10  => (0+1)=>(1+2)=>(3+3)=>(6+4) = 10

// 2
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10); // 20 => (10+0)=>(10+1)=>(11+2)=>(13+3)=>(16+4) = 20

// 3
const allNumbers = [5, 10, 15, 20, 25];

const total = allNumbers.reduce((acc, number) => acc + number, 0);
console.log(total); // 75

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25 => 75

// 4  consider the total salary

const salary = {
  teacher: 100,
  cooker: 50,
  secretary: 150,
};

const totalSalary = Object.values(salary).reduce((acc, salary) => salary + acc, 0);
console.log(totalSalary); // 300

// 5 Summing values ​​in an array of objects
const initialValue = 0;
const arrOfObjects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum = arrOfObjects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);

console.log(sum); // 6

//6 Expanding an array of arrays => Розгортання масиву масивів

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((previousArray, currentArray) => previousArray.concat(currentArray));

console.log(flattened); // [0, 1, 2, 3, 4, 5]

// 7 concatenating arrays contained in array objects using spread operator and initialValue

// friends - list of objects (friends)
// where the "books" field is a list of friend's favorite books
const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 },
];

// allbooks - list, which will contain all friends books +
// additional list specified in initialValue
const allbooks = friends.reduce(
  (previousFriend, currentFriend) => [...previousFriend, ...currentFriend.books],
  ['Alphabet']
);

console.log(allbooks);
// ["Alphabet", "Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

// 8 Count the total number of hours
const totalTimePlayed = players.reduce((totalTime, { timePlayed }) => totalTime + timePlayed, 0);
console.log(totalTimePlayed); // 1240

// 9 calculate the total amount of goods in the basket
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (totalAmount, { price, quantity }) => totalAmount + price * quantity,
  0
);
console.log(totalAmount); // 840

// 10 Collecting all tags from tweets
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags); //['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css']

// 11 Maintain tag statistics
// if there is a property with the tag key, increase its value by 1
// if there is no property with the same key as in tag, make and write 1

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

console.log(tagsStats); //{js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// ==========================================================================================
/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та ЗМІНЯЄ оригінальний масив
 * - За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 *
 * - Sort and MODIFY the original array
 * - Default:
 * - sorts in ascending order
 * - casts elements to a string and sorts by [Unicode](https://unicode-table.com/en/)
 */

const primeNumbers = [1, 9, 6, 2, 3];
primeNumbers.sort();
console.log('numbers', primeNumbers); // [1, 2, 3, 6, 9]

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters); // ['A', 'B', 'a', 'b']

/*
 * compareFunction - comparison function (callback)
 * Array elements are sorted according to its return value
 * - if compareFunction(A, B) is less than 0, sort will put A before B
 * - if compareFunction(A, B) is greater than 0, sort will put B before A
 * - if compareFunction(A, B) returns 0,
sorting will leave A and B unchanged with respect to each other, but will sort them with respect to all other elements.
 */

primeNumbers.sort((currentEl, nextEl) => nextEl - currentEl);

console.log(primeNumbers); // [9, 6, 3, 2, 1]

/*
 * Як зробити копію масиву щоб не сортувати оригінальний
 * - Array.prototype.slice()
 * - Операцiя ...spread
 */

const descSortedNumbers = [...primeNumbers].sort((a, b) => b - a); // [9, 6, 3, 2, 1]
const ascSortedNumbers = [...primeNumbers].sort((a, b) => a - b); // [1, 2, 3, 6, 9]
console.log('descSortedNumbers', descSortedNumbers);
console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомне сортування складних типів
 */

// By game time
const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers); // 470, 310, 230, 150, 80

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers); // 80, 150, 230, 310, ...

// by players` name
const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName); // A, C, K, M, P

// refactor
const byNames = [...players].sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));
console.table(byNames); // A, C, K, M, P

// ============================================================================================
/*
 * Array.prototype.flat(depth)
 * - Розгладжує масив до вказаної глибини
 * - За замовчуванням глибина 1
    Метод flat() повертає новий масив, в якому всі елементи вкладених підмасивів були рекурсивно підняті на вказаний рівень depth.

    Синтаксис
    const newArray = arr.flat(depth);
 
 * - Flattens the array to the specified depth
 * - Default depth 1
 */

// 1
const insertedArrays = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(insertedArrays.flat(3)); // [1, 2, 4, 5, 6, 7, 8, 9]

//2
const arr1 = [1, 2, [3, 4]];
const arr1A = arr1.flat();
console.log(arr1); // [1, 2, [3, 4]];
console.log(arr1A); // [1, 2, 3, 4]

//3
const arr2 = [1, 2, [3, 4, [5, 6]]];
const arr2A = arr2.flat();
const arr2AB = arr2.flat(2);
console.log(arr2); // [1, 2, [3, 4, [5, 6]]];
console.log(arr2A); // [1, 2, 3, 4, [5, 6]]
console.log(arr2AB); // [1, 2, 3, 4, 5, 6]

//4
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arr4A = arr4.flat(Infinity);
console.log(arr4); //[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4A); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Alternatives reduce and concat
const arr = [1, 2, [3, 4]];
const flatArr = arr.flat();
console.log(flatArr); //[1, 2, 3, 4]

// reduce
const reduceArr = arr.reduce((acc, val) => acc.concat(val), []);
console.log(arr); // [1, 2, [3, 4]];
console.log(reduceArr); //[1, 2, 3, 4]

// concat, ...spread
const flatSingle = arr => [].concat(...arr);
console.log(arr); // [1, 2, [3, 4]];
console.log(flatSingle(arr)); //  [1, 2, 3, 4]

//Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.
function max(...args) {
  const numbers = args.flat(Infinity).map(num => Number(num));

  if (!numbers.length) return 0;
  if (numbers.includes(NaN)) return NaN;

  const max = numbers.reduce((num1, num2) => (num1 > num2 ? num1 : num2));
  console.log(max);
  return max;
}

max(1, 2, 3, 4); // 4
max(1, 2, 3, ['4']); // 4; note it returned 4 not '4'
max(1, 2, [3, 4]); // 4
max(1, 2, [3, [4]]); // 4
max(1, 2, [3, ['4r']]); // NaN
max([[], [-4]]); //  -4
max(); // 0
max([]); // 0

function min() {
  const arr = [...arguments].toString().split(',').map(Number);
  const nan = arr.some(el => Number.isNaN(el));
  if (!nan) {
    arr.sort((a, b) => a - b);
    return arr[0];
  }
  return NaN;
}
