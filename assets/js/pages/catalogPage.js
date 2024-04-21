'use strict';

import filter from './../components/filter.js';

window.addEventListener('DOMContentLoaded', () => {
  filter();
  getProducts();
});

const api = 'https://my-json-server.typicode.com/Yura33-dev/yura33-de';

async function getProducts() {
  try {
    const response = await fetch(`${api}/products`);
    const products = await response.json();

    if (products.status > 299) {
      throw new Error('Error with getting products');
    } else {
      console.log(products);
    }
  } catch (error) {
    console.log(error);
  }
}

function buildTemplate(products) {
  const productsCatalog = document.querySelector('.products-catalog');

  products.map(product => {
    const li = document.createElement('li');
    li.classList.add('product-card');
    li.setAttribute(tabindex, 0);

    const productCard = ``;
  });

  //   <li class="product-card" tabindex="0">
  //   <a href="#!" class="product-link" tabindex="-1">
  //     <div class="product-image-wrapper">
  //       <img
  //         src="./assets/images/products/product-1@1.jpg"
  //         alt="puppy 1"
  //         class="product-image"
  //       />
  //     </div>
  //     <h3 class="product-title">Reflex Plus Adult Cat Food Salmon</h3>
  //     <div class="product-types">
  //       <div class="product-type">
  //         <span class="type-key">Product:</span
  //         ><span class="type-value">Dog Food</span>
  //       </div>
  //       <div class="product-type">
  //         <span class="type-key">Size:</span
  //         ><span class="type-value">385g</span>
  //       </div>
  //     </div>
  //     <div class="product-price">
  //       <span class="price-currency">$</span>
  //       10.00
  //     </div>
  //   </a>
  // </li>
}
