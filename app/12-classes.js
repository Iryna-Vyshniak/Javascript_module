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
// Cтатичні властивості - властивості, які не додаються в екземпляри (інстанси) при створенні. Можемо отримати доступ, звернувшись лише до самого класу. (часто для підрахування екземплярів класу, продуктів - instock or outstock - 100% стала величина) this в середині static буде звертатись до самого класу, саме до його властивостей,  на відміну від конструктора. Теоретично, в екземплярі класа не можемо звертатись до статичних властивостей, вони йому не доступні, але, якщо  в екземплярі класу звернемось до властивості конструктор, яка доступна нам по прототипному наслідуванню, з цього конструктора можемо зчитати значення
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
  static counter = 0;
  static addUser() {
    this.counter += 1; // counter буде оновлюватись з кожним інстанс
    console.log(this.counter);
  }
  static stock = {
    inStock: 'Product in stock',
    outStock: 'Product out of stock',
  };

  #email;
  constructor({ email, name, age, stock } = {}) {
    this.#email = email;
    this.name = name;
    this.age = age;
    this.stock = stock;
    MainAdmin.addUser();
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
    this.getName();
    // this.age >= 18 ? true : false;
    this.age >= 18;
  }
}

const adm = new MainAdmin({
  name: 'Fox',
  email: 'fox@gmail.com',
  age: 27,
  stock: MainAdmin.stock.inStock,
});

console.log(adm); // MainAdmin {name: 'Fox', age: 27, stock: 'Product in stock', #checkAge: ƒ, #email: 'fox@gmail.com'}

// console.log(adm.#email); //SyntaxError: Private field '#email' must be declared in an enclosing class
adm.getName(); //Fox
adm.getEmail; //fox@gmail.com
adm.getEmail = 'red'; //Ooops, no...
adm.getEmail = 'red@gmail.com';
console.log(adm);
// adm.#checkAge(); //SyntaxError: Private field '#checkAge' must be declared in an enclosing class BECAUSE PRIVATE

const admA = new MainAdmin({
  name: 'Remmy',
  email: 'rat@gmail.com',
  age: 5,
  stock: MainAdmin.stock.outStock,
});
console.log(admA); //MainAdmin {name: 'Remmy', age: 5, stock: 'Product out of stock', #checkAge: ƒ, #email: 'rat@gmail.com'}

const admB = new MainAdmin({
  name: 'Rabbit',
  email: 'rabbit@gmail.com',
  age: 15,
});
const admC = new MainAdmin({
  name: 'Pat',
  email: 'patt@gmail.com',
  age: 24,
});

console.log(MainAdmin.counter); // 7
MainAdmin.counter;
//console.log(admC.constructor.counter); // 7

class WarriorFox extends MainAdmin {
  constructor({ XP, ...restProps } = {}) {
    super(restProps);
    this.xp = XP;
  }
}

const foxWarrior = new WarriorFox({
  name: 'FoxWarrior',
  email: 'wars@gmail.com',
  age: 35,
  stock: MainAdmin.stock.outStock,
  XP: 2000,
});
console.log(foxWarrior); //WarriorFox {name: 'FoxWarrior', age: 35, stock: 'Product out of stock', #checkAge: ƒ, #email: 'wars@gmail.com', …}

class Mag extends MainAdmin {
  constructor({ mana, ...restProps } = {}) {
    super(restProps);
    this.mana = mana;
  }
}

const mag = new Mag({
  name: 'MagMana',
  email: 'manas@gmail.com',
  age: 31,
  stock: MainAdmin.stock.outStock,
  mana: 34000,
});
console.log(mag); //Mag {name: 'MagMana', age: 35, stock: 'Product out of stock', #checkAge: ƒ, #email: 'wars@gmail.com', …}

class Student extends Mag {
  constructor({ element, ...restProps } = {}) {
    super(restProps);
    this.element = element;
  }
}

const magStudent = new Student({
  name: 'MagStudent',
  email: 'manas@gmail.com',
  age: 15,
  stock: MainAdmin.stock.outStock,
  mana: 13700,
  element: '🔥',
});

console.log(magStudent); // Student {name: 'MagStudent', age: 15, stock: 'Product out of stock', #checkAge: ƒ, #email: 'manas@gmail.com', …}

// --------------------------------------------------------------------------------

class Film {
  #isWatched;
  #id;
  constructor(id, title, isWatched = false) {
    this.#isWatched = isWatched;
    this.#id = id;
    this.title = title;
  }

  get isWatched() {
    return this.#isWatched;
  }

  set isWatched(value) {
    if (value) {
      this.#isWatched = true; //ключ має мати назву, відмінну від сеттера
    } else {
      console.log('Ваші дії недоступні');
    }
  }
}
const film1 = new Film(1, 'Interceptor');
console.log(film1);
// new Film(2, "Fantastic Beasts: The Secrets of Dumbledore");
// new Film(3, "Last Seen Alive");
film1.isWatched = true;
console.log(film1.isWatched); // Film {title: 'Interceptor', #isWatched: false, #id: 1}

//-------------------------------------------------------------------------

// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

class UserStudent {
  static counter = 0;
  static addUser() {
    this.counter += 1;
    console.log(this.counter);
  }
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
    UserStudent.addUser();
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
}

class StudentCollege extends UserStudent {
  constructor(name, surname, year) {
    super(name, surname);

    this.year = year;
  }

  getCourse() {
    const currentTime = new Date().getFullYear();
    const result = currentTime - this.year;
    if (result <= 5) {
      return result;
    }
    return `Вже випускник!`;
  }
}
const student1 = new StudentCollege('Vita', '1232');
const student2 = new StudentCollege('ghjhg', '1ghgjh');
const user1 = new UserStudent('Vita111', 'qwe');
const user2 = new UserStudent('Vita222', 'qtyu');
const student = new StudentCollege('Yuliya', 'Nikiforova', 2020);

console.log(student.getCourse());
console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
console.log(student.getCourse()); //поверне 3 (третій курс)
console.log(student); //StudentCollege {year: 2020, #name: 'Yuliya', #surname: 'Nikiforova'}

//-----------------------------------------------------------------
// Write the `Blogger` class to create a blogger object with the following properties:

// - `email` - mail, string
// - `age` - age, number
// - `numberOfPosts` - number of posts, number
// - `topics` - an array of topics on which the blogger specializes

// The class expects one parameter - a settings object with properties of the same name.

// Add `getInfo()` method, which returns the string:
// `User ${post} is ${age} years old and has ${number of posts} posts`.

// Add the `updatePostCount(value)` method, which accepts the `value` parameter
// number of posts to add to the user.
//ex: {
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// }

class Bloger {
  constructor({ email, age, numberOfPosts, topics } = {}) {
    this.email = email;
    this.age = !Number(age) ? 0 : Number(age);
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    return (this.numberOfPosts += value);
  }
}

const blogger = new Bloger({
  email: 'blogger@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(blogger.getInfo()); //User blogger@mail.com is 24 years old and has 20 posts.
console.log(blogger.updatePostCount(25)); // 45
console.log(blogger.getInfo()); // User blogger@mail.com is 24 years old and has 45 posts.

//--------------------------------------------------------------------------------------
// Write a `Storage' class that creates objects for managing the warehouse of goods.
// When called, it will receive one argument - the initial array of goods and write it down
// its `items` property.

// Add class methods:

// - `getItems()` - returns an array of items.
// - `addItem(item)` - gets a new item and adds it to the current items.
// -
// `removeItem(item)` - gets the item and, if it exists, removes it from the current ones.

class StorageA {
  constructor(goods) {
    this._items = goods;
  }
  getItems() {
    return this._items;
    // return [...this._items]; // if modification array for future
  }
  addItem(item) {
    return this._items.push(item);
  }
  removeItem(item) {
    const findIndex = this._items.indexOf(item);

    if (findIndex > -1) {
      return this._items.splice(findIndex, 1);
    }
  }
}

const storageA = new StorageA(['🍎', '🍋', '🍇', '🍑']);
console.log(storageA.getItems()); // ['🍎', '🍋', '🍇', '🍑']
console.log(storageA.addItem('🍏')); //5
console.log(storageA.getItems()); // ['🍎', '🍋', '🍇', '🍑', '🍏']
console.log(storageA.removeItem('🍇')); // ['🍇']
console.log(storageA.getItems()); // ['🍎', '🍋', '🍑', '🍏']

//-----------------------------------------------------------------------------
// Write a `User` class that creates an object with `login` and `email` properties.
// Declare private properties `#login` and `#email` to be accessed via
// getter and setter of `login` and `email`.

class UserS {
  #login;
  #email;
  constructor({ login, email } = {}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    const checkLogin = prompt('Please, enter your login name');
    if (checkLogin === this.#login) {
      return this.#login;
    }
  }

  set login(newLogin) {
    if (newLogin.length > 5) {
      return (this.#login = newLogin);
    }
    return `Login is private`;
  }

  get email() {
    const checkEmail = prompt('Please, enter your email');
    if (checkEmail === this.#email) {
      return this.#email;
    }
    return `Email is private`;
  }
  set email(newEmail) {
    if (newEmail.includes(`@`) && newEmail.includes(`.`)) {
      return (this.#email = newEmail);
    }
  }
}

const userS = new UserS({
  login: 'helenFox',
  email: 'helen@gmail.com',
});

console.log(userS);
console.log(userS.email); // undefined
console.log(userS.email); // helen@gmail.com
console.log((userS.email = 'fox@gmail.com')); // fox@gmail.com
console.log(userS.login); // 'helenFox'
console.log((userS.login = 'fox')); // fox

//---------------------------------------------------------------------------------
// EXAMPLE items = [
// {
// text: 'asdsadsa',
// priority: 'LOW'
// },
// {
// text: 'asdsadsa',
// priority: 'LOW'
// }
// ]

// Write a `Notes` class that manages the collection of notes in the `items` property.
// Note is an object with `text` and `priority` properties. Add static to the class
// property `Priority`,
// in which the priority object will be stored.

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  static findNoteByIndex(text, items) {
    return items.findIndex(note => note.text.toLowerCase() === text.toLowerCase());
  }

  constructor() {
    this.items = [];
  }
  // next variant if in new Notes([])
  // constructor(arr) {
  //   this.items = arr;
  // }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = Notes.findNoteByIndex(text, this.items);
    this.items.splice(index, 1);
  }
  updateNote(text, newPriority) {
    const index = Notes.findNoteByIndex(text, this.items);
    this.items[index].priority = newPriority;
  }
}

const oneNote = new Notes();
// next variant
// const oneNote = new Notes([]);

console.log(oneNote);
oneNote.addNote({
  text: 'One Note',
  priority: Notes.Priority.LOW,
});
console.log(oneNote.items); //{text: 'One Note', priority: 'low'}

oneNote.addNote({
  text: 'Article',
  priority: Notes.Priority.NORMAL,
});

console.log(oneNote.items);
// [{text: 'One Note', priority: 'low'} {text: 'Article', priority: 'normal'}]

oneNote.removeNote('One note');
console.log(oneNote.items); // {text: 'Article', priority: 'normal'}

oneNote.addNote(
  {
    text: 'asdsadsa',
    priority: Notes.Priority.NORMAL,
  },
  {
    text: 'asdsadsa',
    priority: Notes.Priority.LOW,
  }
);

console.log(oneNote.items);

oneNote.updateNote('Article', Notes.Priority.HIGH);
console.log(oneNote.items); // [{text: 'Article', priority: 'high'} {text: 'asdsadsa', priority: 'normal'}]

//----------------------------------------------------------------------------------------------
//---Toggle----------------------------------------------------------------
// Write a class `Toggle` that accepts a settings object `{isOpen: boolean}` and
// declares one `on' property - on/off state (true/false). Default
// the value of the `on` property must be `false`.

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const toggle = new Toggle();
console.group(toggle); // on: false
toggle.toggle();
console.group(toggle.on); // on: true
console.groupEnd('toggle');

const toggle2 = new Toggle({ isOpen: true });
console.group(toggle2); // on: true
toggle2.toggle();
console.group(toggle2.on); // on: false
console.groupEnd('toggle2');

// conditional rendering
// toggle.on && <div></div> -> if toggle.on === true - render div
