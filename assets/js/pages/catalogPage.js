'use strict';
import { getProducts } from '../api/api.js';
import filter from './../components/filter.js';

window.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  filter(products);
});

export function renderTemplate(products) {
  const productsCatalog = document.querySelector('.products-catalog');
  productsCatalog.innerHTML = '';

  products.map(product => {
    const li = document.createElement('li');
    li.classList.add('product-card');
    li.setAttribute('tabindex', 0);

    const productOptions = getProductOptions(product.options);
    li.innerHTML = renderProductCard(product, productOptions);

    productsCatalog.appendChild(li);
  });
}

function getProductOptions(options) {
  let result = '';

  for (const option in options) {
    const transformedOption =
      option.slice(0, 1).toUpperCase() + option.slice(1);

    let item = '';

    if (options[option]) {
      item = `
            <div class="product-type">
            <span class="type-key">${transformedOption}:</span>
            <span class="type-value">${options[option]}</span>
            </div>`;
    } else {
      item = '';
    }

    result += item;
  }

  return result;
}

function renderProductCard(product, options) {
  return `
    <a href="./catalog/${product.slug}.html" class="product-link" tabindex="-1">
        <div class="product-image-wrapper">
        <img
            src="${product.image}"
            alt="${product.title}"
            class="product-image"
        />
        </div>
        <h3 class="product-title">${product.title}</h3>

        <div class="product-types">
            ${options}
        </div>

        <div class="product-price">
        <span class="price-currency">$</span>
        ${product.price.toFixed(2)}
        </div>
    </a>`;
}
