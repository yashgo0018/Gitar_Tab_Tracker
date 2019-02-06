const jwt = require("jsonwebtoken");
const { authentication } = require("../config/config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, authentication.jwtSecreatKey);
    req.userInfo = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Auth Failed"
    });
  }
};
