'use strict';

// TASK 1

let str1 = "I'm a string!";
let str2 = "I'm a string!";
// str1 and str2 have a similar length

str1 == str2; // true
str1 === str2; // true

// TASK 2
let string5 = 'Hello World';
const firstSymbolIndex = string5[0];
const firstSymbolcharAt = string5.charAt(0);

// TASK 3
// повернути символ J рядка:
let str3 = 'Hello Javascript';
const indexOfJ = str3.indexOf('J');
const symbolJ = str3.charAt(indexOfJ);

// TASK 4
const lastSymbol = str3[str3.length - 1];
const lastSymbolCharAt = str3.charAt(str3.length - 1);

// TASK 5
function lastCharVar1(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string[string.length - 1]}`;
}

function lastCharVar2(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string.charAt(string.length - 1)}`;
}

function lastCharVar3(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string.slice(-1)}`;
}

// TASK 6

let a = 'When candles are out,';
let b = 'all cats are grey.';
const concat = a.concat(' ').concat(b);

// TASK 7
let fact = 'Fifteen is the same as';
let a = 5;
let b = 10;
const result = `${fact} ${a + b}`;
console.log(result);

// TASK 8
let firstName = 'Tom';
let lastName = 'Cat';

function getFullName(firstName, lastName) {
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    firstName.trim().length === 0 ||
    lastName.trim().length === 0
  ) {
    return `Please enter a valid data for result`;
  }

  return firstName + ' ' + lastName;
}

// TASK 9

function greeting(firstName, lastName) {
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    firstName.trim().length === 0 ||
    lastName.trim().length === 0
  ) {
    return `Please enter a valid data for result`;
  }
  return 'Hello, ' + getFullName(firstName, lastName);
}

// TASK 10
function greeting(firstName, lastName) {
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    firstName.trim().length === 0 ||
    lastName.trim().length === 0
  ) {
    return `Please enter a valid data for result`;
  }
  return '<div><h1>Hello, ' + getFullName(firstName, lastName) + '</h1></div>';
}

// TASK 11
let string1 = '  The name of our game  ';

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
const task1 = string1.trim();
const task2 = string1.trimStart();
const task3 = string1.trimEnd();

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
const correctNumber = phoneNumber.trim();
const correctNumber2 = phoneNumber.trimStart().replace(/\\n\s*/g, ' \n');

// TASK 12
let sentence = 'Always look on the bright side of life';
const check1 = sentence.search('look up');
const check2 = sentence.search('look on');
const check3 = sentence.includes('look on', 8); // false

// TASK 13
let sentence = 'Always look on the bright side of life';
const check4 = sentence.indexOf('l');
const check5 = sentence.indexOf('l', 3);
const check6 = sentence.indexOf('L');

// TASK 14
let sentence = 'Always look on the bright side of life';
const searchString = sentence.search('look on the bright side of life');
const searchString2 = sentence.search('Always');
const searchString3 = sentence.search('look');

// TASK 15
const validName = /^[a-z0-9_-]{8,16}$/i;

// TASK 16
const validEmail = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

// TASK 17
let sentence2 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(string) {
  return string.substring(0, 51) + '...';
}

function truncateText2(string) {
  return string.substr(0, 50) + '...';
}
