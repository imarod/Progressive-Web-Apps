import TheRestoDbSource from '../../data/therestodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import '../../component/reviews-page';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestoDbSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    restaurantContainer.innerHTML += `
      <resto-review></resto-review>
      <div id="likeButtonContainer"></div>
    `;
    const restoReview = document.querySelector('#resto-review');
    restaurant.customerReviews.forEach((review) => {
      restoReview.innerHTML += createReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
