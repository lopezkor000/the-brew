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
import Chatbot from "./Components/Chatbot/Chatbot"; 

function App() {
  return (
    <Router>
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      {/* Chatbot Component */}
      <Chatbot />

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
