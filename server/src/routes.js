const { register, login } = require("./controllers/AuthenticationController");
const { registerPolicy } = require("./policies/AuthenticationControllerPolicy");
const Joi = require("joi");

module.exports = app => {
  app.post("/register", registerPolicy, register);
  app.post("/login", login);
};
