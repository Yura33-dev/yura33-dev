'use strict';

export default function subscribeForm() {
  const form = document.querySelector('form.subscribe-form');

  form.addEventListener('submit', submitHandler);
}

function submitHandler(e) {
  e.preventDefault();

  console.log('form submited!');
}
