// 1. Кожен об'єкт має властивість __proto__
// 2. У цій властивості лежить посилання на його ПРОТОТИП, тобто інший об'єкт
// 3. При створенні літера об'єкта, як __proto__ записується посилання на Функція.prototype
// 4. Функція-конструктор - це функція :)
// 5. Всю магію робить оператор new
// 6. Якщо функція викликається через new, створюється порожній об'єкт
// 7. Функція викликається у тих створеного об'єкта
// 8. У властивість this.__proto__ записується посилання на об'єкт Функція.prototype
// 9. Посилання на об'єкт повертається на місце виклику new Функція()

const objA = {
  a: 5,
};
console.log('objA: ', objA); // {a: 5} a: 5 [[Prototype]]: Object
// or {a: 5} a: 5 __proto__: Object

const objB = {
  b: 6,
};
console.log('objB: ', objB); // {b: 6} b: 6 [[Prototype]]: Object
// or {b: 6} b: 6 __proto__: Object

const objC = {
  c: 7,
};
console.log('objC: ', objC); // {c: 7} c: 7 [[Prototype]]: Object
// or {c: 7} c: 7 __proto__: Object

const objD = Object.create(objA);
console.log('objD: ', objD); // {} [[Prototype]]: Object a: 5 [[Prototype]]: Object

console.log('objD.a: ', objD.a); //5

objD.a = 55;
console.log('objD: ', objD); // {a: 55} a: 55 [[Prototype]]: Object a: 5 [[Prototype]]: Object

const objE = Object.create(objD);
console.log('objE: ', objE); // {} [[Prototype]]: Object a: 55 [[Prototype]]: Object

console.log('objE.a: ', objE.a); //5

objD.a = 777;
console.log('objD: ', objD); // {a: 777} a: 777 [[Prototype]]: Object a: 5 [[Prototype]]: Object

objE.a = 888;
console.log('objE: ', objE); // {a: 888} a: 888 [[Prototype]]: Object a:777 [[Prototype]]: Object a: 5 [[Prototype]]: Object

//===================================================================================================================================
/*
 * ООП: КЛАС, ЕКЗЕМПЛЯР (об'єкт), ІНТЕРФЕЙС
 */

/*
 Функції-конструктори
 * - Іменування
 * - Оператор new
 * - Властивість Function.prototype
 * 
 * Constructor functions
 * - Naming
 * - operator new
 * - Function.prototype property
 */
// 1
const CarC = function () {
  console.log('function Car: ', this); //CarC {}
  this.a = 555;
};

const myCarC = new CarC();
//console.log(myCarC); // CarC {}
console.log(myCarC); // тепер CarC {a: 555}, так як додали в const CarC {  this.a = 555;}

// 2
const CarA = function (value) {
  console.log('function CarA: ', this); //CarA {}
  this.a = value;
};

const myCarA = new CarA(10);
console.log(myCarA); // CarA {a: 10}

const myCarB = new CarA(777);
console.log(myCarB); // CarB {a: 777}

// 3
const CarBMW = function (brand, model, price) {
  console.log('function CarBMW: ', this); //CarBMW {}
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCarBMW = new CarBMW('BMW', 'X6', '35000');
console.log(myCarBMW); // Car {brand: 'BMW', model: 'X6', price: '35000'}

//4
const Car = function (confiq = {}) {
  console.log('function Car: ', this); //Car {}
  console.log(confiq); // Car {brand: 'BMW', model: 'X6', price: '35000'}
  // {brand: 'Audi', model: 'Q3', price: 27000}
  //   this.brand = confiq.brand;
  //   this.model = confiq.model;
  //   this.price = confiq.price;

  const { brand, model, price } = confiq;
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({
  brand: 'BMW',
  model: 'X6',
  price: '35000',
});
console.log(myCar); // Car {brand: 'BMW', model: 'X6', price: '35000'}

const myCarAudi = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 27000,
});
console.log(myCarAudi); //Car {brand: 'Audi', model: 'Q3', price: 27000}

const myCar3 = new Car();
console.log(myCar3); // Car {brand: undefined, model: undefined, price: undefined}

//5 EXCELLENT VARIANT
const Supercar = function ({ brand, model, price } = {}) {
  console.log('function Supercar: ', this); //Car {}
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar1 = new Supercar({
  brand: 'BMW',
  model: 'X6',
  price: '35000',
});
console.log(myCar1); // Car {brand: 'BMW', model: 'X6', price: '35000'}

const myCarAudi1 = new Supercar({
  brand: 'Audi',
  model: 'Q3',
  price: 27000,
});
console.log(myCarAudi1); //Car {brand: 'Audi', model: 'Q3', price: 27000}

const myCar2 = new Supercar();
console.log(myCar2); // Car {brand: undefined, model: undefined, price: undefined}

// =========================================================================================================================================

// Function.prototype property

Supercar.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi: -> this', this); // Car.prototype.sayHi: -> this Supercar {brand: 'Audi', model: 'Q3', price: 27000}
  console.log('Hello'); //
};

myCarAudi1.sayHi(); // Hello

Supercar.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

myCarAudi1.changePrice(85000);
console.log(myCarAudi1); //Supercar {brand: 'Audi', model: 'Q3', price: 85000}

// user
const User = function ({ email, psw } = {}) {
  this.email = email;
  this.psw = psw;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const userNick = new User({
  email: 'oks@gmail.com',
  psw: 'df456',
});

console.log(userNick);

userNick.changeEmail('nick@gmail.com'); // User {email: 'oks@gmail.com', psw: 'df456'}
console.log(userNick); // User {email: 'nick@gmail.com', psw: 'df456'}

//========================================================================================================================================

//static

/*
 * Статичні властивості та методи
 * - Статичні властивості та методи доступні тільки на самому конструкторі
 * - У статичних методах не потрібен this
 */

User.message = `I'm a static property, I'm not on instances or prototypes.`;
console.dir(User);
//User({ email, psw } = {})
//message: `I'm a static property, I'm not on instances or prototypes.`
//prototype: changeEmail: ƒ (newEmail) constructor: ƒ ({ email, psw } = {})
//[[Prototype]]: ƒ ()  => __proto__
// apply: ƒ apply()
// arguments: (...)

console.log(userNick);
// User {email: 'nick@gmail.com', psw: 'df456'} email: "nick@gmail.com" psw: "df456" [[Prototype]]: Object => not message

//
User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.psw);
};

User.logInfo(userNick);
//User {email: 'nick@gmail.com', psw: 'df456'} email: "nick@gmail.com"psw: "df456"  [[Prototype]]: Object
// Почта:  nick@gmail.com
// Пароль:  df456
