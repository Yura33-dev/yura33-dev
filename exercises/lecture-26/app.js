// TASK 1
function calculate(operation, initialValue, numbers) {
  let result = initialValue;

  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
  return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
  return n1 * n2;
}

// TASK 2
let student_names = ['Wick', 'Malcolm', 'Smith'];

const resultTask2 = student_names
  .map(
    (student, index, array) =>
      `name: ${student} | index: ${index} | array: [ ${array.join(', ')} ]`
  )
  .join(' ');

// TASK 3
let students_information = [
  { name: 'Wick', degree: 375 },
  { name: 'Malcolm', degree: 405 },
  { name: 'Smith', degree: 453 },
];

const resultTask3 = students_information.map(student => {
  return { ...student, percentage: ((student.degree / 600) * 100).toFixed(1) };
});

// TASK 4
const arrayWithNumbers = [
  1,
  2,
  3,
  [10, 11, 12],
  21,
  22,
  23,
  [31, 32, 33, 34],
  [41, 42],
];
const resultTask4 = arrayWithNumbers.reduce((acc, current) => {
  return acc.concat(current);
}, []);

// TASK 5

Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

function myFunc() {
  let arr = ['Algorithm', 'Data Structure', 'Operating System', 'html'];
  arr.upperCase();
  console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
