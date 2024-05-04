import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const userThunk = (user) => (dispatch) => {
  dispatch(setUser(user));
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
