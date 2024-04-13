const template = item => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

function asyncFunc() {
  const form = document.querySelector('#demoForm');
  const { firstName, lastName } = form.elements;

  const h1 = document.querySelector('#waiting');

  if (firstName.value.trim() !== '' || lastName.value.trim() !== '') {
    h1.textContent = `Hello ${firstName.value} ${lastName.value}`;
  } else if (firstName.value.trim() === '' && lastName.value.trim() === '') {
    h1.textContent = "I'm miss You";
  }
}

setTimeout(asyncFunc, 10000);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send(xhr);

xhr.onload = function () {
  const response = JSON.parse(xhr.response);
  const demoBlog = document.querySelector('#demo');
  let content = '';

  response.map(post => (content += template(post)));
  demoBlog.innerHTML = content;
};
