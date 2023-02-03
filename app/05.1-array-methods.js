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

//
function logItems(items) {
  console.log(items); // ['🍎', '🍇', '🍑', '🍌', '🍋']

  items.forEach((item, index) => console.log(`${index + 1}: ${item}`));

  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
}

logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// 1: 🍎
// 2: 🍇
// 3: 🍑
// 4: 🍌
// 5: 🍋
logItems(['Mango', 'Poly', 'Ajax']);

//
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  // nameList.forEach((name, i) => {
  //console.log(`${name}: ${phoneList[i]}`); //Jacob: 89001234567

  //or
  // name нам не потрібен, але він обовязковий пишемо: _,
  nameList.forEach((_, i) => {
    console.log(`${nameList[i]}: ${phoneList[i]}`); //Jacob: 89001234567
  });

  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// ```

// .forEach(callback(currentValue, index, array), thisArg) - 2 аргумента: колбек та об'єкт thisArg, в контексті якого буде викликатися цей колбек

// forEach - не змінює оришінальний масивю. Коли хочемо змінити його - використовуємо array та index

// numbers.forEach((num, index, array) => (array[index] = 12));
// console.log(numbers); // [12, 12, 12, 12, 12]

// arrow function
numbers.forEach(
  number => {
    console.log('number: ', number);
    console.log('number this: ', this);
  },
  { a: 5, b: 6 }
);
console.log(numbers);
// number:  5
// number this:  undefined
// number:  10
// number this:  undefined
// number:  15
// number this:  undefined
// number:  20
// number this:  undefined
// number:  25
// number this:  undefined

// function declaration
numbers.forEach(
  function (number) {
    console.log('number: ', number);
    console.log('number this: ', this);
  },
  { a: 5, b: 6 }
);
console.log(numbers);
// number:  5
// number this:  {a: 5, b: 6}
// number:  10
// number this:  {a: 5, b: 6}
// number:  15
// number this:  {a: 5, b: 6}
// number:  20
// number this:  {a: 5, b: 6}
// number:  25
// number this:  {a: 5, b: 6}

//
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

//
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(arr => {
    if (secondArray.includes(arr)) {
      commonElements.push(arr);
    }
  });
  return commonElements;
}

//
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};

//
const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
  // Індекс 0, значення 5
  // Індекс 1, значення 10
  // Індекс 2, значення 15
  // Індекс 3, значення 20
  // Індекс 4, значення 25
};

numbersArr.forEach(logMessage);

//
const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbersA = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbersA, 2);

// Мутація вихідних даних не відбулася
console.log(numbersA); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//
function changeEven(numbers, value) {
  const newArray = [];
  numbers.forEach(number =>
    !(number % 2) ? newArray.push((number += value)) : newArray.push(number)
  );
  return newArray;
}

changeEven([1, 2, 3, 4, 5], 10); //[1, 12, 3, 14, 5]

function exchangeEven(numbers, value) {
  const newArray = [];
  numbers.forEach(number =>
    !(number % 2) ? newArray.push((number += value)) : newArray.push(number)
  );
  return newArray;
}
exchangeEven([1, 2, 3, 4, 5], 10); //[1, 12, 3, 14, 5]

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
// 1	'player-2'	'Poly'	  470 	     101	   true
// 2	'player-3'	'Kiwi'	  230 	     53	     true
// 3	'player-4'	'Ajax'	  150 	     78	     false
// 4	'player-5'	'Chelsy'  80	       53	     true

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

//
const allPlanets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsInUpperCase = allPlanets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = allPlanets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
console.log(allPlanets); // ["Earth", "Mars", "Venus", "Jupiter"]

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsLengths = planets.map(planet => planet.length);

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
console.log(filteredNumbers); //[5, 25]

//
const evenNumbers = numbers.filter(num => !(num % 2));
const oddNumbers = numbers.filter(num => num % 2);
console.log(evenNumbers); // [10, 20]
console.log(oddNumbers); // [5, 15, 25]

// function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(bird => !geese.includes(bird));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

//
const playersSocks = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentsA = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const best = studentsA.filter(student => student.score >= HIGH_SCORE);
console.log(best);
// {name: 'Mango', score: 83}
// {name: 'Kiwi', score: 94}

const worst = studentsA.filter(student => student.score < LOW_SCORE);
console.log(worst); //{name: 'Ajax', score: 37}

const average = studentsA.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
console.log(average);
//{name: 'Poly', score: 59}
//{name: 'Houston', score: 64}

const booksA = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = booksA.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = booksA.filter(({ author }) => author === AUTHOR);
console.log(topRatedBooks);
// {title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38}
// {title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51}
// {title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67}
console.log(booksByAuthor);
// {title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38}
// {title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67}

//
const people = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));
getUsersWithFriend(people, 'Briana Decker');
console.log(getUsersWithFriend(people, 'Briana Decker'));

//
const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter(({ age }) => minAge <= age && age <= maxAge);
getUsersWithAge(people, 18, 36);
console.log(getUsersWithAge(people, 18, 36)); //

//
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
getUsersWithEyeColor(people, 'blue');

//
const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);
  return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
};
getFriends(people);

//
const getActiveUsers = users => users.filter(user => user.isActive);
// const getActiveUsers = users => users.filter(({ isActive }) => isActive);

//

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

//
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.find(option => option.label === 'blue'); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find(option => option.label === 'pink'); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find(option => option.label === 'white'); // undefined

//
const booksB = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR_BOOK = 'Robert Sheckley';

const bookWithTitle = booksB.find(book => book.title === BOOK_TITLE);
const bookByAuthor = booksB.find(book => book.author === AUTHOR);

//
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(people, 'blackburndotson@furnigeer.com')); //
// {name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: Array(2), isActive: false, …}

//
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

//
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(el => !(el % 2));
const eachElementInFirstIsOdd = firstArray.every(el => el % 2);

const eachElementInSecondIsEven = secondArray.every(el => !(el % 2));
const eachElementInSecondIsOdd = secondArray.every(el => el % 2);

const eachElementInThirdIsEven = thirdArray.every(el => !(el % 2));
const eachElementInThirdIsOdd = thirdArray.every(el => el % 2);

//
const isEveryUserActive = users => users.every(user => user.isActive);
console.log(isEveryUserActive(people)); // false
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

//5
const anyElementInFirstIsEven = firstArray.some(el => !(el % 2));
const anyElementInFirstIsOdd = firstArray.some(el => el % 2);

const anyElementInSecondIsEven = secondArray.some(el => !(el % 2));
const anyElementInSecondIsOdd = secondArray.some(el => el % 2);

const anyElementInThirdIsEven = thirdArray.some(el => !(el % 2));
const anyElementInThirdIsOdd = thirdArray.some(el => el % 2);

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

  массив.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);


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

// 11
const totalS = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(totalS); // 32

//12 отримати середній бал.
const studentsB = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const totalScore = studentsB.reduce((total, student) => {
  return total + student.score;
}, 0);
const averageScore = totalScore / studentsB.length;

//13
const playersA = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((acc, time) => acc + time);
const averagePlayTime = totalPlayTime / playtimes.length;

//14
const playersC = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = playersC.reduce(
  (acc, { playtime, gamesPlayed }) => acc + playtime / gamesPlayed,
  0
);

//15
const amountTotalBalance = users => users.reduce((acc, { balance }) => acc + balance, 0);
console.log(amountTotalBalance(people)); // 20916

//16
// const getTotalFriendCount = users => users.reduce((allFriends, user) => allFriends + user.friends.length, 0);
const getTotalFriendCount = users => users.reduce((acc, { friends }) => acc + friends.length, 0);
console.log(getTotalFriendCount(people)); // 14

//=========================================================================================================
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

//
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

//

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

//
const releaseDatesA = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDatesA = [...releaseDates].sort((current, next) => current - next); // up
const descendingReleaseDatesA = [...releaseDates].sort((current, next) => next - current); //down

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

// масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends)
const sortByDescendingFriendCount = users =>
  [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);

// масив користувачів, відсортований за зростанням їх балансу
const sortByAscendingBalance = users =>
  users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
console.log(sortByAscendingBalance(people));

//масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.
const sortByName = users =>
  [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));

//

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

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// firstString.localeCompare(secondString)
// localeCompare
const authorsB = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
const authorsInAlphabetOrder = [...authorsB].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authorsB].sort((a, b) => b.localeCompare(a));

//localeCompare
const studentsD = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = [...studentsD].sort((a, b) => a.localeCompare(b)); // UP
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...studentsD].sort((a, b) => b.localeCompare(a)); // DOWN
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

//
const booksAB = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const sortedByAuthorName = [...booksAB].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...booksAB].sort((firstAuthor, secondAuthor) =>
  secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...booksAB].sort(
  (firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating
);

const sortedByDescentingRating = [...booksAB].sort(
  (firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating
);

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

// find total balance users
//
const usersTweeter = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const calculateTotalBalance = users => {
  const mapUser = users.map(({ balance }) => balance);
  console.log(mapUser);
  const res = mapUser.reduce((total, balance) => total + balance, 0);
  return res;
};
calculateTotalBalance(usersTweeter);

console.log(calculateTotalBalance(usersTweeter)); // 20916

const calcTotalBalance = users =>
  users.map(({ balance }) => balance).reduce((total, balance) => total + balance, 0);
calcTotalBalance(usersTweeter);
console.log(calcTotalBalance(usersTweeter)); // 20916

const sumTotalBalance = users => users.reduce((total, { balance }) => total + balance, 0);
console.log(sumTotalBalance(usersTweeter)); // 20916

//===============================================================================================
/*
 * Array.prototype.flatMap(callback)
    flatMap(function (element, index, array)

 * - Комбiнацiя map + flat
 * - спочатку застосовує функцію для кожного елемента, а потім перетворює отриманий результат в плоску структуру і поміщає в новий масив.Значення, що повертається - Новий масив, кожен елемент якого є результатом виконання функції callback та "піднятий" на рівень 1.
 
     const new_array = arr.flatMap(function callback(currentValue[, index[, array]]) { ... }[, thisArg])

 * - returns a new array formed by applying a given callback function to each element of the array
 * - flattening the result by one level.
 * - It is identical to a map() followed by a flat()
 */

//1
const arr3 = [1, 2, [3], [4, 5], 6, []];

const flattenedArr = arr3.flatMap(num => num);
console.log(flattenedArr);
[1, 2, 3, 4, 5, 6];

//Pre-allocate and explicitly iterate - Попередньо виділити та явно повторити
const arrC = [1, 2, 3, 4];
const arrFlatMap = arrC.flatMap(x => [x, x * 2]);
console.log(arrC); //  [1, 2, 3, 4]
console.log(arrFlatMap); // [1, 2, 2, 4, 3, 6, 4, 8]

// is equivalent to
const n = arrC.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i += 1) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}

//2
let arrCA = [1, 2, 3, 4];
const arrCB = arrCA.map(x => [x * 2]);
console.log(arrCB); // [[2], [4], [6], [8]]

const arrCBA = arrCA.flatMap(x => [x * 2]);
console.log(arrCBA); // [2, 4, 6, 8]

// 2.1 Alternative Solution use reduce and concat
const arrReduce = arrCA.reduce((acc, x) => acc.concat([x * 2]), []);
console.log(arrReduce); // [2, 4, 6, 8]

// вирівнюється лише один рівень
const arrCCA = arrCA.flatMap(x => [[x * 2]]);
console.log(arrCCA); // [[2], [4], [6], [8]]

//3
let arrD = ["it's Sunny in", '', 'California'];

const arrMap = arrD.map(x => x.split(' '));
console.log(arrMap); // [["it's","Sunny","in"],[""],["California"]]

const flatMapArr = arrD.flatMap(x => x.split(' '));
console.log(flatMapArr); // ["it's","Sunny","in", "", "California"]

// 4 get string from arrays
const getStringFromArrays = arr => arr.flatMap(item => item.split(' ')).join(' ');
getStringFromArrays(arrD);
console.log(getStringFromArrays(arrD)); // it's Sunny in  California

//5
const tweetsUsers = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const tags = tweetsUsers.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

const stats = tweetsUsers
  .flatMap(tweet => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

console.log(stats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// unique
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];

const allGenres = books.flatMap(book => book.genres);
console.log(allGenres); //  ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
console.log(uniqueGenres); // ['adventure', 'history', 'fiction', 'mysticism', 'horror']

//const allGenres = books.flatMap(book => book.genres);
const unique = new Set(allGenres);
const unigueCourse = [...unique];
console.log(unigueCourse); // ['adventure', 'history', 'fiction', 'mysticism', 'horror']

//
const genres = books.flatMap(book => book.genres);
//
const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// ===================================================================================================================
// CHAINING
// функція getNamesSortedByFriendCount(users) повертає масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((user1, user2) => (user1.friends.length = user2.friends.length))
    .map(user => user.name);

getNamesSortedByFriendCount(people);
console.log(getNamesSortedByFriendCount(people));

// повернути масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
const getSortedFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));

console.log(getSortedFriends(people)); //['Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Padilla Garrison', 'Sharron Pace']

//повернути загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

const usersF = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getTotalBalanceByGender = (users, gender) =>
  users.filter(user => user.gender === gender).reduce((acc, { balance }) => acc + balance, 0);

console.log(getTotalBalanceByGender(usersF, 'male')); // 12053
console.log(getTotalBalanceByGender(usersF, 'female')); // 8863

//--------------------- TASK FOR REDUCE -----------------------------------

const ages = [2, 10, 12, 4, 6];

const totalAge = ages.reduce((total, age) => {
  return total + age;
}, 0);

console.log(totalAge); // 34

//--------------------------------------------------------------------------

const result = [
  { name: 'James', score: 41 },
  { name: 'Mattew', score: 59 },
  { name: 'Judith', score: 36 },
  { name: 'John', score: 90 },
  { name: 'Mark', score: 64 },
];

function getReduce(arr) {
  let initialValue = {
    pass: [],
    fail: [],
  };

  return arr.reduce((total, item) => {
    const score = item.score;
    if (score >= 50) {
      total.pass.push(item);
    } else {
      total.fail.push(item);
    }

    return total;
  }, initialValue);
}
getReduce(result);
console.log(getReduce(result));
// {fail: [{name: 'James', score: 41},{ name: 'Judith', score: 36 }]
// pass: [{name: 'Mattew', score: 59},{ name: 'John', score: 90 }, { name: 'Mark', score: 64 }]}

// ----------------------------------------------------------------------------------------
//Grouping objects by a property
// Based on the properties of an object, we can group the object array into several groups using the reduce() method.

const studentsDRN = [
  { name: 'lawrence', age: 32 },
  { name: 'james', age: 22 },
  { name: 'loveth', age: 16 },
  { name: 'james', age: 42 },
];

function getGroupStudents(arr) {
  return arr.reduce((groupedStudents, person) => {
    const { name } = person;
    if (groupedStudents[name] == null) {
      groupedStudents[name] = [];
    }

    groupedStudents[name].push(person);
    return groupedStudents;
  }, {});
}

getGroupStudents(studentsDRN);

console.log(getGroupStudents(studentsDRN));
//{lawrence: [{name: 'lawrence', age: 32}], james: [{name: 'james', age: 22}, {name: 'james', age: 42}], loveth: [{name: 'loveth', age: 16}]}

// ---------------------------------------------------------------------------------------------
//Flatten a List of Arrays
// Flattening an array simply means breaking or transforming nested arrays into a single array. And the reduce() method can be used to accomplish that task

const twoDimArry = [
  ['james', 'mark', 'becky', 'great'],
  ['adam', 'ben', 'bright'],
  ['sarah', 'lisa'],
];

const flattenedArry = arr => arr.reduce((acc, currentArray) => acc.concat(currentArray));

console.log(flattenedArry(twoDimArry)); //['james', 'mark', 'becky', 'great', 'adam', 'ben', 'bright', 'sarah', 'lisa']

//---------------------------------------------------------------------------------
// Remove duplicates in an array. The reduce() method can also be used to remove duplicate values in an array

const duplicatedsArr = [
  'rice',
  'beans',
  'plantain',
  'yam',
  'rice',
  'egg',
  'beans',
  'meat',
  'beef',
  'rice',
];

const removeDuplicatedArr = arr => {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

console.log(removeDuplicatedArr(duplicatedsArr));

// ['rice', 'beans', 'plantain', 'yam', 'egg', 'meat', 'beef'];

// task blended
// Напишіть фукцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів і рядок з назвою каменю.
// Функція обчислює і повертає загальну вартість каменів з таким іменем
const stones = [
  { name: 'emerald', price: 1300, quantity: 4 },
  { name: 'diamond', price: 2700, quantity: 6 },
  { name: 'sapphire', price: 400, quantity: 7 },
  { name: 'rubble', price: 150, quantity: 100 },
];

const calcTotalPriceStones = (arr, stonesName) => {
  const nameStone = arr.find(item => item.name.toLowerCase() === stonesName.toLowerCase());
  return nameStone ? nameStone.price * nameStone.quantity : `Didn't find ${stonesName} stone`;
};

console.log(calcTotalPriceStones(stones, 'emerald')); // 5200

//Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами a та b
//sum() перевіряє чи присутні  властивості a/b та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості a/b та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями
// Number.isNaN(); - НЕ примусово перетворює до числа
// isNaN(); ПРИМУСОВО ПРЕРЕТВОРЮЄ ДО ЧИСЛА

const string = 'abc';
console.log(Number.isNaN(string)); // false
console.log(isNaN(string)); // true
//check undefind or null or number: ?? if left (a) undefind or null - then will not go further (next, forward) a ?? b, but better check isNaN

const arrFind = [{ name: 'name' }];
const calculator = {
  read(a = 0, b = 0) {
    console.log('a', a, 'b', b);
    if (!isNaN(a) && !isNaN(b)) {
      this.a = Number(a);
      this.b = Number(b);
    } else {
      return null;
    }
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

console.log(calculator.read(12, 10));
console.log(calculator.sum()); // 22
console.log(calculator.mult()); // 120
console.log(
  calculator.read(
    12,
    arrFind.find(({ name }) => name === 'Artem')
  )
);
console.log(arrFind.find(({ name }) => name === 'Artem')); // undefind

// task
//Напишіть функцію updateObject, яка приймає об'єкт та ключ і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}
// Updates an object with the given values.
const updateObject = function (object, removeKey) {
  const obj = {};
  Object.keys(object).forEach(key => {
    if (key !== removeKey) {
      obj[key] = object[key];
    }
  });
  return obj;
};

console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b')); // {a: 1, c: 3}

//next variant of function update
const updateObjectX = (object, removeKey) =>
  Object.keys(object).reduce(
    (acc, key) => (key !== removeKey ? { ...acc, [key]: object[key] } : acc),
    {}
  );

console.log(updateObjectX({ a: 1, b: 2, c: 3 }, 'b')); // {a: 1, c: 3}
console.log(updateObjectX({ a: 1, b: 2, c: 3 }, 'a')); // {b: 2, c: 3}

// find sum age
const allFriends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 14 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
  {
    name: 'Oleksii',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
    age: 26,
  },
];

const findSumAge = arr =>
  arr.reduce((acc, item) => (item.hasOwnProperty('age') ? acc + item.age : acc), 0);

console.log(findSumAge(allFriends)); // 66

// ------------------------------------------------------------------

// Get a list of unique books
const getUniqueBooks = arr =>
  arr.flatMap(item => item.books).filter((item, index, array) => array.indexOf(item) === index);

console.log(getUniqueBooks(allFriends)); // ['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet']

const getUniqueBooksList = arr =>
  arr
    .reduce((acc, { books }) => acc.concat(books), [])
    .filter((item, index, array) => array.indexOf(item) === index);

console.log(getUniqueBooksList(allFriends)); // ['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet']

const getUniqueBooksLists = arr =>
  arr
    .flatMap(item => item.books)
    .reduce((acc, book) => (!acc.includes(book) ? [...acc, book] : acc), []);

console.log(getUniqueBooksLists(allFriends)); // ['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet']

//-----------------------------------------------------------
// Get books lists by age.
const getBooksListsByAge = arr => {
  const booksByAge = {
    young: [],
    adult: [],
  };

  return arr.reduce((acc, item) => {
    if (item.hasOwnProperty('age')) {
      item.age >= 18 ? acc.adult.push(...item.books) : acc.young.push(...item.books);
    }
    return acc;
  }, booksByAge);
};

console.log(getBooksListsByAge(allFriends)); // {young: ['Bible', 'Harry Potter'], adult: ['War and peace', 'Romeo and Juliet', 'Bible', 'War and peace',...] }

// Get a list of unique books by age.
const getUniqueBooksListsByAge = arr => {
  const booksByAge = {
    young: [],
    adult: [],
  };

  arr.reduce((acc, item, index) => {
    if (item.hasOwnProperty('age')) {
      item.age >= 18
        ? acc.adult.push(...item.books)
        : acc.adult
        ? acc.young.push(item.books)
        : acc.young;
    }
    return acc;
  }, booksByAge);
  console.log('young: ', booksByAge.young); // ['Bible', 'Harry Potter'];
  console.log('adult: ', booksByAge.adult); // ['War and peace', 'Romeo and Juliet', 'Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet']

  // Creates a set of unique books for young  and adult.
  const uniqueYoung = new Set(booksByAge.young);
  booksByAge.young = [...uniqueYoung];
  const uniqueAdult = new Set(booksByAge.adult);
  booksByAge.adult = [...uniqueAdult];

  // Returns a list of unique books by age.
  return booksByAge;
};

console.log(getUniqueBooksListsByAge(allFriends));
// {young: ['Bible', 'Harry Potter'],
//  adult: ['War and peace', 'Romeo and Juliet', 'Bible', 'Harry Potter'] }

// --------------------------------------------------------------------------------------------------------------------
// refactor function to get a list of unique books by age.
const getUniqueBooksListsByAges = arr => {
  const booksByAge = {
    young: [],
    adult: [],
  };

  return arr.reduce((acc, item) => {
    if (item.hasOwnProperty('age')) {
      if (item.age >= 18) {
        acc.adult.push(...item.books);
        const uniqueAdult = new Set(acc.adult);
        acc.adult = [...uniqueAdult];
      } else {
        acc.young.push(...item.books);
        const uniqueYoung = new Set(acc.young);
        acc.young = [...uniqueYoung];
      }
    }
    return acc;
  }, booksByAge);
};

console.log(getUniqueBooksListsByAges(allFriends));
// {young: ['Bible', 'Harry Potter'],
//  adult: ['War and peace', 'Romeo and Juliet', 'Bible', 'Harry Potter'] }

const allCloseFriends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter', 'Horse in Fog'], age: 14 },
  { name: 'John', books: ['Bible', 'Harry Potter', 'Jungle', 'Horse in Fog'], age: 17 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 23 },
  { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
  {
    name: 'Alex',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet', 'Horse in Fog'],
    age: 26,
  },
];

// Get a list of unique books for all close friends.
console.log(getUniqueBooksListsByAges(allCloseFriends));
// {young: ['Bible', 'Harry Potter', 'Horse in Fog', 'Jungle'],
//  adult:['War and peace', 'Romeo and Juliet', 'Bible', 'Harry Potter', 'Horse in Fog'] }

//------------------------------------------------------------------------------------------------
//скільки типів кожного елемента знаходиться у колекції
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const countFruits = arr =>
  arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

console.log(countFruits(fruitBasket)); // {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}

//-----------------------------------------------------------------------------
// отримати всі кольори в змінній data
const data = [
  { a: 'happy', b: 'robin', c: ['blue', 'green'] },
  { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
  { a: 'sad', b: 'goldfish', c: ['green', 'red'] },
];

const getColours = arr => arr.map(item => item.c).reduce((acc, item) => acc.concat(item), []);

console.log(getColours(data)); //['blue', 'green', 'green', 'black', 'orange', 'blue', 'green', 'red']

// next variant
const getColours2 = arr =>
  arr.reduce((acc, item) => {
    item.c.map(color => acc.push(color));
    return acc;
  }, []);
console.log(getColours2(data)); //['blue', 'green', 'green', 'black', 'orange', 'blue', 'green', 'red']

//next variant with unique colors
const getColours3 = arr =>
  arr.reduce((acc, item) => {
    item.c.map(color => (acc.indexOf(color) === -1 ? acc.push(color) : acc));
    return acc;
  }, []);
console.log(getColours3(data)); //['blue', 'green', 'black', 'orange', 'red']

//-----------------------------------------------------------------------------
function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 2;
}

const pipeline = [increment, double, decrement];
const pipeline1 = [increment, double, decrement, halve];

const getPipeline = arr => arr.reduce((total, func) => func(total), 1);

console.log(getPipeline(pipeline)); // 3
console.log(getPipeline(pipeline1)); // 1.5
