const filterForm = document.querySelector('.filter-form');
// console.log(filterForm);

filterForm.addEventListener('change', () => {});
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
  formData.forEach((value, key) => console.log(`${value}: ${key}`));
  //red: color
  // sm: size
  // steel: material
}
