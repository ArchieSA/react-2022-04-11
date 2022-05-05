export const selectProducts = (state)=> state.products;
 
 export const selectProductById = (state, payload)=>
   selectProducts(state).entities[payload];
;
 export const selectProductsIds = (state)=> selectProducts(state).ids;