// import { createSlice } from "@reduxjs/toolkit";
// import { updateUserData } from "./updateProfile.action";
// import { resetUpdatingData } from "./userdataupdat.action";
// const initialState = {
//   isUserDataUpadting: false,
//   isUserDataUpadtingSuccess: false,
//   isUserDataUpadtingFailed: false,
// };

// const editUserDetailsSlicer = createSlice({
//   name: "userprofileUpdate",
//   initialState,
//   extraReducers: {
//     [updateUserData.pending]: (state) => {
//       state.isUserDataUpadting = true;
//       state.isUserDataUpadtingSuccess = false;
//       state.isUserDataUpadtingFailed = false;
//     },
//     [updateUserData.fulfilled]: (state, action) => {
//       state.isUserDataUpadting = false;
//       state.isUserDataUpadtingSuccess = true;
//       state.isUserDataUpadtingFailed = false;
//     },
//     [updateUserData.rejected]: (state) => {
//       state.isUserDataUpadting = false;
//       state.isUserDataUpadtingSuccess = false;
//       state.isUserDataUpadtingFailed = true;
//     },
//   },
//   reducers: {
//     resetUpdatingData: (state) => {
//       state.isUserDataUpadtingSuccess = false;
//       state.isUserDataUpadtingFailed = false;
//       state.isUserDataUpadting = false;
//     },
//   },
// });

// export default editUserDetailsSlicer.reducer;
