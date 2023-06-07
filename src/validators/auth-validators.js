const Joi = require("joi");
const validate = require("./validate");

const registerSchema = Joi.object({
  adminName: Joi.string().trim().required(),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  adminEmail: Joi.string().email({ tlds: false }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmpassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

const loginSchema = Joi.object({
  adminName: Joi.string().required(),
  password: Joi.string().required(),
});

const customerSchema = Joi.object({
  customerId: Joi.string().trim().required(),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required(),
  orderDetail: Joi.string().trim().required(),
  dateOrder: Joi.string().trim().required(),
  shopId: Joi.string().required(),
  phonerecId: Joi.string().required(),
  typeId: Joi.string().required(),
  statusId: Joi.string().required(),
});

exports.registerValidate = validate(registerSchema);
exports.loginValidate = validate(loginSchema);
exports.customerSchema = validate(customerSchema);
