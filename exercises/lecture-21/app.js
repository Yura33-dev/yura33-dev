const myFruits = 'apple banana cantaloupe blueberries grapefruit';

// TASK 1
const fruits = myFruits.split(' ');

// TASK 2
for (let i = 0; i < fruits.length - 1; i++) {
  console.log(fruits[i]);
}

// TASK 3
let counter = 0;
while (counter <= fruits.length - 1) {
  console.log(fruits[counter]);
  counter++;
}

// TASK 4
do {
  console.log(fruits[counter]);
  counter++;
} while (counter <= fruits.length - 1);

// TASK 5
for (const fruit of fruits) {
  console.log(fruit);
}

// TASK 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= Numbs.length - 1; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// TASK 7
const names = ['Batman'];
names.push('Joker');

// TASK 8
const names = ['Batman'];
names.unshift('Joker');

// TASK 9
const names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');

// TASK 10
const names = ['Batman', 'Joker', 'Bane'];
const newNames = ['Catwoman', ...names];

// TASK 11
const names = ['Batman', 'Joker', 'Bane'];
const newNames = [...names.slice(0, 1), 'Catwoman', ...names.slice(1)];

// TASK 12
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexCatwoman = names.indexOf('Catwoman');
names.splice(indexCatwoman, 1);
const indexJoker = names.indexOf('Joker');
names.splice(indexJoker, 1);

// TASK 13
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexCatwoman = names.indexOf('Catwoman');
const indexJoker = names.indexOf('Joker');
names[indexCatwoman] = 'Alfred';
names[indexJoker] = 'Alfred';

// TASK 14
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const isAlfredExist = names.includes('Alfred');
if (!isAlfredExist) {
  names.push('Alfred');
}

// TASK 15
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const isAlfredExist = names.includes('Alfred');
if (isAlfredExist) {
  const indexAlfred = names.indexOf('Alfred');
  names.splice(indexAlfred, 1);
}
