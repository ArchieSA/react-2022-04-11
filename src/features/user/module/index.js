import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'product',
  initialState: {
    entities: {},
    ids: [],
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

      state.ids = payload.map(({ id }) => id);
      state.entities = payload.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
      }, {});
    },
  },
  
});