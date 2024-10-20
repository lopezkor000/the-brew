import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Menu from "./Components/Pages/Menu";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer/Footer";
import Order from "./Components/Pages/Order/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
