import { normalizedProducts } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedProducts.reduce((acc, entity) => {
    acc[entity.id] = entity;
    return acc;
  }, {}),
  ids: normalizedProducts.map(({ id }) => id),
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
