import { selectProductIds } from '../selectors';
import { productSlice } from '../index';

export function loadProducts() {
  return (dispatch, getState)=> {
    const productsIds = selectProductIds(getState());
    console.log(productsIds);

    if (productsIds?.length) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`/api/products?id=...`)
    .then(response=> response.json())
    .then(menu=> {
      dispatch(productSlice.actions.finishLoading(menu));
    })
    .catch((error) => {
      dispatch(productSlice.actions.failLoading(error));
    });
  };
};
