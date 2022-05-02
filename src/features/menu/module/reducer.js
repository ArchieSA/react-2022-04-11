import { normalizedProducts } from "../../../constants/normalized-fixtures";

const initialState = {
  entities:normalizedProducts.reduce((acc,entities)=>{
    acc[entities.id] = entities;
    return acc
},{}),
  ids:normalizedProducts.map((product)=>product.id),
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};
