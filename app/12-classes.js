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
class User {
  // Деструктуризуємо об'єкт
  // constructor({ name, email }) - сигнатурa (підпис) конструктора.
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mall = new User({
  name: 'Mall',
  email: 'mall@mail.com',
});
console.log(mall); // { name: "Mall", email: "mall@mail.com" }

const magicman = new User({
  name: 'Magicman',
  email: 'mag@mail.com',
});
console.log(poly); // { name: "Magicman", email: "mag@mail.com" }

//------------------------------------------------------------------
// METHODS

class User {
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
