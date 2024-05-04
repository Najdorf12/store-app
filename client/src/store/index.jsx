import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading'
import products from './slices/products';
import user from './slices/user';

export default configureStore({
  reducer: {
    isLoading,
    products,
    user
	}
})