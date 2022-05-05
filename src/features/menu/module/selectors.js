export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, payload) => {
  return selectProductModuleState(state).entities[payload];
};

export const selectProductIds = (state) => selectProductModuleState(state).ids;
