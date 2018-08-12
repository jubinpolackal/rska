var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var responses = require('../response');
var jwt = require('jsonwebtoken')
var app = express();
var apiRoutes = express.Router();
var http = require('http');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

apiRoutes.route('/contact-email').post((req, res, next)=>{
  var contactMessage = req.body;
  var userResponse = responses.contactEmail;
  console.log('Calling public/contact-email ...');
  console.dir (req);
  if(contactMessage.constructor === Object &&
    Object.keys(contactMessage).length === 0) {
    userResponse.status = 400;
    userResponse.error = "Please send valid message";
    console.log('Not valid message ...');
    res.send(userResponse);
  } else {
    console.log('Valid message ...');
    if (!contactMessage.message ||
        !contactMessage.phone||
        !contactMessage.name) {
          userResponse.status = 400;
          userResponse.error = 'Error sending message. Please fill in all the required fields';
          console.log('Not valid message ...');
    } else {
      userResponse.status = 200;
      userResponse.error = '';
      res.send(userResponse);
    }
  }
});

module.exports = apiRoutes;
