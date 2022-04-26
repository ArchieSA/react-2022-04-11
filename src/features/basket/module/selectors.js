export const selectBasket = (state) => state.basket;

export const selectProductCount = (state, productId) => {
  const basket = selectBasket(state);

  return basket[productId] || 0;
};

export const selectProducts = (state) => {
  const basket = selectBasket(state);

  if (!Object.keys(basket).length == 0) {
    return basket;
  }
};
