import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: false,
  reducers: {
    setCart: (state, action) =>{
        return action.payload
    },
  },
});

export const addProductCartThunk = (data) => (dispatch) =>{
    axios
    .post("/cart/:id")
}

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
