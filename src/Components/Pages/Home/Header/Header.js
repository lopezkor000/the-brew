import React from "react";
import "../../../CSS Files/Hero.css";
import "../../../CSS Files/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="The Brew Logo" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/order">Order Now</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <div className="hero-content">
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
