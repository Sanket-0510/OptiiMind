// Navigation.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "../Styles/navbar.css"; // Import the CSS file

const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="navigation-logo">Mental Health Care</h1>
      <ul className="navigation-links">
        <li className="navigation-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-link">
          <Link to="/about">About</Link>
        </li>
        <li className="navigation-link">
          <Link to="/services">Services</Link>
        </li>
        <li className="navigation-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
