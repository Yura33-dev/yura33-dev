const classes = ['first', 'second', 'third', 'fourth'];

// TASK 1
const h1List = document.querySelectorAll('h1');

console.log(`Type of object: ${typeof h1List}. Length: ${h1List.length}. `);

for (const h1 of h1List) {
  console.log(h1);
}

// TASK 2
const paragraph = document.querySelector('#p1');
paragraph.style.cssText = 'background-color: gold';

// TASK 3
const paragraph2 = document.querySelector('#p2');
paragraph2.style.cssText =
  'background-color:gold; color: blue; font-size: 2rem';

// TASK 4
const paragraph3 = document.querySelector('#p3');
paragraph3.classList.add('third');

// TASK 5
const paragraph4 = document.querySelector('#p4');
paragraph4.classList.add('fourth', 'border');

// TASK 6
const containers = document.querySelectorAll('.container');

for (const container of containers) {
  console.log(container.firstElementChild);
}

// TASK 7
for (const container of containers) {
  console.log(container.firstElementChild.firstElementChild);
}

// TASK 8
const headers = document.querySelectorAll('.container header');

for (let i = 0; i <= headers.length - 1; i++) {
  if (i !== 0) {
    const classes = headers[i].firstElementChild.getAttribute('class');
    const id = headers[i].firstElementChild.getAttribute('id');
    const content = headers[i].firstElementChild.textContent;

    headers[i].innerHTML = `<h${
      i + 1
    } class='${classes}' id='${id}'>${content}</h${i + 1}`;
  }
  //   part 2
  headers[i].firstElementChild.classList.add(getDynamicClass(headers[i]));
}

function getDynamicClass(element) {
  switch (element.firstElementChild.tagName) {
    case 'H1':
      return 'first';
    case 'H2':
      return 'second';
    case 'H3':
      return 'third';
    case 'H4':
      return 'fourth';
    default:
      return null;
  }
}
