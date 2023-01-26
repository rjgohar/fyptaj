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
import PrivateRoute, { FarmerRoute, UserRoute } from "./protectedRoute";

import AdminDashboard from "../components/adminDashboard";
import AboutUs from "../pages/aboutus";
import UniversalHooks from "../components/UniversalHooks";
import Usersdashboard from "../pages/profilepage";
import EditProfile from "../components/editProfile";
const Routers = () => {
  return (
    <UniversalHooks>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route
            path="/consumer"
            element={
              <UserRoute>
                <Consumer />
              </UserRoute>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/uploadproduct"
            element={
              <FarmerRoute>
                <UploadFile />
              </FarmerRoute>
            }
          />
          <Route path="/myprofile/:id" element={<Usersdashboard />} />

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>

        <Footer />
      </Router>
    </UniversalHooks>
  );
};

export default Routers;
