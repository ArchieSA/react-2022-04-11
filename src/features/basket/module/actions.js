export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const CLEAR_BASKET = "basket/CLEAR_BASKET";

export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  payload: id,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
