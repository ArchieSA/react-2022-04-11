export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, payload) =>
    selectProductModuleState(state).entities[payload.productId];

export const selectAllProductIds = (state) =>
    selectProductModuleState(state).ids;
