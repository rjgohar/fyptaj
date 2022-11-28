import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { requestLoginUser, requestRegisterUser } from "../../Http/api.js";
export const registerUser = createAsyncThunk(
  "registerUser/register",
  async (payload, { dispatch }) => {
    try {
      const { data } = await requestRegisterUser(payload);

      setTimeout(() => {
        dispatch(resetRegisteringUser());
      }, 3000);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const resetRegisteringUser = createAction(
  "registerUser/resetRegisteringUser"
);
///login

export const LoginUser = createAsyncThunk(
  "loginUser/login",
  async (payload, { dispatch }) => {
    try {
      const { data } = await requestLoginUser(payload);

      setTimeout(() => {
        dispatch(requestLoginUser());
      }, 3000);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const resetLoginUser = createAction("LoginUser/resetLoginUser");
