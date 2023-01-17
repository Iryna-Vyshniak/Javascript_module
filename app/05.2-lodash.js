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

// ._get()
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
const htmlA = document.querySelector('.elem').innerHTML;
// помилка оскільки null
// в деяких випадках, коли відсутність елемента для нас є нормою, ми хотіли б просто отримати .innerHTML = null (тобто html = null).
const htmlAA = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
// ?.
const htmlAAA = document.querySelector('.elem')?.innerHTML; // буде undefined, якщо немає елемента
