const express = require("express");

const authController = require("../controllers/auth-controller");
const customerController = require("../controllers/customer-controller");
const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/customer", customerController.addCustomer);

module.exports = router;
