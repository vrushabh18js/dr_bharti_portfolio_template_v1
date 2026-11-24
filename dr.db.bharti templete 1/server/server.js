const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Paths
const DATA_FILE = path.join(__dirname, 'data', 'portfolioData.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const CLIENT_BUILD_DIR = path.join(__dirname, '..', 'client', 'dist');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure Multer for Achievement Image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 20);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e4);
    cb(null, `achievement-${sanitized}-${uniqueSuffix}${ext}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (JPG, PNG, WebP, SVG) are allowed!'));
    }
  }
});

// Helper to read data safely
function getPortfolioData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading portfolio data:', err);
    return null;
  }
}

// Helper to save data safely
function savePortfolioData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing portfolio data:', err);
    return false;
  }
}

// ===================================================================
// API ROUTES
// ===================================================================

// GET entire portfolio data
app.get('/api/portfolio', (req, res) => {
  const data = getPortfolioData();
  if (!data) return res.status(500).json({ error: 'Failed to load portfolio data' });
  res.json(data);
});

// GET profile
app.get('/api/profile', (req, res) => {
  const data = getPortfolioData();
  res.json(data ? data.profile : {});
});

// GET experience
app.get('/api/experience', (req, res) => {
  const data = getPortfolioData();
  res.json(data ? data.experience : []);
});

// GET education
app.get('/api/education', (req, res) => {
  const data = getPortfolioData();
  res.json(data ? data.education : []);
});

// GET achievements
app.get('/api/achievements', (req, res) => {
  const data = getPortfolioData();
  res.json(data ? data.achievements : []);
});

// POST new achievement (with optional file upload or image URL)
app.post('/api/achievements', upload.single('imageFile'), (req, res) => {
  const data = getPortfolioData();
  if (!data) return res.status(500).json({ error: 'Failed to read database' });

  const { title, category, date, awardingBody, description, badge, imageUrl } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  let finalImageUrl = imageUrl || '/images/achievement-award.svg';
  if (req.file) {
    finalImageUrl = `/uploads/${req.file.filename}`;
  }

  const newAchievement = {
    id: 'ach-' + Date.now(),
    title,
    category: category || 'awards',
    date: date || 'Recent Milestone',
    awardingBody: awardingBody || 'Department of Management Studies',
    description,
    badge: badge || 'Milestone',
    imageUrl: finalImageUrl
  };

  data.achievements.unshift(newAchievement);
  savePortfolioData(data);

  res.status(201).json({
    message: 'Achievement added successfully!',
    achievement: newAchievement
  });
});

// POST upload standalone image
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }
  res.json({
    message: 'File uploaded successfully',
    imageUrl: `/uploads/${req.file.filename}`
  });
});

// GET publications
app.get('/api/publications', (req, res) => {
  const data = getPortfolioData();
  res.json(data ? data.publications : []);
});

// POST contact inquiry / appointment request
app.post('/api/contact', (req, res) => {
  const { name, email, affiliation, purpose, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  console.log(`[New Inquiry Received] from ${name} (${email}) - Purpose: ${purpose}`);
  // In production, integrate nodemailer or SMTP transport here

  res.status(200).json({
    success: true,
    message: "Inquiry successfully received by Dr. D. B. Bharti's Executive Academic Office."
  });
});

// Serve frontend if built
if (fs.existsSync(CLIENT_BUILD_DIR)) {
  app.use(express.static(CLIENT_BUILD_DIR));
  app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_BUILD_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Dr. D. B. Bharti Portfolio API Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}/api/portfolio`);
  console.log(`=======================================================`);
});

