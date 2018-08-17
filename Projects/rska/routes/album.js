var express = require('express'),
    router = express.Router(),
    http = require('http'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    db = require('../db'),
    config = require('../config'),
    responses = require('../response');

var app = express();
// Parsers
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

router.route('/delete').post(function (req, res, body) {
  console.log('Deleting album');
  var userResponse = responses.albums;

  db.deleteAlbum(req.body.id, (err, status) => {
    if (status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
});

router.route('/create').post(function (req, res, body) {
  console.log('Create album');
  var userResponse = responses.album;
  db.createAlbum(req.body.name, req.body.description, (album, err, status) => {
    userResponse.error = err;
    userResponse.err = err;
    if (status) {
      userResponse.album = album;
      res.send(userResponse);
    } else {
      res.sendStatus(401);
    }
  });
});

router.route('/update').post(function (req, res, body) {
  console.log('Update album');
  var userResponse = responses.album;

  db.updateAlbum(req.body.id, req.body.name, req.body.description, req.body.thumbnailId, (album, error, status)=>{
    userResponse = responses.album;
    userResponse.error = error;

    if (status) {
      userResponse.album = album;
      res.send(userResponse);
    } else {
      res.sendStatus(401);
    }
  });
});

module.exports = router;
