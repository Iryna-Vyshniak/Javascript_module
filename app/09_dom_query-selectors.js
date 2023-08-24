import products from './productsArr.js';
console.log(products);
import transactionHistory from './transactions.js';
console.log(transactionHistory);

// ----- INNER.TEXT .INNER.CONTENT --------------------------------
/* 
.innerText -> rewrite all text
.innerContent => doesn`t rewrite - add text */

// ----- .APPEND .APPENDCHILD --------------------------------
const parent = document.createElement('div');
const child = document.createElement('p');

parent.append(child); // работает отлично
parent.appendChild(child); // работает отлично

parent.append('Hello world'); // работает отлично
// parent.appendChild('Hello world'); // Ошибка Error Нельзя вставить

// аppend
const appendValue = parent.append(child);
console.log(appendValue); // undefined

// аppendChild
const appendChildValue = parent.appendChild(child);
console.log(appendChildValue); // возвращает результат, который получили в результате appendChild =>  <p><p>

/*
document.querySelector(selector) => if didn`t find return => null и document.querySelectorAll(selector) => if didn`t find return []
 */
console.log(document); // #document
console.log(document.body); // <body>...</body>
console.log(document.head); // <head>...</head>

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
// ----------- VALUE ------------------------------------------------
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

// ------------------------------------------------------------------------------
// ---------------- ELEMENT PROTERTIES ------------------------------------------
/*
  Element Properties (hero)
  - img
  - textContent
  https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
*/

const imageLaptop = document.querySelector('.image-laptop');
console.log(imageLaptop.src); // https://picsum.photos/id/9/320/240

console.log(imageLaptop.alt); // A laptop

imageLaptop.src = 'https://picsum.photos/id/13/640/480';
imageLaptop.alt = 'River bank';

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
  // hero title selector
  const heroTitleEl = document.querySelector('.hero__title');
  console.log('heroTitleEl', heroTitleEl); // <h1 class="hero__title">Cat`s Life</h1>

  heroTitleEl.textContent = 'Cat`s Life'; // <h1 class="hero__title">Kitten</h1>
  console.log(imageEl.getAttribute('src'));
});

//-----------------------------------------------------------------------------
// ------------------ ATTRIBUTES ----------------------------------------------
/*
 * Attributes
 * - get(attribute-name)
 * - set(attribute-name)
 * - remove(attribute-name)
 * - has(attribute-name)
 */

console.log(imageEl.src);
console.log(imageEl.hasAttribute('src')); // true
imageEl.removeAttribute('src');
console.log(imageEl.hasAttribute('src')); // false
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
console.log(imageEl);
imageEl.width = 420;

// -----------------------------------------------------------------------------
// -------------- DATA-ATTRIBUTES ----------------------------------------------

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

// --------------------------------------------------------------------------------
//-------------- CLASSLIST ------------------------------------------------------
/*
 classList interface
 - add(class)
 - remove(class)
 - toggle(class)
 - replace(oldClass, newClass)
 - contains(class) => true/false
 */

const nav = document.querySelector('.js-site-nav');
console.log(nav); // <ul class="site-nav js-site-nav">...</ul>

magicBtn.addEventListener('click', () => {
  nav.classList.add('navigation', 'main-navigation');
  console.log(nav); //<ul class="site-nav js-site-nav navigation main-navigation">...</ul>
  nav.classList.remove('navigation');
  console.log(nav); //<ul class="site-nav js-site-nav main-navigation">...</ul>
  nav.classList.toggle('nav');
  console.log(nav); //<ul class="site-nav js-site-nav main-navigation">...</ul>
  nav.classList.contains('nav') ? (nav.style.display = 'flex') : (nav.style.display = 'none');
  nav.classList.replace('main-navigation', 'main-nav');
  console.log(nav);
});

const currentPageUrl = '/reviews';
const currentLink = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
console.log(currentLink); // <a href="/reviews" class="site-nav__link">Reviews</a>
currentLink.classList.add('site-nav__link--current'); // reviews link is red
console.log(currentLink); // <a href="/reviews" class="site-nav__link site-nav__link--current">Reviews</a>

// ------------------------------------------------------------------------
// ---------- DOM navigation ---------------------------------------------
// --------- quickly access to the element instead of querySelector ------
const navDOM = document.querySelector('.js-site-nav');
const firstNavItem = navDOM.querySelector('.site-nav__item');
console.log(firstNavItem); // <li class="site-nav__item">...</li> => first li

const firstLi = navDOM.firstElementChild;
console.log(firstLi); // <li class="site-nav__item">...About us...</li> => first li

const allLi = navDOM.children;
console.log(allLi); // [li.site-nav__item, li.site-nav__item, li.site-nav__item]
console.log(allLi[1]); // <li class="site-nav__item">...Reviews...</li> => 2nd element
console.log(navDOM.children[1]); // <li class="site-nav__item">...Reviews...</li> => 2nd element

const lastLi = navDOM.lastElementChild;
console.log(lastLi); // <li class="site-nav__item">...Contacts...</li> => last li

const previousElSibling = lastLi.previousElementSibling;
console.log(previousElSibling); // <li class="site-nav__item">...Reviews...</li> => «зліва» від elem (його попереднього сусіда)

const nextElSibling = firstLi.nextElementSibling;
console.log(nextElSibling); //// <li class="site-nav__item">...Reviews...</li> => елемент «праворуч» від elem (його наступного сусіда)

//--------------------------------------------------------------------
// ---------CREATE ELEMENT -------------------------------------------
//1st - create in memory
const titleEL = document.createElement('h2');
console.log(titleEL); // <h2>...</h2>
titleEL.textContent = 'It`s create title';
console.log(titleEL); // <h2>It`s create title</h2>
titleEL.classList.add('title');
console.log(titleEL); // <h2 class="title">It`s create</h2>

//2nd add to page
/*
 - parentEl.appendChild(el); => додасть в кінець add to end after <script></script>

 - parentEl.insertBefore(el, nextSibling); => add before nextSibling element
 - parentEl.insertBefore(el, null); => add to end parent element like appendChild

 - parentEl.append(el1, el2, ...); => add to end parent element like appendChild
 - parentEl.prepend(el1, el2, ...); => add to begin parent element
*/

document.body.appendChild(titleEL);
console.log(document.body); // <script></script> <h2 class="title">It`s create</h2>

const imageRef = document.createElement('img');
imageRef.src = 'https://cdn.pixabay.com/photo/2023/01/29/12/53/red-panda-7753226_960_720.jpg';
imageRef.alt = 'red panda';
console.log(imageRef.width); // 0
imageRef.width = 250;
console.log(imageRef); // <img src="https://cdn.pixabay.com/photo/2023/01/29/12/53/red-panda-7753226_960_720.jpg" alt="red panda" width="100"></img>

document.body.appendChild(imageRef);
currentLink.appendChild(imageRef);
console.log(document.body);

// create new menu in memory
//create 1st element
const liItemEl = document.createElement('li');
liItemEl.classList.add('menu-item');
console.log(liItemEl); //<li class="menu-item"></li>

//create 2nd element
const aLinkEl = document.createElement('a');
aLinkEl.href = '/link';
aLinkEl.textContent = 'Link';
aLinkEl.classList.add('menu-link');
console.log(aLinkEl); // <a href="/link" class="menu-link">Link</a>

// in memory connect together and then all send to document.body => likes for grape
// connect 1st and 2nd elements
liItemEl.appendChild(aLinkEl);
console.log(liItemEl);
// <li class="menu-item"><a href="/link" class="menu-link">Link</a></li>
// add to ul
nav.appendChild(liItemEl);
nav.insertBefore(liItemEl, nav.firstElementChild); // before first child About Us
// nav.insertBefore(liItemEl, null); // add to the end of the nav
nav.insertBefore(liItemEl, nav.lastElementChild); // before last child Contacts
nav.insertBefore(liItemEl, nav.children[1]); // before 2rd child Reviews
//nav.appendChild(...liItemEl.children);
console.log(nav);

// create img and then add to div
const imgEl = document.createElement('img');
console.log(imgEl);
imgEl.src = 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg';
imgEl.alt = 'hill';
imgEl.width = 300;

// Create title to img
const imgTitleEl = document.createElement('h2');
imgTitleEl.textContent = 'Hill Fields';
imgTitleEl.classList.add('img-title');

const pictureEl = document.querySelector('.picture');
//  doesn`t good practice because use DOM twice
// pictureEl.appendChild(imgTitleEl);
// pictureEl.appendChild(imgEl);
// console.log(pictureEl);

// better practice than some apendChild
pictureEl.append(imgTitleEl, imgEl);
console.log(pictureEl);

//--------------------------------------------------------------------
//---------- CREATE COLLECTIONS ------------------------------------
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const buttonsArr = colorPickerOptions.map(({ label, color }) => {
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.classList.add('color-picker__option');
  buttonEl.textContent = label;
  buttonEl.style.backgroundColor = color;
  return buttonEl;
});
console.log(buttonsArr);
// [
//   button.color-picker__option,
//   button.color-picker__option,
//   button.color-picker__option,
//   button.color-picker__option,
//   button.color-picker__option,
//   button.color-picker__option,
// ];

colorPickerContainerEl.append(...buttonsArr);

/*
 Writing a function to create colorpicker markup
 */
const makeColorPickerOptions = options => {
  return options.map(({ label, color }) => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = label;
    buttonEl.style.backgroundColor = color;

    return buttonEl;
  });
};

const colorPickerContainerRef = document.querySelector('.js-color-picker--row');

// result of function appropriate to const buttonSet
const buttonsSet = makeColorPickerOptions(colorPickerOptions);

colorPickerContainerRef.append(...buttonsSet);

// ------------------------------------------------------------------
//------- CREATE CARD PRODUCT -------------------------------------

/*
1st - create product card  like this: 
<article class="product">
img src = 'http://example'
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p class="product__price">Цена: 1111 кредитов</p>
</article>
 - classList will be  product--on-sale product--not-available
*/

const productsContainerEl = document.querySelector('.js-products');

// write a function that get one object and from this object create one article
const makeProductsCard = ({ image, name, detail, price }) => {
  const articleEl = document.createElement('article');
  articleEl.classList.add('product');

  const imgEl = document.createElement('img');
  imgEl.src = image;
  imgEl.alt = name;
  imgEl.width = 100;

  const titleArticle = document.createElement('h2');
  titleArticle.classList.add('product-name');
  titleArticle.textContent = name;

  const descrArticle = document.createElement('p');
  descrArticle.classList.add('product__descr');
  descrArticle.textContent = detail;

  const priceArticle = document.createElement('p');
  priceArticle.classList.add('product__price');
  priceArticle.textContent = `Price: ${price}$`;

  articleEl.append(imgEl, titleArticle, descrArticle, priceArticle);
  console.log(articleEl);
  // return one article
  return articleEl;
};

console.log(makeProductsCard(products[0]));

// const articlesArr1 = products.map(product => {
//   const articleEl = document.createElement('article');
//   articleEl.classList.add('product');

//   const imgEl = document.createElement('img');
//   imgEl.src = product.image;
//   imgEl.alt = product.name;
//   imgEl.width = 100;

//   const titleArticle = document.createElement('h2');
//   titleArticle.classList.add('product-name');
//   titleArticle.textContent = product.name;

//   const descrArticle = document.createElement('p');
//   descrArticle.classList.add('product__descr');
//   descrArticle.textContent = product.detail;

//   const priceArticle = document.createElement('p');
//   priceArticle.classList.add('product__price');
//   priceArticle.textContent = `Price: ${product.price}$`;

//   articleEl.append(imgEl, titleArticle, descrArticle, priceArticle);
//   console.log(articleEl);
//   // return one article
//   return articleEl;
// });
// console.log(articlesArr1); // [article.product, article.product, article.product, article.product, article.product]

// best variant with callback
const articlesArr = products.map(makeProductsCard);
console.log(articlesArr);
//  [article.product, article.product, article.product, article.product, article.product]

productsContainerEl.append(...articlesArr);

//---------------------------------------------------------------------
/*
  innerHTML => write new content (change old content) or clear all content
  - reading
  - writing
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.textContent); // This title => only text
console.log(titleEl.innerHTML); // This <span>title</span> => all content inside the title
titleEl.innerHTML = '<a href="#">It`s link</a>';
console.log(titleEl.innerHTML); // <a href="#">It`s link</a>
console.log(titleEl); // <h2 class="title">...</h2>
//clear content
titleEl.innerHTML = '';

// ------
const titleRef = document.createElement('h2');
titleRef.classList.add('title-improved');
titleRef.innerHTML = 'New and <span class="accent">improved</span> title';
console.log(titleRef);
titleEl.insertAdjacentElement('beforeend', titleRef);
const titleSpan = document.querySelector('.accent');
console.log(titleSpan); //<span class="accent">improved</span>
titleSpan.style.color = 'magenta';
/*
   markup with insertAdjacentHTML() => add new content
   http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">It`s link</a>');

//----------------------------------------------------------------
// ---------- TRANSACTIONS ---------------------------------------
// markup => string
// transactionHistory
// <tr>
//     <td>id</td>
//     <td>amount</td>
//     <td>date</td>
//     <td>business</td>
//     <td>type</td>
//     <td>name</td>
//     <td>account</td>
//   </tr>

const tableEl = document.querySelector('.js-transaction-table');
const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, name, type, account } = transaction;
  return `
 <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

const transactionTableRowsMarkup = transactionHistory.map(makeTransactionTableRowMarkup).join('');
console.log(transactionTableRowsMarkup);

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);
console.log(tableEl); // <table class="transaction-table js-transaction-table">...</table>

//----------------------------------------------------------------
//------------- CATEGORIES --------------------------------

const ulEl = document.querySelector('#categories');
console.log(ulEl);
ulEl.style.marginBottom = '20px';
const ulArr = ulEl.querySelectorAll('.item');
console.log(ulArr);
console.log(`Number of categories: ${ulArr.length}`);

const renderCategories = ulArr.forEach(item => {
  const titleCategory = item.querySelector('.item-class');
  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${titleCategory.nextElementSibling.children.length}`);
});

const titleArr = document.querySelectorAll('.item-class');
const renderCategories1 = titleArr.forEach(title => {
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${title.nextElementSibling.children.length}`);
});

const itemsArr = document.querySelectorAll('.item');
console.log(itemsArr);
const renderCategories2 = itemsArr.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
//----------------------------------------------------------------
//------------- INGREDIENTS --------------------------------
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulIngredientsEl = document.querySelector('ul#ingredients');
console.log(ulIngredientsEl);

const renderIngredients = arr =>
  arr.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('item');
    return li;
  });
const liMarkup = renderIngredients(ingredients);
console.log(liMarkup);
ulIngredientsEl.append(...liMarkup);

//----------------------------------------------------------------
//------------- GALLERY --------------------------------
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

// 1st variant
const renderGallery = arr => {
  return arr.map(({ url, alt }) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.width = 150;
    li.append(img);
    return li;
  });
};

const galleryMarkup = renderGallery(images);
console.log(galleryMarkup);

galleryEl.append(...galleryMarkup);
console.log(galleryEl);

// 2nd variant
const galleryEl2 = document.querySelector('.gallery2');

const renderGallery2 = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = "200" height = "auto"></li>`;

const galleryMarkup2 = images.map(renderGallery2).join('');

galleryEl2.insertAdjacentHTML('beforeend', galleryMarkup2);

// 3rd variant
const galleryEl3 = document.querySelector('.gallery3');

const galleryMarkup3 = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width = "250" height = "auto"></li>`)
  .join('');

galleryEl3.insertAdjacentHTML('beforeend', galleryMarkup3);

// 4rd variant
const galleryEl4 = document.querySelector('.gallery4');

const galleryMarkup4 = images.reduce(
  (acc, { alt, url }) =>
    (acc += `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`),
  ''
);

galleryEl4.insertAdjacentHTML('beforeend', galleryMarkup4);

// 5rd variant
const galleryEl5 = document.querySelector('.gallery5');

const galleryMarkup5 = images
  .reduce(
    (acc, image) =>
      acc.concat(
        `<li><img src="${image.url}" alt="${image.alt}" width = "350" height = "auto"></li>`
      ),
    []
  )
  .join('');

galleryEl5.insertAdjacentHTML('beforeend', galleryMarkup5);

// ----------------------------------------------------------------
// ---------- COUNTER --------------------------------

const counterEl = document.querySelector('.js-counter');
counterEl.style.display = 'flex';
counterEl.style.justifyContent = 'center';
counterEl.style.alignItems = 'center';
counterEl.style.gap = '15px';

const btnPlusEl = document.createElement('button');
btnPlusEl.type = 'button';
btnPlusEl.textContent = '+1';

const valueEl = document.createElement('div');
valueEl.textContent = '0';
valueEl.classList.add('js-counter-value');

const btnMinusEl = document.createElement('button');
btnMinusEl.type = 'button';
btnMinusEl.textContent = '-1';

counterEl.append(btnPlusEl, valueEl, btnMinusEl);

btnPlusEl.addEventListener('click', () => {
  valueEl.textContent = Number(valueEl.textContent) + Number(btnPlusEl.textContent);
});

btnMinusEl.addEventListener('click', () => {
  valueEl.textContent = Number(valueEl.textContent) + Number(btnMinusEl.textContent);
});

// next  variant with use class
class Counter {
  constructor({ step = 0, value = 0 }) {
    this.value = value;
    this.step = step;
  }

  getIncrement() {
    this.value += this.step;
  }

  getDecrement() {
    this.value -= this.step;
  }
}

// const counter = new Counter({ step: 10, value: 0 });
const counter2 = new Counter({ step: 5, value: 2 });

const btnPlus = document.querySelector('.btn-plus');
const btnMin = document.querySelector('.btn-min');
const value = document.querySelector('.value');

// btnPlus.addEventListener('click', () => {
//   counter.getIncrement();
//   value.textContent = counter.value;
// });

// btnMin.addEventListener('click', () => {
//   counter.getDecrement();
//   value.textContent = counter.value;
// });
btnPlus.addEventListener('click', () => {
  counter2.getIncrement();
  value.textContent = counter2.value;
});

btnMin.addEventListener('click', () => {
  counter2.getDecrement();
  value.textContent = counter2.value;
});

//----------------------------------------------------------------
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const container = document.querySelector('#main-container');
const ulRef = document.createElement('ul');

// const techElements = technologies
//   .map((el) => `<li>${el}</li>`)
//   .join('');

technologies.forEach(technologyItem => {
  // const liEl = document.createElement('li');
  // liEl.textContent = technologyItem;
  // ulRef.append(liEl)

  const liEl = `<li>${technologyItem}</li>`;
  ulRef.insertAdjacentHTML('afterbegin', liEl);
});

// const techElements = technologies.reduce(
//   (acum, el) => (acum += `<li>${el}</li>`),
//   ''
// );

//ulRef.innerHTML = techElements;

container.append(ulRef);
// --------------------------------------------------------------------

const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];

const buttonsContainer = document.createElement('div');
buttonsContainer.classList = 'btn-container';
buttonsContainer.classList.add('visible', 'green');
// buttonsContainer.classList = 'btn-container-new';

colors.forEach(({ color, label }) => {
  const btnEl = document.createElement('button');
  btnEl.textContent = label;
  btnEl.style.backgroundColor = color;
  btnEl.style.margin = '10px';
  btnEl.style.padding = '10px';

  buttonsContainer.append(btnEl);
});

container.append(buttonsContainer);

//---------------------------------------------------------------------
const data = {
  title: '- Michel Legrand -',
  imgUrl:
    'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
  imgCaption: 'Michel Legrand conducting his orcherstra.',
  facts: [
    'He was born in Paris, France on February 24<sup>th</sup>, 1932',
    'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor',
    'His sister was a Soprano and a member of the Swingle Singers',
    'Along his career, he composed more than two hundred film and television scores',
    'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz',
    'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes',
    'He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris',
    'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France',
  ],
};

const asideContainer = document.querySelector('#article');

//1 Створти елемент
const title = document.createElement('h1');
const figure = document.createElement('figure');
const image = document.createElement('img');
const caption = document.createElement('figcaption');

//2 Модифікувати елемент
title.textContent = data.title;
title.setAttribute('id', 'title');

figure.setAttribute('id', 'img-div');

image.setAttribute('id', 'image');
image.src = data.imgUrl;
image.alt = data.imgCaption;

caption.id = 'img-caption';
caption.textContent = data.imgCaption;

//3 Додати елемент в DOM
asideContainer.append(title);
figure.append(image, caption);
asideContainer.append(figure);

asideContainer.insertAdjacentHTML(
  'beforeend',
  `<article id="tribute-info">
        <div id="intro">
            <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
        </div>
        <p><u>Here are some major facts about him:</u></p>
        <ul>
            ${data.facts.reduce((acum, factItem) => (acum += `<li>${factItem}</li>`), '')}
        </ul>
        <blockquote id="quote">
            <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
            <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
                href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
    </article>`
);

const article = document.querySelector('#tribute-info');

console.log(article.firstChild); // текст
console.log(article.firstElementChild); // елемент

// -----------------------------------------------------------------------------------------------------------------------
// ---------------- markup ---------------------------------------------------------------------------------------------

const list = document.querySelector('.js-list');
const markup1 = `<li class="text"><span>Hello from <a>JS</a></span></li>`;

// list.innerHTML = markup; --> use for pagination for every page when redraw every info
list.insertAdjacentHTML('beforeend', markup1); // use for infinity scroll

const listExample = document.querySelector('.js-list-example');
const listStatic = document.querySelectorAll('.js-item-example');
const listDynemic = document.getElementsByClassName('js-item-example'); // FOR INFINITY SCROLL, return dynemic array

console.log('listStatic', listStatic);
console.log('listDynemic', listDynemic);
console.log(listDynemic.length); // 4
console.log('before', listDynemic[listDynemic.length - 1].textContent); // 4

let markup2 = '';
const lastItem = Number(listExample.lastElementChild.textContent);
console.log(lastItem); // 4
for (let i = 0; i < 5; i += 1) {
  markup2 += ` <li class="js-item-example">${lastItem + i}</li>`;
}
console.log(markup2);
listExample.insertAdjacentHTML('beforeend', markup2); // 1 2 3 4 5 6 7 8
// listExample.innerHTML = markup2; // 4 5 6 7 8
const lastElementText = listDynemic[listDynemic.length - 1].textContent;
console.log(lastElementText); // 8

// ---- markup cars -----------------------------------------------
const carsList = document.querySelector('.js-cars');
const cars = [
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

/* <li><img src="" alt=""><h2></h2><h3></h3><p></p></li> */

const markupCars = cars
  .map(
    ({ id, model, type, price, img }, idx) =>
      `<li data-Carid=${
        11 + idx
      } class="car-item"><img src="${img}" alt="${model}" width="200"><h2>${model}</h2><h3>${type}</h3><p>Price: <span>${price}$</span></p></li>`
  )
  .join('');

console.log(markupCars);
carsList.insertAdjacentHTML('beforeend', markupCars);
carsList.style = `display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 10px;`;

const liItem = carsList.querySelector('li');
console.dir(liItem.dataset.carid); // 11

const liItems1 = carsList.querySelectorAll('li');
console.log(liItems1); // [li, li.car-item, li.car-item, li.car-item, li.car-item, li.car-item, ...]

const liItems2 = carsList.children;
console.log(liItems2); // [li, li.car-item, li.car-item, li.car-item, li.car-item, li.car-item, ...]
console.log(liItems2[liItems2.length - 1].textContent); // VolvoXC60Price: 7000$
// [...liItems2].reduce((acc, item, idx) => (acc += item.setAttribute('id', `${idx + 1}`)), '');
// console.log(liItems2); //[li#1.car-item, li#2.car-item, li#3.car-item, li#4.car-item, li#5.car-item, li#6.car-item, li#7.car-item, li#8.car-item, li#9.car-item, li#10.car-item, li#11.car-item, ...]
[...liItems2].map((item, idx) => item.setAttribute('id', `${idx + 1}`));
console.log(liItems2); //[li#1.car-item, li#2.car-item, li#3.car-item, li#4.car-item, li#5.car-item, li#6.car-item, li#7.car-item, li#8.car-item, li#9.car-item, li#10.car-item, li#11.car-item, ...]

const span = carsList.querySelector('.car-item span');
console.log(span); // <span>12000$</span>
const span1 = span.textContent;
console.log(span1); // 12000$

const p = carsList.querySelector('.car-item p');
console.log(p); // <p>Price: <span>12000$</span></p>
console.log(p.textContent); // Price: 12000$

const spans = carsList.querySelectorAll('.car-item span');
console.log(spans); // [span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span, span]
const lastSpanText = spans[spans.length - 1].textContent;
console.log(lastSpanText); // 7000$

const text = document.querySelector('.text');
text.remove();
