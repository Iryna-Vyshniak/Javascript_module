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
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
function countProps(object) {
  let propCount = 0;
  
const array = [];
   for (key in object) {
   if (object.hasOwnProperty(key)){
    array.push(key);
    propCount = array.length;
}
   }
  
  return propCount;
}

// 13
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
const apartment9 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values9 = [];
// Change code below this line
const keys9 = Object.keys(apartment9);
 for (const key of keys){
   values9.push(apartment9[key]);
 }

 //14
//  Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of
 function countProps(object) {
  
  let propCount = 0;
  const array = [];

  const keys = Object.keys(object);
 
for (const key of keys) {
  array.push(key);
  propCount = array.length;
}
  return propCount;
  
}

// 15
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().
const apartment10 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys10 = Object.keys(apartment);
const values10 = Object.values(apartment);

// 16
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const value = [];
  for (const value of Object.values(salaries)){
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}


// 17
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// const values = Object.values(colors);
// for (const value of values) {
//   hexColors.push(value.hex);
//   rgbColors.push(value.rgb);
// }

