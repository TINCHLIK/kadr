const {Sequelize} = require("sequelize");

module.exports = new Sequelize("kadr", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});
