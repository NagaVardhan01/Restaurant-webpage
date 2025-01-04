// Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <h1 className="logo">Savory Delights</h1>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;