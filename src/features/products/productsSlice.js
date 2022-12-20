import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { productsUrl as url } from '../../utils/constants';

const initialState = {
  isMenuOpen: false,
  loading: false,
  products: [],
  featuredProducts: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.featuredProducts = action.payload.filter(
          (product) => product.featured === true,
        );
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleMenu } = productsSlice.actions;

export default productsSlice.reducer;
