//https://the-one-api.dev/
//rickandmortyapi.com/
// per_page -> how many wants to see on one page

const list = document.querySelector('.js-list');
const load = document.querySelector('.js-load');

load.addEventListener('click', onLoad);

let page = 1;

function rickandmortyAPI() {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

rickandmorty();

function rickandmorty() {
  return rickandmortyAPI()
    .then(({ info: { pages }, results }) => {
      console.log(page);
      console.log(pages);
      createMarkup(results);
      load.hidden = false;
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

function onLoad() {
  nextPage();
  return rickandmortyAPI()
    .then(({ info: { pages }, results }) => {
      console.log(page);
      console.log(pages);
      if (pages === page) {
        load.hidden = true;
        return;
      }
      createMarkup(results);
    })
    .catch(err => console.log(err));
}

function clearGallery() {
  list.innerHTML = '';
}

function nextPage() {
  page += 1;
}
