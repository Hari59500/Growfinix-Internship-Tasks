// Import the packages we installed earlier
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

// Create our app using Express
const app = express();

// Middleware - these run on every request before reaching our routes
app.use(cors());
app.use(express.json());

// Use our auth routes - any URL starting with /api/auth goes here
app.use('/api/auth', authRoutes);

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// A simple test route to check if server is working
app.get('/', (req, res) => {
  res.send('Growfinix Auth API is running');
});

// Start the server, listening on the PORT defined in .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});