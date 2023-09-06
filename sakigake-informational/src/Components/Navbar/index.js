import React, { useState } from "react";
import "./style.css";
import Layout from "../Layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="logo">
        <img src="./images/logo.svg" alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`} data-testid="nav-items"> {/* Add data-testid attribute */}
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service"> Our Services</a>
        <a href="/contact">Contact Us</a>
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