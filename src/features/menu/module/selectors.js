import { selectRestaurantProductIds } from "../../restaurant/module/selectors";

export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, productId) =>
  selectProductModuleState(state).entities[productId];

export const selectProductNameById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.name;

export const selectProductIds = (state) => selectProductModuleState(state).ids;

export const selectIsProductLoading = (state) =>
  selectProductModuleState(state).isLoading;

export const selectIsProductPresent = (state, productId) => {
  return !!selectProductById(state, productId);
};

export const selectIsAllProductsExist = (state, restaurantId) => {
  const productIds = selectRestaurantProductIds(state, restaurantId);

  return productIds.every((productId) => {
    return selectIsProductPresent(state, productId);
  });
};
