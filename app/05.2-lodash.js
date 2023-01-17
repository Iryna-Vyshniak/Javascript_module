console.dir(_);

// _.isEmpty()
_.isEmpty(null);
console.log(_.isEmpty(null)); //  true

_.isEmpty(true);
console.log(_.isEmpty(true)); // true

_.isEmpty(1);
console.log(_.isEmpty(1)); // true

_.isEmpty([1, 2, 3]);
console.log(_.isEmpty([1, 2, 3])); // false

_.isEmpty({ a: 1 });
console.log(_.isEmpty({ a: 1 })); // false

// ==========================================================================
//._get()
//Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

//Отримує значення на шляху до об’єкта. Якщо дозволене значення не визначено, замість нього повертається defaultValue.
const object = { a: [{ b: { c: 3 } }] };

_.get(object, 'a[0].b.c');
console.log(_.get(object, 'a[0].b.c'));
//  3

_.get(object, ['a', '0', 'b', 'c']);
console.log(_.get(object, ['a', '0', 'b', 'c']));
//  3

_.get(object, 'a.b.c', 'default');
console.log(_.get(object, 'a.b.c', 'default'));
// 'default'

const user = {
  name: 'mango',
  location: {
    city: 'Lviv',
  },
};

console.log(_.get(user, 'location.city'));

// ==========================================================================

// ОПЦІАЛЬНИЙ ЛАНЦЮЖОК ?.
// - припиняє обчислення, якщо значення перед ?. є undefined або null, і повертає undefined.
// - спеціальна синтаксична конструкція, що також працює з функціями і квадратними дужками.

//- слід використовувати ?. тільки в тих ситуаціях коли ми припускаємо що значення може не існувати.
// Наприклад, якщо по нашій логіці об’єкт user точно існує, але його властивість address є необов’язковою, тоді нам слід використовувати конструкцію user.address?.street. Проте аж ніяк не user?.address?.street.
// Тоді якщо помилково змінна user виявиться пустою, ми побачимо програмну помилку і зможемо це виправити. В іншому випадку, якщо ми зловживаємо ?., помилки можуть замовчуватися там де це непотрібно й ускладнювати процес налагодження.

console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

console.log(user?.location?.city);
// ?. - check every value in order (кожне значення по черзі). Якщо значення відсутнє - далі не шукай. Поверне undefind

const userData = {}; // user без свойства "address"

// console.log(user.address.street); // Error

console.log(userData.address ? userData.address.street : undefined);
//undefined

console.log(
  userData.address ? (userData.address.street ? userData.address.street.name : null) : null
);
// null

console.log(userData.address && userData.address.street && userData.address.street.name); // undefined
// ?.
console.log(userData?.address?.street); // undefined

const usersData = null;

console.log(usersData?.address); // undefined
console.log(usersData?.address.street); // undefined

// об’єкт котрий відповідає елементу на вебсторінці за допомогою спеціальних методів, наприклад: document.querySelector('.elem'). Проте якщо ми намагатимемось отримати елемент, якого немає на сторінці, то нам вернеться null.

// document.querySelector('.elem') рівний null якщо такого елемента не існує

//const htmlA = document.querySelector('.elem').innerHTML;
// помилка оскільки null

// в деяких випадках, коли відсутність елемента для нас є нормою, ми хотіли б просто отримати .innerHTML = null (тобто html = null).
const htmlAA = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
// ?.
const htmlAAA = document.querySelector('.elem')?.innerHTML; // буде undefined, якщо немає елемента

// =========================================================================
/*
 * union()
 */

// - Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
// - Returns the new array of combined values.

_.union([2], [1, 2]); //  [2, 1]
console.log(_.union([1, 2, 3], [3, 4, 5])); //[1, 2, 3, 4, 5]
console.log(_.union([1, 2, 3], [1, 3, 2, 4, 3, 5])); //[1, 2, 3, 4, 5]

// ========================================================================

//_.range([(start = 0)], end, [(step = 1)]);

//Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
//- A step of - 1 is used if a negative start is specified without an end or step.
//- If end is not specified, it's set to start with start then set to 0.

//- Створює масив чисел (додатних і/або від’ємних), що просуваються від початку до кінця, але не включаючи його.
//- Крок - 1 використовується, якщо вказано негативний початок без кінця або кроку.
//- Якщо кінець не вказано, для нього встановлюється початок із початку, а потім значення 0.

// [start=0] (number): The start of the range.
// end (number): The end of the range.
// [step=1] (number): The value to increment or decrement by.

// Returns (Array): Returns the range of numbers.
_.range(4); // [0, 1, 2, 3]

_.range(-4); // [0, -1, -2, -3]

_.range(1, 5); // [1, 2, 3, 4]

_.range(0, 20, 5); // [0, 5, 10, 15]

_.range(0, -4, -1); // [0, -1, -2, -3]

_.range(1, 4, 0); // [1, 1, 1]

_.range(0); // []

//_.rangeRight([start=0], end, [step=1])

_.rangeRight(4); //  [3, 2, 1, 0]

_.rangeRight(-4); //  [-3, -2, -1, 0]

_.rangeRight(1, 5); // [4, 3, 2, 1]

_.rangeRight(0, 20, 5); //  [15, 10, 5, 0]

_.rangeRight(0, -4, -1); // [-3, -2, -1, 0]

_.rangeRight(1, 4, 0); //  [1, 1, 1]

_.rangeRight(0); // []

//=========================================================================
//_.sortBy(collection, [(iteratees = [_.identity])]);

//Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).

//Створює масив елементів, відсортованих у порядку зростання за результатами виконання кожного елемента колекції через кожен ітератор. Цей метод виконує стабільне сортування, тобто зберігає початковий порядок сортування рівних елементів. Ітерації викликаються з одним аргументом: (значення).

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

const sortByAge = _.sortBy(users, user => user.age);
console.log(sortByAge);
// {user: 'barney', age: 34}
// {user: 'barney', age: 36}
// {user: 'fred', age: 40}
// {user: 'fred', age: 48}

const sortByUserAge = _.sortBy(users, ['user', 'age']);
console.log(sortByUserAge);
// [{user: 'barney', age: 34}
// {user: 'barney', age: 36}
// {user: 'fred', age: 40}
// {user: 'fred', age: 48}]
