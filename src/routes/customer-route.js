const express = require("express");

const customerController = require("../controllers/customer-controller");
const router = express.Router();

router.post("/", customerController.addCustomer);
router.get("/allcustomer", customerController.getAllCustomer);
router.post("/:customerId", customerController.updateCustomer);
router.delete("/:customerId", customerController.delCustomer);

module.exports = router;
