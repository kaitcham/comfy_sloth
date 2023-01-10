import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';
import singleProductReducer from '../features/singleProduct/singleProductSlice';
import filteredProductsReducer from '../features/filteredProducts/filteredProductsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    filteredProducts: filteredProductsReducer,
  },
});

export default store;
