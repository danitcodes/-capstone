var redirect_uri = "http://127.0.0.1:5500/spotify-web-api/index.html";

var client_id = "5b87d5012c5e431c916e518affe85b26";
var client_secret = "4121a8b314bd4150ac9a8f4896b234b4";

const AUTHORIZE = "https://accounts.spotify.com/authorize"

function onPageLoad(){

}

function requestAuthorization(){
  client_id = document.getElementById("clientId").values;
  client_secret = document.getElementById("client_secret").value;
  localStorage.setItem("client_id", client_id);
  localStorage.setItem("client_secret", client_secret);

  let url = AUTHORIZE;
  url += "?client_id=" + client_id;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&show_dialog=true";
  url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url; //Show spotify's authorization screen
}