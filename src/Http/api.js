import { MuiBAseUrl } from "./config";

export const requestRegisterUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post("/api/users/singUp", payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const requestLoginUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post("api/users/login", payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
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
  } catch (error) {
    throw error;
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

// Get All Users Api Start
export const getAllUsersApi = async () => {
  try {
    const res = await MuiBAseUrl.get("/api/users/getAllUsers", {
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
// Get All Users Api End

// export const addProductApi = async (payload) => {
//   try {
//     const res = await MuiBAseUrl.post("/api/users/addProduct", payload, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };
// export const getAllProductsApi = async () => {
//   try {
//     const res = await MuiBAseUrl.get("/api/users/getAllProducts", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };
export const getSingleUserApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getSingleUser/${payload}`, {
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
export const checkSessionApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get("api/users/checkSession", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("JWTtoken"),
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllInWallet = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/createdProducts/${payload}`, {
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

export const putOnAuction = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/listOnAuction`, payload, {
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

export const AddBidOn = async (payload) => {
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

export const deleteProductsApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`api/users/deleteProduct/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteuserApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/deleteUser/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};
