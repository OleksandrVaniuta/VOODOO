import insertCardMarkup from './cardMarkup';
import { refs } from './refs';
import { fetchProducts } from './servicesApi';

window.addEventListener('load', onLoad);

async function onLoad(e) {
  try {
    const res = fetchProducts(9);

    const pruductData = await res;

    insertCardMarkup(pruductData.products, refs.productList);
  } catch (error) {
    console.log(error);
  }
}
