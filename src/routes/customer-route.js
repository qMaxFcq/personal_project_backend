const express = require("express");

const customerController = require("../controllers/customer-controller");
const router = express.Router();

router.post("/customer", customerController.addCustomer);

module.exports = router;
