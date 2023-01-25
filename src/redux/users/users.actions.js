import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersApi } from "../../Http/api";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (payload) => {
    const { data } = await getAllUsersApi(payload);
    return data;
  }
);
