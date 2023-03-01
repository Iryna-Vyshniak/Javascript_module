const startBtn = document.querySelector('.js-start-race');
const winnerField = document.querySelector('.js-winner');
const progressField = document.querySelector('.js-progress');
const tableBody = document.querySelector('.js-results-table > tbody');
let raceCounter = 0;

const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

startBtn.addEventListener('click', onStartRace);

function onStartRace() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  //winnerField.textContent = '';
  updateProgressField(`Race is over, bids are being accepted.`);
  getWinner(promises);
  //   Promise.race(promises).then(({ horse, time }) => {
  //     updateWinnerField(`Winner ${horse} by finishing in ${time} time`);
  //     updateResultsTable({ horse, time, raceCounter });
  //   });
  waitForAll(promises);
  //   Promise.all(promises).then(updateProgressField(`Race is over, bids are being accepted.`));
}

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function updateWinnerField(msg) {
  winnerField.textContent = msg;
}
function updateProgressField(msg) {
  progressField.textContent = msg;
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  tableBody.insertAdjacentHTML('beforeend', tr);
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(updateProgressField(`Race is over, bids are being accepted.`));
}

function getWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Winner ${horse} by finishing in ${time} time`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

// run('Secretariat')
//   .then(result => console.log(result)) // {horse: 'Secretariat', time: 3027}
//   .catch(err => console.log(err));

// const promises = horses.map(horse => run(horse));
// const promises = horses.map(run);
// console.log(promises); //[Promise, Promise, Promise, Promise, Promise]

/* Promice.race([])  -> to wait for the first fulfilled promise */

/*
 *Promise.race(promises).then(horse => console.log(horse)); */
// {horse: 'Seabiscuit', time: 2567} -> the most quickly horse
/* 
*Promise.race(promises).then(({ horse, time }) => console.log(`Winner ${horse} by finishing in ${time} time`)
); */

/* Promise.all([]) to wait for all promises  */

// Promise.all(promises).then(horses =>
//   horses.map(({ horse, time }) => console.log(`${horse}: ${time}`))
// );
// {horse: 'Secretariat', time: 2823}
// {horse: 'Eclipse', time: 3411}
// {horse: 'West Australian', time: 2100}
// {horse: 'Flying Fox', time: 2613}
// {horse: 'Seabiscuit', time: 3220}

/*
 *Promise.all(promises).then(horses => console.log(`Race is over, bids are being accepted.`)); */

// console.log(
//   `%c Winner by finishing in
//      time`,
//   'color: green;  font-size: 14px;'
// );
