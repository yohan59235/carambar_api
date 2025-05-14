const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Joke = sequelize.define("Joke", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  categorie: { type: DataTypes.STRING, allowNull: false },
  question: { type: DataTypes.STRING, allowNull: false },
  reponse: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Joke;
