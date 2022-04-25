import { basket } from "./features/basket/module";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  basket: basket,
});

export const store = createStore(rootReducer);
