const jwt = require('jsonwebtoken');

require('dotenv').config();


const cookieParser = require('cookie-parser');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token);
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token' });
        console.log("Invalid token");
      } else {
        req.decodedToken = decodedToken;
        console.log("Valid token");
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
    console.log("No token provided");
  }
};

module.exports = authMiddleware;