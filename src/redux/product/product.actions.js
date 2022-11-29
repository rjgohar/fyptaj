import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addBidApi,
  addProductApi,
  getAllProductsApi,
  getSingleProductApi,
} from "../../Http/api";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (payload) => {
    const { data } = await addProductApi(payload);
    return data;
  }
);
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (payload) => {
    const { data } = await getAllProductsApi(payload);
    return data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (payload) => {
    const { data } = await getSingleProductApi(payload);
    return data;
  }
);
export const addBid = createAsyncThunk("product/addBid", async (payload) => {
  const { data } = await addBidApi(payload);
  return data;
});
