export const selectProductModuleState = (state) => state.product;
 

export const selectProductById = (state, payload) =>
  selectProductModuleState(state).entities[payload.productId];

  
export const selectProductNameById = (state, payload) =>
  selectProductById(state, payload)?.name;

export const selectProductIds = (state) => selectProductModuleState(state).ids;
