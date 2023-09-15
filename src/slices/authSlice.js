import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  fcmToken: localStorage.getItem("FCMToken")
    ? localStorage.getItem("FCMToken")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      state.fcmToken = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("FCMToken");
    },
    patchLocalToken: (state, action) => {
      state.fcmToken = action.payload;
      localStorage.setItem("FCMToken", action.payload);
    },
  },
});

export const { setCredentials, logout, patchLocalToken } = authSlice.actions;
export default authSlice.reducer;
