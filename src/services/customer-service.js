const { Customer, Typeorder, Statuscustomer } = require("../models");

const { Op } = require("sequelize");

exports.getCustomerById = (customerId) =>
  Customer.findOne({ where: { customerId: customerId } });

exports.getAllCustomer = () => {
  return Customer.findAll({
    include: [{ model: Typeorder }, { model: Statuscustomer }],
  });
};

exports.createCustomer = (customer) => Customer.create(customer);
