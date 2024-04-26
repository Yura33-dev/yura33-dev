'use strict';

export default function cart() {
  cartToggleInit();

  const cart = document.querySelector('.cart');

  const getStorageCart = JSON.parse(window.localStorage.getItem('cart'));

  if (getStorageCart && getStorageCart.products.length > 0) {
    updateCartMarkup(getStorageCart);
  } else {
    generateEmptyCartMarkup();
  }

  cart.addEventListener('click', clickHandler);
  cart.addEventListener('change', changeHandler);
}

function cartToggleInit() {
  const cartBtnsOpen = document.querySelectorAll('.cart-btn');

  const cartOverlay = document.querySelector('.cart-overlay');
  const mobileMenuOverlay = document.querySelector('.mobile-overlay');

  cartBtnsOpen.forEach(cartBtn => {
    cartBtn.addEventListener('click', () =>
      cartOpen(cartOverlay, mobileMenuOverlay)
    );
  });
}

export function addToCart(product) {
  const getStorageCart = JSON.parse(window.localStorage.getItem('cart'));

  const isExist = getStorageCart.products.findIndex(
    productInCart => productInCart.id === product.id
  );

  if (isExist > -1) {
    getStorageCart.products[isExist].quantity += product.quantity;
  } else {
    getStorageCart.products.push(product);
  }

  const { productsQuantity, totalAmount } = getCartTotals(getStorageCart);

  getStorageCart.productsQuantity = productsQuantity;
  getStorageCart.totalAmount = totalAmount;

  window.localStorage.setItem('cart', JSON.stringify(getStorageCart));

  updateCartMarkup(getStorageCart);
  showMessage(product.title);
}

function cartOpen(cartOverlay, mobileMenuOverlay) {
  mobileMenuOverlay.classList.contains('is-open')
    ? mobileMenuOverlay.classList.remove('is-open')
    : null;
  cartOverlay.classList.add('cart-active');
}

function cartClose(cartOverlay) {
  cartOverlay.classList.remove('cart-active');
}

function updateCartMarkup(cartObj) {
  const cart = document.querySelector('.cart');
  const cartHeader = cart.querySelector('.cart-header');
  const cartContent = cart.querySelector('.cart-content');
  const cartFooter = cart.querySelector('.cart-footer');

  updateCartCounter(cartObj.productsQuantity);

  const header = generateCartHeader();
  cartHeader.innerHTML = header;

  const cartProducts = generateCartBody(cartObj.products);
  cartContent.innerHTML = cartProducts;

  if (!cartFooter) {
    const newCartFooter = document.createElement('div');
    newCartFooter.classList.add('cart-footer');
    cart.appendChild(newCartFooter);

    const footer = generateCartFooter(cartObj.totalAmount);
    newCartFooter.innerHTML = footer;
  } else {
    const footer = generateCartFooter(cartObj.totalAmount);
    cartFooter.innerHTML = footer;
  }
}

function updateCartCounter(quantity) {
  const cartBtnsOpen = document.querySelectorAll('button.cart-btn');

  cartBtnsOpen.forEach(btn => {
    btn.querySelector('.cart-counter').textContent = quantity;

    if (btn.classList.contains('desktop')) {
      btn.classList.add('cartJumping');

      setTimeout(() => btn.classList.remove('cartJumping'), 650);
    }
  });
}

function generateCartHeader() {
  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  const cartHeader = `
    <p class="cart-title">Cart</p>
    <button type="button" class="cart-close">
      <svg class="icon close-icon" width="15" height="15">
        <use href="${dynamicPath}assets/images/icons.svg#close-icon"></use>
        </svg>
      </button>
  `;
  return cartHeader;
}

function generateCartBody(products) {
  let productItems = '';

  products.forEach(product => {
    productItems += generateCartProduct(product);
  });

  return productItems;
}

function generateCartProduct(product) {
  const { id, slug, image, price, quantity, title } = product;
  const modifiedImagePath = image.replace(/.\//, '');

  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  const generatedProduct = `
  <div class="product" tabindex="0">
      <div class="product-info">
        <div class="product-cart-link">
          <a href="${dynamicPath}catalog/${slug}.html" class="product-image-link">
            <img src="${
              dynamicPath + modifiedImagePath
            }" alt="${title}" class="product-cart-image">
          </a>

          <a href="${dynamicPath}catalog/${slug}.html" class="product-title-link">
            <p class="product-cart-title">
              ${title}
            </p>
          </a>
        </div>

        <button type="button" class="product-delete" data-id="${id}">
          <svg width="20" height="20" class="icon">
            <use href="${dynamicPath}assets/images/icons.svg#trash-icon"></use>
          </svg>
        </button>
      </div>

      <div class="product-data">
        <div class="product-counter" data-id="${id}">
          <button type="button" class="product-minus" ${
            quantity === 1 ? 'disabled' : null
          }>
            <svg width="15" height="15">
              <use href="${dynamicPath}assets/images/icons.svg#minus-icon"></use>
            </svg>
          </button>

          <div class="product-counter-input">
            <input type="number" name="amount" value="${quantity}">
          </div>

          <button type="button" class="product-plus">
            <svg width="15" height="15">
              <use href="${dynamicPath}assets/images/icons.svg#plus-icon"></use>
            </svg>
          </button>
        </div>

        <p class="product-price">
          <span class="price-currency">$</span>${price.toFixed(2)}
        </p>
      </div>
    </div>
  `;

  return generatedProduct;
}

function generateCartFooter(totalAmount) {
  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  let cartFooter = `
      <p class="cart-total">
        <span class="cart-price-total">Cart:</span>
        <span class="price-currency">$</span>
        ${totalAmount.toFixed(2)}
      </p>`;

  if (totalAmount > 0.1) {
    cartFooter += `
      <a href="${dynamicPath}checkout.html" class="cart-checkout btn-link btn-link-bg-transparent mobile">
        Let's Checkout
        <svg class="icon" width="24px" height="24px">
          <use href="${dynamicPath}assets/images/icons.svg#chevron-right-icon"></use>
        </svg>
      </a>
    
      <a href="${dynamicPath}checkout.html" class="cart-checkout btn-link btn-link-bg-transparent desktop">
        Let's Checkout
        <svg class="icon" width="24px" height="24px">
          <use href="${dynamicPath}assets/images/icons.svg#chevron-right-icon"></use>
        </svg>
      </a>
    `;
  }

  return cartFooter;
}

function generateEmptyCartMarkup() {
  window.localStorage.setItem(
    'cart',
    JSON.stringify({ products: [], productsQuantity: 0, totalAmount: 0 })
  );

  updateCartCounter(0);

  const cart = document.querySelector('.cart');
  const cartHeader = cart.querySelector('.cart-header');
  const cartContent = cart.querySelector('.cart-content');
  const cartFooter = cart.querySelector('.cart-footer');

  if (cartFooter) {
    cartFooter.remove();
  }

  const header = generateCartHeader();
  cartHeader.innerHTML = header;

  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  cartContent.innerHTML = `
    <p class="empty-cart">Your cart is empty</p>
    <div>
    <img src="${dynamicPath}assets/images/sad-dog-in-cart.gif" alt="animated crying dog"/>
    </div>
    
  `;
}

function clickHandler(e) {
  if (e.target.closest('.product-delete')) {
    deleteFromCart(e.target.closest('.product-delete'));
  } else if (e.target.closest('.product-plus')) {
    increaseProductInCart(e.target.closest('.product-plus'));
  } else if (e.target.closest('.product-minus')) {
    decreaseProductInCart(e.target.closest('.product-minus'));
  } else if (e.target.closest('.cart-close')) {
    cartClose(e.target.closest('.cart-overlay'));
  }
}

function changeHandler(e) {
  const id = e.target.closest('.product-counter').dataset.id;
  const newAmount = +e.target.value;

  changeProductAmountInCart(id, newAmount);
}

function getCartTotals(getStorageCart) {
  const productsQuantity = getStorageCart.products.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  const totalAmount = getStorageCart.products.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  return { productsQuantity, totalAmount };
}

function showMessage(productTitle) {
  const productAlert = document.querySelector('.product-alert');
  productAlert.firstElementChild.textContent = productTitle;
  const height = productAlert.firstElementChild.clientHeight;

  productAlert.style.height = height + 30 + 'px';

  setTimeout(() => {
    productAlert.style.height = 0 + 'px';
  }, 5000);
}

function deleteFromCart(target) {
  const id = target.closest('.product-delete').dataset.id;

  const getStorageCart = JSON.parse(window.localStorage.getItem('cart'));

  const index = getStorageCart.products.findIndex(product => product.id === id);

  getStorageCart.productsQuantity -= getStorageCart.products[index].quantity;
  getStorageCart.totalAmount -=
    getStorageCart.products[index].price *
    getStorageCart.products[index].quantity;

  getStorageCart.products.splice(index, 1);

  window.localStorage.setItem('cart', JSON.stringify(getStorageCart));

  getStorageCart.products.length > 0
    ? updateCartMarkup(getStorageCart)
    : generateEmptyCartMarkup();
}

function increaseProductInCart(target) {
  const id = target.closest('.product-counter').dataset.id;
  const input = target.previousElementSibling.firstElementChild;

  const btnMinus =
    target.closest('.product-plus').previousElementSibling
      .previousElementSibling;

  input.value = +input.value + 1;

  if (+input.value >= 2) {
    btnMinus.disabled = false;
  }

  changeProductAmountInCart(id, +input.value);
}

function decreaseProductInCart(target) {
  const id = target.closest('.product-counter').dataset.id;
  const input = target.nextElementSibling.firstElementChild;

  const btnMinus = target.closest('.product-minus');

  input.value = +input.value - 1;

  if (+input.value <= 1) {
    input.value = 1;
    btnMinus.disabled = true;
  }

  changeProductAmountInCart(id, +input.value);
}

function changeProductAmountInCart(productId, newAmount) {
  const getStorageCart = JSON.parse(window.localStorage.getItem('cart'));

  const patchedProductIndex = getStorageCart.products.findIndex(
    product => product.id === productId
  );
  getStorageCart.products[patchedProductIndex].quantity = newAmount;

  const { productsQuantity, totalAmount } = getCartTotals(getStorageCart);

  getStorageCart.productsQuantity = productsQuantity;
  getStorageCart.totalAmount = totalAmount;

  window.localStorage.setItem('cart', JSON.stringify(getStorageCart));

  updateCartMarkup(getStorageCart);
}
