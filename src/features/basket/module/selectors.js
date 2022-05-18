export const selectBasket = (state) => state.basket;

export const selectProductCount = (state, productId) => {
  const basket = selectBasket(state);

  return basket[productId] || 0;
};

export const selectOrderedProductIds = (state) => {
  const basket = selectBasket(state);

  return Object.keys(basket);
};
