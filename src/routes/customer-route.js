const express = require("express");

const customerController = require("../controllers/customer-controller");
const router = express.Router();

router.post("/", customerController.addCustomer);
router.post("/:id", customerController.updateCustomer);
router.get("/allcustomer", customerController.getAllCustomer);
router.get("/allcustomer/:id", customerController.getCustomerWithCondition);
router.delete("/:id", customerController.delCustomer);

module.exports = router;
