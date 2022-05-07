export const selectBasketModuleState = (state) => state.basket;


export const selectProductCount = (state, payload) => {
  const basket = selectBasketModuleState(state);

  return basket[payload.productId] || 0;
};

<<<<<<< HEAD

export const selectOrderedProducts = (state) => {
  const basket = selectBasketModuleState(state);

  return Object.entries(basket).map(([id, count]) => ({ id, count }));
=======
export const selectOrderedProductIds = (state) => {
  const basket = selectBasket(state);

  return Object.keys(basket);
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
};
