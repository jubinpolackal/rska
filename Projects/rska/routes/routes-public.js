var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var responses = require('../response');
var jwt = require('jsonwebtoken')
var app = express();
var apiRoutes = express.Router();
var http = require('http');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var db = require('../db');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', //Gmail adddress
    pass: '' //Gmail password
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: '',
  text: ''
};


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.set('tokenSecret', config.jwtSecretKey);

apiRoutes.route('/contact-email').post((req, res, next)=>{
  var contactMessage = req.body;
  var userResponse = responses.contactEmail;
  console.log('Calling public/contact-email ...');
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
      mailOptions.from = 'test@gmail.com';
      mailOptions.to = 'test@gmail.com';
      mailOptions.subject = 'ATTENTION: '+contactMessage.name+' would like to know something about the classes';
      mailOptions.text = contactMessage.message+'\r\nName: '+contactMessage.name+',\r\nEmail: '+contactMessage.email+',\r\nPhone: '+contactMessage.phone;
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          userResponse.status = 400;
          userResponse.error = error;
          res.send(userResponse);
        } else {
          console.log('Email sent: ' + info.response);
          userResponse.status = 200;
          userResponse.error = '';
          res.send(userResponse);
        }
      });
    }
  }
});

apiRoutes.route('/login').post((req, res, next) => {
  var user = req.body;
  var userResponse = responses.login;
  console.log('Calling public/login ...');
  if(user.constructor === Object &&
    Object.keys(user).length === 0) {
    userResponse.status = 400;
    userResponse.error = "Please send valid credentials";
    console.log('Not valid user ...');
    res.send(userResponse);
  } else {
    console.log('Parsing user ...');
    if (!user.userName ||
        !user.password) {
      userResponse.status = 400;
      userResponse.error = 'Error logging in. Please fill in all the required fields';
      console.log('Not valid user ...');
      res.send(userResponse);
    } else {
      db.adminLogin(user.userName, user.password, (msg, status) => {
        if (status) {
          var token = jwt.sign({data:user.userName},
                                app.get('tokenSecret'),
                                {expiresIn:'5h'});
          userResponse.token = token;
          userResponse.status = 200;
          userResponse.userName = user.userName;
          userResponse.error = msg;
          console.log(msg);
          res.send(userResponse);
        } else {
          userResponse.status = 400;
          userResponse.error = msg;
          userResponse.token = '';
          console.log(msg);
          res.send(userResponse);
        }
      });
    }
  }
});

module.exports = apiRoutes;