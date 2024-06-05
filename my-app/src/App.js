import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/Home';
import DistributorContact from './DistributorsContact'; 
import contacts from '.components/contacts'; // Correctly import the contacts array

const App = () => {
  const [visibleContacts, setVisibleContacts] = useState(7);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const loadMoreContacts = () => {
    setVisibleContacts(prev => prev + 7);
  };

  const toggleAboutSection = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div>
      <Navbar />
      <Home />
      
      <div className="distributor-list">
        {contacts.slice(0, visibleContacts).map(contact => (
          <DistributorContact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            location={contact.location}
          />
        ))}
        {visibleContacts < contacts.length && (
          <button onClick={loadMoreContacts}>Load More</button>
        )}
      </div>

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

      <Footer />
    </div>
  );
};

export default App;

