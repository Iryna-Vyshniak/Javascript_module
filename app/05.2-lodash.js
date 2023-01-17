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

const playersSocers = [
  { id: 'player-1', name: 'Roberto', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Mersi', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Pele', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Zigun', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

const sortPlay = _.sortBy(playersSocers, 'points');
console.log(sortPlay);

// {id: 'player-5', name: 'Chelsy', timePlayed: 280,  points: 48,  online: true}
// {id: 'player-1', name: 'Roberto', timePlayed: 310, points: 54,  online: false}
// {id: 'player-4', name: 'Zigun', timePlayed: 150,   points: 71,  online: false}
// {id: 'player-2', name: 'Mersi', timePlayed: 470,   points: 92,  online: true}

// ==========================================================================
// _.sum(array);
// Computes the sum of the values in array.
_.sum([4, 2, 8, 6]);
// => 20

//==========================================================================
// _.sumBy(array, [(iteratee = _.identity)]);
//Цей метод схожий на _.sum, за винятком того, що він приймає iteratee, який викликається для кожного елемента в масиві, щоб створити значення для підсумовування. Ітерований викликається з одним аргументом: (значення).
const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

const sumByN = _.sumBy(objects, 'n');
console.log(sumByN); // 20

const sumPoints = _.sumBy(playersSocers, 'points');
console.log(sumPoints); //313

// const sumTime = _.sumBy(playersSocers, 'timePlayed');
// console.log(sumTime); // 1440

const sumTime = _.sumBy(playersSocers, player => player.timePlayed);
console.log(sumTime); // 1440

//======================================================================================================
// _.uniq(array)

// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
//Створює версію масиву без дублікатів, використовуючи SameValueZero для порівняння рівності, у якому зберігається лише перше входження кожного елемента. Порядок значень результату визначається порядком їх появи в масиві.
const uniq = _.uniq([2, 1, 2]);
console.log(uniq); //  [2, 1]

// _.uniqBy(array, [iteratee=_.identity])

// This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument

//Цей метод схожий на _.uniq, за винятком того, що він приймає iteratee, який викликається для кожного елемента в масиві для створення критерію, за яким обчислюється унікальність. Порядок значень результату визначається порядком їх появи в масиві. Iteratee викликається з одним аргументом

const uniqBy = _.uniqBy([2.1, 1.2, 2.3], Math.floor);
console.log(uniqBy); // [2.1, 1.2]

// The `_.property` iteratee shorthand.
const arr = [{ x: 1 }, { x: 2 }, { x: 1 }];
const uniqByArray = _.uniqBy(arr, 'x');
console.log(uniqByArray); // => [{ 'x': 1 }, { 'x': 2 }]

//_.sortedUniq(array)
//This method is like _.uniq except that it's designed and optimized for sorted arrays.

const sortUniq = _.sortedUniq([1, 1, 2]);
console.log(sortUniq); //  [1, 2]

const sortUniqA = _.sortedUniq([2, 2, 3, 4, 4, 5]);
console.log(sortUniqA); //  [2, 3, 4, 5]

// _.sortedUniqBy(array, [iteratee]);
//This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]

//===========================================================================================================
//_.minBy(array, [iteratee=_.identity])

//his method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).
const objectsA = [{ n: 1 }, { n: 2 }];

// The `_.property` iteratee shorthand.
_.minBy(objectsA, 'n');
// => { 'n': 1 }

const minTimePlayed = _.minBy(playersSocers, 'timePlayed');
console.log(minTimePlayed); // {id: 'player-4', name: 'Zigun', timePlayed: 150, points: 71, online: false}

//_.maxBy(array, [iteratee=_.identity])
const maxTimePlayed = _.maxBy(playersSocers, 'timePlayed');
console.log(maxTimePlayed); // {id: 'player-2', name: 'Mersi', timePlayed: 470, points: 92, online: true}
const maxTimePlayedName = _.maxBy(playersSocers, 'timePlayed').name;
console.log(maxTimePlayedName); // Mersi
const maxTimePlayedPoints = _.maxBy(playersSocers, 'timePlayed').points;
console.log(maxTimePlayedPoints); // 92

//============================================================================================================
// _.camelCase([string=''])
// Converts string to camel case.

_.camelCase('Foo Bar');
// => 'fooBar'

_.camelCase('--foo-bar--');
// => 'fooBar'

_.camelCase('__FOO_BAR__');
// => 'fooBar'

//_.capitalize([string=''])
// Converts the first character of string to upper case and the remaining to lower case.
const capitalizeB = _.capitalize('FRED');
console.log(capitalizeB); // 'Fred'

const capitalizeA = _.capitalize('fred');
console.log(capitalizeA); //  'Fred'

const capitalizeC = _.capitalize('fReD iS Young');
console.log(capitalizeC); //  Fred is young

//_.kebabCase([string=''])
// Converts string to kebab case.
_.kebabCase('Foo Bar'); // => 'foo-bar'

_.kebabCase('fooBar'); // => 'foo-bar'

_.kebabCase('__FOO_BAR__'); // => 'foo-bar'

//_.lowerCase([string=''])
// Converts string, as space separated words, to lower case.
_.lowerCase('--Foo-Bar--'); // => 'foo bar'

_.lowerCase('fooBar'); // => 'foo bar'

_.lowerCase('__FOO_BAR__'); // => 'foo bar'

//_.upperCase([string=''])
_.upperCase('--foo-bar'); // => 'FOO BAR'

_.upperCase('fooBar'); // => 'FOO BAR'

_.upperCase('__foo_bar__'); // => 'FOO BAR'

//_.upperFirst([string=''])
_.upperFirst('fred'); // => 'Fred'

_.upperFirst('FRED'); // => 'FRED'
