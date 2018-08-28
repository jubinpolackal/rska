var express = require('express'),
    router = express.Router(),
    http = require('http'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    db = require('../db'),
    config = require('../config'),
    path = require('path'),
    base64ToImage = require('base64-to-image'),
    responses = require('../response');


var app = express();

// Parsers
app.use(bodyParser.json({limit: '25mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

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
  console.log(req.body);
  db.updateAlbum(req.body.id,
                 req.body.name,
                 req.body.description,
                 req.body.thumbnailid,
                 (album, error, status)=>{
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

//Upload image to an album
router.route('/upload').post(function(req, res, body){
  console.log('Upload photo ...');
  var userResponse = responses.photo;
  var imageData = req.body;
  var albumId = imageData.albumid;

  var url = __dirname + '/../gallery/';
  console.log(url);

  var base64Str = imageData.imagedata;
  var optionalObj = {'fileName': imageData.filename, 'type':'jpeg'};
  var imageInfo = base64ToImage(base64Str, url, optionalObj);

  var symbolicUrl = '/gallery/';

  console.log(imageInfo);

  db.savePhoto(symbolicUrl+imageData.filename, albumId, imageData.filename, url+imageData.filename, (row, err, status) => {
    if (!status) {
      console.log(err);
      userResponse.status = 403;
      userResponse.error = 'Failed to upload image.';
      res.send(userResponse);
    } else {
      userResponse.status = 200;
      userResponse.err = 'Photo uploaded successfully.';
      userResponse.photo = row;
      res.send(userResponse);
    }
  });
});

// Delete image
router.route('/remove').post(function(req, res, body){
  var photoId = req.body.id;
  var albumId = req.body.photoalbum;

  db.deletePhoto(photoId, albumId, (result, err, status) => {
    if (!status) {
      res.send({
        status: 400,
        error: err
      });
    } else {
      res.send({
        status: 200,
        error: 'Photo deleted successfully.'});
    }
  });

});

module.exports = router;
