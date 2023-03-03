// 94a040c94bab4dcabf9130808222712
// https://uk.wikipedia.org/wiki/SOAP
// https://www.postman.com/downloads/
// https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP#4xx_%D0%9A%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B0_%D0%BF%D0%BE%D0%BC%D0%B8%D0%BB%D0%BA%D0%B0
// https://www.weatherapi.com/docs/
// https://api.privatbank.ua/#p24/exchange
// https://handlebarsjs.com/guide/#what-is-handlebars
// https://swapi.dev/
// https://www.udemy.com/

//! REST API - тип запиту переважно .json (протокол спілкування - .json), який може переавати швидко відносно великі об'єми пам'яті (так як це рядок), максимально легко парститься, АЛЕ він не надто сек'юрний

//! SOAP => Simple Object Access Protocol => один з типів передачі даних,  тип запиту переважно .xml (протокол спілкування - .xml), дуже важко парситься,щоб розпарсити - юзати джава класи (генерувати автоматично і оброблювати), може переавати величезні об'єми інформації і найголовніший плюс - максимально сек'юрний: все передає зашифровано, відповідь дістати неможливо - переважно державні проєкти (ЗСУ)

//  CRUD
// C - POST
// R - GET
// U - PUT PATCH
// D - DELETE

const form = document.querySelector('.js-weather');
const listWeather = document.querySelector('.js-list-weather');
form.addEventListener('submit', onSearch);

/*  
   ! http://api.weatherapi.com/v1 -> base url of server, шлях до якого сервера треба стукатись 

   ! /forecast.json -> endpoint, name of function from backend server, коли вказуємо ендпоінт - вказуємо яку ф-цію з сервера хочемо отримати - в даному випадку нам з сервера потрібна ф-ція /forecast.json. 
    (переходимо в корзину, на особисту сторінку тощо - це все змінні ендпоінта), відповідно коли йдемо на даний ендпоінт, по його назві сервер розуміє, що нам потрібно віддавати, яку саме інформацію віддати на даний запит. 
    Зі сторони бекенда кожен цей ендпоінт прописаний, і це називається не більш ніж назвою серверної ф-ції
    Сервер бере ф-цію ендроінт, відпрацьовує і віддає нам інформацію

    ! наступнi query parametrs: ?  &
    будь-яка функція може приймати параметри, так само і бекенд: 
    щоб казати, що передаємо в функцію ендпоінт параметри - першим ставимо ? після чого перелік параметрів (якщо вказано required - обов'язково вказуємо) for ex: key=...&q=Paris&days=5

    Отримуємо розпарсений результат json в постмені

    response look likes object with 3 keys:
    location
    current
    forecast
    
*/
/* function fetchWeather(query = 'Kiev', days = 1) { */
// query => q
/* const API_KEY = 'fcf666998d8a497f94d120021230303';
  const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json'; */
/* return fetch(`${BASE_URL}?key=${API_KEY}&q=Paris&days=3`) */
//.then(response => console.log(response)) // відповідь з бекенду в тому вигляді, в якому її отримуємо:
//Response { type: 'cors', url: 'http://api.weatherapi.com/v1/forecast.json?key=fcf666998d8a497f94d120021230303&q=Paris&days=3', redirected: false, status: 200, ok: true, … }
// body: (...)
// bodyUsed: false
// headers:
// Headers { }
//! ok: true - status ok if succes = true
// redirected: false
//! status: 200 - type of status code
//! statusText: "OK" - use for throw new Error(response.statusText) or write custom message inside;
// type: "cors"
// url: "http://api.weatherapi.com/v1/forecast.json?key=fcf666998d8a497f94d120021230303&q=Paris&days=3"
/* .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                ? [[Ptototype ]] => method json
                return response.json(); // response це клас, який має свій метод .json -> json parse винесений в метод .json
              })
      .catch()
      .finally();*/

function fetchWeather(query = 'Kiev', days = 3) {
  const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
  const API_KEY = '4e05aa7cdbd249b5bf7161303230303';

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=${days}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// fetchWeather() => return promise and thats why add .then method with data
//fetchWeather().then(data => console.log(data)); // {location: {…}, current: {…}, forecast: {…}} -> розпарсена відповідь, яку повернув бекенд

// fetchWeather().then(data => console.log(data)); -> переносимо виклик ф-ції в сабміт

function onSearch(e) {
  e.preventDefault();

  const {
    query: { value: query }, // дістали значення value з інпуту з name: query й перейменували на query
    days: { value: days }, // дістали значення value з select name: days й перейменували value на days
  } = e.currentTarget.elements;

  console.log(query);
  console.log(days);
  document.querySelector('.city span').textContent = query.toUpperCase();
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + query + "')";

  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';

  // document.body.style.cssText = `
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  //     `;

  if (!query) {
    return alert('Please, search location for forecast');
  }

  //fetchWeather(query, days).then(data => console.log(data.forecast.forecastday));
  // {location: {current: {last_updated_epoch: 1677861900, last_updated: '2023-03-03 12:45', temp_c: 32, temp_f: 89.6, is_day: 1, …}
  // forecast: {forecastday: Array(1)}
  // location: {name: 'Tokio', region: 'Pando', country: 'Bolivia', lat: -11.08, lon: -69.27, …}}, current: {…}, forecast: {…}}

  fetchWeather(query, days)
    .then(data => (listWeather.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => (listWeather.innerHTML = createErrorMarkup()));
}

function createMarkup(arr) {
  console.log(arr);
  return arr
    .map(
      ({
        day: {
          condition: { text, icon },
          avgtemp_c,
          avghumidity,
          maxwind_kph,
        },
        date,
        astro: { sunset, moonset },
      }) => ` <li class="weather-item loading">
   <p class="local-time">${date}</p>
        <h1 class="avgtemp_c">Temperature: ${avgtemp_c} &#176;</h1>
        <div class="flex">
          <img src="${icon}" alt="${text}" class="icon" />
          <p class="description">Condition: ${text}</p>
        </div>
        <div class="humidity">Humidity: ${avghumidity}%</div>
        <div class="wind">Wind speed: ${maxwind_kph} km/h</div>
        <div class="sunset">Sunset: ${sunset}</div>
        <div class="moonset">Moonset: ${moonset}</div>
      </li>`
    )
    .join('');
}

function createErrorMarkup() {
  return `<li><img src="https://www.shutterstock.com/image-vector/web-banner-error-400-bad-260nw-1157766460.jpg" alt="Bad request"></li>`;
}
//  <h2 class="query">Weather in ${query}</h2>
//         <div class="region-wrapper">
//             <p>Region: ${region}</p>
//             <p>Country: ${country}</p>
//         </div>
