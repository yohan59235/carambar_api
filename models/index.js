const sequelize = require("../config/database");
const Joke = require("./joke");

const initDb = async () => {
  await sequelize.sync();
};

module.exports = { sequelize, Joke, initDb };
