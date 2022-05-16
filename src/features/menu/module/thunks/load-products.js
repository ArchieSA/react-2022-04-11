import { productSlice } from "..";

export function loadProducts(restaurantId) {
   return function(dispatch) {
      dispatch(productSlice.actions.startLoading(null));

      fetch(`/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((products) => {
         dispatch(productSlice.actions.finishLoading(products))
      })
      .catch((error) => {
         dispatch(productSlice.actions.failLoading(error));
      });
   }
}