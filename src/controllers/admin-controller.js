const adminService = require("../services/admin-service");
const createError = require("../utils/create-error");

exports.getAdmin = async (req, res, next) => {
  try {
    const adminId = req.user.id;
    console.log(adminId);
    const adminName = await adminService.getAdminName(adminId);
    if (!adminName) {
      throw createError("Admin not found");
    }
    res.json(adminName);
  } catch (err) {
    next(err);
  }
};
