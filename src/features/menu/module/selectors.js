export const selectProductById = (state, payload) => {
  return state.product.entities[payload.id];
};
