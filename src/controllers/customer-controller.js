const { customerSchema } = require("../validators/auth-validators");
const customerService = require("../services/customer-service");
const createError = require("../utils/create-error");

exports.addCustomer = async (req, res, next) => {
  try {
    const value = customerSchema(req.body);
    const checkCustomer = await customerService.getCustomerById(
      value.customerId
    );
    if (checkCustomer) {
      res.json("have user now!!");
    }
    const admin = { adminId: req.user.id };
    const customer = await customerService.createCustomer({
      ...value,
      ...admin,
    });
    res.status(201).json({ message: "done" });
  } catch (err) {
    next(err);
  }
};

exports.delCustomer = async (req, res, next) => {
  try {
    // const
    // res.json("done");
  } catch (err) {
    next(err);
  }
};
