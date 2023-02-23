console.log('hello world');

const form = document.querySelector('.js-form-todo');
const list = document.querySelector('.js-todo-list');

// arr where add all that add when click btn - 2 об'єкти, так як лінтер зробить з одного рядок - важко читати
// value: 'must to do 1', checked: true - значення одного елемента

//example
// let todos = [
//   { id: 1, value: 'must to do 1', checked: true },
//   { id: 2, value: 'must to do 2', checked: false },
// ];
let todos = [];

const loadTodos = () => {
  try {
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    // throw new Error('lorem ipsum');
  } catch (error) {
    console.log('error happened:', error.message);
    todos = [];
  }
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const onFormSubmit = e => {
  e.preventDefault();
  //   console.log(e.currentTarget.elements);
  //   console.log(e.currentTarget.elements.text.value);
  //   const value = e.currentTarget.elements.text.value;
  //   const { value } = e.currentTarget.text;
  const input = e.currentTarget.elements.text;
  const { value } = input;
  //   create new element
  //const newToDo = { value: value, checked: false };
  const newToDo = { id: generateId(), value, checked: false, created: new Date() };
  console.log(newToDo); //{value: 'read', checked: false}
  //   add to arr todos
  todos.push(newToDo);
  input.value = '';

  saveTodos();
  render();
};

// створюємо шаблонізатор
const getToDo = ({ id, value, checked }) => `
<li data-id="${id}" class="todo-list__item">
      <input data-action="check" type="checkbox" name="checkbox" class="todo-list__input" ${
        checked ? 'checked' : ''
      }/>
      <span>${value}</span>
      <div class="btn-wrapper">
          <button data-action="delete" class="todo-list__btn">
            <i data-action="delete" class="fa-sharp fa-solid fa-trash"></i>
          </button>
          <button data-action="view" class="todo-list__btn">
           <i data-action="view" class="fa fa-sticky-note" aria-hidden="true"></i>
          </button>
      </div>
    </li>`;

const render = () => {
  const listItem = todos.map(todo => getToDo(todo)).join('');
  list.innerHTML = '';
  list.insertAdjacentHTML('beforeend', listItem);
};

// create modal from basiclightbox
const modalToDo = basicLightbox.create(
  `
  <div class="modal">
    <h4></h4>
    <p class="text"></p>
    <button class="todo-modal__close-btn js-todo-modal__close-btn">ok</button>
  </div>
`,
  {
    onShow: modalToDo => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: modalToDo => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

const onEscKeyPress = ({ code }) => {
  if (code === 'Escape' && modalToDo.visible()) {
    modalToDo.close();
  }
};

const deleteToDo = id => {
  todos = todos.filter(todo => todo.id !== id);
  console.log('delete');

  saveTodos();
  render();
};

const viewToDo = id => {
  const { created } = todos.find(todo => todo.id === id);
  const { value } = todos.find(todo => todo.id === id);

  const text = modalToDo.element().querySelector('.text');
  const title = modalToDo.element().querySelector('h4');

  text.textContent = created;
  title.textContent = value;
  modalToDo.show();
};

const toggleCheckbox = id => {
  console.log('check:', id);
  todos = todos.map(item => {
    return item.id === id
      ? {
          ...item,
          checked: !item.checked,
        }
      : item;
  });

  saveTodos();
  render();
};

const onToDoClick = e => {
  //   console.log(e.target.dataset); //  {action: 'view'}
  // console.log(e.target.dataset.action); // action: 'view'
  const { action } = e.target.dataset;
  const parent = e.target.closest('li');
  // console.log(parent);
  //   const id = parent.dataset.id;
  //   const { id } = parent?.dataset ?? {};
  const { id } = parent?.dataset || {};
  //console.log(id); // 1

  switch (action) {
    case 'delete':
      deleteToDo(id);
      break;

    case 'view':
      viewToDo(id);
      break;

    case 'check':
      toggleCheckbox(id);
      break;
  }

  //   if (!e.target.classList.contains('')) return;
};

loadTodos();
render();

form.addEventListener('submit', onFormSubmit);
list.addEventListener('click', onToDoClick);
const modalButton = modalToDo.element().querySelector('.js-todo-modal__close-btn');
modalButton.addEventListener('click', modalToDo.close);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
