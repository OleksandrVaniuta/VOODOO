import { refs } from './refs';
import { fetchProducts } from './servicesApi';
import insertCardSliderMarkup from './sliderContent';

const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');
const swiper = document.getElementById('swiper');
console.log(swiper);

refs.productList.addEventListener('click', openProductModal);

function openProductModal() {
  productModal.classList.remove('hiddenFilter');
  document.body.style.overflow = 'hidden';
  productModal.style.overflowY = 'auto';
  loadSlider();
}

closeProduct.addEventListener('click', closeProductModal);

function closeProductModal() {
  productModal.classList.add('hiddenFilter');
  document.body.style.overflow = 'auto';
  productModal.style.overflowY = 'hidden';
}

window.addEventListener('keydown', e => {
  if (productModal.classList.contains('hiddenFilter')) return;

  if (e.code === 'Escape') {
    closeProductModal();
  }
});

productModal.addEventListener('click', e => {
  if (e.currentTarget == e.target) {
    closeProductModal();
  }
});

async function loadSlider() {
  try {
    const res = fetchProducts(9);

    const pruductData = await res;

    insertCardSliderMarkup(pruductData.products, swiper);
  } catch (error) {
    console.log(error);
  }
}
