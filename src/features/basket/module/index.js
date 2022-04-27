import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_BASKET } from "./actions";

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
      if (state[action.payload] === 1) {
        const newState = Object.keys(state).reduce((object, key) => {
            if (key !== action.payload) {
            object[key] = state[key]
            }
            return object
          }, {})
        return newState // не нравится что остается, продукт с нулём. Как вариант можно так сделать и убрать это в утилиты
      }
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };

    case CLEAR_BASKET:
      return {}

    default:
      return state;
  }
};
