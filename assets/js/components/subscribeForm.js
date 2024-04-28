'use strict';

import { createSubscriber } from '../api/api.js';
import { generateModalInfo, generateModalLoading } from './modalWindow.js';

export default function subscribeForm() {
  const form = document.querySelector('form.subscribe-form');

  form.addEventListener('submit', submitHandler);
}

function submitHandler(e) {
  e.preventDefault();

  const userEmail = e.target.elements['email'].value;
  if (!userEmailIsValid(userEmail)) return;

  generateModalLoading(
    "Wait a minute, please...<br />We're putting you data in database!"
  );

  const subscriber = { email: userEmail };
  delayRequest(2000, subscriber);

  e.target.elements['email'].value = '';
}

function userEmailIsValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function delayRequest(delay, subscriber) {
  setTimeout(() => {
    createSubscriber(subscriber)
      .then(response => {
        if (response) {
          generateModalInfo(
            'Done!',
            "You have subscribed successfully for news.<br/> Thank's!"
          );
        }
      })
      .catch(error => console.log(error));
  }, delay);
}
