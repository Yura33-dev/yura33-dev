'use strict';

import cart from './components/cart.js';
import footer from './components/footer.js';
import header from './components/header.js';
import mobileMenu from './components/mobileMenu.js';
import modalWindow from './components/modalWindow.js';
import subscribeForm from './components/subscribeForm.js';

window.addEventListener('DOMContentLoaded', () => {
  mobileMenu();
  header();
  cart();
  footer();
  modalWindow();
  subscribeForm();
});
