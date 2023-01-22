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

// ========================================================

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

///
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
