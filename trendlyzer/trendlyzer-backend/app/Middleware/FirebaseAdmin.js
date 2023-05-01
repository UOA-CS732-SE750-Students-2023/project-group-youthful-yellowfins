/*
  firebase/index.js
*/
const firebase = require("firebase-admin");

const credentials = require("../../firebase-secret.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials)
});

module.exports = firebase;