
const friends1 = ['kiwi', 'lemon', 'mango', 'peach'];
console.table(friends1);
const lastIndex1 = friends1.length - 1;
for (i = 0; i <= lastIndex1; i += 1){
    console.log(friends[i]);
    // call to every elements in array: kiwi, lemon, mango, ...
}

// 0	'kiwi'
// 1	'lemon'
// 2	'mango'
// 3	'peach'
// Array(4)


const friends2 = ['kiwi', 'lemon', 'mango', 'peach'];
console.table(friends2);
const lastIndex2 = friends2.length - 1;
for (i = 0; i <= lastIndex2; i += 1){
    friends2[i] += '-1';
}
console.log(friends2[i]);


// 0	'kiwi'
// 1	'lemon'
// 2	'mango'
// 3	'peach'
// Array(4)
// 0
// :
// "kiwi-1"
// 1
// :
// "lemon-1"
// 2
// :
// "mango-1"
// 3
// :
// "peach-1"
// length: 4


const friends3 = ['kiwi', 'lemon', 'mango', 'peach'];

for (const friend3 of friends3){
    console.log(friend3);
}

// kiwi
// lemon
// mango
// peach



// cout total summ shopping in cart
const cart1 = [45, 67, 112, 300, 260, 567, 789];
let totalSumm1 = 0;
for (let i = 0; i < cart1.length; i += 1) {
    console.log(cart1[i]);
    totalSumm1 += cart1[i];
}
console.log('Total: ', totalSumm1);

// 45
// 67
// 112
// 300
// 260
// 567
// 789
// Total:  2140

// for ... of => if we want only count, don`t change 
const carts2 = [45, 67, 112, 300, 260, 567, 789];
let totalSumm2 = 0;
for (let cart2 of carts2) {
    totalSumm2 += cart2;
}
console.log('Total: ', totalSumm2);
//  Total:  2140

// if we want change elements in array ~ add task on 1.1%
const carts3 = [45, 67, 112, 300, 260, 567, 789];
for (let i = 0; i < carts3.length; i += 1) {
    carts3[i] = Math.round(carts3[i] * 1.1);
}
console.log(carts3);
// (7) [50, 74, 123, 330, 286, 624, 868]


//  перевірити кожен елемент на кратність і кожен кратний 2 + в сумму
// variant 1
const numbers1 = [1, 3, 5, 4, 7, 8, 12, 14, 18, 22, 45, 44];
let total1 = 0;
for (let i = 0; i < numbers1.length; i += 1){
    console.log(numbers1[i]);
    
    if (numbers1[i] % 2 === 0) {
        console.log('Кратне 2!');
        
        total1 += numbers1[i];
    }
}
console.log('Total: ', total1);
//  1
//  3
//  5
//  4
//  Кратне 2!
//  7
//  8
//  Кратне 2!
//  12
//  Кратне 2!
//  14
//  Кратне 2!
//  18
//  Кратне 2!
//  22
//  Кратне 2!
//  45
//  44
//  Кратне 2!
// 3 Total:  122

// variant 2
const numbers2 = [1, 3, 5, 4, 7, 8, 12, 14, 18, 22, 45, 44];
let total2 = 0;
const number2 = numbers2[i];
for (let i = 0; i < numbers2.length; i += 1){
    console.log(numbers2[i]);
    
    if (number2 % 2 === 0) {
        console.log('Кратне 2!');
        
        total2 += number2;
    }
}
console.log('Total: ', total2);


// variant 3
const numbers3 = [1, 3, 5, 4, 7, 8, 12, 14, 18, 22, 45, 44];
let total3 = 0;
for (let number3 of numbers3){
    console.log(number3);
    
    if (number3 % 2 === 0) {
        console.log(`${number3} - kратне 2!`);
        
        total3 += number3;
    }
}
console.log('Total: ', total3);

// variant 4
// логіка від зворотнього
const numbers4 = [1, 3, 5, 4, 7, 8, 12, 14, 18, 22, 45, 44];
let total4 = 0;
for (let number4 of numbers4){
    if (number4 % 2 !== 0) {
        console.log("Цю ітерацію необхідно пропустити", number4);
        continue; 
    }
     console.log(`${number4} - кратне 2`);
     total4 += number4;
}
console.log('Total: ', total4);
// Цю ітерацію необхідно пропустити 1
// Цю ітерацію необхідно пропустити 3
// Цю ітерацію необхідно пропустити 5
// 4 - кратне 2
// Цю ітерацію необхідно пропустити 7
// 8 - кратне 2
// 12 - кратне 2
// 14 - кратне 2
// 18 - кратне 2
// 22 - кратне 2
// Цю ітерацію необхідно пропустити 45
// 44 - кратне 2
//  Total:  122



// 1
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.
function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }

  return "You are a minor";
} 

// 2
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
    return "Access denied, wrong password!";
  
}

// 3
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
    return "The order is accepted, our manager will contact you";
}

// 4
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

const fruits1 = ["apple", "plum", "pear", "orange"];

// 5
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок. 
const fruits2 = ["apple", "plum", "pear", "orange"];
const firstElement2 = fruits2[0];
const secondElement2 = fruits2[1];
const lastElement2 = fruits2[fruits2.length - 1];


// 6
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana". 
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach";
fruits[3] = "banana";

// 7
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length. 
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length;


// 8
// Оголоси дві зміні:
// lastElementIndex	- Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement -	Значення останнього елемента масиву
const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
fruits[lastElementIndex];
const lastElement = fruits[lastElementIndex];

// 9
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array. 
function getExtremeElements(array) {
    return [(array[0]), array[array.length - 1]];
}

// 10
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків. 
function splitMessage(message, delimiter) {
  let words;
words = message.split(delimiter);
  return words;
}

// 11
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
function calculateEngravingPrice(message, pricePerWord) {
let totalPrice = message.split(' ').length * pricePerWord;
return totalPrice;
}

// 12
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.
function makeStringFromArray(array, delimiter) {
  let string;
string = array.join(delimiter);
  return string;
}

// 13
// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
function slugify(title) {
let slug = title.toLowerCase().split(' ').join('-');
  return slug;
}

// 14
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

// 15
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients. 
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 

// 16
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
function makeArray(firstArray, secondArray, maxLength) {
let makeArray = firstArray.concat(secondArray).slice(0, maxLength);
return makeArray;
  }

//   17
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

const start1 = 3;
const end1 = 7;

for (let i = start1; i <= end1; i += 1) { 
  console.log(i);
}

// 18
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
function calculateTotal(number) {
  let total = 0;
  for (i = 0; i <= number; i+= 1) {
  total += i;
}
 return total;
}

// 19
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
}

// 20
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції. 
function calculateTotalPrice(order) {
  let total = 0;
for (let i = 0; order.length > i; i += 1){
  total += order[i];
}
  return total;
}

// 21
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
function findLongestWord(string) {

  const stringSplit = string.split(' ');
  let longestWord = '';
for (const word of stringSplit){
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
return longestWord;
  
}

// 22
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.
function createArrayOfNumbers(min, max) {
  const numbers = [];
for (i = min; i <= max; i += 1){
  numbers.push(i);
}
  return numbers;
}

// 23
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
function filterArray(numbers, value) {
  let biggestNumber = [];

  for (const number of numbers){
    if (number > value){
      biggestNumber.push(number);
    }
  }
   return biggestNumber; 
}

// 24
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); 
}

// 25
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

function getCommonElements(array1, array2) {
  let commonArray = [];
  for (let i = 0; i < array1.length; i++) {
  	if (array2.includes(array1[i])) {
    	commonArray.push(array1[i]);
    }
  }
  return commonArray;
}

// 26
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.
function calculateTotalPrice(order) {
  let total = 0;

  for (const number of order) {
    total += number;
  }
  return total;
}

// 27
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    
   if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// 28
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

// 29
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
function getEvenNumbers(start, end) {
  let evenNumber = [];
for (let i = start; i <= end; i += 1){
  if (i % 2 === 0){
    evenNumber.push(i);
  }
}
 return evenNumber;
  }

//   30
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 31
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
function findNumber(start, end, divisor) {
 
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return i;
}

// 32
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
function includes(array, value) {
for (let item of array) {
  if(item === value) {
    return true;
  }
} 
  return false;  
}

