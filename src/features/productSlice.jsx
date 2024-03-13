
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    loading: false,
    error: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
      },
      getProductsSuccess:(state,action)=>{
        state.products=action.payload
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },

  },
});

export const {
    fetchStart,
    fetchFail,
    getProductsSuccess
} = productSlice.actions;

export default productSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    loading: false,
    error: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
      },
      getProductsSuccess:(state,action)=>{
        state.products=action.payload
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },

  },
});

export const {
    fetchStart,
    fetchFail,
    getProductsSuccess
} = productSlice.actions;
 productSlice.reducer
