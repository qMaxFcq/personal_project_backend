const { customerSchema } = require("../validators/auth-validators");
const {
  Customer,
  Admin,
  Phonerec,
  Shopname,
  Statuscustomer,
  Typeorder,
} = require("../models");
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
      where: { id: req.params.id },
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
        where: { id: req.body.id },
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
        id: req.params.id,
      },
    });
    if (!checkDeleteCustomer) {
      createError("dot have user", 400);
    }
    await Customer.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "delelet success" });
  } catch (err) {
    next(err);
  }
};

exports.getAllCustomer = async (req, res, next) => {
  try {
    const allCustomer = await customerService.getAllCustomer(req.body);
    if (!allCustomer) {
      createError("not have customer");
    }
    res.json(allCustomer);
  } catch (err) {
    next(err);
  }
};

exports.getCustomerWithCondition = async (req, res, next) => {
  try {
    const getCustomer = await Customer.findOne({
      where: { id: req.params.id },
      include: [
        { model: Typeorder },
        { model: Admin },
        { model: Phonerec },
        { model: Shopname },
        { model: Statuscustomer },
      ],
    });
    if (!getCustomer) {
      createError("not have customer");
    }
    res.json(getCustomer);
  } catch (err) {
    next(err);
  }
};
