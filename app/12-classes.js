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
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
