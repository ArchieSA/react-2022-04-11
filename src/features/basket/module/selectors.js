export const selectBasket = (state) => state.basket;

export const selectProductCount = (state, productId) => {
  const basket = selectBasket(state);
  return basket[productId] || 0;
};

export const selectProductName= (state, productName) => {
  const basket = selectBasket(state);

  return basket[productName] || 0;
};