/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// =================================== THIS ====================

console.log('global this: ', this); //global this:  undefined

const arrow = () => {
  console.log('arrow this: ', this);
};

arrow(); // arrow this:  undefined

/*

- function declaration and function expression втрачають window global this в  type="module";

- в function declaration і function expression хто викликав, той і є контекстом this;

 - в type="module" arrow function this посилається на батьківський this:  undefined. --> console.log(' this: ', this);, так як глобальний this втрачається.

 - arrow function не має власного this, this визначається місцем його написання, тобто він бере this з фізичного місця написання і піднімається на рівень вгору і бере батьківський this;

 - Без type="module" in 'use strict' and without 'use strict" -> global object window, в  type="module" this втрачає глобальний this window, глобальний this взагалі зникає для усіх
 
 - в arrow function this завжди визначається місцем його виклику, посилається на батьківський this
*/

const btn = document.querySelector('button');

btn.addEventListener('click', log);

function log() {
  console.log(this);
  // console.dir(this) => button

  setTimeout(() => {
    console.log(this);
  }, 100);
  // button, on click => button

  // setTimeout(function () {
  //   console.log(this);

  // }, 100);
  // window with use strict
}

log();
// first => use strict => undefined
// without use strict => window
// when click =>  < button type = "button" class="button" > Click me</ >

// ======================================================
// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this
//   },
//   down() {
//     this.step -= 1
//     return this
//   },

//   showStep() {
//     console.log(this.step)
//     return this
//   }
// }
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

//Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити ланцюжком, наприклад так:
// console.log(ladder.up().up().up().up().up().showStep().down());

// ====================================== in FUNC =======================================
function currentUser() {
  console.log(this);
}

currentUser(); //   window
currentUser.apply({ userName: 'Mary' }); // {userName: 'Mary'}
currentUser.call({ userName: 'Mary' }); // {userName: 'Mary'}
currentUser.bind({ userName: 'Mary' })(); // {userName: 'Mary'}

// =============================== ARROW FUNC =============================================
// шукає this за межами ф-ції => за nextUser => window

console.log(this); //  window

const nextUser = {
  name: 'Nick',
  getNextUserName: () => {
    // console.log(this.name); //  TypeError: Cannot read properties of undefined (reading 'name')
    console.log(this); //  window
  },
};

nextUser.getNextUserName();

// ============================================

const nextUser2 = {
  name: 'Nick',
  numbers: [1, 2, 3, 4, 5],
  getNextUserName() {
    console.log(this.name); //   Nick
    console.log(this); //  {name: 'Nick', numbers: Array(5), getNextUserName: ƒ}
    this.numbers.forEach(item => {
      console.log(this.name + '-' + item);
    }); //  Nick-1 Nick-2 Nick-3 Nick-4 Nick-5
  },
};

nextUser2.getNextUserName();

// Rазведывательному управлению SI:7, нужно безопасно хранить добытые данные. Твоё задание абсолютно засекречено!
// Создай функцию makeSecret, которая принимает строки secret и password и возвращает функцию storage с секретом.
//     • при обычном вызове storage возвращает строку Absolutely not a secret thing
//     • если вызвать метод storage.getSecret и передать ему правильный пароль, то мы получим секретное значение secret
//     • если пароль неправильный, то результат будет Wrong password!
//     • если пароль трижды подряд введён неправильно, то метод блокируется и все его последующие вызовы будут возвращать null (даже для правильного пароля)
//     • если ДО блокировки введён правильный пароль, то счётчик неправильных вводов сбрасывается снова до 3
//     • метод storage.setSecret(newSecret, newPassword) позволяет установить новый пароль и секретную фразу и сбросить счётчик

const storage = makeSecret('Santa exists!', 'qwerty');
storage.setSecret('Coll Secret', 'qazwsx');

function makeSecret(secret, pasw) {
  let currentSecret = secret;
  let currentPasw = pasw;
  let numberOfMistakes = 0;

  const innerStorage = () => 'Absolutely not a secret thing';
  innerStorage.getSecret = initialPasw => {
    if (numberOfMistakes > 3) {
      return null;
    }

    if (initialPasw === currentPasw) {
      return currentSecret;
    }

    numberOfMistakes++;
    return 'Wrong password!';
  };

  innerStorage.setSecret = (newSecret, newPasw) => {
    currentSecret = newSecret;
    currentPasw = newPasw;
    numberOfMistakes = 0;
  };
  return innerStorage;
}

//
const objA = {
  x: 5,
  showThis() {
    console.log('this in objA showThis: ', this); //  {x: 5, showThis: ƒ}
    console.log('this in objA showThis: ', this.x); // 5

    const objB = {
      y: 10,
      showThisB() {
        console.log('this in objB showThisB: ', this); //  {y: 10, showThisB: ƒ}
        console.log('this in objB showThisB: ', this.y); // 10
      },
      // don`t use below - useless (unhelpful)
      showThisArrow: () => {
        console.log('this in objB showThisArrow: ', this); //  {x: 5, showThis: ƒ}
        console.log('this in objB showThisArrow: ', this.x); //5
        console.log('this in objB showThisArrow: ', this.y); // undefined
      },
    };
    objB.showThisB();
    objB.showThisArrow();
  },
};

objA.showThis();

// COUNTER
const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');
const value = document.querySelector('.js-value');
const soundBtn = document.querySelector('.js-sound');
const audio = document.querySelector('.js-audio');

const counter = {
  value: 0,
  increment() {
    console.log('this: click on increment: ', this);
    this.value += 1;
  },
  decrement() {
    console.log('this: click on decrement: ', this);
    this.value -= 1;
  },
};

incrementBtn.addEventListener('click', e => {
  e.preventDefault();
  counter.increment();
  value.textContent = counter.value;
});
decrementBtn.addEventListener('click', e => {
  e.preventDefault();
  counter.decrement();
  value.textContent = counter.value;
});

//AUDIO
soundBtn.addEventListener('click', e => {
  soundBtn.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

// when focusing on this an open page in the browser
window.onfocus = function () {
  soundBtn.classList.contains('paused') ? audio.pause() : audio.play();
};

//when we open a new tab in the browser - the audio is turned off
window.onblur = function () {
  audio.pause();
};

// task -----------------------------------------------------------------------------------------
function fnD() {
  console.log(this);
}

const objD = {
  draw: fnD,
};
objD.draw();
console.log(objD.draw()); //{draw: ƒ}draw: ƒ fnD()[[Prototype]]: Object

//task -----------------------------------------------------------------------------------------
const objUser = {
  name: 'testUser',
  getName() {
    console.log(this.name);
  },
};

objUser.getName(); // testUser

const objUserA = {
  name: 'UserA',
  method: objUser.getName,
};

objUserA.method(); // UserA

//-------------------------------------------------------------------------------------------------
// TASK
const objUserB = {
  name: 'testUser',
  data: {
    getName() {
      console.log(this.name);
    },
  },
};

//objUserB.getName(); // Uncaught TypeError: objUserB.getName is not a function

const objUserC = {
  name: 'UserA',
  method: objUserB.getName,
};

// objUserC.method(); //Uncaught TypeError: objUserC.method is not a function

// TASK -----------------------------------------------------------------------------------------
const objUserD = {
  name: 'testUser',
  data: {
    email: 'a@jmail.com',
    age: 36,
    getMail() {
      console.log(this.email);
    },
  },
  getUserName() {
    console.log(this.name);
  },
};

objUserD.getUserName(); // testUser
objUserD.data.getMail(); // a@jmail.com

const objUserCD = {
  name: 'UserrCD',
  firstMethod: objUserD.getUserName,
  secondMethod: objUserD.data.getMail,
};

objUserCD.firstMethod(); //UserrCD
objUserCD.secondMethod(); //undefined

// ARROW THIS -------------------------------------------------------------------------------

const userBlog = () => {
  console.log('userBlog: ', this);
};

userBlog(); // userBlog:  undefined / window

const blog = {
  name: 'userBlogName',
  getName: () => {
    console.log('blog.getName: ', this.name);
  },
};

// blog.getName(); // TypeError: Cannot read properties of undefined

const blogA = {
  name: 'userBlogName',
  getName: userBlog,
};

// blog.getName(); // TypeError: Cannot read properties of undefined

//-----------------------------------------------------------------

const bookShelf = {
  authors: ['Bernard Cornwell', 'Robert Sheckley'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor('Tanith Lee');
console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

//------------------------------------------------------------------------

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    return !isPizzaAvailable
      ? `Sorry, there is no pizza named «${pizzaName}»`
      : `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

pizzaPalace.order('Smoked'); // "Order accepted, preparing «Smoked» pizza"
console.log("🚀 ~ file: 10_this.js:470 ~ pizzaPalace.order('Smoked')", pizzaPalace.order('Smoked'));
pizzaPalace.order('Four meats'); // "Order accepted, preparing «Four meats» pizza"
console.log(
  "🚀 ~ file: 10_this.js:472 ~ pizzaPalace.order('Four meats')",
  pizzaPalace.order('Four meats')
);
pizzaPalace.order('Big Mike'); // "Sorry, there is no pizza named «Big Mike»"
console.log(
  "🚀 ~ file: 10_this.js:477 ~ pizzaPalace.order('Big Mike')",
  pizzaPalace.order('Big Mike')
);
pizzaPalace.order('Viennese'); // "Sorry, there is no pizza named «Viennese»"
console.log(
  "🚀 ~ file: 10_this.js:482 ~ pizzaPalace.order('Viennese');",
  pizzaPalace.order('Viennese')
);

//-------------------------------------------------------------------------------
const client = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};
client.setDiscount(0.15);
console.log(client.getDiscount()); // 0.15

client.addOrder(5000, 'Steak');
console.log(client.getBalance()); // 19750
console.log(client.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//----------------------------------------------------------------------------------
const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],

  getOrdersLog() {
    return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

historyService.getOrdersByEmail('solomon@topmail.net'); //  [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
historyService.getOrdersByEmail('artemis@coldmail.net'); // [{ email: "artemis@coldmail.net", dish: "Pizza" }]

console.log(historyService.getEmails()); // ['jacob@hotmail.com', 'solomon@topmail.net', 'artemis@coldmail.net']
//-----------------------------------------------------------------------------------

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// 42

//-----------------------------------------------------------------------------------
function getThis() {
  return this;
}

const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

//------------------------------------------------------------------------------------

const obj4 = {
  name: 'obj4',
  getThis() {
    return this;
  },
};

const obj5 = { name: 'obj5' };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

//----------------------------------------------------------------------------------
function logThis() {
  'use strict';
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
setTimeout(logThis, 1000); // undefined

//-----------------------------------------------------------------------------------

[1, 2, 3].forEach(logThis, { name: 'obj' }); // { name: 'obj' }, { name: 'obj' }, { name: 'obj' }

//--------------------------------------------------------------

// ================== FUNC METHODS  IN OBJ =====================================================

const newUser = {
  name: 'Nick',
  getUserName(age, title) {
    // console.log(this.name); //TypeError: Cannot read properties of undefined (reading 'name')
    console.log(age);
    console.log(title);
    // this.age = age; //  TypeError: Cannot set properties of undefined (setting 'age')
    // console.log(this); //   window
  },
};

const user = {
  name: 'Alex',
};

let { getUserName } = newUser;

getUserName(); // undefined, find .this from right => this.getUserName()
console.log(getUserName()); // undefined
console.log(getUserName); // getUserName(age) {this.age = age; console.log(this.name)}

// without user name Alex

// getUserName = getUserName.bind(newUser, 12);
// getUserName(); // Nick, 12 undefined

// with user name Alex
// getUserName = getUserName.bind(user, 12);
// getUserName(); // Alex

//============================ CALL =====================================================
function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mangoUser = {
  username: 'Манго',
};
const polyUser = {
  username: 'Полі',
};

greetGuest.call(mangoUser, 'Ласкаво просимо'); // Ласкаво просимо, Манго.
greetGuest.call(polyUser, 'З прибуттям'); // З прибуттям, Полі.

// getUserName = getUserName.call(newUser, 25, 'developer');
// Nick
// 25
// developer

// ========================== APPLY =====================================================
greetGuest.apply(mangoUser, ['Ласкаво просимо']); // Ласкаво просимо, Манго.
greetGuest.apply(polyUser, ['З прибуттям']); // З прибуттям, Полі.

getUserName = getUserName.apply(newUser, [25, 'developer']);
// Nick
// 25
// developer

// =======================================  BIND ==========================================================
const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// ------------------CALL APPLY BIND -----------------------------------------------------
/*
    apply - A
    bind - B
    call - C
    A - .apply({}, [a, b]);
    B - .bind({}, a, b);
    C - .call({}, a, b);
    .aplly, .call викликають функцію на місці, . .bind - повертає копію функції
*/

const objABC = {
  nickName: 'UserABC',
  getNickName() {
    console.log(this.nickName);
  },
};

const objDAB = {
  nickName: 'UserDAB',
};

const objBAB = {
  nickName: 'UserBAB',
};

objABC.getNickName(); // UserABC
// objDAB.getNickName(); //TypeError: objDAB.getName is not a function

objABC.getNickName.call(objDAB); // UserDAB
objABC.getNickName.call(objDAB); // UserDAB

objABC.getNickName.apply(objDAB); // UserDAB

objABC.getNickName.call(objBAB); // UserBAB

objABC.getNickName.apply(objBAB); // UserBAB

const abcbind = objABC.getNickName.bind(objDAB);
const abcBind = objABC.getNickName.bind(objBAB);

//------------- FULL VARIANT -------------------------------------------------------------------

const objABC1 = {
  nickName: 'UserABC',
  getNickName(country, followers) {
    console.log(
      `Hi, I'm ${this.nickName}, I'm from ${country} and have got ${followers} followers`
    );
  },
};

const objDAB1 = {
  nickName: 'UserDAB',
};

const objBAB1 = {
  nickName: 'UserBAB',
};

objABC1.getNickName(); // Hi, I'm UserABC, I'm from undefined and have got undefined followers
// objDAB1.getNickName(); //TypeError: objDAB.getName is not a function

objABC1.getNickName.call(objDAB1, 'Ukraine', 12000); // Hi, I'm UserDAB, I'm from Ukraine and have got 12000 followers

const arrDAB = ['Ukraine', 12000];
objABC1.getNickName.call(objDAB1, ...arrDAB); // Hi, I'm UserDAB, I'm from Ukraine and have got 12000 followers

objABC1.getNickName.call(objBAB1, 'USA', 357689); // Hi, I'm UserDAB, I'm from USA and have got 357689 followers

objABC1.getNickName.apply(objDAB1, ['Ukraine', 12000]); // Hi, I'm UserDAB, I'm from Ukraine and have got 12000 followers
objABC1.getNickName.apply(objBAB1, ['USA', 357689]); // Hi, I'm UserBAB, I'm from USA and have got 357689 followers
const arrBAB = ['USA', 357689];
objABC1.getNickName.apply(objBAB1, arrBAB); // Hi, I'm UserBAB, I'm from USA and have got 357689 followers

const abcbind1 = objABC1.getNickName.bind(objDAB1, 'BIND COUNTRY', 789678);
console.log(abcbind1); // копія функції
//getNickName(country, followers) {
//   console.log(
//     `Hi, I'm ${this.nickName}, I'm from ${country} and have got ${followers} followers`
//   );
// }
abcbind1(); // функція прив'язана до objDAB1, => Hi, I'm UserDAB, I'm from BIND COUNTRY and have got 789678 followers
abcbind1('Italy', 23); // нічого не зміниться, залишуться параметри, які були прив'язані
// Hi, I'm UserDAB, I'm from BIND COUNTRY and have got 789678 followers

// вже не керуємося правилом, хто викликав, той і контекст this. За рахунок саме методу bind він наш об'єкт objDAB1 прив'язує вже назавжди. Тепер скільки раз не будемо викликати копію функціїї abcbind1() у нас this вже буде постійно прив'язаний
// вже не керуємося правилом, хто викликав, той і контекст this. За рахунок саме методу bind він наш об'єкт calc2 прив'язує вже назавжди. Тепер скільки раз не будемо викликати bindedRead у нас this вже буде постійно прив'язаний до calc2

// приклад без прив'язки параметрів
const bind = objABC1.getNickName.bind(objDAB1);
bind('Italy', 23); // Hi, I'm UserDAB, I'm from Italy and have got 23 followers

// ------------------------------------------------------------------

// const abcBind1 = objABC1.getNickName.bind(objBAB1);

// Метод bind використовується для прив'язування контексту, передаючи методи об'єкта як колбек-функції. Передамо колбеком не оригінальний метод getFullName, а його копію з прив'язаним контекстом об'єкту customer.

/* FULL VERSION
 
const calcOrder = (func, num, price, drink) => {
  let sum = num * price;
  let text = '';
 
  if (drink === 'coffee') {
    text = 'Get ice!';
  } else if (drink === 'tea') {
    text = 'Get cake!';
  } else {
    text = 'Get free order!';
  }
 
  func(sum, text);
};
 
const showMessage = (text, orderPrice) => {
  console.log(text);
  console.log(`Your order price: ${orderPrice}`);
};
 
calcOrder(showMessage, 3, 30, 'coffee');
*/

const calcOrder = (func, num, price, drink) => {
  const sum = num * price;

  func(sum);
};

const showMessage = (text, orderPrice) => {
  console.log(text);
  console.log(`Your order price: ${orderPrice}`);
};

calcOrder(showMessage.bind(this, 'Get ice!'), 3, 20, 'coffee');
calcOrder(showMessage.bind(this, 'Get cake!'), 2, 10, 'tea');
calcOrder(showMessage.bind(this, 'Get surprise!'), 5, 15, 'milk');

//------------------------------------------------------------------
/*
    apply - A
    bind - B
    call - C
    A - .apply({}, [a, b]);
    B - .bind({}, a, b);
    C - .call({}, a, b);
    .aplly, .call викликають функцію на місці, . .bind - повертає копію функції
*/

// task

const usA = {
  name: 'John',
  sayHi() {
    console.log(`Hi, Mr ${this.name}`);
  },
  sayBye() {
    console.log(`Bye, Mr`);
  },
};

//usA.sayHi(); //Hi, Mr John
//usA.sayBye(); //Bye, Mr

// (usA.name === 'John' ? usA.sayHi : usA.sayBye)(); //Uncaught TypeError: Cannot read properties of undefined (reading 'name') this - undefined

// В коді використовуємо умовний оператор ?, який визначає, який буде викликаний метод (user.sayHi або user.sayBye) в залежності від виконання умови. В даному випадку буде обрано user.sayHi
// Потім метод відразу викликається за допомогою дужок (). Але виклик не працює як належить!
// Під час виклику буде помилка, тому що значенням "this" всередині функції стає undefined (застосований type='module').

// next variant -> OK
usA.name === 'John' ? usA.sayHi() : usA.sayBye(); //Hi, Mr John
usA.name === 'Jack' ? usA.sayHi() : usA.sayBye(); //Bye, Mr

// -----------------------------------------------------------
const shape = {
  radius: 10,
  getDiameter() {
    return this.radius * 2;
  },
  getPerimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.getDiameter()); // 20
//console.log(shape.getPerimeter()); // TypeError: Cannot read properties of undefined (reading 'radius')

// -------------------------------
const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btnMango = document.querySelector('.js-btnMango');

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback

// btn.addEventListener("click", mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btnMango.addEventListener('click', mango.showUsername.bind(mango));
