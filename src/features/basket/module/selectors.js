export const selectBasketModuleState = (state) => state.basket;


export const selectProductCount = (state, payload) => {
  const basket = selectBasketModuleState(state);

  return basket[payload.productId] || 0;
};


export const selectOrderedProducts = (state) => {
  const basket = selectBasketModuleState(state);

  return Object.entries(basket).map(([id, count]) => ({ id, count }));
};
