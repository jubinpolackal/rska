
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

  createAlbum: function(albumName, description, callBack ) {

  },

  updateAlbum: function(albumId, albumName, description, callBack) {

  },

  deleteAlbum: function(id, callBack) {

  },

  getAllAlbums(callBack) {
    var localdb = new sqlite3.Database('./assets/database/rska.sqlite', sqlite3.OPEN_READONLY);
    let sql = 'SELECT * FROM album';
    localdb.all(sql, (err, rows)=>{
      if (err) {
        callback('Error logging in. Contact IT support.', false);
        console.log('Fetching admin user failed ...');
      } else {
        console.log('Album rows: ');
        console.log(rows);
        callBack(rows, true);
      }
      localdb.close();
    });
  }
};

module.exports = db;
