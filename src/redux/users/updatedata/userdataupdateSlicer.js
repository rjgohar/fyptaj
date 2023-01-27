import { createSlice } from "@reduxjs/toolkit";

import { updateProfilePic, updateUserData } from "./userdataupdat.action";
import { resetUpdatingData } from "./userdataupdat.action";
const initialState = {
  isUserDataUpadting: false,
  isUserDataUpadtingSuccess: false,
  isUserDataUpadtingFailed: false,
  ///
  isprofileupdating: false,
  isprofileupdatingSuccess: false,
  isprofileupdatingFailed: false,
};

const editUserDetailsSlicer = createSlice({
  name: "userprofileUpdate",
  initialState,
  extraReducers: {
    // [updateUserData.pending]: (state) => {
    //   state.isUserDataUpadting = true;
    //   state.isUserDataUpadtingSuccess = false;
    //   state.isUserDataUpadtingFailed = false;
    // },
    // [updateUserData.fulfilled]: (state, action) => {
    //   state.isUserDataUpadting = false;
    //   state.isUserDataUpadtingSuccess = true;
    //   state.isUserDataUpadtingFailed = false;
    // },
    // [updateUserData.rejected]: (state) => {
    //   state.isUserDataUpadting = false;
    //   state.isUserDataUpadtingSuccess = false;
    //   state.isUserDataUpadtingFailed = true;
    // },

    ////////////////////////////////////////////////////////////////
    [updateProfilePic.pending]: (state) => {
      state.isprofileupdating = true;
      state.isprofileupdatingSuccess = false;
      state.isprofileupdatingFailed = false;
    },
    [updateProfilePic.fulfilled]: (state, action) => {
      state.isprofileupdating = false;
      state.isprofileupdatingSuccess = true;
      state.isprofileupdatingFailed = false;
    },
    [updateProfilePic.rejected]: (state) => {
      state.isprofileupdating = false;
      state.isprofileupdatingSuccess = false;
      state.isprofileupdatingFailed = true;
    },
  },
  reducers: {
    resetUpdatingData: (state) => {
      state.isUserDataUpadtingSuccess = false;
      state.isUserDataUpadtingFailed = false;
      state.isUserDataUpadting = false;
    },
  },
});

export default editUserDetailsSlicer.reducer;
