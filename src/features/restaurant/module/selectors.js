import { selectReviewByIds } from '../../review/module/selectors';


export const selectRestaurantModuleState = (state) => state.restaurant;

export const selectRestaurantById = (state, payload) =>
  selectRestaurantModuleState(state).entities[payload.restaurantId];

export const selectRestaurantIds = (state) =>
  selectRestaurantModuleState(state).ids;

export const selectRestaurantTabs = (state) => 
  Object.values(selectRestaurantModuleState(state).entities).map(
    ({ name, id }) => ({ label: name, id})
  )

export const selectRestaurantRating = (state, restaurantId) => {
  const
    restaurant = selectRestaurantById(state, { restaurantId }),
    reviews = selectReviewByIds(state, restaurant.reviews);

  return Math.ceil(
    reviews.reduce((prev, curr) => prev + curr.rating, 0) /
    restaurant.reviews.length
  );
};
