import { basket } from "./features/basket/module";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  basket,
});

// поправил в соотвествии с документацией, но как я понимаю мы будем в будущем использовать redux toolkit?
export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState);

  return store;
}
