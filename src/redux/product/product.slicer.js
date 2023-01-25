import { createSlice } from "@reduxjs/toolkit";
import {
  addBid,
  addProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "./product.actions";

const initialState = {
  isProductAddLoading: false,
  isProductAddLoadingFailed: false,
  isProductAdded: false,
  addProductData: {},
  ///////////////////
  areAllProductsLoaded: false,
  areAllProductsLoadedFailed: false,
  areAllProductsLoading: false,
  allProductsData: [],
  ////////////////
  isSingleProductLoading: false,
  isSingleProductLoadingFailed: false,
  singleProductData: [],
  ////////////////
  isBidAddLoading: false,
  isBidAddLoadingFailed: false,
  isBidAdded: false,
  bidData: [],
  ////////////////
  isProductDeleteLoading: false,
  isProductDeleted: false,
  isProductDeleteFailed: false,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [addProduct.pending]: (state, action) => {
      state.isProductAddLoading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isProductAddLoading = false;
      state.isProductAdded = true;
      state.addProductData = action.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.isProductAddLoading = false;
      state.isProductAddLoadingFailed = true;
    },
    ////////////////////
    [getAllProducts.pending]: (state, action) => {
      state.areAllProductsLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoaded = true;
      state.allProductsData = action.payload.productInfo;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoadedFailed = true;
    },
    ////////////////////
    [getSingleProduct.pending]: (state, action) => {
      state.isSingleProductLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isSingleProductLoading = false;
      state.singleProductData = action.payload.productInfo;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.isSingleProductLoadingFailed = true;
      state.isSingleProductLoading = false;
    },
    [addBid.pending]: (state, action) => {
      state.isBidAddLoading = true;
    },
    [addBid.fulfilled]: (state, action) => {
      state.isBidAddLoading = false;
      state.isBidAdded = true;
      state.bidData = action.payload;
    },
    [addBid.rejected]: (state, action) => {
      state.isBidAddLoading = false;
      state.isBidAddLoadingFailed = true;
    },
    ////////////////////////////////
    [deleteProduct.pending]: (state, action) => {
      state.isProductDeleteLoading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isProductDeleteLoading = false;
      state.isProductDeleted = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isProductDeleteLoading = false;
      state.isProductDeleteFailed = true;
    },
  },
});

export default ProductSlice.reducer;
