require("dotenv").config();
const { Op } = require("sequelize");

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
      storage: "./tabtracker.sqlite3"
    }
  }
};
