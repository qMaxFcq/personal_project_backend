const express = require("express");

const customerController = require("../controllers/customer-controller");
const router = express.Router();

router.post("/", customerController.addCustomer);
router.post("/:customerId", customerController.updateCustomer);
router.delete("/:customerId", customerController.delCustomer);

module.exports = router;
