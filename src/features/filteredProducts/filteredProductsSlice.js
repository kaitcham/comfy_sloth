import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../products/productsSlice';

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
});

const { setProducts } = filteredProductsSlice.actions;

export const getProducts = () => async (dispatch, getState) => {
  const { products } = getState().products;
  const { allProducts } = getState().filteredProducts;

  if (products.length > 0 && allProducts.length === 0) {
    dispatch(setProducts(products));
  } else {
    const { payload } = await dispatch(fetchProducts());
    dispatch(setProducts(payload));
  }
};

export default filteredProductsSlice.reducer;
