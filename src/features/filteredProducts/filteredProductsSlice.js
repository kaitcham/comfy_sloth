import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../products/productsSlice';

const initialState = {
  gridView: true,
  allProducts: [],
  filteredProducts: [],
  sort: 'name-a',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
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
        if (state.sort === 'name-a') {
          return a.name.localeCompare(b.name);
        }
        if (state.sort === 'name-z') {
          return b.name.localeCompare(a.name);
        }
        if (state.sort === 'price-lowest') {
          return a.price - b.price;
        }
        if (state.sort === 'price-highest') {
          return b.price - a.price;
        }
        return a;
      });
    },
    updateFilters: (state, action) => {
      let tempProducts = [...state.allProducts];
      const name = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      state.filters[name] = value;
      const {
        text, category, company, color,
      } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) => product.name.startsWith(text));
      }

      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category,
        );
      }

      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company,
        );
      }

      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => product.colors.find((c) => c === color));
      }

      state.filteredProducts = tempProducts;
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
