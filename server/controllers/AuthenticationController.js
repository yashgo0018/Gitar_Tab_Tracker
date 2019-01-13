const { User } = require("../models");

module.exports = {
  async register(req, res) {
    console.log(req.body);
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "This email is already in use"
      });
    }
  }
};
