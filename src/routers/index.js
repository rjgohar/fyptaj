import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
