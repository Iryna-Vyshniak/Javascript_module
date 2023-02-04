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
