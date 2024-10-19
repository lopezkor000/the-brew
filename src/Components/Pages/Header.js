// Header.js
import React from 'react';
import '../CSS Files/Header.css'; // Ensure correct path to your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://cdn.discordapp.com/attachments/1289018728159252572/1297323261323116585/The_Brew_Logo.png?ex=671581f0&is=67143070&hm=ecef8661b99b4aa666d8da5f298989c33e9c149ba4fc376035e2e2f1d87a2c70" 
          alt="The Brew Logo" 
          className="logo-image"
        />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Menu</a></li>
          <li><a href="/order">Order Now</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
