'use strict';

import {
  generateModalInfo,
  generateModalLoading,
} from '../components/modalWindow.js';

window.addEventListener('DOMContentLoaded', () => {
  cartOnPageInit();
});

function cartOnPageInit() {
  document.querySelectorAll('.cart-btn').forEach(btn => btn.remove());

  const cart = document.querySelector('.cart');
  document.querySelector('.checkout-wrapper').appendChild(cart);
  document.querySelector('.cart-title').textContent = 'Your cart';
  document.querySelectorAll('.cart-checkout').forEach(link => link.remove());

  const form = document.querySelector('.checkout-form');
  form.addEventListener('submit', submitHandler);

  const isEmptyCart = document.querySelector('.empty-cart');
  if (isEmptyCart)
    document.querySelector('.confirm-btn').setAttribute('disabled', 'true');
}

function submitHandler(e) {
  e.preventDefault();

  const {
    firstName,
    lastName,
    email,
    phone,
    paymentMethod,
    deliveryMethod,
    to,
    policy,
  } = e.target.elements;

  const errors = validateFormData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    to: to.value,
    policy: policy.checked,
  });

  resetDisplayedErrors();

  if (Object.keys(errors).length !== 0) return displayErrors(errors);

  const getCartStorage = JSON.parse(window.localStorage.getItem('cart'));

  const orderObject = createOrderObject(getCartStorage, {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    paymentMethod: paymentMethod.value,
    deliveryMethod: deliveryMethod.value,
    to: to.value,
  });

  generateModalLoading(
    'Wait a minute... <br /> We are processing your order...'
  );

  setTimeout(
    () =>
      generateModalInfo(
        'Done!',
        'We got your order!<br/><br/>Close this window to see details'
      ),
    2000
  );

  resetCustomerCart(getCartStorage);

  const checkoutWrapper = document.querySelector('.checkout-wrapper');
  checkoutWrapper.innerHTML = '';
  checkoutWrapper.style.justifyContent = 'center';
  checkoutWrapper.style.alignItems = 'center';

  checkoutWrapper.innerHTML = generateOrderInfoPage(orderObject);

  window.scrollTo({ top: 0 });
}

function validateFormData({ firstName, lastName, email, phone, to, policy }) {
  const errors = {};

  if (firstName.trim().length === 0)
    errors.firstName = 'Please, input your first name in correct way';

  if (lastName.trim().length === 0)
    errors.lastName = 'Please, input your last name in correct way';

  if (email.trim().length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Please, input email in correct way';

  if (phone.trim().length === 0 || !/^[\d+()\s]+$/.test(phone))
    errors.phone = 'Please, input phone in correct way';

  if (to.trim().length === 0)
    errors.to = 'Please, input Post office number in correct way';

  if (!policy) errors.policy = 'You need to agree with our policy and terms';

  return errors;
}

function resetDisplayedErrors() {
  const fields = document.querySelectorAll('.error-message');
  fields.forEach(field => (field.textContent = ''));
}

function displayErrors(errors) {
  for (const key in errors) {
    const field = document.querySelector(`input[name=${key}`);
    if (key === 'policy') {
      field.nextElementSibling.nextElementSibling.textContent = errors[key];
    } else {
      field.nextElementSibling.textContent = errors[key];
    }
  }
}

function createOrderObject(getCartStorage, objInfo) {
  const orderObject = {
    customer: {},
    order: {},
    cart: {},
  };

  orderObject.id = generateOrderId(5);
  orderObject.invoice = `INV-${generateOrderNumber(8)}`;

  orderObject.customer.firstName = objInfo.firstName;
  orderObject.customer.lastName = objInfo.lastName;
  orderObject.customer.email = objInfo.email;
  orderObject.customer.phone = objInfo.phone;

  orderObject.order.paymentMethod = objInfo.paymentMethod;
  orderObject.order.deliveryMethod = objInfo.deliveryMethod;
  orderObject.order.placeForDelivery = objInfo.to;

  orderObject.cart.products = getCartStorage.products;
  orderObject.cart.productsQuantity = getCartStorage.productsQuantity;
  orderObject.cart.totalAmount = getCartStorage.totalAmount;

  console.log('*object sends to server and database*', orderObject);

  return orderObject;
}

function generateOrderId(length) {
  const characters = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return +result;
}

function generateOrderNumber(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function resetCustomerCart(getCartStorage) {
  getCartStorage.products = [];
  getCartStorage.productsQuantity = 0;
  getCartStorage.totalAmount = 0;

  window.localStorage.setItem('cart', JSON.stringify(getCartStorage));
}

function generateOrderInfoPage(orderObject) {
  let dynamicPath = '';
  let paymentMethod = '';
  let deliveryMethod = '';

  switch (orderObject.order.paymentMethod) {
    case 'post':
      paymentMethod = 'At post office';
      break;
    case 'bank':
      paymentMethod = 'Bank transfer';
      break;
    case 'invoice':
      paymentMethod = 'Get invoice';
      break;
    default:
      'bank';
  }

  switch (orderObject.order.deliveryMethod) {
    case 'novapost':
      deliveryMethod = 'Nova Posta';
      break;
    case 'ukrpost':
      deliveryMethod = 'Ukr Posta';
      break;
    default:
      'novapost';
  }

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  return `
  <div class="order">
  <div class="order-title">Order number: ${orderObject.invoice}</div>
  <div class="order-info">
    <div class="order-customer">
      <div class="customer-name">
        <div class="key">Name:</div>
        <div class="value">${
          orderObject.customer.lastName + ' ' + orderObject.customer.firstName
        }</div>
      </div>
      <div class="customer-phone">
        <div class="key">Phone:</div>
        <div class="value">${orderObject.customer.phone}</div>
      </div>
      <div class="customer-email">
        <div class="key">Email:</div>
        <div class="value">${orderObject.customer.email}</div>
      </div>
    </div>
    <div class="order-pay">
      <div class="pay-method">
        <div class="key">Payment Method:</div>
        <div class="value">${paymentMethod}</div>
      </div>
      <div class="delivery-method">
        <div class="key">Delivery Method:</div>
        <div class="value">${deliveryMethod}</div>
      </div>
      <div class="delivery-place">
        <div class="key">Post office number:</div>
        <div class="value">#${orderObject.order.placeForDelivery}</div>
      </div>
    </div>
  </div>
  <a href="${dynamicPath}index.html" class="order-details">
    Back to main page
  </a>
</div>
`;
}
