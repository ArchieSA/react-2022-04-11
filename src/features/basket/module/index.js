import { createSlice } from "@reduxjs/toolkit";
// import { createAction } from "@reduxjs/toolkit/src/createAction";
// import { createReducer } from "@reduxjs/toolkit/src/createReducer";


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


// const loadProducts = createAction('loadProducts');
// loadProducts() = создаст конкретный акшен
// loadProducts.type

// const basketReducer = createReducer({}, (builder) => {
//   builder
//     .addCase(loadProducts, (state, action) => {
//       state[action.payload] = action.payload
//     })
//     .addCase(...)
// })
