import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    failLoading: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    finishLoading: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;

      state.ids = payload.map(({ id }) => id);
      state.entities = payload.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
      }, {});
    },
  },
});
