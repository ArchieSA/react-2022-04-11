import { ADD_PRODUCT, CLEAR_BASKET, REMOVE_PRODUCT } from "./actions";

const initialState = {};

export const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };

    case REMOVE_PRODUCT:
      if (!state[action.payload]) {
        return state;
      }

      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };

    case CLEAR_BASKET:
      return { ...initialState };

    default:
      return state;
  }
};
