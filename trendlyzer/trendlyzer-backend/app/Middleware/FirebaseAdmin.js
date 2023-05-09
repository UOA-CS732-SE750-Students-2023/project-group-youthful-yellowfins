
/**
 * Author:  Shubham Gujare
 * Created: 25.04.2023
 * Purpose: This file has the code related to firbase configuration and connection
 **/

const firebase = require("firebase-admin");

const credentials = require("../../firebase-secret.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials)
});

module.exports = firebase;