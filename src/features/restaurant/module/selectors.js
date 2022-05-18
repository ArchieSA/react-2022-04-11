import { selectReviewByIds } from "../../review/module/selectors";
import { createSelector } from "reselect";
import { ROUTES } from "../../../constants/routes";

export const selectRestaurantModuleState = (state) => state.restaurant;

export const selectRestaurantById = (state, payload) =>
  selectRestaurantModuleState(state).entities[payload.restaurantId];

export const selectRestaurantReviewsById = (state, payload) =>
  selectRestaurantModuleState(state)?.entities[payload.restaurantId]?.reviews ||
  [];

export const selectRestaurantProductsById = (state, payload) =>
  selectRestaurantModuleState(state)?.entities[payload.restaurantId]?.menu ||
  [];

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantModuleState(state).entities);

export const selectRestaurantTabs = (state) =>
  Object.values(selectRestaurantModuleState(state).entities).map(
    ({ name, id }) => ({
      label: name,
      id,
      href: `/${ROUTES.Restaurants}/${id}`,
    })
  );

export const selectRestaurantRating = (state, restaurantId) => {
  const restaurant = selectRestaurantById(state, { restaurantId });

  if (!restaurant) {
    return 0;
  }
  const reviews = selectReviewByIds(state, restaurant.reviews);

  if (!reviews?.length) {
    return 0;
  }

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
