const filterForm = document.querySelector('.filter-form');
// console.log(filterForm);

filterForm.addEventListener('change', onChange);
filterForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  // console.log(e.currentTarget.elements);
  // color: select
  // material: select
  // size: select

  // console.log(e.currentTarget.elements.color.value); // red

  const elements = e.currentTarget;
  const formData = new FormData(elements); // збираємо значення з усіх полів форми - ітеруєма сутність, не об'єкт;
  // console.log(formData);

  //formData.forEach(data => console.log(data)); // red, sm, steel

  // (method) FormData.forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void
  // key === name from <select name="color">
  formData.forEach((value, key) => console.log(`${value}: ${key}`));
  //red: color
  // sm: size
  // steel: material
}

// створюємо обєкт, де будуть збережені всі дані з нашої групи даних
// {
//     material: 'plastic',
//     size: 'xl',
//     color: 'blue',
// }

const selectedFilters = {};

// отримуємо значення з кожного select при зміні вибору даних
function onChange(e) {
  //   console.log(e.target); // <select name="color"></select> <select name="size"></select> <select name="material"></select>
  //   console.log(e.target.name); // color
  //   console.log(e.target.value); // green
  selectedFilters[e.target.name] = e.target.value;
  // console.log(selectedFilters); // {color: 'green', size: 'xl', material: 'wood'} ->якщо ключа немає - він створиться, якщо є - зміниться значення
  // add to local storage
  // "[object Object]" отримуємо, коли хочемо об'єкт перетворити на рядок, тому JSON.stringify
  localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
}
