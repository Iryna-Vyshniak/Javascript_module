const searchForm = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const label = document.querySelector('.label');
const spinner = document.querySelector('.spinner');
//loadMoreBtn.hidden = 'true';
// console.log(loadMoreBtn);

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', fetchArticles);

let searchQuery = '';
let page = 1;

hideBtn();

function onSearch(e) {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.query.value.trim().toLowerCase();
  if (searchQuery === '') {
    return alert('Please, enter a phrase');
  }

  showBtn();

  resetPage();
  clearArticlesContainer();

  // !repeat code
  // disableBtn(); // => add to fetchArticles();
  fetchArticles();
}

/* if we have only fetchArticles(); in this function we put callback to addEventListener fetchArticles(); not function loadMore
 function onLoadMore() { 
  // !repeat code
  //! disableBtn(); // => add to fetchArticles();
  fetchArticles();
}
 */
function fetchArticles() {
  const options = {
    headers: {
      Authorization: 'c13c6c8c1d084d4e885a1613bb87d8bc',
    },
  };
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=${page}`;

  disableBtn();

  return fetch(url, options)
    .then(response => response.json())
    .then(({ articles }) => {
      nextPage();
      appendArticlesMarkup(articles);
      enableBtn();
    });
}

const createArticlesMarkup = ({ url, urlToImage, title, description, author }) => `<li>
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${urlToImage}" alt="" width="480">
        <h2>${title}</h2>
        <p>Posted by: ${author}</p>
        <p>${description}</p>
      </article>
    </a>
  </li>`;

const generateteArticles = array =>
  array?.reduce((acc, item) => acc + createArticlesMarkup(item), '');

function appendArticlesMarkup(articles) {
  articlesContainer.insertAdjacentHTML('beforeend', generateteArticles(articles));
}

function clearArticlesContainer() {
  articlesContainer.innerHTML = '';
}

function resetPage() {
  page = 1;
}
function nextPage() {
  page += 1;
}

function enableBtn() {
  loadMoreBtn.disabled = false;
  label.textContent = 'Load more';
  spinner.classList.add('is-hidden');
}

function disableBtn() {
  loadMoreBtn.disabled = true;
  label.textContent = 'Loading...';
  spinner.classList.remove('is-hidden');
}

function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
