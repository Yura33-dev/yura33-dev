// TASK 1
const person = {
  name: 'Olena',
  age: 20,
};

console.log(Object.values(person));

// TASK 2
person.name = {
  firstName: 'Olena',
  lastName: 'Natushko',
};

console.log(Object.values(person.name));

// TASK 3

person.bio = function () {
  return `Full Name: ${this.name.firstName} ${this.name.lastName}. Age: ${this.age}`;
};

console.log(person.bio());

// TASK 4

person.introduceSelf = function () {
  return `Hi! I\`m ${this.name.firstName}`;
};

console.log(person.introduceSelf());

// TASK 5

function createPerson(name) {
  const personObject = {};

  personObject.name = name;
  personObject.introduceSelf = function () {
    return `Hi! I\`m ${this.name}`;
  };

  return personObject;
}

const person1 = createPerson('Vladislav');
const person2 = createPerson('Oleg');

// TASK 6
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    return `Hi! I\`m ${this.name}`;
  };
}

const mary = new Person('Mary');
const tom = new Person('Tom');

console.dir(mary); // mary does not have prop "prop";

// TASK 7
const DirtyMartini = {
  english_please() {
    console.log(`
        ingredients:\n
        \t6 fluid ounces gin\n
        \t1 dash dry vermouth (0.0351951ml)\n
        \t1 fluid ounce brine from olive jar\n
        \t4 stuffed green olives
        `);
  },

  excuse_my_french() {
    console.log(`
        ingrédients:\n  
        \t170.4786 ml de gin\n
        \t1 trait de vermouth sec (0.0351951ml)\n 
        \t28.4131 ml de saumure du pot d'olive\n
        \t4 olives vertes farcies\n
    `);
  },
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
