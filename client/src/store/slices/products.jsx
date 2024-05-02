import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("http://localhost:3000/api/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getProductsByCategoryThunk = (category) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`http://localhost:3000/api/products/category/${category}`)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getProductsByNameThunk = (name) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`http://localhost:3000/api/products/leaked/${name}`)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
