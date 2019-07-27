//this middleware validates the web token
const jwt = require('jsonwebtoken');
const config = require('config');

//exporting a middleware function
module.exports = function(req, res, next) {
  //Get token from header; 'x-auth-token' can be entered as key in headers in postman
  //the token itself can be copied into the value field in postman
  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Verify token
  try {
    //decoding token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
