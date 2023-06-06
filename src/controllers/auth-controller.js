const { logingValidate } = require("../validators/auth-validators");

exports.register = (req, res) => {
  res.status(200).json({ message: "ได้แล้วจ้า" });
};

exports.login = async (req, res, next) => {
  const value = logingValidate(req.body);
  res.status(200).json({ message: "ready" });
};
