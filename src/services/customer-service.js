const { Customer } = require("../models");

exports.getCustomerById = (customerId) =>
  Customer.findOne({ where: { customerId: customerId } });

exports.createCustomer = (customer) => Customer.create(customer);
