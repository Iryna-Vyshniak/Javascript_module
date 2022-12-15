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
}
