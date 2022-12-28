import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gridView: true,
  allProducts: [],
  filteredProducts: [],
};

export const filteredProductsSlice = createSlice({
  name: 'filteredProducts',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase('products/fetchProducts/fulfilled', (state, action) => {
  //         state.allProducts = action.payload;
  //         state.filteredProducts = action.payload;
  //       })
  //       .addCase('products/fetchProducts/rejected', (state, action) => {
  //         state.error = action.error.message;
  //       });
  //   },
});

const { setProducts } = filteredProductsSlice.actions;

export const getProducts = () => (dispatch, getState) => {
  const value = getState().products.products;
  dispatch(setProducts(value));
};

export default filteredProductsSlice.reducer;
