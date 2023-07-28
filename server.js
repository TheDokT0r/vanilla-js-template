// server.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT; // Use the PORT environment variable or default to 3000

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Route all requests to index.html to handle client-side routing (if you're using it)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Production server is running on http://localhost:${port}`);
});
