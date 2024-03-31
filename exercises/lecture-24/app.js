const colors = ['blue', 'green', 'white'];

// TASK 1
const iter = item => console.log(item);
colors.forEach(item => iter(item));

// TASK 2.1
const iterate = (item, index) => console.log(`${item} has index ${index}`);
colors.forEach((item, index) => iterate(item, index));

// TASK 2.2
const iterate = (item, index) => {
  const lastElementIndex = colors.length - 1;

  if (index === lastElementIndex) {
    console.log('The last iteration!');
  }

  console.log(`${item} has index ${index}`);
};

const letters = ['a', 'b', 'c'];

// // TASK 3
const iterate = letter => {
  if (this === window) {
    console.log(true);
  }
};

// TASK 4
const Numbers = [22, 3, 4, 10];
function checkNumbers(numbersArray) {
  const checkArray = [];

  numbersArray.forEach(item =>
    item % 2 !== 0 ? checkArray.push(false) : checkArray.push(true)
  );

  const checkForOdd = checkArray.some(item => item === false);

  const result = checkForOdd
    ? 'Some of the numbers are odd'
    : 'All numbers are even';

  return console.log(result);
}

// TASK 5
function checkEveryNumbers(numbersArray) {
  const result = numbersArray.every(item => item % 2 === 0);

  if (result) {
    return console.log('All numbers are even');
  } else {
    return console.log('Some of the numbers are odd');
  }
}

// TASK 6
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
const findIndex = fruits.findIndex(fruit => fruit === 'blueberries');

// TASK 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const findItem = arr.find(number => number > 10);

// TASK 8
const array = [1, 2, 3, 4, 5];
const resultSome = array.some(item => item % 2 === 0);

// TASK 9
const numbers = [1, 30, 4, 21, 100000];
const sortedNumbers = numbers.sort((a, b) => a - b);
