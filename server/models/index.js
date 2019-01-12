const path = require("path");
const fs = require("fs");
const Sequelize = require("sequelize");
const { db } = require("../config/config");

const database = {};

const sequelize = new Sequelize(db.database, db.user, db.password, db.options);

fs.readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    database[model.name] = model;
  });

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
