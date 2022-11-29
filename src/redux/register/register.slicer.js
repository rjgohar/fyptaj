import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, registerUser } from "./register.actions";
const initialState = {
  isUserRegistering: false,
  isUserRegisteringSuccess: false,
  isUserRegisteringFailed: false,
  userResisgteringStatus: "",

  login: {},
  loginLoading: false,
  loginLoadingSucess: false,
  loginLoadingFailed: false,
  error: {},
  isAuthenticated: false,
};

const handleFulfillement = (state, action) => {
  localStorage.setItem("JWTtoken", action.payload.token);
};

const registerSlice = createSlice({
  name: "registerUser",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isUserRegistering = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isUserRegistering = false;
      state.isUserRegisteringSuccess = true;
      state.userResisgteringStatus = "User Register SuccessFully";
    },
    [registerUser.rejected]: (state) => {
      state.isUserRegistering = false;
      state.isUserRegisteringFailed = true;
      state.userResisgteringStatus = "Cannot Register User!";
    },
    /////////////////////////////////////
    [LoginUser.pending]: (state) => {
      state.loginLoading = true;
      state.error = "";
    },
    [LoginUser.fulfilled]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingSucess = true;

      state.login = action.payload.userInfo;
      handleFulfillement(state, action);
    },
    [LoginUser.rejected]: (state) => {
      state.loginLoading = false;
      state.loginLoadingFailed = true;
      state.error = "";
      state.isAuthenticated = false;
    },
  },

  reducers: {
    resetRegisteringUser: (state) => {
      state.login = {};
      state.loginLoading = false;
      state.loginLoadingSucess = false;
      state.loginLoadingFailed = false;
      state.error = {};
      state.isAuthenticated = false;
      localStorage.setItem("JWTtoken", "");
    },
  },
});

export default registerSlice.reducer;
export const { resetRegisteringUser } = registerSlice.actions;
