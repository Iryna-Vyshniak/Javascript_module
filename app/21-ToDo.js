const toDoList = [
  {
    id: 1,
    text: 'Send an email update to the team: 9 a.m.',
  },
  {
    id: 2,
    text: 'Call the design agency to finalize mockups: 11 a.m.',
  },
  {
    id: 3,
    text: 'Touch base with recruiters about the new role: 2 p.m.',
  },
  {
    id: 4,
    text: 'Meet with the engineering team: 4 p.m.',
  },
  {
    id: 5,
    text: 'Yoga class tomorrow: 5 p.m.',
  },
];

// const renderList = (list) => {
//   const result = list
//     .map((item) => `<li id="${item.id}">${item.text}</li>`)
//     .join("");
//   return result;
// };

// const renderList = (list) =>
//   list.map(({ id, text }) => `<li id="${id}">${id}). ${text}</li>`).join("");

const form = document.querySelector('.form');
const input = document.querySelector('.input');

function createLi(id, text) {
  //   return `<li id="${id}">${id}.  ${text}</li>`;
  return `<li id="${id}">&#10003;  ${text}</li>`;
}

function renderList(listItems) {
  return listItems.reduce((acc, { id, text }) => acc + createLi(id, text), '');
}

const insertListItems = string => {
  const ul = document.querySelector('.list');
  ul.insertAdjacentHTML('beforeend', string);
};

const markup = renderList(toDoList);
insertListItems(markup);

const submitHandler = e => {
  e.preventDefault();

  toDoList.push({ text: input.value, id: toDoList.length });
  insertListItems(createLi(toDoList.length, input.value));
  input.value = '';
};

form.addEventListener('submit', submitHandler);
