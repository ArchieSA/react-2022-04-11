export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const REMOVE_ALL_PRODUCTS = "basket/REMOVE_ALL_PRODUCTS";

export const addProduct = (productName) => ({
  type: ADD_PRODUCT,
  payload: productName,
});

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const removeAllProduct = () => ({
  type: REMOVE_ALL_PRODUCTS,
});
