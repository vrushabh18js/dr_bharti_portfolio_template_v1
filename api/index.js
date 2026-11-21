let express, cors;
try {
  express = require('express');
  cors = require('cors');
} catch (e) {
  try {
    express = require('../server/node_modules/express');
    cors = require('../server/node_modules/cors');
  } catch (err) {
    express = require('express');
    cors = require('cors');
  }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let portfolioData;
try {
  portfolioData = require('./data/portfolioData.json');
} catch (e) {
  try {
    portfolioData = require('../server/data/portfolioData.json');
  } catch (err) {
    portfolioData = {};
  }
}

// GET entire portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// GET profile
app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile || {});
});

// GET experience
app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience || []);
});

// GET education
app.get('/api/education', (req, res) => {
  res.json(portfolioData.education || []);
});

// GET achievements
app.get('/api/achievements', (req, res) => {
  res.json(portfolioData.achievements || []);
});

// GET publications
app.get('/api/publications', (req, res) => {
  res.json(portfolioData.publications || []);
});

// GET gallery
app.get('/api/gallery', (req, res) => {
  res.json(portfolioData.gallery || portfolioData.achievements || []);
});

// POST contact inquiry
app.post('/api/contact', (req, res) => {
  const { name, email, purpose, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  res.status(200).json({
    success: true,
    message: "Inquiry successfully received by Dr. D. B. Bharti's Executive Academic Office."
  });
});

// Health check
app.get('/api', (req, res) => {
  res.json({
    status: 'online',
    app: "Dr. D. B. Bharti - Director MBA Portfolio API",
    version: '1.0.0'
  });
});

module.exports = app;
