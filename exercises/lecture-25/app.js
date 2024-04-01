// TASK 1
const list = ['html', 'css', 'javascript', 'react.js'];

const ul = document.createElement('ul');

list.map(li => {
  const listItem = document.createElement('li');
  listItem.textContent = li;
  ul.appendChild(listItem);
});

document.body.appendChild(ul);

// TASK 2
const listWithHref = [
  { html: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { css: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { 'react.js': 'https://react.dev' },
];

const ol = document.createElement('ol');

listWithHref.forEach(listItem => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = Object.keys(listItem);
  a.setAttribute('href', Object.values(listItem));

  li.appendChild(a);
  ol.appendChild(li);
});

document.body.appendChild(ol);

// TASK 3
const students = [
  { firstName: 'Tom', lastName: 'Cat', degree: 230 },
  { firstName: 'Nary', lastName: 'Ann', degree: 336 },
  { firstName: 'John', lastName: 'Doe', degree: 400 },
  { firstName: 'James', lastName: 'Bond', degree: 700 },
];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.innerHTML = `
<thead>
    <tr>
        <th>firstName</th>
        <th>lastName</th>
        <th>degree</th>
    </tr>
</thead>`;

table.appendChild(tbody);

students.map(student => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.degree}</th>`;

  tbody.appendChild(tr);
});

document.body.appendChild(table);
