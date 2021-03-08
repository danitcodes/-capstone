/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library

var client_id = '5b87d5012c5e431c916e518affe85b26'; // Your client id
var client_secret = '4121a8b314bd4150ac9a8f4896b234b4'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/BQBVg2DayiVBPJP-9SnAwuk1Y_C51Xaj0s0wECyQuKSCCulZiRlHWILQnySjW7Gr_wN-8DpIP8ZAo16FyUfqB5MgUzgfYy6FKDVhVMtRAe7oHuJaGee8_RkLhlm742vfnOvY7mw_dHDXqxUGw1lyqX4etFOXZZu6b4g',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/playlist/6jvwVYLil91HISffRhZmVm',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
