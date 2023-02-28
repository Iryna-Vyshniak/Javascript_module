/*
 * Промісифікація:
Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс.
 * - Проблема доступу до результату промісу з колбеком
 * - Функція яка повертає проміс
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
