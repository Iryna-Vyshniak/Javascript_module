// function myFunc(){
// const a = [4, 5, 6];
// document.querySelector('.out-1').innerHTML = a.join('-');
// }

// myFunc();
// // 4-5-6

// function myFunction(callback){
//     const a = [4, 5, 6];
//     let element = document.querySelector('.out-1');
//     callback(elem, a);
//     }

// // function callback
// function out(element, arr){
// element.innerHTML = arr.join('-');
// }

// myFunc(out);
// // 4-5-6

// example 2
function twoSquared() {
  return 2 * 2;
}
twoSquared();

function threeSquared() {
  // return Math.pow(3, 3);
  return 3 * 3;
}

const numSquared = num => {
  return num * num;
};

// ex 3 long result with typical steps
const copyArrAndSquareNums = arr => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] ** 2);
  }
  return output;
};

const nums = [1, 2, 3, 4];
const res = copyArrAndSquareNums(nums);

console.log(res);
// (4) [1, 4, 9, 16]

const copyArrDevideByTwo = arr => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] / 2);
  }
  return output;
};

const res2 = copyArrDevideByTwo(nums);
console.log(res2);
// (4) [0.5, 1, 1.5, 2]

// callback function
function copyArrDoSomething(arr, instructions) {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(instructions(arr[i]));
  }
  return output;
}

const numInstructions = num => {
  return num * num;
};

const result = copyArrDoSomething([1, 3, 5, 6], numInstructions);
console.log(result);
// (4) [1, 9, 25, 36]

const numDevidedBy3 = num => {
  return Math.round(num / 3);
};
const result2 = copyArrDoSomething([66, 17, 27, 698], numDevidedBy3);
console.log(result2);
// (4) [22, 6, 9, 233]

const somethingNum = [55, 66, 33, 77];
const resultNum = copyArrDoSomething(somethingNum, numDevidedBy3);
console.log(resultNum);

// recursion
let a = 1;
const rec = () => {
  a++;
  console.log(a);
  if (a > 10) {
    return a;
  }
  rec();
};

rec();
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11

// for animation why didn't work???
let offset = 0;
function move() {
  offset += 5;

  document.querySelector('.test-2').style.left = offset + 'px';
  if (offset > 200) {
    return true;
  }
  setTimeout(move, 500);
}

// document.querySelector('button').onclick = move;

//
let globalA = 8;
const one = () => {
  globalA += 1;
  return globalA;
};

console.log(one()); // 9
console.log(one()); // 10
console.log(one()); // 11

const one1 = () => {
  let localA = 8;
  localA += 1;
  return localA;
};

console.log(one1()); // 9
console.log(one1()); // 9
console.log(one1()); // 9

function counter() {
  let localA = 8;
  return () => {
    localA += 1;
    return localA;
  };
}
console.log(counter());
// () => {
//     localA += 1;
//     return localA;
//   }

const counterB = counter();
console.log(counterB);
// () => {
//     localA += 1;
//     return localA;
//   }
console.log(counterB()); // 9
console.log(counterB()); // 10
console.log(counterB()); // 11
console.log(counterB()); // 12
console.log(counterB()); // 13

const counterC = counter();
console.log(counterC()); // 9
console.log(counterC()); // 10
console.log(counterC()); // 11
console.log(counterC()); // 12
console.log(counterC()); // 13

console.log(counterB()); // 14
console.log(counterB()); // 15

console.log(counterC()); // 14
