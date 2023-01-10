// ...rest  - собирает много элементов в один
// ...spread - раскладывает массив на элементы

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 0];

// spread позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
// для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
// для элементов (литералов массива)
// для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)

console.log(numbers1);
//(5) [1, 2, 3, 4, 5]
console.log(...numbers1);
// 1, 2, 3, 4, 5

const allNum = [98, ...numbers1, 878, ...numbers2, 0];
console.log(allNum);
// (13) [98, 1, 2, 3, 4, 5, 878, 6, 7, 8, 9, 0, 0]

Math.max(...numbers1);
// 5

function sum(a, b, c) {
  return a + b + c;
}

sum(...numbers1);
console.log(sum(...numbers1));
// 6

const obj1 = {
  name: 'Ann',
  x: 2,
};

const obj2 = {
  name: 'Nick',
  y: 3,
};

// spread копирует, не имеет связи потом с основным
const newObjClone = { ...obj1 };
console.log(newObjClone);
// {name: 'Ann', x: 2}

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
//{name: 'Nick', x: 2, y: 3}

console.log(obj1);
//{name: 'Ann', x: 2}

const somePartsOfBody = ['shoulders', 'knees'];
const partsOfBody = ['head', ...somePartsOfBody, 'toes', 'fingers'];
console.log(partsOfBody);
//(5) ['head', 'shoulders', 'knees', 'toes', 'fingers']
partsOfBody.push('foot');
console.log(partsOfBody);
// (6) ['head', 'shoulders', 'knees', 'toes', 'fingers', 'foot']

// string => array
const e = [...'hello'];
console.log(e);
// ['h', 'e', 'l', 'l', 'o']

// set => array
const setToArray = [...new Set([1, 1, 2, 3, 3, 4, 5])];
console.log(setToArray);
// (5) [1, 2, 3, 4, 5]

// function
function test() {
  console.log(arguments);
}
test(1, 2, 3, 4, 5);
// Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
function test2() {
  console.log([...arguments]);
}
test2(1, 2, 3, 4, 5);
// (5) [1, 2, 3, 4, 5]

// 'add' value to object => create new object
let b1 = { name: 'Bill', param: 15 };
let b2 = { name: 'John', param: 17 };
let b3 = { ...b1, bike: true };
console.log(b3);
// {name: 'Bill', param: 15, bike: true}

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

// ========================================================================================
// REST - остаток, позволяет представлять неограниченное множество аргументов в виде массива
function f5(a, ...b) {
  console.log(a);
  console.log(b);
}

f5(1, 2);
// 1
// [2]
f5(1, 2, 3, 4, 5);
// 1
// (4) [2, 3, 4, 5]
f5(1, 2, [3, 4], 7, [10, 11], true);
// 1
//(5) [2, Array(2), 7, Array(2), true]

const [first, ...second] = [100, 200, 300, 400];
console.log(second);
// (3) [200, 300, 400]

function sums(a, b, ...args) {
  let result = a + b;
  for (let i = 0; i < args.length; i += 1) {
    result += args[i];
  }
  return result;
}

console.log(sums(1, 2));
// 3
console.log(sums(1, 2, 3));
// 6

const allSum = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(allSum(1, 3, 5, 7, 9));
// 25

const myFun = (a, b, ...moreArgs) => {
  console.log(a);
  console.log(b);
  console.log(moreArgs);
};

console.log(myFun());
// undefined
// undefined
// []

myFun('один', 'два', 'три', 'четыре', 'пять', 'шесть');
// console.log(myFun('один', 'два', 'три', 'четыре', 'пять', 'шесть'));
// один
// два
// (4) ['три', 'четыре', 'пять', 'шесть']

myFun('один', 'два', 'три');
// console.log(myFun('один', 'два', 'три'));
// один
// два
// ['три']

myFun('один', 'два');
console.log(myFun('один', 'два'));
// один
// два
// []

function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();
console.log(fun1());
// 0
console.log(fun1(1));
// 0
console.log(fun1(2, 3, 4, 5, 6));
// 5

// Остаточные параметры могут быть деструктурированы (только массивы). Это означает, что их данные могут быть заданы как отдельные значения
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN => b и c равны undefined
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 => 1 + 2+ 3, четвёртый параметр не деструктурирован

// Using the rest operation, supplement the code of the add() function so that it accepts any number of arguments, counts and returns their sum.

function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  console.log(total);
  return total;
}

add(15, 27); // 42

//The addOverNum() function counts the sum of all arguments. Change the parameters and the body of the addOverNum() function so that it counts the sum of only those arguments that are greater than a given number. This number should be the first parameter of the function.
function addOverNum(currentNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > currentNum) {
      total += arg;
    }
  }
  console.log(total);
  return total;
}
addOverNum(50, 15, 27); // 0
addOverNum(10, 12, 4, 11, 48, 10, 8); // 71
addOverNum(20, 74, 11, 62, 46, 12, 36); // 218

//The findMatches() function takes an arbitrary number of arguments. The first argument will always be an array of numbers, and the rest of the arguments will be just numbers.","Complete the function code so that it returns a new array of matches, in which there will be only those arguments starting from the second,

function findMatches(arr, ...numbers) {
  const matches = [];
  for (const num of numbers) {
    if (arr.includes(num)) {
      matches.push(num);
    }
  }
  console.log(matches);
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); //[1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); //  [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16); // []

//Supplement the 'createContact(partialContact)' function so that it returns a new one contact object with the 'id' and 'createdAt' properties added, as well as the 'list' with the value "default" if there is no such property in 'partialContact'.
function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: Math.floor(Math.random() * 100),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: 'Ariya',
    email: 'snow@mail.com',
    list: 'friends',
  })
); // {list: 'friends', name: 'Ariya', email: 'snow@mail.com', id: 52, createdAt: 1673379049265}

function createContacts(contact) {
  return {
    id: null,
    createAt: null,
    list: 'default',
    ...contact,
  };
}

console.log(
  createContacts({
    name: 'Ariya',
    email: 'snow@mail.com',
  })
); // {id: null, createAt: null, list: 'default', name: 'Ariya', email: 'snow@mail.com'}

function generateId() {
  return '_' + Math.random().toString(36).slice(2, 9);
}
console.log(generateId()); // _ob06no3
generateId();

//toString() radix argument must be between 2 and 36
function generatePsw() {
  return '_' + Math.random().toString(12).substr(2, 9);
}
console.log(generatePsw()); //_68a2b07a8

//Write the 'transformUsername(user)' function so that it returns a new object, with the 'fullName' property instead of 'firstName' and 'lastName'.

const transformUsername = ({ firstName, lastName, ...otherProps }) => {
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
};
console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
); //{fullName: 'Jacob Mercer', id: 1, email: 'j.mercer@mail.com', friendCount: 40}

const user = {
  email: 'user@gmail.com',
  age: 12,
};

const { email, age } = user;
console.log(email); //user@gmail.com
console.log(user); //{email: 'user@gmail.com', age: 12}

const userEmail = user.email;
console.log(userEmail); //user@gmail.com
console.log('email: ', email); // email:  user@gmail.com

//
const userCurrent = {
  emailU: 'userS@gmail.com',
  ageU: 12,
};

const { emailU: userCurrentEmail } = userCurrent;
console.log(userCurrent); // {emailU: 'userS@gmail.com', ageU: 12}
console.log(userCurrentEmail); //userS@gmail.com

//console.log('email: ', emailU); // Uncaught ReferenceError: emailU is not defined

//
function foo({ username } = {}) {
  //{username: 'Bob'}
  console.log(username); //Bob
}

foo(); //undefined
foo({ username: 'Bob' });

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    // for (let i = 0; i < potions.length; i += 1) {
    //   if (potions[i].name === newPotion.name) {
    //     return `Error! Potion ${newPotion.name} is already in your inventory!`;
    //   }
    // }

    for (const potion of potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    return this.potions;
  },
};
console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); // [{…}, {…}, {…}, {…}]
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })); //Error! Potion Stone skin is already in your inventory!
