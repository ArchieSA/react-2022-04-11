import { SET_CURRENT_ROUTE } from "./actions";

const initialState = {
  currentRoute: window.location.href,
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ROUTE: {
      return {
        ...state,
        currentRoute: action.payload,
      };
    }
    default:
      return state;
  }
};
