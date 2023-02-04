/*
document.querySelector(selector) => if didn`t find return => null и document.querySelectorAll(selector) => if didn`t find return []
 */

const magicBtn = document.querySelector('.js-magic-btn');

const navEl = document.querySelector('.js-site-nav');
console.log('navEl', navEl); // <ul class="site-nav js-site-nav">...</ul>

const navRef = document.querySelector('.js-site-n');
console.log('navRef', navRef); // null

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl); //[a.site-nav__link, a.site-nav__link, a.site-nav__link]

const navLinksRef = document.querySelectorAll('.site-nav__l');
console.log(navLinksRef); //NodeList []

const navLiEl = document.querySelectorAll('.js-site-nav li');
console.log('navLiEl', navLiEl); //[li.site-nav__item, li.site-nav__item, li.site-nav__item]

// Find all site nav links in only navEl
const navLinksElInNavEl = navEl.querySelectorAll('.site-nav__link');
console.log('navLinksElInNavEl', navLinksElInNavEl); //[a.site-nav__link, a.site-nav__link, a.site-nav__link]

magicBtn.addEventListener('click', () => {
  return [...navLiEl].map(a => a.classList.toggle('active'));
});
magicBtn.addEventListener('click', () => {
  [...navLinksElInNavEl].forEach(a => a.classList.toggle('active'));
});

magicBtn.addEventListener('click', () => {
  const mainA = [...navLinksEl].find(a => a.classList.contains('main'));
  console.log(mainA); //<a href="#" class="site-nav__link main active"> About us</a>
  mainA.href = 'https://s.codepen.io/about'; // <a href="https://s.codepen.io/about" class="site-nav__link main active"> About us</a>
});

// ------------------------------------------------------------------
// value => likes for textContent

const message = document.querySelector('#message');
console.log(message.value); //Text default
message.style.color = 'magenta';
message.value = 'Hello World';
console.log(message.value); //Hello World

message.addEventListener('input', () => {
  message.style.color = 'tomato';
  console.log(message.value); //Hello World
});

// 2 ------------------------------------------------------------------------------
/*
  Element Properties (hero)
  - img
  - textContent
  https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
*/

const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl); //<img class="hero__image" src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=480" alt="It's me" width="320">

imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'New cat';

// Add click event listener and change src attribute
magicBtn.addEventListener('click', () => {
  imageEl.src =
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'New cat';
});

//-----------------------------------------------------------------------------
/*
 * Attributes
 * - get(attribute-name)
 * - set(attribute-name)
 * - remove(attribute-name)
 * - has(attribute-name)
 */

// hero title selector
const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl); // <h1 class="hero__title">Cat`s Life</h1>

heroTitleEl.textContent = 'Kitten'; // <h1 class="hero__title">Kitten</h1>
console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);
console.log(imageEl.hasAttribute('src')); // true
imageEl.removeAttribute('src');
console.log(imageEl.hasAttribute('src')); // false
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
console.log(imageEl);
imageEl.width = 420;

// -----------------------------------------------------------------------------

/*
 * Data-аttributes
 data-name='example' => .dataset => {name: 'example}
 data-name1='example1' data-name2='example2' => .dataset => {name1: 'example1', name2: 'example2}
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.dir(actions[0].dataset.action); // add
const actionLast = [...actions].findLast(btn => btn.dataset.action);
console.log(actionLast); // <button type="button" data-action="edit" data-name="example">Edit</button>

console.log(actions[2].dataset); // {action: 'edit', name: 'example'}
console.log(actions[2].dataset.action); // edit
console.log(actions[2].dataset.name); // example

// // 3
// /*
//  * Интерфейс classList
//  * - add(класс)
//  * - remove(класс)
//  * - toggle(класс)
//  * - replace(старыйКласс, новыйКЛасс)
//  * - contains(класс)
//  */

// /*
// <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="/about" class="site-nav__link">О нас</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="/portfolio" class="site-nav__link">Портфолио</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="/contact" class="site-nav__link">Контакты</a>
//       </li>
//     </ul>
// */

// const currentPageUrl = '/contact';

// const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

// // 4
// /*
//  * Свойства «навигации» по DOM-узлам (взять список)
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
//  */

// /*
// <p><a href="/index.html">На главную</a></p>

//     <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">О нас</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Портфолио</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Контакты</a>
//       </li>
//     </ul>
// */
// const navElem = document.querySelector('.site-nav');

// // const firstNavItemEl = navEl.querySelector('.site-nav__item');
// const firstNavItemEl = navElem.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navElem.children);
// console.log(navElem.lastElementChild);

// // 5
// /*
//  * - Создание элементов
//  * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
//  */

// /*
// <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">О нас</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Портфолио</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Контакты</a>
//       </li>
//     </ul>
// */

// /*
//  * Создаём заголовок
//  */
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Это заголовок страницы :)';
// // console.log(titleEl);

// // document.body.appendChild(titleEl);

// /*
//  * Создаём изображение
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
//  */
// const imageRef = document.createElement('img');
// imageRef.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// imageRef.alt = 'valais-alpine-mountains-glacier';
// imageRef.width = 320;
// // console.log('imageEl', imageEl);

// // document.body.appendChild(imageEl);

// const heroEl = document.querySelector('.hero');
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

// /*
//  * Создаём и добавляем новый пункт меню
//  */
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);
// // console.log(navItemEl);

// const navEln = document.querySelector('.site-nav');

// // navEln.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEln.firstElementChild);

// // 6
// /*
//  * Создём и добавляем коллекцию
//  */
// /*
//   <div class="color-picker js-color-picker"></div>
// */

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// // const elements = colorPickerOptions.map(option => {
// //   const buttonEl = document.createElement('button');
// //   buttonEl.type = 'button';
// //   buttonEl.classList.add('color-picker__option');
// //   buttonEl.textContent = option.label;
// //   buttonEl.style.backgroundColor = option.color;

// //   return buttonEl;
// // });

// // console.log(elements);

// /*
//  * Пишем функцию для создания разметки колорпикера
//  */
// const makeColorPickerOptions = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// // var 1
// const categoriesRef = document.getElementById('categories');
// const listCategories = categoriesRef.children;
// const lengthAmountCategories = listCategories.length;
// console.log('Number of categories: ', lengthAmountCategories);

// for (let category of listCategories) {
//   console.log('Category: ', category.firstElementChild.textContent);
//   console.log('Elements: ', category.lastElementChild.children.length);
// }

// // var 2
// const categoriesAll = document.querySelector('#categories');
// const categoriesLength = categoriesAll.children.length;
// console.log(`Number of categories: ${categoriesLength}`);

// const itemsElement = document.querySelectorAll('.item');
// itemsElement.forEach(item => {
//   console.log('Category: ', item.firstElementChild.textContent);
//   console.log('Elements: ', item.lastElementChild.children.length);
// });

// // var 3
// const categoriesEl = document.getElementById('categories').children.length;
// console.log(`Number of categories: ${categoriesEl}`);

// const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
// arrayTitlesCategoriesRef.forEach(title => {
//   console.log('Category:', title.textContent);
//   console.log('Elements:', title.nextElementSibling.children.length);
// });

// // 4
// const categories = document.querySelectorAll('li.item');
// console.log('Number of categories: ' + categories.length);

// for (const category of categories) {
//   console.log('Category: ' + category.firstElementChild.innerHTML);
//   console.log('Elements: ' + category.lastElementChild.children.length);
// }

// // 5
// const categoriesAllRef = document.querySelectorAll('li.item');
// console.log('Number of categories: ', categoriesAllRef.length);
// const infoOfItem = [...categoriesAllRef].map(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// console.log('Number of categories: ', categoriesAllRef.length);
// const getInfoOfItems = [...categoriesAllRef]
//   .map(
//     item =>
//       `Category: ${item.firstElementChild.textContent}
//     Elements: ${item.lastElementChild.children.length}`
//   )
//   .join('\n');
// console.log(getInfoOfItems);
