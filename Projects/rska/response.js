var response = {};

response.contactEmail = {
  status: 200,
  error: ''
}

response.login = {
  status: 200,
  token: '',
  error: ''
}

response.albums = {
  status: 200,
  albums: [],
  error: ''
}

response.album = {
  album: {},
  status: 200,
  error: ''
}

response.photo = {
  photo: {},
  status: 200,
  error: ''
}

module.exports = response;
