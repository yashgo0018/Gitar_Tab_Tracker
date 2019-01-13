const Joi = require("joi");

module.exports = {
  registerPolicy(req, res, next) {
    const schema = {
      fname: Joi.string().regex(new RegExp("^[a-zA-Z]+$")),
      lname: Joi.string().regex(new RegExp("^[a-zA-Z]+$")),
      username: Joi.string().regex(new RegExp("^[a-zA-Z0-9@#!$%^&*]+$")),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z0-9@$!%*?#&]{8,10}$"
        )
      )
    };
    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "fname":
        case "lname":
          res.send({
            error: "Name cannot contain numbers or spaces"
          });
          break;
        case "username":
          res.send({
            error: "Invalid Username"
          });
          break;
        case "email":
          res.send({
            error: "You Provided an Invalid Email"
          });
          break;
        case "password":
          res.send({
            error: `Your Password must:<br>
              1) Be 8 to 32 Character Long<br>
              2) Only contain alphabet and numbers
            `
          });
          break;
        default:
          res.send({
            error: "Invalid Data"
          });
      }
    } else {
      next();
    }
  }
};
