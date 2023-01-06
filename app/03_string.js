const name = 'Valentyn';
const age = 23;
function getAge() {
  return age;
}

const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.';
const output_1 = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`;
const output_2 = `
  <div>This is div</div>
  <p>this is o</p>
`;

console.log(output);

const nameFirst = 'Valik';
console.log(nameFirst.length);
console.log(nameFirst.toUpperCase());
console.log(nameFirst.toLowerCase());
console.log(nameFirst.charAt(2));
console.log(nameFirst.indexOf('!'));
console.log(nameFirst.toLowerCase().startsWith('val'));
console.log(nameFirst.startsWith('Val'));
console.log(nameFirst.endsWith('ik!'));
console.log(nameFirst.repeat(3));
const string = '     password      ';
console.log(string.trim());
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился';
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Valik';
const personName2 = 'Andrew';
const personAge = 23;
const personAge2 = -10;

const output_3 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output_4 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(output_3);
console.log(output_4);

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

//reverse string and omit all non-alphabetic characters. For str = "krishan", the output should be "nahsirk". For str = "ultr53o?n", the output should be "nortlu".

const reverseLetter = str =>
  str
    .replaceAll(/[^a-zа-яё]/gi, '')
    .split('')
    //.filter(x => isNaN(x))
    .reverse()
    .join('');

console.log(reverseLetter('krishan')); // 'nahsirk'
console.log(reverseLetter('ultr53o?n')); // 'nortlu'
console.log(reverseLetter('ab23c')); // 'cba'
console.log(reverseLetter('krish21an')); // 'nahsirk'

// const str = '1. Как удалить пробелы из строки с помощью JavaScript?';
// str = str.replace(/\s/g, '');
// const str = '2. Как  удалить  двойные  пробелы  из  строки  с  помощью  JavaScript?';
// str = str.replace(/\s+/g, ' ');
// const str = '3. Как удалить все буквы из строки с помощью JavaScript?';
// str = str.replace(/[a-zа-яё]/gi, '');
// const str = '4. Как удалить всё, кроме букв с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё]/gi, '');
// const str = '5. Как удалить всё, кроме букв и пробелов с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё\s]/gi, '');
// const str = '6. Как удалить цифры из строки с помощью JavaScript?';
// str = str.replace(/[0-9]/g, '');
// const str = '7. Как удалить все, кроме цифр из строки с помощью JavaScript?';
// str = str.replace(/[^0-9]/g, '');
// const str = '8. Как удалить всё, кроме 0123456789, . и , из строки с помощью JavaScript?';
// str = str.replace(/[^0-9,.]/g, ' ');
// const str = '9. Как удалить всё, кроме цифр, букв и пробелов из строки с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
// const str = '10. Как удалить 😀😃😄😁😆😅😂🤣😇из строки с помощью JavaScript?';
// str = str.replace(
//   /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83[\uDD10-\uDDFF])/g,
//   ''
// );

// next variant
// Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
function reverseLetters(str) {
  return str.match(/[a-z]/gi).reverse().join('');
}
