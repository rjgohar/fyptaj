import { combineReducers } from "@reduxjs/toolkit";
import productSlicer from "./product/product.slicer";
import registerSlice from "./register/register.slicer";
import singleuserSlicer from "./users/singleuser/singleuser.slicer";

import usersSlicers from "./users/users.slicers";
import inWalletSlice from "../redux/userInWallet/Inwalletslicer";
import editUserDetailsSlicer from "./users/updatedata/userdataupdateSlicer";
const rootReducer = combineReducers({
  registerSlice,
  Product: productSlicer,
  Users: usersSlicers,
  singleuserSlicer: singleuserSlicer,
  inWallet: inWalletSlice,
  editUserDetailsSlicer: editUserDetailsSlicer,
});
export default rootReducer;
