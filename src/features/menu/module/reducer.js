import { normalizedProducts } from "../../../constants/normalized-fixtures";

export const productReducer = (state = normalizedProducts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
