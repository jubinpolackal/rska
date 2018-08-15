var express = require('express'),
    router = express.Router(),
    http = require('http'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    db = require('../db');
    config = require('../config');

var app = express();
// Parsers
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

router.route('/new').post(function (req, res, body) {
    console.log('Create new album');
});

router.route('/getall').post(function (req, res, body) {
    console.log('Get all albums');
    db.getAllAlbums((albums) => {

    });
});

module.exports = router;