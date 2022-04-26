import { restaurants } from "../../../constants/fixtures";

export const selectBasket = (state) => state.basket;

export const selectProductCount = (state, productId) => {
  const basket = selectBasket(state);

  return basket[productId] || 0;
};

export const selectProductInfo = (state, restaurant) => {
  // было интересно сделать именно с ID, по этому вернул, не знаю на сколько нормальное решение
  const products = restaurants.flatMap((rest) => rest.menu);
  const basket = selectBasket(state);

  const productsInfo = Object.keys(basket)
    // тут возможно правильнее чистить\удалять значение из store если === 0, тогда не понадобится дополнительный фильтр
    .filter((prodID) => basket[prodID] > 0)
    .map((prodID) => products.find(({ id }) => id === prodID))
    .map((product) => {
      return {
        product,
        qty: basket[product.id],
      };
    });

  return productsInfo;
};

export const selectBasketInfo = (state, restaurant) => {
  const basket = selectBasket(state);

  return basket;
};
