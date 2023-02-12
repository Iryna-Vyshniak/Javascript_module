// MODEL
const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

// DATA  - данные, что в интерфейсе. Никогда не надеятся на то, что в интерфейсе

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// создаем рефы
const refs1 = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs1.input.addEventListener('input', _.debounce(onFilterChange, 300)); //результат появится через 300мс после того, как пользователь прекратит свой ввод. В большинстве случаев debounce
// library Fuse.js для "пушистого" поиска

// 1.1 присаиваем переменной ф-цию, где rendered разметка
const listItemsMarkup = createListItemsMarkup(tech);
// console.log(listItemMarkup);
// innerHTML, когда в элементе пусто; insertAdjacentHTML('beforeend', ...) - когда вставляем в объект, который уже есть в разметке
// refs.list.innerHTML(listItemsMarkup);

populateList(listItemsMarkup);

// 1 Рендерим разметку элементов списка
function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

// 2 при вводе в input происходила фильтрация из списка ul, остаются те li в которых есть значения, которые вводим в input h -> html
function onFilterChange(e) {
  console.log('INPUT');
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  // refs.list.innerHTML = listItemsMarkup;
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs1.list.innerHTML = markup;
}

// ------------------------------------------------------------------------------------------------------

const subjects = [
  { label: 'English' },
  { label: 'Math' },
  { label: 'Art' },
  { label: 'Science' },
  { label: 'History' },
  { label: 'Music' },
  { label: 'Chemistry' },
  { label: 'Biology' },
  { label: 'Technology' },
  { label: 'Graphic Design' },
  { label: 'GraphQl' },
  { label: 'Algebra' },
  { label: 'Geometry' },
];

const refs2 = {
  list: document.querySelector('.js-list-subj'),
  input: document.querySelector('#filter-subj'),
};

const markup = renderListMarkup(subjects);
markupList(markup);

refs2.input.addEventListener('input', _.debounce(onSearchFilter, 300));

function onSearchFilter(e) {
  const filter = e.target.value.toLowerCase();

  const filterList = subjects.filter(subject => subject.label.toLowerCase().includes(filter));

  const filteredMarkup = renderListMarkup(filterList);
  markupList(filteredMarkup);
}

function renderListMarkup(items) {
  return items.map(({ label }) => /*html*/ `<li>${label}</li>`).join('');
}

function markupList(markup) {
  refs2.list.innerHTML = markup;
}

//----------------------------------------------------------------
const allStudents = [
  'Jayne Kuyper',
  'Tiesha Laine',
  'Lupe Olague',
  'Clarita Bellman',
  'Laura Munden',
  'Bertram Calvi',
  'Georgianna Sparr',
  'Carolann Seller',
  'Felicia Midgette',
  'Kasandra Bezio',
  'Elias Vanwyk',
  'Yu Mccool',
  'Kati Golub',
  'Pat Dalley',
  'Loreta Francis',
  'Beatris Larusso',
  'Corrin Vancleve',
  'Sofia Ressler',
  'Erlene Burke',
  'Breann Sande',
  'Samatha Sao',
  'Henry Say',
  'Monnie Bernhard',
  'Dia Culbert',
  'Sunny Disandro',
  'Mack Sen',
  'Jeremiah Astle',
  'Misha Ono',
  'Silas Aubry',
  'Kenya Longmore',
  'Mirta Brandenberger',
  'Eneida Overholt',
  'Marcelo Popejoy',
  'Serafina Irvin',
  'Leroy Tacey',
  'Brice Hedrick',
  'Elana Hoops',
  'Keena London',
  'Enriqueta Hein',
  'Valeria Turnbull',
  'Earlean Canchola',
  'Corinna Tousignant',
  'Sherry Rivera',
  'Chasity Janda',
  'Tamela Barlow',
  'Leandro Lonergan',
  'Karlene Breunig',
  'Winter Endicott',
  'Salena Nail',
  'Tanner Clapper',
];

const searchBox = document.querySelector('#search-box');
const studentList = document.querySelector('.js-list-students');

searchBox.addEventListener('input', _.debounce(onSearch, 300));

populateStudentList(allStudents);

function onSearch(e) {
  const filter = e.target.value.toLowerCase();
  const visibleStudents = allStudents.filter(student => student.toLowerCase().includes(filter));
  populateStudentList(visibleStudents);
}

function populateStudentList(students) {
  const markup = students.map(student => `<li>${student}</li>`).join('');
  studentList.innerHTML = markup;
}
