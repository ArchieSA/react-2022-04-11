import { basket } from "./features/basket/module/reducer";
import { combineReducers, createStore } from "redux";
import { restaurantReducer } from "./features/restaurant/module/reducer";
import { productReducer } from "./features/menu/module/reducer";
import { reviewReducer } from "./features/review/module/reducer";
import { userReducer } from "./features/user/module/reducer";

const rootReducer = combineReducers({
  basket: basket,
  restaurant: restaurantReducer,
  product: productReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
