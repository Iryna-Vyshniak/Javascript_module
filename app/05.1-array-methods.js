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
