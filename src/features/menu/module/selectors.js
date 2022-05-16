import { selectRestaurantById } from "../../restaurant/module/selectors";

export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, productId) =>
  selectProductModuleState(state).entities[productId];

export const selectProductNameById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.name;

export const selectProductIds = (state) => selectProductModuleState(state).ids;

export const selectPeoductIdsByRestaurantId = (state, restaurantId) => 
  selectRestaurantById(state, {restaurantId}).menu;

export const selectIsProductLoading = (state) => selectProductModuleState(state).isLoading;