import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const DistributorsContact = ({ contact }) => {
  const [displayedContact, setDisplayedContact] = useState(7);
  
  const handleShowMore = () => {
    setDisplayedContact(displayedContact + 7);
  };

  return (
    <div className="distributors-contact-container">
      {contact.slice(0, displayedContact).map((contact, index) => (
        <div key={index} className="distributors-contact-card">
          <div className="distributors-contact">
            <h3>{contact.name}</h3>
            <p>Location: {contact.location}</p>
            <p>Email: {contact.email}</p>
            <a href={`tel:${contact.phone}`}>Phone: {contact.phone}</a>
          </div>
        </div>
      ))}
      {displayedContact < contact.length && (
        <button className="more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default DistributorsContact;
