import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="logo">
        <img src="./images/logo.svg" alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`} data-testid="nav-items"> 
        <a href="/home">Home</a>
        <a href="#mission-section">About</a>
        <a href="#our-services"> Our Services</a>
        <a href="#footer-container">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="nav-toggle"
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;