export const selectProductById = (state, { productID }) =>
  state.product.entities[productID];
