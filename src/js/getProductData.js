import { fetchOneProduct } from '../js/servicesApi';

const product = document.querySelector('cardItem');

if (product !== null) {
  product.addEventListener('click', function (e) {
    fetchOneProduct(8884363690265);
  });
}
