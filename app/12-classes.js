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
