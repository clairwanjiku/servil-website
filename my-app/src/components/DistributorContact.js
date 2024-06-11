import React from 'react';

const DistributorContact = ({ name, email, phone, location, locationUrl }) => {
  return (
    <div className="distributor-contact">
      <h3>{name}</h3>
      <p>Location: <a href={locationUrl} target="_blank" rel="noopener noreferrer">{location}</a></p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  );
};

export default DistributorContact;
