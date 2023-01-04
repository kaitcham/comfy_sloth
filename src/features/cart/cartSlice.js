import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 535,
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
        localStorage.setItem('cart', JSON.stringify(state.cart));
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
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      const newCart = state.cart.filter((item) => item.id !== id);
      state.cart = newCart;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
