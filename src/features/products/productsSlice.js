import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = productsSlice.actions;

export default productsSlice.reducer;
