import { selectReviewByIds } from "../../review/module/selectors";
import { createSelector } from "reselect";

export const selectRestaurantModuleState = (state) => state.restaurant;

export const selectRestaurantById = (state, payload) =>
  selectRestaurantModuleState(state).entities[payload.restaurantId];

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantModuleState(state).entities);

export const selectRestaurantTabs = (state) =>
  Object.values(selectRestaurantModuleState(state).entities).map(
    ({ name, id }) => ({ label: name, id })
  );

export const selectRestaurantRating = (state, restaurantId) => {
  const restaurant = selectRestaurantById(state, { restaurantId });
  const reviews = selectReviewByIds(state, restaurant.reviews);

  return Math.ceil(
    reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length
  );
};

export const selectRestaurantIds = createSelector(
  [selectRestaurantModuleState],
  (restaurantModuleState) => restaurantModuleState.ids
);

export const selectIsRestaurantsLoading = (state) =>
  selectRestaurantModuleState(state).isLoading;
