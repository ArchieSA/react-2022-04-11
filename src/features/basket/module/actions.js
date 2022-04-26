export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const CANCEL_ORDER = "basket/CANCEL_ORDER";

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: productId,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const cancelOrder = () => ({
  type: CANCEL_ORDER,
  payload: "",
});
