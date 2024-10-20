// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS Files/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="path-to-your-logo-image" alt="Logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="cart-logo">
        <span>Cart logo</span>
      </div>
    </header>
  );
};

export default Header;
