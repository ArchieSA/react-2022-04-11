import { arrFromBasket } from '../utils';


export const selectBasket = (state) => state.basket;


export const selectBasketArr = (state) => {
  const basket = selectBasket(state);

  return arrFromBasket(basket);
};


export const selectProductCount = (state, productId) => {
  const basket = selectBasket(state);

  return basket[productId] || 0;
};

export const selectOrderedProducts = (state) => {
  const basket = selectBasket(state);

  return Object.entries(basket).map(([name, count]) => ({ name, count }));
};
