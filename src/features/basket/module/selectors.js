export const selectBasketModuleState = (state) => state.basket;


export const selectProductCount = (state, productId) => {
  const basket = selectBasketModuleState(state);

  return basket[productId] || 0;
};


export const selectOrderedProducts = (state) => {
  const basket = selectBasketModuleState(state);

  return Object.entries(basket).map(([id, count]) => ({ id, count }));
}

export const selectOrderedProductIds = (state) => {
  const basket = selectBasketModuleState(state);

  return Object.keys(basket);
};
