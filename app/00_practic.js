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
const max = 100;
const min = 1;
const randomNum2 = Math.floor(Math.random() * (max - min) + min);
console.log(randomNum2); // 2

const word = 'superjavascript';
const substring1 = 'java';
console.log(word.indexOf(substring1)); //5,  begin from 5 position letter j
const substring2 = 'css';
console.log(word.indexOf(substring2)); //-1, doesn`t have
const word1 = 'banana';
console.log(word1.lastIndexOf('a')); // 5, last a
console.log(word1.indexOf('a')); // 1, first a
console.log(word1.lastIndexOf('n')); // 4, last a
const sentence = 'two tasty bananas';
console.log(sentence.indexOf(' ')); // 3, space in position 3
console.log(sentence.indexOf('tasty bananas')); //4

// replace()
const jsFileName = 'app.js';
const minJsFileName = jsFileName.replace('.js', '.min.js');
console.log(jsFileName); //app.js
console.log(minJsFileName); // app.min.js

//slice()
const word2 = 'amazingjavascript';
word2.slice(8, 10);
console.log(word2); // amazingjavascript
const word3 = word2.slice(7, 11);
console.log(word3); //java
console.log(word2.length); //17
console.log(word2.slice(0, word2.length)); //amazingjavascript, from 0 to 17, our word2 has 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 => 17
console.log(word2.slice(-6, -3)); //scr => from the last: -1,-2,-3,-4,-5,-6 to -3, but doesn`t include
console.log(word2.slice(0, word2.length - 2)); //amazingjavascri => whithout last 2 letter pt

// trim(), trimEnd(), trimStart()
console.log(word2.length); //17
const word4 = '  amazingjavascript  ';
console.log(word4.length); //21 with space
console.log(word4.trim().length); // 17 => delete space

// приведення типів
console.log(2 + 5 + '' + 1 + 0 - 10); //700
console.log(true + false); // 1
console.log(true + 'false'); //'truefalse'
console.log(true + ''); //'true'
console.log(true - 'false'); // NaN
console.log(7 / 0); //Infinity
console.log(!null); // true
console.log(!null + 1); // 2

// if else
// this code isn`t declarative
const num = 50;
num > 50 ? console.log('>') : num < 50 ? console.log('<') : console.log('==='); // ===

//switch... break
/*
const enteredNum = Number(prompt('enter a num between 0 and 3')); //3

switch (enteredNum) {
  case 0:
    console.log('You enetered 0');
    break;
  case 1:
    console.log('You enetered 1');
    break;
  case 2:
    console.log('You enetered 2');
    break;
  case 3:
    console.log('You enetered 3'); // You enetered 3
    break;
  default:
    console.log('You enetered another number');
}

*/

// loop
// while

let counter = 1;
while (counter <= 5) {
  console.log('counter', counter);
  counter += 1;
}
console.log('finish');

// do... while

/*
let inputNum;

do {
  console.log('here');
  inputNum = Number(prompt('input num, that bigger, then 100'));
} while (inputNum <= 100);

console.log(inputNum);
*/

// for...
let word5 = '';

for (let i = 0; i <= 5; i += 1) {
  console.log('previous str', word5);
  console.log(i);
  word5 += i;
  console.log('next str', word5);
}
console.log('final', word5);

let wordJS = 'javascript';
let nextWord = '';

for (let i = 0; i < wordJS.length; i += 1) {
  console.log('iteration', i + 1);
  console.log('previous str', wordJS[i]);
  let snowflakesWord = `${wordJS[i]}` + '*';
  nextWord += snowflakesWord;
  console.log('new str', nextWord);
} // j*a*v*a*s*c*r*i*p*t*

// or
for (let i = 0; i < wordJS.length - 5; i += 1) {
  let snowWord = `${wordJS[i]}*`;
  nextWord += snowWord;
  console.log(nextWord);
} // j*a*v*a*s*c*r*i*p*t*

const sentenceLoop = 'javascript is cool';
let newSentence = '';
console.log(sentenceLoop.length); //18

for (let i = 0; i < sentenceLoop.length; i += 1) {
  // console.log('iteration', i);
  // console.log(sentenceLoop[i]);
  newSentence += sentenceLoop[i];
  console.log(newSentence);
  if (newSentence === 'java') {
    console.log(newSentence);
    break;
  }
}
console.log(newSentence);

const num5 = 50;
const num6 = 60;

for (let i = num6; i >= num5; i -= 1) {
  console.log(i);
  const randomMath = Math.floor(Math.random() * (num6 - num5) + num5);
  console.log(randomMath);
  if (randomMath === 55) {
    console.log('Bingo');
    break;
  }
}

for (let i = 0; i <= 12; i += 1) {
  console.log('before', i);
  if (i / 3 === 4 || i / 2 === 5) {
    console.log(i);
    continue;
  }

  console.log('after', i);
}

// NaN
console.log(NaN / NaN); // NaN

/*
  ? Дано рядок 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
//
const test = 'Vasyl Pupkin is 24 years old';
console.log(test.indexOf(2)); // 16
console.log(test.indexOf('n')); //11

const ageTest = test.slice(16);
console.log(ageTest);
const nameTest = test.slice(0, 12);
console.log(nameTest);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;

const testStr = '24px';
const res = testStr.endsWith('px');
console.log(res);
switch (res) {
  case true:
    console.log('px');
    break;
  default:
    console.log('another');
}

//? У нас є рядок '23,4', замініть кому на крапку
const strNum = '23,4';
const res1 = strNum.replace(',', '.');
console.log(res1); // 23.4
const res2 = Number.parseFloat(strNum);
console.log(res1); // 23.4

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/

const sentc = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
const fullName = sentc.includes('JavaScript');
const shortName = sentc.includes('JS');
if (fullName) {
  const resFull = sentc.indexOf('JavaScript');
  console.log(resFull);
} else if (shortName) {
  const resShort = sentc.indexOf('JS');
  console.log(resShort);
} else {
  console.log('nothing');
}
