import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/Header";
import Farmer from "../pages/farmer";

import Home from "../pages/home";
import Consumer from ".././pages/consumer";
import Login from "../pages/login";
import Signup from "../pages/signup";
// import ProductDetails from "../components/productDetails";
import ProductDetail from "../pages/productDetails";
import UploadFile from "../pages/uploadProduct";
import PrivateRoute from "./protectedRoute";
import Fomerdashboard from "../pages/fomeraccountpage";
import UserDashboard from "../pages/userdashboard";
const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route
            path="/uploadproduct"
            element={
              <PrivateRoute>
                <UploadFile />
              </PrivateRoute>
            }
          />
          <Route path="/myaccountformer" element={<Fomerdashboard />} />
          <Route path="/myaccountuser" element={<UserDashboard />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Routers;
