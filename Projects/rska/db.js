
const sqlite3 = require('sqlite3').verbose();

let database = new sqlite3.Database('./assets/database/rska.sqlite',
sqlite3.OPEN_READWRITE,
(err) => {
  if (err) {
    console.log('Unable to opne database ...');
    console.log(err.message);
  } else {
    console.log('Database opened successfully ...');
  }
});

var db = {

  closeDB: function() {
    database.close();
  },
/* Login method */
  adminLogin: function(userName, password, callback) {
    let sql = 'SELECT COUNT(*) AS userCount FROM adminuser WHERE UserName=? AND password=?';

    database.get(sql, [userName, password], (err, row)=>{
      if (err) {
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
        this.closeDB();
      }
    });
  },
/* Album methods */
  createAlbum: function(albumName, description, callBack ) {
    var sql = 'INSERT INTO album(name, description, thumbnailid) VALUES (?)';
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    localdb.run(sql, [albumName, description, -1], (err) => {
      if (err) {
        callback('Error creating album. Contact IT support.', false);
        console.log('Creating album  failed ...');
      } else {
        console.log('Created album ...');
        let stmt = 'SELECT * FROM album WHERE name=? AND description=? AND thumbnailid=?';
        let stmtData= [albumName, description, -1];
        localdb.get(stmt, stmtData, (err, row)=>{
          if (err) {
            callback({}, 'Error creating album. Contact IT support.', false);
            console.log('Creating album  failed ...');
          } else {
            callBack(row, 'Created the album successfully', true);
          }
          localdb.close();
        });
      }
    });
  },

  updateAlbum: function(albumId, albumName, description, thumbnailId, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    let sql = 'UPDATE album SET name=?, descriiption=?, thumbnailid=? WHERE id=?';
    let data = [albumName, description, thumbnailId, albumId];
    localdb.run(sql, data, (err, rows) => {
      if (err) {
        callback({}, 'Error updating album. Contact IT support.', false);
        console.log('Updating album failed ...');
      } else {
        console.log('Updated album ...');
        callBack({id: albumId, name: albumName, description: description, thumbnailId: thumbnailId},
                  'Updated the album successfully',
                  true);
      }
      localdb.close();
    });
  },

  deleteAlbum: function(id, callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READWRITE);
    let sql = 'DELETE * FROM album WHERE id=?';

    localdb.run(sql, id, (err) => {
      if (err) {
        callback('Error deleting album. Contact IT support.', false);
        console.log('Deleting album failed ...');
      } else {
        console.log('Deleted album ...');
        callBack('Deleted the album successfully', true);
      }
      localdb.close();
    });
  },

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
      localdb.close();
    });
  }
};

module.exports = db;
