import { productSlice } from "../index";

export function loadProducts(restaurantId) {
  return function (dispatch) {
    dispatch(productSlice.actions.startLoading(null));

    fetch(`/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(productSlice.actions.finishLoading(reviews));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}