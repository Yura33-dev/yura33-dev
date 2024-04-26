'use strict';

export default function mobileMenu() {
  const mobileOverlay = document.querySelector('.mobile-overlay');

  const mobileMenu = mobileOverlay.firstElementChild;
  mobileMenu.innerHTML = generateMobileMenu();

  mobileMenu.addEventListener('click', e => clickHandler(e, mobileOverlay));
}

function generateMobileMenu() {
  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  const inProductPage = window.location.pathname.includes('/catalog/') || null;

  return `
    <button type="button" class="mobile-menu-close">
      <svg class="icon close-icon" width="15" height="15">
        <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#close-icon"></use>
      </svg>
    </button>

    <nav class="mobile-nav">
      <ul class="menu-list">
        <li class="menu-item">
          <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }index.html" class="menu-link">Home</a>
        </li>
        <li class="menu-item">
          <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }catalog.html" class="menu-link">Products</a>
        </li>
        <li class="menu-item">
          <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }contact.html" class="menu-link">Contact</a>
        </li>
      </ul>
    </nav>

    <button type="button" class="cart-btn cart-mobile-btn">
      Cart
      <svg class="icon" width="30" height="30">
        <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#cart-icon"></use>
      </svg>
      <span class="cart-counter">0</span>
    </button>

    <div class="mobile-image">
      <img src="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/dog-cart.gif" alt="Dog" />
    </div>
  `;
}

function clickHandler(e, mobileOverlay) {
  if (e.target.closest('.mobile-menu-close')) {
    mobileOverlay.classList.toggle('is-open');
  }
}
