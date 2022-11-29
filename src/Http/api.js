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
export const addProductApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post("/api/users/addProduct", payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const getAllProductsApi = async () => {
  try {
    const res = await MuiBAseUrl.get("/api/users/getAllProducts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const getSingleProductApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getSingleProduct/${payload}`, {
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
export const addBidApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/addBid`, payload, {
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
