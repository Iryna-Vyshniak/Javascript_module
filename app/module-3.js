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
    if (object.hasOwnProperty(key)) {
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
for (const key of keys) {
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
  for (const value of Object.values(salaries)) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}


// WRITTING WITH COMMENT, BECAUSE CONST NAME REPEAT


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



// 18
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {

  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;

}

// CODEWAR
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
  let message = "found the needle at position " + haystack.indexOf('needle');
  return message;
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// var1
function lovefunc(flower1, flower2) {

  return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)
    ? true
    : false;
}
//  var 2
function lovefunc(flower1, flower2) {
  let lovePetals = flower1 + flower2;
  return lovePetals % 2 !== 0
    ? true
    : false;
}

// create your first JS function and print "Hello World!"
function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}

// Выведите на экран последний символ строки, находящейся в константе name
const nameN = 'Na\nharis';
console.log(nameN[nameN.length - 1]);


// Напишите программу, которая будет генерировать заголовок и тело письма, используя уже готовые переменные, и выводить получившиеся строки на экран.
// Для заголовка используйте переменные firstName и greeting, запятую и восклицательный знак. Выведите это на экран в правильном порядке.
// Для тела письма используйте переменные info и intro, при этом второе предложение должно быть на новой строке.
let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';

console.log(greeting + ',' + ' ' + firstName + '!');
console.log(intro + '\n' + info);

// Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит в грн и выводит на новой строчке. Считаем, что:
// - 1 евро = 1.25 долларов
// - 1 доллар = 30грн
let eurosCount = 100;

let euroToDollars = 1.25;
let dollarsCount = eurosCount * euroToDollars;

console.log(dollarsCount);

let uaPerDollar = 30;
let uaCount = dollarsCount * uaPerDollar;

console.log(uaCount);


// Поиск в массиве объектов. Методы Find,findIndex и filter
// .find or.findIndex
let arrIndex = [
  { name: 'Nick', age: 36 },
  { name: 'Olha', age: 18 },
  { name: 'David', age: 45 },
]
let resultOne = arrIndex.find(item => item.age === 18);

console.log(resultOne);

// {name: 'Olha', age: 18}

let resultTwo = arr.findIndex(item => item.age === 18);

console.log(resultTwo);
// 1

// .filter
let arrFilter = [
  { name: 'Nick', age: 36 },
  { name: 'Olha', age: 18 },
  { name: 'David', age: 45 },
]
let resultFilterOne = arrFilter.filter(item => item.age >= 18);

console.log(resultFilterOne);
//  {name: 'Nick', age: 36},
// {name: 'Olha', age: 18},
// {name: 'David', age: 45},

// Сортировка массива. Методы sort и reverse
// .sort() for unicod

let arrSort = ['Nick', 'Olha', 'John'];
let resultArrSort = arrSort.sort();

console.log(resultArrSort);
// ["John","Nick","Olha"]

let arrSortN = [22, 1, 5];
let resultArrSortNumber = arrSortN.sort();

console.log(resultArrSortNumber);
// [1,22,5]

let arrSortS = ["22", "1", "Ann", "ananas"];
let resultArrSortString = arrSortS.sort();

console.log(resultArrSortString);
// ["1","22","Ann","ananas"]


// .reverse()
let arrReverse = ["22", "1", "Ann", "ananas"];
let resultArrReverse = arrReverse.reverse();

console.log(resultArrReverse);
// ["ananas","Ann","1","22"]

//  Метод .map(function) (преобразование массива) original Array doesn`t change => copy
let arrMap = ["Nick", "Olha", "Sonic", "Ananas"];
let resultArrMap = arrMap.map(item => item[0]);
// or resultArrMap = arrMap.map(function(item, index, array)){
// return item[0];
// }
console.log(resultArrMap);
// ["N","O","S","A"]

let firstPart = "likes JS";
let userInfo = {
  name: 'Nick',
  age: 30,
  [firstPart]: true,
};

let key = 'name';
console.log(userInfo[key]);
// 'Nick'

// Значение свойств объекта из переменных
function makeUserInfo(name, age) {
  return {
    name,
    age,
  };
}
let user = makeUserInfo('Nick', 30);
console.log(user);

// [object Object] 
// {
//   "name": "Nick",
//   "age": 30
// }

// Изменение объекта и его свойств
let userInfor = {
  name: 'Nick',
};
userInfor.age = 30;
userInfor.address = {
  city: 'Kyiv',
  street: 'Freedom',
};
userInfor['likes JS'] = true;

console.log(userInfor);
// {name: 'Nick', age: 30, address: {…}, likes JS: true}
// address: {city: 'Kyiv', street: 'Freedom'}
// age: 30
// likes JS: true
// name: "Nick"
// [[Prototype]]: Object


// find friends by name
const friends = [
  { name: 'Nick', online: true },
  { name: 'Sam', online: false },
  { name: 'Dan', online: true },
  { name: 'John', online: false },
  { name: 'Olha', online: true },
]

const findFriendsByName = function (allFriends, name) {
   for (const friend of allFriends) {
     if (friend.name === name) {
       return `Find ${name}`;
     }
   } 
   return `Didn\'t find ${name}`;
 };

console.log(findFriendsByName(friends, 'Polly'));
console.log(findFriendsByName(friends, 'Sam'));

// Didn't find Polly
// Find Sam

// Get all names
const myFriends = [
  {name: 'Nick', online: true},
  {name: 'Sam', online: false},
  {name: 'Dan', online: true},
  {name: 'John', online: false},
  {name: 'Olha', online: true},
]
 
 const getAllNames = function (allFriends) {
   const friendsName = [];
   for (const friend of allFriends) {
     friendsName.push(friend.name);
   } 
   return friendsName;
 };

console.log(getAllNames(myFriends));
// ["Nick","Sam","Dan","John","Olha"]


// find friends online
const myFriendsList = [
  {name: 'Nick', online: true},
  {name: 'Sam', online: false},
  {name: 'Dan', online: true},
  {name: 'John', online: false},
  {name: 'Olha', online: true},
]
 
 const getOnlineFriends = function (allFriends){
   const onlineFriends = [];
   for (const friend of allFriends){
     if (friend.online) {
       onlineFriends.push(friend);
     }
   }
   return onlineFriends;
 }
console.log(getOnlineFriends(myFriendsList));
// [
//   {name: 'Nick', online: true},
//   {name: 'Dan', online: true},
//   {name: 'Olha', online: true},
// ]

// modul - 3 continue

// 19
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrayAllValues = [];
  
//   for (const product of products){
//     if (product[propName]) {
//       arrayAllValues.push(product[propName]);
//     }
//   }
//   return arrayAllValues;
// };

// ["Radar","Scanner","Droid","Grip"]


// 20
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//  let totalPrice = 0;
  
//   for (const product of products) {
//     if (product['name'] === productName){
//       totalPrice += product['price'] * product['quantity'];
//     }
//   }
//   return totalPrice;
// };
// console.log(calculateTotalPrice("Droid"));

// 2800


// 21
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні(meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday, today, tomorrow} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

//22
//У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday,
//        today,
//        tomorrow,
//        icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
// yesterday: highYesterday,
// today: highToday,
// tomorrow: highTomorrow,
// icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  
tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
} = forecast;

// 26
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
function calculateMeanTemperature(forecast) {
  const {
  today: {low: todayLow, high: todayHigh},
  tomorrow: {low: tomorrowLow, high: tomorrowHigh},
} = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// 
const charlie = { name: 'Charlie' };
const joy = { name: 'Joy' };
const lordy = { name: 'Lordy' };

makeRobotsPair(joy, lordy);

console.log(
  joy.partner === lordy, // true 
  lordy.partner === joy, // true
);

makeRobotsPair(charlie);

console.log(charlie.partner); // null

console.log(joy)

function makeRobotsPair(robot1, robot2) {
  if (!robot2) {
    robot1.partner = null
    return
  }
  robot1.partner = robot2
  robot2.partner = robot1
}


// Robot Factory собираются составить бюджет на следующий год. Для этого им нужно знать сколько будут стоить все детали, которые они планируют приобрести в течение года. Создай функцию calculateCost, которая принимает bucket, и products. bucket - это объект с запчастями, которые мы собираемся приобрести, а products - объект с ценами на детали от магазинов. Товары в магазинах не повторяются.
// const bucket = {
//   display: 20,
//   wheel: 100,
//   cpu: 40,
// }

// const products = {
//   amazobot: {
//     wheel: 12.5,
//   },
//   robozetka: {
//     display: 56.2,
//     cpu: 150,
//   },
// }

// function calculateCost(bucket, products) {
//   let totalValue = 0
   
//   const productsArr = Object.values(products)
//   const priceObj =  Object.assign({}, ...productsArr)
  
//   for (const good in bucket) {
//     let goodsCount = bucket[good]
//     let goodsPrice = priceObj[good]
    
//     totalValue += goodsCount * goodsPrice
//   }
//   return totalValue
// }

// 27
// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// 28
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// 29
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};

// 30
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.
// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
 
let newTask = {completed, 
               category, 
               priority, ...data};
  return newTask;
}

// 31
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.
function add (...args) {
  let totalSum = 0;
  for (const arg of args){
    totalSum += arg;
  }
  return totalSum;
}

// 32
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.
function addOverNum (maxNumber, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > maxNumber) {
      total += arg;
  }
  }
  return total;
}

// 33
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for (const arrayItem of array){
if (args.includes(arrayItem)){
matches.push(arrayItem);
}
}
  return matches;
}

// 34
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

// 35
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент. 
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
// const oldBookIndex = this.books.indexOf(oldName);
//     this.books.splice(oldBookIndex, 1, newName);
//   },
// };

// 36
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив. 
// const atTheOldToad = {
  
//   potions: [],

// };

// 37
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

// getPotions(){
//   return this.potions;
// }
// };

// 38
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {

// this.potions.push(potionName);

//   },
// };



// 39
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   removePotion(potionName) {
// const indexPotion = this.potions.indexOf(potionName);
// this.potions.splice(indexPotion, 1);
//   },
// };

// 40
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
// let indexPotion = this.potions.indexOf(oldName);
//     this.potions.splice(indexPotion, 1, newName);
//   },
// };


// 41  this script CRAZY!!!!!
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  
   getPotions() {
      const { potions } = this;
      return potions;
  },
    addPotion(newPotion) {
        const { potions } = this;
        for (const potion of potions) {
            
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        potions.push(newPotion);
    },

    removePotion(potionName) {
        const { potions } = this;
        
      for (let i = 0; i < potions.length; i += 1){
          const { name } = this.potions[i];
          
          if (potionName === name) {
              potions.splice(i, 1);
        }
      }
  },

    updatePotionName(oldName, newName) {
        const { potions } = this;
        for (const potion of potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }
  },

};



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//    getPotions() {
//       const { potions } = this;
//       return potions;
//   },
//     addPotion(newPotion) {
//         const { potions } = this;
//         for (const potion of potions) {
            
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         const { potions } = this;
        
//       for (let i = 0; i < potions.length; i += 1){
//           const { name } = this.potions[i];
          
//           if (potionName === name) {
//               potions.splice(i, 1);
//         }
//       }
//   },

//     updatePotionName(oldName, newName) {
//         const { potions } = this;
//         for (const potion of potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//   },

// };


