const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // allow frontend to access
const PORT = process.env.PORT || 5000;

// Optional: Log all incoming requests (useful for debugging uptime pings)
app.use((req, res, next) => {
  console.log(`[PING] ${req.method} ${req.url}`);
  next();
});

// ✅ Add a health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      },
      params: req.query
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('API call failed');
  }
});

app.get('/standings', async (req, res) => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/standings', {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      },
      params: req.query
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('API call failed');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
