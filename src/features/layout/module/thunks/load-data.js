import { productSlice } from "../../../menu/module";


export function loadData(){
    return function(dispatch, getState){

        dispatch(productSlice.actions.startLoading(null));


        fetch("http://localhost:3001/api/products")
        .then(response => response.json())
        .then(data=>dispatch(productSlice.actions.finishLoading(data)))
        .then(error => dispatch(productSlice.actions.failLoading(error)))
    }
}