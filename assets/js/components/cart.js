'use strict';

export default function cart() {
  function cartDisplayToggle() {
    const cartBtn = document.querySelector('button.cart-btn');
    const cartMobileBtn = document.querySelector('button.cart-mobile-btn');
    const cartBtnClose = document.querySelector('button.cart-close');

    const cartOverlay = document.querySelector('.cart-overlay');
    const mobileMenuOverlay = document.querySelector('.mobile-overlay');

    cartBtn.addEventListener('click', () => {
      cartOverlay.classList.add('cart-active');
    });

    cartMobileBtn.addEventListener('click', () => {
      cartOverlay.classList.add('cart-active');
      mobileMenuOverlay.classList.toggle('is-open');
    });

    cartBtnClose.addEventListener('click', () => {
      cartOverlay.classList.remove('cart-active');
    });
  }

  cartDisplayToggle();
}
