// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [eventType, setEventType] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleFilter = () => {
    onFilter(eventType.toLowerCase(), zipCode);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Event Type"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;