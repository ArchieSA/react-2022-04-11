import {productSlice} from "../index";


export function loadProduct(productId) {
    return function (dispatch, getState) {
        dispatch(productSlice.actions.startLoading(null));

        fetch(`/api/products?id=${productId}`)
            .then((response) => response.json())
            .then((reviews) => {
                dispatch(productSlice.actions.finishLoading(reviews));
            })
            .catch((error) => {
                dispatch(productSlice.actions.failLoading(error));
            });
    };
}
