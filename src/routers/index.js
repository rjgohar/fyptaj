import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/Header";
import Consumer from "../pages/consumer";
import Farmer from "../pages/farmer";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/consumer" element={<Consumer />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Routers;
