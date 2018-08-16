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

router.route('/new').post(function (req, res, body) {
    console.log('Create new album');
});

router.route('/getall').get(function (req, res, body) {
    console.log('Get all albums');
    var userResponse = responses.albums;
    db.getAllAlbums((albums, status, errMsg) => {
        if (status) {
            userResponse.albums = albums;
        } else {
            userResponse.status = 400;
            userResponse.error = errMsg;
        }
        res.send(userResponse);
    });
});

router.route('/delete').post(function (req, res, body) {
  console.log('Delete album');
  var userResponse = responses.albums;

  db.deleteAlbum(id, (err, status) => {
    if (status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
});

router.route('/create').post(function (req, res, body) {
  console.log('Delete album');
  var userResponse = responses.album;
  db.deleteAlbum(id, (album, err, status) => {
    if (status) {
      userResponse.album = album;
      res.send(userResponse);
    } else {
      res.sendStatus(401);
    }
  });
});

module.exports = router;
