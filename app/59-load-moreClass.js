class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Load More';
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.remove('is-hidden');
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}

const API_KEY = 'c13c6c8c1d084d4e885a1613bb87d8bc';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.pageSize = 10;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=${this.pageSize}&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.nextPage();
        return data.articles;
      });
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const searchForm = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');

// examplers Class
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const newsApiService = new NewsApiService();

// addEventListener
searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// functions
function onSearch(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value.trim().toLowerCase();

  if (value === '') {
    return alert('Please, enter a phrase');
  }

  if (value === newsApiService.query) {
    return alert('Please, enter another phrase');
  }

  newsApiService.query = value;

  newsApiService.resetPage();
  clearArticlesContainer();
  loadMoreBtn.show();
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsApiService
    .fetchArticles()
    .then(articles => {
      if (!articles) {
        loadMoreBtn.hide();
        alert('Not found articles more');
        return;
      }
      if (articles.length === 0) {
        loadMoreBtn.hide();
        alert('Not found articles');
        return;
      }
      appendArticlesMarkup(articles);
      loadMoreBtn.enable();
    })
    .catch(err => console.log(err));
}

// markup
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
