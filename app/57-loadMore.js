import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.load-more');

let page = 1;
const per_page = 40;
let lastSearchQuery = '';

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', onSearcherSubmit);
btn.addEventListener('click', onLoadMore);

// function onLoadMore() {
//   const querySearch = form.searchQuery.value.trim().toLowerCase();

//   createNextPage();
//   btn.classList.add('is-hidden');

//   fetchPixabay(querySearch, page)
//     .then(data => {
//       insertGalleryContent(data.hits);
//       galleryLightbox.refresh();

//       if (data.hits.length < 40) {
//         Notify.info('These are all the images we found for your search query.');
//         btn.classList.add('is-hidden');
//       } else {
//         btn.classList.remove('is-hidden');
//       }
//     })
//     .catch(err => console.error(err));
// }

// function onSearcherSubmit(e) {
//   e.preventDefault();
//   const querySearch = e.currentTarget.searchQuery.value.trim().toLowerCase();

//   btn.classList.add('is-hidden');
//   page = 1;

//   if (querySearch === '') {
//     Notify.info('Please, enter what do you want to search 😉');
//     return;
//   }
//   fetchPixabay(querySearch, page)
//     .then(data => {
//       console.log(data.totalHits);

//       if (data.total === 0) {
//         Notify.failure(
//           `Sorry, there are no images ${querySearch.toUpperCase()} matching your search. Please try again.`
//         );
//         return;
//       }
//       if (lastSearchQuery === querySearch) {
//         Notify.warning(
//           `We already found ${
//             data.totalHits
//           } images for "${querySearch.toUpperCase()}.
//       Please, enter another phrase😉`
//         );
//         return;
//       }

//       clearGalleryContent();
//       Notify.success(`Hooray! We found ${data.totalHits} images.`);
//       lastSearchQuery = querySearch;

//       insertGalleryContent(data.hits);
//       galleryLightbox.refresh();

//       if (data.hits.length < 40) {
//         Notify.info('These are all the images we found for your search query.');
//         btn.classList.add('is-hidden');
//       } else {
//         btn.classList.remove('is-hidden');
//       }
//     })
//     .catch(err => console.error(err));
// }

// function fetchPixabay(query, page) {
//   const API_KEY = `31807815-f192f6f9aa73198d509365ba4`;
//   const URL_BASE = `https://pixabay.com/api/`;

//   return fetch(
//     `${URL_BASE}?key=${API_KEY}&q=${query}&image_type=photo&orientation="horizontal"&safesearch=true&page=${page}&per_page=${per_page}`
//   ).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });
// }

// //створює розмітку для однієї карточки
// function createMarkup({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `<a href="${largeImageURL}" class="card-link js-card-link"

// ><div class="photo-card">
//         <img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo"

// />
//         <div class="info">
//           <p class="info-item">
//             <b>Likes</b> ${likes}
//           </p>
//           <p class="info-item">
//             <b>Views</b> ${views}
//           </p>
//           <p class="info-item">
//             <b>Comments</b> ${comments}
//           </p>
//           <p class="info-item">
//             <b>Downloads</b> ${downloads}
//           </p>
//         </div>
//       </div>
//     </a>`;
// }

// //генеруємо 40 карток
// const generateGalleryContent = array =>
//   array.reduce((acc, item) => acc + createMarkup(item), '');

// //додаємо в DOM галерею
// // const insertGalleryContent = array =>
// //   gallery.insertAdjacentHTML('beforeend', generateGalleryContent(array));
// const insertGalleryContent = array => {
//   const result = generateGalleryContent(array);
//   gallery.insertAdjacentHTML('beforeend', result);
// };

// function clearGalleryContent() {
//   gallery.innerHTML = '';
// }

// function createNextPage() {
//   page += 1;
// }

// !----AXIOS-----!

async function onLoadMore() {
  const querySearch = form.searchQuery.value.trim().toLowerCase();
  createNextPage();
  btn.classList.add('is-hidden');

  try {
    const data = await fetchPixabay(querySearch, page);
    // onScroll();
    if (data.total === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    if (data.hits.length < per_page) {
      Notify.info('These are all the images we found for your search query.');
      btn.classList.add('is-hidden');
    } else {
      btn.classList.remove('is-hidden');
    }

    insertGalleryContent(data.hits);
    galleryLightbox.refresh();
  } catch (err) {
    console.log(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

async function onSearcherSubmit(e) {
  e.preventDefault();
  const querySearch = e.currentTarget.searchQuery.value.trim().toLowerCase();

  btn.classList.add('is-hidden');

  if (!querySearch) {
    Notify.info('Please, enter what do you want to search 😉');
    return;
  }
  // !
  if (lastSearchQuery === querySearch && gallery.innerHTML !== '') {
    Notify.warning(
      `We already found images for "${querySearch.toUpperCase()}.
    Please, enter another phrase😉`
    );
    btn.classList.remove('is-hidden');
    return;
  }

  lastSearchQuery = querySearch;
  page = 1;

  try {
    const data = await fetchPixabay(querySearch, page);

    if (data.total === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    // if (lastSearchQuery === querySearch && data.total === 0 && page === 1) {
    //   Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
    //   btn.classList.add('is-hidden');
    //   return;
    // }

    // if (lastSearchQuery === querySearch) {
    //   Notify.warning(
    //     `We already found images for "${querySearch.toUpperCase()}.
    //   Please, enter another phrase😉`
    //   );
    //   btn.classList.remove('is-hidden');
    //   return;
    // }
    // lastSearchQuery = querySearch;

    clearGalleryContent();
    Notify.success(`Hooray! We found ${data.totalHits} images.`);

    insertGalleryContent(data.hits);
    galleryLightbox.refresh();

    if (data.hits.length < per_page) {
      Notify.info('These are all the images we found for your search query.');
      btn.classList.add('is-hidden');
    } else {
      btn.classList.remove('is-hidden');
    }
  } catch (err) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

async function fetchPixabay(query, page) {
  const API_KEY = `31807815-f192f6f9aa73198d509365ba4`;
  const URL_BASE = `https://pixabay.com/api/`;
  const url = `${URL_BASE}?key=${API_KEY}&q=${query}&image_type=photo&orientation="horizontal"&safesearch=true&page=${page}&per_page=${per_page}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

//створює розмітку для однієї карточки
function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<a href="${largeImageURL}" class="card-link js-card-link"

><div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo"

/>
        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${downloads}
          </p>
        </div>
      </div>
    </a>`;
}

//генеруємо 40 карток
const generateGalleryContent = array =>
  array?.reduce((acc, item) => acc + createMarkup(item), '');

//додаємо в DOM галерею
// const insertGalleryContent = array =>
//   gallery.insertAdjacentHTML('beforeend', generateGalleryContent(array));
const insertGalleryContent = array => {
  const result = generateGalleryContent(array);
  gallery.insertAdjacentHTML('beforeend', result);
};

function clearGalleryContent() {
  gallery.innerHTML = '';
}

function createNextPage() {
  page += 1;
}

//  для плавного прокручування сторінки після запиту і відтворення кожної наступної групи зображень
// document.addEventListener('scroll', onScroll);

// function onScroll() {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }
