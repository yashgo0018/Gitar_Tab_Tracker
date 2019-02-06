require("dotenv").config();
const { Op } = require("sequelize");
const path = require("path");
const BASE_DIR = path.dirname(path.dirname(__dirname));
module.exports = {
  port: process.env.PORT,
  db: {
    database: process.env.DB_NAME || "tabtracker",
    user: process.env.DB_USER || "tabtracker",
    password: process.env.DB_PASSWORD || "tabtracker",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      operatorsAliases: Op,
      host: process.env.HOST || "localhost",
      storage: path.join(BASE_DIR, "tabtracker.sqlite3")
    }
  },
  authentication: {
    jwtSecreatKey: process.env.jwtSecreatKey || "12A9926126B8CC39C8EED7F74C89C",
    token_validity: 60 * 60 * 24 * 2
  }
};
