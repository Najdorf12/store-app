import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
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
    .get("/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getProductsByCategoryThunk = (category) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`/products/category/${category}`)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getProductsByNameThunk = (name) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`/products/leaked/${name}`)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getProductDetailThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
