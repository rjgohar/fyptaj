import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./register.actions";
const initialState = {
  isUserRegistering: false,
  isUserRegisteringSuccess: false,
  isUserRegisteringFailed: false,
  userResisgteringStatus: "",
};

const registerSlice = createSlice({
  name: "registerUser",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isUserRegistering = true;
      state.isUserRegisteringSuccess = false;
      state.isUserRegisteringFailed = false;
    },
    [registerUser.fulfilled]: (state) => {
      state.isUserRegistering = false;
      state.isUserRegisteringSuccess = true;
      state.isUserRegisteringFailed = false;
      state.userResisgteringStatus = "User Register SuccessFully";
    },
    [registerUser.rejected]: (state) => {
      state.isUserRegistering = false;
      state.isUserRegisteringSuccess = false;
      state.isUserRegisteringFailed = true;
      state.userResisgteringStatus = "Cannot Register User!";
    },
  },

  reducers: {
    resetRegisteringUser: (state) => {
      state.isUserRegistering = false;
      state.isUserRegisteringSuccess = false;
      state.isUserRegisteringFailed = false;
      state.userResisgteringStatus = null;
    },
  },
});

export default registerSlice.reducer;
