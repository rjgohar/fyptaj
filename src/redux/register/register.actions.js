import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { requestLoginUser, requestRegisterUser } from "../../Http/api.js";
export const registerUser = createAsyncThunk(
  "registerUser/register",
  async (payload) => {
    try {
      const { data } = await requestRegisterUser(payload);
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

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const resetLoginUser = createAction("LoginUser/resetLoginUser");
