var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var config = require('./config');
var publicRoutes = require('./routes/routes-public');
var routesProtected = require('./routes/routes-protected');

const app = express();

// Parsers
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/rska')));


//Unprotected routes
app.get('/', (req, res)=>{
  console.log("Sending index.html ...");
  res.sendFile(path.join(__dirname, 'dist/rska'));
});

var publicRoutes = require('./routes/routes-public');
var routesProtected = require('./routes/routes-protected');

app.use('/public', publicRoutes);


const server = http.createServer(app);
//Set Port
const port = process.env.PORT || config.server.port;
server.listen(port, () => {
  console.log('RSKA started on '+config.server.host+':'+config.server.port);
});
