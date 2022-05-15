import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
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
        }, {})
      };
      state.ids = Object.keys(state.entities);
    },
    addReviewToRestaurant: (state, { payload }) => {
      state.entities[payload.restaurantId].reviews.push(payload.reviewId);
    }
  },
});
