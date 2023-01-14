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
