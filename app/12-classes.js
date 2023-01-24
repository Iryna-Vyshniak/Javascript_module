// - Classes are in fact "special functions"
// - class can be defined in two ways: a class expression or a class declaration.

/*
 * - announcement - оголошення
 * - constructor - конструктор
 * - methods - методи
 * - static - static
 * - private properties - приватні властивості
 * - Syntax of public properties and class methods - синтаксис публічних властивості та методи класів
 * - getters and setters - гетери та сетери
 */

// Клас - ескіз(шаблон) об'єкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Конструктор - автоматично створюється, можна не оголошувати, не може бути статичним методом
// Екземпляр класу - інстанс
// Методи - можуть бути приватними; приватні методи, як властивості, оголошувати ДО constructor не потрібно(завестися, відкрити двері, збільшити швидкість)
// Приватні доступні лише в середині класу, публічні - будь-де
// Приватні властивості - окремо оголошуються ДО constructor. Example: #email; Можемо змінити, але при якійсь конкретній чіткій умові, яка нас влаштовує і яку прописуємо: можемо достукатись лише через геттер та сеттер
// Cтатичні властивості - властивості, які не додаються в екземпляри (інстанси) при створенні
// Extends - реалізує спадкування класів
// super() - викликає конструктор батьківського класу
// Об'єкт - екземпляр класу, який створили з шаблона
// Інтерфейс - набір публічних властивостей та методів класу, доступних для використання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик об'єкту і відкидання незначних, не вдаючисть в роздуми, як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - # приховання всіх внутрішніх процесів від користувача, оголошуються за межами конструктора, хороший тон - перед ним
// Наслідування - створення нового класу на базі існуюучого
// get ніколи не має значення параметра; виклик get через . і без (). Example: User.email
// set завжди має лише один параметр, щоб змінити властивість. Якщо властивість приватна - зміна при умові; виклик set відбувається через . , без (), через присвоювання = . Example: User.email = 'fox@gmail.com"
// new - оператор для створення інстанс
// [[Prototype]] - __proto__  - властивість об'єкта, де зберігається посилання на його об'єкт-прототип (prototype)

// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const RectangleA = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const RectangleB = class RectangleB2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// CLASS CAR
class Car {
  static description = `It's car's description`;

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const carInstance = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 45000,
});

console.log('🚀 ~ file: 12-classes.js:67 ~ carInstance', carInstance);
// Car {brand: 'Audi', _model: 'Q3', price: 45000}
// brand: "Audi"
// price: 45000
// _model:"Q3"
// model: "Q3"

console.log(carInstance.model); //Q3

carInstance.model = 'X4';
console.log(carInstance.model); //X4

console.log(carInstance.price); //45000 getter

carInstance.price = 58000; // setter
console.log(carInstance.price); //58000 getter

// ====================================================================
// HEROES

// EXTENDS
// SUPER ()

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);
mango.attack();
mango.gainXp(1000);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
//  console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );

//--------------------------------------------------------------------

class User {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра, public value: name, email
    this.name = name;
    this.email = email;
  }
}

const mangust = new User('Mangust', 'mango@mail.com');
console.log(mangust); // { name: 'Mangust', email: 'mango@mail.com' }

const poly = new User('Poly', 'poly@mail.com');
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//---------------------------------------------------------------------
class UserA {
  // Деструктуризуємо об'єкт
  // constructor({ name, email }) - сигнатурa (підпис) конструктора.
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mall = new UserA({
  name: 'Mall',
  email: 'mall@mail.com',
});
console.log(mall); // { name: "Mall", email: "mall@mail.com" }

const magicman = new UserA({
  name: 'Magicman',
  email: 'mag@mail.com',
});
console.log(poly); // { name: "Magicman", email: "mag@mail.com" }

//------------------------------------------------------------------
// METHODS

class UserB {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

//-------------------------------------------------------------------
// Write a Storage class that will create objects for managing the warehouse of goods. The class expects only one argument - the initial array of goods, which is written into the items property of the object being created.

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
}

new Storage();
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Flox');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Flox"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Flox"]

//-------------------------------------------------------------------
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }
  // ??
  // padEnd(str) {
  //   this.value.padEnd(str);
  // }
  padEnd(str) {
    this.value += str;
  }
  // ??
  // padStart(str) {
  //   this.value.padStart(str);
  // }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//---------------------------------------------------------------------
//Encapsulation is a concept that allows you to hide how a class is organized. The user of the class should have access only to the public interface - a set of public properties and methods of the class. The rest of the methods and properties (not public) should be unavailable.

class StringBuilders {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builders = new StringBuilders('.');

//------------------------------------------------------------------
// get and set

class CarAD {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    newPrice <= Car.MAX_PRICE ? (this.#price = newPrice) : this.#price;
  }
}

const audi = new CarAD({ price: 35000 });
console.dir(audi.price); // 35000

audi.price = 49000;
console.dir(audi.price); // 49000

audi.price = 51000;
console.dir(audi.price); // 49000

console.log(audi);

//---------------------------------------------------------------------
// static method

class UserFox {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return UserFox.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    UserFox.#takenEmails.push(email);
  }
}

const fox = new UserFox({ email: 'fox@mail.com' });
console.log(UserFox.isEmailTaken('cat@mail.com')); //false
console.log(UserFox.isEmailTaken('fox@mail.com')); //true

//-------------------------------------------------------------
class CarBX {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    return price > this.#MAX_PRICE
      ? 'Error! Price exceeds the maximum'
      : 'Success! Price is within acceptable limits';
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audiBX = new CarBX({ price: 36000 });
const bmwBX = new CarBX({ price: 64000 });

console.log(CarBX.checkPrice(audiBX.price)); // "Success! Price is within acceptable limits"
console.log(CarBX.checkPrice(bmwBX.price)); // "Error! Price exceeds the maximum"

//------------------------------------------------------------------------
// The extends keyword allows you to implement class inheritance, when one class (child, derived) inherits the properties and methods of another class (parent).
//First of all, in the constructor of the child class, you need to call the special function super(arguments) - this is an alias for the constructor of the parent class. Otherwise, an attempt to refer to this in the constructor of the child class will result in an error.
// When calling the constructor of the parent class, we pass the arguments it needs to initialize the properties.

// class UserX {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends UserX {
//  Тіло класу ContentEditor
// static AccessLevel = {
// BASIC: "basic",
// SUPERUSER: "superuser"
// }
// }

// const editorX = new ContentEditor('remi@mail.com');

class UserX {
  _email;

  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}
class Admin extends UserX {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const remiAdmin = new Admin({
  email: 'remi@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(remiAdmin.email); // "remi@mail.com"
console.log(remiAdmin.accessLevel); // "superuser"

remiAdmin.blacklist('rat@mail.com');
console.log(remiAdmin.blacklistedEmails); // ['rat@mail.com'
console.log(remiAdmin.isBlacklisted('remi@mail.com')); // false
console.log(remiAdmin.isBlacklisted('rat@mail.com')); // true

// -------------- SET GET # ------------------------------------
class MainAdmin {
  #email;
  constructor({ email, name, age } = {}) {
    this.#email = email;
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(this.name);
  }

  get getEmail() {
    const password = prompt('Enter your password');
    password === 'forest' && this.#checkAge()
      ? console.log(this.#email)
      : console.log('Ooops, no...');
  }
  set getEmail(newEmail) {
    newEmail.includes('@') && newEmail.includes('.')
      ? (this.#email = newEmail)
      : console.log('Ooops, no...');
  }

  #checkAge() {
    this.age >= 18 ? true : false;
  }
}

const adm = new MainAdmin({
  name: 'Fox',
  email: 'fox@gmail.com',
  age: 27,
});

console.log(adm); //
// console.log(adm.#email); //SyntaxError: Private field '#email' must be declared in an enclosing class
adm.getName(); //Fox
adm.getEmail; //fox@gmail.com
adm.getEmail = 'red'; //Ooops, no...
adm.getEmail = 'red@gmail.com';
console.log(adm);
// adm.#checkAge(); //SyntaxError: Private field '#checkAge' must be declared in an enclosing class BECAUSE PRIVATE

//------------------------------------------------------------
