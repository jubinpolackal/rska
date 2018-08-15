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
    db.getAllAlbums((albums, status) => {
        if (status) {
            userResponse.albums = albums;
            res.send(userResponse);
        } else {
            userResponse.status = 400;
            res.send(userResponse);
        }
    });
});

module.exports = router;