import { selectProductIds } from "../selectors";
import { productSlice } from "../index";
import { selectRestaurantProductsById } from "../../../restaurant/module/selectors";

export function loadProducts(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());


    const restaurantProducts = selectRestaurantProductsById(getState(), {
      restaurantId,
    });

    if (
      restaurantProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/products?${new URLSearchParams({
        id: restaurantId,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
