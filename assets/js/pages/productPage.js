'use strict';

import { addToCart } from '../components/cart.js';
import { getProductBySlag } from './../api/api.js';

window.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname;
  const slug = path.replace(/\/catalog\//, '').replace(/.html/, '');

  const product = await getProductBySlag(slug);
  document.title = `Monito | ${product.title}`;

  generateProductPage(product);

  enableProductButtons(product);
});

function generateProductPage(product) {
  const productImageWrapper = document.querySelector('.product-image');
  const productTitle = document.querySelector('.product-title');
  const productBuyWrapper = document.querySelector('.product-buy');
  const productInfoWrapper = document.querySelector('.product-information');
  const productDescrWrapper = document.querySelector('.product-description');

  const { id, image: imageSrc, title, price, details, description } = product;

  const image = generateProductImage(imageSrc, title);
  productImageWrapper.appendChild(image);

  productTitle.textContent = title;

  const { buttonToBuy, productPrice } = generateProductPriceToBuy(id, price);
  productBuyWrapper.appendChild(buttonToBuy);
  productBuyWrapper.appendChild(productPrice);

  const productInfo = generateProductInfo(details);
  productInfoWrapper.appendChild(productInfo);

  const productDescription = generateProductDescription(description);
  productDescrWrapper.appendChild(productDescription);
}

function generateProductImage(imagePath, altText) {
  const modifiedImagePath = imagePath.replace(/.\//, './../');

  const image = document.createElement('img');
  image.setAttribute('src', modifiedImagePath);
  image.setAttribute('alt', altText);

  return image;
}

function generateProductPriceToBuy(id, price) {
  const buttonToBuy = document.createElement('button');
  buttonToBuy.setAttribute('type', 'button');
  buttonToBuy.classList.add('product-in-cart-btn');
  buttonToBuy.dataset.id = id;
  buttonToBuy.dataset.quantity = 1;
  buttonToBuy.textContent = 'Add to cart';

  const productPrice = document.createElement('div');
  productPrice.classList.add('product-cost');
  productPrice.innerHTML = `<span class="price-currency">$</span>${price.toFixed(
    2
  )}`;

  return { buttonToBuy, productPrice };
}

function generateProductInfo(details) {
  const infoDetails = document.createElement('div');
  infoDetails.classList.add('info-details');

  for (const key in details) {
    const infoDetail = document.createElement('div');
    infoDetail.classList.add('info-detail');

    infoDetail.innerHTML = `
      <p class="detail-key">${details[key][0]}</p>
      <p class="detail-value">${details[key][1]}</p>
    `;

    infoDetails.appendChild(infoDetail);
  }

  return infoDetails;
}

function generateProductDescription(description) {
  const descriptionText = document.createElement('p');
  descriptionText.classList.add('description-text');
  descriptionText.textContent = description;

  return descriptionText;
}

function enableProductButtons(product) {
  const inCartBtn = document.querySelector('.product-in-cart-btn');
  const counterBtns = document.querySelectorAll('.product-counter button');
  const counterInput = document.querySelector('.product-counter-input input');

  inCartBtn.addEventListener('click', e => {
    const quantity = +e.target.dataset.quantity;

    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  });

  counterBtns.forEach(counterBtn => {
    counterBtn.addEventListener('click', () => {
      if (
        counterBtn.classList.contains('product-plus') &&
        +counterInput.value >= 1
      ) {
        counterInput.value = +counterInput.value + 1;
        counterInput.dispatchEvent(new Event('change'));
      } else if (
        counterBtn.classList.contains('product-minus') &&
        +counterInput.value > 1
      ) {
        counterInput.value = +counterInput.value - 1;
        counterInput.dispatchEvent(new Event('change'));
      } else {
        counterInput.value = 1;
        counterInput.dispatchEvent(new Event('change'));
      }
    });
  });

  counterInput.addEventListener('change', e => {
    inCartBtn.dataset.quantity = +e.target.value;
  });
}
