import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, deleteuser } from "./users.actions";

const initialState = {
  usersLoading: false,
  usersLoadingFailed: false,
  usersLoadingSuccess: false,
  users: [],
  farmers: [],
  ////////////////////////////////
  isuserDeleteLoading: false,
  isuserDeleted: false,
  isuserDeleteFailed: false,
};

const UsersSlicer = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.usersLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      const data = action.payload;
      state.usersLoading = false;
      state.usersLoadingSuccess = true;
      if (data) {
        data.users.map((item, i) => {
          switch (item.role) {
            case "farmer":
              let duplicate = state.farmers.find(
                (obj) => JSON.stringify(obj) === JSON.stringify(item)
              );
              if (!duplicate) {
                state.farmers.push(item);
              }

              break;
            case "user":
              let duplicateUser = state.users.find(
                (obj) => JSON.stringify(obj) === JSON.stringify(item)
              );
              if (!duplicateUser) {
                state.users.push(item);
              }

            default:
              break;
          }
        });
      }
    },
    [getAllUsers.rejected]: (state, action) => {
      state.usersLoading = false;
      state.usersLoadingFailed = true;
      state.usersLoadingSuccess = false;
    },

    ////////////////////////////////
    [deleteuser.pending]: (state, action) => {
      state.isuserDeleteLoading = true;
    },
    [deleteuser.fulfilled]: (state, action) => {
      state.isuserDeleteLoading = false;
      state.isuserDeleted = true;
    },
    [deleteuser.rejected]: (state, action) => {
      state.isuserDeleteLoading = false;
      state.isuserDeleteFailed = true;
    },
  },
});

export default UsersSlicer.reducer;
