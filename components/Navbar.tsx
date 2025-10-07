import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">AntiCode</a>
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <button className={`hamburger-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolios</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
