'use strict';

import { getProducts } from '../api/api.js';
import { renderTemplate } from './catalogPage.js';

window.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  renderTemplate(products, 8);
});
