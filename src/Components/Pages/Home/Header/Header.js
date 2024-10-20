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
        <div class="btn-group" role="group" aria-label="Basic example">
          <a href="/menu" className="btn">
            Menu
          </a>
          <a href="/about" className="btn">
            About
          </a>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </header>
      <div className="hero">
        <div className="hero-content">
          <a href="/order" className="btn btn-lg">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
