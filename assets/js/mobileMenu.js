'use strict';

export default function mobileMenu() {
  const mobileMenuOpenBtn = document.querySelector('.burger-btn');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  mobileMenuOpenBtn.addEventListener('click', () => {
    mobileOverlay.classList.toggle('is-open');
  });

  mobileMenuCloseBtn.addEventListener('click', () => {
    mobileOverlay.classList.toggle('is-open');
  });
}
