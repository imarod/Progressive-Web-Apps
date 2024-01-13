import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
  <div class="restaurant__info">
    <h3>Informasi:</h3>
    <h4>Kota: <span class ="rincian"> ${restaurant.city}</span></h4>

    <h4>Rating: <span class ="rating"> ${restaurant.rating}</span></h4>
    
    <h4>Alamat: <span class ="rincian"> ${restaurant.address}</span></h4>
   
    <h4>Kategori:<span class ="rincian"> ${restaurant.categories.map((category) => category.name).join(', ')}</h4>
    
  </div>

  <div class="restaurant__overview">
    <h3>Menu Makanan: </h3>
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    <h3>Menu Minuman: </h3>
    <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
    <h3>Deskripsi: </h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createReviewTemplate = (reviews) => `
<div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
           
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
