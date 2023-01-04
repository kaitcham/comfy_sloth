import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
