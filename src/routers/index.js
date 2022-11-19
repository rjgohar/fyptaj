import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/Header";
import Farmer from "../pages/farmer";

import Home from "../pages/home";
import Consumer from ".././pages/consumer";
import Login from "../pages/login";
import Signup from "../pages/signup";
import ProductDetails from "../components/productDetails";
import ProductDetail from "../pages/productDetails";
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
          <Route path="/ProductDetails" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Routers;
