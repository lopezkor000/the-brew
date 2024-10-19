import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Menu from './Components/Pages/Menu';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Header from './Components/Pages/Header';
import Hero from './Components/Pages/Hero'; // Corrected path to Hero

function App() {
  return (
    <Router>
      <div>
        {}
        <Header />

        {}
        <Routes>
          {}
          <Route path="/" element={
            <>
              <Home />
              <Hero /> {}
            </>
          } />
          
          {/* Other routes */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
