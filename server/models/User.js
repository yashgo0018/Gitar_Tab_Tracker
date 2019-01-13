module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {
    fname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });
