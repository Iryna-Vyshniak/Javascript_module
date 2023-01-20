const objA = {
  a: 5,
};
console.log('objA: ', objA); // {a: 5} a: 5 [[Prototype]]: Object
// or {a: 5} a: 5 __proto__: Object

const objB = {
  b: 6,
};
console.log('objB: ', objB); // {b: 6} b: 6 [[Prototype]]: Object
// or {b: 6} b: 6 __proto__: Object

const objC = {
  c: 7,
};
console.log('objC: ', objC); // {c: 7} c: 7 [[Prototype]]: Object
// or {c: 7} c: 7 __proto__: Object

const objD = Object.create(objA);
console.log('objD: ', objD); // {} [[Prototype]]: Object a: 5 [[Prototype]]: Object

console.log('objD.a: ', objD.a); //5

objD.a = 55;
console.log('objD: ', objD); // {a: 55} a: 55 [[Prototype]]: Object a: 5 [[Prototype]]: Object

const objE = Object.create(objD);
console.log('objE: ', objE); // {} [[Prototype]]: Object a: 55 [[Prototype]]: Object

console.log('objE.a: ', objE.a); //5

objD.a = 777;
console.log('objD: ', objD); // {a: 777} a: 777 [[Prototype]]: Object a: 5 [[Prototype]]: Object

objE.a = 888;
console.log('objE: ', objE); // {a: 888} a: 888 [[Prototype]]: Object a:777 [[Prototype]]: Object a: 5 [[Prototype]]: Object
