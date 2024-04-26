'use strict';

export default function footer() {
  const footer = document.querySelector('.footer');
  footer.innerHTML = generateFooter();
}

function generateFooter() {
  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  const inProductPage = window.location.pathname.includes('/catalog/') || null;

  return `
  <form class="subscribe-form">
    <h2 class="subscribe-title">Subscribe now!</h2>
    <div class="subscribe-wrapper">
        <input
        class="subscribe-input"
        type="email"
        name="email"
        placeholder="Enter your Email"
        required
        />
        <button type="submit" class="subscribe-submit">Subscribe now</button>
    </div>
    </form>

    <div class="footer-wrapper">
        <nav class="footer-nav">
            <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="${dynamicPath}${
    inProductPage ? '../' : ''
  }index.html"> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${dynamicPath}${
    inProductPage ? '../' : ''
  }catalog.html"> Products </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${dynamicPath}${
    inProductPage ? '../' : ''
  }contact.html"> Contact </a>
            </li>
            </ul>
        </nav>

        <ul class="footer-social">
            <li class="social-item">
            <a class="social-link" href="#!"
                ><svg class="icon" width="20" height="20">
                <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#facebook-icon"></use></svg
            ></a>
            </li>
            <li class="social-item">
            <a class="social-link" href="#!"
                ><svg class="icon" width="20" height="20">
                <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#twitter-icon"></use></svg
            ></a>
            </li>
            <li class="social-item">
            <a class="social-link" href="#!">
                <svg class="icon" width="20" height="20">
                <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#instagram-icon"></use></svg
            ></a>
            </li>
            <li class="social-item">
            <a class="social-link" href="#!"
                ><svg class="icon" width="20" height="20">
                <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#youtube-icon"></use></svg
            ></a>
            </li>
        </ul>
    </div>

    <hr class="hr" />   

    <div class="footer-logo-wrapper">
        <a href="${dynamicPath}${
    inProductPage ? '../' : ''
  }index.html" class="footer-logotype">
            <svg width="115" height="40" class="icon">
            <use href="${dynamicPath}${
    inProductPage ? '../' : ''
  }assets/images/icons.svg#logo-icon"></use>
            </svg>
        </a>

        <ul class="footer-rights">
            <li><a href="!#">Terms of Service</a></li>
            <li><a href="!#">Privacy Policy</a></li>
        </ul>

        <p class="footer-monito">&copy; 2024 Monito. Final project QALight</p>
    </div>
  `;
}
