const verifyToken = require("../services/token-service");
const adminService = require("../services/admin-service");

module.exports = async (req, res, next) => {
  try {
    const authenticate = req.headers.authorization;
    // res.json(req.headers);
    if (!authenticate || !authenticate.startsWith("Bearer ")) {
      res.json("errrrrrr");
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.json("token err");
    }

    const payment = verifyToken.checkToken(token);
    const checkadmin = await adminService.getAdminByName(payment.id);
    if (!checkadmin) {
      res.json("checkadmin errrrrrr");
    }

    req.user = checkadmin;
    next();
  } catch (err) {
    next(err);
  }
};
