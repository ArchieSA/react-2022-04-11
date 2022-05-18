import { selectProductIds } from "../selectors";
import { productSlice } from "../index";
import { selectRestaurantProductsById } from "../../../restaurant/module/selectors";

export function loadProducts(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    if (restaurantId) {
      const restaurantProducts = selectRestaurantProductsById(getState(), {
        restaurantId,
      });

      if (restaurantProducts.every((productId) => productIds.includes(productId))) {
        return;
      }
    }

    dispatch(productSlice.actions.startLoading(null));
    let url = `http://localhost:3001/api/products`;
    if (restaurantId) {
      url += `?${new URLSearchParams({
        id: restaurantId,
      }).toString()}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
