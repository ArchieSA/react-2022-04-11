export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const CLEAR_BASKET = "basket/CLEAR_BASKET";

export const addProduct = (productName) => ({
  type: ADD_PRODUCT,
  payload: productName,
});

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});