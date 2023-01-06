// // 1 Number
const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
console.log('Math.pow 53', Math.pow(2, 53) - 1);
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE', Number.MAX_VALUE);
console.log('MIN_VALUE', Number.MIN_VALUE);
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
console.log('2 / 0', 2 / 0);
console.log(Number.NaN); // Not A Number
console.log(typeof NaN);
const weird = 2 / undefined;
console.log(Number.isNaN(weird));
console.log(Number.isNaN(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(42));

const stringInt = '40';
const stringFloat = '40.42';
console.log(Number.parseInt(stringInt) + 2);
console.log(parseInt(stringInt) + 2);
console.log(Number(stringInt) + 2);
console.log(+stringInt + 2);
console.log(parseFloat(stringFloat) + 2);
console.log(+stringFloat + 2);

console.log(0.4 + 0.2); // 0.6
console.log(+(0.4 + 0.2).toFixed(1));
console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// 2 BigInt
console.log(90071992547409919999999n - 9007199254740991999999n);
console.log(-90071992547409919999999n);
// console.log(90071992547409919999999.23231n) // error

//console.log(10n - 4); // error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(5n / 2n); // 2n

// 3 Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(Math.abs(-42));
console.log(Math.max(42, 12, 23, 11, 422));
console.log(Math.min(42, 12, 23, 11, 422));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.round(4.4));
console.log(Math.trunc(4.9));
console.log(Math.random());

// 4 Example
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(10, 42));

//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const newSonAge = sonYearsOld * 2;
  const age = dadYearsOld - newSonAge;

  console.log('years ago', Math.abs(age));
  return Math.abs(age);
}

twiceAsOld(36, 7); // 22;
twiceAsOld(55, 30); // 5;
twiceAsOld(42, 21); // 0;
twiceAsOld(22, 1); // 20;
twiceAsOld(29, 0); // 29;

//short variant
const twiceAsOlds = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(36, 7)); // 22;
console.log(twiceAsOld(55, 30)); // 5
console.log(twiceAsOld(42, 21)); // 0;
console.log(twiceAsOld(22, 1)); // 20;
console.log(twiceAsOld(29, 0)); // 29;

//function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
// n < 5	            100
// n >= 5 and n < 10	95
// n >= 10	          90

// use ternary operator to complete it.
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : n;
}

console.log(saleHotdogs(1)); // / 100
console.log(saleHotdogs(4)); // 400
console.log(saleHotdogs(5)); // 475
console.log(saleHotdogs(9)); // 855
console.log(saleHotdogs(10)); // 900
console.log(saleHotdogs(100)); // 9000

// refactor
function saleHotdog(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}

console.log(saleHotdog(1)); // / 100
console.log(saleHotdog(4)); // 400
console.log(saleHotdog(5)); // 475
console.log(saleHotdog(9)); // 855
console.log(saleHotdog(10)); // 900
console.log(saleHotdog(100)); // 9000

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce((currentEl, nextEl) => currentEl * nextEl, 1);

console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])); // 64
