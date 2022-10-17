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
// 5) ['h', 'e', 'l', 'l', 'o']

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

// ========================================================================================
// rest - остаток, позволяет представлять неограниченное множество аргументов в виде массива
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

const s1 = ([s10, ...s11] = [100, 200, 300, 400]);
console.log(s11);
// (3) [200, 300, 400]

function sum(a, b, ...args) {
  let result = a + b;
  for (let i = 0; i < args.length; i += 1) {
    result += args[i];
  }
  return result;
}

console.log(sum(1, 2));
// 3
console.log(sum(1, 2, 3));
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
