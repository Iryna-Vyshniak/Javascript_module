// 1. Кожен об'єкт має властивість __proto__
// 2. У цій властивості лежить посилання на його ПРОТОТИП, тобто інший об'єкт
// 3. При створенні літера об'єкта, як __proto__ записується посилання на Функція.prototype
// 4. Функція-конструктор це функція :)
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

//==============================================================================================
/*
 * ООП: КЛАС, ЕКЗЕМПЛЯР (об'єкт), ІНТЕРФЕЙС
 */

/*
 Функції-конструктори
 * - Іменування
 * - Оператор new
 * - Властивість Function.prototype
 */

const Car = function () {
  console.log('function Car: ', this); //Car {}
};

const myCar = new Car();
console.log(myCar); // Car {}
