// forEach => likes loop for..for
/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 
 * - element by element iterates over the original array
 * - Returns nothing
 * - Replaces the classic for if you don't need to break the loop
 *
 */
const numbers = [5, 10, 15, 20, 25];

numbers.forEach(number => {
  console.log('number', number);
  // number 5
  // number 10
  // number 15
  // number 20
  // number 25
});

console.log(numbers); // [5, 10, 15, 20, 25]

numbers.forEach(number => {
  console.log('number', number * 2);
  // number 10
  // number 20
  // number 30
  // number 40
  // number 50
});

console.log(numbers); // [5, 10, 15, 20, 25]

const newNumbers = numbers.forEach(number => {
  console.log('number', number * 2);
  // number 10
  // number 20
  // number 30
  // number 40
  // number 50
  return number * 2; // undefined
});

console.log(numbers); // [5, 10, 15, 20, 25]
console.log(newNumbers); // undefined

const numbersArr = [5, 10, 15, 20, 25];

/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 
 * - element by element iterates over the original array
 * - Does not change the original array
 * - Returns a new array of the same length
 *
 */

const doubledNums = numbersArr.map(number => {
  return number * 3;
});

console.log('numbers', numbersArr); // [5, 10, 15, 20, 25]
console.log('doubledNums', doubledNums); // [15, 30, 45, 60, 75]
