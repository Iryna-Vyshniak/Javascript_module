/*
Проміс може бути у трьох станах:

Очікування (pending) - початковий стан під час створення промісу.
Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
Відхилено (rejected) - операція відхилена з помилкою. 

На момент створення проміс знаходиться в очікуванні (pending), після чого може завершитися успішно (fulfilled), повернувши результат (значення), або з помилкою (rejected), повернувши причину. Коли проміс переходить у стан fulfilled або rejected - це назавжди.

Коли проміс виконаний або відхилений -> завершений (settled), термін, який описує те, що проміс перебуває в будь-якому стані, крім очікування.

Відмінності промісу і callback-функції:

Колбеки - це функції, обіцянки - це об'єкти.
Колбеки передаються як аргументи з зовнішнього коду у внутрішній, а обіцянки повертаються з внутрішнього коду у зовнішній.
Колбеки обробляють успішне або неуспішне завершення операції, обіцянки нічого не обробляють.
Колбеки можуть обробляти декілька подій, обіцянки пов'язані тільки з однією подією.

 * Створення 'обіцянок' - Promise
 * - Клас Promise
 
 * -  resolve(value) - функція для виклику у разі успішної операції.    Переданий їй аргумент буде значенням виконаного промісу.
 
 * -  reject(error) - функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

 * - Promise.prototype.then(onResolve, onReject)
 */

//Проміс створюється як екземпляр класу Promise, який приймає функцію (executor) як аргумент і відразу викликає її, ще до створення і повернення промісу.

const promise = new Promise((resolve, reject) => {
  const canFullFill = Math.random() > 0.7;

  setTimeout(() => {
    if (canFullFill) {
      resolve('Проміс виконався успішно, з результатом (виконаний, fullfilled)');
    }
    reject('Проміс виконався з помилкою (відхилений,rejected)');
  }, 3000);
});

/* Метод then() приймає два аргументи - callback-функції, які будуть викликані, коли проміс змінить свій стан. Результат промісу, значення або помилку, вони отримають як аргументи.

promise.then(onResolve, onReject)

onResolve(value) - буде викликана у разі успішного виконання промісу і отримає його результат як аргумент.

onReject(error) - буде викликана у разі виконання промісу з помилкою і отримає її як аргумент.
*/
promise.then(
  result => {
    console.log(`✅ ${result}`);
  },
  err => {
    console.log(`❌ ${err}`);
  }
);

//----- next variant ---------------------------------------------------------
const promiseA = new Promise((resolve, reject) => {
  const fullfilled = Math.random() > 0.3;
  setTimeout(() => {
    if (fullfilled) {
      resolve('Проміс виконався успішно, з результатом (виконаний, fullfilled)');
    }
    reject('Проміс виконався з помилкою (відхилений,rejected)');
  }, 1000);
});

promiseA.then(onResolve, onReject);

function onResolve(result) {
  console.log(`✅ ${result}`);
}
function onReject(err) {
  console.log(`❌ ${err}`);
}

//----------------------------------------------------------------
// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 5000);
});

promiseB.then(onSuccess, onErr);

function onSuccess(result) {
  console.log('onSuccess call inside promise.then()');
  console.log(`✅ ${result}`);
}
function onErr(err) {
  console.log('onErr call inside promise.then()');
  console.log(`❌ ${err}`);
}

console.log('After promise.then()');
