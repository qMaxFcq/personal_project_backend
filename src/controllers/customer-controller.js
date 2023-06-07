const { customerSchema } = require("../validators/auth-validators");
const customerService = require("../services/customer-service");

exports.addCustomer = async (req, res, next) => {
  try {
    const value = customerSchema(req.body);
    const checkCustomer = await customerService.getCustomerById(
      value.customerId
    );
    if (checkCustomer) {
      res.json("have user now!!");
    }
    const customer = customerService.createCustomer(value);
    res.json("done");
  } catch (err) {
    next(err);
  }
};
