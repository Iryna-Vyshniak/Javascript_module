/*
 * Промісифікація:
Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс.
 * - Проблема доступу до результату промісу з колбеком
 * - Функція яка повертає проміс
 * 
 * fn().then().catch()
 */

// функція не зважає на той код, який буде використовувати її результат. Вона просто виконує якусь операцію і повертає результат своєї роботи у зовнішній код. Для того щоб повернути результат асинхронної операції, з функції необхідно повернути проміс.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Використання колбеків - гірший варіант
// знає занадто багато про той код, який буде використовувати результат її роботи. Вона очікує колбеки і відповідає за їх виклик за певних умов. Тобто  передаємо щось всередину функції (колбеки) і СПОДІВАЄМОСЯ, що воно відпрацює правильно

//const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

//TODO ----------------------------------------------------------------
// use callbacks - связаность кода, зависимость от других функций

function makeOrder(dish, onSuccess, onError) {
  const passed = Math.random() > 0.3;

  setTimeout(() => {
    if (passed) {
      onSuccess(`Here your ${dish}`);
    } else {
      onError(`Sorry, your ${dish} isn't here`);
    }
  }, 1000);
}

makeOrder('pizza', onMakeOrderSuccess, onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log(result); // Here your pizza
}
function onMakeOrderError(error) {
  console.log(error); // Sorry, your pizza isn't here
}

// refactor with promise without callback
function makeOrderNext(dish) {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.3;

    setTimeout(() => {
      if (passed) {
        resolve(`✅ Here is your order: ${dish}`);
      } else {
        reject(`❌ Oops, we're out of groceries`);
      }
    }, 1000);
  });
}

makeOrderNext('pizza')
  .then(onMakeOrderSuccessNext) // ✅ Here is your order: pizza
  .catch(onMakeOrderErrorNext); // ❌ Oops, we're out of groceries

function onMakeOrderSuccessNext(result) {
  console.log(result); // ✅ Here is your order: pizza
}
function onMakeOrderErrorNext(error) {
  console.log(error); // ❌ Oops, we're out of groceries
}

//TODO---------------------------------------------------------------

const coffee = new Promise((resolve, reject) => {
  const randomCoffee = Math.random() > 0.2;
  setTimeout(() => {
    if (randomCoffee) {
      resolve(`Your coffee is ready`);
    }
    reject(Error(`Ooops... nothing...`));
  }, 1000);
});

coffee.then(result => console.log(result)).catch(err => console.log(err)); //Your coffee is ready

//TODO ----------------------------------------------------------------
// if 100% resolve

//BEFORE
/* const makeCoffeeAroma = (coffee, onSuccess) => {
  onSuccess(`Your ${coffee} is ready`);
};

makeCoffeeAroma('Latte', makeCoffeeSuccess); */

// AFTER REFACTOR WITH PROMISE

const makeCoffeeAroma = coffee => Promise.resolve(`Your ${coffee} is ready`);

makeCoffeeAroma('Latte')
  .then(result => console.log(result)) // Your Latte is ready
  .catch(err => console.log(err)); //

function makeCoffeeSuccess(result) {
  console.log(result);
}

function makeCoffeeError(err) {
  console.error(Error(err));
}

//todo ---- POKEMONS ---- --------------------------------

//! метод fetch повертає проміс на своє місце, як і  new Promise
/* 
function fetch(url) {
    return new Promise(...)
} 

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => result.json()); => it`s PROMISE */

const fetchPokemonById = id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => result.json());

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

function onFetchError(error) {
  console.error(Error(`Didn't find pokemon with this id`));
  console.log(error);
}

function onFetchSuccess(pokemon) {
  console.log(pokemon);
}
