const content = document.querySelector('.content');

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
// const KEYS = {
//   X: 'keyX',
//   O: 'keyO',
//   player: 'player',
// };

const KEY_X = 'keyX';
const KEY_O = 'keyO';
const KEY_PLAYER = 'player';
const KEY_COUNTER = 'counter';
const endGame = 9;

let player = localStorage.getItem(KEY_PLAYER) || 'X';
let counter = localStorage.getItem(KEY_COUNTER) || 0;
const stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
const stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];

// заповнюємо даними з locale storage при перезавантаженні сторінки

function autoComplite() {
  console.dir(content); // <div>...</div>
  [...content.children].forEach(item => {
    // перевіряємо чи id клітинки входить в масив, який зберігається в locale storage
    const id = Number(item.dataset.id);
    if (stepX.includes(id)) {
      item.textContent = 'X';
    } else if (stepO.includes(id)) {
      item.textContent = 'O';
    } else {
      item.textContent = '';
    }
  });
}

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

createMarkup();
autoComplite();

content.addEventListener('click', onClick);

function onClick(e) {
  if (!e.target.classList.contains('item')) {
    return;
  }
  // if (e.target === e.currentTarget) {
  //     return;
  // }
  if (e.target.textContent) {
    // if write x or 0
    return;
  }

  //if hasn`t x or 0 find id our card
  const currentId = Number(e.target.dataset.id);
  // console.log(currentId);

  let result = false;
  counter += 1;
  if (player === 'X') {
    stepX.push(currentId); // push number of our card from id
    localStorage.setItem(KEY_X, JSON.stringify(stepX));
    result = isWinner(stepX);
  } else {
    stepO.push(currentId);
    localStorage.setItem(KEY_O, JSON.stringify(stepO));
    result = isWinner(stepO);
  }

  e.target.textContent = player;

  // if (e.target.textContent === 'X') {
  //   e.target.style.color = 'red';
  // } else {
  //   e.target.style.color = 'blue';
  // }

  if (result) {
    champion(player);
    return;
  }

  if (counter === endGame) {
    champion('RESTART GAME');
    return;
  }

  player = player === 'X' ? 'O' : 'X';
  localStorage.setItem(KEY_PLAYER, player);
  localStorage.setItem(KEY_COUNTER, JSON.stringify(counter));
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function champion(player) {
  setTimeout(() => {
    alert(player);
    createMarkup();
    localStorage.clear();
  }, 500);
}

// another variant without counter

// const content = document.querySelector('.content');
// const KEY_X = 'keyX';
// const KEY_O = 'keyO';
// const CURRENT_PLAYER = 'player';
// let player = localStorage.getItem(CURRENT_PLAYER) || 'X';
// let stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
// let stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];
// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// let markup = '';

// for (let i = 1; i <= 9; i += 1) {
//   markup += `<div class="item" data-id="${i}"></div>`;
// }

// content.insertAdjacentHTML('beforeend', markup);
// content.addEventListener('click', onClick);

// function onClick(evt) {
//   // '' => !false => true
//   if (!evt.target.textContent) {
//     const id = Number(evt.target.dataset.id);
//     if (player === 'X') {
//       stepX.push(id);
//       localStorage.setItem(KEY_X, JSON.stringify(stepX));
//       const isWinner = checkWinner(stepX);
//       evt.target.textContent = player;
//       if (isWinner) {
//         alert(`${player} is Winner 😎`);

//         setTimeout(() => {
//           reset();
//         }, 500);
//         return;
//       }
//     } else {
//       stepO.push(id);
//       localStorage.setItem(KEY_O, JSON.stringify(stepO));
//       const isWinner = checkWinner(stepO);
//       evt.target.textContent = player;
//       if (isWinner) {
//         alert(`${player} is Winner 😎`);

//         setTimeout(() => {
//           reset();
//         }, 500);
//         return;
//       }
//     }

//     player = player === 'X' ? 'O' : 'X';
//     localStorage.setItem(CURRENT_PLAYER, player);
//   }
// }

// function checkWinner(arr) {
//   const result = win.some(values => values.every(value => arr.includes(value)));
//   return result;
// }

// function reset() {
//   content.innerHTML = markup;
//   // localStorage.removeItem(KEY_X);
//   localStorage.clear();
//   player = 'X';
//   stepX = [];
//   stepO = [];
// }
