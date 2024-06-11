import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

import Home from './components/Home';

const App = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const toggleAboutSection = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="main-content">
        <div className="content-left">
          <div className="about-section">
            <button onClick={toggleAboutSection}>
              {isAboutVisible ? 'Hide About Us' : 'Show About Us'}
            </button>
            {isAboutVisible && (
              <div className="about-content">
                <h2>About Us</h2>
                <p>
                  Welcome to our company! We are dedicated to providing the best service to our customers.
                  Our mission is to deliver high-quality products and ensure customer satisfaction.
                  Thank you for choosing us!
                </p>
              </div>
            )}
          </div>

          <div className="testimonials-section">
            <h2>Testimonials</h2>
            <p>What our customers say about us:</p>
            <blockquote>
              "This is the best service I have ever used!" - Customer A
            </blockquote>
            <blockquote>
              "Highly recommend this company." - Customer B
            </blockquote>
          </div>

          <div className="services-section">
            <h2>Our Services</h2>
            <p>We offer a wide range of services to meet your needs:</p>
            <ul>
              <li>Service 1: Description of Service 1</li>
              <li>Service 2: Description of Service 2</li>
              <li>Service 3: Description of Service 3</li>
            </ul>                    
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
