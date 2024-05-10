import { createSlice } from "@reduxjs/toolkit";
import { setUser } from "./user";
import axios from "../../api/axios";
import { getCartThunk } from "./cart";

export const isAuthenticated = createSlice({
  name: "isAuthenticated",
  initialState: false,
  reducers: {
    setIsAuthenticated: (state, action) => {
      return action.payload;
    },
  },
});

export const verifyTokenThunk = () => (dispatch) => {
  axios
    .get("/auth/verify")
    .then((res) => {
      dispatch(setIsAuthenticated(true));
      dispatch(getCartThunk(res.data.cart)); 
      dispatch(setUser(res.data));
      })
    .catch((error) => {
      console.error(error);
      dispatch(setIsAuthenticated(false));
      dispatch(setUser(null));
    });
};

export const { setIsAuthenticated } = isAuthenticated.actions;
export default isAuthenticated.reducer;
