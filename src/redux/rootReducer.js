import { combineReducers } from "@reduxjs/toolkit";
import productSlicer from "./product/product.slicer";
import registerSlice from "./register/register.slicer";
const rootReducer = combineReducers({
  registerSlice,
  Product: productSlicer,
});
export default rootReducer;
