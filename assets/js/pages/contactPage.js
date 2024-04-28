'use strict';

import {
  generateModalInfo,
  generateModalLoading,
} from '../components/modalWindow.js';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', submitHandler);
});

function submitHandler(e) {
  e.preventDefault();

  const { firstName, lastName, email, question } = e.target.elements;

  const errors = validateFormData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    question: question.value,
  });

  resetDisplayedErrors();
  if (Object.keys(errors).length !== 0) return displayErrors(errors);

  generateModalLoading('Wait a minute... <br /> We are getting your question');

  setTimeout(
    () =>
      generateModalInfo(
        'Super!',
        'We got your question!<br/><br/>Our managers will contact you as soon as possible'
      ),
    2000
  );

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  question.value = '';
}

function validateFormData({ firstName, lastName, email, question }) {
  const errors = {};

  if (firstName.trim().length === 0)
    errors.firstName = 'Please, input your first name in correct way';

  if (lastName.trim().length === 0)
    errors.lastName = 'Please, input your last name in correct way';

  if (email.trim().length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Please, input email in correct way';

  if (question.trim().length === 0)
    errors.question = 'Please, input your question in correct way';

  return errors;
}

function resetDisplayedErrors() {
  const fields = document.querySelectorAll('.error-message');
  fields.forEach(field => (field.textContent = ''));
}

function displayErrors(errors) {
  for (const key in errors) {
    const field =
      document.querySelector(`input[name=${key}`) ||
      document.querySelector(`textarea[name=${key}`);
    field.nextElementSibling.textContent = errors[key];
  }
}
