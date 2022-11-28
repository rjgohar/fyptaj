import { combineReducers } from "@reduxjs/toolkit";
import registerSlice from "./register/register.slicer";
const rootReducer = combineReducers({
  registerSlice,
});
export default rootReducer;
