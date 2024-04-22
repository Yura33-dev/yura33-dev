'use strict';

import { renderTemplate } from '../pages/catalogPage.js';

const filterObj = {
  minPrice: '',
  maxPrice: '',
  categories: [],
};

let globalFilteredProducts = [];

export default function filter() {
  const filterMobileBtn = document.querySelector('button.filter-btn');
  const filterContent = document.querySelector('.filter-content');

  const products = JSON.parse(window.localStorage.getItem('products'));
  initFilter(filterContent, products);

  filterMobileBtn.addEventListener('click', () => filterToggle(filterContent));

  const categoriesInputs = document.querySelectorAll(
    '.filter-categories input'
  );

  categoriesInputs.forEach(input =>
    input.addEventListener('change', e => filteredCategory(e, products))
  );

  const priceInputs = document.querySelectorAll('.price-input-filter');
  priceInputs.forEach(input =>
    input.addEventListener('change', e => {
      e.target.name === 'minPrice'
        ? (filterObj.minPrice = +e.target.value)
        : (filterObj.maxPrice = +e.target.value);
      filteredPrice(globalFilteredProducts);
    })
  );
}

function initFilter(filterContent, products) {
  const minPrice = products.reduce((firstObj, secondObj) => {
    return secondObj.price < firstObj.price ? secondObj : firstObj;
  }, products[0]);

  const maxPrice = products.reduce((firstObj, secondObj) => {
    return secondObj.price > firstObj.price ? secondObj : firstObj;
  }, products[0]);

  filterObj.minPrice = minPrice.price;
  filterObj.maxPrice = maxPrice.price;

  const filteredUniqueCategories = new Set();
  products.forEach(product => filteredUniqueCategories.add(product.category));

  const productCategories = [];
  filteredUniqueCategories.forEach(category =>
    productCategories.push(category)
  );

  const filterCategories = generateFilterCategories(productCategories);
  filterContent.appendChild(filterCategories);

  const filterPrice = generateFilterPrice({
    minPrice: minPrice.price,
    maxPrice: maxPrice.price,
  });
  filterContent.appendChild(filterPrice);

  globalFilteredProducts = products;

  console.log(globalFilteredProducts);
}

function generateFilterPrice({ minPrice, maxPrice }) {
  const filterPrice = document.createElement('div');
  filterPrice.classList.add('filter-price', 'filter-option');

  filterPrice.innerHTML = `
    <div class="filter-name">Price</div>
    <ul class="filter-values">
        <li class="filter-value">
            <input
                id="minPrice"
                name="minPrice"
                type="number"
                value="${minPrice}"
                placeholder="min price"
                class="price-input-filter"
            />
        </li>
        <li class="filter-value">
            <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                value="${maxPrice}"
                placeholder="max price"
                class="price-input-filter"
            />
        </li>
    </ul>`;

  return filterPrice;
}

function generateFilterCategories(productCategories) {
  const filterCategories = document.createElement('div');
  filterCategories.classList.add('filter-categories', 'filter-option');

  filterCategories.innerHTML = `
    <div class="filter-name">Category</div>
  `;

  const categoriesList = document.createElement('ul');
  categoriesList.classList.add('filter-values');

  productCategories.forEach(category => {
    const categoryItem = generateFilterCategory(category);
    categoriesList.appendChild(categoryItem);
  });

  filterCategories.appendChild(categoriesList);

  return filterCategories;
}

function generateFilterCategory(category) {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('filter-value');

  categoryItem.innerHTML = `
      <input
        id="filter-${category.toLowerCase()}"
        name="${category.toLowerCase()}"
        type="checkbox"
        class="visually-hidden"
        value="true"
      />
      <label for="filter-${category.toLowerCase()}">
        <span class="custom-checkbox">
          <svg width="10" height="8" class="icon">
            <use href="./assets/images/icons.svg#done-icon"></use>
          </svg>
        </span>
        <div class="text-wrapper">${category}</div>
      </label>
    `;

  return categoryItem;
}

function filterToggle(filterContent) {
  if (filterContent.classList.contains('filter-content-open')) {
    filterContent.style = '';
    filterContent.classList.remove('filter-content-open');
  } else {
    filterContent.classList.add('filter-content-open');
    const options = filterContent.querySelectorAll('.filter-option');
    let totalHeight = 0;
    options.forEach(option => (totalHeight += option.offsetHeight));

    filterContent.style.maxHeight = totalHeight + 'px';
  }
}

function filteredCategory(e, products) {
  const category = e.target.getAttribute('name');

  if (e.target.checked) {
    filterObj.categories.push(category);

    // const filteredProducts = [];
    globalFilteredProducts = [];

    for (let i = 0; i < filterObj.categories.length; i++) {
      products.forEach(product => {
        product.category.toLowerCase() === filterObj.categories[i]
          ? globalFilteredProducts.push(product)
          : null;
      });
    }

    // IF CHECK FOR EMPTY ARRAY
    // renderTemplate(globalFilteredProducts);
    filteredPrice(globalFilteredProducts);
  } else {
    const index = filterObj.categories.findIndex(
      element => element === category
    );
    filterObj.categories.splice(index, 1);

    if (!filterObj.categories.length) {
      globalFilteredProducts = products;
      return filteredPrice(globalFilteredProducts);
    }

    // const filteredProducts = [];
    globalFilteredProducts = [];

    for (let i = 0; i < filterObj.categories.length; i++) {
      products.forEach(product => {
        product.category.toLowerCase() === filterObj.categories[i]
          ? globalFilteredProducts.push(product)
          : null;
      });
    }

    // renderTemplate(globalFilteredProducts);
    filteredPrice(globalFilteredProducts);
  }
}

function filteredPrice(filteredProducts) {
  const newProducts = filteredProducts.filter(
    product =>
      product.price >= filterObj.minPrice && product.price <= filterObj.maxPrice
  );

  if (newProducts.length) {
    renderTemplate(newProducts);
  } else {
    const catalog = document.querySelector('.products-catalog');
    catalog.innerHTML = '<h2>No products matched to filter queries</h2>';
  }
}
