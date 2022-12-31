import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../products/productsSlice';

const initialState = {
  gridView: true,
  allProducts: [],
  filteredProducts: [],
  sort: 'price-lowest',
  filters: {
    text: '',
  },
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
    updateSort: (state, action) => {
      state.sort = action.payload;
      state.filteredProducts = state.filteredProducts.sort((a, b) => {
        if (state.sort === 'price-lowest') {
          return a.price - b.price;
        }
        if (state.sort === 'price-highest') {
          return b.price - a.price;
        }
        if (state.sort === 'name-a') {
          return a.name.localeCompare(b.name);
        }
        if (state.sort === 'name-z') {
          return b.name.localeCompare(a.name);
        }
        return a;
      });
    },
    updateFilters: (state, action) => {
      const name = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      state.filters[name] = value;

      state.filteredProducts = state.allProducts.filter((product) => {
        if (
          state.filters.text
          && !product.name.toLowerCase().startsWith(state.filters.text)
        ) {
          return false;
        }
        return true;
      });
    },
  },
});

export const {
  setGridView,
  setListView,
  setProducts,
  updateSort,
  updateFilters,
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
