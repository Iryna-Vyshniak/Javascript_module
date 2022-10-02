// 1
// Присвой змінній apartment об'єкт, який описує квартиру
const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};

// 2
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
const apartment1 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: 'Henry',
    phone: "982-126-1588", 
    email: "henry.carter@aptmail.com",
  },
};

// 3
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating2 = apartment.rating;
const aptDescr2 = apartment.descr;
const aptPrice2 = apartment.price;
const aptTags2 = apartment.tags;

// 4
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

const apartment3 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName3 = apartment.owner.name;
const ownerPhone3 = apartment.owner.phone;
const ownerEmail3 = apartment.owner.email;
const numberOfTags3 = apartment.tags.length;
const firstTag3 = apartment.tags[0];
const lastTag3 = apartment.tags[2];


// 5
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

const apartment4 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};


const aptRating4 = apartment['rating'];
const aptDescr4 = apartment['descr'];
const aptPrice4 = apartment['price'];
const aptTags4 = apartment['tags'];

// 6
//Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted". 
const apartment5 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment5.price = 5000;
apartment5.rating = 4.7;
apartment5.owner.name = 'Henry Sibola';
apartment5.tags.push('trusted');

// 7
// Додай об'єкту apartment кілька нових властивостей:
// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

const apartment6 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment6.area = 60;
apartment6.rooms = 3;
apartment6.location = {
  country: "Jamaica",
  city: "Kingston",
}
  
// 8
// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
const name1 = "Repair Droid";
const price1 = 2500;
const image1 = "https://via.placeholder.com/640x480";
const tags1 = ["on sale", "trending", "best buy"];

const product = {
  name1,
  price1,
  image1,
  tags1,
};

// 9
// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.
// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  
[emailInputName]: "henry.carter@aptmail.com", 
[passwordInputName]: "jqueryismyjam",

};

// 10
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
const apartment7 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = ["descr", "rating", "price"];
const values = ["Spacious apartment in the city center", 4, 2153];
// Change code below this line
for (const keys in apartment7) {
  keys;
  values;  
}

// 11
// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
const keys8 = [];
const values8 = [];
const advert8 = {
  service: "apt",
};
const apartment8 = Object.create(advert8);
apartment8.descr = "Spacious apartment in the city center";
apartment8.rating = 4;
apartment8.price = 2153;

for (const key in apartment8) {
  // Change code below this line
if (apartment8.hasOwnProperty(key)) {
    console.log(key);
    console.log(apartment8[key]);
    keys.push(key);
    values.push(apartment8[key]);
}
 
}

// 12
// 