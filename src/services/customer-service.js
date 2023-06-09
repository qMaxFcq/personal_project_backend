const { Customer } = require("../models");

exports.getCustomerById = (customerId) =>
  Customer.findOne({ where: { customerId: customerId } });

exports.getAllCustomer = () => Customer.findAll();

exports.createCustomer = (customer) => Customer.create(customer);
