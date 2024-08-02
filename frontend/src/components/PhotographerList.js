// src/components/PhotographerList.js
import React from 'react';
import PhotographerCard from './PhotographerCard';

const PhotographerList = ({ photographers }) => {
  return (
    <div className="photographer-list">
      {photographers.map((photographer) => (
        <PhotographerCard key={photographer.id} photographer={photographer} />
      ))}
    </div>
  );
};

export default PhotographerList;