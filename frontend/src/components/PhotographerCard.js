// src/components/PhotographerCard.js
import React from 'react';

const PhotographerCard = ({ photographer }) => {
  const { name, avatar, event_types, location } = photographer;

  return (
    <div className="photographer-card">
      <h3>{name}</h3>
      <p>Event Types: {event_types.join(', ')}</p>
      <p>Location: {location.city}, {location.state}</p>
    </div>
  );
};

export default PhotographerCard;