const {
  logingValidate,
  registerValidate,
} = require("../validators/auth-validators");
const adminService = require("../services/admin-service");
const bcryptService = require("../services/bcrypt-service");
const genAccessToken = require("../services/token-service");

exports.register = async (req, res, next) => {
  try {
    const value = registerValidate(req.body);
    const checkinputregister = await adminService.getAdminByName(
      value.adminName || value.adminEmail
    );
    if (checkinputregister) {
      res
        .status(400)
        .json({ message: "Admin Name or Email Already to use na" });
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
    const value = logingValidate(req.body);
    const checkadmin = await adminService.getAdminByName(value.adminName);
    if (!checkadmin) {
      res.status(400).json({ message: "not have" });
    }

    const checkpassword = await bcryptService.comparePassword(
      value.password,
      checkadmin.password
    );

    if (!checkpassword) {
      res.status(400).json({ message: "not have" });
    }

    const accessToken = genAccessToken.createToken({ id: value.adminName });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};
