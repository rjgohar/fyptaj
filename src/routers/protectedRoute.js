import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loginLoadingSucess } = useSelector((state) => state.registerSlice);
  if (!loginLoadingSucess) {
    // return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default PrivateRoute;
