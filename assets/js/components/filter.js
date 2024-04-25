'use strict';

import { renderTemplate } from '../pages/catalogPage.js';

const filterObj = {
  minPrice: 0,
  maxPrice: 0,
  defaultMinPrice: 0,
  defaultMaxPrice: 0,
  categories: [],
  filteredProducts: [],
};

export default function filter(products) {
  const filterOpenBtn = document.querySelector('button.filter-btn');
  const filterContent = document.querySelector('.filter-content');
  const filterResetBtn = document.querySelector('.filter-reset');

  initFilter(filterContent, filterOpenBtn, filterResetBtn, products);
}

function initFilter(filterContent, filterOpenBtn, filterResetBtn, products) {
  const minPrice = products.reduce((firstObj, secondObj) => {
    return secondObj.price < firstObj.price ? secondObj : firstObj;
  }, products[0]);

  const maxPrice = products.reduce((firstObj, secondObj) => {
    return secondObj.price > firstObj.price ? secondObj : firstObj;
  }, products[0]);

  filterObj.defaultMinPrice = minPrice.price;
  filterObj.defaultMaxPrice = maxPrice.price;
  filterObj.minPrice = filterObj.defaultMinPrice;
  filterObj.maxPrice = filterObj.defaultMaxPrice;

  const getUniqueCategories = new Set();
  products.forEach(product => getUniqueCategories.add(product.category));

  const productCategories = [];
  getUniqueCategories.forEach(category => productCategories.push(category));

  const filterCategories = generateFilterCategories(productCategories);
  filterContent.firstElementChild.appendChild(filterCategories);

  const filterPrice = generateFilterPrice(filterObj);
  filterContent.firstElementChild.appendChild(filterPrice);

  enableFilterButtons(filterOpenBtn, filterContent, filterResetBtn, products);
  enableFilterInputs(products);

  getStorageFilter();

  filteredPrice(products);
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

function generateFilterPrice({ defaultMinPrice, defaultMaxPrice }) {
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
                value="${defaultMinPrice}"
                placeholder="min price"
                class="price-input-filter"
            />
        </li>
        <li class="filter-value">
            <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                value="${defaultMaxPrice}"
                placeholder="max price"
                class="price-input-filter"
            />
        </li>
    </ul>`;

  return filterPrice;
}

function enableFilterButtons(
  filterOpenBtn,
  filterContent,
  filterResetBtn,
  products
) {
  const categoriesInputs = document.querySelectorAll(
    '.filter-categories input'
  );

  const priceInputs = document.querySelectorAll('.filter-price input');

  filterOpenBtn.addEventListener('click', () =>
    filterToggle(filterContent, filterResetBtn)
  );

  filterResetBtn.addEventListener('click', () =>
    resetFilter(products, categoriesInputs, priceInputs)
  );
}

function enableFilterInputs(products) {
  const categoriesInputs = document.querySelectorAll(
    '.filter-categories input'
  );

  const priceInputs = document.querySelectorAll('.filter-price input');

  categoriesInputs.forEach(input =>
    input.addEventListener('change', e => filteredCategory(e, products))
  );

  priceInputs.forEach(input =>
    input.addEventListener('change', e => {
      e.target.name === 'minPrice'
        ? (filterObj.minPrice = +e.target.value)
        : (filterObj.maxPrice = +e.target.value);

      setStorageFilter(null, null, {
        minPrice: filterObj.minPrice,
        maxPrice: filterObj.maxPrice,
      });

      filterObj.filteredProducts.length > 0
        ? filteredPrice(filterObj.filteredProducts)
        : filteredPrice(products);
    })
  );
}

function filterToggle(filterContent) {
  if (filterContent.classList.contains('filter-content-open')) {
    filterClose(filterContent);
  } else {
    filterOpen(filterContent);
  }
}

function filterClose(filterContent) {
  filterContent.style = '';
  filterContent.classList.remove('filter-content-open');
  setStorageFilter(false, filterObj.categories, null);
}

function filterOpen(filterContent) {
  const filterResetBtn = document.querySelector('.filter-reset');

  filterContent.classList.add('filter-content-open');
  const options = filterContent.querySelectorAll('.filter-option');
  let totalHeight = 0;
  options.forEach(option => (totalHeight += option.offsetHeight));
  totalHeight += filterResetBtn.offsetHeight;

  filterContent.style.maxHeight = totalHeight + 20 + 25 + 'px';
  setStorageFilter(true, filterObj.categories, null);
}

function filteredCategory(e, products) {
  const category = e.target.getAttribute('name');

  if (e.target.checked) {
    filterObj.categories.push(category);
    filterObj.filteredProducts = [];

    products.forEach(product => {
      for (let i = 0; i < filterObj.categories.length; i++) {
        product.category.toLowerCase() === filterObj.categories[i]
          ? filterObj.filteredProducts.push(product)
          : null;
      }
    });
    filteredPrice(filterObj.filteredProducts);
  } else {
    const index = filterObj.categories.findIndex(
      element => element === category
    );
    filterObj.categories.splice(index, 1);

    if (!filterObj.categories.length) {
      filterObj.filteredProducts = [];
      return filteredPrice(products);
    }

    const filteredCategoryProducts = filterObj.filteredProducts.filter(
      product => product.category.toLowerCase() !== category
    );
    filterObj.filteredProducts = filteredCategoryProducts;
    filteredPrice(filterObj.filteredProducts);
  }
}

function filteredPrice(filteredProducts) {
  const priceFilteredProducts = filteredProducts.filter(
    product =>
      product.price >= filterObj.minPrice && product.price <= filterObj.maxPrice
  );

  if (!priceFilteredProducts.length) {
    const catalog = document.querySelector('.products-catalog');
    catalog.innerHTML = '<h2>No products matched to filter queries</h2>';
    return;
  }

  renderTemplate(priceFilteredProducts);
  setStorageFilter(null, filterObj.categories, null);
}

function resetFilter(products, categoriesInputs, priceInputs) {
  filterObj.filteredProducts = [];
  filterObj.categories = [];
  filterObj.minPrice = filterObj.defaultMinPrice;
  filterObj.maxPrice = filterObj.defaultMaxPrice;

  categoriesInputs.forEach(input => (input.checked = false));

  priceInputs.forEach(input => {
    input.name === 'minPrice'
      ? (input.value = filterObj.defaultMinPrice)
      : (input.value = filterObj.defaultMaxPrice);
  });
  renderTemplate(products);

  const storageFilter = JSON.parse(window.localStorage.getItem('filter'));
  if (storageFilter) {
    storageFilter.categories = filterObj.categories;
    storageFilter.minPrice = filterObj.defaultMinPrice;
    storageFilter.maxPrice = filterObj.defaultMaxPrice;
    window.localStorage.setItem('filter', JSON.stringify(storageFilter));
  }
}

function getStorageFilter() {
  const storageFilter = JSON.parse(window.localStorage.getItem('filter'));

  if (!storageFilter) {
    window.localStorage.setItem(
      'filter',
      JSON.stringify({
        state: false,
        categories: [],
        minPrice: filterObj.minPrice,
        maxPrice: filterObj.maxPrice,
      })
    );
    return null;
  }

  if (storageFilter.categories.length > 0) {
    for (let category of storageFilter.categories) {
      const input = document.getElementById(`filter-${category}`);
      setTimeout(() => input.click(), 200);
    }
  }

  if (storageFilter.state) {
    const filterOpenBtn = document.querySelector('button.filter-btn');
    setTimeout(() => filterOpenBtn.click(), 200);
  }

  if (storageFilter.minPrice) {
    const inputMinPrice = document.getElementById('minPrice');
    inputMinPrice.value = storageFilter.minPrice;
    filterObj.minPrice = storageFilter.minPrice;
  }

  if (storageFilter.maxPrice) {
    const inputMaxPrice = document.getElementById('maxPrice');
    inputMaxPrice.value = storageFilter.maxPrice;
    filterObj.maxPrice = storageFilter.maxPrice;
  }
}

function setStorageFilter(state, categories, prices) {
  const storageFilter = JSON.parse(window.localStorage.getItem('filter'));

  if (storageFilter) {
    if (state !== null) {
      storageFilter.state = state;
    }

    if (categories !== null) {
      storageFilter.categories = categories;
    }

    if (prices !== null) {
      storageFilter.minPrice = prices.minPrice;
      storageFilter.maxPrice = prices.maxPrice;
    }
    window.localStorage.setItem('filter', JSON.stringify(storageFilter));
  }
}
