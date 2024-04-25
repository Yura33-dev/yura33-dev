'use strict';

import { getProduct } from './../api/api.js';

window.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname;
  const slug = path.replace(/\/catalog\//, '').replace(/.html/, '');

  const product = await getProduct(slug);
  document.title = `Monito | ${product.title}`;

  generateProductPage(product);
});

function generateProductPage(product) {
  console.log(product);
}
