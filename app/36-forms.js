//TODO:==============================================
const alertBtn = document.querySelector('#alertButton');
const alertInpt = document.querySelector('#alertInput');
alertBtn.addEventListener('click', () => alert(alertInpt.value));

/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

//TODO:==============================================

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================

/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
const nameBtn = document.querySelector('#sortByNameButton');
const lastnameBtn = document.querySelector('#sortByLastNameButton');
const peopleList = document.querySelectorAll('.person');
const peopleUl = document.querySelector('.people');

// console.log(peopleUl.children);

function sortPeopleByName() {
  const people = [...peopleUl.children];
  const sortPeople = people
    .map(person => `<li>${person.textContent}</li>`)
    .sort((a, b) => a.localeCompare(b))
    .join('');

  peopleUl.innerHTML = sortPeople;
  //   console.log(sortPeople);
}

// ------ 1 variant -----------------
// function sortPeopleByLastName() {
//   const people = [...peopleUl.children];
//   const sortPeople = people
//     .map(person => `${person.textContent}`.split(' ').reverse().join(' '))
//     .map(person => `<li>${person}</li>`)
//     .sort((a, b) => a.localeCompare(b))
//     .join('');

//   peopleUl.innerHTML = sortPeople;
//   console.log(sortPeople);
// }

// ------ 2 variant -----------------
// function sortPeopleByLastName() {
//   const people = [...peopleUl.children];
//   const sortPeople = people
//     .map(person => `${person.textContent}`.split(' ').reduce((prev, next) => next + ' ' + prev))
//     .map(person => `<li>${person}</li>`)
//     .sort((a, b) => a.localeCompare(b))
//     .join('');

//   peopleUl.innerHTML = sortPeople;
//   console.log(sortPeople);
// }

// ------ 3 variant -----------------
function sortPeopleByLastName() {
  const people = [...peopleUl.children];
  const sortPeople = people
    .map(person => `<li>${person.textContent}</li>`.replace(/(\w+)\s(\w+)/, '$2 $1'))
    .sort((a, b) => a.localeCompare(b))
    .join('');

  peopleUl.innerHTML = sortPeople;
  console.log(sortPeople);
}

nameBtn.addEventListener('click', sortPeopleByName);
lastnameBtn.addEventListener('click', sortPeopleByLastName);

/*
Завдання 10
Наведено список студентів. Зробіть можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список персонажів. Зробіть фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/
