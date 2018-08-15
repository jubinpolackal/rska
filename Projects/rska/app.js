var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var config = require('./config');
var publicRoutes = require('./routes/routes-public');

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

app.use('/public', publicRoutes);

function verifyToken(req,res,next) {
  var token = req.body.token || 
              req.query.token || 
              req.headers['x-access-token'] || 
              req.headers['authorization'];
    if (token) {
    // verifies secret and checks exp
        jwt.verify(token, config.jwtSecretKey, function(err, decoded) {
            if (err) { //failed verification
                console.log("verification failed");
                return res.status(403).send({
                    "error": true
                });
            }
            req.decoded = decoded;
            next(); //no error, proceed
        });
    } else {
        // forbidden without token
        return res.status(403).send({
            "error": true
        });
    }
}

//Protected Routes
app.use('/album', verifyToken, require('./routes/album'));

const server = http.createServer(app);
//Set Port
const port = process.env.PORT || config.server.port;
server.listen(port, () => {
  console.log('RSKA started on '+config.server.host+':'+config.server.port);
});
