const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArray = [];

const dataFromStorage = localStorage.getItem('items');
dataFromStorage
  ? (itemsArray = JSON.parse(dataFromStorage))
  : localStorage.setItem('items', JSON.stringify(itemsArray));

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

itemsArray.forEach(item => addTask(item));

function add() {
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

function del() {
  localStorage.setItem('items', JSON.stringify([]));
  itemsArray = [];
  ul.innerHTML = '';
}
