export const selectProductsModuleState = (state) => state.product;

export const selectProductById = (state, payload) => 
  selectProductsModuleState(state).entities[payload];

  export const selectProductIds = (state) =>
  selectProductsModuleState(state).ids; //Я так понял тоже нужен для чего-то в будущем