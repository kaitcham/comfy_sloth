import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import singleProductReducer from '../features/singleProduct/singleProductSlice';
import filteredProductsReducer from '../features/filteredProducts/filteredProductsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    filteredProducts: filteredProductsReducer,
  },
});

export default store;
