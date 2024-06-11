import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling
import logo from './logo.jpg'; // Import the logo image

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showContentTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const hideContentTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(showContentTimeout);
      clearTimeout(hideContentTimeout);
    };
  }, []);

  return (
    <>
      <div className={`collapse ${isVisible ? 'show' : ''}`} id="navbarToggleExternalContent">
        <div className="bg-dark p-2">
          <h5 className="text-white h5">Collapsed content</h5>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/products">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">Our Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/community">Distributors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/testimonials">Get To Know Our Community</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/dashboard">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex align-items-center">
            <a className="navbar-brand m-0 me-2" href="/">
              <img src={logo} alt="Logo" className="logo-image" style={{ height: '60px' }} /> {/* Reduced logo size */}
            </a>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success me-2" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
