
const sqlite3 = require('sqlite3').verbose();

var db = {
/* Login method */
  adminLogin: function(userName, password, callback) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READONLY);
    let sql = 'SELECT COUNT(*) AS userCount FROM adminuser WHERE UserName=? AND password=?';
    localdb.get(sql, [userName, password], (err, row)=>{
      if (err) {
        console.log(err);
        console.log('Fetching admin user failed ...');
        callback('Error logging in. Contact IT support.', false);
      } else {
        console.log(row);
        console.log(row.userCount);
        let count = row.userCount;
        if (count > 0 ){
          callback('Login success.', true);
        } else {
          callback('Error logging in. Invalid credentials.', false);
        }

      }
    });
    localdb.close();
  },
/* Album methods */
//Create Album
  createAlbum: function(albumName, description, callBack ) {
    var sql = 'INSERT INTO album(name, description, thumbnailid) VALUES (?, ?, ?)';
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    localdb.run(sql, [albumName, description, -1], (row, err) => {
      if (err) {
        callback({}, 'Error creating album. Contact IT support.', false);
        console.log('Creating album  failed ...');
      } else {
        console.log('Created album ...');
        let stmt = 'SELECT * FROM album WHERE name=? AND description=? AND thumbnailid=?';
        let stmtData= [albumName, description, -1];
        localdb.get(stmt, stmtData, (err, row)=>{
          if (err) {
            callBack({}, 'Error creating album. Contact IT support.', false);
            console.log('Creating album  failed ...');
          } else {
            console.log(row);
            callBack(row, 'Created the album successfully', true);
          }
        });
      }
    });
    localdb.close();
  },

//Upldate album
  updateAlbum: function(albumId, albumName, description, thumbnailId, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    let sql = 'UPDATE album SET name=?, description=?, thumbnailid=? WHERE id=?';
    let data = [albumName, description, thumbnailId, albumId];
    console.log('Data ...');
    console.log(data);
    localdb.run(sql, data, (err) => {
      if (err) {
        callBack({}, 'Error updating album. Contact IT support.', false);
        console.log('Updating album failed ...');
        console.log(err);
      } else {
        console.log('Updated album ...');
        callBack({id: albumId, name: albumName, description: description, thumbnailId: thumbnailId},
                  'Updated the album successfully',
                  true);
      }
    });
    localdb.close();
  },

//Delete album
  deleteAlbum: function(id, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    let sql = 'DELETE FROM album WHERE id=?';
    console.log('Album id: '+id);
    localdb.run(sql, id, (err) => {
      if (err) {
        console.log(err);
        callBack('Error deleting album. Contact IT support.', false);
        console.log('Deleting album failed ...');
      } else {
        console.log('Deleted album ...');
        callBack('Deleted the album successfully', true);
      }
    });
    localdb.close();
  },

//Get all albums from database
  getAllAlbums(callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READONLY);
    let sql = 'SELECT * FROM album';
    localdb.all(sql, (err, rows)=>{
      if (err) {
        callback([], false, 'Error fetching albums. Contact IT support.');
        console.log('Get albums failed ...');
      } else {
        console.log('Fetch albums successful ...');
        callBack(rows, true, err);
      }

    });
    localdb.close();
  },

  //Upload photo
  savePhoto(photoURL, albumId, fileName, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);

    let sql = 'INSERT INTO photo (photourl, photoalbum, filename) VALUES (?,?,?)';
    let dataValue = [photoURL, albumId, fileName];
    console.log('Going to insert photo record in table...');
    console.log(sql);
    console.log(dataValue);
    localdb.run(sql, dataValue, function(err) {
      if (err) {
        console.log('ERROR: ' + err);
        callBack({}, 'Error uploading photo. Contact IT support.', false);
      } else {
        console.log('Upload successful...');
        console.warn("inserted id:", this.lastID);
        var photoDetails = {
                             id: this.lastID,
                             name: fileName,
                             albumid: albumId
                           };
        callBack(photoDetails, 'Photo uploaded successfully.', true);
      }
    });

    localdb.close();
  },

  getPhotos(albumId, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READONLY);
    let sql = 'SELECT * FROM photo WHERE photoalbum=?';
    localdb.all(sql, albumId, (err, rows)=>{
      if (err) {
        callback([], false, 'Error fetching photos. Contact IT support.');
        console.log('Get photos failed ...');
      } else {
        console.log('Fetch photos successful ...');
        callBack(rows, true, err);
      }
    });
    localdb.close();
  }
}

module.exports = db;
