import { createSlice } from "@reduxjs/toolkit";

export const isAuthenticated = createSlice({
  name: "isAuthenticated",
  initialState: false,
  reducers: {
    setIsAuthenticated: (state, action) =>{
        return action.payload
    },
  },
});

export const { setIsAuthenticated } = isAuthenticated.actions;
export default isAuthenticated.reducer;
