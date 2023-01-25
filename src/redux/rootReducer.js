import { combineReducers } from "@reduxjs/toolkit";
import productSlicer from "./product/product.slicer";
import registerSlice from "./register/register.slicer";
import singleuserSlicer from "./users/singleuser/singleuser.slicer";

import usersSlicers from "./users/users.slicers";
import inWalletSlice from "../redux/userInWallet/Inwalletslicer";

const rootReducer = combineReducers({
  registerSlice,
  Product: productSlicer,
  Users: usersSlicers,
  singleSlicer: singleuserSlicer,
  inWallet: inWalletSlice,
});
export default rootReducer;
