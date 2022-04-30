export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const CLEAR_BASKET = "basket/CLEAR_BASKET";

export const addProduct = (productID) => ({
  type: ADD_PRODUCT,
  payload: productID,
});

export const removeProduct = (productID) => ({
  type: REMOVE_PRODUCT,
  payload: productID,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
