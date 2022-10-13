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
