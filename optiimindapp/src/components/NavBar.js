// Navigation.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "../Styles/navbar.css"; // Import the CSS file

const Navigation = () => {
  return (
    <div>
      <div className="image">
    <nav className="navbar">
      <h2>Logo</h2>
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
        <li className="navigation-link">
          <Link to="/loginPage">Login</Link>
        </li>
      </ul>
    </nav>

    <div className="backgroundImage">
      <h1>OPtiiMind</h1> <br />
      <h1>OptiMise Your Mind!</h1>
    </div>
    </div>
    </div>
  );
};

export default Navigation;
