const verifyToken = require("../services/token-service");
const adminService = require("../services/admin-service");
const createError = require("../utils/create-error");

module.exports = async (req, res, next) => {
  try {
    const authenticate = req.headers.authorization;
    // res.json(req.headers);
    if (!authenticate || !authenticate.startsWith("Bearer ")) {
      createError("Not Have Bearer", 400);
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      createError("Not Have Token", 400);
    }

    const payment = verifyToken.checkToken(token);
    const checkadmin = await adminService.getAdminByName(payment.id);
    if (!checkadmin) {
      createError("Not Have Admin", 400);
    }

    req.user = checkadmin;
    next();
  } catch (err) {
    next(err);
  }
};
