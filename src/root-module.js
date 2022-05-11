import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./features/basket/module";
import { restaurantSlice } from "./features/restaurant/module";
import { reviewSlice } from "./features/review/module";
import { productSlice } from "./features/menu/module";
import { userSlice } from "./features/user/module";

const actionLogger = (store) => (next) => (action) => {
  console.log("action:", action);
  return next(action);
};

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  restaurant: restaurantSlice.reducer,
  product: productSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat().concat(actionLogger),
  devTools: true,
});
