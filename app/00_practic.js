// function Parent(counts) {
//   let counter = counts;
//   return () => {
//     console.log(counter);

//     counter--;
//     console.log(`counts left ${counter}`);
//   };
// }
// const counters = Parent(5);

// counters();
// counters();
// counters();

// 2
// let counter = 5;
// function child() {
//   console.log(counter);
//   counter--;
//   console.log(`counts left ${counter}`);
// }

// function parent(childFunc) {
//   childFunc(counter);
// }

// parent(child);
// parent(child);

// 3
// const numbers = [1, 2, 3, 4, 5];
// const callBack1 = el => el > 3;
// const callBack2 = el => el % 2;

// numbers.filterCustom = function (callback) {
//   const filteredItems = [];
//   for (let i = 0; i < this.length; i += 1) {
//     /* i < numbers.length */
//     const shouldBeAdded = callback(this[i], i, this);
//     if (shouldBeAdded) {
//       filteredItems[filteredItems.length] = this[i];
//     }
//   }
//   return filteredItems;
// };

// console.log(numbers.filter(callBack1));
// console.log(numbers.filterCustom(callBack1));

console.log(1);

const drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i += 1) {
    console.log(i + '=^.^=');
  }
};

drawCats(5);

const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);
const hoursInADay = 24;
const secInADay = secondsInAnHour * hoursInADay;
console.log(secInADay);
const daysInAYear = 365;
const secInAYear = secInADay * daysInAYear;
console.log(secInAYear);
const age = 27;
const secInAge = age * secInAYear;
console.log(secInAge);

const codeWord1 = 'обернись';
const codeWord2 = 'неужели';
const codeWord3 = 'огурцы';
const codeWord4 = 'липкие';
const codeWord5 = '?!';
const code = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(code);

const sliceStr = 'string'.slice(1, 5);
console.log(sliceStr);

const sillyString = 'эЙ, кАК деЛа?';
const lowerString = sillyString.toLowerCase();
console.log(lowerString);
const firstLetter = lowerString.slice(0, 1);
console.log(firstLetter);
const bigLetter = firstLetter.toUpperCase();
console.log(bigLetter);
const normalString = bigLetter + lowerString.slice(1);
console.log(normalString);

const normString = lowerString[0].toUpperCase() + lowerString.slice(1);
console.log(normString);

const normalPhrase = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
console.log(normalPhrase);

/*
const data = prompt('How many percent?');
console.log(data); //15%
const toNumber = Number.parseInt(data);
console.log(toNumber); // 15
const isNumberNaN = Number.isNaN(toNumber);
console.log(isNumberNaN); //false
*/

const randomNum = Math.random() * (20 - 10) + 10;
console.log(randomNum); // 14.2343434545t4
const randomNum1 = Math.random() * (50 - 10) + 10;
console.log(Math.ceil(randomNum1)); // 21
