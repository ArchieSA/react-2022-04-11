import { productSlice } from "../../../menu/module";
import { userSlice } from "../../../user/module";
import {reviewSlice} from "../../../review/module";

const types = {
    products: productSlice,
    users: userSlice,
    reviews: reviewSlice,
}
export function loadData(){
    
    return function(dispatch, getState){
        Object.keys(types).forEach(type => {
            dispatch(types[type].actions.startLoading(null));
            fetch(`http://localhost:3001/api/${type}`)
                .then(response => response.json())
                .then(data=>dispatch(types[type].actions.finishLoading(data)))
                .then(error => dispatch(types[type].actions.failLoading(error)))
        });
    }
}