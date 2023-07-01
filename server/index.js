const express = require('express');
const app = express();

app.get('/api/customEndpoint', (req, res) => {
  res.send('Hello from Express.js!');
});

module.exports = {
  path: '/api',
  handler: app,
};
