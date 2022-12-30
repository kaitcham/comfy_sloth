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
    setGridView: (state) => {
      state.gridView = true;
    },
    setListView: (state) => {
      state.gridView = false;
    },
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
  },
});

export const {
  setGridView, setListView, setProducts, updateSort,
} = filteredProductsSlice.actions;

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
