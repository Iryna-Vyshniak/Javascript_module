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
const stepX = [];
const stepO = [];

let player = 'X';

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

createMarkup();

content.addEventListener('click', onClick);

function onClick(e) {
  if (!e.target.classList.contains('item')) {
    return;
  }
  // if (e.target === e.currentTarget) {
  //     return;
  // }
  if (e.target.textContent) {
    return;
  }

  const currentId = Number(e.target.dataset.id);
  // console.log(currentId);

  let result = false;

  if (player === 'X') {
    stepX.push(currentId);
    result = isWinner(stepX);
  } else {
    stepO.push(currentId);
    result = isWinner(stepO);
  }

  e.target.textContent = player;
  if (e.target.textContent === 'X') {
    e.target.style.color = 'red';
  } else {
    e.target.style.color = 'blue';
  }
  if (result) {
    champion(player);
    return;
  }

  player = player === 'X' ? 'O' : 'X';
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function champion(player) {
  setTimeout(() => {
    alert(player);
    createMarkup();
  }, 500);
}
