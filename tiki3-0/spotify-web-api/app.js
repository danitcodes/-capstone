// console.log(process.env);
// require('dotenv').config();

// var redirect_uri = `${process.env.REDIRECT_URI}`;

// var client_id = `${process.env.CLIENT_ID}`;
// var client_secret = `${process.env.CLIENT_SECRET}`;

// const AUTHORIZE = "https://accounts.spotify.com/authorize"

// function onPageLoad(){

// }



// function requestAuthorization(){
//   client_id = document.getElementById("clientId").values;
//   client_secret = document.getElementById("client_secret").value;
//   localStorage.setItem("client_id", client_id);
//   localStorage.setItem("client_secret", client_secret);

//   let url = AUTHORIZE;
//   url += "?client_id=" + client_id;
//   url += "&response_type=code";
//   url += "&redirect_uri=" + encodeURI(redirect_uri);
//   url += "&show_dialog=true";
//   url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
//   window.location.href = url; //Show spotify's authorization screen
// }