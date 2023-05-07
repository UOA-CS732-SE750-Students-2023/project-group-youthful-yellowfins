/*
    auth-middleware.js
*/
const firebase = require("./FirebaseAdmin");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.status(403).json({ message: 'No token provided' , status : false});
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    return response.status(403).json({ message: 'Invalid Token' , status : false});
  }

  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() =>  response.status(403).json({ message: 'Unauthorized User' , status : false}));
}

module.exports = authMiddleware;
