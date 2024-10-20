import React from "react";
import "../../../CSS Files/Hero.css";
import "../../../CSS Files/Header.css";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={props.img} alt="The Brew Logo" className="logo-image" />
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
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
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
