'use strict';

export default function header() {
  const header = document.querySelector('.header');
  header.innerHTML = generateHeader();

  header.addEventListener('click', clickHandler);
}

function generateHeader() {
  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  const inProductPage = window.location.pathname.includes('/catalog/') || null;

  return `
    <div class="container">
      <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }index.html" class="header-logotype">
        <svg width="115" height="40" class="icon">
          <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#logo-icon"></use>
        </svg>
      </a>

      <nav class="header-nav">
        <ul class="header-menu-list">
            <li class="header-menu-item">
            <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }index.html" class="header-menu-link">Home</a>
            </li>
            <li class="header-menu-item">
            <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }catalog.html" class="header-menu-link">Products</a>
            </li>
            <li class="header-menu-item">
            <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }contact.html" class="header-menu-link">Contact</a>
            </li>
        </ul>

        <button class="cart-btn desktop">
            <svg class="icon" width="23" height="23">
            <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#cart-icon"></use>
            </svg>
            <span class="cart-counter">0</span>
        </button>
      </nav>

      <button class="burger-btn">
        <svg width="30" height="25" class="icon">
            <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#burger-icon"></use>
        </svg>
      </button>
  </div>
  `;
}

function clickHandler(e) {
  if (e.target.closest('.burger-btn')) {
    const mobileOverlay = document.querySelector('.mobile-overlay');
    mobileOverlay.classList.toggle('is-open');
  }
}
