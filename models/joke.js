const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Joke = sequelize.define("Joke", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.STRING, allowNull: false },
  reponse: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Joke;
