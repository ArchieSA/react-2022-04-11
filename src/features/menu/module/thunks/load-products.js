import { selectProductIds } from '../selectors';
import { productSlice } from '../index';

export function loadProducts(restaurantId) {
  return (dispatch, getState)=> {
    const productsIds = selectProductIds(getState());

    if (productsIds?.length) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`/api/products?id=${restaurantId}`)
    .then(response=> response.json())
    .then(menu=> {
      dispatch(productSlice.actions.finishLoading(menu));
    })
    .catch((error) => {
      dispatch(productSlice.actions.failLoading(error));
    });
  };
};