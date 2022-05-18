import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "route",
  initialState: {
    currentRoute: "",
  },
  reducers: {
    changeRoute: (state, { payload }) => {
      state.currentRoute = payload;
    },
  },
});
