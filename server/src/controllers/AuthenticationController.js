const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { authentication } = require("../config/config");

function jwtSignUser(user) {
  const Week = 60 * 60 * 24 * 7;
  return jwt.sign(user, authentication.jwtSecreatKey, {
    expiresIn: Week
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      console.log(err);
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
      const isPasswordCorrect = await user.comparePassword(password);
      console.log(isPasswordCorrect);
      if (!user || !isPasswordCorrect) {
        res.status(403).send({
          error: "Login Credentials are Wrong."
        });
      } else {
        const UserJson = user.toJSON();
        const UserToSend = { ...UserJson };
        UserToSend.password = undefined;
        res.send({
          user: UserToSend,
          token: jwtSignUser(UserJson)
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "While Logging in Something went wrong."
      });
    }
  }
};
