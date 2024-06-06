import React from 'react';
import './App.css'; // Import CSS file for styling
import logo from './logo.jpg'; // Import the logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo-image" /> {/* Added logo image */}
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li> {/* Added About link */}
        <li><a href="/shop">Shop</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
