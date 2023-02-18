const filterForm = document.querySelector('.filter-form');
// console.log(filterForm);

filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('change', onChange);
filterForm.addEventListener('reset', onFormReset);

// створюємо обєкт, де будуть збережені всі дані з нашої групи даних
// {
//     material: 'plastic',
//     size: 'xl',
//     color: 'blue',
// }

/* let selectedFilters = {};

populateForm();

function onFormSubmit(e) {
  e.preventDefault(); */
// console.log(e.currentTarget.elements);
// color: select
// material: select
// size: select

// console.log(e.currentTarget.elements.color.value); // red

/* const elements = e.currentTarget;
  const formData = new FormData(elements); */ // збираємо значення з усіх полів форми - ітеруєма сутність, не об'єкт;
// console.log(formData);

//formData.forEach(data => console.log(data)); // red, sm, steel

// (method) FormData.forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void
// key === name from <select name="color">
/* formData.forEach((value, key) => console.log(`${value}: ${key}`)); */
//red: color
// sm: size
// steel: material
/* } */

// отримуємо значення з кожного select при зміні вибору даних
/* function onChange(e) { */
//   console.log(e.target); // <select name="color"></select> <select name="size"></select> <select name="material"></select>
//   console.log(e.target.name); // color
//   console.log(e.target.value); // green
/* selectedFilters[e.target.name] = e.target.value; */
// console.log(selectedFilters); // {color: 'green', size: 'xl', material: 'wood'} ->якщо ключа немає - він створиться, якщо є - зміниться значення
// add to local storage
// "[object Object]" отримуємо, коли хочемо об'єкт перетворити на рядок, тому JSON.stringify
/*  localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
} */

// заповнити форму даними (які вводили раніше) з local storage при перезавантаженні сторінки
// initForm  - Initializes the form
// populateForm - Populates the form with data - заповнити

/* function populateForm() { */
// витягуємо фільтри з local storage
//  persistedFilters - постійні фільтри
/*  let persistedFilters = localStorage.getItem('selectedFilters'); */
// console.log(filters); // {"color":"green","size":"md","material":"wood"} - string
// перевіряємо чи є ці фільтри, якщо є - розпарсимо в об'єкт
/* if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters); // get object
    console.log(persistedFilters); */ // {color: 'green', size: 'md', material: 'wood'}
// отримуємо і ім'я, і значення з об'єкту
//console.log(Object.entries(persistedFilters)); // [['color', 'red'], ['size', 'xl'], ['material', 'plastic']]
//  Object.entries(persistedFilters).forEach(entry => console.log(entry));
//   ['color', 'green']
//   ['size', 'md']
//   ['material', 'wood']
/* Object.entries(persistedFilters).forEach(([name, value]) => { */
//   console.log(name, value); //color green size md  material wood
/* selectedFilters[name] = value; */ // - заповнюємо обрані фільтри
// заповнюємо обрані фільтри в формі
// console.log(filterForm.elements); // [select, select, select, button, button, color: select, size: select, material: select]
// console.log(filterForm.elements[name].value); // red sm steel
/* filterForm.elements[name].value = value; */
//console.log(filterForm.elements[name].value); // red xl plastic
/*  });
  }
} */
// populateForm() викликаємо на початку вгорі, щоб її ініціалізувати

/* function onFormReset() {
  selectedFilters = {};
  if (localStorage.getItem('selectedFilters')) {
    localStorage.removeItem('selectedFilters');
  }
} */

//-------- NEXT VARIANT WITHOUT OBJECT selectedFilters = {}; -----------------------------------------
const LOCALSTORAGE_KEY = 'selectedFilters';
populateFilterForm();

function onFormSubmit(e) {
  e.preventDefault();
  // console.log(e.currentTarget.elements);
  // console.log(e.currentTarget.elements.color.value); //green
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => console.log(name, value));
}

function onChange(e) {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
}

function onFormReset() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.clear();
}

function populateFilterForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    console.log(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      filterForm.elements[name].value = value;
    });
  }
}
