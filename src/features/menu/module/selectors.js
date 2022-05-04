export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, payload) =>
  selectProductModuleState(state).entities[payload.productId];

export const selectProductIds = (state) => 
  selectProductModuleState(state).ids;

export const selectProductName = (state, payload) =>
  selectProductById(state, payload).name;  