import imagePlaceholder from '../images/imagePlaceholder.png';
import star from '../images/star.png';

const insertCardSliderMarkup = (products, container) => {
  const productsMarkup = products
    .map(({ id, title, variants, images }) => {
      const price = variants[0].price.slice(0, -3);

      return `
       
    <li id=${id} class='cardItem swiper-slide sliderContainer' >
    <div class="img__wrapper slideWrapper">
    <div >
    <img  src="${
      images.src ? `${images.src}` : imagePlaceholder
    }" alt="${title}"  />
    </div>
    <div class="productItemTextContent">
    <h4 class='productItemTitle'>${title}</h4>
    <div class="productItemRate">
        <img class="productItemRateStar" src="${star}" alt="star"  />
        <img class="productItemRateStar" src="${star}" alt="star"  />
        <img class="productItemRateStar" src="${star}" alt="star"  />
        <img class="productItemRateStar" src="${star}" alt="star"  />
        <span class="productItemRateNum">4.0/<span class="text-blackOpacity">5</span></span>
    </div>
    <p  class='productItemPrice'>$${price}</p>
    </div>
    
   </div>
    </li>
    
    `;
    })
    .join('');

  container.innerHTML = productsMarkup;
};

export default insertCardSliderMarkup;
