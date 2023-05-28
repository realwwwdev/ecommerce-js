const productContainer = document.querySelector('#products-container');
const url = 'https://dummyjson.com/products?limit=10';

async function getProducts() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const products = data.products;

      renderProducts(products);

      function renderProducts(products) {
        products.forEach(function (item) {
          oldPrice = (((100 - item.discountPercentage) / 100) * item.price).toFixed();
          const productHTML = `<div class="item-wrapper">
              <div class="item" data-id="${item.id}">
                <div class="item__image-container">
                  <img
                    class="item__image"
                    src="${item.images[0]}"
                    alt="${item.title}"
                  />
                </div>
                <div class="rating">
                  <img class="rating-block__image" src="img/star.svg" alt="star" />
                  <img class="rating-block__image" src="img/star.svg" alt="star" />
                  <img class="rating-block__image" src="img/star.svg" alt="star" />
                  <img class="rating-block__image" src="img/star.svg" alt="star" />
                  <img class="rating-block__image" src="img/star.svg" alt="star" />
                  <span class="rating-point">${item.stock}</span>
                </div>
                <h4 class="item__title">${item.title}</h4>
                <div class="item__bottom">
                  <div class="item-old-price" id="old-price-container">${oldPrice}  ₽</div>
                  <div class="button--outline button--add">-${item.discountPercentage.toFixed()}%</div>
                </div>
                <h4 class="item-new-price">${item.price} ₽</h4>
                <span class="item-incart">В корзину</span>
              </div>
            </div>`;
          productContainer.insertAdjacentHTML('beforeend', productHTML);
        });
      }
    });
}
getProducts();
