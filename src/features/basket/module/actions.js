export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const RESET_ORDER = "basket/RESET_ORDER";

export const addProduct = (productName) => ({
  type: ADD_PRODUCT,
  payload: productName,
});

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const resetOrder = () => ({
  type: RESET_ORDER,
});
