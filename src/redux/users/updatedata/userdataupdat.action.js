import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfileAPI } from "../../../Http/api";

export const updateProfilePic = createAsyncThunk(
  "usercoverprofilepicture/Profilepicture",
  async (payload) => {
    const { data } = await updateProfileAPI(payload);

    return data;
  }
);

export const resetUpdatingData = createAction("userprofileUpdate/UpdatingData");
