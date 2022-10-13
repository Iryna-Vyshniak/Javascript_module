const cars = ['Mazda', 'Ford', 'BMW', 'Porshe'];
console.log(cars.length);
// 4
cars[cars.length];

//  Method
cars.push('Toyota');
cars.unshift('Volvo');
// cars.pop();
// cars.shift();

const firstCar = cars.shift();
const lastCar = cars.pop();

// reverse
cars.reverse();

// task 1
const text = 'Hi, we`re learning JS';
const reverseText = text.split('').reverse().join('');
console.log(reverseText);
// SJ gninrael er`ew ,iH

// task 2 Finf element BMW & change
// indexOf() => use with primitive type
const carsIndex = cars.indexOf('BMW');
cars[carsIndex] = 'Reno';
console.log(cars);

// find() => use with objects, arrays
const people = [
  { name: 'Andrew', budget: 30567 },
  { name: 'Valik', budget: 42780 },
  { name: 'Nick', budget: 42450 },
];
// find person with budget 42780
// v1
const personFind = people.find(person => person.budget === 42780);
console.log(personFind);
// {name: 'Valik', budget: 42780}

// v2
let findPerson;
for (let person of people) {
  if (person.budget === 42780) {
    findPerson = person;
  }
}
console.log(findPerson);
//{name: 'Valik', budget: 42780}

// includes()
cars.includes('W');

// МЕТОДЫ ВЫСОКОГО ПОРЯДКА
const upperCaseCars = cars.map(car => car.toUpperCase());
console.log(upperCaseCars);
// (4) ['PORSHE', 'RENO', 'FORD', 'MAZDA']

const fib = [1, 1, 2, 3, 5, 8, 13];
const pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2);
console.log(pow2Fib);
// (7) [1, 1, 4, 9, 25, 64, 169]

const sqrt = num => Math.sqrt(num);
const numFib = fib.map(pow2).map(sqrt);
console.log(numFib);
// (7) [1, 1, 2, 3, 5, 8, 13]

// filter => new array, for <= === =>
const filteredNum = pow2Fib.filter(num => num > 20);
console.log(filteredNum);
// (3) [25, 64, 169]

// reduce
const persons = [
  { name: 'Andrew', budget: 30567 },
  { name: 'Valik', budget: 42780 },
  { name: 'Nick', budget: 42450 },
];

const allBudget = persons.reduce((acc, person) => {
  acc += person.budget;
  return acc;
}, 0);
console.log(allBudget);
// 115797

const someBudget = persons.reduce((acc, person) => {
  if (person.budget > 40000) {
    acc += person.budget;
  }
  return acc;
}, 0);

console.log(someBudget);
// 85230

// declaration method
// short & true
const filterBudget = persons
  .filter(person => person.budget > 40000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(filterBudget);
// 85230

const displayItems = allItems.filter(item => item.name.contains('phone'));
// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1);
