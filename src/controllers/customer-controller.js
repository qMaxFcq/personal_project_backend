const { customerSchema } = require("../validators/auth-validators");
const { Customer } = require("../models");
const customerService = require("../services/customer-service");
const createError = require("../utils/create-error");

exports.addCustomer = async (req, res, next) => {
  try {
    const value = customerSchema(req.body);
    const checkCustomer = await customerService.getCustomerById(
      value.customerId
    );
    if (checkCustomer) {
      createError("have user now !!", 400);
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

exports.updateCustomer = async (req, res, next) => {
  try {
    const checkUpdateCustomer = await Customer.findOne({
      where: { customerId: req.params.customerId },
    });
    if (!checkUpdateCustomer) {
      createError("not have this user in db", 400);
    }

    await Customer.update(
      {
        customerId: req.body.customerId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        dateOrder: req.body.dateOrder,
        orderDetail: req.body.orderDetail,
        shopId: req.body.shopId,
        phonerecId: req.body.phonerecId,
        typeId: req.body.typeId,
        statusId: req.body.statusId,
      },
      {
        where: { customerId: req.body.customerId },
      }
    );

    res.json("update done");
  } catch (err) {
    next(err);
  }
};

exports.delCustomer = async (req, res, next) => {
  try {
    const checkDeleteCustomer = await Customer.findOne({
      where: {
        customerId: req.params.customerId,
      },
    });
    if (!checkDeleteCustomer) {
      createError("dot have user", 400);
    }
    await Customer.destroy({ where: { customerId: req.params.customerId } });
    res.status(200).json({ message: "delelet success" });
  } catch (err) {
    next(err);
  }
};
