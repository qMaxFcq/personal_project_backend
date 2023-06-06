const Joi = require("joi");
const validate = require("./validate");

const loginSchema = Joi.object({
  adminName: Joi.string().required(),
  password: Joi.string().required(),
});

exports.logingValidate = validate(loginSchema);
