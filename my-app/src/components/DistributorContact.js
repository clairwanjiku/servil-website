import React from 'react';

const DistributorContact = ({ name, email, phone, location }) => {
  return (
    <div className="distributor-contact">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  );
};

export default DistributorContact;
