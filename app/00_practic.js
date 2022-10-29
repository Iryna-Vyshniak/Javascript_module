// function Parent(counts) {
//   let counter = counts;
//   return () => {
//     console.log(counter);

//     counter--;
//     console.log(`counts left ${counter}`);
//   };
// }
// const counters = Parent(5);

// counters();
// counters();
// counters();

// 2
// let counter = 5;
// function child() {
//   console.log(counter);
//   counter--;
//   console.log(`counts left ${counter}`);
// }

// function parent(childFunc) {
//   childFunc(counter);
// }

// parent(child);
// parent(child);

// 3
const numbers = [1, 2, 3, 4, 5];
const callBack1 = el => el > 3;
const callBack2 = el => el % 2;

numbers.filterCustom = function (callback) {
  const filteredItems = [];
  for (let i = 0; i < this.length; i += 1) {
    /* i < numbers.length */
    const shouldBeAdded = callback(this[i], i, this);
    if (shouldBeAdded) {
      filteredItems[filteredItems.length] = this[i];
    }
  }
  return filteredItems;
};

console.log(numbers.filter(callBack1));
console.log(numbers.filterCustom(callBack1));
