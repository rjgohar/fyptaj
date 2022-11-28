import { MuiBAseUrl } from "./config";

export const requestRegisterUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post("/api/users/singUp", payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const requestLoginUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post("/api/users/login", payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
