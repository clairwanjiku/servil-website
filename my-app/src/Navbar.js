import React from 'react';
import './App.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Servil</div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
