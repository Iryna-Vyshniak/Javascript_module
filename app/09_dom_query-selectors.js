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

// ------------------------------------------------------------------

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
