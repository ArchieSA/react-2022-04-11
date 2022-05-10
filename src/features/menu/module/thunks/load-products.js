import { productSlice } from "..";

export function loadProducts(restaurantId) {
  return function (dispatch) {

    dispatch(productSlice.actions.startLoading());

    fetch(`/api/products/?id=${restaurantId}`)
      .then(res => res.json())
      .then(products => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch(err => {
        dispatch(productSlice.actions.failLoading(err));
      });
  }
}
