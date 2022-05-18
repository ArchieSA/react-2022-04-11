import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    addProduct: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeProduct: (state, { payload }) => {
      if (state[payload]) {
        state[payload] = state[payload] - 1;
      }
    },
    clear: () => basketSlice.getInitialState(),
  },
});
