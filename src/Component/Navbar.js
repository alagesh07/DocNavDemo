import React from 'react';
import './Navbar.css';
import logoImage from '../assets/team.png'; // Update with the correct path to your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
        <span className="logo-text">Your App Name</span>
      </div>
      <div className="navbar-links">
        <a href="#doctor-list" className="navbar-link">Home</a>
        <a href="#doctor-list" className="navbar-link">Doctor List</a>
        <a href="#user-list" className="navbar-link">User List</a>
        <a href="#modify" className="navbar-link">Modify</a>
        <a href="#signup" className="navbar-signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
