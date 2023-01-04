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
    addToCart: (state, action) => {
      const {
        id, color, amount, product,
      } = action.payload;
      const itemToAdd = state.cart.find((item) => item.id === id + color);
      if (itemToAdd) {
        const newCart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        });
        state.cart = newCart;
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          max: product.stock,
          price: product.price,
          image: product.images[0].url,
        };
        state.cart = [...state.cart, newItem];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
