const express = require("express");

const customerController = require("../controllers/customer-controller");
const adminController = require("../controllers/admin-controller");
const router = express.Router();

router.post("/", customerController.addCustomer);
router.delete("/customer/:id", customerController.delCustomer);
router.put("/:id", customerController.updateCustomer);
router.get("/allcustomer", customerController.getAllCustomer);
router.get("/allcustomer/:id", customerController.getCustomerWithCondition);
router.get("/search", customerController.searchCustomer);



router.get("/", adminController.getAdmin);

module.exports = router;
