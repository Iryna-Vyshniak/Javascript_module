//https://the-one-api.dev/
//rickandmortyapi.com/
// per_page -> how many wants to see on one page

const list = document.querySelector('.js-list');
let page = 1;

function rickandmortyAPI(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

//! --------------------- btn LOAD MORE -----------------------------------------------
// const load = document.querySelector('.js-load');
// load.addEventListener('click', onLoad);

// // для плавного прокручування сторінки після запиту і відтворення кожної наступної групи зображень
// document.addEventListener('scroll', onScroll);

// function onScroll() {
//   const { height: cardHeight } = document
//     .querySelector('.js-list')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }

// rickandmorty();

// function rickandmorty() {
//   return rickandmortyAPI()
//     .then(({ info: { pages }, results }) => {
//       console.log('сторінка: ', page, 'всього сторінок: ', pages);

//       createMarkup(results);
//       load.hidden = false;
//       onScroll(); //плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень
//     })
//     .catch(err => console.log(err));
// }

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ name, image }) => `<li>
//    ${name ? `<h2>${name}</h2>` : ''}
//   <div class="gallery__thumb-img">
//     <img
//       class="gallery__image"
//       src="${image}"
//       alt="${name}"
//     />
//     </div>
// </li>`
//     )
//     .join('');

//   list.insertAdjacentHTML('beforeend', markup);
// }

// function onLoad() {
//   nextPage();
//   return rickandmortyAPI()
//     .then(({ info: { pages }, results }) => {
//       // data
//       console.log('сторінка: ', page, 'всього сторінок: ', pages);

//       if (pages === page) {
//         load.hidden = true;
//         return;
//       }
//       createMarkup(results);
//       //   onScroll(); //плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень
//     })
//     .catch(err => console.log(err));
// }

// function clearGallery() {
//   list.innerHTML = '';
// }

// function nextPage() {
//   page += 1;
// }

//! --------------------- INFINITY SCROLL -----------------------------------------------
/* https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API */

/*
const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

const callback = function (entries, observer) {};
const observer = new IntersectionObserver(callback, options); */

//  <div class="js-guard"></div> - типу "останній елемент", пустий; розміщаємо обов'язково відразу після "галереї", щоб слідкувати за останнім елементом, який рендеримо

const guard = document.querySelector('.js-guard');

const options = {
  root: null, // слідкуємо за усім в'юпортом, якщо модалка - беремо селектор: ex: document.querySelector('#scrollArea')
  rootMargin: '300px', //за скільки пікселів до входження елемента в в'юпорт обсервер почиає слідкувати за ним
  threshold: 1.0, // вказали px, залишаємо без змін; Число або масив чисел, що вказує, при якому відсотку видимості цільового елемента повинен спрацювати callback
};

// Щоразу, коли guard досягає порогового значення в 300 пікселів до входження в в'юпорт, (зазначеного в опціях для IntersectionObserver), викликається колбек-функція onLoad. Де callback  onLoad отримує список об'єктів IntersectionObserverEntry -entries, та спостерігача - observer:
/*  const onLoad = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);

    ОТРИМАНА ВІДПОВІДЬ, ДЕ НАС ЦІКАВИТЬ САМЕ => isIntersecting

    IntersectionObserverEntry {time: 752.6999999880791, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
boundingClientRect: DOMRectReadOnly {x: 0, y: 1638.484375, width: 772.125, height: 0.015625, top: 1638.484375, …}
intersectionRatio: 0
intersectionRect: DOMRectReadOnly {x: 0, y: 0, width: 0, height: 0, top: 0, …}
! isIntersecting: false -> починає слідкувати, але елемент guard ще не дійшов до порогового значення
isVisible: false
rootBounds: DOMRectReadOnly {x: -300, y: -300, width: 1372.125, height: 1792.125, top: -300, …}
target: div.js-guard
time: 752.6999999880791
  });
};*/

const onLoad = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      nextPage(); // page += 1; додаємо сторінку
      rickandmortyAPI()
        .then(({ info: { pages }, results }) => {
          //data
          console.log('сторінка: ', page, 'всього сторінок: ', pages);

          createMarkup(results);
          if (pages === page) {
            observer.unobserve(guard); // якщо остання сторінка і більше немає - знімаємо спостерігача
          }
        })
        .catch(err => console.log(err));
    }
  });
};

const observer = new IntersectionObserver(onLoad, options);

//  для плавного прокручування сторінки після запиту і відтворення кожної наступної групи зображень
document.addEventListener('scroll', onScroll);

function onScroll() {
  const { height: cardHeight } = document
    .querySelector('.js-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

// функції для рендерингу
rickandmorty();

function rickandmorty() {
  return rickandmortyAPI()
    .then(({ info: { pages }, results }) => {
      console.log('сторінка: ', page, 'всього сторінок: ', pages);

      createMarkup(results);
      onScroll();
      observer.observe(guard); // як тільки сторінка зарендерилася, ставимо спостерігача - observer спостерігати - .observe за охоронцем - guard
    })
    .catch(err => console.log(err));
}

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, image }) => `<li>
   ${name ? `<h2>${name}</h2>` : ''}
  <div class="gallery__thumb-img">
    <img
      class="gallery__image"
      src="${image}"
      alt="${name}"
    />
    </div>
</li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

function nextPage() {
  page += 1;
}
