import { productSlice } from "..";
import { selectProductIds, selectProductsByRestId } from "../selectors";

export function loadProducts(id){
   
    return function (dispatch, getState){
        const state = getState();
        const productIds = selectProductIds(state);
        const resaurantProducts = selectProductsByRestId(state, id);
        if (resaurantProducts.every(id=>productIds.includes(id))) return;
        dispatch(productSlice.actions.startLoading(null));

        fetch(`api/products?id=${id}`)
            .then(resp => resp.json())
            .then(products => dispatch(productSlice.actions.finishLoading(products)))
            .catch(error => dispatch(productSlice.actions.failLoading(error)));
    }
}