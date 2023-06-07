const bcrypt = require("bcryptjs");

exports.hashPassword = (password) =>
  bcrypt.hash(password, +process.env.HASH_SALT);

exports.comparePassword = (password, hashpassword) =>
  bcrypt.compare(password, hashpassword);
