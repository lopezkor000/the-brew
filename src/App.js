import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Menu from './Components/Pages/Menu';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import SeasonalDrinks from './Components/Pages/Categories/SeasonalDrinks';
import Classics from './Components/Pages/Categories/Classics';
import Frappuccinos from './Components/Pages/Categories/Frappuccinos';
import Tea from './Components/Pages/Categories/Tea';
import SpecialtyDrinks from './Components/Pages/Categories/SpecialtyDrinks';
import Pastries from './Components/Pages/Categories/Pastries';
import WholeCoffee from './Components/Pages/Categories/WholeCoffee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seasonal-drinks" element={<SeasonalDrinks />} />
        <Route path="/classics" element={<Classics />} />
        <Route path="/frappuccinos" element={<Frappuccinos />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/specialty-drinks" element={<SpecialtyDrinks />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/whole-coffee" element={<WholeCoffee />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
