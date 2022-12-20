// function Parent(counts) {
//   let counter = counts;
//   return () => {
//     console.log(counter);

// const { func } = require('joi/lib');

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

//task
let productName = 'Droid';
let pricePerItem = 2000;

productName = 'Repair droid';
pricePerItem += 1500;
console.log(pricePerItem);

// task
const ageViewer = 11;
const accompanied = true;
if ((ageViewer >= 11 && accompanied) || ageViewer >= 12) {
  console.log('viewer may come');
} else {
  console.log('viewer may not come');
}

//task
const dinosaurs = [
  'Тираннозавр',
  'Велоцираптор',
  'Стегозавр',
  'Трицератопс',
  'Брахиозавр',
  'Птеранодон',
  'Апатозавр',
  'Диплодок',
  'Компсогнат',
];

dinosaurs[0] = 'Тираннозавр рекс';
console.log(dinosaurs);

const dinosaursAndNumbers = [3, 'динозавры', ['трицератопс', 'стегозавр', 3627.5], 10];

console.log(dinosaursAndNumbers[0]); //3
console.log(dinosaursAndNumbers[1]); //динозавры

console.log(dinosaursAndNumbers[2]); //['трицератопс', 'стегозавр', 3627.5]
console.log(dinosaursAndNumbers[2][0]); //трицератопс
console.log(dinosaursAndNumbers[2][2]); //3627.5

console.log(dinosaursAndNumbers[3]); //10

console.log(dinosaurs.length); //9

dinosaurs.push('Dino');
console.log(dinosaurs); //['Тираннозавр рекс', 'Велоцираптор', 'Стегозавр', 'Трицератопс', 'Брахиозавр', 'Птеранодон', 'Апатозавр', 'Диплодок', 'Компсогнат', 'Dino']

dinosaurs.unshift('Dinozacr');
console.log(dinosaurs); // ['Dinozacr', 'Тираннозавр рекс', 'Велоцираптор', 'Стегозавр', 'Трицератопс', 'Брахиозавр', 'Птеранодон', 'Апатозавр', 'Диплодок', 'Компсогнат', 'Dino']

const lastDinosaur = dinosaurs.pop();
console.log(lastDinosaur); //Dino
console.log(dinosaurs); //['Dinozacr', 'Тираннозавр рекс', 'Велоцираптор', 'Стегозавр', 'Трицератопс', 'Брахиозавр', 'Птеранодон', 'Апатозавр', 'Диплодок', 'Компсогнат']

const firstDinos = dinosaurs.shift();
console.log(firstDinos); //Dinozacr
console.log(dinosaurs); //['Тираннозавр рекс', 'Велоцираптор', 'Стегозавр', 'Трицератопс', 'Брахиозавр', 'Птеранодон', 'Апатозавр', 'Диплодок', 'Компсогнат']

dinosaurs.push(lastDinosaur);
console.log(dinosaurs); //['Тираннозавр рекс', 'Велоцираптор', 'Стегозавр', 'Трицератопс', 'Брахиозавр', 'Птеранодон', 'Апатозавр', 'Диплодок', 'Компсогнат', 'Dino']

//Random words
const randomWords = ['Lady', 'Miss', 'Queen', 'Witch'];
const randomIndex = Math.floor(Math.random() * 4);
const resRandom = randomWords[randomIndex];
console.log(resRandom); // Lady

// greeting
const today = new Date();
console.log(today);
const dayHour = today.getHours();
console.log(dayHour);
let greeting;

if (dayHour >= 11 && dayHour <= 17) {
  greeting = 'Good day! You`re welcome!';
  console.log(greeting);
} else if (dayHour >= 5 && dayHour <= 11) {
  greeting = 'Good morning! You`re welcome!';
  console.log(greeting);
} else if (dayHour >= 18 && dayHour <= 23) {
  greeting = 'Good evening! You`re welcome!';
  console.log(greeting);
} else {
  greeting = 'Hello! You`re welcome!';
  console.log(greeting);
}

const greetingBlock = document.querySelector('.greeting');

greetingBlock.innerHTML = `<p class='greeting-content'>${greeting} Do you want to know your fate?</p>`;

const greetingContent = document.querySelector('.greeting-content');
greetingContent.style = `
margin-bottom: 3vh;
margin-right: auto;
margin-left: auto;
padding-top: 10vh;
padding-right: 1vw;
padding-left: 1vw;
text-align: center;
font-size: 5vw;
color: #f1ebe5;
`;

// task
const bodyBg = document.querySelector('.js-body-bg');

const motivationPhrases = [
  'If you fall asleep now, you will dream. If you study now, you will live your dream',
  'When you think it’s too late, the truth is, it’s still early',
  'The pain of studying is only temporary. But the pain of not knowing – ignorance – is forever',
  'Studying is not about time. It’s about effort',
  'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
  'Enjoy the inexorable pain',
  'It’s those who are earlier than the others, those who put in more effort, who can enjoy the feeling of success',
  'Not everyone can truly succeed in everything. But success only comes with self-management and determination',
  'Time is flying',
  'The saliva that flows now will become the tears of joy tomorrow',
  'If you don’t walk today, you’ll have to run tomorrow',
  'People who invest in the future are realists',
  'The level of education is in direct correlation with your salary',
  'When today is over, it will never come back',
  'Even now, your enemies are eagerly flipping through books',
  'No pain, no gain',
];

console.log(motivationPhrases.length);

// const btnFate = document.createElement('button');

// btnFate.setAttribute('type', 'button');
// btnFate.textContent = 'Click me';

// console.log(btnFate);

greetingBlock.insertAdjacentHTML(
  'beforeend',
  /*html*/ `<button type='button' class='btn-fate'>Click me</button>`
);

const btnFate = document.querySelector('.btn-fate');
btnFate.style = `
position: relative;
display: flex;
align-items: center;
margin-bottom: 3vh;
margin-right: auto;
margin-left: auto;
padding: 0.5em;
width: calc((1vh + 1vw) * 2);
height: calc((1vh + 1vw) * 2);
border: none;
outline: none;
border-radius: 50%;
background-color: transparent;
transition: all 0.2s ease-in-out;
cursor: pointer;
font-size: calc((1vh + 1vw) * .5);
font-weight: 600;
`;

const soundBtn = document.querySelector('.sound-btn');
const audio = document.querySelector('.audio');
const cardFate = document.querySelector('.card-fate');

btnFate.addEventListener('click', createFate);

function ballOfFate() {
  return `<p>${motivationPhrases[Math.floor(Math.random() * motivationPhrases.length)]}</p>`;
}

function createFate() {
  bodyBg.classList.remove('js-body-bg');
  cardFate.classList.toggle('visually-hidden');
  randomBgColor();
  normalSpacing();
  cardFate.innerHTML = ballOfFate();
  audioPlay();
}

function randomBgColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let bgColor = `rgba(${r}, ${g}, ${b}, 0.3)`;
  document.body.style.backgroundColor = bgColor;
  const styleElem = document.head.appendChild(document.createElement('style'));
  //   styleElem.innerHTML = '.card-fate::before { background: rgba(106, 0, 255, 0.8);
  //   box - shadow: 0 0 5px rgba(106, 0, 255, 0.8), 0 0 15px rgba(106, 0, 255, 0.8),
  //     0 0 30px rgba(106, 0, 255, 0.8), 0px 0px 60px rgba(106, 0, 255, 0.8);
  // }';
  // let colorBgBeforeAfter = window
  //   .getComputedStyle(document.querySelector('.card-fate'), '::before')
  //   .getPropertyValue('background-color');
  // colorBgBeforeAfter = bgColor;
}

function normalSpacing() {
  greetingContent.style.letterSpacing = '0.1em';
}

function audioPlay() {
  soundBtn.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
}

soundBtn.addEventListener('click', audioPlay);

window.onfocus = function () {
  soundBtn.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

// check password
function isValidPassword(psw) {
  const VALID_PASSWORD = 'sfhdjsfhkdj374';
  const checkPsw = psw === VALID_PASSWORD;
  return checkPsw;
}

isValidPassword('fhdskhff687');

// check age
const checkAge = age => {
  let message;
  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  console.log(message);
  return message;
};

checkAge(18);
checkAge(14);

// checkStorage(available, ordered)
const checkStorage = (available, ordered) => {
  let message;
  if (available < ordered) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  console.log(message);
  return message;
};

checkStorage(100, 50);
checkStorage(100, 130);

// makeTransaction(pricePerDroid, orderedQuantity, customerCredits)

const makeTransaction = (pricePerDroid, orderedQuantity, customerCredits) => {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    const leftCredits = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${leftCredits} credits left`;
  }
  console.log(message);
  return message;
};
makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);

// checkPassword(password)
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

//checkStorage(available, ordered)
function checkStorages(available, ordered) {
  let message;
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  console.log(message);
  return message;
}
checkStorages(100, 50);
checkStorage(70, 0);

// check storages use early pattern
function checkKeeping(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
}

console.log(checkKeeping(100, 50));
console.log(checkKeeping(100, 130));
console.log(checkKeeping(70, 0));
console.log(checkKeeping(200, 20));
console.log(checkKeeping(200, 250));
console.log(checkKeeping(150, 0));

// isNumberInRange(start, end, number)
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  console.log(isInRange);
  return isInRange;
}
isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

// checkIfCanAccessContent(subType)
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  console.log(canAccessContent);
  return canAccessContent;
}

checkIfCanAccessContent('pro');
checkIfCanAccessContent('starter');
checkIfCanAccessContent('vip');
checkIfCanAccessContent('free');

// is number not in range(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;
  console.log(isNotInRange);
  return isNotInRange;
}

isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);

//get discount total spent - визначає значення знижки, залежно від загальної суми витрачених грошей  в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;

  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent <= 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent <= 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  console.log(discount);
  return discount;
}
getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);

//check storage
function checkingStorage(available, ordered) {
  let message;

  // available > ordered
  //   ? (message = 'The order is accepted, our manager will contact you')
  //   : (message = 'Not enough goods in stock!');
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  console.log(message);
  return message;
}

checkingStorage(100, 50);
checkingStorage(100, 130);

// use conditional operator => check password

function checkPsw(psw) {
  const ADMIN_PASSWORD = 'qwerty';
  let message;
  message = psw === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
  console.log(message);
  return message;
}
checkPsw('jqueryismyjam');
checkPsw('angul4r1sl1f3');
checkPsw('r3actsux');
checkPsw('qwerty');

// get subscription price(type) отримати рядок з типом передплати користувача (параметр type), перевірити її на збіг з трьома можливими типами щомісячної передплати та повернути ціну, що зберігається у змінній price.
function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case 'starter':
      price = 0;
      break;
    case 'professional':
      price = 20;
      break;
    case 'organization':
      price = 50;
      break;
  }
  console.log(price);
  return price;
}
getSubscriptionPrice('professional');
getSubscriptionPrice('organization');
getSubscriptionPrice('starter');

//check password(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message. Use "switch" statement

function checkPswd(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  console.log(message);
  return message;
}

checkPswd('mangohackzor');
checkPswd(null);
checkPswd('polyhax');
checkPswd('jqueryismyjam');

//get shipping cost(country) =>  перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Use "switch" statement

function getShippingCost(country) {
  let message;
  let price;
  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  console.log(message);
  return message;
}

getShippingCost('Australia');
getShippingCost('Germany');
getShippingCost('China');
getShippingCost('Chile');
getShippingCost('Jamaica');
getShippingCost('Sweden');

//get name length(name) => приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;
  return message;
}

//присвоїти оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.
const courseTopic = 'JavaScript essentials';
const courseTopicLength = courseTopic.length; //21
const firstElement = courseTopic[0]; //"J"
const lastElement = courseTopic[courseTopic.length - 1]; //'s';

//get substring => приймає рядок і повертає підрядок від початку і до length символів
function getSubstring(string, length) {
  const substring = string.slice(string, length);
  console.log(substring);
  return substring;
}
getSubstring('Hello world', 3);
getSubstring('Hello world', 6);
getSubstring('Hello world', 8);

// format message => приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.
function formatMessage(message, maxLength) {
  let result;
  result = message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;
  console.log(result);
  return result;
}

formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);

// normalize input => приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі.
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();
  console.log(normalizedInput);
  return normalizedInput;
}
normalizeInput('Hello world');
normalizeInput("This ISN'T SpaM");
normalizeInput('Big SALE');

//check for name => приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.
function checkForName(fullname, name) {
  const result = fullname.includes(name);
  console.log(result);
  return result;
}
checkForName('Egor Kolbasov', 'Egor');
checkForName('Egor Kolbasov', 'egor');
checkForName('Egor Kolbasov', 'egOr');
checkForName('Vadim Nekrasov', 'Vadim');

//check for spam => приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.
function checkForSpam(message) {
  let result;
  const normalizeMessage = message.toLowerCase();
  result = normalizeMessage.includes('spam') || normalizeMessage.includes('sale');

  console.log(result);
  return result;
}
checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');

// INCREMENT, DECREMENT
let a = 1,
  b = 1;

let c = ++a; // 2, префіксна форма повертає нове значення
let d = b++; // 1, постфіксна форма повертає старе значення

console.log(++a); // 3, префіксна форма повертає нове значення
console.log(b++); // 2, постфіксна форма повертає старе значення

console.log(a); // 3, збільшується один раз
console.log(b); // 3, збільшується один раз

//check user psw

function checkUser(userName) {
  let message;
  let psw;
  if (userName === 'admin' || userName === 'master') {
    psw = prompt('Enter psw');
    if (psw === 'boss') {
      message = 'Hello, Boss';
    } else {
      message = 'Wrong password';
    }
  } else {
    alert('I don`t know you');
  }
  console.log(message);
  return message;
}
//checkUser('admin');
//checkUser('user');
//checkUser('master');

// booking
function booking(stars) {
  let price;
  let message;

  if (stars === 1 || stars === 2) {
    price = 1500;
    message = `Price of this hotel is ${price}`;
  } else if (stars === 3 || stars === 4) {
    price = 3500;
    message = `Price of this hotel is ${price}`;
  } else if (stars === 5) {
    price = 7000;
    message = `Price of this hotel is ${price}`;
  } else {
    message = 'Didn`t find hotel with these stars';
  }
  console.log(message);
  return message;
}

booking(2);
booking(5);
booking(4);
booking(6);

// booking with use "switch" statement
function bookingStars(stars) {
  let price;
  let message;
  switch (stars) {
    case 1:
    case 2:
      price = 1500;
      message = `Price of this hotel is ${price}`;
      break;
    case 3:
    case 4:
      price = 3500;
      message = `Price of this hotel is ${price}`;
      break;
    case 5:
      price = 7000;
      message = `Price of this hotel is ${price}`;
      break;
    default:
      message = 'Didn`t find hotel with these stars';
  }
  console.log(message);
  return message;
}
bookingStars(3);
bookingStars(1);
bookingStars(5);
bookingStars(7);

// delivery
function delivery(options) {
  let message;
  switch (options) {
    case 1:
      message = `Take from the office`;
      break;
    case 2:
      message = `The courier will deliver`;
      break;
    case 3:
      message = `Sent to post`;
      break;
    default:
      message = `Our manager call you `;
  }
  console.log(message);
  return message;
}

delivery(1);
delivery(2);
delivery(3);
delivery(4);

// salary employers, where salary is random number from 500 to 5000; total salary

function totalSalary(numberEmployers) {
  let totalSalary = 0;
  const minSalary = 500;
  const maxSalary = 5000;
  for (let i = 1; i < numberEmployers; i += 1) {
    const salary = Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Salary of the ${i} employer:`, `${salary}$`);
    totalSalary += salary;
  }
  console.log('Total salary of employers:', `${totalSalary}$`);
  return totalSalary;
}
totalSalary(1);
totalSalary(2);
totalSalary(3);
totalSalary(5);

//the sum of all even numbers in the range

/*
function sumOfAllEvenNum(min, max) {
  let totalSum = 0;
  for (let i = min; i < max; i += 1) {
    if (i % 2 !== 0) {
      console.log(`${i} - isn't even number`);
    } else {
      console.log(`${i} - is even number`);
      totalSum += i;
    }
  }
  console.log(`Total sum of even numbers is ${totalSum}`);
  return totalSum;
}

*/

function sumOfAllEvenNum(min, max) {
  let totalSum = 0;
  for (let i = min; i < max; i += 1) {
    if (i % 2 !== 0) {
      console.log(`${i} - isn't even number`);
      continue;
    }
    console.log(`${i} - is even number`);
    totalSum += i;
  }
  console.log(`Total sum of even numbers is ${totalSum}`);
  return totalSum;
}

sumOfAllEvenNum(2, 24);
sumOfAllEvenNum(1, 3);
sumOfAllEvenNum(3, 7);

//We need a function that can transform a string into a number.
const stringToNumber = str => {
  const num = Number.parseInt(str);
  console.log(num);
  return num;
};
stringToNumber('1234px');
stringToNumber('-7rem');
stringToNumber('1405');

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2) {
  const isInLove =
    // (flower1 % 2 !== 0 && flower2 % 2 === 0) || (flower1 % 2 === 0 && flower2 % 2 !== 0)
    flower1 % 2 !== flower2 % 2 ? true : false;

  console.log(isInLove);
  return isInLove;
}
lovefunc(1, 4);
lovefunc(2, 2);
lovefunc(0, 1);
lovefunc(0, 0);

//function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  const repeat = s.repeat(n);
  console.log(repeat);
  return repeat;
}
repeatStr(3, '*');
repeatStr(5, '#');
repeatStr(2, 'ha ');

//reverses the string passed into it
function solution(str) {
  const reversesStr = str.split('').reverse().join('');
  console.log(reversesStr);
  return reversesStr;
}
solution('world');
solution('hello');
solution('fox');
solution('horror');

function solutions(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
  return reverseStr;
}
solutions('world');
solutions('goIt');

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr) {
  return arr.filter((el, i) => i % 2 === 0);
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }]));

function removeEveryOtherEl(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddArr.push(arr[i]);
  }
  console.log(oddArr);
  return oddArr;
}
removeEveryOtherEl(['Hello', 'Goodbye', 'Hello Again']);
removeEveryOtherEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeEveryOtherEl([[1, 2]]);
removeEveryOtherEl([['Goodbye'], { Great: 'Job' }]);

//to double the integer and return it.
function doubleInteger(i) {
  const double = i * 2;
  console.log(double);
  return double;
}

doubleInteger(2);
doubleInteger(4);

//return the additive inverse of each from the set of numbers. Each positive becomes negatives, and the negatives become positives
function invert(array) {
  const invertAdditive = array.map(arr => {
    if (Number.parseInt(arr) > 0) {
      return -Number.parseInt(arr);
    } else {
      return Number.parseInt(arr) * -1;
    }
  });
  console.log(invertAdditive);
  return invertAdditive;
}
invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);
invert([0]);

// use method Math.abs return the additive inverse of each from the set of numbers
const invertNum = array =>
  array.map(arr => {
    if (Number.parseInt(arr) >= 0) {
      return -Number.parseInt(arr);
    } else {
      return Math.abs(arr);
    }
  });

console.log(invertNum([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invertNum([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]
console.log(invertNum([0])); // [-0]

// next variant return the additive inverse of each from the set of numbers
function invertArr(array) {
  const invertAdditive = array.map(arr => -arr);
  console.log(invertAdditive);
  return invertAdditive;
}
invertArr([1, 2, 3, 4, 5]);
invertArr([1, -2, 3, -4, 5]);
invertArr([0]);

// next variant with for to return the additive inverse of each from the set of numbers
function invertArrNum(array) {
  let invertAdditive = [];
  for (let i = 0; i < array.length; i += 1) {
    invertAdditive.push(-array[i]);
  }
  console.log(invertAdditive);
  return invertAdditive;
}
invertArrNum([1, 2, 3, 4, 5]);
invertArrNum([1, -2, 3, -4, 5]);
invertArrNum([0]);

// next variant with for to return the additive inverse of each from the set of numbers
function invertNumber(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] *= -1;
  }
  console.log(array);
  return array;
}
invertNumber([1, 2, 3, 4, 5]);
invertNumber([1, -2, 3, -4, 5]);
invertNumber([0]);

//function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.
function abbrevName(name) {
  const arrName = name.toUpperCase().trim().split('');
  const dott = arrName.indexOf(' ');
  const abbrArr = arrName[0] + '.' + arrName.slice(dott, dott + 2);
  const result = abbrArr.replace(' ,', '');
  console.log(result);
  return result;
}
abbrevName('Sam Harris');
abbrevName('Patrick Feenan');
abbrevName('Evan Cole');

//next variant function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.
const abbrName = name =>
  name
    .toUpperCase()
    .trim()
    .split(' ')
    .map(index => index[0])
    .join('.');

console.log(abbrName('Sam Harris'));
console.log(abbrName('Patrick Feenan'));
console.log(abbrName('Evan Cole'));

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
/*
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

function howMuchILoveYou(nbPetals) {
  let message;
  let index;
  let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (let i = 0; i < nbPetals; i += 1) {
    index = i % petals.length;
  }
  message = petals[index];
  console.log(message);
  return message;
}
howMuchILoveYou(3); // a lot
howMuchILoveYou(6); // not at all
howMuchILoveYou(7); // I love you

//  next variant func to determine which phrase the girls would say at the last petal for a flower of a given number of petals
function howMuchILove(nbPetals) {
  let petals = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'];
  return petals[nbPetals % petals.length];
}

console.log(howMuchILove(3)); // a lot
console.log(howMuchILove(6)); // not at all
console.log(howMuchILove(7)); // I love you

// next variant
function howMuchLove(nbPetals) {
  let message = nbPetals % 6;

  switch (message) {
    case 0:
      return 'not at all';
    case 1:
      return 'I love you';
    case 2:
      return 'a little';
    case 3:
      return 'a lot';
    case 4:
      return 'passionately';
    case 5:
      return 'madly';

    default:
      return;
  }
}

console.log(howMuchLove(3)); // a lot
console.log(howMuchLove(6)); // not at all
console.log(howMuchLove(7)); // I love you

//array
const friends = ['Helen', 'John', 'Nick', 'Andrew'];
console.table(friends);

const lastIndex = friends.length - 1;
console.log(lastIndex);
for (let i = 0; i <= lastIndex; i += 1) {
  console.log(friends[i]);
  friends[i] += ' student';
  console.table(friends);
}

let aB = 10;
let bC = aB;
console.log(aB); // 10
console.log(bC); //10
aB = 20;
console.log(aB); // 20
console.log(bC); // 10;
const aBc = [1, 2, 3];
const bCd = aBc;
console.log(aBc); // [1, 2, 3]
console.log(bCd); // [1, 2, 3]
aBc[0] = 500;
console.log(aBc); // [500, 2, 3]
console.log(bCd); // [500, 2, 3]
console.log(aBc === bCd); // true
console.log([1, 2, 3] === [1, 2, 3]); // false

// total sum elements in loop through an array
const cart = [10, 23, 45, 678, 9456, 356];
let total = 0;
for (let i = 0; i <= cart.length - 1; i += 1) {
  total += cart[i];
}
console.log('Total sum:', total);

//the best variant use for..of
const cartShop = [10, 23, 45, 678, 9456, 356];
let totalSum = 0;
for (const goodPrice of cart) {
  totalSum += goodPrice;
}
console.log('Total sum:', totalSum);

// total sum all even elements in array

const numArr = [12, 345, 66, 88, 942, 53, 100];
let totalSumEvenNum = 0;
for (const num of numArr) {
  if (num % 2 !== 0) {
    console.log('It`s odd num: ', num);
    continue;
  }
  console.log('It`s even num: ', num);
  totalSumEvenNum += num;
}
console.log('Total sum all even num: ', totalSumEvenNum);

// find login
function loginToFind(loginFind) {
  const logins = ['farrid', 'jechr65', 'koss123', 'proxy777', 'fox345'];
  let message = `This login - isn't find login`;

  for (const login of logins) {
    console.log(`${login} === ${loginFind}: `, login === loginFind);

    if (login === loginFind) {
      message = `This login ${login} - find login`;
      break;
    }
  }
  console.log(message);
  return message;
}

loginToFind('proxy777');

// find login use declarative code
function toFindLogin(loginToFind) {
  const logins = ['farrid', 'jechr65', 'koss123', 'pro2011', 'proxy777', 'fox345'];
  let message = logins.includes(loginToFind)
    ? `This login ${loginToFind} - find login`
    : `This login ${loginToFind} - isn't find login`;

  console.log(message);
  return message;
}

toFindLogin('pro2011');

// to find login from logins
const loginToFindFromLogins = (allLogins, login) => {
  return allLogins.includes(login) ? `This ${login} found` : `This ${login} didn't find`;
};

const r1 = loginToFindFromLogins(
  ['farid23', '@swither', 'foxnews777', 'nickunknown', 'tory11'],
  'foxnews777'
);
console.log('r1:', r1);

// to find the smallest number

function smallNumToFind(numbers) {
  let smallestNum = numbers[0];

  for (const num of numbers) {
    if (num < smallestNum) {
      smallestNum = num;
    }
  }
  console.log(`The smallest number is ${smallestNum}`);
  return smallestNum;
}
smallNumToFind([51, 67, 45, 345, 87, 9005, 12]);
smallNumToFind([451, 787, 565, 345, 857, 910, 120]);
smallNumToFind([145, 637, 453, 345, 456, 9005, 124]);

// inverted string
function invertedString(phrase) {
  let letters = phrase.split('');
  let invertedString = '';
  for (const letter of letters) {
    if (letter === letter.toLowerCase()) {
      invertedString += letter.toUpperCase();
    } else {
      invertedString += letter.toLowerCase();
    }
  }
  console.log(invertedString);
  return invertedString;
}

invertedString('JavaScript');
invertedString('i LoVe YuO');
invertedString('hTML, css AND jAVAsCRIPT');

// refactor inverted string
function invertedPhrase(phrase) {
  let letters = phrase.split('');
  let invertedStr = '';

  for (const letter of letters) {
    invertedStr += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
  }
  console.log(invertedStr);
  return invertedStr;
}

invertedPhrase('hTML, css, sass AND jAVAsCRIPT');

// create slug from article title

function slugCreate(title) {
  const slug = title.toLowerCase().split(' ').join('-');
  console.log(slug);
  return slug;
}

slugCreate('Top 10 benefits of React framework'); //top-10-benefits-of-react-framework

// calculate total price

const calculateTotalPrice = items => {
  let total = 0;

  for (const item of items) {
    console.log(item);
    total += item;
  }
  console.log(total);
  return total;
};

calculateTotalPrice([1, 34, 789]); // 824

// find the biggest number
function biggestNumberToFind(...numbers) {
  let biggestNum = numbers[0];

  for (const num of numbers) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  console.log(biggestNum);
  return biggestNum;
}

biggestNumberToFind(105, 340, 56, 789); //789
biggestNumberToFind(10556, 34045, 56855, 789, 765); // 56855
biggestNumberToFind(7057, 7340, 756, 7789, 5674); // 7789
biggestNumberToFind(6105, 7340, 756, 4789, 87654, 567, 456, 908); //87654
biggestNumberToFind(8905, 434, 234456, 78789, 990987); // 990987

// check age
function checkAdult(age) {
  if (age >= 18) {
    return 'You are an adult';
  }
  return 'You are a minor';
}

console.log(checkAdult(18));
console.log(checkAdult(15));
console.log(checkAdult(28));

// check password use early pattern
function checkAdminPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
}

console.log(checkAdminPassword('mangohackzor'));
console.log(checkAdminPassword('polyhax'));
console.log(checkAdminPassword('jqueryismyjam'));

// redefinition of the value of elements with indexes
const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[fruits.length - 1] = 'banana';
console.log(fruits);

//
function getExtremeElements(array) {
  const firstEl = array[0];

  const lastEl = array[array.length - 1];

  const arrayFromTwoElements = [];
  arrayFromTwoElements.unshift(firstEl);

  arrayFromTwoElements.push(lastEl);

  console.log(arrayFromTwoElements);
  return arrayFromTwoElements;
}

getExtremeElements([1, 2, 3, 4, 5]); // [1, 5]
getExtremeElements(['Earth', 'Mars', 'Venus']); // ["Earth", "Venus"]
getExtremeElements(['apple', 'peach', 'pear', 'banana']); //["apple", "banana"]

// split message
function splitMessage(message, delimiter) {
  let words = [];
  return (words = message.split(delimiter));
}

console.log(splitMessage('Mango hurries to the train', ' ')); //["Mango", "hurries", "to", "the", "train"]
console.log(splitMessage('Mango', '')); //['M', 'a', 'n', 'g', 'o']
console.log(splitMessage('best_for_week', '_')); // ["best", "for", "week"]

//return the total cost of engraving all the words in the string
function calculateEngravingPrice(message, pricePerWord) {
  let totalPriceEngraving = 0;
  return (totalPriceEngraving = message.split(' ').length * pricePerWord);
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('Web-development is creative work', 20));

// return in the variable string the result of connecting the elements of the array - array with the separator delimiter: a string.
function makeStringFromArray(array, delimiter) {
  let string = '';
  return (string = array.join(delimiter));
}

console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

// func which takes the title of the article, the title parameter, and returns a slug created from that string.
function slugify(title) {
  let slug = title.toLowerCase().split(' ').join('-');
  return slug;
}
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

//to create a new array with all elements of the two original firstArray and secondArray
function makeArray(firstArray, secondArray, maxLength) {
  // const joinedArray = firstArray.concat(secondArray);
  // if (joinedArray.length > maxLength) {
  //   return joinedArray.slice(0, maxLength);
  // }
  // if (maxLength === 0) {
  //   return [];
  // }
  // return joinedArray;
  let newArray = firstArray.concat(secondArray).slice(0, maxLength);
  return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

//function, which accepts an integer (parameter number) and returns the sum of all integers from one to this number
function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }

  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));

//function, which accepts one order parameter - an array of numbers, and calculates the total sum of its elements
function calcTotalPrice(order) {
  let total = 0;

  for (let i = 0; i <= order.length - 1; i += 1) {
    total += order[i];
  }
  console.log(total);
  return total;
}
calcTotalPrice([12, 85, 37, 4]);

//function, which accepts an arbitrary string consisting only of words separated by a space (parameter string) and returns the longest word in this string
function findLongestWord(string) {
  let words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog'); // jumped
findLongestWord('Google do a roll'); // Google
findLongestWord('May the force be with you'); // force

//function return an array of all integers from min to max
function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  console.log(numbers);
  return numbers;
}
createArrayOfNumbers(1, 3); // [1, 2, 3]
createArrayOfNumbers(29, 34); // [29, 30, 31, 32, 33, 34]

// function, which accepts an array of numbers and returns a new array, which will contain only those elements of the array numbers that are greater than the value of the parameter value (number).

function filterArray(numbers, value) {
  let biggestNumbers = [];

  for (const num of numbers) {
    if (num > value) {
      biggestNumbers.push(num);
    }
  }
  console.log(biggestNumbers);
  return biggestNumbers;
}
filterArray([1, 2, 3, 4, 5], 3); //[4, 5]
filterArray([1, 2, 3, 4, 5], 4); // 5
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]

// check whether an element is present in the array, and its position (index) is not important
function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  // const fruitToFind = fruits.includes(fruit) ? true : false;
  // console.log(fruitToFind);
  // return fruitToFind;
  console.log(fruits.includes(fruit));
  return fruits.includes(fruit);
}
checkFruit('plum');
checkFruit('mandarin');
checkFruit('pear');
checkFruit('Pear');
checkFruit('apple');

//function, returns a new array consisting of those elements that are present in both original arrays
function getCommonElements(array1, array2) {
  let arrOfCommomElements = [];

  // for (let i = 0; i < array1.length; i += 1) {
  //   if (array2.includes(array1[i])) {
  //     arrOfCommomElements.push(array1[i]);
  //   }
  for (const item of array1) {
    if (array2.includes(item)) {
      arrOfCommomElements.push(item);
    }
  }
  console.log(arrOfCommomElements);
  return arrOfCommomElements;
}
getCommonElements([1, 2, 3], [2, 4]); // [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // [12, 27, 3]

//function to return an array of all even numbers from start to end.
function getEvenNumbers(start, end) {
  let arrEvenNum = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arrEvenNum.push(i);
    }
  }
  console.log(arrEvenNum);
  return arrEvenNum;
}
getEvenNumbers(2, 5); // [2, 4]
getEvenNumbers(3, 11); // [4, 6, 8, 10]
getEvenNumbers(6, 12); // [6, 8, 10, 12]

// function to return the first number from start to end, which is divided by the divisor without a remainder
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      console.log(i);
      return i;
    }
  }
}
findNumber(2, 6, 5); // 5
findNumber(8, 17, 3); // 9
findNumber(6, 9, 4); // 8
findNumber(16, 35, 7); // 21

// function to checks if value is present in array, returning true if present and false otherwise
function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3)); // true
console.log(includes([1, 2, 3, 4, 5], 17)); //false
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')); // true

// return animals respective ages
const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  let humansYearsCatYearsDogYears = [];

  for (let i = 1; i <= humanYears; i += 1) {
    switch (i) {
      case 1:
        catYears += 15;
        dogYears += 15;
        break;

      case 2:
        catYears += 9;
        dogYears += 9;
        break;

      default:
        catYears += 4;
        dogYears += 5;
      // catYears = 24 + (humanYears - 2) * 4;
      // dogYears = 24 + (humanYears - 2) * 5;
    }
  }
  humansYearsCatYearsDogYears.push(humanYears);
  humansYearsCatYearsDogYears.push(catYears);
  humansYearsCatYearsDogYears.push(dogYears);
  console.log(humansYearsCatYearsDogYears);
  return humansYearsCatYearsDogYears;
};

humanYearsCatYearsDogYears(1); //[1,15,15]
humanYearsCatYearsDogYears(2); // [2, 24, 24];
humanYearsCatYearsDogYears(10); // [10, 56, 64];

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(0));

//Create a function with two arguments that will return an array of the first n multiples of x.
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n * x; i += 1) {
    if (i % x === 0) {
      z.push(i);
    }
  }
  console.log(z);
  return z;
}

countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5); // [2,4,6,8,10]

//next variant
function countNumBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i += 1) {
    z.push(i * x);
  }
  console.log(z);
  return z;
}

countNumBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countNumBy(2, 5); // [2,4,6,8,10]

// func Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  }
  // if (
  //   (p1 === 'scissors' && p2 === 'rock') ||
  //   (p1 === 'paper' && p2 === 'scissors') ||
  //   (p1 === 'rock' && p2 === 'paper')
  // ) {
  return 'Player 2 won!';
  // }
};
console.log(rps('rock', 'rock'));
console.log(rps('rock', 'scissors'));

//function that counts the number of sheep present in the array (true means present)
function countSheeps(arrayOfSheep) {
  let total = 0;
  const presentSheep = true;
  for (const sheep of arrayOfSheep) {
    if (arrayOfSheep.includes(null || undefined || false || NaN)) {
      continue;
    }
    if (sheep === presentSheep) {
      total += sheep;
    }
  }
  console.log(Number(total));
  return `There are ${total} sheeps in total`;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
// next variant function that counts the number of sheep present in the array (true means present)
function countSheepsOnTheFarm(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(
  countSheepsOnTheFarm([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// function called calculate that takes 3 values
function calculate(num1, operation, num2) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2 || 0;
      break;
    case '/':
      result = num2 === 0 ? null : num1 / num2;
      break;
    default:
      result = null;
  }
  return result;
}

console.log(calculate(3.2, '+', 8));
console.log(calculate(3.2, '-', 8));
console.log(calculate(3.2, '/', 8));
console.log(calculate(3.2, '*', 8));
console.log(calculate(-3, '+', 0));
console.log(calculate(-3, '-', 0));
console.log(calculate(-3, '/', 0));
console.log(calculate(-3, '*', 0));
console.log(calculate(-3, 'w', 0));

// function that takes an array full of junk but containing one "needle"
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

console.log(
  findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])
);

//return true if the first argument(string) passed in ends with the 2nd argument (also a string).
const findEnds = (str, ending) => (str.endsWith(ending) ? true : false);

console.log(findEnds('abcde', 'cde'));
console.log(findEnds('abcde', 'abc'));
console.log(findEnds('abc', 'd'));
console.log(findEnds('abc', 'bc'));

// OBJECTS
const playlist = {
  name: 'My super playlist',
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  rating: 8,
  // trackCount: 4,
  getName: function () {
    console.log(`It's old school object method`);
  },
  getNames() {
    console.log(`It's modern school object method`);
  },
  changeName(newName) {
    this.name = newName;
  },
  showName() {
    console.log(this.name);
  },
  addTrack(track) {
    this.tracks.push(track);
    console.log(this.tracks); //['track-1', 'track-2', 'track-3', 'track-4', 'new track']
    // this.trackCount = this.tracks.length;
    // console.log(this.trackCount);
  },
  updateRating(newRating) {
    this.rating = newRating;
    console.log(this.rating); // 10
  },
  getTrackCount() {
    console.log('tracks: ', this.tracks.length); //tracks:  5
    return this.tracks.length;
  },
};

playlist.showName();
playlist.addTrack('new track');
playlist.updateRating(10);
playlist.getTrackCount();

console.log(playlist);
console.log(playlist.name); // 'My super playlist'
console.log(playlist['name']); // 'My super playlist'

const propertyName = 'tracks';
console.log(propertyName); // 'tracks'

console.log(playlist.propertyName); // undefined
console.log(playlist[propertyName]); //['track-1', 'track-2', 'track-3', 'track-4']

console.log(playlist['tracks']); // ['track-1', 'track-2', 'track-3', 'track-4']

playlist.favouriteSinger = 'King';
console.log(playlist); //{name: 'My super playlist', tracks: Array(4), rating: 8, trackCount: 4, favouriteSinger: 'King'}

playlist.changeName('Super amazing playlist');
console.log(playlist.name); // 'Super amazing playlist'
console.log(playlist); // {name: 'Super amazing playlist', tracks: Array(4), rating: 8, trackCount: 3, getName: ƒ, …}

playlist.showName();

//shortcase
const username = 'Avex777';
const email = 'avex777@gmail.com';

const signupData = {
  username: username,
  email: email,
};

console.log(signupData); // {username: 'Avex777', email: 'avex777@gmail.com'}

const signupDataShortcase = {
  username,
  email,
};

console.log(signupDataShortcase); // {username: 'Avex777', email: 'avex777@gmail.com'}

// <input name='color' value='tomato'>
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData); // {color: 'tomato'}

console.log({ a: 1 } === { a: 1 }); //false
const dE = { a: 1 };
const fJ = dE; // { a: 1 }

console.log(dE === fJ); // true

dE.b = 2;
console.log(dE); // {a: 1, b: 2}
console.log(fJ); // {a: 1, b: 2}

const hotel = {
  name: 'Fairmont',
  stars: 5,
  rating: 10,
  capacity: 1200,
  booking: 700,
  pool: true,
  gym: true,
  restourant: true,
  changeName(newName) {
    this.name = newName;
  },
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName();

hotel.changeName('Fairmont Grand Hotel');
console.log(hotel.name); // Fairmont Grand Hotel

hotel.changeCapacity(2000);
console.log(hotel.capacity); // 2000

// Object.keys

const feedback = {
  good: 123,
  neutral: 34,
  bad: 55,
};

function calculateFeedback(feedbacks) {
  let totalFeedback = 0;

  const allKeys = Object.keys(feedbacks);
  console.log('all keys: ', allKeys);

  for (const key of allKeys) {
    console.log('key: ', key);
    console.log('value: ', feedback[key]); // 123...
    totalFeedback += feedback[key];
  }
  console.log('Total feedback: ', totalFeedback); // 212
  return totalFeedback;
}

calculateFeedback(feedback);

// better variant to use Object.values, because we want to take only values

function sumFeedback(feedbacks) {
  let totalFeedback = 0;

  const allValues = Object.values(feedbacks);
  console.log('all values: ', allValues);

  for (const value of allValues) {
    console.log('value: ', value); // 123...
    totalFeedback += value;
  }
  console.log('Total feedback: ', totalFeedback); // 212
  return totalFeedback;
}

sumFeedback(feedback);

// find friend by name

const friendsByNetworks = [
  { name: 'Alex', online: true },
  { name: 'Andrew', online: true },
  { name: 'Antony', online: false },
  { name: 'Helen', online: true },
  { name: 'Nick', online: false },
  { name: 'Valentino', online: true },
];
console.table(friendsByNetworks);

for (const friend of friendsByNetworks) {
  console.log(friend);
  console.log(friend.name);
  friend.newprop = 555;
}

console.table(friendsByNetworks);

function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      console.log(`${friend.name} - find my close friend ${friendName}`);
      return `${friend.name} - find my close friend ${friendName}`;
    }
  }
  console.log(`oops, didn't find...`);
  return `oops, didn't find...`;
}

findFriendByName(friendsByNetworks, 'Valentino');
findFriendByName(friendsByNetworks, 'Roberto');
findFriendByName(friendsByNetworks, 'HOOKS');

const carList = [
  {
    Year: 2022,
    Make: 'Audi',
    Model: 'Q3',
    Category: 'SUV',
    status_free: true,
    color: 'Red',
  },
  {
    Year: 2021,
    Make: 'Chevrolet',
    Model: 'Malibu',
    Category: 'Sedan',
    status_free: false,
    color: 'Silver',
  },
  {
    Year: 2022,
    Make: 'Cadillac',
    Model: 'Escalade ESV',
    Category: 'SUV',
    status_free: false,
    color: 'Black',
  },
  {
    Year: 2020,
    Make: 'Chevrolet',
    Model: 'Corvette',
    Category: 'Coupe, Convertible',
    status_free: true,
    color: 'White',
  },
  {
    Year: 2020,
    Make: 'Acura',
    Model: 'RLX',
    Category: 'Sedan',
    status_free: true,
    color: 'Blue',
  },
];

// get car`s key
for (const car of carList) {
  const keys = Object.keys(car);

  // get car`s value
  for (const key of keys) {
    console.log(key);
    console.log(car[key]);
  }
}

// get all cars values
for (const car of carList) {
  const value = Object.values(car);
  console.log(value); //  [2022, 'Audi', 'Q3', 'SUV', 'true', 'Red'], ... [2020, 'Acura', 'RLX', 'Sedan', 'true', 'Blue']
}

function findCarsFree(cars) {
  const freeCars = [];
  for (const car of cars) {
    if (car.status_free) {
      freeCars.push(car.Make);
    }
    console.log(`oops, all cars are busy...`);
  }
  console.log(`These cars' status are free: `, freeCars);
  return freeCars;
}

console.table(findCarsFree(carList));

function findBusyCars(cars) {
  const busyCars = [];

  for (const car of cars) {
    if (!car.status_free) {
      busyCars.push(car.Make, car.Model);
    }
    console.log(`These cars: ${car.Make} ${car.Model} are free`);
  }
  console.log(`These cars are busy: `, busyCars.join(', '));
  return busyCars;
}

console.log(findBusyCars(carList));

// get cars by status
function getCarsByStatus(cars) {
  const carsByStatus = {
    free: [],
    busy: [],
  };

  for (const car of cars) {
    // 1st variant

    // if (car.status_free) {
    //   carsByStatus.free.push(car.Make);
    //   continue;
    // }
    // carsByStatus.busy.push(car.Make);

    // 2nd variant
    // carsByStatus[car.status_free ? 'free' : 'busy'].push(car.Make);

    // 3rd variant
    const key = car.status_free ? 'free' : 'busy';
    carsByStatus[key].push(car.Make);
  }

  return carsByStatus;
}

console.log(getCarsByStatus(carList));
