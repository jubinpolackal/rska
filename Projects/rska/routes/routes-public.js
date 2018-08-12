var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var responses = require('../response');
var jwt = require('jsonwebtoken')
var app = express();
var apiRoutes = express.Router();
var http = require('http');
var nodemailer = require('nodemailer');

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
      mailOptions.to = 'jubinpolackal@gmail.com';
      mailOptions.subject = 'ATTENTION: '+contactMessage.name+' would like to know something about the classes';
      mailOptions.text = contactMessage.message+'\r\nName: '+contactMessage.name+',\r\nEmail: '+contactMessage.email+',\r\nPhone: '+contactMessage.phone;
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          userResponse.status = 400;
          userResponse.error = error;
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

module.exports = apiRoutes;
