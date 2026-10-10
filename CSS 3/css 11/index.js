// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Example API endpoint
app.get("/api/trial", (req, res) => {
  res.json({ message: "DevCraft trial download initiated!" });
});

// Start server
app.listen(PORT, () => {
  console.log ('Server running at http://localhost:${PORT}');
});