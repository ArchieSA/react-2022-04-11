import { productSlice } from "../../../menu/module/index";
import { selectRestaurantProductIds } from "../../../restaurant/module/selectors";
import { selectIsProductPresent } from "../../../menu/module/selectors";

export function loadProducts(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectRestaurantProductIds(getState(), restaurantId);

    const isAllProductExist = productIds.every((productId) => {
      return selectIsProductPresent(getState(), productId);
    });

    if (isAllProductExist) return;

    dispatch(productSlice.actions.startLoading(null));

    fetch(`/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
