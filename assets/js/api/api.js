const api = 'https://my-json-server.typicode.com/Yura33-dev/yura33-dev';

export async function getProducts() {
  try {
    const response = await fetch(`${api}/products`);
    const products = await response.json();

    if (products.status > 299) {
      throw new Error('Error with getting products');
    } else {
      return products;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(slug) {
  const products = await getProducts();
  const product = products.filter(product => product.slug === slug);
  return product[0];
}
