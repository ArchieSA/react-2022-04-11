export const selectProductsModuleState = (state) => state.product;

export const selectProductById = (state, payload) => 
  selectProductsModuleState(state).entities[payload];
