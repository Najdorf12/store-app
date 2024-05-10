import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const getCartThunk = (id) => (dispatch) => {
  axios
    .get(`/cart/${id}`)
    .then((res) => {
      dispatch(setCart(res.data));
    })
    .catch((error) => console.error(error));
};

export const addProductCart = (id, data) => (dispatch) => {
  axios
    .put(`/cart/${id}`, data)
    .then(() => dispatch(getCartThunk(id)))
    .catch((error) => console.error(error));
};

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
