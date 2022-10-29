
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
const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300)); //результат появится через 300мс после того, как пользователь прекратит свой ввод. В большинстве случаев debounce
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

    const filteredItems = tech.filter(t =>
        t.label.toLowerCase().includes(filter),
    );

    const listItemsMarkup = createListItemsMarkup(filteredItems);
    // refs.list.innerHTML = listItemsMarkup;
    populateList(listItemsMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}