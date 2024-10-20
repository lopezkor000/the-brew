import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
// import Menu from "./Components/Pages/Menu";
// import About from "./Components/Pages/About";
// import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer/Footer";
import { getImage } from "./Components/db/db";

function App() {
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    (async () => {
      const img = await getImage("logo.png");
      setLogo(img);
      setLoading(false);
    })();
  }, [loading]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer img={logo} />
    </Router>
  );
}

export default App;
