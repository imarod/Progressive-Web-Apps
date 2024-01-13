import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowHome = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Explore Restaurants</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
`;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.nowRestoHome();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default NowHome;
