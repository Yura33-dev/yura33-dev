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

export async function getProductBySlag(slug) {
  const products = await getProducts();
  const product = products.filter(product => product.slug === slug);
  return product[0];
}

export async function createSubscriber(subscriber) {
  try {
    const response = await fetch(`${api}/subscribers`, {
      method: 'POST',
      body: JSON.stringify(subscriber),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
