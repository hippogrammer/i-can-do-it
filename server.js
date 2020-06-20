//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const user = require('./api/user');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/i-can-do-it'));
app.use('/user', user);
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/i-can-do-it/index.html'));
});
const ngPort = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(ngPort);