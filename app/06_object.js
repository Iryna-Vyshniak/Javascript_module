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
