export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const CLEAR_BASKET = "basket/CLEAR_BASKET";

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: productId,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
