const { logingValidate } = require("../validators/auth-validators");
const adminService = require("../services/admin-service");

exports.register = (req, res) => {
  res.status(200).json({ message: "ได้แล้วจ้า" });
};

exports.login = async (req, res, next) => {
  try {
    const value = logingValidate(req.body);
    const checkadmin = await adminService.getAdminByName(value.adminName);
    if (!checkadmin) {
      res.status(400).json({ message: "not have" });
    }

    const checkpassword = await adminService.checkPassword(value.password);
    if (!checkpassword) {
      res.status(400).json({ message: "not have" });
    }
    res.json({ message: "all good" });
  } catch (err) {
    next(err);
  }
};
