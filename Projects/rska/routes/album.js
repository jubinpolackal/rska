var express = require('express'),
    router = express.Router(),
    http = require('http'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    db = require('../db'),
    config = require('../config'),
    path = require('path'),
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

router.route('/upload').post(function(req, res, body){
  console.log('Upload photo ...');
  var userResponse = responses.photo;
  var imageData = req.body;
  var base64Data = imageData.imagedata.replace(/^data:image\/jpeg;base64,/, "");
  var albumId = imageData.albumid;

  // var f = fs.createWriteStream('/assets/images/gallery/'+imageData.filename);
  // f.write(base64Data);
  // f.end();
  //var url = path.join(__dirname, '/assets/images/gallery/'+imageData.filename);
  var url = __dirname + '/../assets/images/gallery/' + imageData.filename;
  console.log(url);
  fs.writeFile(url, base64Data, (err)=>{
    if (err) {
      console.log(err);
      userResponse.status = 403;
      userResponse.error = 'Failed to upload photo';
      res.send(userResponse);
    } else {
      db.savePhoto(url, imageData.albumid, (row, err, status)=>{
        if (!status) {
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
    }
  });
});

module.exports = router;
