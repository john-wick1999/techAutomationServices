const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();

// Your usual Express configuration here...
// Define a route for the root to redirect to your index.html
app.get('/', (req, res) => {
  res.redirect('out/index.html');
});

// Serve static files from the WebGL Test directory
app.use('/', express.static(path.join(__dirname, '/')));


https.createServer({
  key: fs.readFileSync('C:\\Users\\aleja\\key.pem'),
  cert: fs.readFileSync('C:\\Users\\aleja\\cert.pem'),
}, app).listen(8080, () => {
  console.log('HTTPS Server running on port 8080');
});