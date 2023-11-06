export function fetchProducts(page) {
  return fetch(
    `https://voodoo-sandbox.myshopify.com/products.json?limit=${page}`
  ).then(response => {
    return response.json();
  });
}
