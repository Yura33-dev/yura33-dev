const alert = document.querySelector('.alert');

// TASK 1
const button = document.querySelector('.btn-primary');
button.addEventListener('click', () => {
  alert.classList.add('alert-primary');
  alert.textContent = 'A simple primary alert—check it out!';
});

// TASK 2
const button2 = document.querySelector('.btn-secondary');
button2.addEventListener('click', () => {
  alert.classList.add('alert-primary');
  alert.textContent = 'A simple secondary alert—check it out!';
});

// TASK 3
const button3 = document.querySelector('.btn-success');
button3.addEventListener('mouseover', () => {
  alert.classList.add('alert-success');
  alert.textContent = 'A simple success alert—check it out!';
});

button3.addEventListener('mouseout', () => {
  alert.classList.remove('alert-success');
  alert.textContent = '';
});

// TASK 4
const button4 = document.querySelector('.btn-danger');
button4.addEventListener('focus', () => {
  alert.classList.add('alert-danger');
  alert.textContent = 'A simple danger alert—check it out!';
});

button4.addEventListener('focusout', () => {
  alert.classList.remove('alert-danger');
  alert.textContent = '';
});

// TASK 5
const buttonDark = document.querySelector('.btn-dark');
const buttonLight = document.querySelector('.btn-light');

buttonDark.addEventListener('click', toggleMode);
buttonLight.addEventListener('click', toggleMode);

function toggleMode() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    buttonDark.style.display = 'none';
    buttonLight.style.display = 'inline-block';
  } else {
    buttonDark.style.display = 'inline-block';
    buttonLight.style.display = 'none';
  }
}

// TASK 6
const button6 = document.querySelector('.btn-info');
button6.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    alert.classList.add('alert-info');
    alert.textContent = 'A simple info alert-check it out!';
  }
});

// TASK 7
const cards = document.querySelectorAll('.card');
for (const card of cards) {
  const content = card.querySelector('.card-title').textContent;
  console.log(content);
}

// TASK 8
for (const card of cards) {
  const content = card.querySelector('.card-title').textContent;
  const buttonToCart = card.querySelector('.add-to-cart');
  buttonToCart.addEventListener('click', () => console.log(content));
}
