// Generate a random secter key by using crypro module
var s_key = require('crypto').randomBytes(64).toString('hex');
// require "express" module for apis
const express = require('express');
// require "path" module to set the path
const path = require('path');
// require "body-parser" to json data
const bodyParser = require('body-parser');
// call express module and get instance of it In App
const app = module.exports = express();
// set secret key in app instance
app.set('s_key',s_key);
// Parsers for POST data
app.use(bodyParser.json());
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Define usermanagement route
app.use('/usermanagement', require('./controller/userManagement'));
// Verify token
app.use(require('./controller/verify-token'));
// Define taskmanagement route
app.use('/taskmanagement', require('./controller/taskManagement'));
// Redirect any route to index.html page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
// Set port for application
app.set('port', port);
// Listen on provided port, on all network interfaces.
app.listen(port, () => console.log(`API running on localhost:${port}`));