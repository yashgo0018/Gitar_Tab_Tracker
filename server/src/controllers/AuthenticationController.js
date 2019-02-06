const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { authentication } = require("../config/config");

function makeResponse(user) {
  const userJson = user.toJSON();
  userJson.password = undefined;
  return {
    user: userJson,
    token: jwt.sign(userJson, authentication.jwtSecreatKey, {
      expiresIn: authentication.token_validity
    }),
    validity: authentication.token_validity
  };
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(makeResponse(user));
    } catch (err) {
      res.status(400).send({
        error: "This email is already in use"
      });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email
        }
      });
      if (!user) {
        res.status(403).send({
          error: "Login Credentials are Wrong."
        });
      }
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        res.status(403).send({
          error: "Login Credentials are Wrong."
        });
      } else {
        res.send(makeResponse(user));
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "While Logging in Something went wrong."
      });
    }
  }
};
