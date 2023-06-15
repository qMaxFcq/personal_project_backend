const {
  loginValidate,
  registerValidate,
} = require("../validators/auth-validators");
const adminService = require("../services/admin-service");
const createError = require("../utils/create-error");
const bcryptService = require("../services/bcrypt-service");
const genAccessToken = require("../services/token-service");
const { Admin } = require("../models");

exports.register = async (req, res, next) => {
  try {
    const value = registerValidate(req.body);
    const checkinputregister = await adminService.getAdminByName(
      value.adminName || value.adminEmail
    );
    if (checkinputregister) {
      createError("Name or Email Already to Use", 400);
    }
    //ส่ง value.password ไป hash ที่ bcryptService
    value.password = await bcryptService.hashPassword(value.password);
    const userValue = await adminService.createUser(value);
    const accessToken = genAccessToken.createToken({ id: userValue.adminName });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = loginValidate(req.body);
    const checkadmin = await adminService.getAdminByName(value.adminName);
    if (!checkadmin) {
      createError("Admin Name not match or Password wrong!!", 400);
    }

    const checkpassword = await bcryptService.comparePassword(
      value.password,
      checkadmin.password
    );

    if (!checkpassword) {
      createError("Admin Name not match or Password wrong!!", 400);
    }

    const accessToken = genAccessToken.createToken({ id: value.adminName });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};
