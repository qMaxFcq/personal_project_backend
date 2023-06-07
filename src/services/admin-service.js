const { Admin } = require("../models");

exports.getAdminByName = (adminName) =>
  Admin.findOne({ where: { adminName: adminName } });

exports.checkPassword = (password) =>
  Admin.findOne({
    where: {
      password: password,
    },
  });

exports.createUser = (userValue) => Admin.create(userValue);
