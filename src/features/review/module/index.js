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
      state.isLoading = true;
      state.error = null;
    },
    failLoading: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    finishLoading: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;

      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, entity) => {
          acc[entity.id] = entity;
          return acc;
        }, {}),
      };
      state.ids = Object.keys(state.entities);
    },
    addReview: (state, { payload }) => {
      state.entities = {
        ...state.entities,
        [payload.id]: payload,
      };
      state.ids = Object.keys(state.entities);
    },
  },
});
