'use strict';
import filter from './../components/filter.js';

window.addEventListener('DOMContentLoaded', () => {
  getProducts();
  filter();
});

const api = 'https://my-json-server.typicode.com/Yura33-dev/yura33-dev';
let products = [];

async function getProducts() {
  try {
    const response = await fetch(`${api}/products`);
    products = await response.json();

    if (products.status > 299) {
      throw new Error('Error with getting products');
    } else {
      renderTemplate(products);
      window.localStorage.setItem('products', JSON.stringify(products));
    }
  } catch (error) {
    console.log(error);
  }
}

export function renderTemplate(products) {
  const productsCatalog = document.querySelector('.products-catalog');
  // !!!!!!
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
    <a href="./products/${
      product.slug
    }.html" class="product-link" tabindex="-1">
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
