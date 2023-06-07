const jwt = require("jsonwebtoken");

exports.createToken = (user) =>
  jwt.sign(user, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });

exports.checkToken = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);
