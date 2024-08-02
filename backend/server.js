const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const photographers = JSON.parse(fs.readFileSync('photographers.json', 'utf-8'));

app.get('/api/photographers', (req, res) => {
  res.json(photographers);
});

app.get('/api/photographers/:photographerID', (req, res) => {
  const photographerID = parseInt(req.params.photographerID, 10);
  const photographer = photographers.find(p => p.id === photographerID);
  if (photographer) {
    res.json(photographer);
  } else {
    res.status(404).send('Photographer not found');
  }
});

app.get('/api/photographers/event/:eventType', (req, res) => {
  const eventType = req.params.eventType;
  const filteredPhotographers = photographers.filter(p => p.event_types.includes(eventType));
  if (filteredPhotographers.length > 0) {
    res.json(filteredPhotographers);
  } else {
    res.status(404).send('No photographers found for this event type');
  }
});

app.listen(port, () => {
  console.log(`Photographers API listening at http://localhost:${port}`);
});
