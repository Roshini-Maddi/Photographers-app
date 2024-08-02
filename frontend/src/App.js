// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Filter from './components/Filter';
import PhotographerList from './components/PhotographerList';
import './App.css';

const App = () => {
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);

  useEffect(() => {
    axios.get('/api/photographers')
      .then(response => {
        setPhotographers(response.data);
        setFilteredPhotographers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the photographers!', error);
      });
  }, []);

  const handleFilter = (eventType, zipCode) => {
    const filtered = photographers.filter(photographer =>
      photographer.event_types.includes(eventType) &&
      photographer.location.zip === zipCode
    );
    setFilteredPhotographers(filtered);
  };

  return (
    <div className="App">
      <Header />
      <Filter onFilter={handleFilter} />
      <PhotographerList photographers={filteredPhotographers} />
    </div>
  );
};

export default App;
