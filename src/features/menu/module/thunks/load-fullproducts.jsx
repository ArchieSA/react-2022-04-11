import { productSlice } from "../index";

export function loadFullProducts () {
  return function(dispatch, getState) {

    dispatch(productSlice.actions.startLoading(null));

    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });

  };
}