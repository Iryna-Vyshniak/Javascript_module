// callback function
// const arr = ['Dan', 'Olha', 'John', 'Leo'];
// // we want => [3, 4, 4, 3];

// // old method =>
// let newArr = [];
// for (i = 0; i < arr.length; i += 1) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// // for uppercase letter
// // old method
// let newArr1 = [];
// for (i = 0; i < arr.length; i += 1) {
//   newArr1.push(arr[i].toUpperCase());
// }
// console.log(newArr1);

//  MODERN METHOD
const names = ['Dan', 'Olha', 'John', 'Leo'];

function mapArray(arr, fn) {
  const res = [];
  // console.log(res);
  for (let i = 0; i < arr.length; i += 1) {
    res.push(fn(arr[i]));
  }
  return res;
}

// el => 1 element
function nameLength(el) {
  //   console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  //   console.log(el);
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const upperCaseElements = mapArray(names, nameToUpperCase);
console.log(result);
console.log(upperCaseElements);

// 2
function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting('Nick');
// const fullName = testGreeting('Sokol');
const fullName = greeting('Nick')('Sokol');
console.log(fullName);

// 3
function question(job) {
  const jobDictionary = {
    developer: `what's JS?`,
    teacher: `what's your subject?`,
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}

const developerQuestion = question('developer');
console.log(developerQuestion('Nick'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Olha'));
