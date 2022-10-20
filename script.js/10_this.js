// Rазведывательному управлению SI:7, нужно безопасно хранить добытые данные. Твоё задание абсолютно засекречено!
// Создай функцию makeSecret, которая принимает строки secret и password и возвращает функцию storage с секретом.
//     • при обычном вызове storage возвращает строку Absolutely not a secret thing
//     • если вызвать метод storage.getSecret и передать ему правильный пароль, то мы получим секретное значение secret
//     • если пароль неправильный, то результат будет Wrong password!
//     • если пароль трижды подряд введён неправильно, то метод блокируется и все его последующие вызовы будут возвращать null (даже для правильного пароля)
//     • если ДО блокировки введён правильный пароль, то счётчик неправильных вводов сбрасывается снова до 3
//     • метод storage.setSecret(newSecret, newPassword) позволяет установить новый пароль и секретную фразу и сбросить счётчик

const storage = makeSecret('Santa exists!', 'qwerty');
storage.setSecret('Coll Secret', 'qazwsx');

function makeSecret(secret, pasw) {
  let currentSecret = secret;
  let currentPasw = pasw;
  let numberOfMistakes = 0;

  const innerStorage = () => 'Absolutely not a secret thing';
  innerStorage.getSecret = initialPasw => {
    if (numberOfMistakes > 3) {
      return null;
    }

    if (initialPasw === currentPasw) {
      return currentSecret;
    }

    numberOfMistakes++;
    return 'Wrong password!';
  };

  innerStorage.setSecret = (newSecret, newPasw) => {
    currentSecret = newSecret;
    currentPasw = newPasw;
    numberOfMistakes = 0;
  };
  return innerStorage;
}

// BLIND
/* FULL VERSION

const calcOrder = (func, num, price, drink) => {
  let sum = num * price;
  let text = '';

  if (drink === 'coffee') {
    text = 'Get ice!';
  } else if (drink === 'tea') {
    text = 'Get cake!';
  } else {
    text = 'Get free order!';
  }

  func(sum, text);
};

const showMessage = (text, orderPrice) => {
  console.log(text);
  console.log(`Your order price: ${orderPrice}`);
};

calcOrder(showMessage, 3, 30, 'coffee');
*/

const calcOrder = (func, num, price, drink) => {
  const sum = num * price;

  func(sum);
};

const showMessage = (text, orderPrice) => {
  console.log(text);
  console.log(`Your order price: ${orderPrice}`);
};

calcOrder(showMessage.bind(this, 'Get ice!'), 3, 20, 'coffee');
calcOrder(showMessage.bind(this, 'Get cake!'), 2, 10, 'tea');
calcOrder(showMessage.bind(this, 'Get surprise!'), 5, 15, 'milk');
