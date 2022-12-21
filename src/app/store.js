import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import singleProductReducer from '../features/singleProduct/singleProductSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
