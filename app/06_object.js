console.log('Hello!');

const personData = {
  namePerson: 'Valik',
  age: 23,
  isProgrammer: true,
  languages: ['uk', 'en', 'de'],
  // 'complex key': 'Complex Value',
  // ['key_' + (1 + 3)]: 'Computed Key', // key_4
  greet() {
    console.log('greet from person');
  },
  info() {
    console.log('this:', this);
    console.info('Информация про человека по имени:', this.name);
  },
};

console.log(personData.namePerson);
const ageKey = 'age';
console.log(personData[ageKey]);
console.log(personData['complex key']);
personData.greet();

personData.age += 1;
personData.languages.push('by');
// person['key_4'] = undefined
delete personData['key_4'];

console.log(personData);
console.log(personData['key_4']);

const { namePerson, age: personAge = 10, languages } = personData;
console.log(personData);

// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }
Object.keys(personData).forEach(key => {
  console.log('key:', key);
  console.log('value:', personData[key]);
});

// Context
// person.info()

const logger = {
  keys() {
    console.log('Object Keys: ', Object.keys(this));
  },

  keysAndValues() {
    // "key": value
    // Object.keys(this).forEach(key => {
    //   console.log(`"${key}": ${this[key]}`)
    // })
    // const self = this
    Object.keys(this).forEach(
      function (key) {
        console.log(`"${key}": ${this[key]}`);
      }.bind(this)
    );
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------- Start -------');
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log('--------------');
      }
    });

    if (bottom) {
      console.log('------- End -------');
    }
  },
};

// const bound = logger.keys.bind(person)
// bound()
// logger.keysAndValues.call(person)
logger.withParams.call(personData, true, true, true);
logger.withParams.apply(personData, [true, true, true]);

// object book
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: false,
  rating: 0,
  data: {
    a: 1,
    b: {
      test: 'test',
    },
    c: 3,
  },
};

console.log(book);
console.log(book.data); // {a: 1, b: {test: test}, c: 3}
console.log(book['data']); // {a: 1, b: {test: test}, c: 3}
console.log(book.data.a); // 1
console.log(book['data']['a']); // 1
console.log(book.data.b.test); //test
console.log(book['data']['b']['test']); // test

const authorName = 'author';
console.log(book[authorName]); // Bernard Cornwell
console.log(book['author']); // Bernard Cornwell
console.log(book.author); // Bernard Cornwell

console.log(book);
console.log(book.isPublic); // false
book.isPublic = true;
console.log(book);
console.log(book.isPublic); // true

book.price = '10$';
// book['price'] = '10$';
console.log(book);

book.genres.push('tale');
console.log(book);

const obj = {};
obj.a = 123;
console.log(obj); // {a: 123}

const playlist = {
  name: 'My super playlist',
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  rating: 8,
  // trackCount: 4,
  getName: function () {
    console.log(`It's old school object method`);
  },
  getNames() {
    console.log(`It's modern school object method`);
  },
  changeName(newName) {
    this.name = newName;
  },
  showName() {
    console.log(this.name);
  },
  addTrack(track) {
    this.tracks.push(track);
    console.log(this.tracks); //['track-1', 'track-2', 'track-3', 'track-4', 'new track']
    // this.trackCount = this.tracks.length;
    // console.log(this.trackCount);
  },
  updateRating(newRating) {
    this.rating = newRating;
    console.log(this.rating); // 10
  },
  getTrackCount() {
    console.log('tracks: ', this.tracks.length); //tracks:  5
    return this.tracks.length;
  },
};

playlist.showName();
playlist.addTrack('new track');
playlist.updateRating(10);
playlist.getTrackCount();

console.log(playlist);
console.log(playlist.name); // 'My super playlist'
console.log(playlist['name']); // 'My super playlist'

const propertyName = 'tracks';
console.log(propertyName); // 'tracks'

console.log(playlist.propertyName); // undefined
console.log(playlist[propertyName]); //['track-1', 'track-2', 'track-3', 'track-4']

console.log(playlist['tracks']); // ['track-1', 'track-2', 'track-3', 'track-4']

playlist.favouriteSinger = 'King';
console.log(playlist); //{name: 'My super playlist', tracks: Array(4), rating: 8, trackCount: 4, favouriteSinger: 'King'}

playlist.changeName('Super amazing playlist');
console.log(playlist.name); // 'Super amazing playlist'
console.log(playlist); // {name: 'Super amazing playlist', tracks: Array(4), rating: 8, trackCount: 3, getName: ƒ, …}

playlist.showName();

//shortcase
const username = 'Avex777';
const email = 'avex777@gmail.com';

const signupData = {
  username: username,
  email: email,
};

console.log(signupData); // {username: 'Avex777', email: 'avex777@gmail.com'}

const signupDataShortcase = {
  username,
  email,
};

console.log(signupDataShortcase); // {username: 'Avex777', email: 'avex777@gmail.com'}

// <input name='color' value='tomato'>
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData); // {color: 'tomato'}

console.log({ a: 1 } === { a: 1 }); //false
const dE = { a: 1 };
const fJ = dE; // { a: 1 }

console.log(dE === fJ); // true

dE.b = 2;
console.log(dE); // {a: 1, b: 2}
console.log(fJ); // {a: 1, b: 2}

const hotel = {
  name: 'Fairmont',
  stars: 5,
  rating: 10,
  capacity: 1200,
  booking: 700,
  pool: true,
  gym: true,
  restourant: true,
  changeName(newName) {
    this.name = newName;
  },
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName();

hotel.changeName('Fairmont Grand Hotel');
console.log(hotel.name); // Fairmont Grand Hotel

hotel.changeCapacity(2000);
console.log(hotel.capacity); // 2000

// Object.keys

const feedback = {
  good: 123,
  neutral: 34,
  bad: 55,
};

function calculateFeedback(feedbacks) {
  let totalFeedback = 0;

  const allKeys = Object.keys(feedbacks);
  console.log('all keys: ', allKeys);

  for (const key of allKeys) {
    console.log('key: ', key);
    console.log('value: ', feedback[key]); // 123...
    totalFeedback += feedback[key];
  }
  console.log('Total feedback: ', totalFeedback); // 212
  return totalFeedback;
}

calculateFeedback(feedback);

// better variant to use Object.values, because we want to take only values

function sumFeedback(feedbacks) {
  let totalFeedback = 0;

  const allValues = Object.values(feedbacks);
  console.log('all values: ', allValues);

  for (const value of allValues) {
    console.log('value: ', value); // 123...
    totalFeedback += value;
  }
  console.log('Total feedback: ', totalFeedback); // 212
  return totalFeedback;
}

sumFeedback(feedback);

// find friend by name

const friendsByNetworks = [
  { name: 'Alex', online: true },
  { name: 'Andrew', online: true },
  { name: 'Antony', online: false },
  { name: 'Helen', online: true },
  { name: 'Nick', online: false },
  { name: 'Valentino', online: true },
];
console.table(friendsByNetworks);

for (const friend of friendsByNetworks) {
  console.log(friend);
  console.log(friend.name);
  friend.newprop = 555;
}

console.table(friendsByNetworks);

function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      console.log(`${friend.name} - find my close friend ${friendName}`);
      return `${friend.name} - find my close friend ${friendName}`;
    }
  }
  console.log(`oops, didn't find...`);
  return `oops, didn't find...`;
}

findFriendByName(friendsByNetworks, 'Valentino');
findFriendByName(friendsByNetworks, 'Roberto');
findFriendByName(friendsByNetworks, 'HOOKS');

const carList = [
  {
    Year: 2022,
    Make: 'Audi',
    Model: 'Q3',
    Category: 'SUV',
    status_free: true,
    color: 'Red',
  },
  {
    Year: 2021,
    Make: 'Chevrolet',
    Model: 'Malibu',
    Category: 'Sedan',
    status_free: false,
    color: 'Silver',
  },
  {
    Year: 2022,
    Make: 'Cadillac',
    Model: 'Escalade ESV',
    Category: 'SUV',
    status_free: false,
    color: 'Black',
  },
  {
    Year: 2020,
    Make: 'Chevrolet',
    Model: 'Corvette',
    Category: 'Coupe, Convertible',
    status_free: true,
    color: 'White',
  },
  {
    Year: 2020,
    Make: 'Acura',
    Model: 'RLX',
    Category: 'Sedan',
    status_free: true,
    color: 'Blue',
  },
];

// get car`s key
for (const car of carList) {
  const keys = Object.keys(car);

  // get car`s value
  for (const key of keys) {
    console.log(key);
    console.log(car[key]);
  }
}

// get all cars values
for (const car of carList) {
  const value = Object.values(car);
  console.log(value); //  [2022, 'Audi', 'Q3', 'SUV', 'true', 'Red'], ... [2020, 'Acura', 'RLX', 'Sedan', 'true', 'Blue']
}

function findCarsFree(cars) {
  const freeCars = [];
  for (const car of cars) {
    if (car.status_free) {
      freeCars.push(car.Make);
    }
    console.log(`oops, all cars are busy...`);
  }
  console.log(`These cars' status are free: `, freeCars);
  return freeCars;
}

console.table(findCarsFree(carList));

function findBusyCars(cars) {
  const busyCars = [];

  for (const car of cars) {
    if (!car.status_free) {
      busyCars.push(car.Make, car.Model);
    }
    console.log(`These cars: ${car.Make} ${car.Model} are free`);
  }
  console.log(`These cars are busy: `, busyCars.join(', '));
  return busyCars;
}

console.log(findBusyCars(carList));

// get cars by status
function getCarsByStatus(cars) {
  const carsByStatus = {
    free: [],
    busy: [],
  };

  for (const car of cars) {
    // 1st variant

    // if (car.status_free) {
    //   carsByStatus.free.push(car.Make);
    //   continue;
    // }
    // carsByStatus.busy.push(car.Make);

    // 2nd variant
    // carsByStatus[car.status_free ? 'free' : 'busy'].push(car.Make);

    // 3rd variant
    const key = car.status_free ? 'free' : 'busy';
    carsByStatus[key].push(car.Make);
  }

  return carsByStatus;
}

console.log(getCarsByStatus(carList));

// spread instead concat

const commonArr = [1, 2, 34, 67, 87];
const concatArr = commonArr.concat([345, 67, 102]);
console.log('it`s array with concat: ', concatArr); // [1, 2, 34, 67, 87, 345, 67, 102]

const spreadArr1 = [...commonArr, 345, 67, 102];
console.log('it`s array, where add spread: ', spreadArr1); // [1, 2, 34, 67, 87, 345, 67, 102]

const spreadArr2 = [345, true, ...commonArr, ...spreadArr1];
console.log('it`s array, where add two spreads: ', spreadArr2); // [345, true, 1, 2, 34, 67, 87, 1, 2, 34, 67, 87, 345, 67, 102]

const spreadArray = [1000, ...[1, 2, 3, 4], 2000, ...[5, 6, 7, 8, 9], 3000, ...[true, 'silk']];
console.log(spreadArray); // [1000, 1, 2, 3, 4, 2000, 5, 6, 7, 8, 9, 3000, true, 'silk']

// find the highest and еру lowest temperature

const temp = [18, 14, 30, 29, -1, 0, -32];
console.log(Math.max(...temp)); // 30
console.log(Math.min(...temp)); // -32

function getTempByDegrees(temp) {
  const tempByDegrees = {
    high: [],
    low: [],
  };

  for (const degree of temp) {
    // if (degree >= 0) {
    //   tempByDegrees.high.push(degree);
    //   continue;
    // }
    // tempByDegrees.low.push(degree);

    const key = degree >= 0 ? 'high' : 'low';
    tempByDegrees[key].push(degree);
  }
  return tempByDegrees;
}

console.log(getTempByDegrees(temp)); // { high [18, 14, 30, 29, 0], low [-1, -32] }

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSideBar: false,
};

const userSettings = {
  showNotifications: false,
  hideSideBar: true,
};

const finallSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finallSettings);

// destructuring assignment
const playList = {
  name: 'My video playlist',
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  rating: 8,
  tracksCount: 4,
};

const {
  name,
  rating = 0,
  tracks: tracksList,
  tracksCount: numberOfTracks = 0,
  author = 'Unknown',
} = playList;
// tracksList

console.log(tracksList); // ['track-1', 'track-2', 'track-3', 'track-4']
console.log(rating); // 8

tracksList.push('new track');
console.log(tracksList); // ['track-1', 'track-2', 'track-3', 'track-4', 'new track'];

console.log(numberOfTracks); // 4

const rgb = [255, 100, 80];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255, 100, 80

// deep destructuring assignment
const profile = {
  name: 'Jacobs Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios,Jamaica',
  avatar:
    'https://www.bing.com/images/search?view=detailV2&ccid=F54ARgqj&id=EDD5117AEA861033BE4C033C2086C8A39EB79976&thid=OIP.F54ARgqjJL09ySEi3GMk9AHaIl&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2fff%2f31%2f11%2fff3111f905f87e14994b20cb74cedaee.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.179e00460aa324bd3dc92122dc6324f4%3frik%3ddpm3nqPIhiA8Aw%26pid%3dImgRaw%26r%3d0&exph=720&expw=621&q=avater&simid=608033821942896098&FORM=IRPRST&ck=A9B85EA08B0BF10C599B1444486045F6&selectedIndex=14&ajaxhist=0&ajaxserp=0',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// const {
//   name: userName,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

//console.log(userName, tag, location, followers, views, likes); // Jacobs Gluke jgluke Ocho Rios,Jamaica 5603 4827 1308

// const { name: userName, tag, location, avatar, stats } = profile;
// console.log(stats); // {followers: 5603, views: 4827, likes: 1308}

const { name: userName, tag, location, avatar, stats } = profile;
const { followers, views, likes } = stats;

console.log(followers); //5603
console.log(likes); // 1308

console.log(userName, tag, location, followers, views, likes); // Jacobs Gluke jgluke Ocho Rios,Jamaica 5603 4827 1308

const userProfile = {
  firstName: 'Oluwatobi',
  lastName: 'Sofela',
  website: 'codesweetly.com',
};

const { firstName: forename, lastName: surname, website: onlineSite } = userProfile;

console.log(forename); // "Oluwatobi"
console.log(surname); // "Sofela"
console.log(onlineSite); // "codesweetly.com"
// console.log(website); // "ReferenceError: website is not defined"

const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  getBooks() {
    console.log('Цей метод буде повертати всі книги - властивість books');
    return this.books;
  },
  addBook(bookName) {
    console.log('Цей метод буде додавати нову книгу у властивість books');
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
bookShelf.addBook('Mowgli');
bookShelf.addBook('"The Mist"');
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian', 'Mowgli', '"The Mist"']

bookShelf.removeBook('Dream Guardian');
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Mowgli', '"The Mist"']

const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  email: 'jhondoe@gmail.com',
  homeworkResults: [],
  getName() {
    console.log(`Student's name: `, this.firstName, this.lastName);
  },
  getEmail() {
    console.log('Student`s email: ', this.email);
  },
  getHWResults() {
    console.log('Student`s HW results: ', this.homeworkResults);
  },
  addHWResults(topic, sucess) {
    // const item = { topic: topic, sucess: sucess }; create object
    const item = { topic, sucess };
    this.homeworkResults.push(item);
    console.log('add student`s HW results:', this.homeworkResults);
  },
};

console.log(student);
console.log(student.homeworkResults); // []
student.getName(); // Student's name:  John Doe
student.getEmail(); // Student`s email:  jhondoe@gmail.com
student.getHWResults(); // []

student.addHWResults('Array', true); // [{sucess: true, topic: "Array"}]
student.addHWResults('Loops', true); // [{sucess: true, topic: "Array"}, {topic: 'Loops', sucess: true}]

const familyName = 'lastName';
student[familyName] = 'Snow';
student.getName(); //Student's name:  John Snow
console.log(student); // {firstName: 'John', lastName: 'Snow', age: 23, email: 'jhondoe@gmail.com', homeworkResults: Array(2), …}

// computed properties
const propName = 'name';

const currentUser = {
  age: 21,
};

console.log(currentUser); //{age: 21}
currentUser[propName] = 'Ariya';
console.log(currentUser[propName]); // Ariya
console.log(currentUser.name); // Ariya

console.log(currentUser); // {age: 21, name: 'Ariya'}

const admin = {
  age: 25,
  [propName]: 'Arya Stark',
};

console.log(admin); // {age: 25, name: 'Arya Stark'}
console.log(admin[propName]); // Arya Stark
console.log(admin.name); // 'Arya Stark'

// Object.keys(), Object.values(), Object.entries()

const movies = {
  name: 'Jurassic Park',
  year: 1993,
  runtime: 127,
  categories: ['adventure', 'thriller', 'sci-fi'],
  'release-date': '1993-06-11',
  director: 'Steven Spielberg',
  writer: ['Michael Crichton', 'David Koepp'],
  actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
  storyline:
    'Huge advancements in scientific technology have enabled a mogul ... critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island.',
};

const keys = Object.keys(movies);
console.log(keys); // ['name', 'year', 'runtime', 'categories', 'release-date', 'director', 'writer', 'actors', 'storyline']

for (const key of keys) {
  console.log(movies[key]);
}

const values = Object.values(movies);
console.log(values); // ['Jurassic Park', 1993, 127, Array(3), '1993-06-11', 'Steven Spielberg', Array(2), Array(3), 'Huge advancements in scientific technology have en…al with dinosaurs roaming freely over the island.']

const entries = Object.entries(movies);
console.log(entries);
// [
// ['name', 'Jurassic Park']['year', 1993]
// ['runtime', 127]
// ['categories', Array(3)]
// ['release-date', '1993-06-11']
// ['director', 'Steven Spielberg']
// ['writer', Array(2)]
// ['actors', Array(3)]
// ['storyline', 'Huge advancements in scientific technology h..']
// ]

//
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const aptRating = apartment.rating;
// const aptRating = apartment['rating'];
const aptDescr = apartment.descr;
// const aptDescr = apartment['descr'];
const aptPrice = apartment.price;
// const aptPrice = apartment['price'];
const aptTags = apartment.tags;
// const aptTags = apartment['tags'];
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
console.log(numberOfTags); // 3
const firstTag = apartment.tags[0];
console.log(firstTag); // premium
const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag); //top

apartment.price = 500;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

console.log(apartment);

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};

console.log(apartment);

const nameProduct = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  nameProduct,
  price,
  image,
  tags,
};

//computed properties
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};

const apKeys = Object.keys(apartment);
const keyArr = [];
const valuesArr = [];

for (const key of apKeys) {
  keyArr.push(key);
  valuesArr.push(apartment[key]);
}

console.log('Keys: ', keyArr);
console.log('Values: ', valuesArr);

const apartments = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keysApart = ['descr', 'rating', 'price'];
const valuesApart = ['Spacious apartment in the city center', 4, 2153];

for (const key in apartments) {
  keysApart;
  console.log(key);
  valuesApart;
  console.log(apartments[key]);
}

const allKeys = [];
const allValues = [];
const advert = {
  service: 'apt',
};
const aparts = Object.create(advert);
aparts.descr = 'Spacious apartment in the city center';
aparts.rating = 4;
aparts.price = 2153;
for (const key in aparts) {
  if (aparts.hasOwnProperty(key)) {
    console.log(key);
    console.log(aparts[key]);
    allKeys.push(key);
    allValues.push(aparts[key]);
  }
}

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

function countPropes(object) {
  let propCount = 0;
  const array = [];

  const keys = Object.keys(object);

  for (const key of keys) {
    array.push(key);
    propCount = array.length;
  }
  console.log(propCount);
  return propCount;
}

countPropes({}); //0
countPropes({ name: 'Mango', age: 2 }); // 2
countPropes({ mail: 'poly@mail.com', isOnline: true, score: 500 }); //3

const propKeys = Object.keys(apartments);
const propValues = Object.values(apartments);

// count total salary
function countTotalSalary(salaries) {
  let totalSalary = 0;

  const keys = Object.keys(salaries);

  for (const key of keys) {
    totalSalary += salaries[key];
  }

  console.log(totalSalary);
  return totalSalary;
}

countTotalSalary({}); // 0
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // 330
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // 400

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

// 1st variant
const valuesColors = Object.values(colors);
for (const value of valuesColors) {
  hexColors.push(value.hex);
  rgbColors.push(value.rgb);
}
console.log('hex colors: ', hexColors);
console.log('rgb colors: ', rgbColors);

// 2nd variant
const hexColors1 = [];
const rgbColors1 = [];
const keysColors = Object.keys(colors);

for (const key of keysColors) {
  hexColors1.push(colors[key].hex);
  rgbColors1.push(colors[key].rgb);
}

console.log('hex colors: ', hexColors1);
console.log('rgb colors: ', rgbColors1);

//The function looks for a product object with this name (name property) in the products array and returns its price (price property). If no product with that name is found, the function should return null.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

getProductPrice('Radar');
console.log(getProductPrice('Radar')); //1300
console.log(getProductPrice('Grip')); //1200
console.log(getProductPrice('Engine')); //null

// SPREAD and REST ========================================================
const [aK, b, ...everythingElse] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(b); // 1
console.log(everythingElse); // [2, 3, 4, 5, 6, 7, 8] - REST
// const [a, ....everythingElse, b] = [ 1, 2, 3, 4, 5, 6, 7, 8]; // SyntaxError rest must be last

function aF(...argumentS) {
  console.log('it`s REST, array, isn`t pseudo');
}

aF(1, 2, 3, 4, 5, 6);

const { street, ...address } = {
  // ...address - REST OBJECT
  street: 'Stepna',
  city: 'Kyiv',
  country: 'Ukraine',
};

console.log(address); // {city: 'Kyiv', country: 'Ukraine'} REST OBJECT

const district = { district: 'Stepna' };
const locations = {
  city: 'Kyiv',
  country: 'Ukraine',
};

const resultSpread = {
  district,
  ...locations,
};
console.log(resultSpread); // {district: {…}, city: 'Kyiv', country: 'Ukraine'} SPREAD OBJECT

const resultsSpread = {
  ...district,
  ...locations,
};
console.log(resultsSpread); // {district: 'Stepna', city: 'Kyiv', country: 'Ukraine'} SPREAD OBJECT

const addressUser = { post: '01004', city: 'Kyiv' };
const streetUser = { street: 'forest rose', city: 'Newtone' };

const results = { ...streetUser, ...addressUser };
console.log(results); // SPREAD {street: 'forest rose', city: 'Kyiv', post: '01004'}

const userLocations = {
  country: 'Ukraine',
  userDistrict: {
    userStreet: 'Sosnova',
    house: 25,
    postCode: '011003',
  },
  userAddress: {
    city: 'Kyiv',
  },
};

const {
  country = 'France',
  userDistrict,
  userDistrict: { userStreet: nameStreet, house, postCode },
  userAddress,
  userAddress: { city },
} = userLocations;

console.log(city); // destructuring Kyiv
console.log(userAddress); // {city: 'Kyiv'}
console.log(userDistrict); //{street: 'Sosnova', house: 25, postCode: '011003'}
// console.log(userStreet); //userStreet is not defined
console.log(nameStreet); //Sosnova
console.log(house); // 25
console.log(city); // Kyiv
console.log(postCode); // 011003
console.log(country); //Ukraine

const arrDestr = ['a', 'b', 'c', 'd'];
const [a, secondLetter, c, d, lastValue = 'e'] = arrDestr;

console.log(lastValue); //e
console.log(c); // c

// FUNCTIONS ============================================
// A function is a routine, an independent piece of code, designed to perform a specific task multiple times with different initial values. Functions allow you to structure large programs, reduce repetition, and isolate code.
// function expression & function declaration

// function declaration
function getUserFullName(userFirstName, userLastName) {
  const message = `Hello, ${userFirstName} ${userLastName}`;
  console.log(message);
}

getUserFullName('Craig'); //Hello, Craig undefined

function getUserFullName1(userFirstName, userLastName) {
  const lastName = '';

  if (userLastName) {
    lastName = lastName;
  }
  const message = `Hello, ${userFirstName} ${lastName}`;
  console.log(message);
}

getUserFullName1('Craig'); // Hello, Craig

function getUserFullName2(userFirstName, userLastName = '') {
  const message = `Hello, ${userFirstName} ${userLastName}`;
  console.log(message);
}

getUserFullName2('Craig'); // Hello, Craig

// function expression
const getUserFullName3 = function (userFirstName, userLastName = '') {
  const message = `Hello, ${userFirstName} ${userLastName}`;
  console.log(message);
};

getUserFullName3('Craig', 'Morris'); // Hello, Craig Morris

// Write a script that outputs to the console all the words of the line except the first and the last The resulting string must not begin or end
// space character. The script should work for any string.

const getStringWithoutFirstLastElment = function (string) {
  const stringArray = string.trim().split(' ');

  stringArray.pop();
  stringArray.shift();

  const result = stringArray.join(' ');
  console.log(result);
  return result;
};

getStringWithoutFirstLastElment('    Welcome to the future. Be Happy!   '); // to the future. Be

// get min number
function getMin(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

console.log(getMin(3, 12)); //3
console.log(getMin(43, 12)); //12

//calc BMI
function calcBMI(weight, height) {
  weight = Number.parseFloat(weight.replace(',', '.'));
  height = Number.parseFloat(height.replace(',', '.'));

  const result = weight / Math.pow(height, 2);
  console.log(result.toFixed(1));
  return result.toFixed(1);
}

calcBMI('88,3', '1,75'); //28.8
calcBMI('58,3', '1,61'); //22.5

// get rect aria
const getRectAria = dimensions => {
  const addDot = dimensions.replaceAll(',', '.');
  console.log(addDot); // 12 34 //42.8sm  1.42m

  const sideArr = addDot.split(' ');
  console.log(sideArr); // 42.8sm  1.42m

  const result = Number.parseFloat(sideArr[0]) * Number.parseFloat(sideArr[sideArr.length - 1]);
  console.log(Number.parseFloat(sideArr[0])); // 42.8
  console.log(Number.parseFloat(sideArr[sideArr.length - 1])); // 1.42

  console.log(result.toFixed(1));
  return result.toFixed(1);
};
//getRectAria('12 34'); //408.0
//getRectAria('42,8sm  1,42m'); // 60.8
//getRectAria('42,8 0'); // 0

const logItem = items => {
  const itemsArr = items.split(', ');
  console.log(itemsArr);
  let message = '';

  for (const item of itemsArr) {
    const index = itemsArr.indexOf(item) + 1;
    message = `${index}: ${item}`;
    console.log(message);
  }
  return message;

  // let message = '';
  // for (const item of items) {
  //   const index = items.indexOf(item) + 1;
  //   message = `${index}: ${item}`;
  //   console.log(message);
  // }
  // return message;
};

logItem('mango, lemon');
logItem('🍋, 🍎, 🍌');
// logItem(['mango', 'lemon']);
// logItem(['🍋', '🍎', '🍌']);

console.log(['🍋', '🍎', '🍌'].at(-1)); // 🍌

const fruitsPlate = ['🍋', '🍎', '🍌'];
console.log(fruitsPlate.at(-1)); // 🍌

// get names with phones (getUserContacts) printUsersContact showUsersContact
const showPersonContact = (names, phones) => {
  const arrName = names.split(', ');
  const arrPhone = phones.split(', ');
  let message = '';

  for (let i = 0; i < arrName.length; i += 1) {
    message = `${arrName[i]}: ${arrPhone[i]}`;
    console.log(message);
  }
  return message;
};

const namesList = 'Jacobs, William, Solomon, Artemis';
const phonesList = '89095453464, 89034353454, 8904324354353, 890074392732';
showPersonContact(namesList, phonesList);

function findLargestNum(numArr) {
  // let max = numArr[0];

  // for (const num of numArr) {
  //   if (num > max) {
  //     max = num;
  //   }
  // }
  // console.log(max);
  // return max;
  console.log(Math.max(...numArr));
  return Math.max(...numArr);
}

findLargestNum([2, 17, 94, 55, 758]); //758

function calcAvarage() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  console.log(total / arguments.length);
  return total / arguments.length;
}

console.log(calcAvarage(1, 2, 3, 4)); //2.5

// 2nd variant
function calculateAvarage(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  console.log(total / args.length);
  return total / args.length;
}

console.log(calculateAvarage(1, 2, 3, 4)); //2.5

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(courseName) {
  if (courses.includes(courseName)) {
    // if (courses.indexOf(courseName) > -1) {
    console.log('У вас вже є такий курс');
    return 'Курс додано';
  }
  courses.push(courseName);
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас вже є такий курс'

function removeCourse(courseName) {
  // if (!courses.includes(courseName)) {
  //   console.log('Курс за такою назвою не знайдено');
  //   return;
  // }

  // const courseIndex = courses.indexOf(courseName);
  // courses.splice(courseIndex, 1);

  const courseIndex = courses.indexOf(courseName);
  if (courseIndex === -1) {
    console.log('Курс за такою назвою не знайдено');
    return;
  }

  courses.splice(courseIndex, 1);
}

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс за такою назвою не знайдено'

function renameCourse(currentName, newName) {
  if (!courses.includes(currentName)) {
    console.log('Курс за такою назвою не знайдено');
    return;
  }
  const currentCourseIndex = courses.indexOf(currentName);
  courses.splice(currentCourseIndex, 1, newName);
}

renameCourse('PostgreSQL', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
renameCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'

// 2nd variant
function deleteCourse(name = 'deafult value') {
  /**
   * 1. Знайти індекс елемента. indexOF
   * 2. Видаляємо елемент по індексу. splice
   */

  const index = courses.indexOf(name);
  if (index === -1) {
    return 'Такого курса нема';
  }

  const result = `Курс ${courses[index]} видалено`;
  courses.splice(index, 1);

  return result;
}

function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);
  if (index === -1) {
    return 'Такого курса нема';
  }

  const result = `Курс ${oldName} оновлено на курс ${newName}`;
  courses.splice(index, 1, newName);

  return result;
}

let res = addCourse('Express');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

res = addCourse('Express');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

res = deleteCourse();
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

res = updateCourse('Expressss', 'NestJS');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

const numArr = [8, 9, 10];
console.log(numArr.sort()); // [10, 9, 8]

const sortNum = [...numArr].sort((currentNum, nextNum) => currentNum - nextNum);
console.log(sortNum); // [8, 9, 10]

//call stack ============================================================================
let f;

f = function () {
  console.log(1);
};

let execute = function (fff) {
  fff();
};

execute(f); // 1

f = function () {
  console.log(2);
};

///////////////////////////////
let g;

g = function () {
  console.log(1);
  return 'stinger';
};

let executes = function (ggg) {
  return ggg();
};

// const r = executes(g);
// console.log(r);
// // 1
// // 'stinger'

console.log(executes(g));

g = function () {
  console.log(2);
};

/////////////////////////////////

let h;

h = function () {
  k();
  console.log(1);
  // return 'stinger';
};

let carryOut = function (hhh) {
  // return hhh();
  hk();
  hhh();
  hkg();
};

// const r = carryOut(h);
// console.log(r);
// // 1
// // 'stinger'

console.log(carryOut(h));
//3
// 2
// 1
// 4

h = function () {
  console.log(2);
};

function k() {
  console.log(2);
}
function hk() {
  console.log(3);
}
function hkg() {
  console.log(4);
}

///////////////////////////////////////

let l;

l = function () {
  kl();
  console.log(1);
  return 'stinger';
};

let carryOuts = function (lll) {
  hkl();
  hkgl();
  return lll();
};

// const r = carryOut(h);
// console.log(r);
// // 1
// // 'stinger'

console.log(carryOuts(l));
//333
// 444
// 222
// 1
// stinger

l = function () {
  console.log(2);
};

function kl() {
  console.log(222);
}
function hkl() {
  console.log(333);
  return 'wild';
}
function hkgl() {
  console.log(444);
}

//

const emailInput = 'email';
const pswInput = 'psw';

const dataInfo = {
  [emailInput]: 'spring@gmail.com',
  [pswInput]: 'qwer',
};

console.log(dataInfo); // {email: 'spring@gmail.com', psw: 'qwer'}
console.log(dataInfo[emailInput]); // spring@gmail.com
console.log(dataInfo.email); // spring@gmail.com

//Iterate over the apartment object using the for...in loop, and write all its keys in the keys array, and all the values ​​of its properties in the values ​​array.
const apart = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keysAparts = ['descr', 'rating', 'price'];
const valuesAparts = ['Spacious apartment in the city center', 4, 2153];

for (const key in apart) {
  console.log(key); // descr, rating, price
  keysAparts;
  console.log(keysAparts); // ['descr', 'rating', 'price']
  valuesAparts;
  console.log(valuesAparts); //  ['Spacious apartment in the city center', 4, 2153]
}

//Refactor the solution of the previous task by adding a check for its own property to the for...in loop.
const keysA = [];
const valuesA = [];
const advertA = {
  service: 'apt',
};

const apartA = Object.create(advertA);

apartA.descr = 'Spacious apartment in the city center';
apartA.rating = 4;
apartA.price = 2153;

for (const key in apartA) {
  if (apartA.hasOwnProperty(key)) {
    console.log(key); // descr// rating // price // service
    console.log(apartA[key]); //  'Spacious apartment in the city center'// 4 // 2153

    keysA.push(key);
    valuesA.push(apartA[key]);
  }
}

// Write the countProps(object) function, which counts and returns the number of the object's own properties in the object parameter. Use the propCount variable to store the number of object properties.
function countQuality(object) {
  let totalQuality = 0;
  let props = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      props.push(key);
      totalQuality = props.length;
    }
  }
  console.log(totalQuality);
  return totalQuality;
}
countQuality({ name: 'Mango', age: 2 }); // 2
countQuality({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3
countQuality({}); // 0

//Write the function getAllPropValues(propName), which accepts one parameter propName - the name (key) of the property. The function should return an array of all property values ​​with that name from each object in the products array. If there are no properties with that name in the objects, the function should return an empty array.

const cartPoducts = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const arrProductsValues = [];

  for (const product of cartPoducts) {
    if (product[propName]) {
      arrProductsValues.push(product[propName]);
    }
  }

  // for (const product of cartPoducts) {
  //   const keys = Object.keys(product);
  //   for (const key of keys) {
  //     if (key === propName) {
  //       arrProductsValues.push(product[key]);
  //     }
  //   }
  // }
  console.log(arrProductsValues);
  return arrProductsValues;
}

getAllPropValues('name'); //
getAllPropValues('quantity'); //

// Write the function calculateTotalPrice(productName), which accepts one parameter productName - the name of the product. The function should return the total cost (price * quantity) of the product with this name from the products array.

function calculateTotalPrice(productName) {
  let totalPrice = 0;

  for (const product of cartPoducts) {
    const { name, price, quantity } = product;

    if (name === productName) {
      totalPrice = price * quantity;
    }
  }
  console.log(totalPrice);
  return totalPrice;
}
calculateTotalPrice('Blaster');
calculateTotalPrice('Radar');
calculateTotalPrice('Droid');
calculateTotalPrice('Grip');
calculateTotalPrice('Scanner');

// destructuring assignment ===========================================================================

//A three-day forecast of maximum temperatures has arrived and we are calculating the average temperature for three days (meanTemperature). Replace the declaration of variables yesterday, today and tomorrow with one operation of destructuring the properties of the highTemperatures object.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

//During destructuring, you can change the name of the variable into which the property value is unpacked. First, we write the name of the property from which we want to get the value, after which we put a colon and write the name of the variable in which the value of this property must be placed.
const firstBook = {
  title: 'Останнє королівство',
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const { title: firstTitle, coverImage: firstCoverImage = 'https://via.placeholder.com/640/480' } =
  firstBook;

console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: 'Сон смішної людини',
};

const { title: secondTitle, coverImage: secondCoverImage = 'https://via.placeholder.com/640/480' } =
  secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480

//Replace the declaration of variables highYesterday, highToday, highTomorrow and highIcon with a single operation of destructuring the properties of the highTemperatures object. Set the default value for highIcon to the string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
const highTemperature = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperature;

//Refactor the for...of loop so that it uses object destructuring.
const someColors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColor = [];
const rgbColor = [];

for (const { hex, rgb } of colors) {
  hexColor.push(hex);
  rgbColor.push(rgb);
  console.log(hexColor);
  console.log(rgbColor);
}

//received the weather forecast for two days, with minimum and maximum temperatures, as well as optional icons. Replace the declaration of all variables with one operation of destructuring the properties of the forecast object. Set default values ​​for icons, variables todayIcon and tomorrowIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highTodays,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrows,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(lowTomorrow); // 27

//"Settings object" pattern ===========================================================================
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, publics } = book;
  console.log(title);
  console.log(numberOfPages);
  // etc
}

// Або в сигнатурі (підписі), різниці немає.
function doStuffWithBooks({ title, numberOfPages, downloads, rating, publics }) {
  console.log(title);
  console.log(numberOfPages);
  // etc
}

//The function calculateMeanTemperature(forecast) accepts one forecast parameter - a temperature object for two days in the following format. Replace the declaration of variables todayLow, todayHigh, tomorrowLow and tomorrowHigh with one operation of destructuring the properties of the forecast object.
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// SPREAD ====================================

function getScores(scores) {
  const bestScore = Math.max(...scores);
  console.log(bestScore);
  const worstScore = Math.min(...scores);
  console.log(worstScore);
}

getScores([89, 64, 42, 17, 93, 51, 26]); // 93 // 17

//The firstGroupScores, secondGroupScores, and thirdGroupScores variables store the test results of individual groups. Using division, complete the code so that:

// The variable allScores stored an array of all scores from the first to the third group.
// The bestScore variable had the highest overall score.
// The worstScore variable had the lowest overall score
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScores = Math.max(...allScores);
const worstScores = Math.min(...allScores);

console.log(bestScores); // 97
console.log(worstScores); // 14

//take the default settings and apply overridden settings on top of them. Add the code in such a way that the final settings object of the test is created in the finalSettings variable.
const defaultSetup = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSetup = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSetup = { ...defaultSetup, ...overrideSetup };
console.log(finalSetup);

//Write a function makeTask(data) that takes one parameter data - an object with the following properties.","text - the text of the task.","category - task category.","priority is the priority of the task.","The function must create and return a new task object without directly changing the data parameter.

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  const newTask = {
    category,
    priority,
    completed,
    ...data,
  };
  console.log(newTask);
  return newTask;
}

makeTask({}); // {completed: false, category: 'General', priority: 'Normal'}
makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }); // {category: 'Homemade', priority: 'Low', completed: false, text: 'Take out the trash'}
makeTask({ priority: 'Low', text: 'Choose shampoo' }); //{category: 'General', priority: 'Low', completed: false, text: 'Choose shampoo'}
