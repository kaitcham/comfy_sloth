import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { singleProductUrl as url } from '../../utils/constants';

const initialState = {
  loading: false,
  product: {},
  error: '',
};

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async (id) => {
    const response = await axios.get(`${url}${id}`);
    return response.data;
  },
);

export const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = '';
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
