const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from project root
app.use(express.static(__dirname));

// Main route serves index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start listening
app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`🚀 Stock Movement Dashboard is Running`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`========================================\n`);
});
