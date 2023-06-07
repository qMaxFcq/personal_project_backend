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

exports.registerValidate = validate(registerSchema);
exports.logingValidate = validate(loginSchema);
