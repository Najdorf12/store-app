import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading'
import products from './slices/products';
import user from './slices/user';
import isAuthenticated from './slices/isAuthenticated';

export default configureStore({
  reducer: {
    isLoading,
    isAuthenticated,
    products,
    user
	}
})