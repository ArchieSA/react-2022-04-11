import { combineReducers } from "redux";
import { productReducer } from "./features/menu/module/reducer";
import { reviewReducer } from "./features/review/module/reducer";
import { userReducer } from "./features/user/module/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./features/basket/module";
import { restaurantSlice } from "./features/restaurant/module";

const actionLogger = (store) => (next) => (action) => {
  console.log("action:", action);
  return next(action);
};

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  restaurant: restaurantSlice.reducer,
  product: productReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat().concat(actionLogger),
  devTools: true,
});
